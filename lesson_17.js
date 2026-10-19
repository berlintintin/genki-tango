/* =======================================================================
   lesson_17.js  —  Doodle Tango vocabulary, Lesson 17  (Genki II)
   Loaded on demand by index.html when the chosen range includes lesson 17.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[17] = [
{id:"akachan_17",kanji:"赤ちゃん",kana:"あかちゃん",romaji:"akachan",en:"baby",lesson:17,art:`<circle class="s" cx="100" cy="78" r="36"/>
<path class="s t" d="M84 74 Q89 69 94 74 M106 74 Q111 69 116 74 M100 42 Q110 34 104 28"/>
<circle class="s r" cx="100" cy="96" r="7"/>
<path class="s" d="M70 124 Q100 110 130 124 L124 160 L76 160 Z"/>
<path class="s t" d="M80 138 L120 138"/>`},
{id:"okyakusan_17",kanji:"お客さん",kana:"おきゃくさん",romaji:"okyakusan",en:"guest; visitor; client; customer",lesson:17,art:`<rect class="s" x="34" y="40" width="58" height="124"/>
<path class="s" d="M34 40 L60 50 L60 170 L34 164"/><circle class="f" cx="54" cy="106" r="3"/>
<circle class="s" cx="128" cy="62" r="13"/>
<path class="s" d="M128 75 L128 124 M128 124 L116 162 M128 124 L140 162 M128 90 L108 76 M128 90 L146 108"/>
<rect class="s r" x="140" y="108" width="26" height="22" rx="3"/>`},
{id:"shushou_17",kanji:"首相",kana:"しゅしょう",romaji:"shushou",en:"prime minister",lesson:17,art:`<circle class="s" cx="100" cy="44" r="13"/>
<path class="s" d="M76 84 Q100 62 124 84"/>
<path class="s" d="M66 90 L134 90 L124 166 L76 166 Z"/>
<path class="s t" d="M100 90 L82 70 M82 70 L80 64"/>
<path class="s r" d="M40 166 L40 54 M40 56 L68 64 L40 74"/>
<path class="s t r" d="M160 166 L160 54 M160 56 L132 64 L160 74"/>`},
{id:"sarariiman_17",kana:"サラリーマン",romaji:"sarariiman",en:"salaryman; office worker",lesson:17,art:`<circle class="s" cx="96" cy="44" r="14"/>
<path class="s" d="M96 58 L96 118 M96 118 L84 158 M96 118 L108 158 M96 74 L76 104 M96 74 L120 102"/>
<path class="s t" d="M90 60 L96 70 L102 60 M96 70 L92 96 L96 100 L100 96 Z"/>
<rect class="s r" x="112" y="104" width="40" height="30" rx="4"/>
<path class="s r" d="M124 104 L124 96 L140 96 L140 104"/>`},
{id:"kyuuryou_17",kanji:"給料",kana:"きゅうりょう",romaji:"kyuuryou",en:"salary",lesson:17,art:`<rect class="s" x="34" y="56" width="98" height="64" rx="4"/>
<path class="s" d="M34 56 L83 94 L132 56"/>
<ellipse class="s r" cx="142" cy="150" rx="24" ry="8"/>
<path class="s r" d="M118 150 L118 136 M166 150 L166 136"/>
<ellipse class="s r" cx="142" cy="136" rx="24" ry="8"/>
<ellipse class="fr" cx="142" cy="122" rx="24" ry="8"/>`},
{id:"zangyou_17",kanji:"残業",kana:"ざんぎょう",romaji:"zangyou",en:"overtime work",lesson:17,art:`<path class="fr" d="M150 34 A20 20 0 1 0 166 66 A16 16 0 1 1 150 34 Z"/>
<rect class="s" x="56" y="80" width="64" height="44" rx="3"/>
<path class="s" d="M44 132 L132 132 L124 124 L52 124 Z"/>
<path class="s" d="M28 140 L172 140 M40 140 L40 168 M160 140 L160 168"/>
<circle class="s t" cx="56" cy="46" r="18"/><path class="s t" d="M56 34 L56 46 L64 50"/>`},
{id:"panda_17",kana:"パンダ",romaji:"panda",en:"panda",lesson:17,art:`<circle class="s" cx="100" cy="100" r="50"/>
<circle class="f" cx="62" cy="58" r="14"/><circle class="f" cx="138" cy="58" r="14"/>
<ellipse class="f" cx="80" cy="96" rx="12" ry="16" transform="rotate(30 80 96)"/>
<ellipse class="f" cx="120" cy="96" rx="12" ry="16" transform="rotate(-30 120 96)"/>
<ellipse class="f" cx="100" cy="120" rx="8" ry="5"/>
<path class="s r" d="M28 168 L60 130 M40 154 L50 150"/>`},
{id:"kontakuto_17",kana:"コンタクト",romaji:"kontakuto",en:"contact lenses",lesson:17,art:`<path class="s" d="M30 80 Q100 30 170 80 Q100 130 30 80 Z"/>
<circle class="s" cx="100" cy="80" r="20"/><circle class="f" cx="100" cy="80" r="8"/>
<path class="s" d="M84 170 L96 136 Q100 126 110 132 L122 170"/>
<path class="s r" d="M88 126 Q102 110 118 126"/>`},
{id:"hige_17",kana:"ひげ",romaji:"hige",en:"beard",lesson:17,art:`<circle class="s" cx="100" cy="86" r="48"/>
<circle class="f" cx="82" cy="74" r="4"/><circle class="f" cx="118" cy="74" r="4"/>
<path class="s" d="M88 104 Q100 98 112 104"/>
<path class="fr" d="M54 96 Q56 168 100 170 Q144 168 146 96 Q140 120 120 118 Q100 112 80 118 Q60 120 54 96 Z"/>
<path style="fill:#fff" d="M90 128 Q100 136 110 128 Z"/>`},
{id:"buutsu_17",kana:"ブーツ",romaji:"buutsu",en:"boots",lesson:17,art:`<path class="s" d="M70 34 L120 34 L120 120 L156 132 Q166 136 164 152 L66 152 L70 34 Z"/>
<path class="s t" d="M70 54 L120 54"/>
<path class="s r" d="M60 162 L170 162 M66 152 L60 162 M164 152 L170 162"/>
<path class="s t" d="M96 64 L106 70 M96 78 L106 84 M96 92 L106 98"/>`},
{id:"kagi_17",kanji:"鍵",kana:"かぎ",romaji:"kagi",en:"lock; key",lesson:17,art:`<path class="s" d="M58 86 L58 62 Q58 34 86 34 Q114 34 114 62 L114 86"/>
<rect class="s" x="44" y="86" width="84" height="70" rx="8"/>
<circle class="f" cx="86" cy="114" r="7"/><path class="s" d="M86 118 L86 134"/>
<circle class="s r" cx="152" cy="62" r="12"/>
<path class="s r" d="M152 74 L152 124 M152 104 L162 104 M152 116 L160 116"/>`},
{id:"takarakuji_17",kanji:"宝くじ",kana:"たからくじ",romaji:"takarakuji",en:"lottery",lesson:17,art:`<rect class="s" x="30" y="64" width="140" height="74" rx="6"/>
<path class="s t" d="M66 64 L66 72 M66 80 L66 88 M66 96 L66 104 M66 112 L66 120 M66 128 L66 138"/>
<path class="fr" d="M118 76 L124 92 L142 92 L128 102 L134 120 L118 108 L102 120 L108 102 L94 92 L112 92 Z"/>
<path class="s t" d="M40 84 L56 84 M40 100 L56 100 M40 116 L56 116"/>`},
{id:"kami_paper_17",kanji:"紙",kana:"かみ",romaji:"kami",en:"paper",lesson:17,art:`<path class="s" d="M56 30 L124 30 L148 54 L148 168 L56 168 Z"/>
<path class="s r" d="M124 30 L124 54 L148 54"/>
<path class="s t" d="M72 74 L132 74 M72 94 L132 94 M72 114 L132 114 M72 134 L112 134"/>`},
{id:"supuun_17",kana:"スプーン",romaji:"supuun",en:"spoon",lesson:17,art:`<ellipse class="fr" cx="78" cy="68" rx="26" ry="36" transform="rotate(-40 78 68)"/>
<ellipse class="s" cx="78" cy="68" rx="26" ry="36" transform="rotate(-40 78 68)"/>
<path class="s" d="M98 92 L160 160"/>
<path class="s t" d="M66 52 Q72 46 80 48"/>`},
{id:"oyu_17",kanji:"お湯",kana:"おゆ",romaji:"oyu",en:"hot water",lesson:17,art:`<path class="s" d="M38 104 L162 104 Q158 160 100 162 Q42 160 38 104 Z"/>
<path class="s t" d="M56 120 Q68 114 80 120 Q92 126 104 120 Q116 114 128 120 Q138 124 146 120"/>
<path class="s r" d="M72 92 Q62 78 72 64 Q82 50 72 36 M100 92 Q90 78 100 64 Q110 50 100 36 M128 92 Q118 78 128 64 Q138 50 128 36"/>`},
{id:"denshirenji_17",kanji:"電子レンジ",kana:"でんしレンジ",romaji:"denshi renji",en:"microwave oven",lesson:17,art:`<rect class="s" x="28" y="52" width="144" height="100" rx="8"/>
<rect class="s" x="40" y="64" width="90" height="76" rx="4"/>
<ellipse class="fr" cx="85" cy="122" rx="28" ry="7"/>
<path class="s t" d="M142 64 L142 140"/>
<circle class="s t" cx="157" cy="80" r="6"/><circle class="s t" cx="157" cy="100" r="6"/>
<path class="s t" d="M60 160 L60 152 M140 160 L140 152"/>`},
{id:"hiitaa_17",kana:"ヒーター",romaji:"hiitaa",en:"heater",lesson:17,art:`<rect class="s" x="54" y="76" width="92" height="76" rx="8"/>
<path class="s t" d="M68 92 L132 92 M68 106 L132 106 M68 120 L132 120 M68 134 L132 134"/>
<path class="s" d="M66 152 L60 166 M134 152 L140 166"/>
<path class="s r" d="M72 64 Q64 52 72 40 Q80 28 72 24 M100 64 Q92 52 100 40 Q108 28 100 24 M128 64 Q120 52 128 40 Q136 28 128 24"/>`},
{id:"nyuusu_17",kana:"ニュース",romaji:"nyuusu",en:"news",lesson:17,art:`<rect class="s" x="34" y="56" width="132" height="92" rx="8"/>
<path class="s" d="M80 56 L66 32 M120 56 L134 32"/>
<circle class="s" cx="84" cy="94" r="12"/><path class="s" d="M62 136 Q84 106 106 136"/>
<path class="s r" d="M118 82 L154 82 M118 98 L154 98 M118 114 L146 114"/>
<path class="s" d="M70 148 L64 162 M130 148 L136 162"/>`},
{id:"kaji_17",kanji:"火事",kana:"かじ",romaji:"kaji",en:"fire",lesson:17,art:`<path class="s" d="M40 98 L100 50 L160 98 M52 90 L52 166 L148 166 L148 90"/>
<rect class="s" x="86" y="124" width="28" height="42"/>
<path class="fr" d="M120 92 Q112 70 130 52 Q130 68 142 72 Q146 56 140 40 Q170 62 160 98 Q150 112 132 108 Q122 104 120 92 Z"/>
<path class="fr" d="M64 116 Q58 98 72 86 Q74 98 82 100 Q92 110 84 120 Q74 126 64 116 Z"/>`},
{id:"ryokougaisha_17",kanji:"旅行会社",kana:"りょこうがいしゃ",romaji:"ryokougaisha",en:"travel agency",lesson:17,art:`<path class="s" d="M32 84 L168 84 L168 166 L32 166 Z"/>
<path class="s" d="M26 84 L44 58 L156 58 L174 84"/>
<path class="s t" d="M60 58 L52 84 M84 58 L80 84 M116 58 L120 84 M140 58 L148 84"/>
<rect class="s" x="46" y="100" width="62" height="46" rx="2"/><rect class="s" x="124" y="112" width="30" height="54"/>
<path class="fr" d="M56 128 L98 112 L102 116 L80 126 L86 138 L80 140 L72 130 L60 134 Z"/>`},
{id:"shoppingumooru_17",kana:"ショッピングモール",romaji:"shoppingu mooru",en:"shopping mall",lesson:17,art:`<path class="s" d="M24 76 L176 76 L176 166 L24 166 Z"/>
<path class="s" d="M70 76 Q100 36 130 76"/>
<rect class="s" x="86" y="120" width="28" height="46"/>
<rect class="s t" x="36" y="92" width="36" height="28"/><rect class="s t" x="128" y="92" width="36" height="28"/>
<path class="s r" d="M40 132 L68 132 L64 162 L44 162 Z M48 132 Q54 122 60 132"/>
<path class="s r" d="M132 132 L160 132 L156 162 L136 162 Z M140 132 Q146 122 152 132"/>`},
{id:"ryou_17",kanji:"寮",kana:"りょう",romaji:"ryou",en:"dormitory",lesson:17,art:`<rect class="s" x="46" y="30" width="108" height="138"/>
<path class="s t" d="M60 48 L76 48 L76 64 L60 64 Z M92 48 L108 48 L108 64 L92 64 Z M124 48 L140 48 L140 64 L124 64 Z M60 80 L76 80 L76 96 L60 96 Z M124 80 L140 80 L140 96 L124 96 Z M60 112 L76 112 L76 128 L60 128 Z M92 112 L108 112 L108 128 L92 128 Z M124 112 L140 112 L140 128 L124 128 Z"/>
<rect class="fr" x="92" y="80" width="16" height="16"/>
<rect class="s" x="88" y="144" width="24" height="24"/>`},
{id:"chigai_17",kanji:"違い",kana:"ちがい",romaji:"chigai",en:"difference",lesson:17,art:`<rect class="s" x="28" y="60" width="62" height="62" rx="6"/><rect class="s" x="110" y="60" width="62" height="62" rx="6"/>
<circle class="s" cx="59" cy="91" r="16"/>
<path class="s r" d="M141 74 L158 106 L124 106 Z"/>
<path class="s t r" d="M90 140 L58 156 M110 140 L142 156"/>
<circle class="fr" cx="100" cy="140" r="5"/>`},
{id:"himitsu_17",kanji:"秘密",kana:"ひみつ",romaji:"himitsu",en:"secret",lesson:17,art:`<circle class="s" cx="96" cy="96" r="54"/>
<circle class="f" cx="76" cy="80" r="5"/><circle class="f" cx="116" cy="80" r="5"/>
<path class="s" d="M80 118 L112 118"/>
<path class="fr" d="M90 92 Q96 86 102 92 L102 150 L90 150 Z"/>
<path class="s t r" d="M152 60 Q160 66 152 72 M162 52 Q174 66 162 80"/>`},
{id:"junbi_17",kanji:"準備",kana:"じゅんび",romaji:"junbi",en:"preparation",lesson:17,art:`<rect class="s" x="48" y="38" width="104" height="132" rx="6"/>
<rect class="s" x="80" y="30" width="40" height="16" rx="4"/>
<path class="s r" d="M60 72 L68 80 L82 64 M60 108 L68 116 L82 100 M60 144 L68 152 L82 136"/>
<path class="s t" d="M94 74 L138 74 M94 110 L138 110 M94 146 L126 146"/>`},
{id:"jibun_17",kanji:"自分",kana:"じぶん",romaji:"jibun",en:"oneself",lesson:17,art:`<ellipse class="s r" cx="132" cy="96" rx="34" ry="60"/>
<circle class="s t" cx="132" cy="72" r="10"/><path class="s t" d="M132 82 L132 120 M132 120 L124 142 M132 120 L140 142 M132 94 L120 106"/>
<circle class="s" cx="60" cy="72" r="12"/>
<path class="s" d="M60 84 L60 128 M60 128 L50 160 M60 128 L70 160 M60 98 L76 110"/>`},
{id:"abunai_17",kanji:"危ない",kana:"あぶない",romaji:"abunai",en:"dangerous",lesson:17,art:`<path class="s r" d="M100 32 L170 156 L30 156 Z"/>
<path class="s r" d="M100 46 L158 148 L42 148 Z"/>
<path class="f" d="M108 66 L84 112 L100 112 L90 140 L118 96 L102 96 L114 66 Z"/>`},
{id:"urayamashii_17",kana:"うらやましい",romaji:"urayamashii",en:"envious",lesson:17,art:`<circle class="s" cx="54" cy="72" r="14"/>
<path class="s" d="M54 86 L54 130 M54 130 L44 162 M54 130 L64 162 M54 100 L68 112"/>
<path class="s t" d="M48 70 L54 72 M58 70 L64 68"/>
<circle class="s" cx="136" cy="80" r="14"/>
<path class="s" d="M136 94 L136 134 M136 134 L126 164 M136 134 L146 164 M136 104 L150 76"/>
<path class="fr" d="M150 34 L155 48 L170 48 L158 57 L163 72 L150 63 L137 72 L142 57 L130 48 L145 48 Z"/>
<path class="s t r" d="M74 64 L120 54"/>`},
{id:"sukunai_17",kanji:"少ない",kana:"すくない",romaji:"sukunai",en:"a little; a few",lesson:17,art:`<path class="s" d="M28 90 L172 90 Q166 156 100 158 Q34 156 28 90 Z"/>
<ellipse class="s t" cx="100" cy="90" rx="72" ry="10"/>
<circle class="fr" cx="90" cy="138" r="6"/><circle class="fr" cx="110" cy="140" r="6"/>`},
{id:"tsugougawarui_17",kanji:"都合が悪い",kana:"つごうがわるい",romaji:"tsugou ga warui",en:"inconvenient; to have a scheduling conflict",lesson:17,art:`<rect class="s" x="34" y="44" width="132" height="120" rx="6"/>
<path class="s" d="M34 72 L166 72 M64 34 L64 54 M136 34 L136 54"/>
<path class="s t" d="M34 102 L166 102 M34 132 L166 132 M78 72 L78 164 M122 72 L122 164"/>
<path class="s r" d="M88 108 L114 128 M114 108 L88 128"/>
<circle class="s r" cx="101" cy="118" r="18"/>`},
{id:"tsuyoi_17",kanji:"強い",kana:"つよい",romaji:"tsuyoi",en:"strong",lesson:17,art:`<path class="s" d="M40 160 L40 120 Q40 104 60 104 L104 104 L104 72 Q104 40 82 40 Q70 40 70 52 Q70 60 82 62 L82 84"/>
<path class="fr" d="M86 104 Q90 66 126 70 Q158 76 150 112 Q144 140 104 138 L60 138 Q76 124 86 104 Z"/>
<path class="s" d="M40 160 L150 160 Q166 150 150 112"/>`},
{id:"saiaku_17",kanji:"最悪",kana:"さいあく",romaji:"saiaku",en:"the worst",lesson:17,art:`<path class="s" d="M48 66 Q48 40 76 44 Q90 26 112 38 Q140 30 148 54 Q170 60 160 78 L52 78 Q40 76 48 66 Z"/>
<path class="s r" d="M96 80 L84 104 L98 104 L88 126"/>
<path class="s" d="M64 108 L64 148 L84 148 L84 108 Z"/>
<path class="fr" d="M84 112 L120 110 Q132 112 128 122 Q136 126 130 134 Q136 140 128 146 L112 146 L118 166 Q118 172 110 168 L96 148 L84 146 Z"/>`},
{id:"erabu_17",kanji:"選ぶ",kana:"えらぶ",romaji:"erabu",en:"to choose; to select",lesson:17,art:`<rect class="s" x="28" y="44" width="40" height="40" rx="4"/>
<rect class="s r" x="80" y="44" width="40" height="40" rx="4"/>
<rect class="s" x="132" y="44" width="40" height="40" rx="4"/>
<path class="s" d="M100 98 L92 126 M100 98 L108 126 M96 104 L84 100"/>
<path class="s" d="M84 126 L84 164 L118 164 L118 132 Q118 124 110 126"/>
<path class="s t r" d="M100 30 L100 24 M86 34 L82 28 M114 34 L118 28"/>`},
{id:"oyuwowakasu_17",kanji:"お湯を沸かす",kana:"おゆをわかす",romaji:"oyu o wakasu",en:"to boil water",lesson:17,art:`<path class="s" d="M60 132 Q54 80 100 76 Q146 80 140 132 Z"/>
<path class="s" d="M60 98 L36 80 L40 72"/>
<path class="s" d="M76 76 Q100 50 124 76"/><circle class="f" cx="100" cy="60" r="5"/>
<path class="s" d="M48 140 L152 140"/>
<path class="fr" d="M70 166 Q64 154 72 144 Q78 152 80 166 Z M96 166 Q90 152 100 144 Q110 152 104 166 Z M122 166 Q120 152 128 144 Q136 154 130 166 Z"/>
<path class="s t r" d="M40 62 Q32 50 40 38 Q48 28 42 24"/>`},
{id:"kamiwotokasu_17",kanji:"髪をとかす",kana:"かみをとかす",romaji:"kami o tokasu",en:"to comb one's hair",lesson:17,art:`<circle class="s" cx="88" cy="100" r="38"/>
<path class="s" d="M50 96 Q48 50 92 50 Q132 52 128 96 M60 64 L56 140 M72 54 L68 150 M110 56 L118 150 M124 72 L130 140"/>
<rect class="fr" x="120" y="36" width="44" height="12" rx="3" transform="rotate(30 142 42)"/>
<path class="s t r" d="M126 54 L120 64 M134 58 L128 68 M142 62 L136 72 M150 66 L144 76"/>`},
{id:"higewosoru_17",kana:"ひげをそる",romaji:"hige o soru",en:"to shave one's beard",lesson:17,art:`<circle class="s" cx="86" cy="90" r="44"/>
<circle class="f" cx="72" cy="78" r="4"/><circle class="f" cx="100" cy="78" r="4"/>
<path class="s t" d="M56 104 Q60 132 86 134 Q112 132 116 104 M64 116 L66 120 M76 124 L78 128 M98 124 L100 128"/>
<rect class="fr" x="118" y="100" width="34" height="12" rx="2"/>
<path class="s" d="M150 106 L172 150"/>`},
{id:"nugu_17",kanji:"脱ぐ",kana:"ぬぐ",romaji:"nugu",en:"to take off (clothes)",lesson:17,art:`<path class="s" d="M58 80 L82 64 Q100 74 118 64 L142 80 L130 100 L122 94 L122 150 L78 150 L78 94 L70 100 Z"/>
<path class="s r" d="M100 54 L100 26 M88 38 L100 26 L112 38"/>
<path class="s t r" d="M58 80 L46 66 M142 80 L154 66"/>
<path class="s t" d="M84 66 Q100 78 116 66"/>`},
{id:"komu_17",kanji:"混む",kana:"こむ",romaji:"komu",en:"to get crowded",lesson:17,art:`<rect class="s" x="26" y="42" width="148" height="124" rx="10"/>
<path class="s" d="M38 82 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M66 74 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M94 82 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M138 80 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M52 114 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M82 118 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M112 112 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0"/>
<circle class="fr" cx="128" cy="76" r="12"/>
<path class="s t" d="M40 140 L160 140 M56 140 L56 166 M144 140 L144 166"/>`},
{id:"takarakujiniataru_17",kanji:"宝くじに当たる",kana:"たからくじにあたる",romaji:"takarakuji ni ataru",en:"to win a lottery",lesson:17,art:`<rect class="s" x="56" y="80" width="88" height="54" rx="5" transform="rotate(-10 100 107)"/>
<path class="s t" d="M78 82 L84 132"/>
<path class="fr" d="M114 92 L118 102 L130 102 L120 110 L124 122 L114 114 L104 122 L108 110 L98 102 L110 102 Z"/>
<path class="s r" d="M100 64 L100 40 M70 70 L56 52 M130 70 L144 52 M48 104 L28 104 M152 100 L172 100"/>
<circle class="fr" cx="42" cy="148" r="8"/><circle class="fr" cx="158" cy="152" r="8"/>`},
{id:"ireru_tea_17",kana:"いれる",romaji:"ireru",en:"to make tea, coffee, etc.",lesson:17,art:`<path class="s" d="M48 56 Q48 92 82 92 Q116 92 116 56 Z"/>
<path class="s" d="M116 62 L146 46 M48 64 Q32 64 34 76 Q36 86 50 82"/>
<path class="s" d="M68 56 L68 50 L96 50 L96 56"/>
<path class="s r" d="M146 46 Q156 70 146 106"/>
<path class="s" d="M114 112 L170 112 L164 152 Q162 162 150 162 L134 162 Q122 162 120 152 Z"/>
<ellipse class="fr" cx="142" cy="120" rx="20" ry="5"/>`},
{id:"umareru_17",kanji:"生まれる",kana:"うまれる",romaji:"umareru",en:"to be born",lesson:17,art:`<path class="s" d="M48 112 Q50 156 100 160 Q150 156 152 112 L134 102 L118 116 L100 100 L82 116 L66 102 Z"/>
<circle class="s" cx="100" cy="70" r="24"/>
<circle class="f" cx="92" cy="66" r="3"/><circle class="f" cx="108" cy="66" r="3"/>
<path class="s t" d="M94 78 Q100 82 106 78"/>
<path class="s r" d="M52 82 L40 72 M148 82 L160 72 M100 34 L100 24"/>`},
{id:"kagiwokakeru_17",kanji:"鍵をかける",kana:"かぎをかける",romaji:"kagi o kakeru",en:"to lock",lesson:17,art:`<rect class="s" x="40" y="30" width="96" height="140" rx="3"/>
<circle class="s" cx="112" cy="104" r="8"/>
<path class="s" d="M112 112 L112 120"/>
<path class="s" d="M118 104 L160 104 M150 104 L150 114 M158 104 L158 112"/>
<path class="s r" d="M144 72 Q170 74 168 96 M160 86 L168 98 L174 86"/>`},
{id:"tariru_17",kanji:"足りる",kana:"たりる",romaji:"tariru",en:"to be sufficient; to be enough",lesson:17,art:`<path class="s" d="M62 50 L138 50 L128 166 L72 166 Z"/>
<path class="fr" d="M66 86 L134 86 L128 166 L72 166 Z"/>
<path class="s" d="M58 86 L142 86"/>
<path class="s r" d="M146 62 L156 74 L174 46"/>`},
{id:"nareru_17",kanji:"慣れる",kana:"なれる",romaji:"nareru",en:"to get used to ...",lesson:17,art:`<circle class="s" cx="50" cy="82" r="24"/>
<path class="s" d="M42 75 L42 81 M58 75 L58 81 M140 75 L140 81 M156 75 L156 81"/>
<path class="s" d="M40 96 Q44 90 50 94 Q56 98 60 92"/>
<path class="s r" d="M84 82 L114 82 M104 72 L114 82 L104 92"/>
<circle class="s" cx="148" cy="82" r="24"/>
<path class="s" d="M136 90 Q148 102 160 90"/>
<path class="s t" d="M30 140 Q60 120 80 150 Q100 170 120 140 Q140 120 170 140"/>`},
{id:"oinorisuru_17",kanji:"お祈りする",kana:"おいのりする",romaji:"oinori suru",en:"to pray",lesson:17,art:`<path class="fr" d="M100 34 Q84 60 82 96 L82 140 L100 150 L118 140 L118 96 Q116 60 100 34 Z"/>
<path class="s" d="M100 34 Q84 60 82 96 L82 140 L100 150 L118 140 L118 96 Q116 60 100 34 Z"/>
<path class="s" d="M100 46 L100 150"/>
<path class="s" d="M82 140 L60 170 M118 140 L140 170"/>
<path class="s t r" d="M64 54 L72 62 M136 54 L128 62 M58 80 L68 82 M142 80 L132 82"/>`},
{id:"keshousuru_17",kanji:"化粧する",kana:"けしょうする",romaji:"keshou suru",en:"to put makeup on",lesson:17,art:`<rect class="s" x="48" y="96" width="36" height="72" rx="3"/>
<rect class="s" x="54" y="70" width="24" height="26"/>
<path class="fr" d="M56 70 L56 46 L76 34 L76 70 Z"/>
<circle class="s" cx="132" cy="118" r="32"/>
<circle class="s t" cx="132" cy="118" r="22"/>
<path class="s t r" d="M120 104 L128 98 M140 132 L146 126"/>`},
{id:"shuushokusuru_17",kanji:"就職する",kana:"しゅうしょくする",romaji:"shuushoku suru",en:"to get a full-time job (at ...)",lesson:17,art:`<path class="s" d="M24 112 L66 112 L86 98 L114 98 L134 112 L176 112"/>
<path class="s" d="M86 98 Q96 120 110 118 Q122 122 128 112"/>
<path class="s t" d="M94 118 L100 126 M104 120 L110 128"/>
<rect class="s r" x="76" y="134" width="48" height="34" rx="4"/>
<path class="s r" d="M90 134 L90 126 L110 126 L110 134"/>
<path class="s t r" d="M100 60 L100 76 M76 70 L84 82 M124 70 L116 82"/>`},
{id:"rikonsuru_17",kanji:"離婚する",kana:"りこんする",romaji:"rikon suru",en:"to get a divorce",lesson:17,art:`<path class="fr" d="M96 64 Q76 36 54 54 Q34 74 58 104 L94 140 L84 104 L100 88 Z"/>
<path class="fr" d="M110 64 Q130 36 152 54 Q172 74 148 104 L112 140 L106 112 L120 92 Z"/>
<circle class="s" cx="40" cy="152" r="12"/><circle class="s" cx="160" cy="152" r="12"/>
<path class="s t" d="M60 152 L80 152 M140 152 L120 152"/>`},
{id:"suru_wear_17",kana:"する",romaji:"suru",en:"to wear small items (necktie, watch, etc.)",lesson:17,art:`<path class="s" d="M24 82 L176 82 M24 130 L176 130"/>
<rect class="s" x="80" y="68" width="40" height="76" rx="6" style="fill:#fff"/>
<circle class="s r" cx="100" cy="106" r="18"/>
<path class="s r" d="M100 96 L100 106 L108 110"/>
<path class="s t" d="M84 68 L88 56 L112 56 L116 68 M84 144 L88 156 L112 156 L116 144"/>`},
{id:"zuibun_17",kana:"ずいぶん",romaji:"zuibun",en:"very",lesson:17,art:`<path class="s" d="M36 140 A64 64 0 0 1 164 140"/>
<path class="s t" d="M52 106 L60 112 M100 76 L100 86 M148 106 L140 112"/>
<path class="s r" d="M100 140 L156 92"/>
<circle class="f" cx="100" cy="140" r="8"/>
<path class="fr" d="M136 80 A64 64 0 0 1 164 140 L150 140 A50 50 0 0 0 128 92 Z"/>`},
{id:"tatoeba_17",kanji:"例えば",kana:"たとえば",romaji:"tatoeba",en:"for example",lesson:17,art:`<path class="s" d="M30 40 L170 40 L170 116 L80 116 L56 142 L60 116 L30 116 Z"/>
<circle class="s" cx="62" cy="78" r="14"/>
<rect class="s" x="88" y="64" width="26" height="28"/>
<path class="s" d="M140 64 L154 92 L126 92 Z"/>
<path class="s r" d="M46 100 L78 100"/>
<path class="s t r" d="M62 160 L62 132 M54 140 L62 132 L70 140"/>`},
{id:"nikurabete_17",kanji:"〜に比べて",kana:"〜にくらべて",romaji:"ni kurabete",en:"compared with ...",lesson:17,art:`<path class="s" d="M100 40 L100 160 M72 160 L128 160"/>
<path class="s" d="M44 82 L156 62"/>
<path class="s" d="M44 82 L30 112 L58 112 Z M156 62 L142 92 L170 92 Z"/>
<rect class="fr" x="34" y="96" width="20" height="16"/>
<circle class="s" cx="156" cy="86" r="6"/>
<circle class="f" cx="100" cy="72" r="5"/>`},
{id:"niyoruto_17",kana:"〜によると",romaji:"ni yoruto",en:"according to ...",lesson:17,art:`<circle class="s" cx="44" cy="120" r="14"/>
<path class="s" d="M44 134 L44 166 M30 150 L58 150"/>
<path class="s" d="M68 36 L172 36 L172 104 L96 104 L74 126 L80 104 L68 104 Z"/>
<rect class="s r" x="84" y="48" width="74" height="44" rx="2"/>
<rect class="fr" x="92" y="56" width="22" height="16"/>
<path class="s t" d="M122 58 L150 58 M122 70 L150 70 M92 82 L150 82"/>`},
{id:"mae_17",kanji:"前",kana:"まえ",romaji:"mae",en:"before ...",lesson:17,art:`<circle class="s" cx="100" cy="100" r="54"/>
<path class="s" d="M100 100 L100 66 M100 100 L124 112"/>
<circle class="f" cx="100" cy="100" r="5"/>
<path class="s r" d="M60 52 A64 64 0 0 0 40 120"/>
<path class="s r" d="M30 108 L40 122 L52 110"/>`},
{id:"yappari_17",kana:"やっぱり",romaji:"yappari",en:"after all",lesson:17,art:`<circle class="fr" cx="50" cy="136" r="12"/>
<path class="s" d="M62 136 L118 136 Q160 132 158 92 Q154 50 112 52 Q72 56 74 88 Q78 116 112 104"/>
<path class="s r" d="M112 104 Q96 124 64 132 M74 120 L62 134 L80 140"/>
<circle class="s t" cx="150" cy="150" r="8"/>`},
{id:"kana_17",kana:"〜かな",romaji:"kana",en:"I wonder ... (casual)",lesson:17,art:`<circle class="s" cx="60" cy="128" r="18"/>
<path class="s" d="M60 146 L60 170 M76 140 Q82 128 76 122"/>
<path class="s" d="M86 56 Q86 30 114 34 Q130 22 148 36 Q172 38 168 62 Q176 84 152 88 Q136 102 114 90 Q90 92 86 72 Z"/>
<circle class="s t" cx="86" cy="104" r="6"/>
<circle class="fr" cx="110" cy="62" r="5"/><circle class="fr" cx="128" cy="62" r="5"/><circle class="fr" cx="146" cy="62" r="5"/>`},
{id:"souka_17",kana:"そうか",romaji:"souka",en:"I see. (casual)",lesson:17,art:`<circle class="s" cx="80" cy="120" r="30"/>
<circle class="f" cx="70" cy="114" r="4"/><circle class="f" cx="92" cy="114" r="4"/>
<path class="s" d="M72 132 Q82 140 92 132"/>
<path class="s r" d="M126 58 Q126 34 146 34 Q166 34 166 58 Q166 70 156 78 L156 88 L136 88 L136 78 Q126 70 126 58 Z"/>
<path class="s t" d="M138 96 L154 96"/>
<path class="s t r" d="M118 34 L110 28 M146 24 L146 16 M168 40 L176 34"/>`},
{id:"omedetougozaimasu_17",kana:"おめでとうございます",romaji:"omedetou gozaimasu",en:"Congratulations!",lesson:17,art:`<path class="s" d="M36 166 L68 82 L120 134 Z"/>
<path class="s t" d="M50 130 L80 146 M58 108 L98 128"/>
<path class="s r" d="M94 100 Q106 72 96 48 M108 112 Q136 96 150 104 M102 92 Q130 54 166 60"/>
<circle class="fr" cx="128" cy="40" r="5"/><circle class="fr" cx="160" cy="88" r="5"/>
<rect class="fr" x="140" y="124" width="10" height="10" transform="rotate(30 145 129)"/>
<rect class="fr" x="74" y="38" width="10" height="10" transform="rotate(20 79 43)"/>`}
];
