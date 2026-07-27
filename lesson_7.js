/* =======================================================================
   lesson_7.js  —  Doodle Tango vocabulary, Lesson 7  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 7.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[7] = [
{id:"megane",kana:"めがね",romaji:"megane",en:"glasses",lesson:7,art:`
<path class="s" d="M55 42 Q100 22 145 42 Q168 78 158 128 Q130 168 100 166 Q70 168 42 128 Q32 78 55 42 Z"/>
<circle class="s r" cx="74" cy="95" r="24"/><circle class="s r" cx="126" cy="95" r="24"/>
<path class="s r" d="M98 95 Q100 90 102 95"/><path class="s t r" d="M50 92 Q42 88 38 80 M150 92 Q158 88 162 80"/>
<path class="s" d="M66 96 Q74 90 82 96 M118 96 Q126 90 134 96"/><path class="s" d="M82 135 Q100 148 118 135"/>
<path class="s t" d="M132 82 L138 76 M138 82 L132 76"/>`},
{id:"utau",kanji:"歌う",kana:"うたう",romaji:"utau",en:"to sing",lesson:7,art:`
<circle class="s" cx="86" cy="70" r="18"/><path class="s t" d="M78 66 Q82 62 86 66 M90 64 Q94 60 98 64"/>
<ellipse class="f" cx="90" cy="80" rx="6" ry="8"/><path class="s" d="M84 88 Q80 115 82 138"/>
<path class="s" d="M82 138 L66 172 M82 138 L98 170"/><path class="s" d="M82 100 L56 92 M86 102 Q104 100 108 88"/>
<path class="s t r" d="M128 60 L128 38 Q138 36 140 42"/><ellipse class="fr" cx="124" cy="61" rx="5" ry="4"/>
<path class="s t r" d="M156 92 L156 74"/><ellipse class="fr" cx="152" cy="93" rx="5" ry="4"/>
<path class="s t" d="M104 74 Q110 78 104 84 M112 70 Q120 78 112 88"/>`},
{id:"kami",kanji:"髪",kana:"かみ",romaji:"kami",en:"hair",lesson:7,art:`
<circle class="s" cx="100" cy="82" r="30"/>
<path class="s r" d="M72 62 Q58 105 66 155 M82 55 Q72 110 82 160 M128 62 Q142 105 134 155 M118 55 Q128 110 118 160"/>
<path class="s r" d="M70 62 Q100 30 130 62"/>
<path class="s t" d="M88 80 Q92 76 96 80 M104 80 Q108 76 112 80"/><path class="s t" d="M92 94 Q100 100 108 94"/>
<path class="s t" d="M150 130 L166 122 M152 140 L168 140 M150 150 L166 158"/>`},
{id:"me",kanji:"目",kana:"め",romaji:"me",en:"eye",lesson:7,art:`
<path class="s" d="M28 100 Q100 42 172 100 Q100 158 28 100 Z"/>
<circle class="s" cx="100" cy="100" r="26"/><circle class="f" cx="100" cy="100" r="11"/>
<circle style="fill:#fff" cx="108" cy="92" r="4"/>
<path class="s t r" d="M56 62 L48 50 M84 50 L80 36 M116 50 L120 36 M144 62 L152 50"/>`},
{id:"kuchi",kanji:"口",kana:"くち",romaji:"kuchi",en:"mouth",lesson:7,art:`
<path class="s r" d="M38 96 Q70 64 100 82 Q130 64 162 96 Q130 156 100 152 Q70 156 38 96 Z"/>
<path class="s t" d="M38 96 Q100 112 162 96"/>
<path class="s t" d="M70 100 L70 112 M100 106 L100 120 M130 100 L130 112"/>`},
{id:"segatakai",kanji:"背が高い",kana:"せがたかい",romaji:"se ga takai",en:"tall",lesson:7,art:`
<circle class="s" cx="70" cy="36" r="13"/><path class="s" d="M70 49 L70 120 M70 120 L56 166 M70 120 L84 166 M70 70 L52 90 M70 70 L88 90"/>
<circle class="s" cx="140" cy="110" r="11"/><path class="s" d="M140 121 L140 148 M140 148 L130 168 M140 148 L150 168 M140 130 L128 140 M140 130 L152 140"/>
<path class="s r" d="M108 160 L108 40 M100 52 L108 40 L116 52"/>`},
{id:"kaburu",kana:"かぶる",romaji:"kaburu",en:"to put on (hat)",lesson:7,art:`
<path class="s r" d="M64 52 Q100 20 136 52 L144 60 Q100 74 56 60 Z"/>
<path class="s t r" d="M100 82 L100 96 M92 88 L100 96 L108 88"/>
<circle class="s" cx="100" cy="122" r="20"/>
<path class="s t" d="M92 118 Q96 114 100 118 M104 118 Q108 114 112 118"/><path class="s t" d="M94 130 Q100 135 106 130"/>
<path class="s" d="M100 142 L100 168 M100 150 L82 160 M100 150 L118 160"/>`},
{id:"ojiisan",kana:"おじいさん",romaji:"ojiisan",en:"grandfather",lesson:7,art:`
<circle class="s" cx="96" cy="58" r="20"/>
<path class="s t" d="M86 54 Q90 51 94 54 M100 54 Q104 51 108 54"/>
<path class="s t" d="M84 68 Q96 84 108 68 Q106 80 96 82 Q86 80 84 68 Z"/>
<path class="s" d="M94 84 Q86 112 88 140 M88 140 L78 172 M88 140 L100 170"/>
<path class="s" d="M92 96 L70 110 M94 100 L118 112"/>
<path class="s r" d="M124 108 L128 170 M118 170 L138 170"/>
<path class="s t" d="M78 40 Q86 32 96 34"/>`},
{id:"kiru",kanji:"着る",kana:"きる",romaji:"kiru",en:"to wear",lesson:7,art:`
<path class="s" d="M70 56 L52 70 L64 92 L76 84 L76 156 L124 156 L124 84 L136 92 L148 70 L130 56 Q116 70 100 70 Q84 70 70 56 Z"/>
<path class="s t r" d="M100 96 L100 122 M90 104 Q100 98 110 104"/>
<circle class="s t r" cx="100" cy="134" r="6"/>`},
{id:"kawaii",kana:"かわいい",romaji:"kawaii",en:"cute",lesson:7,art:`
<path class="s" d="M58 66 L52 34 L80 52 Q100 44 120 52 L148 34 L142 66 Q156 84 148 110 Q130 140 100 138 Q70 140 52 110 Q44 84 58 66 Z"/>
<path class="s t" d="M78 92 Q84 86 90 92 M110 92 Q116 86 122 92"/>
<path class="s t" d="M94 106 Q100 112 106 106"/><path class="s t" d="M96 104 L100 108 L104 104"/>
<path class="s t r" d="M40 120 Q34 110 42 106 Q50 102 52 112 Q54 102 62 106 Q70 110 64 120 L52 132 Z"/>
<path class="s t r" d="M148 130 Q144 124 149 121 Q154 118 156 124 Q158 118 163 121 Q168 124 164 130 L156 138 Z"/>`}
];
