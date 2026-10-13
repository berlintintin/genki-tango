/* =========================================================================
   Story engine — parses story markup and measures vocab coverage.
   Shared by vocab-flip.html (inlined there) and check.js (command line).

   Sentence markup:
     [かばん]                  vocab word written in kana
     [自転車|じてんしゃ]        vocab word with kanji: surface|reading
     [食べました|たべました|たべる]  conjugated vocab: surface|reading|dictionary form
     {駅前|えきまえ}            NOT a vocab word but has kanji: surface|reading
     plain text               kana and punctuation only (names in katakana are fine)
   ========================================================================= */
(function (root) {
  "use strict";

  const toHiragana = text => text.replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
  // Make vocab forms comparable: hiragana, no 〜, no spaces, no trailing (な)
  const normalize = text => toHiragana(String(text || ""))
    .replace(/[〜～\s　]/g, "").replace(/[（(]な[)）]$/, "");
  const KANJI = /[㐀-鿿々]/;
  const PLAIN_OK = /^[぀-ゟ゠-ヿ、。！？「」『』…・ー〜～\s　,.!?]*$/;

  /* One sentence → list of units. Each unit is something the voice says and
     the underline can sit on: {surface, reading, dict, kind:"vocab"|"word"|"plain"} */
  function parseSentence(markup) {
    const units = [], problems = [];
    const pattern = /\[([^\]]*)\]|\{([^}]*)\}|([^\[\]{}]+)/g;
    let match;
    while ((match = pattern.exec(markup))) {
      if (match[1] !== undefined) {
        const [surface, reading, dict] = match[1].split("|");
        if (!surface) { problems.push("empty [ ]"); continue; }
        const spoken = reading || surface;
        if (KANJI.test(spoken)) problems.push(`[${match[1]}] needs a kana reading`);
        units.push({ kind: "vocab", surface, reading: spoken, dict: dict || spoken });
      } else if (match[2] !== undefined) {
        const [surface, reading] = match[2].split("|");
        if (!reading || KANJI.test(reading)) problems.push(`{${match[2]}} needs a kana reading`);
        units.push({ kind: "word", surface, reading: reading || surface });
      } else {
        const text = match[3];
        if (!PLAIN_OK.test(text)) problems.push(`plain text has kanji/other characters: "${text}"`);
        // Split plain runs after punctuation so the underline moves in small steps.
        text.split(/(?<=[、。！？」』…])/).filter(Boolean)
          .forEach(piece => units.push({ kind: "plain", surface: piece, reading: piece }));
      }
    }
    if (/[\[\]{}]/.test(markup.replace(pattern, ""))) problems.push("unbalanced brackets");
    return { units, problems };
  }

  /* Unique words for lessons first..last, same de-duplication as Vocab Flip:
     a kana|kanji pair counts once. vocabByLesson[n] = [[kana, kanji, english], …] */
  function wordsInLessons(vocabByLesson, first, last) {
    const seen = new Set(), words = [];
    for (let lesson = first; lesson <= last; lesson++) {
      (vocabByLesson[lesson] || []).forEach(([kana, kanji, english]) => {
        const key = kana + "|" + kanji;
        if (seen.has(key)) return;
        seen.add(key);
        words.push({ key, kana, kanji, english, lesson,
          forms: kana.split(/[／\/]/).map(normalize).concat(kanji ? kanji.split(/[／\/]/).map(k => k.replace(/[〜～\s]/g, "")) : []) });
      });
    }
    return words;
  }

  /* Which vocab entries does this unit use? Matches the dictionary form against
     each word's kana or kanji; if several share the kana (かく write / draw),
     the kanji in the surface picks between them. */
  function matchUnit(unit, words) {
    const ref = unit.dict;
    let found = words.filter(w => w.forms.includes(normalize(ref)) || w.forms.includes(ref));
    if (found.length > 1) {
      const surfaceKanji = [...(unit.surface + ref)].filter(ch => KANJI.test(ch));
      const byKanji = found.filter(w => w.kanji && surfaceKanji.some(ch => w.kanji.includes(ch)));
      if (byKanji.length) found = byKanji;
      const meanings = new Set(found.map(w => w.english));
      if (meanings.size > 1) found = [found[0]];   // still ambiguous: count the earliest one only
    }
    return found;
  }

  /* A story is {chapters:[{title, titleEn, paragraphs}]}; a single chapter is {paragraphs}. */
  const paragraphsOf = story => story.chapters ? story.chapters.flatMap(c => c.paragraphs) : story.paragraphs;

  /* Coverage of one story (or chapter). paragraphs = [[ [ja, en], … ], …] */
  function measureStory(story, vocabByLesson) {
    const [first, last] = story.lessons;
    const target = wordsInLessons(vocabByLesson, first, last);
    const allowed = wordsInLessons(vocabByLesson, 1, last);
    const used = new Map(), problems = [], notVocab = [];
    let sentenceCount = 0;
    paragraphsOf(story).forEach((paragraph, p) => paragraph.forEach(([ja, en], s) => {
      sentenceCount++;
      const where = `¶${p + 1}.${s + 1}`;
      if (!en) problems.push(`${where}: no English`);
      const { units, problems: unitProblems } = parseSentence(ja);
      unitProblems.forEach(x => problems.push(`${where}: ${x}`));
      units.filter(u => u.kind === "vocab").forEach(u => {
        const hits = matchUnit(u, allowed);
        if (!hits.length) notVocab.push(`${where}: [${u.surface}] → "${u.dict}" isn't a vocab word in lessons 1–${last}`);
        hits.forEach(w => used.set(w.key, (used.get(w.key) || 0) + 1));
      });
    }));
    const usedTarget = target.filter(w => used.has(w.key));
    const missing = target.filter(w => !used.has(w.key));
    return { first, last, total: target.length, used: usedTarget.length,
      percent: target.length ? 100 * usedTarget.length / target.length : 0,
      missing, problems, notVocab, sentenceCount };
  }

  const api = { paragraphsOf, toHiragana, normalize, parseSentence, wordsInLessons, matchUnit, measureStory };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.StoryEngine = api;
})(typeof window !== "undefined" ? window : globalThis);
