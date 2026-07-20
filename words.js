/* =======================================================================
   words.js  —  Doodle Tango vocabulary  (Genki I)
   Loaded by index.html via <script src="words.js"></script>.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present  -> plays as a draggable doodle
     • art absent   -> plays as a text tile (English), still studiable
   Edit freely: fix a reading, change a lesson number, or paste new
   words. Lessons 1-2 hold Genki's real vocab; lessons 3-12 currently
   hold the illustrated set — add the rest here the same way.
   ===================================================================== */
window.GENKI_WORDS = [
/* ---------------- LESSON 1 ---------------- */
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
{id:"isha",kanji:"医者",kana:"いしゃ",romaji:"isha",en:"doctor",lesson:1,art:`
<circle class="s" cx="100" cy="54" r="17"/>
<circle class="s r" cx="100" cy="34" r="8"/>
<path class="s t" d="M93 52 Q96 49 99 52 M103 52 Q106 49 109 52"/>
<path class="s" d="M100 71 L100 132 M100 132 L84 170 M100 132 L116 170 M100 88 L74 106 M100 88 L126 106"/>
<path class="s t r" d="M92 74 Q82 98 94 112"/>
<circle class="s t r" cx="98" cy="118" r="6"/>`},
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

/* ---------------- LESSON 2 ---------------- */
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

/* ---------------- LESSON 3 ---------------- */
{id:"taberu",kanji:"食べる",kana:"たべる",romaji:"taberu",en:"to eat",lesson:3,art:`
<circle class="s" cx="72" cy="64" r="17"/>
<path class="s t" d="M66 60 Q69 57 72 60 M76 60 Q79 57 82 60"/>
<ellipse class="f" cx="78" cy="72" rx="5" ry="6"/>
<path class="s" d="M70 81 L68 138 M68 138 L56 170 M68 138 L82 168 M70 96 L96 108"/>
<path class="s r" d="M96 108 L128 82 M100 114 L132 90"/>
<path class="s" d="M112 134 Q112 154 136 154 Q160 154 160 134 Z"/>
<path class="s t" d="M120 126 Q128 118 136 126 Q144 118 152 126"/>`},
{id:"nomu",kanji:"飲む",kana:"のむ",romaji:"nomu",en:"to drink",lesson:3,art:`
<circle class="s" cx="92" cy="62" r="17"/>
<path class="s t" d="M86 58 Q89 55 92 58 M96 58 Q99 55 102 58"/>
<path class="s" d="M90 79 L88 136 M88 136 L74 170 M88 136 L102 168 M90 94 L112 78"/>
<path class="s r" d="M108 58 L130 50 L138 74 L116 82 Z"/>
<path class="s t r" d="M122 42 Q126 34 122 26 M132 40 Q136 32 132 24"/>`},
{id:"neru",kanji:"寝る",kana:"ねる",romaji:"neru",en:"to sleep",lesson:3,art:`
<path class="s" d="M28 132 L172 132 M36 132 L36 156 M164 132 L164 156"/>
<rect class="s t" x="38" y="120" width="44" height="12" rx="6"/>
<circle class="s" cx="58" cy="110" r="16"/>
<path class="s t" d="M50 110 L56 110 M62 110 L68 110"/>
<path class="s" d="M78 116 Q120 104 164 116 L164 132 L78 132 Z"/>
<path class="s t r" d="M118 56 L134 56 L118 72 L134 72 M146 32 L158 32 L146 44 L158 44"/>`},
{id:"yomu",kanji:"読む",kana:"よむ",romaji:"yomu",en:"to read",lesson:3,art:`
<circle class="s" cx="100" cy="52" r="16"/>
<path class="s t" d="M93 54 L98 54 M102 54 L107 54"/>
<path class="s" d="M100 68 L100 120 M100 120 L84 164 M100 120 L116 164"/>
<path class="s" d="M100 96 L74 86 M100 96 L126 86"/>
<path class="s r" d="M64 84 Q82 76 100 84 Q118 76 136 84 L136 112 Q118 104 100 112 Q82 104 64 112 Z M100 84 L100 112"/>`},
{id:"eiga",kanji:"映画",kana:"えいが",romaji:"eiga",en:"movie",lesson:3,art:`
<rect class="s" x="48" y="86" width="104" height="70" rx="6"/>
<path class="s r" d="M44 60 L152 74 L148 92 L40 78 Z"/>
<path class="s t r" d="M58 62 L70 78 M82 65 L94 81 M106 68 L118 84 M130 71 L142 87"/>
<path class="s t" d="M62 110 L138 110 M62 130 L120 130"/>`},
{id:"ongaku",kanji:"音楽",kana:"おんがく",romaji:"ongaku",en:"music",lesson:3,art:`
<path class="s" d="M76 46 L76 128 M148 34 L148 116"/>
<path class="s" d="M76 54 L148 42 M76 70 L148 58"/>
<ellipse class="f" cx="64" cy="132" rx="13" ry="10"/><ellipse class="fr" cx="136" cy="120" rx="13" ry="10"/>
<path class="s t r" d="M40 62 Q34 72 40 82 M170 68 Q176 78 170 88"/>`},
{id:"ocha",kana:"おちゃ",romaji:"ocha",en:"green tea",lesson:3,art:`
<path class="s" d="M64 84 L136 84 L130 148 Q100 156 70 148 Z"/>
<path class="s t" d="M84 68 Q78 54 86 42 M112 68 Q106 54 114 42"/>
<path class="s" d="M48 158 L152 158"/>
<path class="s t r" d="M88 108 Q100 116 112 108"/>`},
{id:"gakkou",kanji:"学校",kana:"がっこう",romaji:"gakkō",en:"school",lesson:3,art:`
<path class="s" d="M100 36 L160 76 L40 76 Z"/>
<path class="s" d="M52 76 L52 152 L148 152 L148 76"/>
<rect class="s t" x="88" y="116" width="24" height="36"/>
<rect class="s t" x="60" y="90" width="18" height="16"/><rect class="s t" x="122" y="90" width="18" height="16"/>
<circle class="s t r" cx="100" cy="60" r="8"/><path class="s t r" d="M100 56 L100 60 L104 62"/>`},
{id:"toshokan",kanji:"図書館",kana:"としょかん",romaji:"toshokan",en:"library",lesson:3,art:`
<rect class="s" x="44" y="44" width="112" height="116"/>
<path class="s" d="M44 100 L156 100"/>
<path class="s t" d="M56 56 L56 96 M70 56 L70 96 M84 60 L84 96 M98 52 L98 96"/>
<path class="s t r" d="M112 60 L126 56 L134 96 L120 100 Z"/>
<path class="s t" d="M56 112 L56 156 M72 112 L72 156 M88 108 L88 156 M104 112 L104 156 M120 112 L120 156 M136 108 L136 156"/>`},
{id:"terebi",kana:"テレビ",romaji:"terebi",en:"TV",lesson:3,art:`
<rect class="s" x="44" y="64" width="112" height="84" rx="10"/>
<path class="s" d="M78 64 L64 36 M122 64 L136 36"/>
<rect class="s t" x="56" y="76" width="72" height="60" rx="4"/>
<circle class="s t r" cx="142" cy="90" r="6"/><circle class="s t r" cx="142" cy="110" r="6"/>
<path class="s" d="M76 148 L72 160 M124 148 L128 160"/>
<path class="s t" d="M64 94 Q80 86 96 98"/>`},

/* ---------------- LESSON 4 ---------------- */
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
<path class="s r" d="M22 122 L48 122 L52 158 L18 158 Z M28 122 Q28 110 35 110 Q42 110 42 122"/>`},

/* ---------------- LESSON 5 ---------------- */
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
<path class="s t" d="M32 32 L66 32 M32 32 L32 62 M32 32 L56 52 M44 32 Q46 42 38 44 M32 46 Q42 46 44 38"/>`},

/* ---------------- LESSON 6 ---------------- */
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
/* ---------------- LESSON 7 ---------------- */
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
<path class="s t r" d="M148 130 Q144 124 149 121 Q154 118 156 124 Q158 118 163 121 Q168 124 164 130 L156 138 Z"/>`},

/* ---------------- LESSON 8 ---------------- */
{id:"souji",kanji:"掃除する",kana:"そうじする",romaji:"sōji suru",en:"to clean",lesson:8,art:`
<circle class="s" cx="78" cy="52" r="16"/><path class="s t" d="M72 50 L78 50 M84 50 L90 50 M76 60 Q80 63 84 60"/>
<path class="s" d="M82 68 Q92 95 88 120 M88 120 L68 158 M88 120 L108 152 M86 82 L112 96 M90 100 L118 108"/>
<path class="s r" d="M120 70 L138 140"/>
<path class="s r" d="M128 140 Q138 136 150 142 L158 168 M134 143 L138 166 M141 141 L148 165 M148 142 L156 166"/>
<circle class="s t" cx="172" cy="150" r="6"/><circle class="s t" cx="184" cy="138" r="4"/>
<path class="s t" d="M118 160 Q130 168 144 172"/>`},
{id:"ame",kanji:"雨",kana:"あめ",romaji:"ame",en:"rain",lesson:8,art:`
<path class="s" d="M56 76 Q46 56 66 50 Q70 30 94 34 Q108 22 126 34 Q150 32 150 54 Q166 62 156 78 Q130 88 100 84 Q72 90 56 76 Z"/>
<path class="s t r" d="M62 104 L54 124 M90 100 L82 120 M118 104 L110 124 M146 100 L138 120 M76 138 L68 158 M104 134 L96 154 M132 138 L124 158"/>`},
{id:"sentaku",kanji:"洗濯する",kana:"せんたくする",romaji:"sentaku suru",en:"to do laundry",lesson:8,art:`
<rect class="s" x="50" y="44" width="100" height="120" rx="10"/>
<circle class="s" cx="100" cy="112" r="32"/><path class="s t r" d="M76 108 Q88 96 100 108 Q112 120 124 108"/>
<circle class="s t" cx="66" cy="58" r="4"/><path class="s t" d="M120 58 L142 58"/>
<circle class="s t" cx="42" cy="36" r="5"/><circle class="s t" cx="158" cy="30" r="7"/><circle class="s t" cx="168" cy="52" r="4"/>`},
{id:"ryouri",kanji:"料理する",kana:"りょうりする",romaji:"ryōri suru",en:"to cook",lesson:8,art:`
<path class="s" d="M50 96 L150 96 L144 152 Q100 162 56 152 Z"/>
<path class="s" d="M50 104 L34 96 M150 104 L166 96"/>
<path class="s t r" d="M70 80 Q62 66 70 54 M100 76 Q92 62 100 50 M130 80 Q122 66 130 54"/>
<path class="s" d="M124 96 L152 44"/><ellipse class="s" cx="156" cy="38" rx="10" ry="7"/>
<path class="s t" d="M56 170 L144 170"/>`},
{id:"arau",kanji:"洗う",kana:"あらう",romaji:"arau",en:"to wash",lesson:8,art:`
<path class="s" d="M56 72 L56 44 L110 44 L110 58"/>
<path class="s t r" d="M56 78 Q52 88 56 94 Q60 88 56 78 Z"/>
<ellipse class="s" cx="100" cy="136" rx="52" ry="20"/><ellipse class="s t" cx="100" cy="132" rx="34" ry="10"/>
<rect class="s r" x="120" y="88" width="34" height="24" rx="6"/>
<circle class="s t" cx="70" cy="102" r="6"/><circle class="s t" cx="88" cy="92" r="4"/><circle class="s t" cx="108" cy="80" r="5"/>`},
{id:"hare",kanji:"晴れ",kana:"はれ",romaji:"hare",en:"sunny",lesson:8,art:`
<circle class="s r" cx="100" cy="100" r="36"/>
<path class="s r" d="M100 44 L100 26 M100 156 L100 174 M44 100 L26 100 M156 100 L174 100 M62 62 L48 48 M138 62 L152 48 M62 138 L48 152 M138 138 L152 152"/>
<path class="s t" d="M86 96 Q90 92 94 96 M106 96 Q110 92 114 96"/><path class="s t" d="M88 110 Q100 120 112 110"/>`},
{id:"kumori",kanji:"曇り",kana:"くもり",romaji:"kumori",en:"cloudy",lesson:8,art:`
<path class="s" d="M40 96 Q30 76 50 70 Q54 50 78 54 Q92 42 110 54 Q134 52 134 74 Q150 82 140 96 Q114 106 84 102 Q56 108 40 96 Z"/>
<path class="s t" d="M96 128 Q90 116 104 112 Q108 100 126 104 Q136 96 150 104 Q168 102 168 118 Q178 126 168 134 Q140 142 118 136 Q104 140 96 128 Z"/>
<circle class="s t r" cx="168" cy="44" r="14" stroke-dasharray="5 7"/>`},
{id:"isogashii",kanji:"忙しい",kana:"いそがしい",romaji:"isogashii",en:"busy",lesson:8,art:`
<circle class="s" cx="80" cy="48" r="15"/><path class="s t" d="M74 46 L80 46 M84 46 L90 46"/>
<path class="s" d="M84 63 Q96 86 90 108 M90 108 L64 140 M90 108 L116 136 L134 128"/>
<path class="s" d="M86 74 L58 66 M88 80 L116 84"/>
<rect class="s t r" x="118" y="60" width="26" height="18" transform="rotate(12 131 69)"/>
<rect class="s t r" x="40" y="88" width="24" height="16" transform="rotate(-14 52 96)"/>
<circle class="s t" cx="160" cy="40" r="18"/><path class="s t" d="M160 30 L160 40 L168 44"/>
<path class="s t" d="M40 140 Q34 148 40 156 M52 148 Q46 156 52 164"/>`},
{id:"osoi",kanji:"遅い",kana:"おそい",romaji:"osoi",en:"slow / late",lesson:8,art:`
<path class="s" d="M40 148 Q60 152 88 150"/>
<circle class="s r" cx="112" cy="112" r="34"/><path class="s t r" d="M112 86 Q134 90 134 112 Q134 128 118 132 Q106 130 106 116 Q108 106 118 108"/>
<path class="s" d="M82 146 Q64 146 58 128 Q58 112 70 108"/>
<circle class="s" cx="64" cy="98" r="10"/><path class="s t" d="M60 88 L54 76 M70 88 L74 76"/><circle class="f" cx="52" cy="74" r="3"/><circle class="f" cx="76" cy="74" r="3"/>
<circle class="s t" cx="164" cy="52" r="18"/><path class="s t" d="M164 42 L164 52 L172 58"/>`},
{id:"yuumei",kanji:"有名",kana:"ゆうめい",romaji:"yūmei",en:"famous",lesson:8,art:`
<circle class="s" cx="100" cy="62" r="17"/><path class="s t" d="M92 58 Q96 54 100 58 M104 58 Q108 54 112 58 M94 70 Q100 75 106 70"/>
<path class="s" d="M96 79 Q92 106 94 128 M94 128 L78 164 M94 128 L112 162"/>
<path class="s" d="M94 92 L68 82 M98 94 L126 86"/>
<path class="s r" d="M100 20 L104 30 L114 30 L106 37 L109 47 L100 41 L91 47 L94 37 L86 30 L96 30 Z"/>
<path class="s t" d="M40 60 L52 68 M36 84 L50 86 M164 56 L152 66 M168 80 L154 84"/>
<path class="s t r" d="M44 128 L58 120 M48 140 L60 136"/>`},

/* ---------------- LESSON 9 ---------------- */
{id:"odoru",kanji:"踊る",kana:"おどる",romaji:"odoru",en:"to dance",lesson:9,art:`
<circle class="s" cx="96" cy="46" r="15"/><path class="s t" d="M90 44 Q93 41 96 44 M100 44 Q103 41 106 44 M92 54 Q96 58 100 54"/>
<path class="s" d="M98 61 Q110 84 100 106"/>
<path class="s" d="M100 106 L74 128 L66 152 M100 106 L124 126 L140 116"/>
<path class="s" d="M100 74 L72 56 M102 78 L132 66 L140 48"/>
<path class="s t r" d="M156 84 L156 66"/><ellipse class="fr" cx="152" cy="85" rx="5" ry="4"/>
<path class="s t" d="M52 92 Q46 100 52 108 M148 140 Q154 148 148 156"/>`},
{id:"piano",kanji:"ピアノを弾く",kana:"ピアノをひく",romaji:"piano o hiku",en:"to play piano",lesson:9,art:`
<rect class="s" x="36" y="76" width="128" height="56" rx="6"/>
<path class="s t" d="M52 76 L52 132 M68 76 L68 132 M84 76 L84 132 M100 76 L100 132 M116 76 L116 132 M132 76 L132 132 M148 76 L148 132"/>
<rect class="f" x="47" y="76" width="10" height="30"/><rect class="f" x="79" y="76" width="10" height="30"/><rect class="f" x="111" y="76" width="10" height="30"/><rect class="f" x="143" y="76" width="10" height="30"/>
<path class="s t r" d="M76 56 Q80 44 92 46 M120 54 Q124 42 136 44"/>
<path class="s t r" d="M164 40 L164 24 Q172 22 174 27"/>`},
{id:"guitar",kana:"ギター",romaji:"gitā",en:"guitar",lesson:9,art:`
<circle class="s" cx="84" cy="128" r="34"/><circle class="s" cx="110" cy="96" r="24"/>
<circle class="s t" cx="94" cy="116" r="10"/>
<path class="s" d="M124 78 L160 36 M132 84 L168 44"/>
<path class="s t r" d="M158 30 L172 44 M164 24 L178 38"/>
<path class="s t" d="M90 74 L120 108 M96 68 L126 102"/>`},
{id:"kusuri",kanji:"薬を飲む",kana:"くすりをのむ",romaji:"kusuri o nomu",en:"to take medicine",lesson:9,art:`
<rect class="s" x="48" y="66" width="52" height="84" rx="8"/><rect class="s" x="54" y="46" width="40" height="20" rx="4"/>
<path class="s t r" d="M58 96 L90 96 M58 112 L90 112"/>
<ellipse class="s r" cx="140" cy="70" rx="18" ry="11" transform="rotate(-24 140 70)"/><path class="s t r" d="M132 76 L148 64"/>
<path class="s" d="M120 108 L164 108 L158 160 L126 160 Z"/><path class="s t" d="M124 122 Q142 130 160 122"/>`},
{id:"kaze",kanji:"風邪をひく",kana:"かぜをひく",romaji:"kaze o hiku",en:"to catch a cold",lesson:9,art:`
<circle class="s" cx="96" cy="88" r="30"/>
<path class="s t" d="M84 82 L92 86 M108 86 L116 82"/>
<path class="s t" d="M88 104 Q96 100 104 104"/>
<path class="s t r" d="M96 118 Q94 128 98 134"/>
<path class="s r" d="M60 56 L132 40"/><rect class="fr" x="126" y="34" width="10" height="10" rx="3"/>
<path class="s t" d="M140 108 Q152 104 152 116 Q152 126 142 124 Q136 122 138 114"/>
<path class="s" d="M96 118 Q92 148 94 168"/>`},
{id:"karaoke",kana:"カラオケ",romaji:"karaoke",en:"karaoke",lesson:9,art:`
<circle class="s" cx="84" cy="64" r="24"/><path class="s t" d="M68 56 Q84 40 100 56 M66 66 Q84 50 102 66 M68 76 Q84 62 100 76"/>
<path class="s" d="M92 86 L124 148 L112 156 L80 94"/>
<path class="s t r" d="M136 52 L136 32 Q146 30 148 36"/><ellipse class="fr" cx="132" cy="53" rx="5" ry="4"/>
<path class="s t r" d="M156 96 L156 80"/><ellipse class="fr" cx="152" cy="97" rx="5" ry="4"/>
<path class="s t" d="M48 100 Q40 108 48 118 M40 88 Q28 100 40 116"/>`},
{id:"kodomo",kanji:"子供",kana:"こども",romaji:"kodomo",en:"child",lesson:9,art:`
<circle class="s" cx="92" cy="84" r="22"/>
<path class="s t" d="M84 80 Q88 76 92 80 M98 80 Q102 76 106 80 M86 94 Q93 100 100 94"/>
<path class="s t" d="M80 64 Q92 54 104 64"/>
<path class="s" d="M92 106 L92 146 M92 146 L78 172 M92 146 L106 170 M92 116 L72 128 M92 116 L114 110"/>
<path class="s t r" d="M122 106 Q120 90 132 84"/><circle class="s r" cx="140" cy="62" r="20"/>`},
{id:"tori",kanji:"鳥",kana:"とり",romaji:"tori",en:"bird",lesson:9,art:`
<path class="s" d="M30 140 Q100 128 176 142"/><path class="s t" d="M64 140 L54 156 M118 138 L128 154"/>
<circle class="s" cx="96" cy="80" r="26"/><circle class="s" cx="118" cy="56" r="16"/>
<path class="s r" d="M132 54 L148 58 L132 62 Z"/><circle class="f" cx="120" cy="52" r="3"/>
<path class="s t" d="M84 78 Q96 70 104 82 Q96 92 84 86"/>
<path class="s" d="M92 106 L92 134 M104 104 L104 132"/>
<path class="s t r" d="M56 48 Q64 44 68 50 M148 30 Q156 26 160 32"/>`},
{id:"oboeru",kanji:"覚える",kana:"おぼえる",romaji:"oboeru",en:"to memorize",lesson:9,art:`
<path class="s" d="M72 150 Q46 140 46 106 Q46 66 84 58 Q120 52 132 82 Q140 100 128 118 L128 138 L104 138 L104 152 Z"/>
<path class="s t" d="M78 92 Q92 78 108 90 Q100 102 86 100"/>
<circle class="s r" cx="156" cy="44" r="16"/>
<path class="s t r" d="M150 60 L162 60 L160 70 L152 70 Z M156 20 L156 12 M136 28 L130 22 M176 28 L182 22"/>`},
{id:"kabuki",kanji:"歌舞伎",kana:"かぶき",romaji:"kabuki",en:"kabuki",lesson:9,art:`
<path class="s" d="M60 52 Q100 32 140 52 Q158 92 144 132 Q124 164 100 162 Q76 164 56 132 Q42 92 60 52 Z"/>
<path class="s r" d="M58 62 Q74 78 66 100 M142 62 Q126 78 134 100 M78 44 Q88 60 82 74 M122 44 Q112 60 118 74"/>
<path class="s" d="M74 96 L94 96 M106 96 L126 96"/>
<circle class="f" cx="84" cy="104" r="4"/><circle class="f" cx="116" cy="104" r="4"/>
<path class="s r" d="M86 132 Q100 124 114 132"/>`},

/* ---------------- LESSON 10 ---------------- */
{id:"yuki",kanji:"雪",kana:"ゆき",romaji:"yuki",en:"snow",lesson:10,art:`
<path class="s t" d="M24 168 Q100 158 176 168"/>
<circle class="s" cx="100" cy="140" r="28"/><circle class="s" cx="100" cy="96" r="20"/>
<path class="s r" d="M84 82 L88 62 L112 62 L116 82"/>
<circle class="f" cx="93" cy="93" r="2.5"/><circle class="f" cx="107" cy="93" r="2.5"/><path class="s t" d="M95 103 Q100 106 105 103"/>
<path class="s" d="M74 130 L52 116 M56 122 L48 124 M126 130 L148 116 M144 122 L152 124"/>
<path class="s t" d="M44 40 L44 52 M38 46 L50 46 M40 42 L48 50 M48 42 L40 50"/>
<path class="s t" d="M150 32 L150 44 M144 38 L156 38 M146 34 L154 42 M154 34 L146 42"/>
<circle class="s t" cx="66" cy="70" r="2"/><circle class="s t" cx="136" cy="66" r="2"/><circle class="s t" cx="170" cy="96" r="2"/>`},
{id:"densha",kanji:"電車",kana:"でんしゃ",romaji:"densha",en:"train",lesson:10,art:`
<rect class="s" x="52" y="40" width="96" height="104" rx="16"/>
<rect class="s t" x="66" y="56" width="30" height="26" rx="4"/><rect class="s t" x="104" y="56" width="30" height="26" rx="4"/>
<path class="s r" d="M60 104 L140 104 M60 118 L140 118"/>
<circle class="s t" cx="74" cy="132" r="5"/><circle class="s t" cx="126" cy="132" r="5"/>
<path class="s" d="M40 168 L160 168 M52 156 L44 168 M148 156 L156 168"/>
<path class="s t" d="M56 30 L64 20 M144 30 L136 20"/>`},
{id:"fuyu",kanji:"冬",kana:"ふゆ",romaji:"fuyu",en:"winter",lesson:10,art:`
<path class="s t" d="M20 166 Q100 158 180 166"/>
<path class="s" d="M100 166 L100 72"/>
<path class="s" d="M100 128 L68 96 M100 128 L132 96"/>
<path class="s" d="M100 104 L76 80 M100 104 L124 80"/>
<path class="s" d="M100 84 L88 66 M100 84 L112 66"/>
<path class="s t" d="M68 96 L60 90 M132 96 L140 90 M76 80 L70 74 M124 80 L130 74 M88 66 L82 60 M112 66 L118 60"/>
<path class="s t" d="M62 122 Q68 116 74 122 M126 122 Q132 116 138 122 M80 148 Q88 142 96 148"/>
<path class="s t r" d="M40 44 L40 60 M32 52 L48 52 M34 46 L46 58 M46 46 L34 58"/>
<path class="s t r" d="M158 58 L158 74 M150 66 L166 66 M152 60 L164 72 M164 60 L152 72"/>
<circle class="fr" cx="58" cy="118" r="3"/><circle class="fr" cx="146" cy="134" r="3"/><circle class="fr" cx="122" cy="150" r="3"/>`},
{id:"natsu",kanji:"夏",kana:"なつ",romaji:"natsu",en:"summer",lesson:10,art:`
<circle class="s r" cx="60" cy="52" r="22"/>
<path class="s r" d="M60 20 L60 10 M60 84 L60 94 M28 52 L18 52 M92 52 L102 52 M38 30 L30 22 M82 30 L90 22"/>
<path class="s" d="M52 150 Q100 96 148 150 Z"/>
<path class="s t r" d="M62 142 Q100 106 138 142"/>
<circle class="f" cx="88" cy="132" r="3"/><circle class="f" cx="104" cy="122" r="3"/><circle class="f" cx="120" cy="134" r="3"/>
<path class="s t" d="M100 150 L100 166"/>`},
{id:"samui",kanji:"寒い",kana:"さむい",romaji:"samui",en:"cold",lesson:10,art:`
<circle class="s" cx="100" cy="56" r="17"/>
<path class="s t" d="M92 52 L98 54 M102 54 L108 52 M94 66 Q100 62 106 66"/>
<path class="s" d="M98 73 Q94 100 96 124 M96 124 L82 162 M96 124 L112 160"/>
<path class="s" d="M96 86 Q84 92 86 104 M100 88 Q112 94 110 106"/>
<path class="s t r" d="M48 60 Q42 68 48 76 Q54 84 48 92 M152 60 Q158 68 152 76 Q146 84 152 92"/>
<path class="s t" d="M64 34 L64 46 M58 40 L70 40 M138 30 L138 42 M132 36 L144 36"/>`},
{id:"atsui",kanji:"暑い",kana:"あつい",romaji:"atsui",en:"hot",lesson:10,art:`
<circle class="s r" cx="152" cy="44" r="18"/>
<path class="s r" d="M152 18 L152 10 M178 44 L186 44 M170 26 L176 20 M170 62 L176 68"/>
<circle class="s" cx="88" cy="66" r="17"/>
<path class="s t" d="M80 62 Q84 66 88 62 M92 62 Q96 66 100 62 M82 76 Q88 72 94 76"/>
<path class="s t r" d="M108 58 Q112 64 108 70 Q104 76 108 82"/>
<path class="s" d="M86 83 Q82 110 84 134 M84 134 L70 168 M84 134 L98 166 M84 96 L64 108 M88 98 L108 106"/>
<path class="s t" d="M64 52 Q60 58 64 64"/>`},
{id:"chikatetsu",kanji:"地下鉄",kana:"ちかてつ",romaji:"chikatetsu",en:"subway",lesson:10,art:`
<path class="s" d="M24 64 L176 64"/>
<rect class="s t" x="40" y="34" width="24" height="30"/><rect class="s t" x="76" y="24" width="28" height="40"/><rect class="s t" x="116" y="40" width="22" height="24"/>
<path class="s" d="M36 156 Q36 96 100 96 Q164 96 164 156"/>
<rect class="s r" x="66" y="116" width="68" height="40" rx="8"/>
<rect class="s t r" x="76" y="124" width="16" height="12"/><rect class="s t r" x="108" y="124" width="16" height="12"/>
<path class="s t" d="M40 164 L160 164"/>`},
{id:"fune",kanji:"船",kana:"ふね",romaji:"fune",en:"boat / ship",lesson:10,art:`
<path class="s" d="M44 122 L156 122 L136 152 L64 152 Z"/>
<path class="s" d="M100 122 L100 44"/>
<path class="s r" d="M100 50 Q140 68 100 96 Z"/>
<path class="s t" d="M100 60 Q76 74 100 92"/>
<path class="s t" d="M28 166 Q40 158 52 166 Q64 174 76 166 Q88 158 100 166 Q112 174 124 166 Q136 158 148 166 Q160 174 172 166"/>`},
{id:"sekai",kanji:"世界",kana:"せかい",romaji:"sekai",en:"world",lesson:10,art:`
<circle class="s" cx="100" cy="100" r="52"/>
<ellipse class="s t" cx="100" cy="100" rx="24" ry="52"/>
<path class="s t" d="M52 82 L148 82 M52 118 L148 118"/>
<path class="s t r" d="M70 70 Q80 60 92 66 Q96 76 86 80 Q76 82 70 70 Z M116 108 Q128 102 136 110 Q134 122 122 122 Q114 118 116 108 Z"/>`},
{id:"aruku",kanji:"歩く",kana:"あるく",romaji:"aruku",en:"to walk",lesson:10,art:`
<circle class="s" cx="92" cy="44" r="15"/><path class="s t" d="M86 42 Q89 39 92 42 M96 42 Q99 39 102 42"/>
<path class="s" d="M94 59 Q100 84 96 106"/>
<path class="s" d="M96 106 L70 136 L74 158 M96 106 L120 132 L116 158"/>
<path class="s" d="M96 72 L74 88 M98 74 L122 82"/>
<path class="s t r" d="M46 168 Q52 164 58 168 M74 174 Q80 170 86 174 M104 168 Q110 164 116 168 M132 174 Q138 170 144 174"/>`},

/* ---------------- LESSON 11 ---------------- */
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
<circle class="s t" cx="40" cy="40" r="13"/>`},

/* ---------------- LESSON 12 ---------------- */
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

/* ---- Lessons 1-2: remaining Genki vocab (text tiles, no doodle yet) ---- */
{id:"ima",kana:"いま",romaji:"ima",en:"now",lesson:1},
{id:"eigo",kana:"えいご",romaji:"eigo",en:"English",lesson:1},
{id:"nihongo",kana:"にほんご",romaji:"nihongo",en:"Japanese language",lesson:1},
{id:"koukou",kana:"こうこう",romaji:"koukou",en:"high school",lesson:1},
{id:"gogo",kana:"ごご",romaji:"gogo",en:"P.M.",lesson:1},
{id:"gozen",kana:"ごぜん",romaji:"gozen",en:"A.M.",lesson:1},
{id:"senmon",kana:"せんもん",romaji:"senmon",en:"major",lesson:1},
{id:"namae",kana:"なまえ",romaji:"namae",en:"name",lesson:1},
{id:"nan",kana:"なん",romaji:"nan",en:"what",lesson:1},
{id:"nihonjin",kana:"にほんじん",romaji:"nihonjin",en:"Japanese person",lesson:1},
{id:"han",kana:"はん",romaji:"han",en:"half (o'clock)",lesson:1},
{id:"bangou",kana:"ばんごう",romaji:"bangou",en:"number",lesson:1},
{id:"watashi",kana:"わたし",romaji:"watashi",en:"I / me",lesson:1},
{id:"amerika",kana:"アメリカ",romaji:"amerika",en:"U.S.A.",lesson:1},
{id:"igirisu",kana:"イギリス",romaji:"igirisu",en:"Britain",lesson:1},
{id:"osutoraria",kana:"オーストラリア",romaji:"osutoraria",en:"Australia",lesson:1},
{id:"kankoku",kana:"かんこく",romaji:"kankoku",en:"Korea",lesson:1},
{id:"chuugoku",kana:"ちゅうごく",romaji:"chuugoku",en:"China",lesson:1},
{id:"keizai",kana:"けいざい",romaji:"keizai",en:"economics",lesson:1},
{id:"konpyuta",kana:"コンピューター",romaji:"konpyuta",en:"computer",lesson:1},
{id:"bijinesu",kana:"ビジネス",romaji:"bijinesu",en:"business",lesson:1},
{id:"rekishi",kana:"れきし",romaji:"rekishi",en:"history",lesson:1},
{id:"shigoto",kana:"しごと",romaji:"shigoto",en:"job / work",lesson:1},
{id:"kaishain",kana:"かいしゃいん",romaji:"kaishain",en:"office worker",lesson:1},
{id:"koukousei",kana:"こうこうせい",romaji:"koukousei",en:"high school student",lesson:1},
{id:"shufu",kana:"しゅふ",romaji:"shufu",en:"housewife",lesson:1},
{id:"daigakuinsei",kana:"だいがくいんせい",romaji:"daigakuinsei",en:"graduate student",lesson:1},
{id:"daigakusei",kana:"だいがくせい",romaji:"daigakusei",en:"college student",lesson:1},
{id:"bengoshi",kana:"べんごし",romaji:"bengoshi",en:"lawyer",lesson:1},
{id:"okaasan",kana:"おかあさん",romaji:"okaasan",en:"mother",lesson:1},
{id:"otousan",kana:"おとうさん",romaji:"otousan",en:"father",lesson:1},
{id:"oneesan",kana:"おねえさん",romaji:"oneesan",en:"older sister",lesson:1},
{id:"oniisan",kana:"おにいさん",romaji:"oniisan",en:"older brother",lesson:1},
{id:"imouto",kana:"いもうと",romaji:"imouto",en:"younger sister",lesson:1},
{id:"otouto",kana:"おとうと",romaji:"otouto",en:"younger brother",lesson:1},
{id:"kagaku",kana:"かがく",romaji:"kagaku",en:"science",lesson:1},
{id:"seiji",kana:"せいじ",romaji:"seiji",en:"politics",lesson:1},
{id:"bungaku",kana:"ぶんがく",romaji:"bungaku",en:"literature",lesson:1},
{id:"kore",kana:"これ",romaji:"kore",en:"this one",lesson:2},
{id:"sore",kana:"それ",romaji:"sore",en:"that one",lesson:2},
{id:"are",kana:"あれ",romaji:"are",en:"that one (over there)",lesson:2},
{id:"dore",kana:"どれ",romaji:"dore",en:"which one",lesson:2},
{id:"asoko",kana:"あそこ",romaji:"asoko",en:"over there",lesson:2},
{id:"doko",kana:"どこ",romaji:"doko",en:"where",lesson:2},
{id:"dare",kana:"だれ",romaji:"dare",en:"who",lesson:2},
{id:"tonkatsu",kana:"とんかつ",romaji:"tonkatsu",en:"pork cutlet",lesson:2},
{id:"niku",kana:"にく",romaji:"niku",en:"meat",lesson:2},
{id:"menyu",kana:"メニュー",romaji:"menyu",en:"menu",lesson:2},
{id:"enpitsu",kana:"えんぴつ",romaji:"enpitsu",en:"pencil",lesson:2},
{id:"kaban",kana:"かばん",romaji:"kaban",en:"bag",lesson:2},
{id:"jinzu",kana:"ジーンズ",romaji:"jinzu",en:"jeans",lesson:2},
{id:"jisho",kana:"じしょ",romaji:"jisho",en:"dictionary",lesson:2},
{id:"tepu",kana:"テープ",romaji:"tepu",en:"tape",lesson:2},
{id:"torena",kana:"トレーナー",romaji:"torena",en:"sweatshirt",lesson:2},
{id:"noto",kana:"ノート",romaji:"noto",en:"notebook",lesson:2},
{id:"pen",kana:"ペン",romaji:"pen",en:"pen",lesson:2},
{id:"otearai",kana:"おてあらい",romaji:"otearai",en:"restroom",lesson:2},
{id:"takai",kana:"たかい",romaji:"takai",en:"expensive",lesson:2},
{id:"kokuban",kana:"こくばん",romaji:"kokuban",en:"blackboard",lesson:2},
{id:"keshigomu",kana:"けしゴム",romaji:"keshigomu",en:"eraser",lesson:2},
{id:"bideo",kana:"ビデオ",romaji:"bideo",en:"VCR / video player",lesson:2},
{id:"doa",kana:"ドア",romaji:"doa",en:"door",lesson:2},
{id:"katen",kana:"カーテン",romaji:"katen",en:"curtain",lesson:2},
];