/* =======================================================================
   lesson_10.js  —  Doodle Tango vocabulary, Lesson 10  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 10.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[10] = [
/* ===== Lesson 10 — full Genki vocab (transcribed from the textbook) ===== */
{id:"kisetsu",kanji:"季節",kana:"きせつ",romaji:"kisetsu",en:"season",lesson:10,art:`
<circle class="s" cx="100" cy="100" r="52"/>
<path class="s" d="M100 48 L100 152 M48 100 L152 100"/>
<circle class="fr" cx="74" cy="74" r="10"/>
<path class="s r" d="M126 66 Q140 70 138 82 Q126 86 122 74 Z"/>
<path class="s r" d="M74 122 L74 132 M68 126 L80 126 M62 132 L86 132 M64 132 Q64 122 74 122 Q84 122 84 132"/>
<path class="s r" d="M126 116 L126 136 M116 126 L136 126 M119 119 L133 133 M133 119 L119 133"/>
<path class="s t r" d="M150 74 Q158 82 150 90 M50 126 Q42 118 50 110"/>`},
{id:"haru",kanji:"春",kana:"はる",romaji:"haru",en:"spring",lesson:10,art:`<path class="s" d="M46 152 Q80 120 108 96 Q120 86 132 84"/>
<g class="s r"><ellipse cx="126" cy="70" rx="6" ry="10"/><ellipse cx="143" cy="82" rx="10" ry="6"/><ellipse cx="136" cy="100" rx="6" ry="10"/><ellipse cx="117" cy="98" rx="6" ry="10"/><ellipse cx="110" cy="80" rx="10" ry="6"/></g>
<circle class="fr" cx="126" cy="84" r="3"/>`},
{id:"aki",kanji:"秋",kana:"あき",romaji:"aki",en:"fall",lesson:10,art:`<path class="s r" d="M100 56 L111 82 L136 75 L121 97 L148 105 L121 113 L129 142 L100 124 L71 142 L79 113 L52 105 L79 97 L64 75 L89 82 Z"/>
<path class="s r t" d="M100 124 L100 152"/>`},
{id:"gyuunyuu",kanji:"牛乳",kana:"ぎゅうにゅう",romaji:"gyuunyuu",en:"milk",lesson:10,art:`<path class="s" d="M72 84 L128 84 L128 152 L72 152 Z"/>
<path class="s" d="M72 84 L100 58 L128 84"/>
<path class="s t" d="M86 71 L114 71"/>
<path class="s r t" d="M84 110 Q100 104 116 110 M86 126 L114 126"/>`},
{id:"keki",kana:"ケーキ",romaji:"keki",en:"cake",lesson:10,art:`<path class="s" d="M56 150 L100 66 L144 150 Z"/>
<path class="s t" d="M77 112 L123 112"/>
<circle class="s r" cx="100" cy="80" r="8"/>
<path class="s t r" d="M100 72 Q106 62 113 66"/>`},
{id:"sushi",kana:"すし",romaji:"sushi",en:"sushi",lesson:10,art:`<rect class="s" x="48" y="116" width="104" height="38" rx="19"/>
<path class="s r" d="M50 118 Q100 86 150 118 Q100 104 50 118 Z"/>
<path class="s t" d="M78 138 Q100 132 122 138"/>`},
{id:"tenpura",kanji:"天ぷら",kana:"てんぷら",romaji:"tenpura",en:"tempura",lesson:10,art:`<path class="s" d="M62 138 Q56 96 100 84 Q138 76 152 96 Q160 110 148 118 Q118 128 100 112"/>
<path class="s t" d="M152 88 L168 80 M152 96 L170 96 M152 104 L168 110"/>
<path class="s t" d="M74 116 L66 128 M92 100 L84 112 M110 90 L102 102"/>`},
{id:"ringo",kana:"りんご",romaji:"ringo",en:"apple",lesson:10,art:`<path class="s" d="M100 80 Q92 68 76 72 Q62 78 62 110 Q62 150 100 150 Q138 150 138 110 Q138 78 124 72 Q108 68 100 80"/>
<path class="s" d="M100 78 L100 56"/>
<path class="s" d="M102 60 Q118 50 126 64 Q112 72 102 60 Z"/>`},
{id:"ryouri2",kanji:"料理",kana:"りょうり",romaji:"ryouri",en:"cooking; cuisine",lesson:10,art:`<path class="s" d="M50 96 L150 96 L144 152 Q100 162 56 152 Z"/>
<path class="s" d="M50 104 L34 96 M150 104 L166 96"/>
<path class="s t r" d="M70 80 Q62 66 70 54 M100 76 Q92 62 100 50 M130 80 Q122 66 130 54"/>
<path class="s" d="M124 96 L152 44"/><ellipse class="s" cx="156" cy="38" rx="10" ry="7"/>
<path class="s t" d="M56 170 L144 170"/>`},
{id:"sakka",kana:"サッカー",romaji:"sakka",en:"soccer",lesson:10,art:`<circle class="s" cx="100" cy="108" r="46"/>
<path class="s f" d="M100 84 L119 98 L112 121 L88 121 L81 98 Z"/>
<path class="s t" d="M119 98 L142 95 M112 121 L127 141 M88 121 L73 141 M81 98 L58 95 M100 84 L100 62"/>`},
{id:"yakyuu",kanji:"野球",kana:"やきゅう",romaji:"yakyuu",en:"baseball",lesson:10,art:`<circle class="s" cx="78" cy="112" r="28"/>
<path class="s r t" d="M62 96 Q72 112 62 128 M94 96 Q84 112 94 128"/>
<path class="s" d="M116 148 L148 74 Q152 64 144 62 Q136 62 134 70 L108 140"/>`},
{id:"isha",kanji:"医者",kana:"いしゃ",romaji:"isha",en:"doctor",lesson:10,art:`<circle class="s" cx="100" cy="54" r="17"/>
<circle class="s r" cx="100" cy="34" r="8"/>
<path class="s t" d="M93 52 Q96 49 99 52 M103 52 Q106 49 109 52"/>
<path class="s" d="M100 71 L100 132 M100 132 L84 170 M100 132 L116 170 M100 88 L74 106 M100 88 L126 106"/>
<path class="s t r" d="M92 74 Q82 98 94 112"/>
<circle class="s t r" cx="98" cy="118" r="6"/>`},
{id:"okanemochi",kanji:"お金持ち",kana:"おかねもち",romaji:"okanemochi",en:"rich person",lesson:10,art:`<path class="s" d="M68 96 Q100 74 132 96 Q146 128 138 152 Q100 160 62 152 Q54 128 68 96 Z"/>
<path class="s t" d="M78 92 Q100 82 122 92"/>
<path class="s r" d="M88 116 L100 128 L112 116 M100 128 L100 146 M92 134 L108 134 M92 140 L108 140"/>`},
{id:"yuumeijin",kanji:"有名人",kana:"ゆうめいじん",romaji:"yuumeijin",en:"celebrity",lesson:10,art:`<circle class="s" cx="100" cy="62" r="17"/><path class="s t" d="M92 58 Q96 54 100 58 M104 58 Q108 54 112 58 M94 70 Q100 75 106 70"/>
<path class="s" d="M96 79 Q92 106 94 128 M94 128 L78 164 M94 128 L112 162"/>
<path class="s" d="M94 92 L68 82 M98 94 L126 86"/>
<path class="s r" d="M100 20 L104 30 L114 30 L106 37 L109 47 L100 41 L91 47 L94 37 L86 30 L96 30 Z"/>
<path class="s t" d="M40 60 L52 68 M36 84 L50 86 M164 56 L152 66 M168 80 L154 84"/>
<path class="s t r" d="M44 128 L58 120 M48 140 L60 136"/>`},
{id:"kao",kanji:"顔",kana:"かお",romaji:"kao",en:"face",lesson:10,art:`<circle class="s" cx="100" cy="106" r="52"/>
<path class="s t" d="M78 94 Q84 88 90 94 M110 94 Q116 88 122 94"/>
<path class="s t" d="M96 100 L92 114 L102 114"/>
<path class="s t" d="M82 122 Q100 136 118 122"/>`},
{id:"toshiue",kanji:"年上",kana:"としうえ",romaji:"toshiue",en:"someone older",lesson:10,art:`
<circle class="s" cx="72" cy="50" r="16"/>
<path class="s t" d="M64 66 Q90 78 82 66"/>
<path class="s" d="M72 66 L72 120 M72 120 L60 164 M72 120 L84 164 M72 82 L52 98 M72 82 L92 98"/>
<circle class="s r" cx="130" cy="94" r="12"/>
<path class="s r" d="M130 106 L130 144 M130 144 L120 168 M130 144 L140 168 M130 114 L146 128"/>
<path class="s r" d="M100 60 L100 46 M92 54 L100 46 L108 54"/>`},
{id:"eki",kanji:"駅",kana:"えき",romaji:"eki",en:"station",lesson:10,art:`<rect class="s" x="50" y="88" width="100" height="62" rx="4"/>
<path class="s" d="M46 88 L100 60 L154 88"/>
<rect class="s t" x="86" y="112" width="28" height="38"/>
<rect class="s t" x="60" y="110" width="20" height="18"/><rect class="s t" x="120" y="110" width="20" height="18"/>
<path class="s r" d="M70 78 L130 78"/>`},
{id:"shinkansen",kanji:"新幹線",kana:"しんかんせん",romaji:"shinkansen",en:"Shinkansen; bullet train",lesson:10,art:`<rect class="s" x="52" y="40" width="96" height="104" rx="16"/>
<rect class="s t" x="66" y="56" width="30" height="26" rx="4"/><rect class="s t" x="104" y="56" width="30" height="26" rx="4"/>
<path class="s r" d="M60 104 L140 104 M60 118 L140 118"/>
<circle class="s t" cx="74" cy="132" r="5"/><circle class="s t" cx="126" cy="132" r="5"/>
<path class="s" d="M40 168 L160 168 M52 156 L44 168 M148 156 L156 168"/>
<path class="s t" d="M56 30 L64 20 M144 30 L136 20"/>`},
{id:"chikatetsu",kanji:"地下鉄",kana:"ちかてつ",romaji:"chikatetsu",en:"subway",lesson:10,art:`<path class="s" d="M24 64 L176 64"/>
<rect class="s t" x="40" y="34" width="24" height="30"/><rect class="s t" x="76" y="24" width="28" height="40"/><rect class="s t" x="116" y="40" width="22" height="24"/>
<path class="s" d="M36 156 Q36 96 100 96 Q164 96 164 156"/>
<rect class="s r" x="66" y="116" width="68" height="40" rx="8"/>
<rect class="s t r" x="76" y="124" width="16" height="12"/><rect class="s t r" x="108" y="124" width="16" height="12"/>
<path class="s t" d="M40 164 L160 164"/>`},
{id:"fune",kanji:"船",kana:"ふね",romaji:"fune",en:"ship; boat",lesson:10,art:`<path class="s" d="M44 122 L156 122 L136 152 L64 152 Z"/>
<path class="s" d="M100 122 L100 44"/>
<path class="s r" d="M100 50 Q140 68 100 96 Z"/>
<path class="s t" d="M100 60 Q76 74 100 92"/>
<path class="s t" d="M28 166 Q40 158 52 166 Q64 174 76 166 Q88 158 100 166 Q112 174 124 166 Q136 158 148 166 Q160 174 172 166"/>`},
{id:"hikouki",kanji:"飛行機",kana:"ひこうき",romaji:"hikouki",en:"airplane",lesson:10,art:`<path class="s" d="M40 112 L150 104 Q166 103 166 111 Q166 119 150 118 L40 116 Z"/>
<path class="s" d="M96 110 L74 76 L92 108 M104 112 L84 146 L100 114"/>
<path class="s" d="M152 106 L144 84 M152 116 L144 134"/>
<circle class="s t" cx="120" cy="108" r="3"/><circle class="s t" cx="132" cy="108" r="3"/>`},
{id:"yoyaku",kanji:"予約",kana:"よやく",romaji:"yoyaku",en:"reservation",lesson:10,art:`
<rect class="s" x="48" y="52" width="104" height="100" rx="6"/>
<path class="s" d="M48 76 L152 76"/>
<path class="s" d="M72 44 L72 60 M128 44 L128 60"/>
<path class="s t" d="M64 92 L88 92 M104 92 L136 92 M64 112 L88 112 M104 112 L136 112 M64 132 L88 132"/>
<path class="s r" d="M100 120 L112 134 L142 100"/>`},
{id:"tsua",kana:"ツアー",romaji:"tsua",en:"tour",lesson:10,art:`
<path class="s" d="M64 60 L64 156"/>
<path class="s r" d="M64 60 Q100 44 136 60 Q118 74 136 88 Q100 74 64 88 Z"/>
<circle class="s t" cx="100" cy="120" r="10"/><path class="s t" d="M100 130 L100 156 M100 138 L88 148 M100 138 L112 148"/>
<circle class="s t" cx="132" cy="128" r="9"/><path class="s t" d="M132 137 L132 158 M132 144 L122 152 M132 144 L142 152"/>
<circle class="s t" cx="150" cy="116" r="8"/><path class="s t" d="M150 124 L150 152"/>`},
{id:"doubutsuen",kanji:"動物園",kana:"どうぶつえん",romaji:"doubutsuen",en:"zoo",lesson:10,art:`
<path class="s" d="M40 60 L40 150 L160 150 L160 60 Q100 40 40 60 Z"/>
<path class="s" d="M40 88 L160 88"/>
<path class="s t" d="M56 88 L56 150 M72 88 L72 150 M88 88 L88 150 M104 88 L104 150 M120 88 L120 150 M136 88 L136 150"/>
<path class="s r" d="M60 148 Q60 118 78 118 Q94 118 94 148 M62 120 L58 108 Q66 104 70 112"/>
<circle class="f" cx="70" cy="128" r="2.5"/>
<path class="s r" d="M116 148 L116 108 Q116 98 126 98 Q136 98 136 108 L136 118"/>
<circle class="s r" cx="140" cy="112" r="7"/><path class="s t r" d="M146 108 L152 104"/>`},
{id:"jikan",kanji:"時間",kana:"じかん",romaji:"jikan",en:"time",lesson:10,art:`<circle class="s" cx="100" cy="102" r="52"/>
<path class="s t" d="M100 58 L100 66 M100 138 L100 146 M58 102 L66 102 M134 102 L142 102"/>
<path class="s" d="M100 102 L100 74"/>
<path class="s r" d="M100 102 L126 114"/>
<circle class="f" cx="100" cy="102" r="5"/>
<path class="s t" d="M66 54 Q56 42 66 34 M134 54 Q144 42 134 34"/>`},
{id:"sekai",kanji:"世界",kana:"せかい",romaji:"sekai",en:"world",lesson:10,art:`<circle class="s" cx="100" cy="100" r="52"/>
<ellipse class="s t" cx="100" cy="100" rx="24" ry="52"/>
<path class="s t" d="M52 82 L148 82 M52 118 L148 118"/>
<path class="s t r" d="M70 70 Q80 60 92 66 Q96 76 86 80 Q76 82 70 70 Z M116 108 Q128 102 136 110 Q134 122 122 122 Q114 118 116 108 Z"/>`},
{id:"byouin",kanji:"美容院",kana:"びょういん",romaji:"byouin",en:"beauty parlor",lesson:10,art:`
<circle class="s" cx="54" cy="140" r="13"/><circle class="s" cx="82" cy="144" r="13"/>
<path class="s" d="M62 130 L70 108 L124 56 M92 132 L70 108 L114 66"/>
<circle class="f" cx="70" cy="108" r="3"/>
<ellipse class="s r" cx="138" cy="82" rx="22" ry="28"/>
<ellipse class="s t r" cx="138" cy="82" rx="13" ry="18"/>
<path class="s r" d="M138 110 L138 158"/>
<path class="s t r" d="M132 72 Q136 66 142 70"/>`},
{id:"tebukuro",kanji:"手袋",kana:"てぶくろ",romaji:"tebukuro",en:"gloves",lesson:10,art:`<path class="s" d="M76 152 L72 100 Q72 86 86 86 L116 86 Q130 86 130 100 L126 152 Z"/>
<path class="s" d="M130 108 Q150 104 152 120 Q152 132 132 130"/>
<path class="s t" d="M88 98 L88 86 M100 98 L100 86 M112 98 L112 86"/>
<path class="s r t" d="M74 142 L128 142"/>`},
{id:"seikatsu",kanji:"生活",kana:"せいかつ",romaji:"seikatsu",en:"life; living",lesson:10,art:`
<path class="s" d="M40 100 L100 52 L160 100"/>
<path class="s" d="M56 88 L56 156 L144 156 L144 88"/>
<path class="s r" d="M100 118 Q92 108 84 116 Q78 122 84 130 L100 146 L116 130 Q122 122 116 116 Q108 108 100 118 Z"/>
<circle class="s t r" cx="72" cy="46" r="8"/>
<path class="s t" d="M140 44 Q130 40 130 30 Q130 22 138 20 Q133 28 137 36 Q141 44 148 42 Q146 46 140 44 Z"/>`},
{id:"kotoshi",kanji:"今年",kana:"ことし",romaji:"kotoshi",en:"this year",lesson:10,art:`
<rect class="s" x="44" y="52" width="112" height="100" rx="6"/>
<path class="s" d="M44 78 L156 78"/>
<path class="s" d="M68 44 L68 60 M132 44 L132 60"/>
<path class="s t" d="M60 94 L76 94 M92 94 L108 94 M124 94 L140 94 M60 112 L76 112 M92 112 L108 112 M124 112 L140 112 M60 130 L76 130 M92 130 L108 130"/>
<circle class="s r" cx="100" cy="100" r="42" stroke-dasharray="6 6"/>`},
{id:"atatakai",kanji:"暖かい",kana:"あたたかい",romaji:"atatakai",en:"warm",lesson:10,art:`<circle class="s r" cx="152" cy="44" r="18"/>
<path class="s r" d="M152 18 L152 10 M178 44 L186 44 M170 26 L176 20 M170 62 L176 68"/>
<circle class="s" cx="88" cy="66" r="17"/>
<path class="s t" d="M80 62 Q84 66 88 62 M92 62 Q96 66 100 62 M82 76 Q88 72 94 76"/>
<path class="s t r" d="M108 58 Q112 64 108 70 Q104 76 108 82"/>
<path class="s" d="M86 83 Q82 110 84 134 M84 134 L70 168 M84 134 L98 166 M84 96 L64 108 M88 98 L108 106"/>
<path class="s t" d="M64 52 Q60 58 64 64"/>`},
{id:"suzushii",kanji:"涼しい",kana:"すずしい",romaji:"suzushii",en:"cool (weather)",lesson:10,art:`
<path class="s r" d="M60 60 Q88 64 84 92 L60 148 Q56 156 52 148 Q48 112 60 60 Z"/>
<path class="s t r" d="M60 60 L54 42 M68 64 L70 44 M76 70 L86 54"/>
<path class="s" d="M132 52 L132 116 M120 116 Q120 132 132 132 Q144 132 144 116 L144 52 Q144 44 132 44 Q120 44 120 52 Z"/>
<circle class="fr" cx="132" cy="122" r="8"/>
<path class="s t r" d="M104 76 Q112 72 120 76 M104 92 Q112 88 120 92 M100 108 Q108 104 116 108"/>`},
{id:"tsumetai",kanji:"冷たい",kana:"つめたい",romaji:"tsumetai",en:"cold (things/people)",lesson:10,art:`<circle class="s" cx="100" cy="56" r="17"/>
<path class="s t" d="M92 52 L98 54 M102 54 L108 52 M94 66 Q100 62 106 66"/>
<path class="s" d="M98 73 Q94 100 96 124 M96 124 L82 162 M96 124 L112 160"/>
<path class="s" d="M96 86 Q84 92 86 104 M100 88 Q112 94 110 106"/>
<path class="s t r" d="M48 60 Q42 68 48 76 Q54 84 48 92 M152 60 Q158 68 152 76 Q146 84 152 92"/>
<path class="s t" d="M64 34 L64 46 M58 40 L70 40 M138 30 L138 42 M132 36 L144 36"/>`},
{id:"osoi",kanji:"遅い",kana:"おそい",romaji:"osoi",en:"slow; late",lesson:10,art:`<path class="s" d="M40 148 Q60 152 88 150"/>
<circle class="s r" cx="112" cy="112" r="34"/><path class="s t r" d="M112 86 Q134 90 134 112 Q134 128 118 132 Q106 130 106 116 Q108 106 118 108"/>
<path class="s" d="M82 146 Q64 146 58 128 Q58 112 70 108"/>
<circle class="s" cx="64" cy="98" r="10"/><path class="s t" d="M60 88 L54 76 M70 88 L74 76"/><circle class="f" cx="52" cy="74" r="3"/><circle class="f" cx="76" cy="74" r="3"/>
<circle class="s t" cx="164" cy="52" r="18"/><path class="s t" d="M164 42 L164 52 L172 58"/>`},
{id:"nemui",kanji:"眠い",kana:"ねむい",romaji:"nemui",en:"sleepy",lesson:10,art:`<circle class="s" cx="92" cy="114" r="42"/>
<path class="s t" d="M72 108 Q80 116 88 108 M98 108 Q106 116 114 108"/>
<ellipse class="s t" cx="93" cy="132" rx="7" ry="9"/>
<path class="s r t" d="M136 62 L158 62 L136 84 L158 84"/>
<path class="s r t" d="M120 46 L136 46 L120 62 L136 62"/>`},
{id:"kantan",kanji:"簡単",kana:"かんたん",romaji:"kantan",en:"easy; simple (na-adj)",lesson:10,art:`
<circle class="s r" cx="86" cy="90" r="42"/>
<path class="s r" d="M66 90 L80 106 L110 72"/>
<path class="s" d="M132 96 L132 140 Q132 148 144 148 L156 148 Q166 148 166 140 L166 118 L150 118 L150 128"/>
<path class="s" d="M132 96 L132 84 Q132 72 144 72 Q152 72 152 82 L152 96"/>`},
{id:"kakaru",kana:"かかる",romaji:"kakaru",en:"to take (time/money)",lesson:10,art:`
<path class="s" d="M60 40 L140 40 M60 160 L140 160"/>
<path class="s" d="M64 40 Q64 84 100 100 Q64 116 64 160 M136 40 Q136 84 100 100 Q136 116 136 160"/>
<path class="fr" d="M78 52 Q100 68 122 52 L122 60 Q100 76 78 60 Z"/>
<path class="s r" d="M100 100 L100 148"/>
<circle class="fr" cx="152" cy="118" r="10"/><path class="s t" d="M152 110 L152 126 M148 114 L156 114 M148 122 L156 122"/>
<path class="s t r" d="M152 96 L152 106 M146 100 L152 96 L158 100"/>`},
{id:"tomaru",kanji:"泊まる",kana:"とまる",romaji:"tomaru",en:"to stay (at a hotel)",lesson:10,art:`
<rect class="s" x="52" y="52" width="96" height="108" rx="4"/>
<path class="s" d="M52 88 L148 160 M148 88 L148 160 M64 100 Q64 90 100 90 Q136 90 136 100 L136 112 L64 112 Z"/>
<rect class="s t" x="66" y="112" width="18" height="18"/><rect class="s t" x="116" y="112" width="18" height="18"/>
<circle class="s r" cx="100" cy="42" r="8"/><path class="s r" d="M92 42 L108 42"/>
<path class="s t r" d="M112 36 L124 24 L124 36 L136 24"/>`},
{id:"ru",kana:"なる",romaji:"ru",en:"to become",lesson:10,art:`
<path class="s r" d="M36 140 Q40 118 56 118 Q72 118 74 140 Q76 118 92 118 Q104 118 104 132"/>
<circle class="f" cx="40" cy="132" r="2.5"/>
<path class="s t" d="M110 116 L138 88 M128 116 L138 88"/><path class="s t r" d="M126 96 L138 88 L134 100"/>
<path class="s" d="M148 84 Q124 84 130 60 Q136 44 152 52 Q166 44 170 62 Q174 84 150 84 Z"/>
<path class="s" d="M150 60 L150 84"/>
<path class="s t r" d="M150 44 Q146 36 152 34 M150 44 Q154 36 148 34"/>`},
{id:"kimeru",kanji:"決める",kana:"きめる",romaji:"kimeru",en:"to decide",lesson:10,art:`
<rect class="s" x="60" y="122" width="80" height="18" rx="3"/>
<path class="s" d="M74 122 L74 84 Q74 74 100 74 Q126 74 126 84 L126 122"/>
<rect class="s r" x="86" y="60" width="28" height="20" rx="3"/>
<path class="s r" d="M100 44 L100 60"/>
<path class="s r" d="M84 100 L96 112 L120 84"/>`},
{id:"gorogorosuru",kana:"ごろごろする",romaji:"gorogorosuru",en:"to chill out at home",lesson:10,art:`
<path class="s" d="M40 108 L40 148 M160 108 L160 148"/>
<path class="s" d="M40 130 L160 130 L160 108 Q160 96 148 96 L52 96 Q40 96 40 108 Z"/>
<path class="s" d="M52 96 L52 84 Q52 76 60 76 L140 76 Q148 76 148 84 L148 96"/>
<circle class="s" cx="72" cy="70" r="12"/>
<path class="s t" d="M66 68 L72 68 M76 68 L82 68"/>
<path class="s" d="M84 74 L130 74"/>
<path class="s r t" d="M92 56 L104 56 L92 68 L104 68 M110 44 L120 44 L110 54 L120 54"/>`},
{id:"ryokousuru",kanji:"旅行する",kana:"りょこうする",romaji:"ryokousuru",en:"to travel",lesson:10,art:`
<rect class="s" x="52" y="88" width="72" height="64" rx="6"/>
<path class="s" d="M74 88 L74 76 Q74 68 82 68 L94 68 Q102 68 102 76 L102 88"/>
<path class="s t" d="M52 108 L124 108"/>
<rect class="s t r" x="62" y="118" width="20" height="14" rx="2"/><rect class="s t r" x="94" y="118" width="20" height="14" rx="2"/>
<path class="s r" d="M110 62 L172 48 Q168 60 158 62 L120 72 M138 54 L146 44 M150 51 L162 44"/>
<circle class="s t r" cx="152" cy="96" r="14"/><path class="s t r" d="M138 96 L166 96 M152 82 L152 110"/>`},
{id:"renshuusuru",kanji:"練習する",kana:"れんしゅうする",romaji:"renshuusuru",en:"to practice",lesson:10,art:`
<circle class="s" cx="96" cy="96" r="48"/>
<circle class="s r" cx="96" cy="96" r="30"/>
<circle class="fr" cx="96" cy="96" r="12"/>
<path class="s t r" d="M40 60 L92 92 M36 48 L46 52 L44 62"/>
<path class="s t r" d="M60 40 L94 90 M56 34 L60 44 L50 46"/>
<path class="s t" d="M150 44 Q170 52 170 72 Q170 88 156 92 M156 84 L156 96 L168 92"/>`},
{id:"ichiban",kanji:"一番",kana:"いちばん",romaji:"ichiban",en:"best",lesson:10,art:`
<path class="s" d="M60 100 L100 100 L100 156 L60 156 Z"/>
<path class="s" d="M100 76 L140 76 L140 156 L100 156 Z"/>
<path class="s" d="M20 122 L60 122 L60 156 L20 156 Z"/>
<path class="s" d="M140 116 L180 116 L180 156 L140 156 Z"/>
<path class="s r" d="M120 70 L124 58 L130 68 L142 66 L134 76 L140 88 L128 82 L118 90 L120 78 L110 72 Z"/>
<circle class="s" cx="120" cy="46" r="10"/><path class="s" d="M120 56 L120 70"/>`},
{id:"docchidochira",kana:"どっち／どちら",romaji:"docchidochira",en:"which",lesson:10,art:`
<rect class="s" x="30" y="100" width="40" height="40" rx="4"/><rect class="s" x="130" y="100" width="40" height="40" rx="4"/>
<path class="s r" d="M84 66 Q84 48 100 48 Q116 48 116 66 Q116 80 100 84 L100 92"/>
<circle class="fr" cx="100" cy="104" r="4"/>
<path class="s r" d="M74 120 L54 120 M62 112 L52 120 L62 128 M126 120 L146 120 M138 112 L148 120 L138 128"/>`},
{id:"hayaku",kanji:"早く／速く",kana:"はやく",romaji:"hayaku",en:"early; fast",lesson:10,art:`
<circle class="s" cx="112" cy="48" r="14"/>
<path class="s" d="M112 62 Q124 84 116 104 M116 104 L96 130 L100 154 M116 104 L138 122"/>
<path class="s" d="M114 74 L92 62 M116 78 L140 82"/>
<path class="s r" d="M30 70 L74 70 M24 92 L64 92 M34 114 L58 114"/>
<circle class="s t" cx="160" cy="140" r="16"/><path class="s t" d="M160 130 L160 140 L168 146"/>`},
{id:"aruite",kanji:"歩いて",kana:"あるいて",romaji:"aruite",en:"on foot",lesson:10,art:`<circle class="s" cx="92" cy="44" r="15"/><path class="s t" d="M86 42 Q89 39 92 42 M96 42 Q99 39 102 42"/>
<path class="s" d="M94 59 Q100 84 96 106"/>
<path class="s" d="M96 106 L70 136 L74 158 M96 106 L120 132 L116 158"/>
<path class="s" d="M96 72 L74 88 M98 74 L122 82"/>
<path class="s t r" d="M46 168 Q52 164 58 168 M74 174 Q80 170 86 174 M104 168 Q110 164 116 168 M132 174 Q138 170 144 174"/>`},
{id:"de",kana:"〜で",romaji:"de",en:"by (transportation); with (a tool)",lesson:10,art:`
<path class="s" d="M40 118 L48 92 Q52 80 68 80 L112 80 Q124 80 130 92 L142 116 Q150 118 148 130 L40 130 Q36 126 40 118 Z"/>
<path class="s t" d="M66 92 L66 110 M66 92 L104 92 L112 110"/>
<circle class="s" cx="64" cy="136" r="11"/><circle class="s" cx="128" cy="136" r="11"/>
<path class="s r" d="M162 56 L178 40 M170 40 L178 40 L178 48 M162 56 Q150 68 162 80 Q170 88 158 96"/>`},
{id:"douyatte",kana:"どうやって",romaji:"douyatte",en:"how; by what means",lesson:10,art:`
<path class="s r" d="M78 52 Q78 34 98 34 Q118 34 118 52 Q118 66 98 70 L98 78"/>
<circle class="fr" cx="98" cy="90" r="4"/>
<path class="s t" d="M50 118 Q56 108 66 112 M46 130 Q52 120 62 124"/>
<rect class="s t" x="80" y="112" width="40" height="22" rx="4"/><circle class="s t" cx="90" cy="138" r="4"/><circle class="s t" cx="110" cy="138" r="4"/>
<path class="s t" d="M138 108 L172 108 M138 108 L138 132 L172 132 M146 132 L146 108 M164 132 L164 108"/>`},
{id:"donogurai",kana:"どのぐらい",romaji:"donogurai",en:"how much; how long",lesson:10,art:`
<rect class="s" x="36" y="96" width="128" height="34" rx="4"/>
<path class="s t" d="M52 96 L52 112 M68 96 L68 118 M84 96 L84 112 M100 96 L100 120 M116 96 L116 112 M132 96 L132 118 M148 96 L148 112"/>
<path class="s r" d="M78 66 Q78 52 92 52 Q106 52 106 66 Q106 78 92 80 L92 86"/>
<circle class="fr" cx="92" cy="94" r="3"/>`},
{id:"shuukan",kanji:"〜週間",kana:"〜しゅうかん",romaji:"shuukan",en:"for ... weeks",lesson:10,art:`
<rect class="s" x="40" y="52" width="120" height="100" rx="6"/>
<path class="s" d="M40 78 L160 78"/>
<path class="s" d="M64 44 L64 60 M136 44 L136 60"/>
<rect class="fr" x="48" y="92" width="104" height="16"/>
<path class="s t" d="M56 88 L56 148 M72 88 L72 148 M88 88 L88 148 M104 88 L104 148 M120 88 L120 148 M136 88 L136 148 M144 92 L48 92 M48 128 L152 128"/>`},
{id:"kagetsu",kanji:"〜か月",kana:"〜かげつ",romaji:"kagetsu",en:"for ... months",lesson:10,art:`
<rect class="s" x="56" y="60" width="104" height="92" rx="5"/>
<rect class="s t" x="48" y="52" width="104" height="92" rx="5"/>
<rect class="s" x="40" y="44" width="104" height="92" rx="5"/>
<path class="s" d="M40 68 L144 68"/>
<path class="s t" d="M56 82 L72 82 M88 82 L104 82 M56 100 L72 100 M88 100 L104 100 M56 118 L72 118"/>
<path class="s r" d="M112 132 Q132 116 152 132 M144 128 L154 132 L150 122"/>`},
{id:"nen",kanji:"〜年",kana:"〜ねん",romaji:"nen",en:"... years",lesson:10,art:`
<rect class="s" x="44" y="56" width="112" height="96" rx="6"/>
<path class="s" d="M44 84 L156 84"/>
<path class="s" d="M68 48 L68 64 M132 48 L132 64"/>
<circle class="s r" cx="100" cy="118" r="22"/>
<circle class="s t r" cx="100" cy="118" r="13"/>
<circle class="fr" cx="100" cy="118" r="5"/>`},
{id:"konogoro",kana:"このごろ",romaji:"konogoro",en:"these days",lesson:10,art:`
<rect class="s" x="40" y="56" width="120" height="96" rx="6"/>
<path class="s" d="M40 82 L160 82"/>
<path class="s" d="M64 48 L64 64 M136 48 L136 64"/>
<path class="s t" d="M56 96 L72 96 M84 96 L100 96 M112 96 L128 96 M56 116 L72 116 M84 116 L100 116"/>
<rect class="fr" x="108" y="108" width="20" height="16"/><rect class="fr" x="132" y="108" width="16" height="16"/><rect class="fr" x="108" y="128" width="20" height="14"/>
<path class="s t r" d="M150 42 Q160 44 160 54"/>`},
{id:"go",kanji:"〜後",kana:"〜ご",romaji:"go",en:"in ... time; after ...",lesson:10,art:`
<path class="s" d="M32 120 L150 120"/>
<path class="s" d="M130 104 L152 120 L130 136"/>
<circle class="s r" cx="70" cy="120" r="9"/>
<path class="s t" d="M40 138 L40 148 M70 138 L70 148 M100 138 L100 148 M130 138 L130 148"/>
<circle class="s t" cx="118" cy="66" r="16"/><path class="s t" d="M118 56 L118 66 L126 72"/>
<path class="s t r" d="M118 120 L118 96 M110 104 L118 96 L126 104"/>`},
{id:"ka",kana:"〜か〜",romaji:"ka",en:"or",lesson:10,art:`
<rect class="s" x="34" y="86" width="46" height="46" rx="4"/><rect class="s" x="120" y="86" width="46" height="46" rx="4"/>
<path class="s r" d="M112 60 L88 158"/>
<path class="s t" d="M48 100 L66 118 M66 100 L48 118 M134 100 L152 118 M152 100 L134 118"/>`}
];
