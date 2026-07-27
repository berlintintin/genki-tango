/* =======================================================================
   lesson_3.js  —  Doodle Tango vocabulary, Lesson 3  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 3.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[3] = [
{id:"taberu",kanji:"食べる",kana:"たべる",romaji:"taberu",en:"to eat",lesson:3,art:`
<circle class="s" cx="72" cy="64" r="17"/>
<path class="s t" d="M66 60 Q69 57 72 60 M76 60 Q79 57 82 60"/>
<ellipse class="f" cx="78" cy="72" rx="5" ry="6"/>
<path class="s" d="M70 81 L68 138 M68 138 L56 170 M68 138 L82 168 M70 96 L96 108"/>
<path class="s r" d="M96 108 L128 82 M100 114 L132 90"/>
<path class="s" d="M112 134 Q112 154 136 154 Q160 154 160 134 Z"/>
<path class="s t" d="M120 126 Q128 118 136 126 Q144 118 152 126"/>`},
{id:"nomu",kanji:"飲む",kana:"のむ",romaji:"nomu",en:"to drink",lesson:3,art:`
<circle class="s" cx="92" cy="62" r="17"/>
<path class="s t" d="M86 58 Q89 55 92 58 M96 58 Q99 55 102 58"/>
<path class="s" d="M90 79 L88 136 M88 136 L74 170 M88 136 L102 168 M90 94 L112 78"/>
<path class="s r" d="M108 58 L130 50 L138 74 L116 82 Z"/>
<path class="s t r" d="M122 42 Q126 34 122 26 M132 40 Q136 32 132 24"/>`},
{id:"neru",kanji:"寝る",kana:"ねる",romaji:"neru",en:"to sleep",lesson:3,art:`
<path class="s" d="M28 132 L172 132 M36 132 L36 156 M164 132 L164 156"/>
<rect class="s t" x="38" y="120" width="44" height="12" rx="6"/>
<circle class="s" cx="58" cy="110" r="16"/>
<path class="s t" d="M50 110 L56 110 M62 110 L68 110"/>
<path class="s" d="M78 116 Q120 104 164 116 L164 132 L78 132 Z"/>
<path class="s t r" d="M118 56 L134 56 L118 72 L134 72 M146 32 L158 32 L146 44 L158 44"/>`},
{id:"yomu",kanji:"読む",kana:"よむ",romaji:"yomu",en:"to read",lesson:3,art:`
<circle class="s" cx="100" cy="52" r="16"/>
<path class="s t" d="M93 54 L98 54 M102 54 L107 54"/>
<path class="s" d="M100 68 L100 120 M100 120 L84 164 M100 120 L116 164"/>
<path class="s" d="M100 96 L74 86 M100 96 L126 86"/>
<path class="s r" d="M64 84 Q82 76 100 84 Q118 76 136 84 L136 112 Q118 104 100 112 Q82 104 64 112 Z M100 84 L100 112"/>`},
{id:"eiga",kanji:"映画",kana:"えいが",romaji:"eiga",en:"movie",lesson:3,art:`
<rect class="s" x="48" y="86" width="104" height="70" rx="6"/>
<path class="s r" d="M44 60 L152 74 L148 92 L40 78 Z"/>
<path class="s t r" d="M58 62 L70 78 M82 65 L94 81 M106 68 L118 84 M130 71 L142 87"/>
<path class="s t" d="M62 110 L138 110 M62 130 L120 130"/>`},
{id:"ongaku",kanji:"音楽",kana:"おんがく",romaji:"ongaku",en:"music",lesson:3,art:`
<path class="s" d="M76 46 L76 128 M148 34 L148 116"/>
<path class="s" d="M76 54 L148 42 M76 70 L148 58"/>
<ellipse class="f" cx="64" cy="132" rx="13" ry="10"/><ellipse class="fr" cx="136" cy="120" rx="13" ry="10"/>
<path class="s t r" d="M40 62 Q34 72 40 82 M170 68 Q176 78 170 88"/>`},
{id:"ocha",kana:"おちゃ",romaji:"ocha",en:"green tea",lesson:3,art:`
<path class="s" d="M64 84 L136 84 L130 148 Q100 156 70 148 Z"/>
<path class="s t" d="M84 68 Q78 54 86 42 M112 68 Q106 54 114 42"/>
<path class="s" d="M48 158 L152 158"/>
<path class="s t r" d="M88 108 Q100 116 112 108"/>`},
{id:"gakkou",kanji:"学校",kana:"がっこう",romaji:"gakkō",en:"school",lesson:3,art:`
<path class="s" d="M100 36 L160 76 L40 76 Z"/>
<path class="s" d="M52 76 L52 152 L148 152 L148 76"/>
<rect class="s t" x="88" y="116" width="24" height="36"/>
<rect class="s t" x="60" y="90" width="18" height="16"/><rect class="s t" x="122" y="90" width="18" height="16"/>
<circle class="s t r" cx="100" cy="60" r="8"/><path class="s t r" d="M100 56 L100 60 L104 62"/>`},
{id:"toshokan",kanji:"図書館",kana:"としょかん",romaji:"toshokan",en:"library",lesson:3,art:`
<rect class="s" x="44" y="44" width="112" height="116"/>
<path class="s" d="M44 100 L156 100"/>
<path class="s t" d="M56 56 L56 96 M70 56 L70 96 M84 60 L84 96 M98 52 L98 96"/>
<path class="s t r" d="M112 60 L126 56 L134 96 L120 100 Z"/>
<path class="s t" d="M56 112 L56 156 M72 112 L72 156 M88 108 L88 156 M104 112 L104 156 M120 112 L120 156 M136 108 L136 156"/>`},
{id:"terebi",kana:"テレビ",romaji:"terebi",en:"TV",lesson:3,art:`
<rect class="s" x="44" y="64" width="112" height="84" rx="10"/>
<path class="s" d="M78 64 L64 36 M122 64 L136 36"/>
<rect class="s t" x="56" y="76" width="72" height="60" rx="4"/>
<circle class="s t r" cx="142" cy="90" r="6"/><circle class="s t r" cx="142" cy="110" r="6"/>
<path class="s" d="M76 148 L72 160 M124 148 L128 160"/>
<path class="s t" d="M64 94 Q80 86 96 98"/>`}
];
