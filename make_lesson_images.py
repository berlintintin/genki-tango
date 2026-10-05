#!/usr/bin/env python3
"""
make_lesson_images.py — batch image generation for lesson prompt files.

Usage
-----
  python make_lesson_images.py 13                 # one lesson
  python make_lesson_images.py 13 14 15           # several
  python make_lesson_images.py --all              # every prompts/lesson_*.json
  python make_lesson_images.py 13 --limit 3       # test run, first 3 items
  python make_lesson_images.py 13 --dry-run       # show what would happen, no API calls
  python make_lesson_images.py 13 --only q4 q7    # regenerate specific item ids
  python make_lesson_images.py 13 --force         # ignore existing files
  python make_lesson_images.py 13 -q high -s 1536x1024 -w 4

Prompt file format (prompts/lesson_13.json)
-------------------------------------------
{
  "lesson": 13,
  "defaults": { "quality": "medium", "size": "1024x1024" },   # optional
  "items": [
    {
      "id": "intro-hero",
      "file": "intro-hero.png",
      "prompt": "A clean flat-illustration of ...",
      "optional": false,          # optional, default false
      "size": "1536x1024",        # optional per-item override
      "quality": "high",          # optional per-item override
      "background": "transparent" # optional: auto | transparent | opaque
    }
  ]
}
"""

from __future__ import annotations

import argparse
import base64
import concurrent.futures as futures
import hashlib
import json
import os
import random
import sys
import threading
import time
import urllib.request
from dataclasses import dataclass
from pathlib import Path

try:
    from openai import OpenAI
except ImportError:
    sys.exit("The openai package is not installed.  pip install --upgrade openai")


# ------------------------------------------------------------
# Defaults (override any of these from the command line)
# ------------------------------------------------------------

PROMPTS_DIR = Path("prompts")
IMAGES_DIR = Path("images")

MODEL = "gpt-image-1.5"
SIZE = "1024x1024"          # 1024x1024 | 1536x1024 | 1024x1536 | auto
QUALITY = "medium"          # low | medium | high
OUTPUT_FORMAT = "png"       # png | jpeg | webp
WORKERS = 3                 # parallel requests
MAX_ATTEMPTS = 4            # per image, with exponential backoff

VALID_SIZES = {"1024x1024", "1536x1024", "1024x1536", "auto"}
VALID_QUALITY = {"low", "medium", "high", "auto"}

print_lock = threading.Lock()


def log(msg: str = "") -> None:
    with print_lock:
        print(msg, flush=True)


# ------------------------------------------------------------
# Data
# ------------------------------------------------------------

@dataclass
class Job:
    lesson: str
    item_id: str
    prompt: str
    path: Path
    size: str
    quality: str
    background: str | None

    @property
    def prompt_hash(self) -> str:
        seed = f"{self.prompt}|{self.size}|{self.quality}|{self.background}|{MODEL}"
        return hashlib.sha256(seed.encode("utf-8")).hexdigest()[:16]


def safe_name(raw: str, fallback: str, ext: str) -> str:
    """Strip any directory components; guarantee a sane extension."""
    name = Path(str(raw)).name.strip() or f"{fallback}.{ext}"
    if not Path(name).suffix:
        name = f"{name}.{ext}"
    return name


def load_lesson(path: Path, args) -> list[Job]:
    if not path.exists():
        raise FileNotFoundError(f"No prompt file at {path}")

    with path.open(encoding="utf-8") as f:
        data = json.load(f)

    if not isinstance(data, dict) or "items" not in data:
        raise ValueError(f"{path}: expected an object with an 'items' array")

    # The filename decides the output folder; the "lesson" field is only a cross-check,
    # so a copied prompt file can't silently write into another lesson's folder.
    lesson_id = path.stem.replace("lesson_", "")
    if "lesson" in data and str(data["lesson"]) != lesson_id:
        log(f"  ! {path.name} says lesson {data['lesson']} — using {lesson_id} from the filename")

    defaults = data.get("defaults") or {}
    out_dir = IMAGES_DIR / f"lesson_{lesson_id}"

    jobs: list[Job] = []
    seen_ids: set[str] = set()
    seen_files: set[str] = set()

    for index, item in enumerate(data["items"], start=1):
        item_id = str(item.get("id") or f"item-{index:02d}")
        prompt = (item.get("prompt") or "").strip()

        if not prompt:
            raise ValueError(f"{path}: item '{item_id}' has no prompt")
        if item_id in seen_ids:
            raise ValueError(f"{path}: duplicate item id '{item_id}'")
        seen_ids.add(item_id)

        if item.get("optional", False) and not args.include_optional:
            continue
        if args.only and item_id not in args.only:
            continue

        filename = safe_name(item.get("file", item_id), item_id, args.output_format)
        if filename.lower() in seen_files:
            raise ValueError(f"{path}: two items would write to '{filename}'")
        seen_files.add(filename.lower())

        size = args.size or item.get("size") or defaults.get("size") or SIZE
        quality = args.quality or item.get("quality") or defaults.get("quality") or QUALITY

        if size not in VALID_SIZES:
            raise ValueError(f"{path}: item '{item_id}' has bad size '{size}'")
        if quality not in VALID_QUALITY:
            raise ValueError(f"{path}: item '{item_id}' has bad quality '{quality}'")

        jobs.append(
            Job(
                lesson=lesson_id,
                item_id=item_id,
                prompt=prompt,
                path=out_dir / filename,
                size=size,
                quality=quality,
                background=item.get("background") or defaults.get("background"),
            )
        )

    if args.limit is not None:
        jobs = jobs[: args.limit]

    return jobs


# ------------------------------------------------------------
# Manifest — remembers which prompt produced which file
# ------------------------------------------------------------

def manifest_path(lesson: str) -> Path:
    return IMAGES_DIR / f"lesson_{lesson}" / "_manifest.json"


def read_manifest(lesson: str) -> dict:
    p = manifest_path(lesson)
    if p.exists():
        try:
            return json.loads(p.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            pass
    return {}


def write_manifest(lesson: str, data: dict) -> None:
    p = manifest_path(lesson)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(data, indent=2, sort_keys=True), encoding="utf-8")


# ------------------------------------------------------------
# Generation
# ------------------------------------------------------------

def fetch_bytes(entry) -> bytes:
    """gpt-image models return base64; fall back to a URL if one shows up."""
    b64 = getattr(entry, "b64_json", None)
    if b64:
        return base64.b64decode(b64)
    url = getattr(entry, "url", None)
    if url:
        with urllib.request.urlopen(url, timeout=120) as resp:
            return resp.read()
    raise RuntimeError("API response contained no image data")


def generate(client: OpenAI, job: Job, output_format: str) -> None:
    kwargs = {
        "model": MODEL,
        "prompt": job.prompt,
        "size": job.size,
        "quality": job.quality,
        "n": 1,
        "output_format": output_format,
    }
    if job.background:
        kwargs["background"] = job.background

    last_error: Exception | None = None

    for attempt in range(1, MAX_ATTEMPTS + 1):
        try:
            response = client.images.generate(**kwargs)
            data = fetch_bytes(response.data[0])

            # Write to a temp file first so an interrupted run never
            # leaves a half-written PNG that looks "already done".
            job.path.parent.mkdir(parents=True, exist_ok=True)
            tmp = job.path.with_suffix(job.path.suffix + ".part")
            tmp.write_bytes(data)
            tmp.replace(job.path)
            return

        except Exception as exc:  # noqa: BLE001 — retry anything transient
            last_error = exc
            message = str(exc).lower()
            fatal = any(
                s in message
                for s in ("invalid_api_key", "authentication", "billing", "content_policy", "moderation")
            )
            if fatal or attempt == MAX_ATTEMPTS:
                break
            delay = min(30, 2 ** attempt) + random.uniform(0, 1.5)
            log(f"    retry {attempt}/{MAX_ATTEMPTS - 1} in {delay:.1f}s — {exc}")
            time.sleep(delay)

    raise RuntimeError(str(last_error))


# ------------------------------------------------------------
# CLI
# ------------------------------------------------------------

def parse_args(argv: list[str]) -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Generate lesson images from a JSON prompt file.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    p.add_argument("lessons", nargs="*", help="lesson number(s), e.g. 13 14")
    p.add_argument("--all", action="store_true", help="process every prompts/lesson_*.json")
    p.add_argument("--limit", type=int, default=None, help="only the first N items (test runs)")
    p.add_argument("--only", nargs="+", metavar="ID", help="only these item ids")
    p.add_argument("--include-optional", action="store_true", help="include items marked optional")
    p.add_argument("--force", action="store_true", help="regenerate even if the file exists")
    p.add_argument("--dry-run", action="store_true", help="list the work, make no API calls")
    p.add_argument("-s", "--size", choices=sorted(VALID_SIZES), help="override size for all items")
    p.add_argument("-q", "--quality", choices=sorted(VALID_QUALITY), help="override quality for all items")
    p.add_argument("-f", "--output-format", choices=["png", "jpeg", "webp"], default=OUTPUT_FORMAT)
    p.add_argument("-w", "--workers", type=int, default=WORKERS, help=f"parallel requests (default {WORKERS})")
    p.add_argument("--prompts-dir", type=Path, default=PROMPTS_DIR)
    p.add_argument("--images-dir", type=Path, default=IMAGES_DIR)

    args = p.parse_args(argv)
    if not args.lessons and not args.all:
        p.error("give one or more lesson numbers, or --all")
    if args.only:
        args.only = set(args.only)
    return args


def main(argv: list[str]) -> int:
    global PROMPTS_DIR, IMAGES_DIR

    args = parse_args(argv)
    PROMPTS_DIR = args.prompts_dir
    IMAGES_DIR = args.images_dir

    if args.all:
        files = sorted(PROMPTS_DIR.glob("lesson_*.json"))
        if not files:
            log(f"No prompt files found in {PROMPTS_DIR}/")
            return 1
    else:
        files = [PROMPTS_DIR / f"lesson_{n}.json" for n in args.lessons]

    # Collect all work up front so bad JSON fails before any money is spent.
    all_jobs: list[Job] = []
    for path in files:
        try:
            all_jobs.extend(load_lesson(path, args))
        except (FileNotFoundError, ValueError, json.JSONDecodeError) as exc:
            log(f"✗ {exc}")
            return 1

    if not all_jobs:
        log("Nothing to do — every item was filtered out.")
        return 0

    manifests = {j.lesson: read_manifest(j.lesson) for j in all_jobs}

    todo: list[Job] = []
    skipped = 0
    for job in all_jobs:
        record = manifests[job.lesson].get(job.item_id, {})
        exists = job.path.exists()
        changed = record.get("hash") not in (None, job.prompt_hash)

        if exists and not args.force and not changed:
            skipped += 1
            continue
        if exists and changed:
            log(f"  ~ {job.item_id}: prompt changed since last run, regenerating")
        todo.append(job)

    log()
    log(f"{len(all_jobs)} item(s) · {skipped} already current · {len(todo)} to generate")
    log()

    if args.dry_run:
        for job in todo:
            log(f"  would generate {job.path}  [{job.size} {job.quality}]")
            log(f"    {job.prompt[:100]}{'…' if len(job.prompt) > 100 else ''}")
        return 0

    if not todo:
        log("Everything is up to date.")
        return 0

    if not os.environ.get("OPENAI_API_KEY"):
        log("OPENAI_API_KEY is not set in your environment.")
        return 1

    client = OpenAI()
    done = 0
    failures: list[tuple[Job, str]] = []
    total = len(todo)
    counter_lock = threading.Lock()

    def run(job: Job) -> None:
        nonlocal done
        try:
            generate(client, job, args.output_format)
            with counter_lock:
                done += 1
                n = done
            log(f"[{n}/{total}] ✓ {job.item_id} → {job.path}")
            manifests[job.lesson][job.item_id] = {
                "hash": job.prompt_hash,
                "file": job.path.name,
                "size": job.size,
                "quality": job.quality,
                "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
            }
        except Exception as exc:  # noqa: BLE001
            with counter_lock:
                done += 1
                n = done
            log(f"[{n}/{total}] ✗ {job.item_id} — {exc}")
            failures.append((job, str(exc)))

    started = time.time()
    try:
        with futures.ThreadPoolExecutor(max_workers=max(1, args.workers)) as pool:
            list(pool.map(run, todo))
    except KeyboardInterrupt:
        log("\nInterrupted — saving progress so far.")
    finally:
        for lesson, data in manifests.items():
            write_manifest(lesson, data)

    elapsed = time.time() - started
    log()
    log(f"Done in {elapsed:.0f}s — {total - len(failures)} generated, {len(failures)} failed")

    if failures:
        ids = " ".join(sorted(j.item_id for j, _ in failures))
        log(f"Retry just those with:  --only {ids}")
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))