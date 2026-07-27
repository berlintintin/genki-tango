/* =======================================================================
   lesson_11.js  —  Doodle Tango vocabulary, Lesson 11  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 11.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[11] = [
{id:"onsen",kanji:"温泉",kana:"おんせん",romaji:"onsen",en:"hot spring",lesson:11,art:`
<path class="s" d="M20 130 Q36 118 54 128 Q72 120 92 128 Q112 118 130 128 Q150 120 168 128 Q180 124 184 132"/>
<path class="s t" d="M32 146 Q60 140 88 146 Q116 152 144 146 Q160 142 172 146 M40 160 Q70 154 100 160 Q130 166 160 160"/>
<circle class="s" cx="100" cy="100" r="24"/>
<path class="s t" d="M84 96 Q84 82 100 82 Q116 82 116 96 Q116 110 100 112 Q84 110 84 96"/>
<path class="s t" d="M90 94 Q94 91 98 94 M102 94 Q106 91 110 94 M96 104 Q100 107 104 104"/>
<circle class="s t" cx="76" cy="94" r="7"/><circle class="s t" cx="124" cy="94" r="7"/>
<path class="s r" d="M82 78 L84 66 L116 66 L118 78 M84 72 L116 72"/>
<path class="s t r" d="M60 62 Q52 50 60 40 Q68 30 60 20 M144 66 Q136 54 144 44 Q152 34 144 24 M100 52 Q94 44 100 36"/>`},
{id:"tsuri",kanji:"釣り",kana:"つり",romaji:"tsuri",en:"fishing",lesson:11,art:`
<circle class="s" cx="56" cy="56" r="14"/><path class="s t" d="M50 54 Q53 51 56 54 M60 54 Q63 51 66 54"/>
<path class="s" d="M58 70 Q64 92 60 110 M60 110 L48 118 L48 130 M60 110 Q72 114 76 122"/>
<path class="s" d="M62 80 L96 60 L150 44"/>
<path class="s t r" d="M150 44 L150 118"/>
<path class="s r" d="M136 132 Q150 118 164 132 Q150 146 136 132 Z M136 132 L126 122 M136 132 L126 142"/>
<circle class="f" cx="156" cy="129" r="2.5"/>
<path class="s t" d="M24 152 Q52 146 80 152 Q108 158 136 152 Q158 148 176 152"/>
<path class="s t" d="M40 122 L60 122 L60 134 L40 134 Z"/>`},
{id:"camp",kana:"キャンプ",romaji:"kyanpu",en:"camping",lesson:11,art:`
<path class="s" d="M40 148 L88 56 L136 148 Z M88 56 L88 148 M72 148 L88 116 L104 148"/>
<path class="s t r" d="M148 132 Q140 118 152 108 Q148 122 158 126 Q160 112 168 110 Q174 124 166 134 Q158 142 148 132 Z"/>
<path class="s" d="M138 148 L176 148"/>
<path class="s t" d="M152 44 Q140 40 140 30 Q140 20 150 18 Q144 26 148 34 Q152 42 160 40 Q158 44 152 44 Z"/>
<circle class="s t" cx="120" cy="32" r="1.5"/><circle class="s t" cx="170" cy="60" r="1.5"/>
<path class="s t" d="M24 164 L176 164"/>`},
{id:"yama",kanji:"山",kana:"やま",romaji:"yama",en:"mountain",lesson:11,art:`
<path class="s" d="M24 152 L100 44 L176 152 Z"/>
<path class="s t" d="M78 76 L88 88 L100 74 L112 88 L122 76 L100 44 Z"/>
<circle class="s r" cx="42" cy="44" r="14"/>
<path class="s t" d="M120 120 Q128 112 136 120 M56 128 Q64 120 72 128"/>
<path class="s t" d="M16 164 L184 164"/>`},
{id:"unten",kanji:"運転する",kana:"うんてんする",romaji:"unten suru",en:"to drive",lesson:11,art:`
<path class="s" d="M36 120 L44 92 Q48 78 66 78 L118 78 Q132 78 140 92 L156 116 Q166 120 164 134 L36 134 Q32 128 36 120 Z"/>
<path class="s t" d="M70 92 L70 112 M70 92 L108 92 L118 112"/>
<circle class="s" cx="66" cy="140" r="13"/><circle class="s" cx="136" cy="140" r="13"/>
<circle class="s t" cx="88" cy="70" r="9"/><path class="s t" d="M84 80 Q88 84 94 80"/>
<circle class="s t r" cx="96" cy="98" r="8"/>
<path class="s t" d="M22 104 L34 104 M18 118 L30 118"/>`},
{id:"mizuumi",kanji:"湖",kana:"みずうみ",romaji:"mizuumi",en:"lake",lesson:11,art:`
<ellipse class="s" cx="100" cy="128" rx="72" ry="26"/>
<path class="s" d="M56 104 L56 60 M56 60 Q40 62 38 48 Q52 44 56 52 Q58 40 70 38 Q72 52 60 56 Q74 54 78 64 Q66 70 56 60"/>
<path class="s t r" d="M52 132 Q56 150 52 154 M62 130 L62 150"/>
<path class="s t" d="M96 124 Q108 120 120 124 M120 134 Q134 130 148 134 M72 136 Q82 132 92 136"/>
<circle class="s t r" cx="152" cy="52" r="12"/>`},
{id:"jinja",kanji:"神社",kana:"じんじゃ",romaji:"jinja",en:"shrine",lesson:11,art:`
<path class="s r" d="M32 56 Q100 40 168 56 L164 68 L36 68 Z"/>
<path class="s r" d="M46 82 L154 82"/>
<path class="s r" d="M56 68 L54 160 M144 68 L146 160"/>
<path class="s r" d="M100 68 L100 82"/>
<path class="s t" d="M24 166 L176 166"/>
<circle class="s t" cx="176" cy="34" r="10"/>`},
{id:"shashin",kanji:"写真を撮る",kana:"しゃしんをとる",romaji:"shashin o toru",en:"to take a picture",lesson:11,art:`
<rect class="s" x="44" y="72" width="112" height="76" rx="12"/>
<path class="s" d="M78 72 L86 56 L114 56 L122 72"/>
<circle class="s" cx="100" cy="110" r="24"/><circle class="s t" cx="100" cy="110" r="12"/>
<rect class="fr" x="132" y="82" width="14" height="10" rx="3"/>
<path class="s t r" d="M40 44 L52 56 M64 34 L68 50 M164 48 L152 58 M176 70 L160 74"/>`},
{id:"omiyage",kanji:"お土産",kana:"おみやげ",romaji:"omiyage",en:"souvenir",lesson:11,art:`
<rect class="s" x="52" y="84" width="96" height="72" rx="6"/>
<path class="s" d="M52 108 L148 108 M100 84 L100 156"/>
<path class="s r" d="M100 84 Q76 78 74 62 Q86 54 100 72 Q114 54 126 62 Q124 78 100 84 Z"/>
<path class="s t" d="M160 60 Q176 62 174 78 M168 44 Q188 48 184 70"/>`},
{id:"yasumi",kanji:"休み",kana:"やすみ",romaji:"yasumi",en:"vacation",lesson:11,art:`
<path class="s r" d="M120 32 L108 128"/>
<path class="s r" d="M64 62 Q118 12 172 58 Q146 52 120 58 Q94 52 64 62 Z"/>
<path class="s" d="M36 136 L84 136 Q96 136 100 148 L100 160 M48 136 L44 160 M92 148 L96 160"/>
<path class="s" d="M36 136 Q28 122 38 112"/>
<path class="s t" d="M20 172 Q60 166 100 172 Q140 178 180 172"/>
<circle class="s t" cx="40" cy="40" r="13"/>`}
];
