/* =======================================================================
   lesson_19.js  —  Doodle Tango vocabulary, Lesson 19  (Genki II)
   Loaded on demand by index.html when the chosen range includes lesson 19.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[19] = [
{id:"okusama_19",kanji:"奥様",kana:"おくさま",romaji:"okusama",en:"(someone's) wife (polite)",lesson:19,art:`<circle class="s" cx="100" cy="50" r="14"/>
<path class="s" d="M86 50 Q84 74 92 80 M114 50 Q116 74 108 80"/>
<path class="s" d="M100 64 L76 150 L124 150 Z"/>
<path class="s" d="M94 84 L72 110 M106 84 L130 106"/>
<circle class="s r" cx="142" cy="108" r="9"/>
<path class="fr" d="M137 98 L142 90 L147 98 Z"/>`},
{id:"okosan_19",kanji:"お子さん",kana:"おこさん",romaji:"okosan",en:"(someone's) child (polite)",lesson:19,art:`<circle class="s" cx="88" cy="96" r="17"/>
<path class="s" d="M88 113 L88 140 M88 140 L78 164 M88 140 L98 164 M88 120 L72 132 M88 120 L118 104"/>
<path class="s t" d="M118 104 L132 72"/>
<ellipse class="fr" cx="136" cy="54" rx="14" ry="18"/>
<path class="s t r" d="M80 76 L88 82 L96 76"/>`},
{id:"chuugakusei_19",kanji:"中学生",kana:"ちゅうがくせい",romaji:"chuugakusei",en:"junior high school student",lesson:19,art:`<circle class="s" cx="96" cy="56" r="14"/>
<path class="s r" d="M80 46 L112 46 L112 40 Q96 30 80 40 Z M112 46 L124 48"/>
<path class="s" d="M84 72 L108 72 L112 120 L80 120 Z"/>
<path class="s t" d="M96 74 L96 118"/>
<path class="s" d="M88 120 L86 160 M104 120 L106 160 M108 80 L124 98"/>
<rect class="s" x="118" y="98" width="32" height="26" rx="3"/>`},
{id:"buchou_19",kanji:"部長",kana:"ぶちょう",romaji:"buchou",en:"department manager",lesson:19,art:`<circle class="s" cx="100" cy="40" r="13"/>
<path class="s" d="M78 78 Q78 56 100 56 Q122 56 122 78"/>
<path class="fr" d="M100 56 L95 62 L100 76 L105 62 Z"/>
<path class="s" d="M100 82 L100 100 M48 100 L152 100 M48 100 L48 116 M100 100 L100 116 M152 100 L152 116"/>
<circle class="s t" cx="48" cy="130" r="11"/><circle class="s t" cx="100" cy="130" r="11"/><circle class="s t" cx="152" cy="130" r="11"/>`},
{id:"shucchou_19",kanji:"出張",kana:"しゅっちょう",romaji:"shucchou",en:"business trip",lesson:19,art:`<rect class="s" x="36" y="104" width="74" height="52" rx="6"/>
<path class="s" d="M60 104 L60 92 L86 92 L86 104 M36 126 L110 126"/>
<path class="s r" d="M120 88 Q150 66 166 48 Q172 42 168 52 Q152 70 128 94 Z"/>
<path class="s r" d="M144 68 L126 50 L134 48 L156 62 M148 74 L162 90 L154 92 L140 80"/>
<path class="s t r" d="M110 100 L100 106 M92 110 L84 114"/>`},
{id:"keigo_19",kanji:"敬語",kana:"けいご",romaji:"keigo",en:"honorific language",lesson:19,art:`<circle class="s" cx="128" cy="96" r="11"/>
<path class="s" d="M72 160 L74 116 M86 160 L84 116 M78 116 L116 92 M110 96 L110 124"/>
<path class="s" d="M36 30 L96 30 L96 64 L70 64 L58 76 L60 64 L36 64 Z"/>
<path class="s r" d="M66 38 L66 56 M57 47 L75 47 M60 41 L72 53 M72 41 L60 53"/>`},
{id:"kochira_way_19",kana:"こちら",romaji:"kochira",en:"this way (polite)",lesson:19,art:`<circle class="s" cx="62" cy="50" r="13"/>
<path class="s" d="M62 63 L62 118 M62 118 L52 156 M62 118 L72 156 M62 78 L102 86 M62 80 L48 102"/>
<path class="s" d="M102 86 L116 80 M102 86 L118 87 M102 86 L114 94"/>
<path class="s t" d="M56 64 L62 70 L68 64"/>
<path class="s r" d="M96 132 L160 132 M146 118 L160 132 L146 146"/>`},
{id:"dochira_19",kana:"どちら",romaji:"dochira",en:"where (polite)",lesson:19,art:`<path class="s" d="M100 70 L100 160 M80 160 L120 160"/>
<path class="s" d="M100 80 L148 80 L160 90 L148 100 L100 100"/>
<path class="s" d="M100 110 L52 110 L40 120 L52 130 L100 130"/>
<path class="fr" d="M100 66 Q80 46 88 34 Q100 22 112 34 Q120 46 100 66 Z"/>
<circle style="fill:#fff" cx="100" cy="42" r="6"/>`},
{id:"orei_19",kanji:"お礼",kana:"おれい",romaji:"orei",en:"expression of gratitude",lesson:19,art:`<rect class="s" x="66" y="94" width="68" height="50" rx="4"/>
<path class="s r" d="M100 94 L100 144 M66 114 L134 114"/>
<path class="s r" d="M100 94 Q82 78 90 74 Q98 72 100 94 Q102 72 110 74 Q118 78 100 94"/>
<path class="s" d="M38 152 Q56 148 66 136 M162 152 Q144 148 134 136"/>
<path class="fr" d="M100 62 Q86 50 91 42 Q100 36 100 47 Q100 36 109 42 Q114 50 100 62 Z"/>`},
{id:"shurui_19",kanji:"種類",kana:"しゅるい",romaji:"shurui",en:"a kind; a sort",lesson:19,art:`<path class="s t" d="M76 34 L76 164 M124 34 L124 164"/>
<circle class="s" cx="50" cy="50" r="12"/><circle class="s" cx="50" cy="90" r="12"/><circle class="s" cx="50" cy="130" r="12"/>
<path class="s r" d="M100 38 L114 62 L86 62 Z M100 78 L114 102 L86 102 Z M100 118 L114 142 L86 142 Z"/>
<path class="s" d="M138 38 L162 38 L162 62 L138 62 Z M138 78 L162 78 L162 102 L138 102 Z M138 118 L162 118 L162 142 L138 142 Z"/>`},
{id:"hanashi_19",kanji:"話",kana:"はなし",romaji:"hanashi",en:"talk; story",lesson:19,art:`<path class="s" d="M100 118 Q76 106 40 112 L40 156 Q76 150 100 162 Q124 150 160 156 L160 112 Q124 106 100 118 Z M100 118 L100 162"/>
<path class="s" d="M70 30 L150 30 Q160 30 160 40 L160 70 Q160 80 150 80 L112 80 L100 96 L100 80 L70 80 Q60 80 60 70 L60 40 Q60 30 70 30 Z"/>
<path class="s t r" d="M74 46 L146 46 M74 56 L140 56 M74 66 L122 66"/>`},
{id:"nayami_19",kanji:"悩み",kana:"なやみ",romaji:"nayami",en:"worry",lesson:19,art:`<circle class="s" cx="100" cy="98" r="18"/>
<path class="s" d="M100 116 L100 162 M100 126 L76 112 L84 94 M100 126 L124 112 L116 94"/>
<path class="s t" d="M90 92 L96 96 M110 92 L104 96 M93 108 Q100 102 107 108"/>
<path class="s r" d="M70 56 Q78 32 96 50 Q104 28 118 50 Q134 38 130 60 Q112 72 98 58 Q86 70 72 62 Q90 52 108 62"/>`},
{id:"machigai_19",kanji:"間違い",kana:"まちがい",romaji:"machigai",en:"mistake",lesson:19,art:`<rect class="s" x="54" y="34" width="92" height="128" rx="6"/>
<path class="s t" d="M68 62 L80 74 L94 54 M68 130 L80 142 L94 122 M108 64 L132 64 M108 100 L132 100 M108 134 L132 134"/>
<path class="s r" d="M70 90 L94 112 M94 90 L70 112"/>`},
{id:"seikaku_19",kanji:"性格",kana:"せいかく",romaji:"seikaku",en:"personality",lesson:19,art:`<path class="s" d="M118 162 L118 138 Q146 134 144 112 L156 106 L146 94 Q150 44 104 40 Q60 40 58 88 Q58 116 78 130 L78 162"/>
<path class="fr" d="M94 104 Q80 92 85 84 Q94 78 94 89 Q94 78 103 84 Q108 92 94 104 Z"/>
<path class="s t" d="M120 60 L124 70 L134 70 L126 76 L129 86 L120 80 L111 86 L114 76 L106 70 L116 70 Z"/>
<circle class="s t" cx="74" cy="68" r="6"/>`},
{id:"namakemono_19",kanji:"怠け者",kana:"なまけもの",romaji:"namakemono",en:"lazy person",lesson:19,art:`<path class="s" d="M30 150 L30 110 Q30 100 40 100 L40 126 L160 126 L160 100 Q170 100 170 110 L170 150 M30 142 L170 142 M40 150 L40 160 M160 150 L160 160"/>
<circle class="s" cx="54" cy="110" r="12"/>
<path class="s" d="M66 114 L120 118 L150 110 M120 118 L148 120 M86 116 L92 138"/>
<rect class="fr" x="98" y="96" width="12" height="18" rx="2"/>
<path class="s t" d="M48 112 Q52 116 56 112"/>`},
{id:"hazukashigariya_19",kanji:"恥ずかしがり屋",kana:"はずかしがりや",romaji:"hazukashigariya",en:"shy person",lesson:19,art:`<rect class="s" x="104" y="30" width="56" height="136"/>
<path class="s" d="M104 52 Q76 54 76 74 Q76 94 104 96"/>
<circle class="f" cx="92" cy="70" r="3"/>
<ellipse class="fr" cx="88" cy="82" rx="7" ry="4"/>
<path class="s t" d="M104 110 L94 110 M104 118 L94 118 M104 126 L96 126"/>
<path class="s t r" d="M66 58 L58 50 M64 74 L54 74"/>`},
{id:"nakagaii_19",kanji:"仲がいい",kana:"なかがいい",romaji:"naka ga ii",en:"to be on good/close terms; to get along well",lesson:19,art:`<circle class="s" cx="74" cy="64" r="13"/><circle class="s" cx="126" cy="64" r="13"/>
<path class="s" d="M74 77 L74 124 M74 124 L64 160 M74 124 L84 160 M126 77 L126 124 M126 124 L116 160 M126 124 L136 160"/>
<path class="s" d="M74 90 Q100 80 132 86 M126 90 Q100 80 68 86 M74 92 L56 116 M126 92 L144 116"/>
<path class="fr" d="M100 52 Q86 40 91 32 Q100 26 100 37 Q100 26 109 32 Q114 40 100 52 Z"/>`},
{id:"majime_19",kana:"まじめ",romaji:"majime",en:"serious; sober; diligent",lesson:19,art:`<circle class="s" cx="96" cy="66" r="16"/>
<path class="s r" d="M80 60 L112 60 M112 60 L126 52 M112 60 L124 68"/>
<path class="s t" d="M84 72 L93 72 M99 72 L108 72"/>
<path class="s" d="M96 82 L96 122 M96 94 L124 112 M36 126 L164 126 M48 126 L48 162 M152 126 L152 162"/>
<path class="s" d="M114 126 L124 112 L156 112 L146 126"/>`},
{id:"irassharu_19",kana:"いらっしゃる",romaji:"irassharu",en:"honorific for いく, くる, and いる",lesson:19,art:`<circle class="s" cx="80" cy="58" r="13"/>
<path class="fr" d="M68 44 L70 32 L75 39 L80 30 L85 39 L90 32 L92 44 Z"/>
<path class="s" d="M80 71 L82 118 M82 118 L66 156 M82 118 L100 154 M81 86 L62 106 M81 86 L102 100"/>
<path class="s t" d="M40 84 L52 84 M36 100 L48 100"/>
<path class="s r" d="M116 120 L160 120 M146 106 L160 120 L146 134"/>`},
{id:"meshiagaru_19",kanji:"召し上がる",kana:"めしあがる",romaji:"meshiagaru",en:"honorific for たべる and のむ",lesson:19,art:`<circle class="s" cx="70" cy="66" r="13"/>
<path class="fr" d="M58 52 L60 40 L65 47 L70 38 L75 47 L80 40 L82 52 Z"/>
<path class="s" d="M70 79 L70 160 M70 96 L102 112"/>
<path class="s" d="M100 108 L156 108 Q154 138 128 138 Q102 138 100 108 Z"/>
<path class="s r" d="M118 100 L146 62 M128 102 L158 70"/>
<path class="s t" d="M112 96 Q106 88 112 80 M140 96 Q134 88 140 80"/>`},
{id:"kudasaru_19",kanji:"下さる",kana:"くださる",romaji:"kudasaru",en:"honorific for くれる",lesson:19,art:`<circle class="s" cx="56" cy="62" r="13"/>
<path class="fr" d="M44 48 L46 36 L51 43 L56 34 L61 43 L66 36 L68 48 Z"/>
<path class="s" d="M56 75 L56 124 M56 124 L46 160 M56 124 L66 160 M56 90 L88 100"/>
<rect class="s" x="88" y="88" width="28" height="24" rx="2"/>
<circle class="s" cx="148" cy="82" r="11"/><path class="s" d="M148 93 L148 130 M148 130 L140 160 M148 130 L156 160 M148 106 L120 104"/>
<path class="s r" d="M84 136 L124 136 M114 128 L124 136 L114 144"/>`},
{id:"nasaru_19",kana:"なさる",romaji:"nasaru",en:"honorific for する",lesson:19,art:`<circle class="s" cx="66" cy="56" r="13"/>
<path class="fr" d="M54 42 L56 30 L61 37 L66 28 L71 37 L76 30 L78 42 Z"/>
<path class="s" d="M66 69 L66 120 M66 120 L54 160 M66 120 L78 160 M66 84 L100 72"/>
<path class="s" d="M100 74 L126 46 M114 36 L138 58"/>
<path class="s" d="M110 142 L170 142 M140 142 L140 120"/>
<path class="s r" d="M140 110 L140 98 M128 114 L120 106 M152 114 L160 106"/>`},
{id:"oyasuminininaru_19",kanji:"お休みになる",kana:"おやすみになる",romaji:"oyasumi ni naru",en:"honorific for ねる",lesson:19,art:`<path class="s" d="M30 96 L30 156 M30 132 L170 132 L170 156"/>
<circle class="s" cx="52" cy="116" r="12"/>
<path class="fr" d="M40 103 L42 91 L47 98 L52 89 L57 98 L62 91 L64 103 Z"/>
<path class="s" d="M66 130 Q66 108 92 108 L164 112 Q172 122 166 132"/>
<path class="s t" d="M46 118 Q50 122 54 118"/>
<path class="fr" d="M140 34 Q120 48 132 68 Q146 80 162 66 Q140 66 140 34 Z"/>`},
{id:"goranninaru_19",kanji:"ご覧になる",kana:"ごらんになる",romaji:"goran ni naru",en:"honorific for みる",lesson:19,art:`<circle class="s" cx="58" cy="78" r="13"/>
<path class="fr" d="M46 64 L48 52 L53 59 L58 50 L63 59 L68 52 L70 64 Z"/>
<path class="s" d="M58 91 L58 160 M58 108 L80 126 M58 108 L38 128"/>
<circle class="f" cx="64" cy="76" r="3"/>
<rect class="s" x="108" y="44" width="60" height="50" rx="2"/>
<path class="s t" d="M112 88 L130 66 L142 80 L150 72 L164 88"/>
<path class="s t r" d="M74 72 L84 68 M90 65 L100 61"/>`},
{id:"ossharu_19",kana:"おっしゃる",romaji:"ossharu",en:"honorific for いう",lesson:19,art:`<circle class="s" cx="62" cy="82" r="13"/>
<path class="fr" d="M50 68 L52 56 L57 63 L62 54 L67 63 L72 56 L74 68 Z"/>
<path class="s" d="M62 95 L62 160 M62 110 L42 130 M62 110 L84 126"/>
<circle class="s t" cx="69" cy="86" r="3"/>
<path class="s" d="M100 36 L166 36 Q172 36 172 42 L172 78 Q172 84 166 84 L112 84 L92 98 L102 84 L100 84 Q94 84 94 78 L94 42 Q94 36 100 36 Z"/>
<path class="s r" d="M108 60 Q114 50 120 60 Q126 70 132 60 Q138 50 144 60 Q150 70 156 60"/>`},
{id:"teirassharu_19",kana:"〜ていらっしゃる",romaji:"te irassharu",en:"honorific for 〜ている",lesson:19,art:`<circle class="s" cx="70" cy="72" r="13"/>
<path class="fr" d="M58 58 L60 46 L65 53 L70 44 L75 53 L80 46 L82 58 Z"/>
<path class="s" d="M70 85 L70 126 L106 126 L106 162 M70 100 L98 108"/>
<path class="s" d="M96 98 L112 90 L128 98 L128 118 L112 110 L96 118 Z M112 90 L112 110"/>
<path class="s t" d="M52 94 L52 162 M52 130 L100 130"/>
<path class="s r" d="M150 54 A18 18 0 1 1 132 36 M124 28 L132 36 L124 44"/>`},
{id:"okuru_escort_19",kanji:"送る",kana:"おくる",romaji:"okuru",en:"to walk/drive (someone)",lesson:19,art:`<path class="s" d="M130 82 L151 60 L172 82 M134 80 L134 118 L168 118 L168 80"/>
<rect class="fr" x="145" y="98" width="12" height="20"/>
<path class="s" d="M28 142 L28 122 L44 122 L56 102 L92 102 L104 122 L116 122 L116 142 Z"/>
<circle class="s" cx="48" cy="144" r="9"/><circle class="s" cx="96" cy="144" r="9"/>
<circle class="s t" cx="66" cy="114" r="5"/><circle class="s t" cx="84" cy="114" r="5"/>
<path class="s t r" d="M122 132 L132 128 M138 126 L148 124"/>`},
{id:"okoru_19",kanji:"怒る",kana:"おこる",romaji:"okoru",en:"to get angry",lesson:19,art:`<circle class="s" cx="94" cy="106" r="40"/>
<path class="s" d="M70 88 L88 96 M118 88 L100 96"/>
<circle class="f" cx="82" cy="104" r="4"/><circle class="f" cx="106" cy="104" r="4"/>
<path class="s" d="M78 130 Q94 118 110 130"/>
<path class="s r" d="M138 50 Q146 50 146 42 M154 42 Q154 50 162 50 M162 58 Q154 58 154 66 M146 66 Q146 58 138 58"/>`},
{id:"kimaru_19",kanji:"決まる",kana:"きまる",romaji:"kimaru",en:"to be decided",lesson:19,art:`<path class="s" d="M100 166 L100 110 L144 70"/>
<path class="s t" d="M100 110 L60 70"/>
<circle class="s t" cx="50" cy="56" r="16"/>
<circle class="s r" cx="150" cy="54" r="18"/>
<path class="s r" d="M140 54 L148 62 L162 46"/>`},
{id:"shiriau_19",kanji:"知り合う",kana:"しりあう",romaji:"shiriau",en:"to get acquainted with",lesson:19,art:`<circle class="s" cx="56" cy="58" r="13"/><circle class="s" cx="144" cy="58" r="13"/>
<path class="s" d="M56 71 L56 120 M56 120 L46 160 M56 120 L66 160 M144 71 L144 120 M144 120 L134 160 M144 120 L154 160"/>
<path class="s" d="M56 86 L94 102 M144 86 L106 102"/>
<circle class="fr" cx="100" cy="102" r="8"/>
<path class="s t r" d="M100 82 L100 70 M86 86 L80 76 M114 86 L120 76"/>`},
{id:"yobu_19",kanji:"呼ぶ",kana:"よぶ",romaji:"yobu",en:"to call (one's name); to invite",lesson:19,art:`<circle class="s" cx="58" cy="72" r="14"/>
<path class="s" d="M58 86 L58 136 M58 136 L48 164 M58 136 L68 164 M58 98 L76 78 M58 106 L78 84"/>
<path class="s" d="M72 66 L84 60 L84 86 L72 80"/>
<path class="s r" d="M96 62 Q104 73 96 84 M110 54 Q122 73 110 92 M124 46 Q140 73 124 100"/>
<circle class="s t" cx="156" cy="112" r="7"/>
<path class="s t" d="M156 119 L156 142 M156 142 L150 156 M156 142 L162 156 M156 126 L148 134"/>`},
{id:"hikkosu_19",kanji:"引っ越す",kana:"ひっこす",romaji:"hikkosu",en:"to move (to another place to live)",lesson:19,art:`<path class="s" d="M30 70 L50 50 L70 70 M34 68 L34 94 L66 94 L66 68"/>
<path class="s" d="M130 70 L150 50 L170 70 M134 68 L134 94 L166 94 L166 68"/>
<path class="s r" d="M78 72 L122 72 M110 62 L122 72 L110 82"/>
<path class="s" d="M40 148 L40 112 L116 112 L116 148 Z M116 124 L140 124 L156 138 L156 148 L116 148"/>
<circle class="s" cx="64" cy="152" r="8"/><circle class="s" cx="136" cy="152" r="8"/>
<rect class="s t" x="54" y="120" width="22" height="20"/>`},
{id:"yoru_stop_19",kanji:"寄る",kana:"よる",romaji:"yoru",en:"to stop by",lesson:19,art:`<path class="s" d="M30 142 L170 142 M158 132 L170 142 L158 152"/>
<path class="s" d="M76 56 L124 56 L130 72 L70 72 Z M78 72 L78 110 L122 110 L122 72"/>
<rect class="s t" x="93" y="86" width="14" height="24"/>
<path class="s r" d="M38 130 Q70 130 90 118 Q100 110 110 118 Q130 130 158 130"/>
<circle class="fr" cx="100" cy="114" r="4"/>`},
{id:"okureru_19",kanji:"遅れる",kana:"おくれる",romaji:"okureru",en:"to become late",lesson:19,art:`<circle class="s" cx="136" cy="60" r="28"/>
<path class="s r" d="M136 60 L136 40 M136 60 L152 68"/>
<circle class="s" cx="68" cy="76" r="12"/>
<path class="s" d="M70 88 L60 124 M60 124 L82 152 M60 124 L42 148 M66 100 L90 110 M66 100 L46 92"/>
<path class="s t" d="M50 58 Q44 68 50 72 Q56 68 50 58 Z"/>
<path class="s t" d="M28 116 L40 116 M28 130 L36 130"/>`},
{id:"kakeru_sit_19",kana:"かける",romaji:"kakeru",en:"to sit down",lesson:19,art:`<path class="s" d="M66 70 L66 162 M66 122 L120 122 L120 162"/>
<circle class="s" cx="84" cy="62" r="13"/>
<path class="s" d="M84 75 L84 116 L124 116 L126 158 M84 92 L112 104"/>
<path class="s r" d="M152 50 L152 112 M140 98 L152 112 L164 98"/>`},
{id:"moteru_19",kana:"もてる",romaji:"moteru",en:"to be popular (romantically)",lesson:19,art:`<circle class="s" cx="100" cy="90" r="14"/>
<path class="s" d="M100 104 L100 140 M100 140 L90 166 M100 140 L110 166 M100 114 L80 126 M100 114 L120 126"/>
<path class="fr" d="M46 70 Q32 58 37 50 Q46 44 46 55 Q46 44 55 50 Q60 58 46 70 Z M154 70 Q140 58 145 50 Q154 44 154 55 Q154 44 163 50 Q168 58 154 70 Z M100 64 Q89 54 93 48 Q100 43 100 52 Q100 43 107 48 Q111 54 100 64 Z"/>
<path class="s r" d="M42 128 Q31 118 35 112 Q42 107 42 116 Q42 107 49 112 Q53 118 42 128 Z M158 128 Q147 118 151 112 Q158 107 158 116 Q158 107 165 112 Q169 118 158 128 Z"/>
<path class="s t r" d="M60 80 L76 88 M140 80 L124 88"/>`},
{id:"hareru_19",kanji:"晴れる",kana:"はれる",romaji:"hareru",en:"to become sunny",lesson:19,art:`<circle class="fr" cx="92" cy="92" r="26"/>
<path class="s r" d="M92 50 L92 36 M92 134 L92 148 M50 92 L36 92 M134 92 L148 92 M62 62 L52 52 M122 62 L132 52 M62 122 L52 132"/>
<path class="s" d="M130 156 Q128 142 142 142 Q146 130 160 136 Q174 136 172 150 Q176 158 168 160 L134 160 Q126 160 130 156 Z"/>
<path class="s t" d="M116 148 L106 148 M118 158 L108 158"/>`},
{id:"gochisousuru_19",kana:"ごちそうする",romaji:"gochisou suru",en:"to treat/invite (someone) to a meal",lesson:19,art:`<path class="s" d="M30 132 L170 132 M44 132 L44 164 M156 132 L156 164"/>
<ellipse class="s" cx="120" cy="126" rx="30" ry="6"/>
<path class="s" d="M98 122 Q120 94 142 122"/>
<circle class="s" cx="50" cy="70" r="13"/>
<path class="s" d="M50 83 L50 130 M50 96 L76 82"/>
<rect class="fr" x="72" y="62" width="28" height="18" rx="3"/>
<circle class="s" cx="160" cy="80" r="11"/>`},
{id:"enryosuru_19",kanji:"遠慮する",kana:"えんりょする",romaji:"enryo suru",en:"to hold back; to refrain from",lesson:19,art:`<circle class="s" cx="60" cy="64" r="13"/>
<path class="s" d="M60 77 L60 130 M60 130 L50 164 M60 130 L70 164 M60 92 L92 88"/>
<path class="s" d="M92 88 L92 66 M92 88 L100 68 M92 88 L106 74 M92 88 L106 90"/>
<ellipse class="s" cx="146" cy="122" rx="24" ry="6"/>
<path class="s" d="M130 118 L146 96 L162 118"/>
<path class="s r" d="M118 54 L118 70 M118 82 L118 98 M118 110 L118 126 M118 138 L118 150"/>`},
{id:"shoutaisuru_19",kanji:"招待する",kana:"しょうたいする",romaji:"shoutai suru",en:"to invite someone (to an event/place)",lesson:19,art:`<rect class="s" x="40" y="84" width="90" height="62" rx="4"/>
<path class="s" d="M40 84 L85 118 L130 84"/>
<circle class="fr" cx="85" cy="118" r="9"/>
<path class="s t" d="M34 40 Q100 64 166 40"/>
<path class="s r" d="M50 45 L56 60 L64 49 M80 52 L86 66 L94 54 M108 54 L114 68 L122 52 M138 48 L146 62 L152 45"/>
<path class="s" d="M152 104 L152 128 M140 116 L164 116"/>`},
{id:"hanashiwosuru_19",kanji:"話をする",kana:"はなしをする",romaji:"hanashi o suru",en:"to have a talk",lesson:19,art:`<circle class="s" cx="48" cy="98" r="13"/><circle class="s" cx="152" cy="98" r="13"/>
<path class="s" d="M48 111 L48 162 M152 111 L152 162 M48 126 L70 138 M152 126 L130 138"/>
<path class="s" d="M54 46 Q54 30 78 30 Q102 30 102 46 Q102 62 78 62 L72 62 L58 76 L64 60 Q54 56 54 46 Z"/>
<path class="s r" d="M98 60 Q98 44 122 44 Q146 44 146 60 Q146 76 122 76 L138 88 L114 76 Q98 74 98 60 Z"/>
<path class="s t" d="M78 142 L122 142 M100 142 L100 162"/>`},
{id:"ototoi_19",kana:"おととい",romaji:"ototoi",en:"the day before yesterday",lesson:19,art:`<rect class="fr" x="30" y="92" width="36" height="40" rx="4"/>
<rect class="s" x="82" y="92" width="36" height="40" rx="4"/>
<rect class="s" x="134" y="92" width="36" height="40" rx="4"/>
<circle class="f" cx="152" cy="112" r="6"/>
<path class="s" d="M152 82 Q100 36 50 82 M50 82 L48 68 M50 82 L64 80"/>`},
{id:"maiasa_19",kanji:"毎朝",kana:"まいあさ",romaji:"maiasa",en:"every morning",lesson:19,art:`<path class="s" d="M28 118 L172 118"/>
<path class="fr" d="M66 118 A34 34 0 0 1 134 118 Z"/>
<path class="s r" d="M100 74 L100 60 M68 88 L58 78 M132 88 L142 78 M52 106 L40 104 M148 106 L160 104"/>
<path class="s" d="M114 148 A14 14 0 1 1 100 134 M94 128 L100 134 L94 140"/>`},
{id:"sorede_19",kana:"それで",romaji:"sorede",en:"then; therefore",lesson:19,art:`<path class="s t" d="M28 150 L172 150"/>
<rect class="s" x="40" y="90" width="18" height="60" transform="rotate(40 58 150)"/>
<rect class="s" x="92" y="90" width="18" height="60" transform="rotate(20 110 150)"/>
<rect class="s r" x="136" y="90" width="18" height="60"/>
<path class="s t r" d="M56 56 L140 56 M128 46 L140 56 L128 66"/>`},
{id:"naze_19",kana:"なぜ",romaji:"naze",en:"why",lesson:19,art:`<circle class="s" cx="100" cy="98" r="15"/>
<path class="s" d="M100 113 L100 162 M100 126 L76 120 L66 102 M100 126 L124 120 L134 102"/>
<path class="s t" d="M58 100 L72 100 M128 100 L142 100"/>
<path class="s r" d="M86 50 Q86 32 102 32 Q118 32 118 46 Q118 58 102 62 L102 70"/>
<circle class="fr" cx="102" cy="80" r="4"/>`},
{id:"hontouwa_19",kanji:"本当は",kana:"ほんとうは",romaji:"hontou wa",en:"in fact; originally",lesson:19,art:`<circle class="s" cx="122" cy="96" r="30"/>
<path class="s r" d="M110 90 L114 90 M130 90 L134 90 M112 112 Q122 106 132 112"/>
<path class="s" d="M36 76 Q36 56 62 56 Q88 56 88 76 Q88 116 62 116 Q36 116 36 76 Z"/>
<path class="s t" d="M50 78 L56 78 M68 78 L74 78 M50 96 Q62 106 74 96"/>
<path class="s" d="M62 116 L62 158"/>`},
{id:"mada_still_19",kana:"まだ",romaji:"mada",en:"still",lesson:19,art:`<path class="s" d="M64 34 L136 34 M64 166 L136 166 M72 34 Q72 80 100 100 Q128 80 128 34 M72 166 Q72 120 100 100 Q128 120 128 166"/>
<path class="fr" d="M80 54 L120 54 Q116 80 100 94 Q84 80 80 54 Z"/>
<path class="s t r" d="M100 96 L100 146"/>
<path class="s t" d="M88 162 Q100 148 112 162"/>`},
{id:"shoushou_19",kanji:"少々",kana:"しょうしょう",romaji:"shoushou",en:"a few seconds",lesson:19,art:`<circle class="s" cx="100" cy="108" r="46"/>
<path class="s" d="M90 50 L110 50 M100 50 L100 62 M136 68 L144 60"/>
<path class="fr" d="M100 108 L100 72 A36 36 0 0 1 118 77 Z"/>
<circle class="f" cx="100" cy="108" r="4"/>
<path class="s t" d="M148 108 L140 108 M100 156 L100 148 M52 108 L60 108"/>`},
{id:"meisama_19",kanji:"〜名様",kana:"〜めいさま",romaji:"meisama",en:"party of ... people",lesson:19,art:`<circle class="s" cx="52" cy="90" r="12"/><circle class="s" cx="84" cy="90" r="12"/><circle class="s" cx="116" cy="90" r="12"/><circle class="s" cx="148" cy="90" r="12"/>
<path class="s" d="M36 130 Q36 108 52 108 Q68 108 68 130 M68 130 Q68 108 84 108 Q100 108 100 130 M100 130 Q100 108 116 108 Q132 108 132 130 M132 130 Q132 108 148 108 Q164 108 164 130"/>
<path class="s r" d="M30 142 L30 152 L170 152 L170 142 M100 152 L100 164"/>`},
{id:"youkoso_19",kana:"ようこそ",romaji:"youkoso",en:"Welcome.",lesson:19,art:`<path class="s" d="M40 160 L40 40 L100 40 L100 160"/>
<path class="s" d="M40 40 L60 52 L60 166 L40 160"/>
<circle class="s" cx="132" cy="62" r="13"/>
<path class="s" d="M132 75 L132 124 M132 124 L122 160 M132 124 L142 160 M132 88 L108 70 M132 88 L156 70"/>
<path class="fr" d="M66 160 L118 160 L126 170 L58 170 Z"/>
<path class="s t r" d="M106 56 L100 50 M158 56 L164 50"/>`},
{id:"yoroshikuotsutaekudasai_19",kanji:"よろしくお伝えください",kana:"よろしくおつたえください",romaji:"yoroshiku otsutae kudasai",en:"Please give my best regards (to ...).",lesson:19,art:`<circle class="s" cx="40" cy="84" r="11"/><circle class="s" cx="100" cy="84" r="11"/><circle class="s" cx="160" cy="84" r="11"/>
<path class="s" d="M40 95 L40 132 M40 132 L32 162 M40 132 L48 162 M100 95 L100 132 M100 132 L92 162 M100 132 L108 162 M160 95 L160 132 M160 132 L152 162 M160 132 L168 162"/>
<path class="fr" d="M70 60 Q56 48 61 40 Q70 34 70 45 Q70 34 79 40 Q84 48 70 60 Z"/>
<path class="s t r" d="M130 60 Q116 48 121 40 Q130 34 130 45 Q130 34 139 40 Q144 48 130 60 Z"/>
<path class="s t" d="M48 40 Q70 24 92 40 M84 34 L92 40 L82 43 M108 40 Q130 24 152 40 M144 34 L152 40 L142 43"/>`}
];
