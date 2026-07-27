/* =======================================================================
   lesson_1.js  —  Doodle Tango vocabulary, Lesson 1  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 1.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[1] = [
{id:"sensei",kanji:"先生",kana:"せんせい",romaji:"sensei",en:"teacher",lesson:1,art:`
<rect class="s" x="92" y="36" width="80" height="60" rx="4"/>
<path class="s t r" d="M104 54 L136 54 M104 68 Q120 62 140 70 M148 52 L160 52"/>
<circle class="s" cx="52" cy="60" r="15"/>
<path class="s t" d="M46 58 Q49 55 52 58 M56 58 Q59 55 62 58"/>
<path class="s" d="M52 75 L52 128 M52 128 L40 166 M52 128 L64 166 M52 90 L92 66 M52 96 L34 116"/>`},
{id:"gakusei",kanji:"学生",kana:"がくせい",romaji:"gakusei",en:"student",lesson:1,art:`
<circle class="s" cx="100" cy="56" r="15"/>
<path class="s r" d="M84 46 Q100 32 116 46 L118 52 Q100 58 82 52 Z"/>
<path class="s t" d="M94 58 Q97 55 100 58 M104 58 Q107 55 110 58"/>
<path class="s" d="M100 71 L100 106 M100 88 L74 104 M100 88 L126 104"/>
<path class="s" d="M44 112 L156 112 M56 112 L56 160 M144 112 L144 160"/>
<rect class="s t r" x="78" y="100" width="44" height="12" rx="3"/>`},
{id:"daigaku",kanji:"大学",kana:"だいがく",romaji:"daigaku",en:"college",lesson:1,art:`
<path class="s" d="M40 88 L100 48 L160 88 Z"/>
<path class="s" d="M52 88 L52 148 M84 88 L84 148 M116 88 L116 148 M148 88 L148 148"/>
<path class="s" d="M36 148 L164 148 M36 158 L164 158"/>
<path class="s t r" d="M100 48 L100 24 L126 31 L100 38"/>`},
{id:"tomodachi",kanji:"友だち",kana:"ともだち",romaji:"tomodachi",en:"friend",lesson:1,art:`
<circle class="s" cx="64" cy="58" r="15"/><circle class="s" cx="136" cy="58" r="15"/>
<path class="s t" d="M58 56 Q61 53 64 56 M68 56 Q71 53 74 56 M130 56 Q133 53 136 56 M140 56 Q143 53 146 56"/>
<path class="s t" d="M58 66 Q64 70 70 66 M130 66 Q136 70 142 66"/>
<path class="s" d="M64 73 L64 124 M64 124 L52 164 M64 124 L76 164 M136 73 L136 124 M136 124 L124 164 M136 124 L148 164"/>
<path class="s" d="M64 90 L46 110 M136 90 L154 110"/>
<path class="s r" d="M64 90 Q100 108 136 90"/>
<path class="s t r" d="M92 30 Q88 22 96 20 Q102 19 102 26 Q102 19 108 20 Q116 22 112 30 L102 40 Z"/>`},
{id:"nihon",kanji:"日本",kana:"にほん",romaji:"nihon",en:"Japan",lesson:1,art:`
<circle class="fr" cx="100" cy="82" r="34"/>
<path class="s t r" d="M100 36 L100 24 M62 46 L54 38 M138 46 L146 38 M54 82 L42 82 M146 82 L158 82"/>
<path class="s" d="M28 140 Q48 128 68 140 Q88 152 108 140 Q128 128 148 140 Q162 148 174 141"/>
<path class="s t" d="M40 164 Q60 154 80 164 Q100 174 120 164 Q140 154 160 164"/>`},
{id:"ryuugakusei",kanji:"留学生",kana:"りゅうがくせい",romaji:"ryūgakusei",en:"international student",lesson:1,art:`
<circle class="s" cx="72" cy="66" r="15"/>
<path class="s t" d="M66 64 Q69 61 72 64 M76 64 Q79 61 82 64"/>
<path class="s" d="M72 81 L72 132 M72 132 L60 168 M72 132 L84 168 M72 96 L54 114 M72 96 L98 110"/>
<rect class="s r" x="98" y="110" width="42" height="32" rx="4"/>
<path class="s t r" d="M108 110 L108 100 L130 100 L130 110"/>
<path class="s t" d="M122 38 L168 26 L146 60 L138 46 Z"/>`},
{id:"tokei",kanji:"時計",kana:"とけい",romaji:"tokei",en:"watch / clock",lesson:1,art:`
<circle class="s" cx="100" cy="102" r="52"/>
<path class="s t" d="M100 58 L100 66 M100 138 L100 146 M58 102 L66 102 M134 102 L142 102"/>
<path class="s" d="M100 102 L100 74"/>
<path class="s r" d="M100 102 L126 114"/>
<circle class="f" cx="100" cy="102" r="5"/>
<path class="s t" d="M66 54 Q56 42 66 34 M134 54 Q144 42 134 34"/>`},
{id:"denwa",kanji:"電話",kana:"でんわ",romaji:"denwa",en:"telephone",lesson:1,art:`
<rect class="s" x="70" y="36" width="60" height="120" rx="10"/>
<path class="s t" d="M88 46 L112 46"/>
<circle class="s t" cx="100" cy="140" r="6"/>
<path class="s t r" d="M142 62 Q152 82 142 102 M152 50 Q168 82 152 114"/>
<path class="s t" d="M84 78 Q100 70 116 82 M84 100 L116 100"/>`},
{id:"hon",kanji:"本",kana:"ほん",romaji:"hon",en:"book",lesson:1,art:`
<path class="s" d="M100 64 Q70 48 36 56 L36 140 Q70 132 100 148 Q130 132 164 140 L164 56 Q130 48 100 64 Z"/>
<path class="s" d="M100 64 L100 148"/>
<path class="s t" d="M50 76 Q74 70 88 78 M50 94 Q74 88 88 96 M50 112 Q74 106 88 114 M112 78 Q126 70 150 76 M112 96 Q126 88 150 94"/>
<path class="s t r" d="M112 114 Q126 106 150 112"/>`},
{id:"ima",kana:"いま",romaji:"ima",en:"now",lesson:1,art:`
<circle class="s" cx="100" cy="106" r="46"/>
<path class="s t" d="M100 66 L100 74 M100 138 L100 146 M60 106 L68 106 M132 106 L140 106"/>
<path class="s" d="M100 106 L100 78"/><path class="s r" d="M100 106 L122 118"/>
<circle class="f" cx="100" cy="106" r="4"/>
<path class="s r" d="M100 40 L100 58 M88 48 L100 58 L112 48"/>
<path class="fr" d="M100 22 Q90 34 100 44 Q110 34 100 22 Z"/>`},
{id:"eigo",kana:"えいご",romaji:"eigo",en:"English",lesson:1,art:`
<path class="s" d="M40 44 L160 44 Q172 44 172 56 L172 116 Q172 128 160 128 L84 128 L58 156 L62 128 L40 128 Q28 128 28 116 L28 56 Q28 44 40 44 Z"/>
<rect class="s r" x="66" y="66" width="68" height="42"/>
<path class="s r" d="M66 66 L134 108 M134 66 L66 108 M100 66 L100 108 M66 87 L134 87"/>`},
{id:"nihongo",kana:"にほんご",romaji:"nihongo",en:"Japanese language",lesson:1,art:`
<path class="s" d="M40 44 L160 44 Q172 44 172 56 L172 116 Q172 128 160 128 L84 128 L58 156 L62 128 L40 128 Q28 128 28 116 L28 56 Q28 44 40 44 Z"/>
<circle class="fr" cx="100" cy="86" r="20"/>`},
{id:"koukou",kana:"こうこう",romaji:"koukou",en:"high school",lesson:1,art:`
<rect class="s" x="52" y="72" width="96" height="88"/>
<rect class="s t" x="66" y="88" width="20" height="20"/><rect class="s t" x="114" y="88" width="20" height="20"/>
<rect class="s t" x="88" y="122" width="24" height="38"/>
<path class="s" d="M100 72 L100 40"/><path class="s r" d="M100 40 L138 48 L100 60 Z"/>
<circle class="s t r" cx="100" cy="122" r="7"/>`},
{id:"gogo",kana:"ごご",romaji:"gogo",en:"P.M.",lesson:1,art:`
<path class="s t" d="M28 128 L172 128"/>
<path class="s r" d="M66 128 Q66 96 100 96 Q134 96 134 128"/>
<path class="s r" d="M100 84 L100 70 M64 96 L54 86 M136 96 L146 86 M48 122 L34 122 M152 122 L166 122"/>
<path class="s t" d="M100 148 L100 172 M90 162 L100 172 L110 162"/>
<path class="s t r" d="M150 60 Q136 60 136 46 Q136 34 148 32 Q140 44 150 52 Q156 56 150 60 Z"/>`},
{id:"gozen",kana:"ごぜん",romaji:"gozen",en:"A.M.",lesson:1,art:`
<path class="s t" d="M28 128 L172 128"/>
<path class="s r" d="M66 128 Q66 96 100 96 Q134 96 134 128"/>
<path class="s r" d="M100 84 L100 70 M64 96 L54 86 M136 96 L146 86 M48 122 L34 122 M152 122 L166 122"/>
<path class="s t" d="M100 66 L100 42 M90 52 L100 42 L110 52"/>`},
{id:"senkou",kanji:"専攻",kana:"せんこう",romaji:"senkou",en:"major",lesson:1,art:`
<path class="s" d="M40 78 L100 54 L160 78 L100 102 Z"/>
<path class="s t" d="M100 102 L100 118 M70 90 L70 116 Q70 130 100 130 Q130 130 130 116 L130 90"/>
<path class="s r" d="M148 82 L156 100"/>
<rect class="s t r" x="76" y="150" width="48" height="14"/>
<path class="s t r" d="M100 148 L100 132 M92 140 L100 132 L108 140"/>`},
{id:"namae",kana:"なまえ",romaji:"namae",en:"name",lesson:1,art:`
<rect class="s" x="44" y="60" width="112" height="80" rx="8"/>
<circle class="s t" cx="72" cy="88" r="12"/><path class="s t" d="M56 116 Q72 100 88 116"/>
<path class="s t r" d="M104 82 L142 82 M104 100 L142 100 M104 116 L130 116"/>
<circle class="s r" cx="100" cy="52" r="6"/><path class="s t r" d="M100 58 L100 66"/>`},
{id:"nan",kana:"なん",romaji:"nan",en:"what",lesson:1,art:`
<path class="s" d="M44 52 L156 52 Q168 52 168 66 L168 118 Q168 132 156 132 L96 132 L68 160 L72 132 L44 132 Q32 132 32 118 L32 66 Q32 52 44 52 Z"/>
<path class="s r" d="M78 82 Q78 62 100 62 Q122 62 122 82 Q122 98 100 102 L100 112"/>
<circle class="fr" cx="100" cy="126" r="5"/>`},
{id:"nihonjin",kana:"にほんじん",romaji:"nihonjin",en:"Japanese person",lesson:1,art:`
<circle class="s" cx="86" cy="60" r="16"/>
<path class="s t" d="M80 58 Q83 55 86 58 M90 58 Q93 55 96 58"/>
<path class="s" d="M86 76 L86 128 M86 128 L74 166 M86 128 L98 166 M86 92 L64 108 M86 92 L108 106"/>
<circle class="s" cx="140" cy="62" r="22"/><circle class="fr" cx="140" cy="62" r="11"/>`},
{id:"han",kana:"はん",romaji:"han",en:"half (o'clock)",lesson:1,art:`
<circle class="s" cx="100" cy="100" r="50"/>
<path class="fr" d="M100 100 L100 50 A50 50 0 0 1 100 150 Z"/>
<path class="s t" d="M100 56 L100 64 M100 136 L100 144 M56 100 L64 100 M136 100 L144 100"/>
<circle class="f" cx="100" cy="100" r="4"/>`},
{id:"bangou",kana:"ばんごう",romaji:"bangou",en:"number",lesson:1,art:`
<rect class="s" x="60" y="40" width="80" height="120" rx="10"/>
<circle class="f" cx="80" cy="72" r="5"/><circle class="f" cx="100" cy="72" r="5"/><circle class="f" cx="120" cy="72" r="5"/>
<circle class="f" cx="80" cy="96" r="5"/><circle class="f" cx="100" cy="96" r="5"/><circle class="f" cx="120" cy="96" r="5"/>
<circle class="fr" cx="80" cy="120" r="5"/><circle class="fr" cx="100" cy="120" r="5"/><circle class="fr" cx="120" cy="120" r="5"/>
<path class="s t" d="M88 52 L112 52"/>`},
{id:"watashi",kana:"わたし",romaji:"watashi",en:"I / me",lesson:1,art:`
<circle class="s" cx="88" cy="52" r="16"/>
<path class="s t" d="M82 50 Q85 47 88 50 M92 50 Q95 47 98 50"/>
<path class="s" d="M88 68 L88 128 M88 128 L74 168 M88 128 L102 168 M88 84 L64 100"/>
<path class="s r" d="M88 92 Q112 96 108 118 L98 116"/>
<path class="s r" d="M98 116 L88 110"/>`},
{id:"amerika",kana:"アメリカ",romaji:"amerika",en:"U.S.A.",lesson:1,art:`
<rect class="s" x="44" y="58" width="112" height="76"/>
<path class="s r" d="M44 68 L156 68 M44 80 L156 80 M44 92 L156 92 M92 104 L156 104 M92 116 L156 116 M92 128 L156 128"/>
<rect class="fr" x="44" y="58" width="48" height="46"/>
<circle style="fill:#fff" cx="56" cy="70" r="2"/><circle style="fill:#fff" cx="72" cy="70" r="2"/><circle style="fill:#fff" cx="88" cy="70" r="2"/><circle style="fill:#fff" cx="64" cy="82" r="2"/><circle style="fill:#fff" cx="80" cy="82" r="2"/><circle style="fill:#fff" cx="56" cy="94" r="2"/><circle style="fill:#fff" cx="72" cy="94" r="2"/><circle style="fill:#fff" cx="88" cy="94" r="2"/>`},
{id:"igirisu",kana:"イギリス",romaji:"igirisu",en:"Britain",lesson:1,art:`
<rect class="s" x="44" y="58" width="112" height="76"/>
<path class="s r" d="M44 58 L156 134 M156 58 L44 134"/>
<path class="s r" d="M100 58 L100 134 M44 96 L156 96"/>
<path class="s" d="M100 58 L100 134 M44 96 L156 96"/>`},
{id:"osutoraria",kana:"オーストラリア",romaji:"osutoraria",en:"Australia",lesson:1,art:`
<rect class="s" x="44" y="58" width="112" height="76"/>
<rect class="fr" x="44" y="58" width="52" height="38"/>
<path style="stroke:#fff;stroke-width:2;fill:none" d="M44 58 L96 96 M96 58 L44 96 M70 58 L70 96 M44 77 L96 77"/>
<path class="fr" d="M66 106 L69 116 L79 116 L71 122 L74 132 L66 126 L58 132 L61 122 L53 116 L63 116 Z"/>
<circle class="fr" cx="128" cy="80" r="3"/><circle class="fr" cx="146" cy="74" r="3"/><circle class="fr" cx="141" cy="98" r="3"/><circle class="fr" cx="121" cy="104" r="3"/><circle class="fr" cx="150" cy="116" r="2"/>`},
{id:"kankoku",kana:"かんこく",romaji:"kankoku",en:"Korea",lesson:1,art:`
<rect class="s" x="44" y="58" width="112" height="76"/>
<path class="fr" d="M100 74 A22 22 0 0 1 100 118 A11 11 0 0 0 100 96 A11 11 0 0 1 100 74 Z"/>
<path class="s" d="M100 74 A22 22 0 0 0 100 118 A11 11 0 0 1 100 96 A11 11 0 0 0 100 74 Z"/>
<path class="s t" d="M58 68 L70 68 M58 74 L70 74 M58 80 L70 80 M130 116 L142 116 M130 122 L142 122 M130 128 L142 128"/>`},
{id:"chuugoku",kana:"ちゅうごく",romaji:"chuugoku",en:"China",lesson:1,art:`
<rect class="fr" x="44" y="58" width="112" height="76"/>
<path style="fill:#fff;stroke:none" d="M66 72 L70 84 L82 84 L72 92 L76 104 L66 96 L56 104 L60 92 L50 84 L62 84 Z"/>
<circle style="fill:#fff" cx="92" cy="70" r="2.5"/><circle style="fill:#fff" cx="100" cy="80" r="2.5"/><circle style="fill:#fff" cx="100" cy="94" r="2.5"/><circle style="fill:#fff" cx="92" cy="104" r="2.5"/>`},
{id:"keizai",kana:"けいざい",romaji:"keizai",en:"economics",lesson:1,art:`
<path class="s" d="M40 148 L160 148 M40 148 L40 48"/>
<path class="s r" d="M52 130 L84 100 L108 116 L156 64"/>
<path class="s r" d="M138 64 L156 64 L156 82"/>
<circle class="s" cx="60" cy="88" r="14"/><path class="s t" d="M60 78 L60 98 M54 84 L66 84 M54 92 L66 92"/>`},
{id:"konpyuta",kana:"コンピューター",romaji:"konpyuta",en:"computer",lesson:1,art:`
<rect class="s" x="52" y="52" width="96" height="66" rx="4"/>
<rect class="s t" x="62" y="62" width="76" height="46"/>
<path class="s" d="M36 132 L164 132 L152 118 L48 118 Z"/>
<path class="s t r" d="M88 125 L112 125"/>
<path class="s t" d="M74 78 L92 78 M74 90 L108 90"/>`},
{id:"bijinesu",kana:"ビジネス",romaji:"bijinesu",en:"business",lesson:1,art:`
<rect class="s" x="46" y="76" width="108" height="72" rx="6"/>
<path class="s" d="M80 76 L80 60 Q80 52 88 52 L112 52 Q120 52 120 60 L120 76"/>
<path class="s t" d="M46 100 L154 100"/>
<path class="s r" d="M70 132 L92 112 L108 124 L134 96"/>
<path class="s r" d="M120 96 L134 96 L134 110"/>`},
{id:"rekishi",kana:"れきし",romaji:"rekishi",en:"history",lesson:1,art:`
<path class="s" d="M52 60 Q40 60 40 74 Q40 88 52 88 L52 140 Q40 140 40 128"/>
<path class="s" d="M52 60 L148 60 Q160 60 160 74 Q160 88 148 88 L64 88"/>
<path class="s t r" d="M70 104 L142 104 M70 118 L142 118 M70 132 L120 132"/>
<path class="s" d="M148 88 Q160 88 160 74"/>`},
{id:"shigoto",kana:"しごと",romaji:"shigoto",en:"job / work",lesson:1,art:`
<rect class="s" x="44" y="82" width="80" height="60" rx="6"/>
<path class="s" d="M70 82 L70 68 Q70 60 78 60 L90 60 Q98 60 98 68 L98 82"/>
<path class="s t" d="M44 104 L124 104"/>
<circle class="s r" cx="150" cy="66" r="16"/><circle class="s t r" cx="150" cy="66" r="6"/>
<path class="s t r" d="M150 44 L150 52 M150 80 L150 88 M128 66 L136 66 M164 66 L172 66 M134 50 L140 56 M166 50 L160 56"/>`},
{id:"kaishain",kana:"かいしゃいん",romaji:"kaishain",en:"office worker",lesson:1,art:`
<circle class="s" cx="100" cy="52" r="16"/>
<path class="s t" d="M94 50 Q97 47 100 50 M104 50 Q107 47 110 50"/>
<path class="s" d="M100 68 L100 128 M100 128 L86 166 M100 128 L114 166 M100 84 L78 100 M100 84 L122 100"/>
<path class="s r" d="M100 68 L92 92 L100 100 L108 92 L100 68"/>
<path class="s t r" d="M100 100 L100 118"/>
<rect class="s t" x="118" y="98" width="30" height="24" rx="3"/>`},
{id:"koukousei",kana:"こうこうせい",romaji:"koukousei",en:"high school student",lesson:1,art:`
<circle class="s" cx="100" cy="52" r="16"/>
<path class="s r" d="M82 46 Q100 32 118 46 L120 52 Q100 58 80 52 Z"/>
<path class="s t" d="M94 56 Q97 53 100 56 M104 56 Q107 53 110 56"/>
<path class="s" d="M100 68 L100 124 M100 124 L86 164 M100 124 L114 164 M100 84 L78 100"/>
<path class="s r" d="M100 84 L128 96 L128 130 Q128 138 120 138 L108 138"/>
<path class="s t r" d="M112 96 L112 130"/>`},
{id:"shufu",kana:"しゅふ",romaji:"shufu",en:"housewife",lesson:1,art:`
<circle class="s" cx="100" cy="50" r="15"/>
<path class="s t" d="M94 48 Q97 45 100 48 M104 48 Q107 45 110 48"/>
<path class="s" d="M100 65 L100 96 M100 96 L84 160 M100 96 L116 160 M100 74 L124 90"/>
<path class="s r" d="M84 100 L84 150 L116 150 L116 100"/>
<path class="s r" d="M100 76 L118 66 L142 96 M118 66 L118 96"/>
<path class="s r" d="M124 90 L140 74"/>`},
{id:"daigakuinsei",kana:"だいがくいんせい",romaji:"daigakuinsei",en:"graduate student",lesson:1,art:`
<path class="s" d="M40 78 L100 54 L160 78 L100 102 Z"/>
<path class="s t" d="M100 102 L100 118 M70 92 L70 118 Q70 132 100 132 Q130 132 130 118 L130 92"/>
<path class="s r" d="M148 82 L156 100"/>
<circle class="s r" cx="112" cy="146" r="16"/><path class="s r" d="M124 158 L142 176"/>`},
{id:"daigakusei",kana:"だいがくせい",romaji:"daigakusei",en:"college student",lesson:1,art:`
<circle class="s" cx="100" cy="52" r="16"/>
<path class="s t" d="M94 50 Q97 47 100 50 M104 50 Q107 47 110 50"/>
<path class="s" d="M100 68 L100 124 M100 124 L86 164 M100 124 L114 164 M100 82 L78 98"/>
<path class="s r" d="M100 82 L126 94 L126 128 Q126 136 118 136 L108 136"/>
<path class="s r" d="M72 130 L96 130 L96 168 L72 168 Z M78 130 Q78 118 87 118 Q96 118 96 130"/>`},
{id:"bengoshi",kana:"べんごし",romaji:"bengoshi",en:"lawyer",lesson:1,art:`
<path class="s" d="M100 44 L100 152 M60 152 L140 152"/>
<path class="s" d="M60 70 L100 60 L140 70"/>
<path class="s" d="M60 70 L46 104 L74 104 Z M60 70 L60 104"/>
<path class="s" d="M140 70 L126 104 L154 104 Z M140 70 L140 104"/>
<path class="s t" d="M46 104 Q60 116 74 104 M126 104 Q140 116 154 104"/>`},
{id:"okaasan",kana:"おかあさん",romaji:"okaasan",en:"mother",lesson:1,art:`
<circle class="s" cx="100" cy="54" r="16"/>
<path class="s r" d="M84 54 Q84 34 100 34 Q116 34 116 54 Q116 62 108 66 L92 66 Q84 62 84 54"/>
<path class="s t" d="M94 56 Q97 53 100 56 M104 56 Q107 53 110 56 M94 64 Q100 68 106 64"/>
<path class="s" d="M100 70 L100 96 M100 96 L82 160 M100 96 L118 160 M100 80 L78 96 M100 80 L122 96"/>
<path class="s r" d="M84 100 L84 150 L116 150 L116 100"/>`},
{id:"otousan",kana:"おとうさん",romaji:"otousan",en:"father",lesson:1,art:`
<circle class="s" cx="100" cy="46" r="16"/>
<path class="s t" d="M94 44 Q97 41 100 44 M104 44 Q107 41 110 44"/>
<path class="s r" d="M84 40 L116 40 L112 32 L88 32 Z"/>
<path class="s" d="M100 62 L100 122 M100 122 L84 168 M100 122 L116 168 M100 78 L76 94 M100 78 L124 94"/>
<path class="s r" d="M100 62 L92 86 L100 94 L108 86 L100 62"/><path class="s t r" d="M100 94 L100 112"/>`},
{id:"oneesan",kana:"おねえさん",romaji:"oneesan",en:"older sister",lesson:1,art:`
<circle class="s" cx="72" cy="52" r="14"/>
<path class="s r" d="M62 44 Q58 34 66 34 Q70 40 72 46 M82 44 Q86 34 78 34 Q74 40 72 46"/>
<path class="s" d="M72 66 L72 116 M72 116 L60 158 M72 116 L84 158 M72 80 L54 94 M72 80 L90 94"/>
<circle class="s t" cx="128" cy="98" r="11"/>
<path class="s t" d="M128 109 L128 140 M128 140 L118 166 M128 140 L138 166 M128 118 L114 128 M128 118 L142 128"/>
<path class="s r" d="M60 30 L60 14 M52 22 L60 14 L68 22"/>`},
{id:"oniisan",kana:"おにいさん",romaji:"oniisan",en:"older brother",lesson:1,art:`
<circle class="s" cx="72" cy="52" r="14"/>
<path class="s t" d="M66 50 Q69 47 72 50 M76 50 Q79 47 82 50"/>
<path class="s" d="M72 66 L72 116 M72 116 L60 158 M72 116 L84 158 M72 80 L54 94 M72 80 L90 94"/>
<circle class="s t" cx="128" cy="98" r="11"/>
<path class="s t" d="M128 109 L128 140 M128 140 L118 166 M128 140 L138 166 M128 118 L114 128 M128 118 L142 128"/>
<path class="s r" d="M60 30 L60 14 M52 22 L60 14 L68 22"/>`},
{id:"imouto",kana:"いもうと",romaji:"imouto",en:"younger sister",lesson:1,art:`
<circle class="s" cx="130" cy="56" r="14"/>
<path class="s t" d="M124 54 Q127 51 130 54 M134 54 Q137 51 140 54"/>
<path class="s" d="M130 70 L130 116 M130 116 L118 156 M130 116 L142 156 M130 84 L114 98 M130 84 L146 98"/>
<circle class="s r" cx="72" cy="88" r="12"/>
<path class="s r" d="M62 82 Q60 70 66 70 M82 82 Q84 70 78 70"/>
<path class="s r" d="M72 100 L72 132 M72 132 L62 158 M72 132 L82 158 M72 108 L60 118 M72 108 L84 118"/>
<path class="s r" d="M60 66 L60 50 M52 58 L60 50 L68 58"/>`},
{id:"otouto",kana:"おとうと",romaji:"otouto",en:"younger brother",lesson:1,art:`
<circle class="s" cx="130" cy="56" r="14"/>
<path class="s t" d="M124 54 Q127 51 130 54 M134 54 Q137 51 140 54"/>
<path class="s" d="M130 70 L130 116 M130 116 L118 156 M130 116 L142 156 M130 84 L114 98 M130 84 L146 98"/>
<circle class="s r" cx="72" cy="90" r="12"/>
<path class="s t r" d="M66 88 Q69 85 72 88 M76 88 Q79 85 82 88"/>
<path class="s r" d="M72 102 L72 134 M72 134 L62 160 M72 134 L82 160 M72 110 L60 120 M72 110 L84 120"/>
<path class="s r" d="M60 68 L60 52 M52 60 L60 52 L68 60"/>`},
{id:"kagaku",kana:"かがく",romaji:"kagaku",en:"science",lesson:1,art:`
<path class="s" d="M86 44 L86 92 L54 148 Q50 158 62 158 L138 158 Q150 158 146 148 L114 92 L114 44"/>
<path class="s t" d="M78 44 L122 44"/>
<path class="fr" d="M68 118 L132 118 L146 148 Q150 158 138 158 L62 158 Q50 158 54 148 Z"/>
<circle style="fill:#fff" cx="88" cy="140" r="4"/><circle style="fill:#fff" cx="112" cy="134" r="5"/>
<circle class="s t r" cx="126" cy="70" r="4"/><circle class="s t r" cx="80" cy="60" r="3"/>`},
{id:"seiji",kana:"せいじ",romaji:"seiji",en:"politics",lesson:1,art:`
<rect class="s" x="52" y="80" width="96" height="72" rx="4"/>
<path class="s" d="M78 80 L78 68 L122 68 L122 80"/>
<rect class="s r" x="86" y="72" width="28" height="6"/>
<path class="s r" d="M100 44 L100 72"/>
<path class="s t" d="M100 44 L118 52 L100 60 Z"/>
<path class="s t" d="M70 128 Q100 118 130 128"/>`},
{id:"bungaku",kana:"ぶんがく",romaji:"bungaku",en:"literature",lesson:1,art:`
<path class="s" d="M100 60 Q72 46 40 54 L40 138 Q72 130 100 146 Q128 130 160 138 L160 54 Q128 46 100 60 Z"/>
<path class="s" d="M100 60 L100 146"/>
<path class="s t" d="M52 74 L86 68 M52 90 L86 84 M52 106 L86 100"/>
<path class="s r" d="M150 60 L118 108 L112 128 L128 118 Z"/>
<path class="s t r" d="M118 108 L124 112"/>`}
];
