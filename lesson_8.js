/* =======================================================================
   lesson_8.js  —  Doodle Tango vocabulary, Lesson 8  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 8.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[8] = [
{id:"souji",kanji:"掃除する",kana:"そうじする",romaji:"sōji suru",en:"to clean",lesson:8,art:`
<circle class="s" cx="78" cy="52" r="16"/><path class="s t" d="M72 50 L78 50 M84 50 L90 50 M76 60 Q80 63 84 60"/>
<path class="s" d="M82 68 Q92 95 88 120 M88 120 L68 158 M88 120 L108 152 M86 82 L112 96 M90 100 L118 108"/>
<path class="s r" d="M120 70 L138 140"/>
<path class="s r" d="M128 140 Q138 136 150 142 L158 168 M134 143 L138 166 M141 141 L148 165 M148 142 L156 166"/>
<circle class="s t" cx="172" cy="150" r="6"/><circle class="s t" cx="184" cy="138" r="4"/>
<path class="s t" d="M118 160 Q130 168 144 172"/>`},
{id:"ame",kanji:"雨",kana:"あめ",romaji:"ame",en:"rain",lesson:8,art:`
<path class="s" d="M56 76 Q46 56 66 50 Q70 30 94 34 Q108 22 126 34 Q150 32 150 54 Q166 62 156 78 Q130 88 100 84 Q72 90 56 76 Z"/>
<path class="s t r" d="M62 104 L54 124 M90 100 L82 120 M118 104 L110 124 M146 100 L138 120 M76 138 L68 158 M104 134 L96 154 M132 138 L124 158"/>`},
{id:"sentaku",kanji:"洗濯する",kana:"せんたくする",romaji:"sentaku suru",en:"to do laundry",lesson:8,art:`
<rect class="s" x="50" y="44" width="100" height="120" rx="10"/>
<circle class="s" cx="100" cy="112" r="32"/><path class="s t r" d="M76 108 Q88 96 100 108 Q112 120 124 108"/>
<circle class="s t" cx="66" cy="58" r="4"/><path class="s t" d="M120 58 L142 58"/>
<circle class="s t" cx="42" cy="36" r="5"/><circle class="s t" cx="158" cy="30" r="7"/><circle class="s t" cx="168" cy="52" r="4"/>`},
{id:"ryouri",kanji:"料理する",kana:"りょうりする",romaji:"ryōri suru",en:"to cook",lesson:8,art:`
<path class="s" d="M50 96 L150 96 L144 152 Q100 162 56 152 Z"/>
<path class="s" d="M50 104 L34 96 M150 104 L166 96"/>
<path class="s t r" d="M70 80 Q62 66 70 54 M100 76 Q92 62 100 50 M130 80 Q122 66 130 54"/>
<path class="s" d="M124 96 L152 44"/><ellipse class="s" cx="156" cy="38" rx="10" ry="7"/>
<path class="s t" d="M56 170 L144 170"/>`},
{id:"arau",kanji:"洗う",kana:"あらう",romaji:"arau",en:"to wash",lesson:8,art:`
<path class="s" d="M56 72 L56 44 L110 44 L110 58"/>
<path class="s t r" d="M56 78 Q52 88 56 94 Q60 88 56 78 Z"/>
<ellipse class="s" cx="100" cy="136" rx="52" ry="20"/><ellipse class="s t" cx="100" cy="132" rx="34" ry="10"/>
<rect class="s r" x="120" y="88" width="34" height="24" rx="6"/>
<circle class="s t" cx="70" cy="102" r="6"/><circle class="s t" cx="88" cy="92" r="4"/><circle class="s t" cx="108" cy="80" r="5"/>`},
{id:"hare",kanji:"晴れ",kana:"はれ",romaji:"hare",en:"sunny",lesson:8,art:`
<circle class="s r" cx="100" cy="100" r="36"/>
<path class="s r" d="M100 44 L100 26 M100 156 L100 174 M44 100 L26 100 M156 100 L174 100 M62 62 L48 48 M138 62 L152 48 M62 138 L48 152 M138 138 L152 152"/>
<path class="s t" d="M86 96 Q90 92 94 96 M106 96 Q110 92 114 96"/><path class="s t" d="M88 110 Q100 120 112 110"/>`},
{id:"kumori",kanji:"曇り",kana:"くもり",romaji:"kumori",en:"cloudy",lesson:8,art:`
<path class="s" d="M40 96 Q30 76 50 70 Q54 50 78 54 Q92 42 110 54 Q134 52 134 74 Q150 82 140 96 Q114 106 84 102 Q56 108 40 96 Z"/>
<path class="s t" d="M96 128 Q90 116 104 112 Q108 100 126 104 Q136 96 150 104 Q168 102 168 118 Q178 126 168 134 Q140 142 118 136 Q104 140 96 128 Z"/>
<circle class="s t r" cx="168" cy="44" r="14" stroke-dasharray="5 7"/>`},
{id:"isogashii",kanji:"忙しい",kana:"いそがしい",romaji:"isogashii",en:"busy",lesson:8,art:`
<circle class="s" cx="80" cy="48" r="15"/><path class="s t" d="M74 46 L80 46 M84 46 L90 46"/>
<path class="s" d="M84 63 Q96 86 90 108 M90 108 L64 140 M90 108 L116 136 L134 128"/>
<path class="s" d="M86 74 L58 66 M88 80 L116 84"/>
<rect class="s t r" x="118" y="60" width="26" height="18" transform="rotate(12 131 69)"/>
<rect class="s t r" x="40" y="88" width="24" height="16" transform="rotate(-14 52 96)"/>
<circle class="s t" cx="160" cy="40" r="18"/><path class="s t" d="M160 30 L160 40 L168 44"/>
<path class="s t" d="M40 140 Q34 148 40 156 M52 148 Q46 156 52 164"/>`},
{id:"yuumei",kanji:"有名",kana:"ゆうめい",romaji:"yūmei",en:"famous",lesson:8,art:`
<circle class="s" cx="100" cy="62" r="17"/><path class="s t" d="M92 58 Q96 54 100 58 M104 58 Q108 54 112 58 M94 70 Q100 75 106 70"/>
<path class="s" d="M96 79 Q92 106 94 128 M94 128 L78 164 M94 128 L112 162"/>
<path class="s" d="M94 92 L68 82 M98 94 L126 86"/>
<path class="s r" d="M100 20 L104 30 L114 30 L106 37 L109 47 L100 41 L91 47 L94 37 L86 30 L96 30 Z"/>
<path class="s t" d="M40 60 L52 68 M36 84 L50 86 M164 56 L152 66 M168 80 L154 84"/>
<path class="s t r" d="M44 128 L58 120 M48 140 L60 136"/>`}
];
