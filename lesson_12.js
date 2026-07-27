/* =======================================================================
   lesson_12.js  —  Doodle Tango vocabulary, Lesson 12  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 12.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[12] = [
{id:"onaka",kana:"おなか",romaji:"onaka",en:"stomach",lesson:12,art:`
<circle class="s" cx="100" cy="52" r="16"/>
<path class="s t" d="M92 48 L98 52 M108 48 L102 52 M94 60 Q100 64 106 60"/>
<path class="s" d="M100 68 Q96 100 100 128 M100 128 L88 166 M100 128 L112 166"/>
<path class="s" d="M100 84 Q84 92 88 106 M100 84 Q116 92 112 106"/>
<path class="s r" d="M90 106 Q100 114 110 106"/>
<path class="s t r" d="M132 60 Q140 56 138 48 Q136 42 142 38"/>`},
{id:"ashi",kanji:"足",kana:"あし",romaji:"ashi",en:"leg / foot",lesson:12,art:`
<path class="s" d="M86 30 L86 118 Q86 132 78 140 Q72 148 80 152 L144 152 Q154 152 152 142 Q150 134 138 132 Q118 128 114 114 L114 30"/>
<path class="s t" d="M132 152 L132 144 M120 152 L120 146"/>
<ellipse class="s t r" cx="44" cy="168" rx="8" ry="11"/>
<circle class="fr" cx="38" cy="152" r="2.5"/><circle class="fr" cx="44" cy="150" r="2.5"/><circle class="fr" cx="50" cy="152" r="2.5"/>
<ellipse class="s t r" cx="168" cy="106" rx="8" ry="11"/>
<circle class="fr" cx="162" cy="90" r="2.5"/><circle class="fr" cx="168" cy="88" r="2.5"/><circle class="fr" cx="174" cy="90" r="2.5"/>`},
{id:"ha",kanji:"歯",kana:"は",romaji:"ha",en:"tooth",lesson:12,art:`
<path class="s" d="M68 66 Q68 42 92 46 Q100 48 108 46 Q132 42 132 66 Q132 94 122 114 Q118 124 112 114 Q108 102 100 102 Q92 102 88 114 Q82 124 78 114 Q68 94 68 66 Z"/>
<path class="s r" d="M136 88 L176 72"/>
<path class="s t r" d="M138 82 L142 92 M146 79 L150 89 M154 76 L158 86"/>
<path class="s t" d="M52 48 L44 40 M56 38 L52 28"/>`},
{id:"nodo",kana:"のど",romaji:"nodo",en:"throat",lesson:12,art:`
<circle class="s" cx="96" cy="66" r="28"/>
<path class="s t" d="M86 60 Q89 57 92 60 M102 60 Q105 57 108 60 M88 76 Q96 72 104 76"/>
<path class="s" d="M84 92 Q80 106 84 118 M108 92 Q112 106 108 118"/>
<path class="s r" d="M88 106 L104 106 M86 114 L106 114"/>
<path class="s t r" d="M60 92 L48 84 M60 106 L46 106 M60 120 L48 128"/>`},
{id:"netsu",kanji:"熱",kana:"ねつ",romaji:"netsu",en:"fever",lesson:12,art:`
<circle class="s" cx="76" cy="76" r="24"/>
<path class="s t" d="M66 70 L74 74 M88 70 L80 74 M68 90 Q76 86 84 90"/>
<path class="s t" d="M108 56 Q112 66 106 70 Q100 64 108 56 Z"/>
<path class="s r" d="M112 112 L162 86"/>
<circle class="fr" cx="110" cy="113" r="8"/>
<path class="s t r" d="M126 104 L129 110 M137 99 L140 105 M148 93 L151 99"/>`},
{id:"seki",kana:"せき",romaji:"seki",en:"cough",lesson:12,art:`
<circle class="s" cx="76" cy="76" r="22"/>
<path class="s t" d="M68 70 Q71 67 74 70 M82 70 Q85 67 88 70"/>
<ellipse class="f" cx="86" cy="86" rx="5" ry="7"/>
<path class="s" d="M74 98 L72 140 M72 140 L60 172 M72 140 L84 170 M74 108 Q88 112 92 98"/>
<path class="s t r" d="M108 74 Q116 68 114 60 M122 84 Q132 80 132 70 M116 98 Q126 98 130 90"/>`},
{id:"byouki",kanji:"病気",kana:"びょうき",romaji:"byōki",en:"sick / illness",lesson:12,art:`
<path class="s" d="M28 132 L172 132 M36 132 L36 156 M164 132 L164 156"/>
<circle class="s" cx="60" cy="112" r="16"/>
<path class="s r" d="M46 98 Q60 84 74 98 Q68 103 60 103 Q52 103 46 98 Z M54 86 L66 86"/>
<path class="s t" d="M52 112 L48 108 M48 112 L52 108 M68 112 L64 108 M64 112 L68 108"/>
<path class="s" d="M78 116 Q120 104 164 116 L164 132 L78 132 Z"/>
<path class="s t r" d="M120 60 Q126 52 122 44 M140 64 Q146 56 142 48"/>`},
{id:"purezento",kana:"プレゼント",romaji:"purezento",en:"present",lesson:12,art:`
<path class="s r" d="M60 84 L140 84 L148 160 L52 160 Z"/>
<path class="s r" d="M78 84 Q78 62 94 62 M122 84 Q122 62 106 62"/>
<path class="s t" d="M68 84 L76 66 L86 84 L96 62 L106 84 L116 64 L126 84"/>
<path class="s t r" d="M38 56 L46 64 M46 56 L38 64 M156 50 L164 58 M164 50 L156 58"/>`},
{id:"futsukayoi",kanji:"二日酔い",kana:"ふつかよい",romaji:"futsukayoi",en:"hangover",lesson:12,art:`
<circle class="s" cx="88" cy="84" r="26"/>
<path class="s t" d="M74 78 Q80 74 80 80 Q80 84 76 82 M96 78 Q102 74 102 80 Q102 84 98 82"/>
<path class="s t" d="M80 98 Q88 94 96 98"/>
<path class="s" d="M86 110 Q80 130 84 152"/>
<path class="s t r" d="M126 60 Q134 52 130 44 Q126 38 132 32 M52 46 L62 50 M57 41 L57 55"/>
<path class="s" d="M132 156 L152 156 L150 118 Q150 110 146 108 L146 96 L140 96 L140 108 Q136 110 136 118 Z"/>`},
{id:"shiken",kanji:"試験",kana:"しけん",romaji:"shiken",en:"exam",lesson:12,art:`
<rect class="s" x="58" y="38" width="84" height="124" rx="4"/>
<path class="s t" d="M70 58 L130 58 M70 74 L114 74 M70 90 L130 90 M70 106 L104 106"/>
<circle class="s r" cx="100" cy="132" r="20"/>
<path class="s t r" d="M148 46 L162 32"/>`}
];
