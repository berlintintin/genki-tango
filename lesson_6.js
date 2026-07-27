/* =======================================================================
   lesson_6.js  —  Doodle Tango vocabulary, Lesson 6  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 6.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[6] = [
{id:"akeru",kanji:"開ける",kana:"あける",romaji:"akeru",en:"to open",lesson:6,art:`
<path class="s" d="M56 44 L120 44 M56 44 L56 160 M120 44 L120 160 M56 160 L120 160"/>
<path class="s r" d="M56 44 L102 60 L102 174 L56 160 Z"/>
<circle class="f" cx="94" cy="116" r="4"/>
<path class="s t" d="M134 92 L166 92 M154 80 L166 92 L154 104"/>`},
{id:"denki",kanji:"電気",kana:"でんき",romaji:"denki",en:"electricity / light",lesson:6,art:`
<circle class="s" cx="100" cy="84" r="36"/>
<path class="s" d="M88 118 L88 134 Q88 144 100 144 Q112 144 112 134 L112 118"/>
<path class="s t" d="M88 128 L112 124 M88 136 L112 132"/>
<path class="s r" d="M92 96 L100 76 L108 96"/>
<path class="s t r" d="M100 34 L100 20 M62 48 L52 38 M138 48 L148 38 M54 84 L40 84 M146 84 L160 84"/>`},
{id:"mado",kanji:"窓",kana:"まど",romaji:"mado",en:"window",lesson:6,art:`
<rect class="s" x="52" y="48" width="96" height="104"/>
<path class="s" d="M100 48 L100 152 M52 100 L148 100"/>
<circle class="s t r" cx="76" cy="74" r="10"/>
<path class="s t" d="M114 66 Q126 60 138 68 M112 84 Q126 78 140 86"/>`},
{id:"suwaru",kanji:"座る",kana:"すわる",romaji:"suwaru",en:"to sit",lesson:6,art:`
<path class="s" d="M60 56 L60 158 M60 112 L116 112 M112 112 L112 158"/>
<circle class="s" cx="88" cy="58" r="14"/>
<path class="s t" d="M84 56 Q87 53 90 56 M92 56 Q95 53 98 56"/>
<path class="s" d="M86 72 Q82 92 84 110 L120 110 L120 150 L132 150 M85 84 L106 96"/>`},
{id:"tatsu",kanji:"立つ",kana:"たつ",romaji:"tatsu",en:"to stand",lesson:6,art:`
<circle class="s" cx="100" cy="52" r="16"/>
<path class="s t" d="M94 50 Q97 47 100 50 M104 50 Q107 47 110 50"/>
<path class="s" d="M100 68 L100 128 M100 128 L84 168 M100 128 L116 168 M100 84 L76 104 M100 84 L124 104"/>
<path class="s t r" d="M48 122 L48 96 M42 104 L48 96 L54 104 M152 122 L152 96 M146 104 L152 96 L158 104"/>
<path class="s t" d="M64 172 L136 172"/>`},
{id:"nimotsu",kanji:"荷物",kana:"にもつ",romaji:"nimotsu",en:"baggage",lesson:6,art:`
<rect class="s" x="40" y="84" width="76" height="72" rx="8"/>
<path class="s" d="M58 84 L58 72 Q58 64 66 64 L90 64 Q98 64 98 72 L98 84"/>
<path class="s t" d="M40 108 L116 108"/>
<path class="s r" d="M128 98 L168 98 L172 156 L124 156 Z M136 98 Q136 84 148 84 Q160 84 160 98"/>`},
{id:"ofuro",kanji:"お風呂",kana:"おふろ",romaji:"ofuro",en:"bath",lesson:6,art:`
<path class="s" d="M40 104 L160 104 L152 148 Q100 158 48 148 Z"/>
<circle class="s" cx="92" cy="86" r="16"/>
<path class="s t" d="M86 84 Q89 81 92 84 M96 84 Q99 81 102 84 M88 94 Q92 97 96 94"/>
<path class="s t" d="M54 96 Q50 84 58 74 M136 96 Q132 84 140 74"/>
<path class="s t r" d="M122 94 Q120 86 128 86 Q132 86 132 90 L140 88 Q138 98 129 98 Q122 98 122 94 Z"/>
<path class="s" d="M56 148 L52 164 M144 148 L148 164"/>`},
{id:"shawaa",kana:"シャワー",romaji:"shawā",en:"shower",lesson:6,art:`
<path class="s" d="M56 34 L56 50 Q56 60 68 60 L92 60"/>
<path class="s" d="M92 60 L114 60 L120 80 L86 80 Z"/>
<path class="s t r" d="M92 92 L88 106 M102 94 L100 108 M112 92 L114 106 M96 118 L94 130 M108 120 L110 132"/>
<circle class="s" cx="102" cy="150" r="13"/>
<path class="s t" d="M96 148 Q99 145 102 148 M106 148 Q109 145 112 148"/>
<path class="s" d="M102 163 L102 178"/>`},
{id:"kyoukasho",kanji:"教科書",kana:"きょうかしょ",romaji:"kyōkasho",en:"textbook",lesson:6,art:`
<rect class="s" x="52" y="44" width="88" height="116" rx="6"/>
<path class="s" d="M68 44 L68 160"/>
<path class="s t r" d="M84 76 L124 76 M84 90 L124 90"/>
<path class="s t" d="M84 120 Q96 112 108 120 M84 134 L116 134"/>
<path class="s r" d="M146 62 L168 40 L176 48 L154 70 Z M154 70 L146 62 L143 74 Z"/>`},
{id:"tetsudau",kanji:"手伝う",kana:"てつだう",romaji:"tetsudau",en:"to help",lesson:6,art:`
<rect class="s" x="76" y="98" width="48" height="40"/>
<path class="s t" d="M100 98 L100 138"/>
<circle class="s" cx="52" cy="66" r="13"/>
<path class="s" d="M52 79 L52 120 M52 120 L42 156 M52 120 L62 156 M52 92 L76 104"/>
<circle class="s" cx="148" cy="66" r="13"/>
<path class="s" d="M148 79 L148 120 M148 120 L138 156 M148 120 L158 156 M148 92 L124 104"/>
<path class="s t r" d="M96 48 Q92 40 98 38 Q102 37 102 42 Q102 37 106 38 Q112 40 108 48 L102 56 Z"/>`}
];
