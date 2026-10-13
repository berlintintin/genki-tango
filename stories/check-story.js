/* =========================================================================
   check-story.js — checks a story file against the real lesson files.

   Run from the genki-tango folder:
     node stories/check-story.js stories/story_3.js

   Prints: how many of the range's words the story uses (and the % goal),
   markup problems, bracketed words that aren't vocab, and the words still
   missing — so a story can be topped up until it reaches its goal.
   ========================================================================= */
const fs = require("fs"), path = require("path");
const StoryEngine = require("./story-engine.js");

const storyFile = process.argv[2];
if (!storyFile) { console.log("Usage: node stories/check-story.js stories/story_N.js"); process.exit(1); }

// Load lesson_1.js, lesson_2.js, … from the folder above, the same way the games do.
global.window = { GENKI_LESSONS: {}, GENKI_STORIES: {} };
const vocabByLesson = {};
for (let n = 1; n <= 40; n++) {
  const lessonFile = path.join(__dirname, "..", `lesson_${n}.js`);
  if (!fs.existsSync(lessonFile)) break;
  require(lessonFile);
  vocabByLesson[n] = (window.GENKI_LESSONS[n] || []).map(w => [w.kana, w.kanji || "", w.en]);
}
require(path.resolve(storyFile));
const story = Object.values(window.GENKI_STORIES)[0];
const result = StoryEngine.measureStory(story, vocabByLesson);

const [first, last] = story.lessons;
console.log(`${story.title} — ${result.sentenceCount} sentences`);
console.log(`Lessons ${first}–${last}: uses ${result.used} of ${result.total} words = ${result.percent.toFixed(1)}% (goal ${story.goal}%) ${result.percent >= story.goal ? "✓" : "✗ NOT YET"}`);
result.problems.forEach(line => console.log("PROBLEM   " + line));
result.notVocab.forEach(line => console.log("NOT VOCAB " + line));
if (process.argv.includes("--missing") || result.percent < story.goal) {
  console.log("Words not used yet:");
  result.missing.forEach(w => console.log(`  L${w.lesson} ${w.kana}${w.kanji ? " (" + w.kanji + ")" : ""} = ${w.english}`));
}
