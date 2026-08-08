/* =======================================================================
   lesson_5.js  —  Doodle Tango vocabulary, Lesson 5  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 5.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[5] = [
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
{id:"tabemono",kanji:"食べ物",kana:"たべもの",romaji:"tabemono",en:"food",lesson:5,art:`<ellipse class="s" cx="100" cy="120" rx="52" ry="14"/>
<path class="s" d="M52 120 Q52 96 100 96 Q148 96 148 120"/>
<path class="s r" d="M78 96 Q78 78 100 78 Q122 78 122 96"/>
<path class="s" d="M40 74 L40 100 M36 62 L44 62 L44 74 L36 74 M160 74 L160 100 M156 62 L164 62 M160 62 L160 74"/>
<path class="s t r" d="M92 84 Q100 88 108 84"/>`},
{id:"nomimono",kanji:"飲み物",kana:"のみもの",romaji:"nomimono",en:"drink",lesson:5,art:`<path class="s" d="M70 66 L130 66 L122 150 L78 150 Z"/>
<path class="s r" d="M110 66 L120 40 L132 44"/>
<path class="s t" d="M74 96 L126 96"/>
<path class="s t" d="M90 110 L90 138 M104 110 L104 138"/>
<path class="s t r" d="M84 78 Q100 84 116 78"/>`},
{id:"kudamono",kanji:"果物",kana:"くだもの",romaji:"kudamono",en:"fruit",lesson:5,art:`<circle class="s r" cx="82" cy="112" r="30"/>
<path class="s" d="M82 82 L82 66 Q82 56 96 58"/>
<path class="fr" d="M82 66 Q94 58 104 66 Q92 72 82 66 Z"/>
<circle class="s" cx="130" cy="120" r="24"/>
<path class="s" d="M130 96 L130 84 M124 88 Q130 82 136 88"/>
<path style="fill:#fff" d="M74 104 Q80 98 84 106 Q77 110 74 104 Z"/>`},
{id:"ryokou",kanji:"旅行",kana:"りょこう",romaji:"ryokou",en:"travel",lesson:5,art:`<path class="s" d="M64 150 L64 96 Q64 84 88 84 L112 84 Q136 84 136 96 L136 150"/>
<path class="s" d="M64 108 L136 108 M88 84 L88 72 L112 72 L112 84 M100 108 L100 150"/>
<path class="s" d="M52 150 L52 158 M148 150 L148 158"/>
<path class="s r" d="M96 44 L150 30 L142 52 L128 46 Z"/>
<path class="s t r" d="M96 44 Q108 50 128 46" stroke-dasharray="4 4"/>`},
{id:"basu",kana:"バス",romaji:"basu",en:"bus",lesson:5,art:`<path class="s" d="M44 60 L156 60 Q162 60 162 70 L162 128 L38 128 L38 70 Q38 60 44 60 Z"/>
<path class="s t" d="M56 74 L80 74 L80 96 L56 96 Z M92 74 L116 74 L116 96 L92 96 Z M128 74 L150 74 L150 96 L128 96 Z"/>
<path class="s" d="M38 112 L162 112"/>
<circle class="s" cx="68" cy="128" r="12"/><circle class="s" cx="132" cy="128" r="12"/>
<path class="s r" d="M46 104 L54 104"/>`},
{id:"tenki",kanji:"天気",kana:"てんき",romaji:"tenki",en:"weather",lesson:5,art:`<circle class="s r" cx="76" cy="72" r="20"/>
<path class="s r" d="M76 40 L76 48 M76 96 L76 104 M44 72 L52 72 M100 72 L108 72 M54 50 L60 56 M98 50 L92 56"/>
<path class="s" d="M96 116 Q88 116 88 106 Q88 96 100 98 Q104 84 118 88 Q132 88 130 104 Q142 106 138 118 Z"/>`},
{id:"shukudai",kanji:"宿題",kana:"しゅくだい",romaji:"shukudai",en:"homework",lesson:5,art:`<path class="s" d="M56 44 L128 44 L144 60 L144 156 L56 156 Z"/>
<path class="s t" d="M128 44 L128 60 L144 60"/>
<path class="s t r" d="M70 76 L130 76 M70 92 L130 92 M70 108 L110 108"/>
<path class="s" d="M120 116 L150 86 Q156 80 162 86 Q168 92 162 98 L134 128 L118 134 Z"/>
<path class="f" d="M118 134 L128 128 L124 118 Z"/>`},
{id:"tesuto",kana:"テスト",romaji:"tesuto",en:"test",lesson:5,art:`<path class="s" d="M56 40 L134 40 L148 54 L148 160 L56 160 Z"/>
<path class="s t" d="M134 40 L134 54 L148 54"/>
<path class="s r" d="M72 74 L80 82 L96 66 M110 74 L134 74"/>
<path class="s r" d="M72 104 L80 112 L96 96 M110 104 L134 104"/>
<path class="s t" d="M72 134 L80 142 M110 134 L134 134"/>`},
{id:"heya",kanji:"部屋",kana:"へや",romaji:"heya",en:"room",lesson:5,art:`<path class="s" d="M40 72 L100 44 L160 72 L160 152 L40 152 Z"/>
<path class="s" d="M40 72 L160 72"/>
<path class="s" d="M72 152 L72 108 L96 108 L96 152"/>
<path class="s r" d="M112 96 L146 96 L146 128 L112 128 Z M112 112 L146 112 M129 96 L129 128"/>`},
{id:"boku",kanji:"僕",kana:"ぼく",romaji:"boku",en:"I (used by men)",lesson:5,art:`<circle class="s" cx="100" cy="50" r="16"/>
<path class="s t" d="M90 44 L96 48 M110 44 L104 48 M94 52 Q97 49 100 52 M103 52 Q106 49 109 52 M94 60 L106 60"/>
<path class="s" d="M100 66 L100 118 M100 118 L88 154 M100 118 L112 154 M100 84 L120 96"/>
<path class="s r" d="M100 90 L78 108 L90 108 L82 122"/>
<circle class="fr" cx="82" cy="122" r="4"/>`},
{id:"eru_saizu",kana:"エルサイズ",romaji:"eru saizu",en:"size L",lesson:5,art:`<path class="s t" d="M74 74 Q70 74 72 80 L60 86 L68 98 L74 94 L74 122 L96 122 L96 94 L102 98 L110 86 L98 80 Q94 74 88 78 Q81 74 74 74 Z"/>
<path class="s r" d="M118 60 Q112 60 114 68 L98 76 L108 92 L118 84 L118 150 L156 150 L156 84 L166 92 L176 76 L160 68 Q154 60 146 66 Q132 60 118 60 Z"/>
<path class="s r" d="M100 40 L100 52 M92 46 L100 40 L108 46"/>`},
{id:"atsui",kanji:"暑い",kana:"あつい",romaji:"atsui",en:"hot (weather)",lesson:5,art:`<circle class="s r" cx="100" cy="80" r="26"/>
<path class="s r" d="M100 38 L100 48 M100 112 L100 122 M58 80 L68 80 M132 80 L142 80 M70 50 L77 57 M130 50 L123 57 M70 110 L77 103 M130 110 L123 103"/>
<path class="s" d="M74 132 Q72 148 82 152 M100 138 Q98 154 108 158 M126 132 Q124 148 134 152"/>`},
{id:"samui",kanji:"寒い",kana:"さむい",romaji:"samui",en:"cold (weather)",lesson:5,art:`<circle class="s" cx="100" cy="70" r="16"/>
<path class="s t" d="M92 66 L100 70 M108 66 L100 70 M94 78 L106 78"/>
<path class="s" d="M100 86 L100 128 M100 128 L88 154 M100 128 L112 154 M100 98 Q84 104 84 120 M100 98 Q116 104 116 120"/>
<path class="s r" d="M44 60 L44 84 M32 72 L56 72 M38 66 L50 78 M50 66 L38 78 M156 100 L156 124 M144 112 L168 112 M150 106 L162 118 M162 106 L150 118"/>`},
{id:"atsui_hot",kanji:"熱い",kana:"あつい",romaji:"atsui",en:"hot (thing)",lesson:5,art:`<path class="s" d="M60 96 L120 96 L114 148 Q114 156 104 156 L76 156 Q66 156 66 148 Z"/>
<path class="s" d="M120 104 Q142 104 142 122 Q142 138 120 138"/>
<path class="s r" d="M78 76 Q72 68 78 60 Q84 68 78 76 M100 72 Q94 64 100 56 Q106 64 100 72 M122 76 Q116 68 122 60 Q128 68 122 76"/>
<path class="s r" d="M150 60 L150 40 M140 50 L150 40 L160 50"/>`},
{id:"omoshiroi",kanji:"面白い",kana:"おもしろい",romaji:"omoshiroi",en:"interesting; funny",lesson:5,art:`<circle class="s" cx="100" cy="96" r="42"/>
<path class="s" d="M78 80 L92 88 M122 80 L108 88"/>
<path class="s" d="M74 108 Q100 140 126 108 Q100 118 74 108 Z"/>
<path class="s r" d="M70 128 L62 140 M130 128 L138 140"/>
<path class="s t r" d="M150 60 L158 52 M42 60 L34 52"/>`},
{id:"tsumaranai",kana:"つまらない",romaji:"tsumaranai",en:"boring",lesson:5,art:`<circle class="s" cx="96" cy="96" r="40"/>
<path class="s t" d="M80 88 L92 88 M100 88 L112 88"/>
<ellipse class="s" cx="96" cy="118" rx="9" ry="12"/>
<path class="s r" d="M132 60 Q140 56 138 66 Q136 74 128 72 M146 74 Q154 70 152 80"/>
<path class="s t" d="M56 128 L48 140 M64 138 L58 150"/>`},
{id:"yasashii",kana:"やさしい",romaji:"yasashii",en:"easy (problem); kind (person)",lesson:5,art:`<circle class="s" cx="88" cy="96" r="40"/>
<path class="s t" d="M74 88 Q80 82 86 88 M92 88 Q98 82 104 88"/>
<path class="s" d="M74 108 Q88 120 102 108"/>
<path class="s r" d="M120 70 L134 86 L166 50"/>
<path class="s t r" d="M148 96 Q160 92 156 104 Q152 112 142 108"/>`},
{id:"muzukashii",kanji:"難しい",kana:"むずかしい",romaji:"muzukashii",en:"difficult",lesson:5,art:`<path class="s r" d="M60 100 Q44 92 56 80 Q66 72 76 82 Q64 66 82 60 Q94 56 96 72 Q104 58 118 66 Q128 74 118 86 Q136 82 138 98 Q140 112 122 112 Q134 124 118 132 Q106 138 98 124 Q92 140 76 134 Q64 128 72 114 Q54 116 60 100 Z"/>
<circle class="s" cx="150" cy="58" r="14"/>
<path class="s t" d="M143 54 L149 56 M157 54 L151 56 M145 66 L155 66"/>
<path class="s r" d="M150 40 L150 30 M136 44 L130 38 M164 44 L170 38"/>`},
{id:"kakkoii",kana:"かっこいい",romaji:"kakkoii",en:"good-looking",lesson:5,art:`<circle class="s" cx="100" cy="92" r="40"/>
<path class="s f" d="M64 82 L94 82 L94 96 Q94 102 84 102 Q68 102 66 90 Z M106 82 L136 82 L134 90 Q132 102 116 102 Q106 102 106 96 Z"/>
<path class="s" d="M94 86 L106 86"/>
<path class="s" d="M84 116 Q100 124 116 116"/>
<path class="s r" d="M150 56 L158 48 M154 66 L164 62 M146 46 L150 38"/>`},
{id:"kowai",kanji:"怖い",kana:"こわい",romaji:"kowai",en:"frightening",lesson:5,art:`<path class="s" d="M64 150 L64 92 Q64 56 100 56 Q136 56 136 92 L136 150 L124 140 L112 150 L100 140 L88 150 L76 140 Z"/>
<path class="s r" d="M80 84 L96 92 L80 98 Z M120 84 L104 92 L120 98 Z"/>
<circle class="f" cx="88" cy="90" r="3"/><circle class="f" cx="112" cy="90" r="3"/>
<path class="s" d="M84 120 L92 114 L100 120 L108 114 L116 120"/>`},
{id:"kirai",kanji:"嫌い",kana:"きらい",romaji:"kirai",en:"disgusted with; to dislike",lesson:5,art:`<path class="s" d="M100 150 Q40 108 40 74 Q40 50 64 50 Q84 50 100 74 Q116 50 136 50 Q160 50 160 74 Q160 108 100 150 Z"/>
<path class="s r" d="M70 76 L118 118 M118 76 L70 118"/>`},
{id:"daisuki",kanji:"大好き",kana:"だいすき",romaji:"daisuki",en:"very fond of; to love",lesson:5,art:`<path class="fr" d="M100 152 Q34 106 34 68 Q34 42 60 42 Q82 42 100 70 Q118 42 140 42 Q166 42 166 68 Q166 106 100 152 Z"/>
<path class="s r" d="M60 30 L64 40 L74 40 L66 47 L69 57 L60 51 L51 57 L54 47 L46 40 L56 40 Z"/>
<path class="s r" d="M148 44 L151 52 L159 52 L153 57 L155 65 L148 60 L141 65 L143 57 L137 52 L145 52 Z"/>`},
{id:"daikirai",kanji:"大嫌い",kana:"だいきらい",romaji:"daikirai",en:"to hate",lesson:5,art:`<path class="s" d="M100 150 Q64 124 50 98 L74 104 L64 78 L88 92 L82 64 L100 88 L118 64 L112 92 L136 78 L126 104 L150 98 Q136 124 100 150 Z"/>
<path class="s r" d="M78 96 L96 112 M96 96 L78 112 M104 96 L122 112 M122 96 L104 112"/>
<path class="s r" d="M60 44 Q52 52 60 60 M140 44 Q148 52 140 60"/>`},
{id:"kirei",kana:"きれい",romaji:"kirei",en:"beautiful; clean",lesson:5,art:`<path class="s r" d="M100 96 Q100 72 118 66 Q112 88 100 96 M100 96 Q100 72 82 66 Q88 88 100 96 M100 96 Q120 88 130 100 Q112 108 100 96 M100 96 Q80 88 70 100 Q88 108 100 96 Z"/>
<circle class="fr" cx="100" cy="96" r="7"/>
<path class="s" d="M100 108 L100 150 M84 152 L116 152"/>
<path class="s r" d="M52 56 L55 64 L63 64 L57 69 L59 77 L52 72 L45 77 L47 69 L41 64 L49 64 Z"/>
<path class="s t r" d="M150 60 L154 68 M158 90 L164 96 M140 110 L146 116"/>`},
{id:"genki",kanji:"元気",kana:"げんき",romaji:"genki",en:"healthy; energetic",lesson:5,art:`<circle class="s" cx="100" cy="54" r="15"/>
<path class="s t" d="M92 52 Q95 49 98 52 M102 52 Q105 49 108 52 M94 60 Q100 64 106 60"/>
<path class="s" d="M100 69 L100 116 M100 116 L86 150 M100 116 L114 150"/>
<path class="s" d="M100 82 L74 74 Q68 72 70 64 M100 82 L126 74 Q132 72 130 64"/>
<path class="s r" d="M74 74 Q74 60 84 62 M126 74 Q126 60 116 62"/>
<path class="s r" d="M56 44 L52 34 M144 44 L148 34 M100 22 L100 32"/>`},
{id:"shizuka",kanji:"静か",kana:"しずか",romaji:"shizuka",en:"quiet",lesson:5,art:`<circle class="s" cx="100" cy="88" r="40"/>
<path class="s t" d="M84 80 Q90 74 96 80 M104 80 Q110 74 116 80"/>
<path class="s" d="M100 84 L100 116"/>
<path class="s" d="M94 116 Q100 122 106 116"/>
<path class="s r" d="M40 60 Q52 52 48 66 M156 60 Q144 52 148 66 M44 118 Q56 112 50 124 M156 118 Q144 112 150 124"/>`},
{id:"nigiyaka",kana:"にぎやか",romaji:"nigiyaka",en:"lively",lesson:5,art:`<circle class="s" cx="72" cy="96" r="12"/><path class="s" d="M72 108 L72 140 M62 146 L82 146 L72 126 Z"/>
<circle class="s r" cx="128" cy="96" r="12"/><path class="s r" d="M128 108 L128 140 M118 146 L138 146 L128 126 Z"/>
<circle class="s" cx="100" cy="86" r="12"/><path class="s" d="M100 98 L100 130 M90 136 L110 136 L100 116 Z"/>
<path class="s r" d="M46 60 L49 68 L57 68 L51 73 L53 81 L46 76 L39 81 L41 73 L35 68 L43 68 Z"/>
<path class="s r" d="M156 66 L159 74 L167 74 L161 79 L163 87 L156 82 L149 87 L151 79 L145 74 L153 74 Z"/>
<path class="s t r" d="M100 48 Q108 44 106 54 M120 52 L120 40"/>`},
{id:"hima",kanji:"暇",kana:"ひま",romaji:"hima",en:"not busy; free (time)",lesson:5,art:`<circle class="s" cx="86" cy="66" r="15"/>
<path class="s" d="M86 81 L86 120 Q86 128 96 128 L128 128"/>
<path class="s" d="M86 100 L64 96 M86 108 Q70 116 62 132"/>
<path class="s t" d="M80 64 L92 64 M84 72 Q88 76 92 72"/>
<circle class="s r" cx="140" cy="88" r="24"/>
<path class="s r" d="M140 72 L140 88 L154 96"/>
<path class="s t r" d="M120 128 Q128 122 126 134"/>`},
{id:"oyogu",kanji:"泳ぐ",kana:"およぐ",romaji:"oyogu",en:"to swim",lesson:5,art:`<circle class="s" cx="70" cy="76" r="13"/>
<path class="s" d="M70 89 L96 104 L132 96 M96 104 L128 116 M70 89 L50 100"/>
<path class="s r" d="M30 128 Q50 118 70 128 Q90 118 110 128 Q130 118 150 128 Q170 118 190 128"/>
<path class="s r" d="M30 146 Q50 136 70 146 Q90 136 110 146 Q130 136 150 146 Q170 136 190 146"/>
<path class="s t" d="M52 66 L58 70 M46 74 L42 82"/>`},
{id:"kiku",kanji:"聞く",kana:"きく",romaji:"kiku",en:"to ask (person に)",lesson:5,art:`<path class="s" d="M118 72 Q88 64 78 92 Q70 116 92 128 Q104 134 104 148 L112 148 Q112 130 104 122 Q92 112 96 96 Q100 84 118 88 Z"/>
<circle class="s" cx="100" cy="100" r="6"/>
<path class="s r" d="M40 72 Q52 78 40 84 M40 92 Q56 100 40 108 M40 112 Q52 118 40 124"/>
<path class="s r" d="M130 60 Q130 48 142 48 Q154 48 154 60 Q154 70 142 74 L142 84"/>
<circle class="fr" cx="142" cy="98" r="4"/>`},
{id:"noru",kanji:"乗る",kana:"のる",romaji:"noru",en:"to ride; to board",lesson:5,art:`<path class="s" d="M50 128 L150 128 Q156 128 156 118 L156 84 Q156 78 150 78 L70 78 Q64 78 60 84 L44 116 Q42 128 50 128 Z"/>
<path class="s t" d="M76 86 L100 86 L100 104 L60 104 Z M112 86 L146 86 L146 104 L112 104 Z"/>
<circle class="s" cx="72" cy="130" r="10"/><circle class="s" cx="134" cy="130" r="10"/>
<path class="s r" d="M100 34 L100 66 M88 54 L100 66 L112 54"/>`},
{id:"yaru",kana:"やる",romaji:"yaru",en:"to do; to perform",lesson:5,art:`<circle class="s" cx="86" cy="54" r="14"/>
<path class="s" d="M86 68 L86 116 M86 116 L74 152 M86 116 L98 152 M86 84 L64 76 M86 84 L112 76"/>
<path class="s r" d="M64 76 L64 62 M56 68 L64 60 L72 68"/>
<path class="s r" d="M124 60 L142 60 M124 74 L138 74 M124 88 L142 88"/>
<path class="s t r" d="M116 50 L124 42"/>`},
{id:"dekakeru",kanji:"出かける",kana:"でかける",romaji:"dekakeru",en:"to go out",lesson:5,art:`<path class="s" d="M44 44 L104 44 L104 156 L44 156"/>
<path class="s" d="M104 62 L104 138 L120 132 L120 68 Z"/>
<circle class="f" cx="112" cy="100" r="3"/>
<circle class="s" cx="150" cy="70" r="12"/>
<path class="s" d="M150 82 L150 118 M150 118 L140 148 M150 118 L162 146 M150 96 L134 106 M150 96 L166 106"/>
<path class="s r" d="M116 148 L156 148 M144 138 L160 148 L144 158"/>`},
{id:"isshoni",kanji:"一緒に",kana:"いっしょに",romaji:"issho ni",en:"together",lesson:5,art:`<circle class="s" cx="72" cy="62" r="13"/>
<path class="s" d="M72 75 L72 120 M72 120 L62 152 M72 120 L82 152 M72 92 L96 104"/>
<circle class="s r" cx="128" cy="62" r="13"/>
<path class="s r" d="M128 75 L128 120 M128 120 L118 152 M128 120 L138 152 M128 92 L104 104"/>
<path class="s" d="M96 104 L104 104"/>
<path class="fr" d="M100 96 Q92 86 100 80 Q108 86 100 96 Z"/>`},
{id:"sugoku",kana:"すごく",romaji:"sugoku",en:"extremely",lesson:5,art:`<path class="s r" d="M100 34 L112 74 L100 66 L88 74 Z M100 100 L88 62 L100 70 L112 62 Z M66 68 L104 82 L92 88 L96 100 Z M134 68 L96 82 L108 88 L104 100 Z"/>
<circle class="fr" cx="100" cy="82" r="6"/>
<path class="s" d="M84 130 L84 108 M84 130 L84 138 M116 130 L116 108 M116 130 L116 138"/>`},
{id:"daijoubu",kanji:"大丈夫",kana:"だいじょうぶ",romaji:"daijoubu",en:"It's okay; Not to worry",lesson:5,art:`<circle class="s" cx="86" cy="96" r="34"/>
<circle class="s" cx="86" cy="96" r="14" style="fill:#fff"/>
<path class="s" d="M86 62 Q100 58 108 68 M100 130 Q116 126 120 140 M118 96 Q132 92 132 104"/>
<path class="s r" d="M118 66 L128 78 L156 44"/>`},
{id:"totemo",kana:"とても",romaji:"totemo",en:"very",lesson:5,art:`<path class="s r" d="M100 32 L100 150"/>
<path class="s r" d="M78 60 L100 38 L122 60 M78 92 L100 70 L122 92 M78 124 L100 102 L122 124"/>
<path class="s t" d="M60 150 L140 150"/>`},
{id:"donna",kana:"どんな",romaji:"donna",en:"what kind of ...",lesson:5,art:`<path class="s r" d="M84 56 Q84 42 100 42 Q118 42 118 60 Q118 74 100 80 L100 92"/>
<circle class="fr" cx="100" cy="108" r="5"/>
<rect class="s" x="40" y="128" width="30" height="30"/>
<circle class="s" cx="100" cy="143" r="16"/>
<path class="s" d="M130 128 L152 128 L164 158 L118 158 Z"/>`},
{id:"mai",kanji:"〜枚",kana:"〜まい",romaji:"mai",en:"[counter for flat objects]",lesson:5,art:`<path class="s" d="M46 96 L120 72 L146 96 L72 120 Z"/>
<path class="s" d="M52 112 L126 88 M58 128 L132 104 M64 144 L138 120"/>
<path class="s r" d="M150 60 L150 44 M150 44 L134 44 M150 44 L162 56" />
<path class="s t r" d="M160 132 L160 152 M150 142 L160 152 L170 142"/>`},
{id:"yasumi5",kanji:"休み",kana:"やすみ",romaji:"yasumi",en:"holiday; day off; absence",lesson:5,art:`<rect class="s" x="40" y="52" width="120" height="104" rx="5"/>
<path class="s" d="M40 78 L160 78"/><path class="s" d="M66 44 L66 60 M134 44 L134 60"/>
<path class="s t" d="M56 92 L56 148 M84 92 L84 148 M112 92 L112 148 M140 92 L140 148 M40 106 L160 106 M40 132 L160 132"/>
<path class="s r" d="M96 112 L124 112 L110 152 Z"/>
<circle class="fr" cx="110" cy="124" r="4"/>`},
{id:"omiyage5",kanji:"お土産",kana:"おみやげ",romaji:"omiyage",en:"souvenir",lesson:5,art:`<path class="s" d="M52 96 L148 96 L142 152 L58 152 Z"/>
<path class="s" d="M44 78 L156 78 L156 96 L44 96 Z"/>
<path class="s r" d="M100 78 L100 152"/>
<path class="s r" d="M100 78 Q78 78 78 62 Q78 52 88 54 Q100 58 100 78 M100 78 Q122 78 122 62 Q122 52 112 54 Q100 58 100 78 Z"/>
<path class="s t" d="M70 116 L70 140 M130 116 L130 140"/>`},
{id:"isogashii5",kanji:"忙しい",kana:"いそがしい",romaji:"isogashii",en:"busy (people/days)",lesson:5,art:`<circle class="s" cx="90" cy="60" r="14"/>
<path class="s" d="M90 74 L90 116 M90 116 L78 150 M90 116 L102 150 M90 88 L68 78 M90 88 L114 100"/>
<path class="s r" d="M114 100 L136 88 M128 78 L142 84 L136 98"/>
<circle class="s r" cx="128" cy="52" r="14"/>
<path class="s r" d="M128 52 L128 42 M128 52 L138 58"/>
<path class="s t r" d="M60 66 Q52 60 56 72 M60 92 Q52 86 56 98"/>`}
];