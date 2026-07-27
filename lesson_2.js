/* =======================================================================
   lesson_2.js  —  Doodle Tango vocabulary, Lesson 2  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 2.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[2] = [
{id:"kasa",kanji:"傘",kana:"かさ",romaji:"kasa",en:"umbrella",lesson:2,art:`
<path class="s r" d="M100 44 Q160 48 168 96 Q150 84 134 96 Q117 84 100 96 Q83 84 66 96 Q50 84 32 96 Q40 48 100 44 Z"/>
<path class="s" d="M100 44 L100 34 M100 96 L100 150 Q100 166 88 166 Q78 166 78 156"/>
<path class="s t" d="M44 28 L40 40 M76 18 L74 30 M126 18 L128 30 M158 28 L162 40"/>`},
{id:"kutsu",kanji:"靴",kana:"くつ",romaji:"kutsu",en:"shoes",lesson:2,art:`
<path class="s" d="M44 78 L44 128 Q44 140 58 140 L146 140 Q166 140 164 122 Q162 108 140 104 L96 96 Q84 92 80 80 Q76 72 64 72 Q46 72 44 78 Z"/>
<path class="s t" d="M44 128 L164 128"/>
<path class="s t r" d="M86 92 L102 78 M94 98 L112 84 M104 102 L122 90"/>
<path class="s t" d="M116 156 L134 156 M148 156 L162 156"/>`},
{id:"sakana",kanji:"魚",kana:"さかな",romaji:"sakana",en:"fish",lesson:2,art:`
<path class="s" d="M36 104 Q80 60 128 82 Q150 92 156 104 Q150 116 128 126 Q80 148 36 104 Z"/>
<path class="s" d="M156 104 L184 80 L176 104 L184 128 Z"/>
<circle class="f" cx="70" cy="98" r="6"/>
<path class="s t" d="M116 88 Q124 104 116 120"/>
<circle class="s t r" cx="44" cy="56" r="6"/><circle class="s t r" cx="58" cy="40" r="4"/>`},
{id:"shinbun",kanji:"新聞",kana:"しんぶん",romaji:"shinbun",en:"newspaper",lesson:2,art:`
<path class="s" d="M48 56 L136 56 L136 148 L48 148 Z"/>
<path class="s" d="M136 64 Q156 64 156 84 L156 140 Q156 148 148 148 L136 148"/>
<path class="s t r" d="M58 72 L104 72"/>
<path class="s t" d="M58 88 L126 88 M58 100 L126 100 M58 112 L96 112 M58 136 L110 136"/>
<rect class="s t" x="104" y="106" width="22" height="18"/>`},
{id:"jitensha",kanji:"自転車",kana:"じてんしゃ",romaji:"jitensha",en:"bicycle",lesson:2,art:`
<circle class="s" cx="60" cy="132" r="28"/><circle class="s" cx="146" cy="132" r="28"/>
<path class="s" d="M60 132 L96 90 L138 90 L146 132 M96 90 L104 132 L60 132 M104 132 L146 132"/>
<path class="s r" d="M92 90 L84 72 L100 72"/>
<path class="s r" d="M140 90 L134 68 L150 62"/>`},
{id:"saifu",kanji:"財布",kana:"さいふ",romaji:"saifu",en:"wallet",lesson:2,art:`
<path class="s" d="M42 76 L158 76 Q170 76 170 88 L170 136 Q170 148 158 148 L42 148 Q30 148 30 136 L30 88 Q30 76 42 76 Z"/>
<path class="s t" d="M30 96 L170 96"/>
<circle class="s r" cx="138" cy="122" r="16"/>
<path class="s t r" d="M132 112 L138 122 L144 112 M132 124 L144 124 M132 129 L144 129 M138 122 L138 132"/>
<path class="s t" d="M46 116 L86 116 M46 128 L74 128"/>`},
{id:"yasai",kanji:"野菜",kana:"やさい",romaji:"yasai",en:"vegetables",lesson:2,art:`
<path class="s r" d="M64 66 Q88 70 84 92 L58 152 Q52 160 48 152 Q44 116 64 66 Z"/>
<path class="s t" d="M64 66 L56 44 M72 68 L72 48 M80 72 L88 52"/>
<circle class="s" cx="132" cy="118" r="11"/><circle class="s" cx="150" cy="106" r="11"/><circle class="s" cx="118" cy="102" r="11"/><circle class="s" cx="136" cy="92" r="11"/>
<path class="s" d="M128 128 L128 156 L140 156 L140 128"/>`},
{id:"isu",kana:"いす",romaji:"isu",en:"chair",lesson:2,art:`
<path class="s" d="M60 44 Q100 34 140 44 L140 100 L60 100 Z"/>
<path class="s" d="M56 100 L144 100 L144 116 L56 116 Z"/>
<path class="s" d="M64 116 L60 168 M136 116 L140 168"/>
<path class="s t r" d="M84 62 L116 62 M84 78 L116 78"/>`},
{id:"tsukue",kanji:"机",kana:"つくえ",romaji:"tsukue",en:"desk",lesson:2,art:`
<path class="s" d="M32 108 L168 108 L168 120 L32 120 Z M44 120 L44 168 M156 120 L156 168"/>
<path class="s r" d="M124 108 L124 76 Q124 64 136 64 L142 64"/>
<path class="s r" d="M140 58 Q160 64 154 82 L134 72 Z"/>
<path class="s t r" d="M148 90 L152 100 M160 82 L170 86"/>
<rect class="s t" x="58" y="94" width="42" height="14"/>`},
{id:"boushi",kanji:"帽子",kana:"ぼうし",romaji:"bōshi",en:"hat",lesson:2,art:`
<path class="s" d="M64 98 Q64 52 100 52 Q136 52 136 98"/>
<path class="s" d="M36 102 Q100 90 164 102 Q100 122 36 102 Z"/>
<path class="s t r" d="M64 90 Q100 80 136 90"/>
<path class="s t" d="M148 56 Q156 48 152 40"/>`},
{id:"kore",kana:"これ",romaji:"kore",en:"this one",lesson:2,art:`
<circle class="s r" cx="120" cy="96" r="20"/>
<path class="s" d="M40 128 Q56 108 76 108 L96 96 Q100 92 104 96 Q106 100 100 104 L92 110 Q104 108 112 110"/>
<path class="s r" d="M100 96 L100 84 M92 90 L100 84 L108 90"/>`},
{id:"sore",kana:"それ",romaji:"sore",en:"that one",lesson:2,art:`
<rect class="s r" x="130" y="76" width="34" height="34" rx="4"/>
<path class="s" d="M36 118 Q52 100 70 100 L86 90 Q90 86 94 90 Q96 94 90 98 L84 102 Q94 100 100 102"/>
<path class="s r" d="M100 94 L124 90"/>
<path class="s r" d="M118 84 L128 92 L118 98"/>`},
{id:"are",kana:"あれ",romaji:"are",en:"that one (over there)",lesson:2,art:`
<rect class="s r" x="152" y="60" width="22" height="22" rx="3"/>
<path class="s" d="M32 118 Q48 100 66 100 L82 90 Q86 86 90 90 Q92 94 86 98 L80 102 Q90 100 96 102"/>
<path class="s r" d="M96 94 L146 74"/>
<path class="s r" d="M138 66 L150 72 L140 82"/>`},
{id:"dore",kana:"どれ",romaji:"dore",en:"which one",lesson:2,art:`
<rect class="s t" x="42" y="96" width="30" height="30" rx="3"/><rect class="s t" x="86" y="96" width="30" height="30" rx="3"/><rect class="s t" x="130" y="96" width="30" height="30" rx="3"/>
<path class="s r" d="M80 66 Q80 48 100 48 Q120 48 120 66 Q120 80 100 84 L100 92"/>
<circle class="fr" cx="100" cy="104" r="4"/>`},
{id:"asoko",kana:"あそこ",romaji:"asoko",en:"over there",lesson:2,art:`
<circle class="s" cx="58" cy="60" r="14"/>
<path class="s" d="M58 74 L58 120 M58 120 L48 158 M58 120 L68 158 M58 88 L96 78"/>
<path class="s r" d="M58 88 L150 62"/>
<path class="s r" d="M138 54 L152 60 L142 72"/>
<path class="s t r" d="M158 44 L166 36 M164 52 L174 50 M154 34 L152 24"/>`},
{id:"doko",kana:"どこ",romaji:"doko",en:"where",lesson:2,art:`
<path class="s r" d="M100 40 Q66 40 66 76 Q66 108 100 150 Q134 108 134 76 Q134 40 100 40 Z"/>
<circle style="fill:#fff" cx="100" cy="74" r="16"/>
<path class="s r" d="M92 70 Q92 58 100 58 Q108 58 108 68 Q108 76 100 78 L100 84"/>
<circle class="fr" cx="100" cy="92" r="3"/>`},
{id:"dare",kana:"だれ",romaji:"dare",en:"who",lesson:2,art:`
<circle class="s" cx="100" cy="72" r="30"/>
<path class="s" d="M52 150 Q52 108 100 108 Q148 108 148 150"/>
<path class="s r" d="M88 66 Q88 52 100 52 Q112 52 112 66 Q112 78 100 82 L100 90"/>
<circle class="fr" cx="100" cy="100" r="4"/>`},
{id:"tonkatsu",kana:"とんかつ",romaji:"tonkatsu",en:"pork cutlet",lesson:2,art:`
<path class="s" d="M44 120 Q44 96 72 96 L128 96 Q156 96 156 120 Q156 140 128 140 L72 140 Q44 140 44 120 Z"/>
<path class="s t r" d="M60 100 L54 136 M78 98 L74 138 M96 98 L92 138 M114 98 L110 138 M132 100 L128 136"/>
<path class="s r" d="M40 150 Q60 142 80 150 Q100 158 120 150 Q140 142 160 150"/>`},
{id:"niku",kana:"にく",romaji:"niku",en:"meat",lesson:2,art:`
<ellipse class="s" cx="112" cy="104" rx="44" ry="34"/>
<ellipse class="fr" cx="112" cy="104" rx="22" ry="16"/>
<path class="s" d="M74 82 L44 60 M74 82 Q60 60 44 60 M74 82 Q64 68 52 74"/>
<path class="s t" d="M40 54 L44 60 L38 66"/>`},
{id:"menyu",kana:"メニュー",romaji:"menyu",en:"menu",lesson:2,art:`
<path class="s" d="M56 48 L144 48 L144 156 L56 156 Z"/>
<path class="s" d="M100 48 L100 156"/>
<path class="s t r" d="M66 66 L92 66 M66 80 L92 80 M66 94 L88 94"/>
<path class="s t" d="M110 66 L136 66 M110 80 L136 80 M110 94 L132 94 M66 116 L92 116 M110 116 L136 116"/>`},
{id:"enpitsu",kana:"えんぴつ",romaji:"enpitsu",en:"pencil",lesson:2,art:`
<path class="s" d="M48 148 L58 138 L150 46 Q158 38 166 46 Q174 54 166 62 L74 154 L64 164 Z"/>
<path class="s" d="M64 164 L48 148"/>
<path class="s r" d="M58 138 L74 154"/>
<path class="s t" d="M150 46 L166 62"/>
<path class="f" d="M48 148 L64 164 L54 168 Z"/>`},
{id:"kaban",kana:"かばん",romaji:"kaban",en:"bag",lesson:2,art:`
<path class="s" d="M48 84 L152 84 L160 152 L40 152 Z"/>
<path class="s" d="M74 84 Q74 52 100 52 Q126 52 126 84"/>
<path class="s t r" d="M40 106 L160 106"/>
<rect class="s t" x="90" y="112" width="20" height="14" rx="2"/>`},
{id:"jinzu",kana:"ジーンズ",romaji:"jinzu",en:"jeans",lesson:2,art:`
<path class="s" d="M64 44 L136 44 L142 100 L128 156 L108 156 L100 100 L92 156 L72 156 L58 100 Z"/>
<path class="s t r" d="M64 44 L136 44"/>
<path class="s t" d="M100 52 L100 96"/>
<rect class="s t r" x="70" y="56" width="16" height="12" rx="2"/><rect class="s t r" x="114" y="56" width="16" height="12" rx="2"/>`},
{id:"jisho",kana:"じしょ",romaji:"jisho",en:"dictionary",lesson:2,art:`
<path class="s" d="M48 52 L140 52 L152 60 L152 148 L60 148 L48 140 Z"/>
<path class="s" d="M60 148 L60 60 L152 60"/>
<path class="s" d="M48 52 L60 60"/>
<path class="s r" d="M152 78 L164 78 L164 92 L152 92 M152 104 L164 104 L164 118 L152 118"/>
<path class="s t" d="M74 80 L138 80 M74 96 L138 96 M74 112 L120 112"/>`},
{id:"tepu",kana:"テープ",romaji:"tepu",en:"tape",lesson:2,art:`
<rect class="s" x="44" y="60" width="112" height="80" rx="8"/>
<rect class="s t" x="58" y="78" width="84" height="34" rx="3"/>
<circle class="s" cx="80" cy="95" r="8"/><circle class="s" cx="120" cy="95" r="8"/>
<path class="s t r" d="M64 128 L136 128"/>`},
{id:"torena",kana:"トレーナー",romaji:"torena",en:"sweatshirt",lesson:2,art:`
<path class="s" d="M64 60 L52 78 L66 96 L76 88 L76 156 L124 156 L124 88 L134 96 L148 78 L136 60 Q118 74 100 74 Q82 74 64 60 Z"/>
<path class="s t" d="M82 66 Q100 78 118 66"/>
<path class="s t r" d="M60 148 L76 148 M124 148 L140 148 M76 150 L124 150"/>`},
{id:"noto",kana:"ノート",romaji:"noto",en:"notebook",lesson:2,art:`
<rect class="s" x="56" y="44" width="96" height="116" rx="4"/>
<path class="s" d="M74 44 L74 160"/>
<circle class="s t r" cx="64" cy="60" r="4"/><circle class="s t r" cx="64" cy="84" r="4"/><circle class="s t r" cx="64" cy="108" r="4"/><circle class="s t r" cx="64" cy="132" r="4"/>
<path class="s t" d="M88 68 L138 68 M88 86 L138 86 M88 104 L138 104 M88 122 L120 122"/>`},
{id:"pen",kana:"ペン",romaji:"pen",en:"pen",lesson:2,art:`
<path class="s" d="M120 40 L150 40 L150 120 L135 148 L120 120 Z"/>
<path class="s" d="M120 120 L150 120"/>
<path class="s" d="M135 148 L135 160"/>
<path class="s r" d="M150 56 L164 52 L164 72 L150 76"/>
<path class="s t" d="M120 52 L150 52"/>`},
{id:"otearai",kana:"おてあらい",romaji:"otearai",en:"restroom",lesson:2,art:`
<path class="s" d="M64 68 L64 108 Q64 128 84 128 L84 152 L116 152 L116 128 Q136 128 136 108 L136 68"/>
<path class="s" d="M56 68 L144 68"/>
<path class="s r" d="M100 68 L100 108"/>
<path class="s t r" d="M152 60 L172 60 L172 96 L162 96 L162 108 L152 108 Z"/>`},
{id:"takai",kana:"たかい",romaji:"takai",en:"expensive",lesson:2,art:`
<path class="s r" d="M44 76 L96 76 L146 126 Q154 134 146 142 L112 142 Q104 142 96 134 L44 82 Z"/>
<circle class="f" cx="70" cy="98" r="7"/>
<path class="s" d="M120 110 L120 100 M116 104 Q116 100 122 100 Q128 100 128 105 Q128 110 122 110 Q116 110 116 116 Q116 121 122 121 Q128 121 128 117 M120 121 L120 130 M113 108 L131 108 M113 114 L131 114"/>
<path class="s t r" d="M100 60 L100 46 M92 54 L100 46 L108 54"/>`},
{id:"kokuban",kana:"こくばん",romaji:"kokuban",en:"blackboard",lesson:2,art:`
<rect class="s" x="40" y="48" width="120" height="80" rx="4"/>
<rect class="fr" x="50" y="58" width="100" height="60"/>
<path class="s" d="M60 128 L52 158 M140 128 L148 158"/>
<path style="stroke:#fff;stroke-width:2;fill:none" d="M64 76 Q80 70 96 76 M64 92 L110 92"/>
<rect class="s t" x="46" y="124" width="108" height="8"/>
<rect class="s t r" x="112" y="126" width="18" height="5"/>`},
{id:"keshigomu",kana:"けしゴム",romaji:"keshigomu",en:"eraser",lesson:2,art:`
<path class="s" d="M52 96 L120 60 Q132 54 140 68 L152 90 Q160 104 148 110 L80 146 Q68 152 60 138 L48 116 Q40 102 52 96 Z"/>
<path class="s r" d="M96 78 L124 128"/>
<path class="s t r" d="M40 150 L34 158 M52 156 L48 166 M64 154 L62 164"/>`},
{id:"bideo",kana:"ビデオ",romaji:"bideo",en:"VCR / video player",lesson:2,art:`
<rect class="s" x="40" y="72" width="120" height="60" rx="6"/>
<rect class="s t" x="52" y="86" width="60" height="14" rx="2"/>
<circle class="s t" cx="66" cy="93" r="4"/><circle class="s t" cx="98" cy="93" r="4"/>
<circle class="s t r" cx="132" cy="90" r="6"/>
<path class="s t r" d="M52 116 L100 116"/>
<path class="s r" d="M74 60 L126 60 L126 72 L74 72 Z M84 60 L84 72 M116 60 L116 72"/>`},
{id:"doa",kana:"ドア",romaji:"doa",en:"door",lesson:2,art:`
<rect class="s" x="60" y="40" width="80" height="120"/>
<rect class="s t" x="72" y="54" width="56" height="40"/>
<rect class="s t" x="72" y="104" width="56" height="44"/>
<circle class="s r" cx="122" cy="102" r="5"/>
<path class="s t" d="M60 60 L54 60 M60 100 L54 100 M60 140 L54 140"/>`},
{id:"katen",kana:"カーテン",romaji:"katen",en:"curtain",lesson:2,art:`
<path class="s" d="M40 44 L160 44"/>
<circle class="s t" cx="48" cy="44" r="4"/><circle class="s t" cx="152" cy="44" r="4"/>
<path class="s" d="M56 50 Q48 100 56 156 Q66 148 72 156 Q80 148 86 156 L86 50"/>
<path class="s" d="M144 50 Q152 100 144 156 Q134 148 128 156 Q120 148 114 156 L114 50"/>
<path class="s t r" d="M64 60 Q60 100 64 150 M78 60 Q74 100 78 150 M122 60 Q126 100 122 150 M136 60 Q140 100 136 150"/>`}
];
