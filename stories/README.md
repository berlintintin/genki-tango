# Story time — how the stories work

Vocab Flip's **📚 Story time** mode reads these stories aloud, sliding an underline under each word.
Each story is written to use a set percentage of the vocab from a lesson range (for example, 90% of
lessons 1–15). Vocab Flip checks that against the real `lesson_N.js` files and shows the count on the
story list.

## Files

| File | What it is |
|---|---|
| `story-engine.js` | Reads the story markup and works out which vocab words a story uses. Used by Vocab Flip and the checker. |
| `story_1.js`, `story_2.js`, … | One story each. Vocab Flip loads them in order until the first missing number, so new stories just need the next number. |
| `check-story.js` | Command-line checker: `node stories/check-story.js stories/story_3.js` (run from the genki-tango folder). |

## Getting a new story

Ask Claude something like this (attach `story-engine.js`, `check-story.js` and the lesson files, or
give it this folder):

> Write story_3.js for Story time: **90% of lessons 3–12**, silly but it has to make sense.
> Grammar only up to Genki lesson 12. Follow the format in stories/README.md, and run
> check-story.js until it's at or over the goal with no problems.

Then put the new file in this folder, commit and push. It shows up in Story time automatically.

## Story file format

```js
window.GENKI_STORIES = window.GENKI_STORIES || {};
window.GENKI_STORIES[3] = {
  title: "日本語のタイトル",
  titleEn: "English title",
  lessons: [3, 12],      // the range the goal is measured on
  goal: 90,              // percent of that range's words the story must use
  chapters: [
    { title: "第一章", titleEn: "Chapter 1",
      paragraphs: [
        [ ["sentence markup", "English translation"], ["…", "…"] ],
        [ ["…", "…"] ]
      ] }
  ]
};
```

Each sentence is `[markup, English]`. The English is what the **EN** button shows.

## Sentence markup

| Write | Meaning |
|---|---|
| `[かばん]` | a vocab word, in kana |
| `[自転車\|じてんしゃ]` | a vocab word with kanji: `surface\|reading` |
| `[食べました\|たべました\|たべる]` | a conjugated vocab word: `surface\|reading\|dictionary form` |
| `[三枚\|さんまい\|〜まい]` | a counter or 〜 entry: give the vocab list's form as the dictionary form |
| `{駅前\|えきまえ}` | a word that is *not* in the vocab, written with kanji |
| plain text | particles, endings, names: **kana and punctuation only** |

- The reading is what the voice says, and it's shown as furigana above the kanji.
- Words with the same kana (かく write/draw, きる wear/cut) are told apart by the kanji in the
  dictionary form: `[切って|きって|切る]`.
- Words from lessons after the story's range shouldn't be used. The checker flags any bracketed word
  that isn't in lessons 1 to the range's last lesson.
