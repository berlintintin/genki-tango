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
<path class="s t r" d="M96 48 Q92 40 98 38 Q102 37 102 42 Q102 37 106 38 Q112 40 108 48 L102 56 Z"/>`},
{id:"kanji",kanji:"漢字",kana:"かんじ",romaji:"kanji",en:"kanji; Chinese character",lesson:6,art:`<rect class="s" x="52" y="52" width="72" height="72"/>
<path class="s t" d="M88 52 L88 124 M52 88 L124 88"/>
<path class="s" d="M120 120 L150 58 Q154 48 162 52 Q170 56 166 66 L136 130 L118 138 Z"/>
<path class="f" d="M118 138 L130 132 L124 120 Z"/>
<circle class="s r" cx="70" cy="140" r="8"/>`},
{id:"peeji",kana:"ページ",romaji:"peeji",en:"page",lesson:6,art:`<path class="s" d="M52 44 L120 44 L148 72 L148 156 L52 156 Z"/>
<path class="s" d="M120 44 L120 72 L148 72"/>
<path class="s t r" d="M66 88 L134 88 M66 104 L134 104 M66 120 L112 120"/>
<path class="s" d="M148 156 Q124 140 148 124 L148 156 Z"/>
<path class="s r" d="M126 44 L126 76 L138 68 L150 76 L150 44"/>`},
{id:"tsugi",kanji:"次",kana:"つぎ",romaji:"tsugi",en:"next",lesson:6,art:`<circle class="s" cx="54" cy="100" r="12"/>
<circle class="s" cx="98" cy="100" r="12"/>
<circle class="s r" cx="142" cy="100" r="16"/>
<path class="s t" d="M66 100 L86 100 M110 100 L126 100"/>
<path class="s r" d="M142 74 L142 58 M132 66 L142 56 L152 66"/>
<path class="fr" d="M142 96 L146 104 L138 104 Z"/>`},
{id:"okane",kanji:"お金",kana:"おかね",romaji:"okane",en:"money",lesson:6,art:`<circle class="s r" cx="78" cy="104" r="34"/>
<path class="s r" d="M78 86 L78 122 M66 94 L78 104 L90 94 M68 106 L88 106 M68 114 L88 114"/>
<path class="s" d="M112 88 L166 88 L166 140 L112 140 Z"/>
<circle class="s" cx="139" cy="114" r="12"/>
<path class="s t" d="M120 96 L120 132 M158 96 L158 132"/>`},
{id:"pasokon",kana:"パソコン",romaji:"pasokon",en:"personal computer",lesson:6,art:`<path class="s" d="M56 60 L144 60 L144 116 L56 116 Z"/>
<path class="s t r" d="M68 72 L110 72 M68 84 L96 84 M68 96 L120 96"/>
<path class="s" d="M40 138 L160 138 L150 116 L50 116 Z"/>
<path class="s" d="M86 116 L114 116 L118 126 L82 126 Z"/>`},
{id:"eakon",kana:"エアコン",romaji:"eakon",en:"air conditioner",lesson:6,art:`<rect class="s" x="40" y="56" width="120" height="46" rx="8"/>
<path class="s t" d="M52 90 L148 90"/>
<circle class="s r" cx="140" cy="72" r="4"/>
<path class="s r" d="M60 118 Q68 126 60 134 M84 118 Q92 126 84 134 M108 118 Q116 126 108 134"/>
<path class="s r" d="M132 116 L135 124 L143 124 L137 129 L139 137 L132 132 L125 137 L127 129 L121 124 L129 124 Z"/>`},
{id:"densha",kanji:"電車",kana:"でんしゃ",romaji:"densha",en:"train",lesson:6,art:`<path class="s" d="M56 50 L144 50 Q152 50 152 60 L152 132 Q152 140 144 140 L56 140 Q48 140 48 132 L48 60 Q48 50 56 50 Z"/>
<path class="s t" d="M64 66 L136 66 L136 92 L64 92 Z M100 66 L100 92"/>
<circle class="s r" cx="76" cy="112" r="7"/><circle class="s r" cx="124" cy="112" r="7"/>
<path class="s" d="M100 40 L100 50 M84 40 L116 40"/>
<path class="s" d="M64 140 L56 156 M136 140 L144 156"/>
<circle class="s" cx="72" cy="146" r="6"/><circle class="s" cx="128" cy="146" r="6"/>`},
{id:"kuni",kanji:"国",kana:"くに",romaji:"kuni",en:"country; place of origin",lesson:6,art:`<path class="s" d="M40 92 Q52 76 72 84 Q88 68 108 80 Q128 72 144 88 Q162 88 158 108 Q160 128 140 128 L60 128 Q40 128 40 108 Z"/>
<path class="s" d="M100 84 L100 44"/>
<path class="s r" d="M100 44 Q124 50 100 62 L100 84"/>
<path class="s t" d="M64 112 L136 112"/>`},
{id:"konshuu",kanji:"今週",kana:"こんしゅう",romaji:"konshuu",en:"this week",lesson:6,art:`<rect class="s" x="34" y="72" width="132" height="44" rx="4"/>
<path class="s t" d="M52 72 L52 116 M70 72 L70 116 M88 72 L88 116 M106 72 L106 116 M124 72 L124 116 M142 72 L142 116"/>
<path class="s r" d="M34 70 L168 70 L168 118 L34 118 Z"/>
<path class="s r" d="M100 56 L100 44 M92 50 L100 42 L108 50"/>`},
{id:"raishuu",kanji:"来週",kana:"らいしゅう",romaji:"raishuu",en:"next week",lesson:6,art:`<rect class="s" x="30" y="76" width="66" height="40" rx="4"/>
<path class="s t" d="M46 76 L46 116 M62 76 L62 116 M78 76 L78 116"/>
<rect class="s r" x="112" y="76" width="66" height="40" rx="4"/>
<path class="s r" d="M128 76 L128 116 M144 76 L144 116 M160 76 L160 116"/>
<path class="s r" d="M98 96 L110 96 M102 88 L110 96 L102 104"/>`},
{id:"rainen",kanji:"来年",kana:"らいねん",romaji:"rainen",en:"next year",lesson:6,art:`<rect class="s" x="40" y="60" width="60" height="96" rx="4"/>
<path class="s t" d="M40 84 L100 84 M40 100 L100 100 M40 116 L100 116 M40 132 L100 132 M56 60 L56 132 M72 60 L72 132 M88 60 L88 132"/>
<rect class="s r" x="120" y="60" width="52" height="96" rx="4"/>
<path class="s r" d="M120 84 L172 84 M136 60 L136 156 M154 60 L154 156"/>
<path class="s r" d="M104 106 L118 106 M108 98 L118 106 L108 114"/>`},
{id:"yoru",kanji:"夜",kana:"よる",romaji:"yoru",en:"night",lesson:6,art:`<path class="s" d="M118 44 Q78 44 78 92 Q78 140 122 148 Q92 132 92 92 Q92 58 118 44 Z"/>
<path class="s r" d="M60 60 L63 68 L71 68 L65 73 L67 81 L60 76 L53 81 L55 73 L49 68 L57 68 Z"/>
<path class="s r" d="M138 90 L141 98 L149 98 L143 103 L145 111 L138 106 L131 111 L133 103 L127 98 L135 98 Z"/>
<circle class="fr" cx="150" cy="60" r="4"/><circle class="fr" cx="64" cy="120" r="4"/>`},
{id:"taihen",kanji:"大変",kana:"たいへん",romaji:"taihen",en:"tough (situation)",lesson:6,art:`<rect class="s" x="56" y="40" width="88" height="44" rx="4"/>
<path class="s t" d="M70 40 L70 84 M100 40 L100 84 M130 40 L130 84 M56 62 L144 62"/>
<circle class="s" cx="100" cy="106" r="13"/>
<path class="s" d="M100 119 L100 140 M100 128 L84 138 M100 128 L116 138 M100 84 L100 93 M92 100 L88 92 M108 100 L112 92"/>
<path class="s r" d="M78 148 Q86 142 88 152 M122 148 Q130 142 132 152"/>
<path class="s t r" d="M74 108 Q66 104 68 114 M126 108 Q134 104 132 114"/>`},
{id:"asobu",kanji:"遊ぶ",kana:"あそぶ",romaji:"asobu",en:"to play; to spend time pleasantly",lesson:6,art:`<circle class="s" cx="80" cy="70" r="14"/>
<path class="s" d="M80 84 L80 122 M80 122 L68 152 M80 122 L92 152 M80 96 L58 88 M80 96 L104 84"/>
<circle class="s r" cx="130" cy="66" r="18"/>
<path class="s r" d="M130 48 L130 84 M112 66 L148 66 M117 53 L143 79 M117 79 L143 53"/>
<path class="s t r" d="M50 60 L46 50 M104 40 L108 30"/>`},
{id:"isogu",kanji:"急ぐ",kana:"いそぐ",romaji:"isogu",en:"to hurry",lesson:6,art:`<circle class="s" cx="108" cy="52" r="14"/>
<path class="s" d="M108 66 Q122 86 112 104 M112 104 L92 122 L86 148 M112 104 L134 116"/>
<path class="s" d="M108 78 L88 66 M112 82 L134 72"/>
<path class="s r" d="M30 90 L70 90 M26 108 L62 108 M38 126 L70 126"/>
<path class="s t r" d="M120 40 L128 32 M96 34 L92 26"/>`},
{id:"kaesu",kanji:"返す",kana:"かえす",romaji:"kaesu",en:"to return (a thing)",lesson:6,art:`<rect class="s r" x="80" y="44" width="40" height="30" rx="3"/>
<path class="s r" d="M80 59 L120 59 M100 44 L100 74"/>
<path class="s" d="M40 150 Q40 128 60 124 L60 116 Q68 114 68 122 M60 124 L76 124 Q84 124 84 132"/>
<path class="s" d="M160 150 Q160 128 140 124 L140 116 Q132 114 132 122 M140 124 L124 124 Q116 124 116 132"/>
<path class="s r" d="M74 96 Q100 82 126 96 M126 96 L118 86 M126 96 L114 100"/>`},
{id:"kesu",kanji:"消す",kana:"けす",romaji:"kesu",en:"to turn off; to erase",lesson:6,art:`<circle class="s" cx="100" cy="72" r="24"/>
<path class="s" d="M100 72 L100 50 M84 56 Q78 66 82 78 M116 56 Q122 66 118 78 M90 90 L110 90"/>
<path class="s r" d="M62 108 L138 108"/>
<rect class="s" x="86" y="112" width="28" height="44" rx="4"/>
<path class="s" d="M100 112 L100 100"/>
<path class="s r" d="M52 60 L64 72 M64 60 L52 72"/>`},
{id:"shinu",kanji:"死ぬ",kana:"しぬ",romaji:"shinu",en:"to die",lesson:6,art:`<path class="s" d="M56 150 Q56 84 100 84 Q144 84 144 150 Z"/>
<path class="s" d="M100 84 L100 60 M84 72 L116 72"/>
<path class="s r" d="M84 108 L96 120 M96 108 L84 120 M104 108 L116 120 M116 108 L104 120"/>
<path class="s t" d="M88 136 Q100 130 112 136"/>
<path class="s r" d="M40 150 L160 150"/>`},
{id:"tabakoosuu",kanji:"たばこを吸う",kana:"たばこをすう",romaji:"tabako o suu",en:"to smoke",lesson:6,art:`<path class="s" d="M44 120 L128 120 L128 134 L44 134 Z"/>
<path class="s r" d="M128 120 L128 134 L146 134 L146 120 Z"/>
<path class="s t" d="M60 120 L60 134 M76 120 L76 134"/>
<path class="s r" d="M48 100 Q40 88 48 76 Q56 88 48 100 M48 76 Q40 64 48 52 M70 100 Q62 88 70 76 Q78 88 70 100 M70 76 Q62 64 70 52"/>`},
{id:"tsukau",kanji:"使う",kana:"つかう",romaji:"tsukau",en:"to use",lesson:6,art:`<path class="s" d="M60 152 Q60 128 84 124 L120 116 Q128 114 130 122 Q132 130 122 134 L104 140 Q120 134 130 140"/>
<path class="s" d="M60 152 Q74 158 92 154"/>
<path class="s r" d="M116 118 L150 52 Q154 42 162 46 Q170 50 166 60 L138 124 L120 132 Z"/>
<path class="f" d="M120 132 L132 126 L128 114 Z"/>`},
{id:"hairu",kanji:"入る",kana:"はいる",romaji:"hairu",en:"to enter",lesson:6,art:`<path class="s" d="M60 40 L120 40 L120 156 L60 156"/>
<path class="s" d="M120 58 L120 138 L138 132 L138 64 Z"/>
<circle class="f" cx="128" cy="100" r="3"/>
<circle class="s r" cx="44" cy="66" r="11"/>
<path class="s r" d="M44 77 L44 108 M44 84 L32 96 M44 84 L56 96 M44 108 L36 134 M44 108 L52 134"/>
<path class="s r" d="M64 100 L104 100 M92 90 L108 100 L92 110"/>`},
{id:"motsu",kanji:"持つ",kana:"もつ",romaji:"motsu",en:"to carry; to hold",lesson:6,art:`<circle class="s" cx="100" cy="46" r="14"/>
<path class="s" d="M100 60 L100 96 M100 72 L74 92 M100 72 L126 92"/>
<path class="s" d="M100 96 L86 152 M100 96 L114 152"/>
<rect class="s" x="70" y="92" width="60" height="40" rx="3"/>
<path class="s t" d="M84 92 Q84 82 100 82 Q116 82 116 92"/>
<path class="s r" d="M70 112 L130 112"/>`},
{id:"yasumu",kanji:"休む",kana:"やすむ",romaji:"yasumu",en:"to be absent; to rest",lesson:6,art:`<circle class="s" cx="72" cy="86" r="14"/>
<path class="s t" d="M65 84 Q68 81 71 84 M75 84 Q78 81 81 84"/>
<path class="s" d="M72 100 Q72 130 100 130 L140 130"/>
<path class="s" d="M72 108 L52 128 M100 130 L100 108 Q100 100 112 100 L140 100 L140 130"/>
<path class="s r" d="M118 74 Q112 66 118 58 Q124 66 118 74 M136 78 Q130 70 136 62 Q142 70 136 78"/>
<path class="s t r" d="M118 74 L118 96 M136 78 L136 96"/>`},
{id:"shimeru",kanji:"閉める",kana:"しめる",romaji:"shimeru",en:"to close (something)",lesson:6,art:`<path class="s" d="M74 48 L126 48 L126 152 L74 152 Z"/>
<circle class="f" cx="118" cy="100" r="3"/>
<path class="s r" d="M30 100 L58 100 M46 90 L58 100 L46 110 M170 100 L142 100 M154 90 L142 100 L154 110"/>`},
{id:"oshieru",kanji:"教える",kana:"おしえる",romaji:"oshieru",en:"to teach; to instruct",lesson:6,art:`<rect class="s" x="34" y="44" width="74" height="52" rx="2"/>
<path class="s t r" d="M46 60 Q58 52 70 60 M46 74 L94 74 M46 84 L80 84"/>
<circle class="s" cx="58" cy="118" r="12"/>
<path class="s" d="M58 130 L58 152 M50 156 L66 156 L58 140 Z M58 118 L44 106"/>
<circle class="s r" cx="138" cy="118" r="12"/>
<path class="s r" d="M138 130 L138 150 M130 156 L146 156 L138 140 Z"/>
<path class="s r" d="M84 118 L124 118 M112 108 L128 118 L112 128"/>`},
{id:"wasureru",kanji:"忘れる",kana:"わすれる",romaji:"wasureru",en:"to forget; to leave behind",lesson:6,art:`<circle class="s" cx="76" cy="90" r="30"/>
<path class="s t" d="M66 84 L74 88 M86 84 L78 88"/>
<path class="s t" d="M68 104 L84 104"/>
<path class="s r" d="M108 74 Q150 70 150 100 Q150 122 122 124 L112 134 L116 120 Q104 112 106 94 Q108 78 118 74"/>
<path class="s r" d="M122 92 Q130 100 122 108 M138 92 Q146 100 138 108" stroke-dasharray="3 3"/>
<path class="s r" d="M124 148 Q124 138 132 138 L146 138 Q154 138 154 148"/>`},
{id:"oriru",kanji:"降りる",kana:"おりる",romaji:"oriru",en:"to get off",lesson:6,art:`<path class="s" d="M100 128 L156 128 L156 96 Q156 88 148 88 L108 88 Q100 88 100 96 Z"/>
<path class="s t" d="M114 96 L138 96 L138 116 L114 116 Z"/>
<circle class="s" cx="118" cy="130" r="9"/><circle class="s" cx="148" cy="130" r="9"/>
<circle class="s r" cx="56" cy="72" r="12"/>
<path class="s r" d="M56 84 L56 116 M56 92 L44 104 M56 92 L68 104 M56 116 L46 142 M56 116 L66 142"/>
<path class="s r" d="M56 150 L56 122 M46 132 L56 122 L66 132" transform="translate(0,20)"/>
<path class="s r" d="M84 96 L84 130 M74 120 L84 132 L94 120"/>`},
{id:"kariru",kanji:"借りる",kana:"かりる",romaji:"kariru",en:"to borrow",lesson:6,art:`<rect class="s r" x="82" y="42" width="38" height="28" rx="3"/>
<path class="s r" d="M82 56 L120 56 M101 42 L101 70"/>
<path class="s" d="M160 150 Q160 128 140 124 L140 116 Q132 114 132 122 M140 124 L124 124 Q116 124 116 132"/>
<path class="s" d="M40 150 Q40 128 60 124 L60 116 Q68 114 68 122 M60 124 L76 124 Q84 124 84 132"/>
<path class="s r" d="M126 88 Q100 74 74 88 M74 88 L82 78 M74 88 L86 92" stroke-dasharray="4 3"/>
<circle class="s r" cx="150" cy="64" r="10"/><path class="s r" d="M150 64 L150 56 M150 64 L156 68"/>`},
{id:"shawaaoabiru",kanji:"シャワーを浴びる",kana:"シャワーをあびる",romaji:"shawaa o abiru",en:"to take a shower",lesson:6,art:`<path class="s" d="M60 40 L60 56 Q60 62 68 62 L108 62"/>
<path class="s" d="M96 56 L120 56 Q126 56 126 50 Q126 44 120 44 L108 44"/>
<path class="s r" d="M72 70 L66 92 M88 70 L82 92 M104 70 L98 92 M120 70 L114 92"/>
<circle class="s" cx="92" cy="112" r="11"/>
<path class="s" d="M92 123 L92 148 M92 130 L80 142 M92 130 L104 142"/>
<path class="s r" d="M76 104 L72 116 M108 104 L104 116"/>`},
{id:"tsukeru",kana:"つける",romaji:"tsukeru",en:"to turn on",lesson:6,art:`<circle class="s r" cx="100" cy="72" r="22"/>
<path class="s r" d="M100 72 L100 50 M84 58 Q78 68 82 80 M116 58 Q122 68 118 80 M90 88 L110 88"/>
<path class="s r" d="M100 38 L100 28 M66 46 L60 38 M134 46 L140 38 M58 72 L48 72 M142 72 L152 72"/>
<rect class="s" x="86" y="108" width="28" height="46" rx="4"/>
<path class="s" d="M100 108 L100 96"/>
<circle class="fr" cx="100" cy="140" r="7"/>`},
{id:"denwasuru",kanji:"電話する",kana:"でんわする",romaji:"denwa suru",en:"to call",lesson:6,art:`<path class="s" d="M58 60 Q54 52 62 48 Q78 42 88 52 Q96 60 90 72 Q86 80 92 92 Q104 116 128 128 Q140 134 148 126 Q158 120 166 128 Q176 138 170 148 Q166 158 152 158 Q100 158 64 108 Q46 82 58 60 Z"/>
<path class="s r" d="M120 44 Q120 32 132 32 Q144 32 144 44 Q144 54 132 58 L132 66"/>
<circle class="fr" cx="132" cy="78" r="4"/>
<path class="s r" d="M96 40 L88 32 M104 30 L100 20"/>`},
{id:"tsuretekuru",kanji:"連れてくる",kana:"つれてくる",romaji:"tsurete kuru",en:"to bring (a person)",lesson:6,art:`<circle class="s" cx="60" cy="60" r="13"/>
<path class="s" d="M60 73 L60 116 M60 116 L50 150 M60 116 L70 150 M60 88 L82 100"/>
<circle class="s r" cx="118" cy="66" r="13"/>
<path class="s r" d="M118 79 L118 120 M118 120 L108 152 M118 120 L128 152 M118 92 L98 102"/>
<path class="s" d="M82 100 L98 102"/>
<path class="s r" d="M138 120 L168 120 M156 110 L172 120 L156 130"/>`},
{id:"mottekuru",kanji:"持ってくる",kana:"もってくる",romaji:"motte kuru",en:"to bring (a thing)",lesson:6,art:`<circle class="s" cx="76" cy="52" r="13"/>
<path class="s" d="M76 65 L76 112 M76 112 L66 150 M76 112 L88 148 M76 82 L96 94"/>
<rect class="s" x="96" y="90" width="40" height="34" rx="3"/>
<path class="s t" d="M108 90 Q108 82 116 82 Q124 82 124 90"/>
<path class="s r" d="M150 108 Q170 120 150 132 M150 132 L160 128 M150 132 L154 120"/>`},
{id:"atode",kanji:"後で",kana:"あとで",romaji:"atode",en:"later on",lesson:6,art:`<circle class="s" cx="58" cy="100" r="26"/>
<path class="s" d="M58 100 L58 84 M58 100 L70 108"/>
<circle class="s r" cx="146" cy="100" r="26"/>
<path class="s r" d="M146 100 L146 84 M146 100 L160 108"/>
<path class="s" d="M90 100 L118 100 M106 90 L120 100 L106 110"/>`},
{id:"sugu",kana:"すぐ",romaji:"sugu",en:"right away",lesson:6,art:`<path class="s r" d="M40 100 L128 100"/>
<path class="s r" d="M128 100 L104 78 M128 100 L104 122"/>
<path class="s r" d="M96 68 L108 60 M100 132 L112 140"/>
<path class="s t" d="M30 84 L46 84 M30 116 L46 116"/>
<path class="s r" d="M150 60 L154 68 L162 68 L156 73 L158 81 L150 76 L142 81 L144 73 L138 68 L146 68 Z"/>`},
{id:"yukkuri",kana:"ゆっくり",romaji:"yukkuri",en:"slowly; leisurely; unhurriedly",lesson:6,art:`<path class="s" d="M56 128 Q56 104 88 104 Q124 104 124 128 Z"/>
<path class="s" d="M56 128 L128 128 L128 138 L56 138 Z"/>
<circle class="s r" cx="90" cy="118" r="12"/>
<path class="s" d="M124 116 Q150 108 156 128 L146 128 Q142 116 128 120"/>
<path class="s r" d="M56 96 L50 84 M64 92 L60 80"/>
<path class="s t" d="M40 138 L150 138"/>`},
{id:"kekkoudesu",kanji:"結構です",kana:"けっこうです",romaji:"kekkou desu",en:"That would be fine; not necessary",lesson:6,art:`<circle class="s" cx="70" cy="66" r="14"/>
<path class="s" d="M70 80 L70 124 M70 124 L60 154 M70 124 L80 154 M70 96 L92 88"/>
<path class="s" d="M116 150 L116 96 Q116 84 128 86 L128 108 L136 108 Q146 108 146 118 L146 148"/>
<path class="s t" d="M124 116 L124 148 M132 116 L132 148"/>
<path class="s r" d="M96 60 L96 88"/>`},
{id:"hontoudesuka",kanji:"本当ですか",kana:"ほんとうですか",romaji:"hontou desu ka",en:"Really?",lesson:6,art:`<circle class="s" cx="92" cy="96" r="42"/>
<circle class="s r" cx="78" cy="90" r="8"/><circle class="s r" cx="106" cy="90" r="8"/>
<circle class="f" cx="78" cy="90" r="3"/><circle class="f" cx="106" cy="90" r="3"/>
<path class="s" d="M84 118 Q92 112 100 118"/>
<path class="s r" d="M142 54 Q142 42 154 42 Q166 42 166 56 Q166 68 152 72 L152 84"/>
<circle class="fr" cx="152" cy="100" r="4"/>`}
];