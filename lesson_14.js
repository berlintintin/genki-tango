/* =======================================================================
   lesson_14.js  —  Doodle Tango vocabulary, Lesson 14  (Genki II)
   Loaded on demand by index.html when the chosen range includes lesson 14.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[14] = [
{id:"okusan",kanji:"奥さん",kana:"おくさん",romaji:"okusan",en:"(someone's) wife",lesson:14,art:`<path class="s" d="M86 48 Q84 30 100 30 Q116 30 114 48 L120 74 M86 48 L80 74"/>
<circle class="s" cx="100" cy="48" r="13"/>
<path class="s" d="M100 61 L80 123 L120 123 Z M92 123 L92 151 M108 123 L108 151 M96 73 L76 97 M104 73 L124 97"/>
<circle class="s r" cx="126" cy="99" r="6"/>
<path class="fr" d="M150 64 C138 54 134 46 140 40 C145 35 150 39 150 44 C150 39 155 35 160 40 C166 46 162 54 150 64 Z"/>`},
{id:"goshujin",kanji:"ご主人",kana:"ごしゅじん",romaji:"goshujin",en:"(someone's) husband",lesson:14,art:`<path class="f" d="M87 44 Q88 30 100 30 Q112 30 113 44 Q106 38 100 40 Q94 38 87 44 Z"/>
<circle class="s" cx="100" cy="46" r="13"/>
<path class="s" d="M100 59 L100 111 M100 111 L88 147 M100 111 L112 147 M100 73 L78 95 M100 73 L122 95"/>
<path class="s t" d="M100 62 L94 70 L100 90 L106 70 Z"/>
<circle class="s r" cx="124" cy="98" r="6"/>
<path class="fr" d="M152 62 C140 52 136 44 142 38 C147 33 152 37 152 42 C152 37 157 33 162 38 C168 44 164 52 152 62 Z"/>`},
{id:"paatonaa",kana:"パートナー",romaji:"paatonaa",en:"partner",lesson:14,art:`<circle class="s" cx="62" cy="56" r="13"/>
<path class="s" d="M62 69 L62 121 M62 121 L50 157 M62 121 L74 157 M62 83 L40 105 M62 83 L100 104"/>
<circle class="s" cx="138" cy="56" r="13"/>
<path class="s" d="M138 69 L138 121 M138 121 L126 157 M138 121 L150 157 M138 83 L160 105 M138 83 L100 104"/>
<circle class="f" cx="100" cy="104" r="4"/>
<path class="fr" d="M100 66 C84 53 79 42 87 34 C94 28 100 33 100 40 C100 33 106 28 113 34 C121 42 116 53 100 66 Z"/>`},
{id:"ojisan",kana:"おじさん",romaji:"ojisan",en:"uncle; middle-aged man",lesson:14,art:`<circle class="s" cx="96" cy="48" r="16"/>
<path class="s r" d="M84 56 Q90 50 96 56 Q102 50 108 56"/>
<path class="s" d="M96 64 L96 74 M96 74 Q66 96 96 122 M96 74 Q126 96 96 122 M88 120 L80 158 M104 120 L112 158 M96 82 L130 104"/>
<path class="s" d="M130 104 L134 160 M130 104 Q130 94 140 96"/>
<circle class="f" cx="90" cy="46" r="2.5"/><circle class="f" cx="102" cy="46" r="2.5"/>`},
{id:"obasan",kana:"おばさん",romaji:"obasan",en:"aunt; middle-aged woman",lesson:14,art:`<circle class="f" cx="92" cy="30" r="8"/>
<circle class="s" cx="92" cy="48" r="13"/>
<path class="s" d="M92 61 L72 123 L112 123 Z M84 123 L84 151 M100 123 L100 151 M88 73 L68 97 M96 73 L116 97"/>
<path class="s" d="M116 97 L116 112"/>
<path class="s r" d="M106 112 L130 112 L134 138 L102 138 Z M110 112 Q118 100 126 112"/>`},
{id:"ryoushin",kanji:"両親",kana:"りょうしん",romaji:"ryoushin",en:"parents",lesson:14,art:`<circle class="s" cx="56" cy="46" r="13"/>
<path class="s" d="M56 59 L56 111 M56 111 L44 147 M56 111 L68 147 M56 73 L34 95 M56 73 L78 95"/>
<circle class="s" cx="144" cy="46" r="13"/>
<path class="s" d="M144 59 L124 121 L164 121 Z M136 121 L136 149 M152 121 L152 149 M140 71 L120 95 M148 71 L168 95"/>
<circle class="s r" cx="100" cy="104" r="10"/>
<path class="s r" d="M100 114 L100 140 M100 140 L92 160 M100 140 L108 160 M100 122 L80 112 M100 122 L120 112"/>`},
{id:"ooyasan",kanji:"大家さん",kana:"おおやさん",romaji:"ooyasan",en:"landlord; landlady",lesson:14,art:`<path class="s" d="M28 94 L70 58 L112 94 M38 86 L38 156 L102 156 L102 86"/>
<rect class="s t" x="58" y="118" width="24" height="38"/>
<circle class="s" cx="146" cy="60" r="13"/>
<path class="s" d="M146 73 L146 125 M146 125 L134 161 M146 125 L158 161 M146 87 L124 104 M146 87 L162 112"/>
<circle class="s r" cx="118" cy="108" r="7"/>
<path class="s r" d="M112 114 L100 126 M104 122 L108 126"/>`},
{id:"minasan",kanji:"皆さん",kana:"みなさん",romaji:"minasan",en:"everyone; all of you",lesson:14,art:`<circle class="s" cx="46" cy="58" r="13"/>
<path class="s" d="M46 71 L46 123 M46 123 L34 159 M46 123 L58 159 M46 85 L70 76 M46 85 L30 108"/>
<path class="s r" d="M70 70 Q120 30 172 70"/>
<circle class="s" cx="96" cy="100" r="11"/><circle class="s" cx="124" cy="96" r="11"/><circle class="s" cx="152" cy="100" r="11"/>
<circle class="s" cx="110" cy="128" r="11"/><circle class="s" cx="138" cy="128" r="11"/>
<path class="s t" d="M88 158 Q96 144 104 158 M116 156 Q124 142 132 156 M144 158 Q152 144 160 158"/>`},
{id:"chokoreeto",kana:"チョコレート",romaji:"chokoreeto",en:"chocolate",lesson:14,art:`<rect class="s" x="54" y="40" width="80" height="116" rx="4"/>
<path class="s t" d="M94 40 L94 156 M54 79 L134 79 M54 118 L134 118"/>
<path class="fr" d="M48 112 L140 112 L140 162 L48 162 Z"/>
<path style="fill:#fff" class="s" d="M134 40 Q122 44 126 54 Q116 58 122 68 Q130 70 134 66 Z"/>`},
{id:"mikan",kana:"みかん",romaji:"mikan",en:"mandarin orange",lesson:14,art:`<circle class="fr" cx="100" cy="106" r="50"/>
<path class="s" d="M100 56 L100 44"/>
<path class="s" d="M100 50 Q118 30 138 42 Q120 58 100 50 Z"/>
<circle style="fill:#fff" cx="82" cy="88" r="7"/>
<circle class="s t" cx="100" cy="106" r="50"/>`},
{id:"toreenaa14",kana:"トレーナー",romaji:"toreenaa",en:"sweatshirt",lesson:14,art:`<path class="s" d="M60 74 L84 58 Q100 66 116 58 L140 74 L156 132 L140 136 L128 96 L128 148 L72 148 L72 96 L60 136 L44 132 Z"/>
<path class="s t" d="M84 58 Q100 76 116 58"/>
<path class="s r" d="M84 112 L116 112 L124 136 L76 136 Z"/>
<path class="s t" d="M72 140 L128 140 M42 124 L58 128 M142 128 L158 124"/>`},
{id:"shatsu",kana:"シャツ",romaji:"shatsu",en:"shirt",lesson:14,art:`<path class="s" d="M64 66 L86 54 L100 62 L114 54 L136 66 L150 98 L134 104 L126 88 L126 152 L74 152 L74 88 L66 104 L50 98 Z"/>
<path class="s" d="M86 54 L94 76 L100 62 L106 76 L114 54"/>
<path class="s t" d="M100 62 L100 152"/>
<circle class="fr" cx="106" cy="92" r="4"/><circle class="fr" cx="106" cy="112" r="4"/><circle class="fr" cx="106" cy="132" r="4"/>`},
{id:"nekutai",kana:"ネクタイ",romaji:"nekutai",en:"necktie",lesson:14,art:`<path class="s" d="M72 30 L100 44 L128 30"/>
<path class="fr" d="M90 42 L110 42 L106 60 L94 60 Z"/>
<path class="fr" d="M94 60 L106 60 L122 140 L100 166 L78 140 Z"/>
<path class="s" d="M90 42 L110 42 L106 60 L94 60 Z M94 60 L106 60 L122 140 L100 166 L78 140 Z"/>
<path style="fill:#fff" d="M92 96 L112 86 L114 96 L94 106 Z"/>`},
{id:"mafuraa",kana:"マフラー",romaji:"mafuraa",en:"winter scarf",lesson:14,art:`<circle class="s" cx="100" cy="50" r="22"/>
<path class="s r" d="M70 78 Q100 96 130 78 L132 96 Q100 114 68 96 Z"/>
<path class="s r" d="M110 100 L118 156 L98 158 L94 104"/>
<path class="s t r" d="M100 158 L98 168 M106 158 L106 168 M113 157 L114 167"/>
<path class="s" d="M68 96 L58 152 M132 96 L142 152"/>`},
{id:"yubiwa",kanji:"指輪",kana:"ゆびわ",romaji:"yubiwa",en:"ring",lesson:14,art:`<ellipse class="s" cx="100" cy="118" rx="44" ry="40"/>
<ellipse class="s t" cx="100" cy="118" rx="34" ry="30"/>
<path class="fr" d="M84 66 L116 66 L126 78 L100 100 L74 78 Z"/>
<path class="s" d="M84 66 L116 66 L126 78 L100 100 L74 78 Z M74 78 L126 78"/>
<path class="s t r" d="M62 52 L70 60 M138 52 L130 60 M100 36 L100 48"/>`},
{id:"enpitsu14",kanji:"鉛筆",kana:"えんぴつ",romaji:"enpitsu",en:"pencil",lesson:14,art:`<g transform="rotate(-40 100 100)">
<rect class="s" x="40" y="88" width="104" height="24"/>
<path class="s" d="M144 88 L172 100 L144 112"/>
<path class="f" d="M164 96 L172 100 L164 104 Z"/>
<rect class="fr" x="26" y="88" width="14" height="24" rx="4"/>
<path class="s t" d="M40 100 L144 100"/>
</g>`},
{id:"nuigurumi",kana:"ぬいぐるみ",romaji:"nuigurumi",en:"stuffed animal (e.g., teddy bear)",lesson:14,art:`<circle class="s" cx="100" cy="64" r="28"/>
<circle class="s" cx="76" cy="40" r="10"/><circle class="s" cx="124" cy="40" r="10"/>
<ellipse class="s" cx="100" cy="128" rx="34" ry="34"/>
<circle class="f" cx="90" cy="60" r="3"/><circle class="f" cx="110" cy="60" r="3"/><ellipse class="f" cx="100" cy="72" rx="5" ry="3.5"/>
<path class="fr" d="M100 94 L82 84 L82 104 Z M100 94 L118 84 L118 104 Z"/>
<circle class="s t" cx="70" cy="150" r="10"/><circle class="s t" cx="130" cy="150" r="10"/>`},
{id:"manga",kanji:"漫画",kana:"まんが",romaji:"manga",en:"comic book",lesson:14,art:`<path class="s" d="M100 56 Q70 44 32 52 L32 152 Q70 144 100 156 Q130 144 168 152 L168 52 Q130 44 100 56 Z M100 56 L100 156"/>
<rect class="s t" x="42" y="64" width="48" height="34"/><rect class="s t" x="42" y="106" width="22" height="34"/><rect class="s t" x="70" y="106" width="20" height="34"/>
<rect class="s t" x="110" y="64" width="48" height="76"/>
<path class="fr" d="M118 72 L150 72 Q156 72 156 80 L156 90 Q156 96 150 96 L132 96 L122 106 L124 96 L118 96 Q112 96 112 90 L112 80 Q112 72 118 72 Z"/>`},
{id:"keshouhin",kanji:"化粧品",kana:"けしょうひん",romaji:"keshouhin",en:"cosmetics",lesson:14,art:`<rect class="s" x="48" y="96" width="34" height="62" rx="3"/>
<rect class="s" x="52" y="76" width="26" height="20"/>
<path class="fr" d="M54 76 L54 50 L76 40 L76 76 Z"/>
<ellipse class="s" cx="130" cy="140" rx="34" ry="14"/>
<path class="s" d="M96 140 L96 124 Q100 100 130 98 Q160 100 164 124 L164 140"/>
<ellipse class="s t r" cx="130" cy="122" rx="20" ry="14"/>`},
{id:"rajio",kana:"ラジオ",romaji:"rajio",en:"radio",lesson:14,art:`<rect class="s" x="36" y="80" width="128" height="80" rx="10"/>
<circle class="s" cx="76" cy="120" r="24"/><circle class="f" cx="76" cy="120" r="6"/>
<path class="s t" d="M116 104 L150 104 M116 118 L150 118 M116 132 L150 132"/>
<path class="s" d="M140 80 L156 32"/>
<path class="s r" d="M168 54 Q178 64 170 76 M32 56 Q22 66 30 78 M44 62 Q38 68 42 74"/>`},
{id:"osara",kanji:"お皿",kana:"おさら",romaji:"osara",en:"plate; dish",lesson:14,art:`<ellipse class="s" cx="100" cy="112" rx="64" ry="38"/>
<ellipse class="s r" cx="100" cy="112" rx="40" ry="22"/>
<path class="s t" d="M28 70 L28 160 M22 70 L22 92 Q22 100 28 100 Q34 100 34 92 L34 70"/>
<path class="s t" d="M172 70 L172 160 M172 70 Q160 84 172 108"/>
<path class="s t r" d="M74 104 Q84 96 96 98"/>`},
{id:"okaeshi",kanji:"お返し",kana:"おかえし",romaji:"okaeshi",en:"return (as a token of gratitude)",lesson:14,art:`<circle class="s" cx="40" cy="70" r="12"/>
<path class="s" d="M40 82 L40 134 M40 134 L28 170 M40 134 L52 170 M40 96 L18 118 M40 96 L62 118"/>
<circle class="s" cx="160" cy="70" r="12"/>
<path class="s" d="M160 82 L160 134 M160 134 L148 170 M160 134 L172 170 M160 96 L138 118 M160 96 L182 118"/>
<rect class="s" x="82" y="40" width="34" height="28"/><path class="s t" d="M99 40 L99 68"/>
<rect class="s r" x="84" y="122" width="34" height="28"/><path class="s t r" d="M101 122 L101 150"/>
<path class="s" d="M64 54 Q100 22 136 54 M128 46 L136 54 L126 58"/>
<path class="s r" d="M138 138 Q100 168 62 138 M72 134 L62 138 L68 148"/>`},
{id:"rirekisho",kanji:"履歴書",kana:"りれきしょ",romaji:"rirekisho",en:"résumé",lesson:14,art:`<path class="s" d="M50 30 L132 30 L150 48 L150 168 L50 168 Z M132 30 L132 48 L150 48"/>
<rect class="s r" x="104" y="58" width="32" height="40"/>
<circle class="fr" cx="120" cy="72" r="7"/><path class="fr" d="M108 98 Q108 82 120 82 Q132 82 132 98 Z"/>
<path class="s t" d="M62 64 L94 64 M62 80 L94 80 M62 112 L138 112 M62 128 L138 128 M62 144 L118 144"/>`},
{id:"kurisumasu",kana:"クリスマス",romaji:"kurisumasu",en:"Christmas",lesson:14,art:`<path class="s" d="M100 40 L70 80 L84 80 L58 116 L76 116 L44 154 L156 154 L124 116 L142 116 L116 80 L130 80 Z"/>
<rect class="s" x="90" y="154" width="20" height="14"/>
<path class="fr" d="M100 22 L105 34 L118 34 L108 42 L112 54 L100 46 L88 54 L92 42 L82 34 L95 34 Z"/>
<circle class="fr" cx="88" cy="94" r="5"/><circle class="fr" cx="114" cy="106" r="5"/><circle class="fr" cx="76" cy="138" r="5"/><circle class="fr" cx="124" cy="140" r="5"/>`},
{id:"barentaindee",kana:"バレンタインデー",romaji:"barentaindee",en:"Valentine's Day",lesson:14,art:`<path class="fr" d="M96 155 C41 109 22 72 50 45 C73 22 96 40 96 63 C96 40 119 22 142 45 C170 72 151 109 96 155 Z"/>
<path class="s" d="M96 155 C41 109 22 72 50 45 C73 22 96 40 96 63 C96 40 119 22 142 45 C170 72 151 109 96 155 Z"/>
<path class="s" d="M96 64 L96 154"/>
<path class="s" d="M96 64 Q76 40 70 56 Q74 66 96 64 Q116 40 122 56 Q118 66 96 64 Z" style="fill:#fff"/>
<path class="fr" d="M152 58 C140 48 136 40 142 34 C147 29 152 33 152 38 C152 33 157 29 162 34 C168 40 164 48 152 58 Z"/>`},
{id:"howaitodee",kana:"ホワイトデー",romaji:"howaitodee",en:"\"White Day\" (another gift-giving day)",lesson:14,art:`<rect class="s" x="46" y="96" width="92" height="66"/>
<rect class="s" x="40" y="80" width="104" height="18"/>
<path class="s r" d="M92 80 L92 162 M92 80 Q70 54 64 70 Q68 80 92 80 Q114 54 120 70 Q116 80 92 80"/>
<path class="s" d="M150 65 C131 49 124 36 134 27 C142 19 150 25 150 33 C150 25 158 19 166 27 C176 36 169 49 150 65 Z"/>
<path class="s t r" d="M164 82 Q172 104 150 116 M158 112 L150 116 L154 124"/>`},
{id:"hoshii",kanji:"欲しい",kana:"ほしい",romaji:"hoshii",en:"to want",lesson:14,art:`<circle class="s" cx="56" cy="96" r="13"/>
<path class="s" d="M56 109 L56 161 M56 161 L44 197 M56 161 L68 197 M56 123 L82 106 M56 123 L80 120"/>
<circle class="s" cx="82" cy="70" r="4"/><circle class="s" cx="94" cy="56" r="6"/>
<path class="s" d="M100 28 Q122 18 144 28 Q172 30 168 58 Q174 82 146 84 Q120 92 104 78 Q84 70 96 50 Q90 34 100 28 Z"/>
<rect class="s r" x="118" y="46" width="30" height="24"/><path class="s t r" d="M133 46 L133 70 M133 46 Q122 34 120 42 Q124 46 133 46 Q144 34 146 42 Q142 46 133 46"/>`},
{id:"oshare",kana:"おしゃれ",romaji:"oshare",en:"fashionable; stylish",lesson:14,art:`<path class="f" d="M76 46 L124 46 L118 40 L112 22 L88 22 L82 40 Z"/>
<circle class="s" cx="100" cy="58" r="13"/>
<path class="f" d="M88 56 L112 56 L110 62 L90 62 Z"/>
<path class="s" d="M100 71 L100 120 M100 120 L86 158 M100 120 L118 156 M100 84 L76 74 M100 84 L124 106 L114 120"/>
<path class="fr" d="M146 40 L150 52 L162 56 L150 60 L146 72 L142 60 L130 56 L142 52 Z"/>
<path class="fr" d="M48 98 L51 106 L59 109 L51 112 L48 120 L45 112 L37 109 L45 106 Z"/>`},
{id:"kechi",kana:"けち",romaji:"kechi",en:"stingy; cheap",lesson:14,art:`<circle class="s" cx="58" cy="54" r="13"/>
<path class="s" d="M58 67 L58 119 M58 119 L46 155 M58 119 L70 155 M58 81 L88 96 M58 81 L88 112"/>
<path class="s" d="M60 48 L66 46 M50 48 L56 50"/>
<path class="s r" d="M96 86 Q86 74 100 70 L120 70 Q134 74 124 86 Q156 104 146 140 Q140 156 110 156 Q80 156 74 140 Q66 108 96 86 Z M96 86 L124 86"/>
<circle class="fr" cx="110" cy="122" r="12"/>
<path class="s t" d="M152 54 L170 40 M154 70 L174 66"/>`},
{id:"okuru",kanji:"送る",kana:"おくる",romaji:"okuru",en:"to send",lesson:14,art:`<rect class="s" x="80" y="70" width="84" height="56" rx="4"/>
<path class="s" d="M80 70 L122 104 L164 70"/>
<path class="fr" d="M114 112 L130 112 L130 124 L114 124 Z"/>
<path class="s r" d="M30 82 L66 82 M40 98 L68 98 M26 114 L66 114"/>
<path class="s t" d="M90 150 Q120 140 150 150 M140 144 L150 150 L140 156"/>`},
{id:"niau",kanji:"似合う",kana:"にあう",romaji:"niau",en:"to look good (on somebody)",lesson:14,art:`<circle class="s" cx="64" cy="56" r="13"/>
<path class="s" d="M64 69 L64 121 M64 121 L52 157 M64 121 L76 157 M64 83 L42 105 M64 83 L86 105"/>
<ellipse class="s" cx="138" cy="92" rx="30" ry="50"/>
<circle class="s t" cx="138" cy="74" r="10"/><path class="s t" d="M138 84 L138 116 M138 94 L124 108 M138 94 L152 108"/>
<path class="s" d="M138 142 L138 160 M120 160 L156 160"/>
<path class="s r" d="M30 38 L40 50 L58 26"/>`},
{id:"akirameru",kana:"あきらめる",romaji:"akirameru",en:"to give up",lesson:14,art:`<circle class="s" cx="86" cy="86" r="13"/>
<path class="s" d="M84 99 L76 132 L104 138 L104 160 M76 132 L60 158 M80 108 L104 112 M80 108 L60 128"/>
<path class="s" d="M104 112 L126 40"/>
<path class="s" d="M126 40 Q146 32 160 46 Q148 56 166 66 Q150 74 118 66" style="fill:#fff"/>
<path class="s t r" d="M70 70 L64 62 M86 66 L86 58 M102 70 L108 62"/>`},
{id:"ageru",kana:"あげる",romaji:"ageru",en:"to give (to others)",lesson:14,art:`<circle class="s" cx="56" cy="56" r="13"/>
<path class="s" d="M56 69 L56 121 M56 121 L44 157 M56 121 L68 157 M56 83 L96 90 M56 83 L34 108"/>
<rect class="s r" x="96" y="76" width="30" height="26"/><path class="s t r" d="M111 76 L111 102 M96 89 L126 89"/>
<path class="s r" d="M134 70 L166 70 M154 58 L166 70 L154 82"/>
<path class="s t" d="M48 52 L52 56 L62 48"/>`},
{id:"kureru",kana:"くれる",romaji:"kureru",en:"to give (me)",lesson:14,art:`<circle class="s" cx="48" cy="56" r="13"/>
<path class="s" d="M48 69 L48 121 M48 121 L36 157 M48 121 L60 157 M48 83 L76 92 M48 83 L48 100"/>
<circle class="fr" cx="48" cy="94" r="5"/>
<circle class="s" cx="156" cy="64" r="11"/>
<path class="s" d="M156 75 L156 127 M156 127 L144 163 M156 127 L168 163 M156 89 L118 96 M156 89 L172 110"/>
<rect class="s r" x="88" y="80" width="30" height="26"/><path class="s t r" d="M103 80 L103 106 M88 93 L118 93"/>
<path class="s r" d="M128 60 L92 60 M104 48 L92 60 L104 72"/>`},
{id:"dekiru14",kana:"できる",romaji:"dekiru",en:"to come into existence; to be made",lesson:14,art:`<path class="s" d="M30 140 L170 140"/>
<path class="s t" d="M50 150 L70 150 M120 152 L150 152 M86 160 L104 160"/>
<path class="s" d="M100 140 L100 86"/>
<path class="s" d="M100 104 Q72 104 66 80 Q92 76 100 104 Z M100 92 Q126 92 134 64 Q106 62 100 92 Z"/>
<path class="s r" d="M58 52 L66 62 M100 36 L100 50 M142 44 L134 54 M48 92 L60 94"/>`},
{id:"soudansuru",kanji:"相談する",kana:"そうだんする",romaji:"soudan suru",en:"to consult",lesson:14,art:`<circle class="s" cx="46" cy="72" r="12"/>
<path class="s" d="M46 84 L46 136 M46 136 L34 172 M46 136 L58 172 M46 98 L24 120 M46 98 L68 120"/>
<circle class="s" cx="154" cy="72" r="12"/>
<path class="s" d="M154 84 L154 136 M154 136 L142 172 M154 136 L166 172 M154 98 L132 120 M154 98 L176 120"/>
<path class="s" d="M58 28 L104 28 Q112 28 112 36 L112 50 Q112 58 104 58 L76 58 L66 68 L68 58 L58 58 Q50 58 50 50 L50 36 Q50 28 58 28 Z"/>
<path class="s r" d="M96 70 L142 70 Q150 70 150 78 L150 92 Q150 100 142 100 L132 100 L134 110 L124 100 L96 100 Q88 100 88 92 L88 78 Q88 70 96 70 Z"/>
<path class="s t" d="M64 43 L98 43 M102 85 L136 85"/>`},
{id:"chuuisuru",kanji:"注意する",kana:"ちゅういする",romaji:"chuui suru",en:"to give warning; to watch out",lesson:14,art:`<circle class="s" cx="52" cy="58" r="13"/>
<path class="s" d="M52 71 L52 123 M52 123 L40 159 M52 123 L64 159 M52 85 L82 70 M52 85 L32 108"/>
<path class="s r" d="M128 36 L170 110 L86 110 Z"/>
<path class="s r" d="M128 60 L128 88"/><circle class="fr" cx="128" cy="99" r="4"/>
<path class="s t" d="M86 62 L92 56 M88 74 L96 74"/>`},
{id:"puropoozusuru",kana:"プロポーズする",romaji:"puropoozu suru",en:"to propose marriage",lesson:14,art:`<circle class="s" cx="60" cy="74" r="12"/>
<path class="s" d="M62 86 L68 124 L96 124 L96 152 M68 124 L48 152 L66 152 M64 96 L96 98"/>
<path class="s" d="M96 88 L120 88 L120 106 L96 106 Z"/>
<circle class="s r" cx="108" cy="80" r="7"/>
<circle class="s" cx="148" cy="50" r="13"/>
<path class="s" d="M148 63 L128 125 L168 125 Z M140 125 L140 153 M156 125 L156 153 M144 75 L124 99 M152 75 L172 99"/>
<path class="fr" d="M110 53 C99 44 96 37 101 31 C106 27 110 30 110 35 C110 30 114 27 119 31 C124 37 121 44 110 53 Z"/>`},
{id:"kun",kanji:"〜君",kana:"〜くん",romaji:"kun",en:"Mr./Ms. ... (casual)",lesson:14,art:`<path class="f" d="M84 42 Q86 26 100 26 Q114 26 116 42 Z M116 40 L134 42 L116 44 Z"/>
<circle class="s" cx="100" cy="52" r="13"/>
<path class="s" d="M100 65 L100 112 M100 112 L88 148 M100 112 L112 148 M100 78 L80 98 M100 78 L126 56"/>
<rect class="fr" x="102" y="82" width="20" height="14" rx="2"/>
<path class="s t r" d="M134 44 L144 38 M136 56 L148 56"/>`},
{id:"tachi",kana:"〜たち",romaji:"tachi",en:"[makes a noun plural]",lesson:14,art:`<circle class="s" cx="40" cy="72" r="11"/>
<path class="s" d="M40 83 L40 120 M40 120 L32 150 M40 120 L48 150 M40 94 L28 110 M40 94 L52 110"/>
<path class="s r" d="M62 108 L90 108 M80 98 L90 108 L80 118"/>
<circle class="s" cx="114" cy="72" r="10"/><circle class="s" cx="140" cy="64" r="10"/><circle class="s" cx="164" cy="72" r="10"/>
<path class="s" d="M114 82 L114 120 L106 150 M114 120 L122 150 M140 74 L140 116 L132 146 M140 116 L148 146 M164 82 L164 120 L156 150 M164 120 L172 150"/>`},
{id:"watashitachi",kanji:"私たち",kana:"わたしたち",romaji:"watashitachi",en:"we",lesson:14,art:`<circle class="s" cx="62" cy="72" r="11"/><circle class="s" cx="100" cy="64" r="12"/><circle class="s" cx="138" cy="72" r="11"/>
<path class="s" d="M62 83 L62 122 L54 150 M62 122 L70 150 M138 83 L138 122 L130 150 M138 122 L146 150"/>
<path class="s" d="M100 76 L100 118 L92 148 M100 118 L108 148 M100 88 L112 96 L102 100"/>
<path class="s" d="M62 94 L82 92 M138 94 L118 92"/>
<ellipse class="s r" cx="100" cy="106" rx="72" ry="64"/>`},
{id:"konna",kana:"こんな〜",romaji:"konna",en:"... like this; this kind of ...",lesson:14,art:`<circle class="s" cx="50" cy="62" r="13"/>
<path class="s" d="M50 75 L50 127 M50 127 L38 163 M50 127 L62 163 M50 89 L84 74 M50 89 L84 104"/>
<rect class="s" x="86" y="48" width="66" height="72" rx="3"/>
<path class="fr" d="M119 62 L125 78 L142 78 L128 88 L133 104 L119 94 L105 104 L110 88 L96 78 L113 78 Z"/>
<path class="s t r" d="M160 44 L170 36 M162 84 L174 84 M160 124 L170 132"/>`},
{id:"kyuuni",kanji:"急に",kana:"きゅうに",romaji:"kyuuni",en:"suddenly",lesson:14,art:`<path class="fr" d="M108 24 L72 92 L98 92 L82 150 L132 72 L104 72 L124 24 Z"/>
<circle class="s" cx="146" cy="110" r="11"/>
<path class="s" d="M146 121 L146 150 M146 150 L136 168 M146 150 L156 168 M146 130 L130 116 M146 130 L164 116"/>
<path class="s t" d="M40 60 L56 64 M36 82 L54 82 M40 104 L56 100"/>`},
{id:"choudo",kana:"ちょうど",romaji:"choudo",en:"exactly",lesson:14,art:`<circle class="s" cx="96" cy="104" r="56"/>
<circle class="s" cx="96" cy="104" r="36"/>
<circle class="fr" cx="96" cy="104" r="14"/>
<path class="s" d="M96 104 L166 34 M152 34 L166 34 L166 48 M146 40 L160 54"/>
<path class="s t r" d="M70 70 L62 62 M122 138 L130 146"/>`},
{id:"yoku14",kana:"よく",romaji:"yoku",en:"well",lesson:14,art:`<path class="s" d="M60 96 L84 96 L98 56 Q104 44 112 50 Q116 56 112 72 L108 92 L142 92 Q154 94 150 106 Q156 112 148 120 Q154 128 144 134 Q148 144 136 146 L84 146 L60 146 Z"/>
<path class="s" d="M84 96 L84 146"/>
<path class="fr" d="M150 34 L154 46 L166 50 L154 54 L150 66 L146 54 L134 50 L146 46 Z"/>
<path class="s t r" d="M48 64 L56 74 M40 90 L52 92"/>`},
{id:"saa",kana:"さあ",romaji:"saa",en:"I am not sure ...",lesson:14,art:`<circle class="s" cx="100" cy="66" r="14"/>
<path class="s" d="M100 80 L100 128 M100 128 L88 162 M100 128 L112 162"/>
<path class="s" d="M100 92 L76 96 L66 74 M100 92 L124 96 L134 74"/>
<path class="s t" d="M88 64 L94 60 M106 60 L112 64 M94 74 L106 74"/>
<path class="s r" d="M140 36 Q140 24 152 24 Q164 24 164 36 Q164 46 152 50 L152 58"/><circle class="fr" cx="152" cy="68" r="4"/>`},
{id:"doushitaraii",kana:"どうしたらいい",romaji:"doushitara ii",en:"what should one do",lesson:14,art:`<path class="s t" d="M100 168 L100 120 M100 120 L40 70 M100 120 L160 70"/>
<path class="s" d="M100 120 L100 40"/>
<path class="s r" d="M100 48 L56 48 L46 56 L56 64 L100 64 M100 74 L144 74 L154 82 L144 90 L100 90"/>
<circle class="s" cx="60" cy="118" r="10"/>
<path class="s" d="M60 128 L60 154 M60 154 L52 168 M60 154 L68 168 M60 136 L74 126 L66 112"/>
<path class="s t r" d="M130 120 Q130 110 140 110 Q150 110 150 120 Q150 126 140 130 L140 136"/>`},
{id:"ko",kanji:"〜個",kana:"〜こ",romaji:"ko",en:"[counter for smaller items]",lesson:14,art:`<circle class="fr" cx="58" cy="118" r="20"/><circle class="fr" cx="100" cy="118" r="20"/><circle class="fr" cx="142" cy="118" r="20"/>
<circle class="fr" cx="79" cy="80" r="20"/><circle class="fr" cx="121" cy="80" r="20"/>
<path class="s" d="M58 98 L60 90 M100 98 L102 90 M142 98 L144 90 M79 60 L81 52 M121 60 L123 52"/>
<path class="s" d="M30 140 L170 140"/>`},
{id:"satsu",kanji:"〜冊",kana:"〜さつ",romaji:"satsu",en:"[counter for bound volumes]",lesson:14,art:`<rect class="s" x="44" y="128" width="112" height="24" rx="3"/>
<rect class="fr" x="54" y="104" width="100" height="24" rx="3"/>
<rect class="s" x="40" y="80" width="108" height="24" rx="3"/>
<rect class="s" x="56" y="56" width="96" height="24" rx="3"/>
<path class="s t" d="M60 128 L60 152 M66 56 L66 80 M52 80 L52 104"/>
<path style="fill:#fff" d="M66 112 L66 120 L140 120 L140 112 Z"/>`},
{id:"dai",kanji:"〜台",kana:"〜だい",romaji:"dai",en:"[counter for equipment]",lesson:14,art:`<path class="s" d="M28 92 L36 70 L68 70 L80 92 L86 92 L86 112 L28 112 Z M40 76 L66 76 L72 88 L36 88"/>
<circle class="f" cx="42" cy="114" r="7"/><circle class="f" cx="72" cy="114" r="7"/>
<path class="s r" d="M110 92 L118 70 L150 70 L162 92 L172 92 L172 112 L110 112 Z M122 76 L148 76 L154 88 L118 88"/>
<circle class="f" cx="124" cy="114" r="7"/><circle class="f" cx="156" cy="114" r="7"/>
<path class="s t" d="M24 128 L176 128"/>`},
{id:"hiki",kanji:"〜匹",kana:"〜ひき",romaji:"hiki",en:"[counter for smaller animals]",lesson:14,art:`<ellipse class="s" cx="64" cy="124" rx="28" ry="22"/><circle class="s" cx="54" cy="90" r="16"/>
<path class="s" d="M42 80 L42 66 L52 76 M66 80 L66 66 L56 76 M92 126 Q106 116 100 100"/>
<ellipse class="s" cx="136" cy="124" rx="28" ry="22"/><circle class="s" cx="146" cy="90" r="16"/>
<path class="s" d="M134 80 L134 66 L144 76 M158 80 L158 66 L148 76 M108 126 Q94 116 100 100"/>
<path class="fr" d="M80 52 Q100 36 118 52 Q100 64 80 52 Z M118 52 L128 44 L128 60 Z"/>`},
{id:"hon_counter",kanji:"〜本",kana:"〜ほん",romaji:"hon",en:"[counter for long objects]",lesson:14,art:`<path class="s" d="M44 160 L44 92 Q44 80 54 74 L54 50 L66 50 L66 74 Q76 80 76 92 L76 160 Z"/>
<path class="s r" d="M84 160 L84 92 Q84 80 94 74 L94 50 L106 50 L106 74 Q116 80 116 92 L116 160 Z"/>
<path class="s" d="M124 160 L124 92 Q124 80 134 74 L134 50 L146 50 L146 74 Q156 80 156 92 L156 160 Z"/>
<rect class="fr" x="88" y="104" width="24" height="24"/>
<path class="s t" d="M30 160 L170 160"/>`}
];