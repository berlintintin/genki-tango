/* =======================================================================
   lesson_3.js  —  Doodle Tango vocabulary, Lesson 3  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 3.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[3] = [
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
{id:"zasshi",kanji:"雑誌",kana:"ざっし",romaji:"zasshi",en:"magazine",lesson:3,art:`<rect class="s" x="52" y="40" width="96" height="120" rx="3"/>
<rect class="s r" x="66" y="56" width="68" height="46"/>
<path class="s r" d="M78 90 L94 72 L104 84 L116 68 L122 90 Z"/>
<circle class="fr" cx="86" cy="70" r="3"/>
<path class="s t" d="M66 116 L134 116 M66 130 L134 130 M66 144 L110 144"/>`},
{id:"supootsu",kana:"スポーツ",romaji:"supootsu",en:"sports",lesson:3,art:`<circle class="s" cx="76" cy="112" r="30"/>
<path class="s t" d="M76 82 Q60 96 76 112 Q92 128 76 142 M46 112 L106 112 M60 90 Q76 100 92 90 M60 134 Q76 124 92 134"/>
<path class="s r" d="M120 44 L156 92 M156 44 L120 92"/>
<path class="s r" d="M112 60 L164 76"/>`},
{id:"deeto",kana:"デート",romaji:"deeto",en:"date (romantic, not calendar)",lesson:3,art:`<circle class="s" cx="64" cy="66" r="13"/>
<path class="s" d="M64 79 L64 118 M64 118 L54 148 M64 118 L74 148 M64 92 L82 104"/>
<circle class="s r" cx="136" cy="66" r="13"/>
<path class="s r" d="M136 79 L118 128 L154 128 Z M136 128 L136 148 M136 92 L118 104"/>
<path class="s" d="M84 120 L116 120 L116 148 L84 148 Z" style="fill:#fff"/>
<path class="s r" d="M100 92 L104 100 L112 100 L106 106 L108 114 L100 109 L92 114 L94 106 L88 100 L96 100 Z"/>
<path class="s t r" d="M100 120 L100 148"/>`},
{id:"tenisu",kana:"テニス",romaji:"tenisu",en:"tennis",lesson:3,art:`<ellipse class="s" cx="76" cy="76" rx="30" ry="38" transform="rotate(-38 76 76)"/>
<path class="s t" d="M60 60 L92 92 M52 76 L84 100 M68 52 L100 84"/>
<path class="s" d="M96 96 L128 140 M120 140 L136 140"/>
<circle class="s r" cx="140" cy="70" r="16"/>
<path class="s t r" d="M126 62 Q140 70 154 62"/>`},
{id:"aisukuriimu",kana:"アイスクリーム",romaji:"aisukuriimu",en:"ice cream",lesson:3,art:`<path class="s" d="M74 96 L126 96 L100 158 Z"/>
<path class="s t" d="M82 112 L118 112 M90 128 L110 128"/>
<circle class="s r" cx="88" cy="78" r="18"/>
<circle class="s" cx="114" cy="78" r="18"/>
<circle class="s r" cx="101" cy="58" r="16"/>
<circle class="fr" cx="101" cy="44" r="5"/>`},
{id:"hanbaagaa",kana:"ハンバーガー",romaji:"hanbaagaa",en:"hamburger",lesson:3,art:`<path class="s" d="M50 76 Q50 48 100 48 Q150 48 150 76 Z"/>
<circle class="f" cx="82" cy="64" r="2.5"/><circle class="f" cx="104" cy="60" r="2.5"/><circle class="f" cx="124" cy="66" r="2.5"/>
<path class="s r" d="M50 88 Q56 82 66 88 Q76 94 86 88 Q96 82 106 88 Q116 94 126 88 Q136 82 150 88"/>
<path class="s" d="M48 100 L152 100"/>
<path class="s" d="M50 112 Q50 138 100 138 Q150 138 150 112 Z"/>
<path class="s t" d="M50 88 L150 88 M48 100 L152 100"/>`},
{id:"osake",kanji:"お酒",kana:"おさけ",romaji:"osake",en:"sake; alcoholic drink",lesson:3,art:`<path class="s" d="M84 40 L116 40 L112 60 Q126 74 126 100 L126 140 Q126 150 116 150 L84 150 Q74 150 74 140 L74 100 Q74 74 88 60 Z"/>
<path class="s r" d="M74 96 L126 96"/>
<path class="s" d="M138 116 L166 116 L162 148 L142 148 Z"/>
<path class="s r" d="M142 128 L162 128"/>`},
{id:"koohii",kana:"コーヒー",romaji:"koohii",en:"coffee",lesson:3,art:`<path class="s" d="M56 84 L128 84 L122 134 Q122 146 106 146 L78 146 Q62 146 62 134 Z"/>
<path class="s" d="M128 96 Q152 96 152 116 Q152 134 128 134"/>
<ellipse class="s" cx="92" cy="158" rx="42" ry="7"/>
<path class="s r" d="M78 68 Q72 60 78 52 M100 68 Q94 60 100 52 M122 68 Q116 60 122 52"/>
<ellipse class="fr" cx="92" cy="102" rx="10" ry="6"/>`},
{id:"mizu",kanji:"水",kana:"みず",romaji:"mizu",en:"water",lesson:3,art:`<path class="s" d="M64 56 L136 56 L126 150 Q126 156 118 156 L82 156 Q74 156 74 150 Z"/>
<path class="s r" d="M74 104 Q100 96 126 104 L120 150 Q120 152 116 152 L84 152 Q80 152 80 150 Z"/>
<path class="s t" d="M64 56 L136 56"/>
<path style="fill:#fff" d="M90 118 Q98 112 100 122 Q92 126 90 118 Z"/>
<path class="s r" d="M150 60 Q142 72 150 82 Q158 72 150 60 Z"/>`},
{id:"asagohan",kanji:"朝ご飯",kana:"あさごはん",romaji:"asagohan",en:"breakfast",lesson:3,art:`<path class="s" d="M34 132 L100 132"/>
<circle class="s r" cx="67" cy="132" r="22"/>
<path class="s r" d="M67 110 L67 100 M45 132 L37 132 M89 132 L97 132 M52 116 L46 110 M82 116 L88 110"/>
<ellipse class="s" cx="140" cy="118" rx="28" ry="14"/>
<path class="s" d="M112 118 Q112 138 140 138 Q168 138 168 118"/>
<path class="s t r" d="M126 112 Q140 118 154 112"/>`},
{id:"hirugohan",kanji:"昼ご飯",kana:"ひるごはん",romaji:"hirugohan",en:"lunch",lesson:3,art:`<circle class="s r" cx="100" cy="52" r="16"/>
<path class="s r" d="M100 28 L100 36 M100 68 L100 76 M64 52 L72 52 M128 52 L136 52 M75 27 L80 34 M125 27 L120 34 M75 77 L80 70 M125 77 L120 70"/>
<ellipse class="s" cx="100" cy="128" rx="46" ry="16"/>
<path class="s" d="M54 128 Q54 106 100 106 Q146 106 146 128"/>
<ellipse class="fr" cx="100" cy="118" rx="14" ry="6"/>`},
{id:"bangohan",kanji:"晩ご飯",kana:"ばんごはん",romaji:"bangohan",en:"dinner",lesson:3,art:`<path class="s r" d="M74 44 Q62 52 62 70 Q62 92 84 98 Q72 80 76 60 Q78 50 74 44 Z"/>
<circle class="fr" cx="120" cy="52" r="3"/><circle class="fr" cx="140" cy="66" r="3"/>
<ellipse class="s" cx="100" cy="128" rx="46" ry="16"/>
<path class="s" d="M54 128 Q54 106 100 106 Q146 106 146 128"/>
<path class="s" d="M40 116 L40 140 M156 118 Q168 118 168 130"/>
<path class="s t r" d="M86 114 Q100 120 114 114"/>`},
{id:"ie",kanji:"家",kana:"いえ",romaji:"ie",en:"home; house",lesson:3,art:`<path class="s" d="M36 96 L100 44 L164 96"/>
<path class="s" d="M52 84 L52 152 L148 152 L148 84"/>
<path class="s" d="M84 152 L84 112 L116 112 L116 152"/>
<rect class="s r" x="112" y="96" width="24" height="20"/>
<path class="s" d="M128 60 L128 74 L140 74 L140 68"/>`},
{id:"uchi",kana:"うち",romaji:"uchi",en:"home; house; my place",lesson:3,art:`<path class="s" d="M36 100 L100 48 L164 100"/>
<path class="s" d="M52 88 L52 152 L148 152 L148 88"/>
<path class="s" d="M84 152 L84 116 L116 116 L116 152"/>
<path class="fr" d="M100 96 Q88 82 100 72 Q112 82 100 96 Z"/>
<rect class="s r" x="60" y="100" width="20" height="18"/>`},
{id:"kafe",kana:"カフェ",romaji:"kafe",en:"cafe",lesson:3,art:`<path class="s" d="M40 72 L160 72 L160 56 L40 56 Z"/>
<path class="s r" d="M46 72 Q52 84 46 96 M64 72 Q70 84 64 96 M82 72 Q88 84 82 96 M100 72 Q106 84 100 96 M118 72 Q124 84 118 96 M136 72 Q142 84 136 96 M154 72 Q160 84 154 96"/>
<path class="s" d="M78 116 L118 116 L114 150 L82 150 Z"/>
<path class="s" d="M118 124 Q134 124 134 136 Q134 146 118 146"/>
<path class="s r" d="M92 104 Q86 98 92 92 M104 104 Q98 98 104 92"/>`},
{id:"ashita",kanji:"明日",kana:"あした",romaji:"ashita",en:"tomorrow",lesson:3,art:`<rect class="s" x="40" y="52" width="120" height="100" rx="5"/>
<path class="s" d="M40 78 L160 78"/><path class="s" d="M66 44 L66 60 M134 44 L134 60"/>
<path class="s t" d="M56 92 L56 148 M84 92 L84 148 M112 92 L112 148 M140 92 L140 148 M40 106 L160 106 M40 132 L160 132"/>
<path class="fr" d="M116 108 L156 108 L156 132 L116 132 Z"/>
<path class="s r" d="M60 120 L104 120 M92 110 L108 120 L92 130"/>`},
{id:"kyou",kanji:"今日",kana:"きょう",romaji:"kyou",en:"today",lesson:3,art:`<rect class="s" x="40" y="52" width="120" height="100" rx="5"/>
<path class="s" d="M40 78 L160 78"/><path class="s" d="M66 44 L66 60 M134 44 L134 60"/>
<path class="s t" d="M56 92 L56 148 M84 92 L84 148 M112 92 L112 148 M140 92 L140 148 M40 106 L160 106 M40 132 L160 132"/>
<path class="s r" d="M88 108 L112 108 L112 132 L88 132 Z"/>
<path class="fr" d="M100 112 L103 120 L111 120 L105 125 L107 133 L100 128 L93 133 L95 125 L89 120 L97 120 Z"/>`},
{id:"asa",kanji:"朝",kana:"あさ",romaji:"asa",en:"morning",lesson:3,art:`<path class="s" d="M28 132 L172 132"/>
<circle class="s r" cx="100" cy="132" r="28"/>
<path class="s r" d="M100 88 L100 78 M56 132 L44 132 M144 132 L156 132 M68 100 L60 92 M132 100 L140 92"/>
<path class="s r" d="M100 104 L100 122 M92 112 L100 104 L108 112"/>
<path class="s" d="M40 118 L52 116 L48 106 Q44 100 40 106 Q34 112 40 118 Z"/>`},
{id:"konban",kanji:"今晩",kana:"こんばん",romaji:"konban",en:"tonight",lesson:3,art:`<path class="s" d="M132 40 Q96 44 96 84 Q96 124 134 128 Q108 112 108 84 Q108 56 132 40 Z"/>
<path class="fr" d="M64 60 L67 68 L75 68 L69 73 L71 81 L64 76 L57 81 L59 73 L53 68 L61 68 Z"/>
<path class="s" d="M40 152 L160 152 M56 152 L56 120 L96 120 L96 152 M104 120 L144 120 L144 152"/>
<rect class="fr" x="64" y="128" width="24" height="16"/>`},
{id:"mainichi",kanji:"毎日",kana:"まいにち",romaji:"mainichi",en:"every day",lesson:3,art:`<rect class="s" x="34" y="76" width="132" height="40" rx="4"/>
<path class="s t" d="M62 76 L62 116 M90 76 L90 116 M118 76 L118 116 M138 76 L138 116"/>
<path class="s r" d="M44 96 L52 104 L58 92 M72 96 L80 104 L86 92 M100 96 L108 104 L114 92 M126 96 L134 104 L148 88"/>
<path class="s r" d="M52 140 Q100 122 148 140 M148 140 L138 130 M148 140 L136 146"/>
<path class="s r" d="M52 140 Q46 130 54 124"/>`},
{id:"maiban",kanji:"毎晩",kana:"まいばん",romaji:"maiban",en:"every night",lesson:3,art:`<path class="s" d="M118 52 Q88 56 88 88 Q88 120 120 124 Q98 108 98 88 Q98 66 118 52 Z"/>
<path class="fr" d="M60 66 L63 74 L71 74 L65 79 L67 87 L60 82 L53 87 L55 79 L49 74 L57 74 Z"/>
<circle class="fr" cx="140" cy="60" r="4"/>
<path class="s r" d="M44 150 Q100 130 156 150 M156 150 L146 140 M156 150 L144 156"/>
<path class="s r" d="M44 150 Q38 138 48 132"/>`},
{id:"shuumatsu",kanji:"週末",kana:"しゅうまつ",romaji:"shuumatsu",en:"weekend",lesson:3,art:`<rect class="s" x="30" y="72" width="140" height="52" rx="4"/>
<path class="s t" d="M50 72 L50 124 M70 72 L70 124 M90 72 L90 124 M110 72 L110 124 M130 72 L130 124 M150 72 L150 124"/>
<path class="fr" d="M130 72 L170 72 L170 124 L130 124 Z"/>
<path class="s r" d="M150 72 L150 124"/>
<circle class="s r" cx="140" cy="98" r="6" style="fill:#fff"/><circle class="s r" cx="160" cy="98" r="6" style="fill:#fff"/>`},
{id:"itsu",kana:"いつ",romaji:"itsu",en:"when",lesson:3,art:`<rect class="s" x="44" y="60" width="112" height="92" rx="5"/>
<path class="s" d="M44 84 L156 84"/><path class="s" d="M70 52 L70 68 M130 52 L130 68"/>
<path class="s r" d="M84 106 Q84 92 100 92 Q116 92 116 108 Q116 120 100 124 L100 132"/>
<circle class="fr" cx="100" cy="144" r="4"/>`},
{id:"goro",kana:"〜ごろ",romaji:"goro",en:"at about ...",lesson:3,art:`<circle class="s" cx="100" cy="100" r="46"/>
<path class="s" d="M100 100 L100 68 M100 100 L124 100"/>
<circle class="f" cx="100" cy="100" r="4"/>
<path class="s r" d="M40 156 Q54 148 68 156 Q82 148 96 156" transform="translate(0,-4)"/>
<path class="s t r" d="M150 60 Q142 68 150 76 Q158 68 150 60"/>`},
{id:"iku",kanji:"行く",kana:"いく",romaji:"iku",en:"to go",lesson:3,art:`<circle class="s" cx="70" cy="54" r="13"/>
<path class="s" d="M70 67 Q84 88 74 106 M74 106 L58 140 M74 106 L96 118 M74 82 L54 72"/>
<path class="s r" d="M104 120 L140 120 M128 110 L142 120 L128 130"/>
<path class="s r" d="M148 92 L148 128 L162 122 L162 98 Z"/>
<circle class="fr" cx="155" cy="88" r="5"/>`},
{id:"kaeru",kanji:"帰る",kana:"かえる",romaji:"kaeru",en:"to go back; to return",lesson:3,art:`<path class="s" d="M104 96 L148 62 L192 96" transform="translate(-30,0)"/>
<path class="s" d="M86 90 L86 152 L152 152 L152 90"/>
<path class="s" d="M104 152 L104 120 L134 120 L134 152"/>
<circle class="s r" cx="48" cy="72" r="12"/>
<path class="s r" d="M48 84 L48 116 M48 92 L36 104 M48 92 L60 104 M48 116 L40 142 M48 116 L56 142"/>
<path class="s r" d="M62 96 Q82 84 100 96 M100 96 L92 86 M100 96 L88 100"/>`},
{id:"hanasu",kanji:"話す",kana:"はなす",romaji:"hanasu",en:"to speak; to talk",lesson:3,art:`<circle class="s" cx="56" cy="88" r="14"/>
<path class="s" d="M56 102 L56 140 M56 140 L46 160 M56 140 L66 160 M56 112 L72 122"/>
<circle class="s r" cx="144" cy="88" r="14"/>
<path class="s r" d="M144 102 L144 140 M144 140 L134 160 M144 140 L154 160 M144 112 L128 122"/>
<path class="s" d="M74 60 L104 60 L104 78 L88 78 L82 86 L82 78 L74 78 Z"/>
<path class="s r" d="M126 68 L96 68 L96 86 L112 86 L118 94 L118 86 L126 86 Z"/>`},
{id:"okiru",kanji:"起きる",kana:"おきる",romaji:"okiru",en:"to get up",lesson:3,art:`<path class="s" d="M34 140 L120 140 M42 140 L42 118 L120 118 L120 140 M120 128 L160 128 L160 140 L120 140"/>
<circle class="s" cx="66" cy="98" r="13"/>
<path class="s t" d="M60 96 Q63 93 66 96 M70 96 Q73 93 76 96"/>
<path class="s" d="M66 111 L66 118 M66 118 L88 108"/>
<path class="s r" d="M66 78 L66 66 M52 84 L44 76 M80 84 L88 76"/>
<circle class="s r" cx="150" cy="70" r="14"/>
<path class="s r" d="M150 70 L150 60 M150 70 L158 76 M150 44 L150 52 M134 52 L140 58 M166 52 L160 58"/>`},
{id:"miru",kanji:"見る",kana:"みる",romaji:"miru",en:"to see; to look at; to watch",lesson:3,art:`<path class="s" d="M34 96 Q60 66 96 96 Q60 126 34 96 Z"/>
<circle class="s" cx="65" cy="96" r="12"/><circle class="f" cx="65" cy="96" r="5"/>
<rect class="s r" x="112" y="60" width="60" height="46" rx="3"/>
<path class="s r" d="M132 106 L132 118 M152 106 L152 118 M120 118 L164 118"/>
<path class="s t r" d="M96 88 L110 80 M100 96 L112 96 M96 104 L110 112"/>`},
{id:"kuru",kanji:"来る",kana:"くる",romaji:"kuru",en:"to come",lesson:3,art:`<circle class="s" cx="128" cy="54" r="13"/>
<path class="s" d="M128 67 Q114 88 124 106 M124 106 L110 140 M124 106 L146 118 M124 82 L146 72"/>
<path class="s r" d="M96 120 L58 120 M70 110 L56 120 L70 130"/>
<path class="s r" d="M48 92 L48 128 L34 122 L34 98 Z"/>
<circle class="fr" cx="41" cy="88" r="5"/>`},
{id:"suru",kana:"する",romaji:"suru",en:"to do",lesson:3,art:`<path class="s" d="M74 60 L86 60 L90 74 Q96 76 102 74 L112 64 L122 74 L112 84 Q114 90 112 96 L126 100 L126 112 L112 116 Q114 122 112 128 L122 138 L112 148 L102 138 Q96 140 90 138 L86 152 L74 152 L70 138 Q64 136 58 138 L48 148 L38 138 L48 128 Q46 122 48 116 L34 112 L34 100 L48 96 Q46 90 48 84 L38 74 L48 64 L58 74 Q64 72 70 74 Z"/>
<circle class="s r" cx="80" cy="106" r="18" style="fill:#fff"/>
<path class="s" d="M124 128 Q150 128 150 108"/>
<path class="s r" d="M150 108 L144 116 M150 108 L156 116"/>`},
{id:"benkyousuru",kanji:"勉強する",kana:"べんきょうする",romaji:"benkyou suru",en:"to study",lesson:3,art:`<path class="s" d="M40 130 L100 112 L160 130 L100 148 Z"/>
<path class="s" d="M100 148 L100 118 M70 122 L70 140 Q70 150 100 150 Q130 150 130 140 L130 122"/>
<circle class="s" cx="100" cy="88" r="13"/>
<path class="s" d="M100 101 L100 112"/>
<path class="s r" d="M148 54 L148 90 M134 62 L162 62"/>
<path class="s r" d="M140 46 L156 46"/>`},
{id:"ii",kana:"いい",romaji:"ii",en:"good",lesson:3,art:`<circle class="s r" cx="100" cy="100" r="46"/>
<circle class="s r" cx="100" cy="100" r="30"/>
<path class="s" d="M86 96 Q90 90 96 96 M104 96 Q108 90 114 96"/>
<path class="s" d="M86 112 Q100 122 114 112"/>`},
{id:"amari",kana:"あまり",romaji:"amari (+neg)",en:"not much",lesson:3,art:`<path class="s" d="M60 80 L140 80 L128 150 L72 150 Z"/>
<path class="s" d="M72 122 L128 122"/>
<path class="fr" d="M78 128 L122 128 L128 150 L72 150 Z"/>
<path class="s r" d="M40 44 L160 156" />`},
{id:"zenzen",kanji:"全然",kana:"ぜんぜん",romaji:"zenzen (+neg)",en:"not at all",lesson:3,art:`<circle class="s" cx="100" cy="100" r="46"/>
<path class="s r" d="M64 64 L136 136"/>
<path class="s r" d="M56 152 L44 164 M144 48 L156 36"/>`},
{id:"taitei",kana:"たいてい",romaji:"taitei",en:"usually",lesson:3,art:`<rect class="s" x="44" y="88" width="112" height="30" rx="4"/>
<path class="fr" d="M48 92 L128 92 L128 114 L48 114 Z"/>
<path class="s t" d="M136 88 L136 118"/>
<path class="s r" d="M44 64 Q100 48 156 64 M156 64 L146 56 M156 64 L146 70"/>
<path class="s r" d="M44 64 Q38 56 46 50"/>`},
{id:"chotto",kana:"ちょっと",romaji:"chotto",en:"a little",lesson:3,art:`<path class="s" d="M52 130 Q40 96 60 72 Q66 66 70 74 Q68 96 78 112"/>
<path class="s" d="M148 130 Q160 96 140 72 Q134 66 130 74 Q132 96 122 112"/>
<path class="s r" d="M86 100 L114 100"/>
<path class="s r" d="M86 92 L86 108 M114 92 L114 108"/>`},
{id:"tokidoki",kanji:"時々",kana:"ときどき",romaji:"tokidoki",en:"sometimes",lesson:3,art:`<rect class="s" x="34" y="80" width="132" height="40" rx="4"/>
<path class="s t" d="M62 80 L62 120 M90 80 L90 120 M118 80 L118 120 M138 80 L138 120"/>
<path class="fr" d="M40 84 L58 84 L58 116 L40 116 Z"/>
<path class="fr" d="M94 84 L114 84 L114 116 L94 116 Z"/>
<path class="fr" d="M142 84 L162 84 L162 116 L142 116 Z"/>`},
{id:"yoku",kana:"よく",romaji:"yoku",en:"often; much",lesson:3,art:`<path class="s r" d="M44 68 L52 78 L66 60 M44 100 L52 110 L66 92 M44 132 L52 142 L66 124"/>
<path class="s r" d="M88 68 L100 80 L120 56 M88 100 L100 112 L120 88 M88 132 L100 144 L120 120"/>
<path class="s r" d="M138 84 Q150 68 160 84 M138 116 Q150 100 160 116"/>`},
{id:"soudesune",kana:"そうですね",romaji:"sou desu ne",en:"That's right; Let me see",lesson:3,art:`<circle class="s" cx="88" cy="80" r="34"/>
<path class="s t" d="M76 74 L84 78 M100 74 L92 78"/>
<path class="s t" d="M78 96 Q88 102 98 96"/>
<path class="s" d="M108 108 Q130 108 130 128 Q130 138 118 140 L114 152 L110 140 Q100 136 100 122 Q100 110 108 108 Z"/>
<circle class="fr" cx="112" cy="124" r="2.5"/><circle class="fr" cx="122" cy="124" r="2.5"/><circle class="fr" cx="117" cy="132" r="2.5"/>`},
{id:"demo",kana:"でも",romaji:"demo",en:"but",lesson:3,art:`<path class="s" d="M100 40 L100 96 M100 40 L88 56 M100 40 L112 56"/>
<circle class="fr" cx="100" cy="118" r="6"/>
<path class="s r" d="M40 140 L70 140 M58 130 L70 140 L58 150"/>
<path class="s r" d="M160 140 L130 140 M142 130 L130 140 L142 150"/>
<path class="s r" d="M88 140 L112 140"/>`},
{id:"doudesuka",kana:"どうですか",romaji:"dou desu ka",en:"How about ...?; How is ...?",lesson:3,art:`<path class="s" d="M40 150 Q40 124 64 118 L96 108 Q104 106 106 114 Q108 122 98 126 L86 130"/>
<path class="s" d="M40 150 Q54 156 72 152"/>
<path class="s r" d="M116 60 Q116 46 132 46 Q150 46 150 64 Q150 78 132 84 L132 96"/>
<circle class="fr" cx="132" cy="110" r="5"/>`},
{id:"ee",kana:"ええ",romaji:"ee",en:"yes",lesson:3,art:`<circle class="s" cx="88" cy="96" r="36"/>
<path class="s t" d="M74 88 Q80 82 86 88 M90 88 Q96 82 102 88"/>
<path class="s t" d="M76 106 Q88 114 100 106"/>
<path class="s r" d="M124 96 L140 112 L168 72"/>`},
{id:"kiku_listen",kanji:"聞く",kana:"きく",romaji:"kiku",en:"to listen; to hear",lesson:3,art:`<path class="s" d="M118 68 Q86 60 76 90 Q68 114 92 126 Q104 132 104 148 L112 148 Q112 128 102 120 Q88 110 94 94 Q98 82 118 86 Z"/>
<circle class="s" cx="100" cy="98" r="6"/>
<path class="s r" d="M40 70 L36 62 M56 60 L52 50 M46 92 L38 90"/>
<path class="s r" d="M140 56 L140 92 L154 86 L154 62 Z"/>
<ellipse class="s r" cx="147" cy="98" rx="10" ry="7" transform="rotate(-18 147 98)"/>`},
{id:"hayai_early",kanji:"早い",kana:"はやい",romaji:"hayai",en:"early",lesson:3,art:`<path class="s" d="M28 132 L172 132"/>
<circle class="s r" cx="72" cy="132" r="26"/>
<path class="s r" d="M72 92 L72 82 M32 132 L24 132 M112 132 L120 132 M45 105 L38 98 M99 105 L106 98"/>
<circle class="s" cx="140" cy="102" r="30"/>
<path class="s" d="M140 102 L140 82 M140 102 L154 110"/>
<path class="s r" d="M140 76 L140 68"/>`},
{id:"doyoubi",kanji:"土曜日",kana:"どようび",romaji:"doyoubi",en:"Saturday",lesson:3,art:`<rect class="s" x="48" y="44" width="104" height="112" rx="6"/>
<path class="s" d="M48 72 L152 72"/><path class="s" d="M74 36 L74 52 M126 36 L126 52"/>
<path class="s" d="M56 146 Q56 116 100 116 Q144 116 144 146 Z"/>
<path class="s r" d="M100 116 L100 100 M100 100 Q92 96 90 88 Q98 90 100 100 M100 100 Q108 96 110 88 Q102 90 100 100"/>
<circle class="f" cx="84" cy="136" r="3"/><circle class="f" cx="112" cy="132" r="3"/><circle class="f" cx="100" cy="140" r="3"/>`},
{id:"nichiyoubi",kanji:"日曜日",kana:"にちようび",romaji:"nichiyoubi",en:"Sunday",lesson:3,art:`<rect class="s" x="48" y="44" width="104" height="112" rx="6"/>
<path class="s" d="M48 72 L152 72"/><path class="s" d="M74 36 L74 52 M126 36 L126 52"/>
<circle class="s r" cx="100" cy="116" r="20"/>
<path class="s r" d="M100 88 L100 80 M100 152 L100 144 M72 116 L64 116 M128 116 L136 116 M80 96 L74 90 M120 96 L126 90 M80 136 L74 142 M120 136 L126 142"/>`}
];