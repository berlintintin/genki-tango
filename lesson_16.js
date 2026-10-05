/* =======================================================================
   lesson_16.js  —  Doodle Tango vocabulary, Lesson 16  (Genki II)
   Loaded on demand by index.html when the chosen range includes lesson 16.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[16] = [
{id:"ekiin",kanji:"駅員",kana:"えきいん",romaji:"ekiin",en:"station attendant",lesson:16,art:`<circle class="s" cx="70" cy="58" r="14"/>
<path class="fr" d="M56 46 Q56 30 70 30 Q84 30 84 46 Z"/>
<path class="s r" d="M52 46 L92 46"/>
<path class="s" d="M70 72 L70 124 M70 124 L58 160 M70 124 L82 160 M70 86 L50 108 M70 86 L98 72"/>
<path class="s t" d="M108 140 L176 140 M108 156 L176 156 M118 134 L118 162 M138 134 L138 162 M158 134 L158 162"/>`},
{id:"oya",kanji:"親",kana:"おや",romaji:"oya",en:"parent",lesson:16,art:`<circle class="s" cx="76" cy="50" r="14"/>
<path class="s" d="M76 64 L76 118 M76 118 L64 158 M76 118 L88 158 M76 80 L58 104 M76 80 L114 112"/>
<circle class="s" cx="130" cy="96" r="10"/>
<path class="s" d="M130 106 L130 136 M130 136 L122 158 M130 136 L138 158 M130 114 L114 112"/>
<path class="fr" d="M110 62 C104 52 94 58 100 66 L110 76 L120 66 C126 58 116 52 110 62 Z"/>`},
{id:"shinseki",kanji:"親せき",kana:"しんせき",romaji:"shinseki",en:"relatives",lesson:16,art:`<circle class="s" cx="100" cy="44" r="12"/>
<path class="s r" d="M100 56 L100 80 M48 80 L152 80 M48 80 L48 100 M100 80 L100 100 M152 80 L152 100"/>
<circle class="s" cx="48" cy="112" r="12"/><circle class="s" cx="100" cy="112" r="12"/><circle class="s" cx="152" cy="112" r="12"/>
<path class="s" d="M34 160 Q48 128 62 160 M86 160 Q100 128 114 160 M138 160 Q152 128 166 160"/>`},
{id:"gomi",kana:"ごみ",romaji:"gomi",en:"garbage",lesson:16,art:`<path class="s" d="M62 76 L70 160 L130 160 L138 76 Z"/>
<path class="s" d="M54 68 L146 68 M88 68 L90 58 L110 58 L112 68"/>
<path class="s t" d="M86 90 L88 148 M100 90 L100 148 M114 90 L112 148"/>
<path class="s t r" d="M80 48 Q74 40 80 32 M100 46 Q94 38 100 30 M120 48 Q114 40 120 32"/>
<path class="fr" d="M146 150 Q140 136 154 134 Q168 136 162 150 Q154 160 146 150 Z"/>`},
{id:"satou",kanji:"砂糖",kana:"さとう",romaji:"satou",en:"sugar",lesson:16,art:`<rect class="s" x="52" y="110" width="40" height="40"/>
<rect class="s" x="92" y="110" width="40" height="40"/>
<rect class="s" x="72" y="70" width="40" height="40"/>
<path class="s r" d="M150 48 L150 76 M136 62 L164 62 M140 52 L160 72 M160 52 L140 72"/>
<path class="s t r" d="M40 70 L40 82 M34 76 L46 76"/>`},
{id:"fairu",kana:"ファイル",romaji:"fairu",en:"(file) folder; portfolio; file",lesson:16,art:`<path class="s t r" d="M54 72 L54 48 L146 48 L146 72 M66 58 L122 58"/>
<path class="s" d="M36 62 L76 62 L84 72 L160 72 L160 156 L36 156 Z"/>
<path class="s" d="M36 156 L48 96 L172 96 L160 156"/>`},
{id:"ookisa",kanji:"大きさ",kana:"おおきさ",romaji:"ookisa",en:"size",lesson:16,art:`<rect class="s" x="30" y="124" width="24" height="24"/>
<rect class="s" x="66" y="96" width="44" height="52"/>
<rect class="s" x="122" y="64" width="54" height="84"/>
<path class="s r" d="M30 162 L176 162 M30 162 L38 156 M30 162 L38 168 M176 162 L168 156 M176 162 L168 168"/>`},
{id:"michi",kanji:"道",kana:"みち",romaji:"michi",en:"way; road; directions",lesson:16,art:`<path class="s" d="M88 50 L44 164 M112 50 L156 164"/>
<path class="s r" d="M100 60 L100 74 M100 90 L100 108 M100 126 L100 152"/>
<path class="s t" d="M28 50 L176 50"/>
<path class="s" d="M42 110 L42 64 M28 64 L58 64 L66 72 L58 80 L28 80 Z"/>`},
{id:"kimatsushiken",kanji:"期末試験",kana:"きまつしけん",romaji:"kimatsu shiken",en:"final examination",lesson:16,art:`<rect class="s" x="40" y="36" width="84" height="120" rx="4"/>
<path class="s t" d="M54 60 L100 60 M54 84 L100 84 M54 108 L100 108 M54 132 L90 132"/>
<path class="s r" d="M104 58 L110 66 L120 50 M104 82 L110 90 L120 74 M104 106 L110 114 L120 98"/>
<circle class="s" cx="148" cy="140" r="22"/>
<path class="s" d="M148 140 L148 126 M148 140 L158 146"/>`},
{id:"kenkyuu",kanji:"研究",kana:"けんきゅう",romaji:"kenkyuu",en:"research",lesson:16,art:`<path class="s" d="M62 50 L62 92 L36 150 L104 150 L78 92 L78 50 M56 50 L84 50"/>
<path class="s t" d="M48 124 L92 124"/>
<circle class="s t" cx="74" cy="34" r="5"/>
<circle class="s r" cx="134" cy="84" r="24"/>
<path class="s r" d="M151 101 L172 124"/>
<path class="s t r" d="M124 76 Q130 70 138 72"/>`},
{id:"daigakuin",kanji:"大学院",kana:"だいがくいん",romaji:"daigakuin",en:"graduate school",lesson:16,art:`<path class="s" d="M40 92 L100 66 L160 92 Z"/>
<path class="s" d="M50 100 L50 146 M76 100 L76 146 M124 100 L124 146 M150 100 L150 146 M36 154 L164 154 M40 100 L160 100"/>
<path class="s" d="M90 146 L90 118 L110 118 L110 146"/>
<path class="fr" d="M100 26 L134 40 L100 54 L66 40 Z"/>
<path class="s r" d="M134 40 L134 60"/>`},
{id:"shougakukin",kanji:"奨学金",kana:"しょうがくきん",romaji:"shougakukin",en:"scholarship",lesson:16,art:`<path class="s" d="M100 34 L150 54 L100 74 L50 54 Z"/>
<path class="s" d="M70 64 L70 86 Q100 100 130 86 L130 64"/>
<path class="s t" d="M150 54 L150 80"/>
<ellipse class="s r" cx="100" cy="126" rx="30" ry="8"/>
<path class="s r" d="M70 126 L70 148 Q100 160 130 148 L130 126"/>
<path class="s t r" d="M70 137 Q100 149 130 137"/>`},
{id:"suisenjou",kanji:"推薦状",kana:"すいせんじょう",romaji:"suisenjou",en:"letter of recommendation",lesson:16,art:`<rect class="s" x="40" y="56" width="120" height="84" rx="4"/>
<path class="s" d="M40 56 L100 102 L160 56"/>
<path class="fr" d="M100 110 L106 122 L120 124 L110 134 L112 148 L100 141 L88 148 L90 134 L80 124 L94 122 Z"/>
<path class="s t r" d="M90 148 L84 166 M110 148 L116 166"/>`},
{id:"taifuu",kanji:"台風",kana:"たいふう",romaji:"taifuu",en:"typhoon",lesson:16,art:`<path class="s r" d="M100 96 Q112 88 106 78 Q96 68 82 80 Q70 96 86 112 Q104 128 126 110 Q146 90 132 66 Q114 40 82 50"/>
<path class="s" d="M132 66 Q166 96 144 136 M82 50 Q40 66 50 118"/>
<path class="s t" d="M40 140 L32 160 M62 144 L54 164 M140 148 L132 166 M166 142 L158 162"/>`},
{id:"bunka",kanji:"文化",kana:"ぶんか",romaji:"bunka",en:"culture",lesson:16,art:`<path class="s r" d="M36 52 Q100 40 164 52 M46 72 L154 72 M100 50 L100 72"/>
<path class="s r" d="M64 50 L60 160 M136 50 L140 160"/>
<path class="s" d="M100 150 L76 112 Q100 96 124 112 Z"/>
<path class="s t" d="M100 150 L92 104 M100 150 L108 104 M100 150 L84 108 M100 150 L116 108"/>`},
{id:"henji",kanji:"返事",kana:"へんじ",romaji:"henji",en:"reply",lesson:16,art:`<rect class="s" x="48" y="92" width="104" height="66" rx="4"/>
<path class="s" d="M48 92 L100 130 L152 92"/>
<path class="s r" d="M60 74 L132 74 Q158 74 158 54 Q158 36 132 36 L80 36"/>
<path class="s r" d="M90 26 L78 36 L90 46"/>`},
{id:"hi_day",kanji:"日",kana:"ひ",romaji:"hi",en:"day",lesson:16,art:`<path class="s t" d="M34 150 Q100 30 166 150"/>
<path class="s" d="M28 150 L172 150"/>
<circle class="fr" cx="100" cy="90" r="18"/>
<path class="s r" d="M100 60 L100 50 M100 120 L100 130 M70 90 L60 90 M130 90 L140 90 M79 69 L72 62 M121 69 L128 62 M79 111 L72 118 M121 111 L128 118"/>`},
{id:"kitanai",kanji:"汚い",kana:"きたない",romaji:"kitanai",en:"dirty",lesson:16,art:`<path class="s" d="M62 64 L84 52 Q100 62 116 52 L138 64 L152 88 L134 96 L132 150 L68 150 L66 96 L48 88 Z"/>
<path class="fr" d="M82 104 Q90 96 96 106 Q104 112 94 118 Q84 122 82 104 Z"/>
<circle class="fr" cx="116" cy="128" r="7"/>
<circle class="fr" cx="110" cy="82" r="4"/>
<path class="s t" d="M152 40 Q146 32 152 24 M166 46 Q160 38 166 30"/>`},
{id:"okosu",kanji:"起こす",kana:"おこす",romaji:"okosu",en:"to wake (someone) up",lesson:16,art:`<path class="s" d="M28 156 L28 120 L132 120 L132 156 M28 134 L132 134"/>
<circle class="s" cx="44" cy="110" r="10"/>
<path class="s" d="M56 120 Q90 100 128 120"/>
<circle class="s" cx="152" cy="54" r="12"/>
<path class="s" d="M152 66 L152 116 M152 116 L142 156 M152 116 L162 156 M152 80 L104 106 M152 80 L166 100"/>
<path class="s t r" d="M84 88 L90 80 M98 86 L100 76 M112 90 L118 82 M40 90 L44 82"/>`},
{id:"ogoru",kana:"おごる",romaji:"ogoru",en:"to treat (someone) to a meal",lesson:16,art:`<circle class="s" cx="46" cy="60" r="12"/>
<path class="s" d="M46 72 L46 120 M46 86 L76 78"/>
<rect class="fr" x="74" y="66" width="24" height="15" rx="2"/>
<path class="s" d="M28 124 L172 124 M60 124 L60 160 M140 124 L140 160"/>
<path class="s" d="M82 106 L118 106 Q114 122 100 122 Q86 122 82 106 Z"/>
<circle class="s" cx="154" cy="60" r="12"/>
<path class="s" d="M154 72 L154 120 M154 86 L134 100"/>`},
{id:"warau",kanji:"笑う",kana:"わらう",romaji:"warau",en:"to laugh",lesson:16,art:`<circle class="s" cx="100" cy="98" r="58"/>
<path class="s" d="M68 84 Q78 72 88 84 M112 84 Q122 72 132 84"/>
<path class="fr" d="M68 106 L132 106 Q130 142 100 142 Q70 142 68 106 Z"/>
<path class="s t r" d="M30 58 L40 66 M170 58 L160 66 M28 98 L36 98 M172 98 L164 98"/>`},
{id:"ochikomu",kanji:"落ち込む",kana:"おちこむ",romaji:"ochikomu",en:"to get depressed",lesson:16,art:`<path class="s" d="M60 60 Q56 42 78 44 Q88 28 108 38 Q128 32 132 52 Q148 56 140 68 L64 68 Q52 66 60 60 Z"/>
<path class="s t r" d="M78 78 L74 90 M100 78 L96 90 M122 78 L118 90"/>
<circle class="s" cx="86" cy="118" r="12"/>
<path class="s" d="M96 124 Q120 120 120 146 L120 160 L88 160 M104 132 L90 148"/>
<path class="s" d="M28 162 L176 162"/>`},
{id:"komaru",kanji:"困る",kana:"こまる",romaji:"komaru",en:"to have difficulty",lesson:16,art:`<circle class="s" cx="100" cy="72" r="16"/>
<path class="s" d="M100 88 L100 134 M100 134 L88 166 M100 134 L112 166 M100 102 L76 94 L86 64 M100 102 L124 114"/>
<path class="s r" d="M112 42 Q130 24 142 40 Q152 56 132 50 Q116 44 134 34 Q152 28 158 46"/>
<path class="s t" d="M128 66 Q122 76 128 80 Q134 76 128 66 Z"/>
<path class="s t" d="M92 80 Q100 74 108 80"/>`},
{id:"dasu",kanji:"出す",kana:"だす",romaji:"dasu",en:"to take (something) out; to hand in",lesson:16,art:`<circle class="s" cx="44" cy="56" r="12"/>
<path class="s" d="M44 68 L44 130 M44 130 L34 164 M44 130 L54 164 M44 84 L98 98"/>
<rect class="s" x="98" y="72" width="42" height="56" rx="3"/>
<path class="s t" d="M108 88 L130 88 M108 100 L130 100 M108 112 L124 112"/>
<path class="s r" d="M110 148 L168 148 M158 140 L168 148 L158 156"/>`},
{id:"naosu",kanji:"直す",kana:"なおす",romaji:"naosu",en:"to correct; to fix",lesson:16,art:`<path class="s" d="M48 152 L106 94"/>
<path class="s" d="M106 94 Q94 72 114 58 L122 74 L138 66 Q140 96 106 94 Z"/>
<path class="s" d="M118 120 L150 120 L150 152 L118 152 Z"/>
<circle class="f" cx="134" cy="136" r="5"/>
<path class="s r" d="M30 60 L42 74 L64 42"/>
<path class="s t r" d="M160 108 L168 100 M162 128 L172 128 M106 160 L100 168"/>`},
{id:"mitsukaru",kanji:"見つかる",kana:"みつかる",romaji:"mitsukaru",en:"to be found",lesson:16,art:`<circle class="s" cx="88" cy="94" r="40"/>
<path class="s" d="M116 122 L156 162"/>
<circle class="s r" cx="72" cy="94" r="10"/>
<path class="s r" d="M82 94 L108 94 M98 94 L98 104 M106 94 L106 104"/>
<path class="s t r" d="M40 40 L48 48 M88 30 L88 42 M136 40 L128 48"/>`},
{id:"yakusu",kanji:"訳す",kana:"やくす",romaji:"yakusu",en:"to translate",lesson:16,art:`<path class="s" d="M28 54 L88 54 L88 104 L56 104 L44 118 L46 104 L28 104 Z"/>
<circle class="s t" cx="46" cy="79" r="7"/><circle class="s t" cx="70" cy="79" r="7"/>
<path class="s" d="M112 100 L172 100 L172 148 L154 148 L156 162 L142 148 L112 148 Z"/>
<path class="s t" d="M122 116 L136 116 L136 130 L122 130 Z M148 116 L162 116 L162 130 L148 130 Z"/>
<path class="s r" d="M96 60 Q132 50 142 88 M134 82 L142 92 L150 82"/>`},
{id:"kasu",kanji:"貸す",kana:"かす",romaji:"kasu",en:"to lend",lesson:16,art:`<circle class="s" cx="40" cy="58" r="12"/>
<path class="s" d="M40 70 L40 124 M40 124 L30 160 M40 124 L50 160 M40 84 L80 92"/>
<path class="s r" d="M80 78 L100 84 L120 78 L120 106 L100 112 L80 106 Z M100 84 L100 112"/>
<circle class="s" cx="160" cy="58" r="12"/>
<path class="s" d="M160 70 L160 124 M160 124 L150 160 M160 124 L170 160 M160 84 L122 94"/>
<path class="s t" d="M70 134 L130 134 M122 128 L130 134 L122 140 M130 152 L70 152 M78 146 L70 152 L78 158"/>`},
{id:"tsureteiku",kanji:"連れていく",kana:"つれていく",romaji:"tsurete iku",en:"to take (someone) to (a place)",lesson:16,art:`<circle class="s" cx="50" cy="60" r="12"/>
<path class="s" d="M50 72 L50 120 M50 120 L40 156 M50 120 L62 156 M50 86 L76 104"/>
<circle class="s" cx="86" cy="94" r="9"/>
<path class="s" d="M86 103 L86 130 M86 130 L80 156 M86 130 L94 156 M86 110 L76 104"/>
<path class="fr" d="M150 120 Q130 92 136 78 Q142 64 150 64 Q158 64 164 78 Q170 92 150 120 Z"/>
<circle style="fill:#fff" cx="150" cy="80" r="6"/>
<path class="s r" d="M104 142 L140 142 M130 134 L140 142 L130 150"/>`},
{id:"michinimayou",kanji:"道に迷う",kana:"みちにまよう",romaji:"michi ni mayou",en:"to become lost; to lose one's way",lesson:16,art:`<path class="s" d="M110 164 L110 40 M110 48 L152 48 L162 56 L152 64 L110 64 M110 78 L68 78 L58 86 L68 94 L110 94 M110 108 L156 108 L166 116 L156 124 L110 124"/>
<circle class="s" cx="46" cy="124" r="10"/>
<path class="s" d="M46 134 L46 152 M46 152 L40 166 M46 152 L52 166 M46 140 L36 150 M46 140 L56 150"/>
<path class="s t r" d="M46 108 Q58 102 56 92 Q50 84 40 90 Q34 98 44 100 Q52 98 50 92"/>`},
{id:"mukaeniiku",kanji:"迎えに行く",kana:"むかえにいく",romaji:"mukae ni iku",en:"to go to pick up",lesson:16,art:`<path class="s" d="M28 96 L54 72 L80 96 M34 92 L34 140 L74 140 L74 92"/>
<circle class="s" cx="104" cy="88" r="10"/>
<path class="s" d="M104 98 L104 124 M104 124 L96 140 M104 124 L114 140 M104 106 L116 116"/>
<circle class="s" cx="158" cy="80" r="10"/>
<path class="s" d="M158 90 L158 120 M158 120 L150 140 M158 120 L166 140 M158 100 L170 86"/>
<path class="s r" d="M50 158 L150 158 M140 150 L150 158 L140 166"/>`},
{id:"atsumeru",kanji:"集める",kana:"あつめる",romaji:"atsumeru",en:"to collect",lesson:16,art:`<path class="s r" d="M66 118 L134 118 L124 160 L76 160 Z"/>
<circle class="s" cx="40" cy="48" r="8"/>
<rect class="s" x="92" y="28" width="16" height="16"/>
<path class="s" d="M152 40 L168 56 L152 64 Z"/>
<path class="s t" d="M48 58 L80 104 M72 100 L80 104 L80 96 M100 52 L100 104 M94 98 L100 104 L106 98 M152 70 L120 104 M120 96 L120 104 L128 102"/>`},
{id:"ireru",kanji:"入れる",kana:"いれる",romaji:"ireru",en:"to put (something) in",lesson:16,art:`<path class="s" d="M50 110 L50 160 L150 160 L150 110 Z"/>
<path class="s" d="M50 110 L34 90 M150 110 L166 90"/>
<circle class="fr" cx="100" cy="46" r="14"/>
<path class="s r" d="M100 68 L100 124 M90 114 L100 124 L110 114"/>`},
{id:"miseru",kanji:"見せる",kana:"みせる",romaji:"miseru",en:"to show",lesson:16,art:`<circle class="s" cx="46" cy="60" r="12"/>
<path class="s" d="M46 72 L46 124 M46 124 L36 160 M46 124 L56 160 M46 86 L80 74"/>
<rect class="s r" x="80" y="40" width="42" height="46" rx="3"/>
<path class="s t r" d="M86 80 L98 62 L106 72 L112 64 L118 80"/>
<path class="s" d="M134 122 Q154 106 174 122 Q154 138 134 122 Z"/>
<circle class="f" cx="154" cy="122" r="5"/>
<path class="s t" d="M140 108 L124 92"/>`},
{id:"noriokureru",kanji:"乗り遅れる",kana:"のりおくれる",romaji:"noriokureru",en:"to miss (a train, bus, etc.)",lesson:16,art:`<path class="s" d="M96 70 L166 70 Q176 70 176 80 L176 140 L96 140 Z"/>
<path class="s t" d="M108 84 L128 84 L128 104 L108 104 Z M140 84 L160 84 L160 104 L140 104 Z"/>
<circle class="s" cx="116" cy="148" r="8"/><circle class="s" cx="156" cy="148" r="8"/>
<path class="s r" d="M70 90 L86 90 M64 110 L86 110 M72 130 L86 130"/>
<circle class="s" cx="40" cy="70" r="10"/>
<path class="s" d="M40 80 L46 118 M46 118 L34 150 M46 118 L62 146 M42 92 L62 82 M42 92 L26 104"/>`},
{id:"aironwokakeru",kana:"アイロンをかける",romaji:"airon o kakeru",en:"to iron (clothes)",lesson:16,art:`<path class="s" d="M28 128 L150 128 Q176 128 176 136 Q150 144 28 144 Z"/>
<path class="s" d="M70 144 L120 168 M120 144 L70 168"/>
<path class="s" d="M60 122 L60 104 Q60 88 90 88 L128 88 Q130 110 142 122 Z"/>
<path class="s" d="M76 88 Q76 70 96 70 L116 70 Q120 80 120 88"/>
<path class="s t r" d="M70 60 Q64 50 70 40 M92 56 Q86 46 92 36 M114 60 Q108 50 114 40"/>`},
{id:"asanebousuru",kanji:"朝寝坊する",kana:"あさねぼうする",romaji:"asanebou suru",en:"to oversleep",lesson:16,art:`<path class="s" d="M28 158 L28 104 M28 120 L150 120 L150 158 M28 134 L150 134"/>
<circle class="s" cx="46" cy="110" r="10"/>
<path class="s" d="M58 120 Q100 98 146 120"/>
<circle class="s" cx="146" cy="48" r="14"/>
<path class="s t" d="M146 26 L146 30 M168 48 L164 48 M124 48 L128 48 M162 32 L159 35 M130 32 L133 35"/>
<circle class="s r" cx="80" cy="58" r="18"/>
<path class="s r" d="M80 58 L80 46 M80 58 L90 62"/>
<path class="s t r" d="M56 42 L62 48 M104 42 L98 48"/>`},
{id:"annaisuru",kanji:"案内する",kana:"あんないする",romaji:"annai suru",en:"to show (someone) around",lesson:16,art:`<circle class="s" cx="70" cy="72" r="12"/>
<path class="s" d="M70 84 L70 132 M70 132 L60 164 M70 132 L80 164 M70 96 L48 72 M70 96 L86 116"/>
<path class="s r" d="M48 72 L48 30 M48 30 L78 38 L48 48"/>
<circle class="s" cx="128" cy="100" r="9"/><circle class="s" cx="154" cy="106" r="9"/>
<path class="s" d="M114 140 Q128 112 142 140 M140 146 Q154 118 168 146"/>`},
{id:"setsumeisuru",kanji:"説明する",kana:"せつめいする",romaji:"setsumei suru",en:"to explain",lesson:16,art:`<rect class="s" x="76" y="36" width="96" height="72" rx="3"/>
<path class="s t" d="M88 52 L108 52 L108 66 L88 66 Z M140 78 L160 78 L160 92 L140 92 Z M108 62 L140 82"/>
<circle class="s" cx="44" cy="82" r="12"/>
<path class="s" d="M44 94 L44 140 M44 140 L34 168 M44 140 L54 168 M44 106 L66 98"/>
<path class="s r" d="M66 98 L104 70"/>`},
{id:"mukaenikuru",kanji:"迎えに来る",kana:"むかえにくる",romaji:"mukae ni kuru",en:"to come to pick up",lesson:16,art:`<path class="s" d="M28 96 L54 72 L80 96 M34 92 L34 140 L74 140 L74 92"/>
<circle class="s" cx="96" cy="96" r="9"/>
<path class="s" d="M96 105 L96 126 M96 126 L90 140 M96 126 L102 140"/>
<circle class="s" cx="152" cy="80" r="10"/>
<path class="s" d="M152 90 L152 118 M152 118 L142 140 M152 118 L164 140 M152 100 L138 108"/>
<path class="s r" d="M168 158 L56 158 M66 150 L56 158 L66 166"/>`},
{id:"kyoujuuni",kanji:"今日中に",kana:"きょうじゅうに",romaji:"kyoujuu ni",en:"by the end of today",lesson:16,art:`<circle class="s" cx="100" cy="78" r="44"/>
<path class="s t" d="M100 38 L100 44 M140 78 L134 78 M100 118 L100 112 M60 78 L66 78"/>
<path class="s" d="M100 78 L96 52"/>
<path class="s r" d="M100 78 L68 60"/>
<path class="s" d="M28 158 L172 158 M76 158 A24 24 0 0 1 124 158"/>
<path class="s t" d="M100 144 L100 136"/>`},
{id:"jugyouchuuni",kanji:"授業中に",kana:"じゅぎょうちゅうに",romaji:"jugyouchuu ni",en:"in class; during the class",lesson:16,art:`<rect class="f" x="40" y="30" width="120" height="62" rx="3"/>
<path style="fill:#fff" d="M54 44 L110 44 L110 49 L54 49 Z M54 58 L130 58 L130 63 L54 63 Z M54 72 L96 72 L96 77 L54 77 Z"/>
<circle class="s" cx="56" cy="126" r="10"/><circle class="s" cx="100" cy="126" r="10"/><circle class="s" cx="144" cy="126" r="10"/>
<path class="s" d="M40 166 Q56 136 72 166 M84 166 Q100 136 116 166 M128 166 Q144 136 160 166"/>
<path class="s r" d="M110 148 L122 104 M116 102 L122 104 L126 98"/>`},
{id:"konoaida",kanji:"この間",kana:"このあいだ",romaji:"kono aida",en:"the other day",lesson:16,art:`<rect class="s" x="40" y="46" width="120" height="104" rx="4"/>
<path class="s" d="M40 70 L160 70 M68 38 L68 54 M132 38 L132 54"/>
<path class="s t" d="M70 70 L70 150 M100 70 L100 150 M130 70 L130 150 M40 96 L160 96 M40 124 L160 124"/>
<rect class="f" x="130" y="124" width="30" height="26"/>
<circle class="s r" cx="85" cy="110" r="11"/>
<path class="s t r" d="M144 164 L56 164 M66 158 L56 164 L66 170"/>`},
{id:"korekara",kana:"これから",romaji:"korekara",en:"from now on",lesson:16,art:`<path class="s t" d="M28 140 L76 140"/>
<circle class="f" cx="84" cy="140" r="7"/>
<path class="s r" d="M94 140 L170 140 M158 130 L170 140 L158 150"/>
<circle class="s" cx="84" cy="58" r="12"/>
<path class="s" d="M84 70 L84 104 M84 104 L74 128 M84 104 L98 126 M84 80 L100 92 M84 80 L70 92"/>`},
{id:"konogurai",kana:"このぐらい",romaji:"kono gurai",en:"about this much",lesson:16,art:`<rect class="s" x="36" y="60" width="22" height="68" rx="11"/>
<rect class="s" x="142" y="60" width="22" height="68" rx="11"/>
<path class="s" d="M58 96 L68 86 M142 96 L132 86"/>
<path class="s" d="M47 128 L40 166 M153 128 L160 166"/>
<path class="s r" d="M70 112 L130 112 M80 104 L70 112 L80 120 M120 104 L130 112 L120 120"/>`},
{id:"jibunde",kanji:"自分で",kana:"じぶんで",romaji:"jibun de",en:"(do something) by oneself",lesson:16,art:`<path class="s t r" d="M88 26 L44 158 M112 26 L156 158"/>
<ellipse class="s r" cx="100" cy="160" rx="56" ry="8"/>
<rect class="s" x="80" y="40" width="40" height="24"/>
<circle class="s" cx="100" cy="82" r="12"/>
<path class="s" d="M100 94 L100 130 M100 130 L90 158 M100 130 L110 158 M100 104 L84 64 M100 104 L116 64"/>`},
{id:"hokano",kanji:"他の",kana:"ほかの",romaji:"hoka no",en:"other",lesson:16,art:`<circle class="s" cx="50" cy="66" r="14"/><circle class="s" cx="86" cy="66" r="14"/>
<circle class="s" cx="50" cy="104" r="14"/><circle class="s" cx="86" cy="104" r="14"/>
<circle class="fr" cx="146" cy="138" r="16"/>
<path class="s t" d="M108 92 Q138 90 144 114 M136 108 L144 116 L150 106"/>`},
{id:"eeto",kana:"ええと",romaji:"eeto",en:"well ...; let me see ...",lesson:16,art:`<circle class="s" cx="80" cy="70" r="16"/>
<path class="s" d="M80 86 L80 140 M80 140 L68 168 M80 140 L92 168 M80 104 L62 114 L82 90 M80 104 L104 118"/>
<path class="s t" d="M84 64 L92 60"/>
<circle class="fr" cx="112" cy="58" r="4"/><circle class="fr" cx="128" cy="48" r="5"/><circle class="fr" cx="148" cy="40" r="6"/>`},
{id:"jitsuwa",kanji:"実は",kana:"じつは",romaji:"jitsu wa",en:"actually; in fact",lesson:16,art:`<path class="s" d="M28 36 L172 36"/>
<path class="s" d="M36 36 Q46 100 36 164 L58 164 Q50 100 66 36"/>
<path class="s" d="M172 36 L112 36 Q122 100 112 164 L172 164"/>
<path class="fr" d="M88 76 L94 92 L110 92 L98 102 L102 118 L88 108 L74 118 L78 102 L66 92 L82 92 Z"/>
<path class="s t r" d="M88 60 L88 52 M72 66 L66 60 M104 66 L110 60"/>`},
{id:"igai",kanji:"〜以外",kana:"〜いがい",romaji:"igai",en:"other than ...",lesson:16,art:`<circle class="s" cx="40" cy="90" r="12"/><circle class="s" cx="70" cy="90" r="12"/>
<circle class="s" cx="100" cy="90" r="12"/><circle class="s" cx="130" cy="90" r="12"/><circle class="s" cx="160" cy="90" r="12"/>
<path class="s r" d="M86 76 L114 104 M114 76 L86 104"/>
<path class="s t" d="M28 116 L28 126 L82 126 L82 116 M118 116 L118 126 L172 126 L172 116"/>`},
{id:"gomen",kana:"ごめん",romaji:"gomen",en:"I'm sorry (casual)",lesson:16,art:`<circle class="s" cx="96" cy="64" r="14"/>
<path class="s" d="M100 78 L108 128 M108 128 L96 166 M108 128 L120 166 M102 92 L126 74 L112 58 M102 92 L88 118"/>
<path class="s t" d="M86 64 Q90 60 94 64"/>
<path class="fr" d="M128 38 Q122 48 128 52 Q134 48 128 38 Z"/>
<path class="s t r" d="M64 46 L72 54 M60 68 L70 70"/>`},
{id:"shitsureishimasu",kanji:"失礼します",kana:"しつれいします",romaji:"shitsurei shimasu",en:"Excuse me; Sorry to interrupt you",lesson:16,art:`<path class="s" d="M120 162 L120 36 L170 36 L170 162"/>
<path class="s r" d="M120 36 L146 48 L146 168 L120 162"/>
<circle class="fr" cx="140" cy="104" r="3"/>
<circle class="s" cx="90" cy="74" r="12"/>
<path class="s" d="M80 84 L50 104 M50 104 L46 160 M50 104 L60 160 M74 88 L76 114"/>
<path class="s" d="M28 164 L110 164"/>`}
];