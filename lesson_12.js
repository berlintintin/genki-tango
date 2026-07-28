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
<path class="s t r" d="M148 46 L162 32"/>`},
{id:"infuruenza",kana:"インフルエンザ",romaji:"infuruenza",en:"influenza",lesson:12,art:`<circle class="s r" cx="100" cy="100" r="34"/>
<path class="s r" d="M100 66 L100 46 M100 134 L100 154 M66 100 L46 100 M134 100 L154 100 M76 76 L62 62 M124 76 L138 62 M76 124 L62 138 M124 124 L138 138"/>
<circle class="fr" cx="46" cy="46" r="5"/><circle class="fr" cx="154" cy="150" r="5"/><circle class="fr" cx="150" cy="52" r="4"/>
<circle style="fill:#fff" cx="90" cy="92" r="5"/><circle style="fill:#fff" cx="112" cy="106" r="6"/>`},
{id:"kaze12",kanji:"風邪",kana:"かぜ",romaji:"kaze",en:"cold",lesson:12,art:`<circle class="s" cx="94" cy="88" r="30"/>
<path class="s t" d="M82 82 L90 86 M106 82 L98 86"/>
<path class="s t" d="M84 104 Q94 100 104 104"/>
<path class="fr" d="M94 96 Q86 108 94 118 Q102 108 94 96 Z"/>
<path class="s r" d="M124 78 L162 66 L156 92 L140 84 Z"/>
<path class="s t" d="M120 118 L156 118 L156 152 L120 152 Z M120 128 Q138 122 156 128"/>`},
{id:"hoomushikku",kana:"ホームシック",romaji:"hoomushikku",en:"homesickness",lesson:12,art:`<circle class="s" cx="70" cy="120" r="24"/>
<path class="s t" d="M60 112 L68 116 M80 112 L72 116"/>
<path class="s t" d="M60 132 Q70 126 80 132"/>
<path class="fr" d="M82 128 Q90 138 82 148 Q76 138 82 128 Z"/>
<path class="s" d="M96 72 Q96 60 124 60 Q152 60 152 72 Q152 78 148 80"/>
<path class="s" d="M108 66 L140 44 L172 66 M116 60 L116 92 L164 92 L164 60"/>
<path class="fr" d="M140 76 Q134 70 140 66 Q146 70 140 76 Z"/>`},
{id:"arerugii",kana:"アレルギー",romaji:"arerugii",en:"allergy",lesson:12,art:`<circle class="s" cx="76" cy="80" r="28"/>
<path class="s t" d="M64 74 Q68 70 72 74 M80 74 Q84 70 88 74"/>
<path class="fr" d="M72 92 Q76 100 84 96"/>
<path class="s r" d="M96 70 Q108 64 104 78 M104 96 Q116 92 110 104 M92 104 Q100 116 88 112"/>
<circle class="s r" cx="150" cy="120" r="12"/>
<path class="s r" d="M150 120 L150 96 M150 120 L172 132 M150 120 L128 132 M150 120 L134 108 M150 120 L166 108"/>
<circle class="fr" cx="150" cy="120" r="4"/>`},
{id:"juusu",kana:"ジュース",romaji:"juusu",en:"juice",lesson:12,art:`<path class="s" d="M68 76 L132 76 L124 156 L76 156 Z"/>
<path class="s" d="M72 108 L128 108"/>
<path class="s r" d="M112 76 L124 40 L136 44"/>
<path class="s t" d="M86 92 Q100 98 114 92"/>
<circle class="s r" cx="150" cy="96" r="16"/>
<path class="s r" d="M134 96 L166 96 M150 80 L150 112"/>`},
{id:"tamago",kanji:"卵",kana:"たまご",romaji:"tamago",en:"egg",lesson:12,art:`<path class="s" d="M56 108 Q56 60 82 60 Q108 60 108 108 Q108 140 82 140 Q56 140 56 108 Z"/>
<path class="s" d="M118 120 Q112 92 136 88 Q166 84 168 116 Q170 144 140 146 Q120 148 118 120 Z"/>
<ellipse class="fr" cx="144" cy="116" rx="14" ry="12"/>
<path class="s t" d="M72 84 Q80 78 88 84"/>`},
{id:"fuku",kanji:"服",kana:"ふく",romaji:"fuku",en:"clothes",lesson:12,art:`<path class="s" d="M100 40 Q86 40 88 54 L64 66"/>
<path class="s r" d="M96 46 L104 46"/>
<path class="s" d="M100 54 L72 70 L82 92 L92 86 L92 150 L142 150 L142 86 L152 92 L162 70 L134 54 Q117 68 100 54 Z"/>
<path class="s t" d="M108 68 L108 96"/>`},
{id:"mono",kanji:"物",kana:"もの",romaji:"mono",en:"thing (concrete object)",lesson:12,art:`<path class="s" d="M60 80 L100 60 L140 80 L140 130 L100 150 L60 130 Z"/>
<path class="s" d="M60 80 L100 100 L140 80 M100 100 L100 150"/>
<path class="s t r" d="M100 100 L100 60"/>
<path class="fr" d="M150 54 L152 62 L160 60 L154 66 L158 74 L150 70 L142 74 L146 66 L140 60 L148 62 Z"/>`},
{id:"kippu",kanji:"切符",kana:"きっぷ",romaji:"kippu",en:"(train) ticket",lesson:12,art:`<path class="s" d="M40 78 L160 78 Q160 92 168 92 L168 108 Q160 108 160 122 L40 122 Q40 108 32 108 L32 92 Q40 92 40 78 Z"/>
<circle class="s t r" cx="66" cy="100" r="7"/>
<path class="s t r" d="M88 92 L140 92 M88 108 L124 108" stroke-dasharray="4 4"/>
<path class="s t" d="M148 84 Q152 80 156 84 L156 92 L148 92 Z"/>`},
{id:"dai",kanji:"〜代",kana:"〜だい",romaji:"dai",en:"charge; fee",lesson:12,art:`<path class="s" d="M60 40 L140 40 L140 150 L128 142 L116 150 L104 142 L92 150 L80 142 L68 150 L60 142 Z"/>
<path class="s t r" d="M74 64 L126 64 M74 82 L126 82 M74 100 L110 100"/>
<path class="s" d="M100 108 L100 96 M94 100 Q94 96 100 96 Q106 96 106 101 Q106 106 100 106 Q94 106 94 111 Q94 116 100 116 Q106 116 106 112 M100 116 L100 126 M92 104 L108 104 M92 110 L108 110"/>`},
{id:"youji",kanji:"用事",kana:"ようじ",romaji:"youji",en:"business to take care of",lesson:12,art:`<rect class="s" x="52" y="48" width="96" height="112" rx="4"/>
<rect class="s" x="80" y="40" width="40" height="16" rx="4"/>
<path class="s r" d="M66 76 L78 76 L78 88 L66 88 Z M62 82 L70 90 L84 74"/>
<path class="s t" d="M92 82 L134 82"/>
<path class="s r" d="M66 106 L78 106 L78 118 L66 118 Z M62 112 L70 120 L84 104"/>
<path class="s t" d="M92 112 L134 112"/>
<path class="s t" d="M66 138 L78 138 L78 148 L66 148 Z M92 142 L124 142"/>`},
{id:"otearai12",kanji:"お手洗い",kana:"おてあらい",romaji:"otearai",en:"restroom",lesson:12,art:`<rect class="s" x="44" y="40" width="112" height="120" rx="4"/>
<path class="s" d="M100 40 L100 160"/>
<circle class="s" cx="72" cy="70" r="9"/>
<path class="s" d="M72 79 L72 108 M60 88 L84 88 M72 108 L64 134 M72 108 L80 134"/>
<circle class="s r" cx="128" cy="70" r="9"/>
<path class="s r" d="M118 108 L128 82 L138 108 Z M128 108 L120 134 M128 108 L136 134"/>`},
{id:"shiai",kanji:"試合",kana:"しあい",romaji:"shiai",en:"match; game",lesson:12,art:`<circle class="s" cx="52" cy="70" r="13"/>
<path class="s" d="M52 83 L52 120 M52 120 L42 152 M52 120 L62 152 M52 96 L68 108"/>
<circle class="s" cx="148" cy="70" r="13"/>
<path class="s" d="M148 83 L148 120 M148 120 L138 152 M148 120 L158 152 M148 96 L132 108"/>
<circle class="s r" cx="100" cy="104" r="16"/>
<path class="s r f" d="M100 92 L108 100 L104 112 L96 112 L92 100 Z"/>
<path class="s t r" d="M84 60 L92 68 M92 60 L84 68 M116 60 L108 68 M108 60 L116 68 M100 50 L100 62"/>`},
{id:"seiji12",kanji:"政治",kana:"せいじ",romaji:"seiji",en:"politics",lesson:12,art:`<path class="s" d="M60 96 L60 150 M140 96 L140 150 M76 96 L76 150 M124 96 L124 150 M92 96 L92 150 M108 96 L108 150"/>
<path class="s" d="M48 150 L152 150 L152 160 L48 160 Z M48 96 L152 96"/>
<path class="s" d="M64 96 Q64 66 100 66 Q136 66 136 96"/>
<path class="s r" d="M100 40 L100 66 M100 40 L100 30"/>
<circle class="fr" cx="100" cy="26" r="5"/>`},
{id:"seiseki",kanji:"成績",kana:"せいせき",romaji:"seiseki",en:"grade (on a test)",lesson:12,art:`<path class="s" d="M52 40 L134 40 L148 54 L148 160 L52 160 Z"/>
<path class="s t" d="M134 40 L134 54 L148 54"/>
<circle class="s r" cx="98" cy="92" r="30"/>
<path class="s t" d="M66 132 L130 132 M66 146 L110 146"/>
<path class="fr" d="M100 68 L104 78 L114 78 L106 85 L109 95 L100 89 L91 95 L94 85 L86 78 L96 78 Z"/>`},
{id:"kanojo",kanji:"彼女",kana:"かのじょ",romaji:"kanojo",en:"she; girlfriend",lesson:12,art:`<circle class="s" cx="88" cy="60" r="16"/>
<path class="s r" d="M72 60 Q68 88 76 104 M104 60 Q108 88 100 104"/>
<path class="s t" d="M82 58 Q85 55 88 58 M92 58 Q95 55 98 58 M84 68 Q88 71 92 68"/>
<path class="s" d="M88 76 L82 108 L96 108 Z M88 108 L88 150 M78 152 L98 152"/>
<path class="fr" d="M130 62 Q120 52 130 46 Q140 52 130 62 Z M130 46 Q124 38 130 34 Q136 38 130 46"/>
<path class="s r" d="M118 60 L128 60"/>`},
{id:"kare",kanji:"彼",kana:"かれ",romaji:"kare",en:"he; boyfriend",lesson:12,art:`<circle class="s" cx="100" cy="56" r="16"/>
<path class="s t" d="M92 52 L108 52 M91 46 L109 46"/>
<path class="s t" d="M94 58 Q97 55 100 58 M104 58 Q107 55 110 58"/>
<path class="s" d="M100 72 L100 122 M100 122 L88 158 M100 122 L112 158 M100 88 L80 102 M100 88 L120 102"/>
<path class="fr" d="M140 66 Q130 56 140 50 Q150 56 140 66 Z"/>`},
{id:"kareshi",kanji:"彼氏",kana:"かれし",romaji:"kareshi",en:"boyfriend",lesson:12,art:`<circle class="s" cx="66" cy="60" r="13"/>
<path class="s" d="M66 73 L66 116 M66 116 L56 152 M66 116 L76 152 M66 88 L86 100"/>
<circle class="s" cx="134" cy="60" r="13"/>
<path class="s r" d="M118 54 Q134 44 150 54 L150 60 Q134 66 118 60 Z"/>
<path class="s" d="M134 73 L134 116 M134 116 L124 152 M134 116 L144 152 M134 88 L114 100"/>
<path class="s r" d="M86 100 L114 100"/>
<path class="fr" d="M100 50 Q90 40 100 34 Q110 40 100 50 Z"/>`},
{id:"imi",kanji:"意味",kana:"いみ",romaji:"imi",en:"meaning",lesson:12,art:`<rect class="s" x="34" y="70" width="52" height="60" rx="3"/>
<path class="s t r" d="M44 86 L76 86 M44 100 L76 100 M44 114 L64 114"/>
<path class="s" d="M92 100 L124 100 M112 88 L128 100 L112 112"/>
<circle class="s r" cx="152" cy="86" r="18"/>
<path class="s r" d="M144 100 L144 112 Q144 120 152 120 Q160 120 160 112 L160 100"/>
<path class="s r" d="M148 124 L156 124"/>
<path class="s t r" d="M152 62 L152 54 M170 72 L176 66 M134 72 L128 66"/>`},
{id:"semai",kanji:"狭い",kana:"せまい",romaji:"semai",en:"narrow; not spacious",lesson:12,art:`<path class="s" d="M72 40 L72 160 M128 40 L128 160"/>
<path class="s r" d="M40 100 L68 100 M56 90 L68 100 L56 110 M160 100 L132 100 M144 90 L132 100 L144 110"/>
<circle class="s t" cx="100" cy="80" r="9"/>
<path class="s t" d="M100 89 L100 120 M92 100 L108 100 M100 120 L92 140 M100 120 L108 140"/>`},
{id:"hiroi",kanji:"広い",kana:"ひろい",romaji:"hiroi",en:"wide; spacious",lesson:12,art:`<path class="s" d="M40 44 L40 156 M160 44 L160 156"/>
<path class="s r" d="M60 100 L92 100 M74 90 L60 100 L74 110 M140 100 L108 100 M126 90 L140 100 L126 110"/>
<path class="s t" d="M44 150 L156 150"/>
<circle class="s t r" cx="100" cy="70" r="8"/>`},
{id:"warui",kanji:"悪い",kana:"わるい",romaji:"warui",en:"bad",lesson:12,art:`<path class="s r" d="M84 40 L84 96 L60 96 Q48 96 52 108 L64 148 Q68 160 84 160 L128 160 Q138 160 138 150 L138 100 Q138 96 128 96 L100 96 L100 52 Q100 40 92 40 Z"/>
<path class="s t r" d="M100 112 L100 144 M116 112 L116 144"/>
<path class="s t" d="M40 60 L52 60 M40 76 L54 76 M40 92 L52 92"/>`},
{id:"itai",kanji:"痛い",kana:"いたい",romaji:"itai",en:"hurt; painful",lesson:12,art:`<path class="s r" d="M100 40 L112 76 L148 68 L124 98 L154 120 L116 122 L108 158 L92 124 L54 132 L78 100 L48 78 L86 82 Z"/>
<path class="s" d="M74 128 L60 152 L82 148 M126 128 L140 152 L118 148"/>
<path class="s t" d="M92 96 L108 96 M100 88 L100 108"/>`},
{id:"amai",kanji:"甘い",kana:"あまい",romaji:"amai",en:"sweet",lesson:12,art:`<path class="s" d="M60 96 L108 96 L108 144 L60 144 Z M60 96 L74 82 L122 82 L108 96 M108 96 L122 82 L122 130 L108 144"/>
<path class="s t r" d="M74 112 L94 112 M74 126 L94 126"/>
<path class="fr" d="M138 60 L141 70 L151 70 L143 76 L146 86 L138 80 L130 86 L133 76 L125 70 L135 70 Z"/>
<path class="s t r" d="M132 108 L136 116 M150 104 L154 112 M140 130 L144 138"/>`},
{id:"ooi",kanji:"多い",kana:"おおい",romaji:"ooi",en:"there are many...",lesson:12,art:`<circle class="s" cx="72" cy="72" r="14"/><circle class="s" cx="112" cy="66" r="14"/><circle class="s r" cx="146" cy="88" r="14"/>
<circle class="s" cx="62" cy="112" r="14"/><circle class="s r" cx="100" cy="104" r="14"/><circle class="s" cx="138" cy="126" r="14"/>
<circle class="s r" cx="84" cy="140" r="14"/><circle class="s" cx="120" cy="146" r="14"/>`},
{id:"suteki",kanji:"素敵",kana:"すてき",romaji:"suteki",en:"nice",lesson:12,art:`<path class="s r" d="M100 44 L120 84 L100 104 L80 84 Z M80 84 L60 96 L100 156 L140 96 L120 84 M100 104 L100 156"/>
<path class="s t r" d="M80 84 L120 84"/>
<path class="fr" d="M46 60 L49 68 L57 68 L51 73 L53 81 L46 76 L39 81 L41 73 L35 68 L43 68 Z"/>
<path class="s t r" d="M150 70 L154 78 M158 100 L164 106 M40 118 L46 124"/>`},
{id:"aruku",kanji:"歩く",kana:"あるく",romaji:"aruku",en:"to walk",lesson:12,art:`<path class="s" d="M92 60 L108 60 Q118 60 116 72 L104 120 L86 158 L70 152 L84 118 L74 96 Q70 84 82 80 Z"/>
<path class="s t" d="M96 150 L96 142 M84 154 L84 146"/>
<path class="s r" d="M40 152 Q46 148 52 152 M56 140 Q62 136 68 140 M40 118 Q46 114 52 118"/>
<path class="s r" d="M132 96 L138 78 L156 84 M138 78 L134 60"/>`},
{id:"kazehiku12",kanji:"風邪をひく",kana:"かぜをひく",romaji:"kaze o hiku",en:"to catch a cold",lesson:12,art:`<circle class="s" cx="112" cy="70" r="16"/>
<path class="s t" d="M106 66 L112 70 M118 66 L112 70"/>
<path class="s t" d="M104 82 L120 82"/>
<path class="s" d="M112 86 Q108 118 114 140 M114 140 L102 168 M114 140 L126 166 M112 100 Q126 106 130 94"/>
<path class="s r" d="M30 60 Q70 48 96 60 Q70 60 40 72 M30 92 Q70 80 92 92 Q66 92 40 104"/>
<path class="s t r" d="M74 118 L70 126 M84 122 L80 130 M64 122 L60 130"/>`},
{id:"netsugaaru",kanji:"熱がある",kana:"ねつがある",romaji:"netsu ga aru",en:"to have a fever",lesson:12,art:`<path class="s" d="M40 130 L160 130 M48 130 L48 150 M152 130 L152 150"/>
<rect class="s t" x="50" y="118" width="40" height="12" rx="6"/>
<circle class="s" cx="70" cy="108" r="15"/>
<path class="s t" d="M62 104 L70 108 M78 104 L70 108"/>
<rect class="s r" x="52" y="90" width="36" height="8" rx="4"/>
<path class="s" d="M88 114 Q128 104 160 114 L160 130 L88 130 Z"/>
<path class="s r" d="M118 66 Q126 76 118 84 Q110 76 118 66 Z"/>
<path class="s t r" d="M138 60 Q144 68 138 74 M100 60 Q106 68 100 74"/>`},
{id:"nodogakawaku",kanji:"喉が渇く",kana:"のどがかわく",romaji:"nodo ga kawaku",en:"to become thirsty",lesson:12,art:`<circle class="s" cx="80" cy="72" r="30"/>
<path class="s t" d="M68 66 L76 70 M84 66 L92 70"/>
<path class="s" d="M70 84 Q80 92 90 84 L84 100 L76 100 Z"/>
<path class="s t r" d="M62 40 L58 30 M80 36 L80 26 M98 40 L102 30"/>
<path class="s" d="M118 96 L150 96 L144 150 L124 150 Z"/>
<path class="s t" d="M124 132 L144 132"/>
<path class="fr" d="M134 60 Q126 74 134 84 Q142 74 134 60 Z"/>`},
{id:"harau",kanji:"払う",kana:"はらう",romaji:"harau",en:"to pay",lesson:12,art:`<rect class="s r" x="58" y="66" width="60" height="36" rx="3" transform="rotate(-8 88 84)"/>
<circle class="fr" cx="88" cy="84" r="8" transform="rotate(-8 88 84)"/>
<path class="s" d="M40 150 Q40 124 62 120 L92 112 Q100 110 102 118 Q104 126 94 130 L82 134"/>
<path class="s" d="M160 150 Q160 124 138 120 L120 116"/>
<path class="s t r" d="M118 108 L118 96 M112 100 L118 94 L124 100"/>`},
{id:"nakusu",kana:"なくす",romaji:"nakusu",en:"to lose",lesson:12,art:`<path class="s t r" d="M64 96 L96 96 L96 128 L64 128 Z" stroke-dasharray="5 5"/>
<path class="s" d="M40 150 Q40 128 58 124 L58 116 Q66 114 66 122 M58 124 L74 124 Q82 124 82 132"/>
<path class="s" d="M120 150 Q120 128 138 124 L138 116 Q146 114 146 122 M138 124 L154 124 Q162 124 162 132"/>
<path class="s r" d="M104 60 Q104 48 116 48 Q128 48 128 60 Q128 70 116 74 L116 82"/>
<circle class="fr" cx="116" cy="94" r="4"/>
<path class="s t r" d="M80 62 Q76 54 82 52 M148 62 Q152 54 146 52"/>`},
{id:"kyoumigaaru",kanji:"興味がある",kana:"きょうみがある",romaji:"kyoumi ga aru",en:"to be interested (in...)",lesson:12,art:`<circle class="s" cx="80" cy="86" r="34"/>
<circle class="s r" cx="68" cy="82" r="8"/><circle class="s r" cx="92" cy="82" r="8"/>
<path style="fill:#fff" d="M66 79 a2 2 0 1 0 0.1 0 M90 79 a2 2 0 1 0 0.1 0"/>
<circle class="f" cx="68" cy="82" r="3"/><circle class="f" cx="92" cy="82" r="3"/>
<path class="s t" d="M70 102 Q80 110 92 102"/>
<path class="s r" d="M138 60 L142 74 L156 74 L146 82 L150 96 L138 88 L126 96 L130 82 L120 74 L134 74 Z"/>
<path class="s t r" d="M116 108 L124 100 M120 120 L130 114"/>`},
{id:"sekigaderu",kanji:"せきが出る",kana:"せきがでる",romaji:"seki ga deru",en:"to cough",lesson:12,art:`<circle class="s" cx="76" cy="70" r="16"/>
<path class="s t" d="M70 66 Q73 63 76 66 M80 66 Q83 63 86 66"/>
<path class="s" d="M78 86 Q66 96 72 116 M72 116 L58 152 M72 116 L86 148 M76 100 Q92 104 96 90"/>
<path class="s r" d="M104 66 Q114 60 112 72 M118 84 Q130 78 126 92 M100 88 Q108 100 96 104 M124 62 Q134 58 130 70"/>
<path class="s t r" d="M140 96 Q150 92 146 104"/>`},
{id:"wakareru",kanji:"別れる",kana:"わかれる",romaji:"wakareru",en:"to break up; to separate",lesson:12,art:`<path class="s r" d="M88 60 Q76 44 60 52 Q46 60 52 78 L88 128 L88 60 Z"/>
<path class="s r" d="M112 60 Q124 44 140 52 Q154 60 148 78 L112 128 L112 60 Z"/>
<path class="s t" d="M100 40 L90 60 L106 76 L96 96 L104 116"/>
<path class="s" d="M40 150 L40 132 M40 150 L30 168 M40 150 L50 166 M40 138 L28 146"/>
<path class="s" d="M160 150 L160 132 M160 150 L150 168 M160 150 L170 166 M160 138 L172 146"/>`},
{id:"kinchousuru",kanji:"緊張する",kana:"きんちょうする",romaji:"kinchou suru",en:"to get nervous",lesson:12,art:`<circle class="s" cx="100" cy="60" r="18"/>
<path class="s t" d="M90 54 L98 58 M110 54 L102 58"/>
<path class="s t r" d="M90 70 Q95 66 100 70 Q105 66 110 70"/>
<path class="s" d="M100 78 L100 124 M100 124 L86 158 M100 124 L114 158 M100 92 L82 104 M100 92 L118 104"/>
<path class="s t r" d="M60 50 Q54 58 60 66 M140 50 Q146 58 140 66"/>
<path class="s r" d="M70 92 Q60 88 62 98 M130 92 Q140 88 138 98"/>
<path class="s t" d="M74 122 Q64 118 66 128 M126 122 Q136 118 134 128"/>`},
{id:"shinpaisuru",kanji:"心配する",kana:"しんぱいする",romaji:"shinpai suru",en:"to worry",lesson:12,art:`<path class="s" d="M52 74 Q42 56 62 50 Q66 32 90 36 Q104 24 122 36 Q146 34 146 56 Q162 62 154 80 Q126 90 96 86 Q66 90 52 74 Z"/>
<path class="s t r" d="M70 100 L64 116 M96 100 L90 116 M122 100 L116 116"/>
<circle class="s" cx="100" cy="140" r="18"/>
<path class="s t" d="M91 134 Q94 138 98 135 M102 134 Q106 138 109 135"/>
<path class="s t" d="M90 152 Q100 146 110 152"/>`},
{id:"odaijini",kanji:"お大事に",kana:"おだいじに",romaji:"odaijini",en:"Get well soon.",lesson:12,art:`<path class="s" d="M40 140 L160 140 M48 140 L48 156 M152 140 L152 156"/>
<rect class="s t" x="50" y="128" width="38" height="12" rx="6"/>
<circle class="s" cx="69" cy="118" r="14"/>
<path class="s t" d="M63 116 L69 118 M75 116 L69 118 M64 126 Q69 129 74 126"/>
<path class="s" d="M88 124 Q126 116 158 124 L158 140 L88 140 Z"/>
<path class="s r" d="M120 96 L120 108 M114 102 L126 102"/>
<path class="fr" d="M132 70 Q126 76 132 88 Q138 76 132 70 Z M146 78 Q140 84 146 96 Q152 84 146 78 Z M118 80 Q112 86 118 98 Q124 86 118 80 Z"/>
<path class="s r" d="M132 88 L132 108 M146 96 L146 108 M118 98 L118 108"/>`},
{id:"genkiganai",kanji:"元気がない",kana:"げんきがない",romaji:"genki ga nai",en:"don't look well",lesson:12,art:`<path class="s r" d="M100 150 L100 96"/>
<path class="s r" d="M100 96 Q76 100 70 122 Q90 120 100 96 M100 96 Q80 82 82 60 Q98 70 100 96"/>
<path class="s" d="M60 150 L140 150"/>
<circle class="s" cx="140" cy="70" r="20"/>
<path class="s t" d="M131 66 L139 70 M149 66 L141 70"/>
<path class="s t" d="M131 82 Q140 76 149 82"/>
<path class="s r" d="M126 96 L124 110 M154 96 L156 110"/>`},
{id:"dekirudake",kana:"できるだけ",romaji:"dekirudake",en:"as much as possible",lesson:12,art:`<path class="s" d="M40 130 A60 60 0 0 1 160 130"/>
<path class="s t" d="M52 112 L62 118 M72 92 L80 100 M100 84 L100 96 M128 92 L120 100 M148 112 L138 118"/>
<path class="s r" d="M100 130 L142 92"/>
<circle class="f" cx="100" cy="130" r="6"/>
<path class="fr" d="M150 78 L153 86 L161 86 L155 91 L157 99 L150 94 L143 99 L145 91 L139 86 L147 86 Z"/>`},
{id:"tabun",kanji:"多分",kana:"たぶん",romaji:"tabun",en:"probably; maybe",lesson:12,art:`<circle class="s r" cx="100" cy="70" r="30"/>
<path class="s t" d="M100 56 L100 72 M100 82 L100 84"/>
<path class="s r" d="M88 58 Q88 46 100 46 Q112 46 112 56 Q112 64 100 68"/>
<path class="s t r" d="M60 40 Q50 46 54 56 M140 40 Q150 46 146 56"/>
<path class="s" d="M64 116 Q78 108 92 116 L92 150 M64 116 L64 150 M64 134 L92 134"/>
<path class="s" d="M112 116 Q126 108 140 116 L140 150 M112 116 L112 150 M112 134 L140 134"/>
<path class="s t" d="M100 128 L100 132"/>`},
{id:"mousugu",kana:"もうすぐ",romaji:"mousugu",en:"very soon; in a few moments/days",lesson:12,art:`<path class="s" d="M64 44 L136 44 M64 156 L136 156"/>
<path class="s" d="M72 44 Q72 84 100 100 Q72 116 72 156 M128 44 Q128 84 100 100 Q128 116 128 156"/>
<path class="fr" d="M84 132 Q100 122 116 132 L116 150 L84 150 Z"/>
<path class="s r" d="M100 100 L100 148"/>
<path class="s t r" d="M148 70 L164 70 M156 62 L164 70 L156 78"/>`},
{id:"hajimete",kanji:"初めて",kana:"はじめて",romaji:"hajimete",en:"for the first time",lesson:12,art:`<path class="s" d="M40 150 L160 150"/>
<path class="s" d="M100 150 L100 100"/>
<path class="s r" d="M100 100 Q78 100 74 78 Q96 76 100 100 Z M100 100 Q100 74 118 62 Q124 82 100 100 Z"/>
<path class="fr" d="M132 52 L135 60 L143 60 L137 65 L139 73 L132 68 L125 73 L127 65 L121 60 L129 60 Z"/>
<path class="s t r" d="M60 132 L72 132 M62 120 L74 122"/>`},
{id:"nisannichi",kanji:"二三日",kana:"にさんにち",romaji:"nisannichi",en:"for two to three days",lesson:12,art:`<rect class="s" x="36" y="56" width="128" height="92" rx="5"/>
<path class="s" d="M36 80 L164 80"/><path class="s" d="M60 48 L60 64 M140 48 L140 64"/>
<path class="s t" d="M78 80 L78 148 M122 80 L122 148"/>
<rect class="fr" x="80" y="88" width="40" height="52"/>
<circle class="s r" cx="56" cy="106" r="4"/><path class="s r" d="M48 128 L64 128"/>
<circle class="s r" cx="144" cy="106" r="4"/><path class="s r" d="M136 124 L152 124 M136 132 L152 132"/>`},
{id:"soreni",kana:"それに",romaji:"soreni",en:"moreover,...",lesson:12,art:`<path class="s" d="M50 56 L120 56 M50 84 L120 84 M50 112 L120 112"/>
<circle class="f" cx="40" cy="56" r="4"/><circle class="f" cx="40" cy="84" r="4"/><circle class="f" cx="40" cy="112" r="4"/>
<path class="s r" d="M50 144 L120 144"/><circle class="fr" cx="40" cy="144" r="4"/>
<path class="s r" d="M144 128 L144 160 M128 144 L160 144"/>`},
{id:"onaji",kanji:"同じ",kana:"おなじ",romaji:"onaji",en:"same",lesson:12,art:`<circle class="s" cx="60" cy="80" r="26"/>
<path class="s t" d="M50 74 Q54 70 58 74 M62 74 Q66 70 70 74 M52 88 Q60 94 68 88"/>
<circle class="s r" cx="140" cy="80" r="26"/>
<path class="s t r" d="M130 74 Q134 70 138 74 M142 74 Q146 70 150 74 M132 88 Q140 94 148 88"/>
<path class="s" d="M76 128 L124 128 M76 142 L124 142"/>`}
];
