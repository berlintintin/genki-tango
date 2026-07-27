/* =======================================================================
   lesson_4.js  —  Doodle Tango vocabulary, Lesson 4  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 4.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[4] = [
{id:"inu",kanji:"犬",kana:"いぬ",romaji:"inu",en:"dog",lesson:4,art:`
<circle class="s" cx="62" cy="74" r="17"/>
<path class="s" d="M50 62 Q40 66 42 80 M74 62 Q84 66 82 80"/>
<path class="s t" d="M56 72 Q59 69 62 72 M66 72 Q69 69 72 72"/>
<circle class="f" cx="62" cy="82" r="4"/>
<path class="s" d="M76 88 L134 88 Q150 88 150 106 L150 140 M76 88 L74 140 M86 140 L86 160 M138 140 L138 160 M74 140 L150 140"/>
<path class="s r" d="M150 112 Q168 104 164 86"/>
<path class="s t r" d="M172 96 Q178 92 176 84"/>`},
{id:"neko",kanji:"猫",kana:"ねこ",romaji:"neko",en:"cat",lesson:4,art:`
<circle class="s" cx="100" cy="86" r="26"/>
<path class="s" d="M82 68 L74 42 L94 60 M118 68 L126 42 L106 60"/>
<path class="s t" d="M90 84 Q93 81 96 84 M104 84 Q107 81 110 84"/>
<path class="f" d="M97 92 L103 92 L100 96 Z"/>
<path class="s t" d="M100 96 Q96 102 90 100 M100 96 Q104 102 110 100 M72 90 L54 86 M72 98 L54 100 M128 90 L146 86 M128 98 L146 100"/>
<path class="s" d="M84 112 Q80 142 102 146 Q126 150 128 126"/>
<path class="s r" d="M128 130 Q154 134 150 110 Q148 98 136 102"/>`},
{id:"hana",kanji:"花",kana:"はな",romaji:"hana",en:"flower",lesson:4,art:`
<circle class="s r" cx="100" cy="50" r="13"/><circle class="s r" cx="125" cy="68" r="13"/><circle class="s r" cx="115" cy="97" r="13"/><circle class="s r" cx="85" cy="97" r="13"/><circle class="s r" cx="75" cy="68" r="13"/>
<circle class="s" cx="100" cy="76" r="11"/>
<path class="s" d="M100 110 L100 162"/>
<path class="s t" d="M100 132 Q80 124 74 110 M100 144 Q120 138 128 124"/>`},
{id:"kouen",kanji:"公園",kana:"こうえん",romaji:"kōen",en:"park",lesson:4,art:`
<circle class="s" cx="64" cy="66" r="26"/>
<path class="s" d="M64 92 L64 136"/>
<path class="s" d="M108 132 L164 132 M112 132 L112 158 M160 132 L160 158 M108 114 L164 114 M112 114 L112 132 M160 114 L160 132"/>
<circle class="s t r" cx="156" cy="44" r="12"/>
<path class="s t" d="M28 160 L172 160"/>`},
{id:"otera",kanji:"お寺",kana:"おてら",romaji:"otera",en:"temple",lesson:4,art:`
<path class="s" d="M36 84 Q100 44 164 84 L150 84 Q100 58 50 84 Z"/>
<path class="s" d="M56 84 L56 148 M144 84 L144 148 M40 148 L160 148 M100 84 L100 148"/>
<circle class="s t r" cx="72" cy="110" r="9"/><path class="s t r" d="M72 119 L72 130"/>
<path class="s t" d="M116 104 L132 104 L132 148 M116 104 L116 148"/>`},
{id:"ginkou",kanji:"銀行",kana:"ぎんこう",romaji:"ginkō",en:"bank",lesson:4,art:`
<path class="s" d="M40 84 L100 52 L160 84 Z M48 84 L48 144 M84 84 L84 144 M116 84 L116 144 M152 84 L152 144 M36 144 L164 144 M36 154 L164 154"/>
<path class="s t r" d="M92 100 L100 112 L108 100 M92 120 L108 120 M92 127 L108 127 M100 112 L100 136"/>`},
{id:"yuubinkyoku",kanji:"郵便局",kana:"ゆうびんきょく",romaji:"yūbinkyoku",en:"post office",lesson:4,art:`
<path class="s r" d="M68 56 L132 56 Q142 56 142 68 L142 148 L58 148 L58 68 Q58 56 68 56 Z"/>
<path class="s" d="M74 76 L126 76"/>
<path class="s" d="M72 148 L72 166 M128 148 L128 166"/>
<path class="s" d="M84 100 L116 100 M84 110 L116 110 M100 110 L100 136"/>`},
{id:"kissaten",kanji:"喫茶店",kana:"きっさてん",romaji:"kissaten",en:"cafe",lesson:4,art:`
<path class="s" d="M56 94 L144 94 L138 152 Q100 160 62 152 Z"/>
<path class="s" d="M144 102 Q166 104 162 120 Q158 132 140 130"/>
<path class="s t" d="M78 80 Q72 66 80 54 M100 80 Q94 66 102 54 M122 80 Q116 66 124 54"/>
<path class="s" d="M44 164 L156 164"/>
<path class="s t r" d="M88 118 Q100 126 112 118"/>`},
{id:"suupaa",kana:"スーパー",romaji:"sūpā",en:"supermarket",lesson:4,art:`
<path class="s" d="M40 52 L58 52 L74 116 L140 116 L152 72 L64 72"/>
<circle class="s" cx="84" cy="140" r="10"/><circle class="s" cx="130" cy="140" r="10"/>
<path class="s t r" d="M88 58 L88 72 M104 52 L104 72 M120 56 L120 72"/>`},
{id:"depaato",kana:"デパート",romaji:"depāto",en:"department store",lesson:4,art:`
<rect class="s" x="60" y="40" width="88" height="120"/>
<rect class="s t" x="72" y="52" width="20" height="14"/><rect class="s t" x="116" y="52" width="20" height="14"/><rect class="s t" x="72" y="78" width="20" height="14"/><rect class="s t" x="116" y="78" width="20" height="14"/><rect class="s t" x="72" y="104" width="20" height="14"/><rect class="s t" x="116" y="104" width="20" height="14"/>
<path class="s" d="M92 160 L92 132 L116 132 L116 160"/>
<path class="s r" d="M22 122 L48 122 L52 158 L18 158 Z M28 122 Q28 110 35 110 Q42 110 42 122"/>`}
];
