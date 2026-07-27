/* =======================================================================
   lesson_5.js  —  Doodle Tango vocabulary, Lesson 5  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 5.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[5] = [
{id:"umi",kanji:"海",kana:"うみ",romaji:"umi",en:"sea",lesson:5,art:`
<circle class="s r" cx="152" cy="48" r="18"/>
<path class="s" d="M24 108 Q44 96 64 108 Q84 120 104 108 Q124 96 144 108 Q164 120 178 110"/>
<path class="s" d="M32 140 Q52 128 72 140 Q92 152 112 140 Q132 128 152 140 Q166 148 176 142"/>
<path class="s t" d="M52 66 Q60 58 68 66 M76 60 Q84 52 92 60"/>
<path class="s t" d="M120 168 Q130 160 140 168"/>`},
{id:"saafin",kana:"サーフィン",romaji:"sāfin",en:"surfing",lesson:5,art:`
<circle class="s" cx="96" cy="70" r="14"/>
<path class="s" d="M96 84 L100 114 M100 114 L84 132 M100 114 L118 132 M98 94 L76 86 M98 94 L122 102"/>
<path class="s r" d="M52 140 Q100 124 148 140 L140 152 Q100 140 60 152 Z"/>
<path class="s" d="M20 162 Q50 150 80 162 Q110 174 140 162 Q160 154 180 162"/>`},
{id:"tanjoubi",kanji:"誕生日",kana:"たんじょうび",romaji:"tanjōbi",en:"birthday",lesson:5,art:`
<path class="s" d="M52 108 L148 108 L148 152 L52 152 Z"/>
<path class="s t" d="M52 120 Q64 130 76 120 Q88 110 100 120 Q112 130 124 120 Q136 110 148 120"/>
<path class="s" d="M40 152 L160 152"/>
<path class="s" d="M76 108 L76 86 M100 108 L100 82 M124 108 L124 86"/>
<path class="fr" d="M76 86 Q70 76 76 68 Q82 76 76 86 Z M100 82 Q94 72 100 64 Q106 72 100 82 Z M124 86 Q118 76 124 68 Q130 76 124 86 Z"/>`},
{id:"tegami",kanji:"手紙",kana:"てがみ",romaji:"tegami",en:"letter",lesson:5,art:`
<rect class="s" x="40" y="68" width="120" height="80" rx="6"/>
<path class="s" d="M40 72 L100 116 L160 72"/>
<path class="s t r" d="M100 108 Q94 98 102 94 Q108 92 108 98 Q108 92 114 94 Q122 98 116 108 L108 116 Z"/>`},
{id:"suki",kanji:"好き",kana:"すき",romaji:"suki",en:"to like",lesson:5,art:`
<path class="s r" d="M100 156 L56 112 Q36 90 52 70 Q70 52 92 68 L100 78 L108 68 Q130 52 148 70 Q164 90 144 112 Z"/>
<path class="s t" d="M78 96 Q82 92 86 96 M114 96 Q118 92 122 96 M88 112 Q100 122 112 112"/>
<path class="s t r" d="M36 56 L44 64 M164 56 L156 64 M100 30 L100 42"/>`},
{id:"oishii",kana:"おいしい",romaji:"oishii",en:"delicious",lesson:5,art:`
<circle class="s" cx="80" cy="80" r="26"/>
<path class="s t" d="M66 76 Q71 70 76 76 M84 76 Q89 70 94 76"/>
<path class="s r" d="M68 92 Q80 104 92 92 Q90 106 80 106 Q70 104 68 92 Z"/>
<path class="s" d="M120 118 Q120 150 146 150 Q172 150 172 118 Z"/>
<path class="s t" d="M132 108 Q128 96 136 88 M154 108 Q150 96 158 88"/>
<path class="s t r" d="M52 48 L44 40 M110 46 L118 38"/>`},
{id:"ookii",kanji:"大きい",kana:"おおきい",romaji:"ōkii",en:"big",lesson:5,art:`
<circle class="s r" cx="122" cy="84" r="52"/>
<path class="s t r" d="M122 26 L122 14 M162 44 L172 34 M166 122 L178 130"/>
<circle class="s" cx="42" cy="126" r="9"/>
<path class="s" d="M42 135 L42 160 M42 160 L35 176 M42 160 L49 176 M42 144 L32 152 M42 144 L56 136"/>`},
{id:"chiisai",kanji:"小さい",kana:"ちいさい",romaji:"chiisai",en:"small",lesson:5,art:`
<circle class="s" cx="68" cy="66" r="16"/>
<path class="s t" d="M62 64 Q65 61 68 64 M72 64 Q75 61 78 64"/>
<path class="s" d="M68 82 L68 134 M68 134 L56 168 M68 134 L80 168 M68 98 L92 114"/>
<circle class="s r" cx="120" cy="124" r="24"/>
<path class="s r" d="M138 142 L158 162"/>
<circle class="f" cx="118" cy="126" r="4"/>
<path class="s t" d="M114 120 L110 114 M122 120 L126 114"/>`},
{id:"atarashii",kanji:"新しい",kana:"あたらしい",romaji:"atarashii",en:"new",lesson:5,art:`
<path class="s" d="M40 150 L160 150"/>
<path class="s" d="M100 150 L100 112"/>
<path class="s r" d="M100 112 Q76 112 72 88 Q96 86 100 112 Z M100 112 Q124 112 128 88 Q104 86 100 112 Z"/>
<path class="s t r" d="M58 62 L66 70 M66 62 L58 70 M134 58 L142 66 M142 58 L134 66 M100 40 L100 54 M93 47 L107 47"/>`},
{id:"furui",kanji:"古い",kana:"ふるい",romaji:"furui",en:"old",lesson:5,art:`
<path class="s" d="M64 62 L136 62 L128 74 L72 74 Z"/>
<path class="s" d="M72 74 Q58 96 66 120 Q76 144 100 144 Q124 144 134 120 Q142 96 128 74"/>
<path class="s r" d="M96 74 L104 96 L94 112 L102 130"/>
<path class="s t" d="M32 32 L66 32 M32 32 L32 62 M32 32 L56 52 M44 32 Q46 42 38 44 M32 46 Q42 46 44 38"/>`}
];
