/* =======================================================================
   lesson_4.js  —  Doodle Tango vocabulary, Lesson 4  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 4.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[4] = [
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
{id:"geemu",kana:"ゲーム",romaji:"geemu",en:"game",lesson:4,art:`<path class="s" d="M56 84 Q40 84 40 106 L40 124 Q40 140 56 140 Q66 140 70 130 L130 130 Q134 140 144 140 Q160 140 160 124 L160 106 Q160 84 144 84 Z"/>
<path class="s" d="M62 100 L62 118 M53 109 L71 109"/>
<circle class="fr" cx="128" cy="104" r="6"/><circle class="f" cx="144" cy="116" r="6"/>
<circle class="s r" cx="128" cy="120" r="5"/>`},
{id:"arubaito",kana:"アルバイト",romaji:"arubaito",en:"part-time job",lesson:4,art:`<circle class="s" cx="80" cy="56" r="13"/>
<path class="s" d="M66 78 L66 120 L94 120 L94 78 Q94 72 80 72 Q66 72 66 78 Z"/>
<path class="s" d="M80 92 L80 120 M74 78 L86 78 L86 92 L74 92 Z"/>
<path class="s" d="M66 120 L58 152 M94 120 L102 152"/>
<circle class="s r" cx="140" cy="72" r="18"/>
<path class="s r" d="M140 60 L140 72 L150 78"/>
<circle class="fr" cx="140" cy="120" r="10"/>
<path class="s t r" d="M137 116 Q140 120 143 116"/>`},
{id:"kaimono",kanji:"買い物",kana:"かいもの",romaji:"kaimono",en:"shopping",lesson:4,art:`<path class="s" d="M56 84 L144 84 L134 152 L66 152 Z"/>
<path class="s" d="M76 84 Q76 56 100 56 Q124 56 124 84"/>
<path class="s r" d="M84 100 L94 66 M116 100 L106 66"/>
<circle class="fr" cx="150" cy="120" r="14"/>
<path class="s t r" d="M150 112 L150 128 M144 120 L156 120"/>`},
{id:"kurasu",kana:"クラス",romaji:"kurasu",en:"class",lesson:4,art:`<rect class="s" x="44" y="40" width="112" height="40" rx="2"/>
<path class="s t r" d="M56 54 Q68 46 80 54 M56 66 L120 66"/>
<path class="s" d="M56 108 L84 108 L84 128 L56 128 Z M56 128 L56 150 M84 128 L84 150"/>
<path class="s" d="M116 108 L144 108 L144 128 L116 128 Z M116 128 L116 150 M144 128 L144 150"/>
<circle class="s r" cx="70" cy="98" r="7"/><circle class="s r" cx="130" cy="98" r="7"/>`},
{id:"hito",kanji:"人",kana:"ひと",romaji:"hito",en:"person",lesson:4,art:`<circle class="s" cx="100" cy="52" r="16"/>
<path class="s t" d="M92 48 Q95 45 98 48 M102 48 Q105 45 108 48 M94 58 Q100 62 106 58"/>
<path class="s" d="M100 68 L100 122 M100 122 L86 156 M100 122 L114 156 M100 84 L80 100 M100 84 L120 100"/>`},
{id:"anata",kana:"あなた",romaji:"anata",en:"you",lesson:4,art:`<circle class="s" cx="118" cy="60" r="15"/>
<path class="s t" d="M110 56 Q113 53 116 56 M120 56 Q123 53 126 56 M112 66 Q118 70 124 66"/>
<path class="s" d="M118 75 L118 126 M118 126 L106 158 M118 126 L130 158 M118 90 L100 104 M118 90 L136 104"/>
<path class="s r" d="M30 108 L88 108 M76 98 L92 108 L76 118"/>
<path class="s r" d="M30 108 L44 100 M30 108 L44 116"/>`},
{id:"repooto",kana:"レポート",romaji:"repooto",en:"(term) paper",lesson:4,art:`<path class="s" d="M60 44 L128 44 L148 64 L148 156 L60 156 Z"/>
<path class="s" d="M128 44 L128 64 L148 64"/>
<path class="s t r" d="M74 80 L134 80 M74 96 L134 96 M74 112 L134 112 M74 128 L114 128"/>
<path class="s" d="M50 40 Q42 48 50 56 L58 48 Q54 42 50 40 Z"/>
<path class="s r" d="M50 40 L50 62"/>`},
{id:"gohan",kanji:"ご飯",kana:"ごはん",romaji:"gohan",en:"rice; meal",lesson:4,art:`<path class="s" d="M50 108 Q50 96 100 96 Q150 96 150 108 Q150 140 100 140 Q50 140 50 108 Z"/>
<path class="s r" d="M62 100 Q72 88 82 100 Q92 88 102 100 Q112 88 122 100 Q132 88 138 100"/>
<path class="s t r" d="M92 78 Q86 70 92 62 M108 78 Q102 70 108 62"/>
<path class="s" d="M118 70 L158 54 M126 76 L166 60"/>`},
{id:"pan",kana:"パン",romaji:"pan",en:"bread",lesson:4,art:`<path class="s" d="M46 120 Q46 72 100 72 Q154 72 154 120 Q154 132 142 132 L58 132 Q46 132 46 120 Z"/>
<path class="s t" d="M70 96 Q70 84 82 84 M98 92 Q98 80 110 80 M126 96 Q126 84 138 84"/>
<path class="s" d="M58 132 L58 144 Q58 150 66 150 L134 150 Q142 150 142 144 L142 132"/>`},
{id:"basutei",kanji:"バス停",kana:"バスてい",romaji:"basutei",en:"bus stop",lesson:4,art:`<path class="s" d="M100 60 L100 156"/>
<rect class="s" x="60" y="40" width="80" height="44" rx="4"/>
<path class="s r" d="M72 52 L128 52 Q132 52 132 58 L132 68 L68 68 L68 58 Q68 52 72 52 Z"/>
<circle class="s r" cx="78" cy="74" r="4"/><circle class="s r" cx="122" cy="74" r="4"/>
<path class="s" d="M60 150 L110 150 L110 138 L60 138 Z M68 138 L68 128 L102 128 L102 138"/>`},
{id:"byouin4",kanji:"病院",kana:"びょういん",romaji:"byouin",en:"hospital",lesson:4,art:`<path class="s" d="M52 156 L52 60 L148 60 L148 156 Z"/>
<path class="fr" d="M92 74 L108 74 L108 88 L122 88 L122 104 L108 104 L108 118 L92 118 L92 104 L78 104 L78 88 L92 88 Z"/>
<path class="s t" d="M64 132 L84 132 L84 156 L64 156 Z M116 132 L136 132 L136 156 L116 156 Z"/>
<path class="s" d="M40 60 L160 60 L152 46 L48 46 Z"/>`},
{id:"hoteru",kana:"ホテル",romaji:"hoteru",en:"hotel",lesson:4,art:`<path class="s" d="M50 156 L50 56 L150 56 L150 156 Z"/>
<path class="s t" d="M64 72 L76 72 L76 84 L64 84 Z M94 72 L106 72 L106 84 L94 84 Z M124 72 L136 72 L136 84 L124 84 Z M64 98 L76 98 L76 110 L64 110 Z M94 98 L106 98 L106 110 L94 110 Z M124 98 L136 98 L136 110 L124 110 Z"/>
<path class="s" d="M84 156 L84 130 L116 130 L116 156"/>
<path class="s r" d="M100 44 L103 36 L106 44 L114 44 L108 50 L110 58 L100 53 L90 58 L92 50 L86 44 Z"/>`},
{id:"honya",kanji:"本屋",kana:"ほんや",romaji:"honya",en:"bookstore",lesson:4,art:`<path class="s" d="M40 76 L160 76 L160 60 L40 60 Z"/>
<path class="s r" d="M46 76 Q52 88 46 100 M64 76 Q70 88 64 100 M82 76 Q88 88 82 100 M100 76 Q106 88 100 100 M118 76 Q124 88 118 100 M136 76 Q142 88 136 100 M154 76 Q160 88 154 100"/>
<path class="s" d="M70 152 L70 112 L100 104 L100 152 M100 104 L130 112 L130 152"/>
<path class="s r" d="M100 104 L100 152"/>
<path class="s t" d="M78 120 L94 116 M106 116 L122 120 M78 132 L94 128 M106 128 L122 132"/>`},
{id:"machi",kanji:"町",kana:"まち",romaji:"machi",en:"town; city",lesson:4,art:`<path class="s" d="M32 156 L168 156"/>
<path class="s" d="M40 156 L40 100 L72 100 L72 156"/>
<path class="s" d="M80 156 L80 64 L120 64 L120 156"/>
<path class="s" d="M128 156 L128 88 L164 88 L164 156"/>
<path class="s t r" d="M50 114 L62 114 M50 130 L62 130 M92 80 L108 80 M92 100 L108 100 M92 120 L108 120 M138 104 L154 104 M138 124 L154 124"/>`},
{id:"resutoran",kana:"レストラン",romaji:"resutoran",en:"restaurant",lesson:4,art:`<path class="s" d="M64 60 L64 108 Q64 118 76 118 L76 152 M64 78 L84 78 M74 60 L74 82 M84 60 L84 108 Q84 118 76 118"/>
<path class="s" d="M132 60 Q120 60 120 84 Q120 100 132 100 L132 152"/>
<path class="s r" d="M40 40 L160 40 L152 52 L48 52 Z"/>
<circle class="fr" cx="100" cy="46" r="3"/>`},
{id:"kinou",kanji:"昨日",kana:"きのう",romaji:"kinou",en:"yesterday",lesson:4,art:`<rect class="s" x="40" y="52" width="120" height="100" rx="5"/>
<path class="s" d="M40 78 L160 78"/><path class="s" d="M66 44 L66 60 M134 44 L134 60"/>
<path class="s t" d="M56 92 L56 148 M84 92 L84 148 M112 92 L112 148 M140 92 L140 148 M40 106 L160 106 M40 132 L160 132"/>
<path class="fr" d="M44 108 L84 108 L84 132 L44 132 Z"/>
<path class="s r" d="M140 120 L96 120 M108 110 L92 120 L108 130"/>`},
{id:"jikan4",kanji:"〜時間",kana:"〜じかん",romaji:"jikan",en:"... hours",lesson:4,art:`<circle class="s" cx="100" cy="100" r="46"/>
<path class="s" d="M100 100 L100 62 M100 100 L128 100"/>
<circle class="f" cx="100" cy="100" r="4"/>
<path class="s r" d="M100 54 L100 62 M146 100 L138 100 M100 146 L100 138 M54 100 L62 100"/>
<path class="s r" d="M158 60 L166 60 M162 56 L162 64"/>
<path class="s r" d="M158 76 L166 76 M162 72 L162 80"/>`},
{id:"ichijikan",kanji:"一時間",kana:"いちじかん",romaji:"ichijikan",en:"one hour",lesson:4,art:`<circle class="s" cx="100" cy="100" r="46"/>
<path class="s r" d="M100 54 A46 46 0 0 1 146 100" stroke-width="6"/>
<path class="s" d="M100 100 L100 62 M100 100 L138 100"/>
<circle class="f" cx="100" cy="100" r="4"/>
<path class="s r" d="M100 46 L100 54 M154 100 L146 100"/>`},
{id:"senshuu",kanji:"先週",kana:"せんしゅう",romaji:"senshuu",en:"last week",lesson:4,art:`<rect class="s r" x="30" y="76" width="66" height="40" rx="4"/>
<path class="s r" d="M46 76 L46 116 M62 76 L62 116 M78 76 L78 116"/>
<rect class="s" x="112" y="76" width="66" height="40" rx="4"/>
<path class="s" d="M128 76 L128 116 M144 76 L144 116 M160 76 L160 116"/>
<path class="s r" d="M110 96 L98 96 M108 88 L96 96 L108 104"/>`},
{id:"toki",kanji:"時",kana:"とき",romaji:"toki",en:"when ...; at the time of ...",lesson:4,art:`<path class="s" d="M30 140 L170 140"/>
<path class="s t" d="M50 140 L50 132 M90 140 L90 132 M130 140 L130 132 M150 140 L150 132"/>
<circle class="s r" cx="100" cy="90" r="30"/>
<path class="s r" d="M100 90 L100 72 M100 90 L116 98"/>
<path class="s r" d="M100 120 L100 140"/>
<path class="fr" d="M100 140 L94 152 L106 152 Z"/>`},
{id:"getsuyoubi",kanji:"月曜日",kana:"げつようび",romaji:"getsuyoubi",en:"Monday",lesson:4,art:`<rect class="s" x="48" y="44" width="104" height="112" rx="6"/>
<path class="s" d="M48 72 L152 72"/><path class="s" d="M74 36 L74 52 M126 36 L126 52"/>
<path class="s" d="M118 96 Q92 100 92 122 Q92 144 120 148 Q100 132 100 122 Q100 108 118 96 Z"/>
<circle class="fr" cx="76" cy="104" r="3"/>`},
{id:"kayoubi",kanji:"火曜日",kana:"かようび",romaji:"kayoubi",en:"Tuesday",lesson:4,art:`<rect class="s" x="48" y="44" width="104" height="112" rx="6"/>
<path class="s" d="M48 72 L152 72"/><path class="s" d="M74 36 L74 52 M126 36 L126 52"/>
<path class="s r" d="M100 92 Q90 104 96 118 Q88 114 88 104 Q80 116 84 132 Q88 148 104 148 Q120 148 120 130 Q120 116 110 108 Q112 118 104 120 Q112 104 100 92 Z"/>`},
{id:"suiyoubi",kanji:"水曜日",kana:"すいようび",romaji:"suiyoubi",en:"Wednesday",lesson:4,art:`<rect class="s" x="48" y="44" width="104" height="112" rx="6"/>
<path class="s" d="M48 72 L152 72"/><path class="s" d="M74 36 L74 52 M126 36 L126 52"/>
<path class="s r" d="M100 92 Q78 118 78 132 Q78 150 100 150 Q122 150 122 132 Q122 118 100 92 Z"/>
<path style="fill:#fff" d="M92 122 Q98 116 100 126 Q94 130 92 122 Z"/>`},
{id:"mokuyoubi",kanji:"木曜日",kana:"もくようび",romaji:"mokuyoubi",en:"Thursday",lesson:4,art:`<rect class="s" x="48" y="44" width="104" height="112" rx="6"/>
<path class="s" d="M48 72 L152 72"/><path class="s" d="M74 36 L74 52 M126 36 L126 52"/>
<path class="s" d="M100 150 L100 108"/>
<path class="s r" d="M100 108 Q80 104 78 88 Q96 90 100 108 M100 108 Q120 104 122 88 Q104 90 100 108 M100 96 Q86 92 86 80 Q98 84 100 96 M100 96 Q114 92 114 80 Q102 84 100 96"/>`},
{id:"kinyoubi",kanji:"金曜日",kana:"きんようび",romaji:"kinyoubi",en:"Friday",lesson:4,art:`<rect class="s" x="48" y="44" width="104" height="112" rx="6"/>
<path class="s" d="M48 72 L152 72"/><path class="s" d="M74 36 L74 52 M126 36 L126 52"/>
<circle class="s r" cx="100" cy="120" r="24"/>
<path class="s r" d="M100 104 L100 136 M88 112 L100 104 L112 112 M90 118 L110 118 M90 126 L110 126"/>`},
{id:"au",kanji:"会う",kana:"あう",romaji:"au",en:"to meet; to see (a person)",lesson:4,art:`<circle class="s" cx="54" cy="60" r="13"/>
<path class="s" d="M54 73 L54 116 M54 116 L44 148 M54 116 L64 148 M54 88 L78 104"/>
<circle class="s r" cx="146" cy="60" r="13"/>
<path class="s r" d="M146 73 L146 116 M146 116 L136 148 M146 116 L156 148 M146 88 L122 104"/>
<path class="s" d="M78 104 L96 104"/>
<path class="s r" d="M104 104 L122 104"/>
<path class="fr" d="M100 88 L103 96 L111 96 L105 101 L107 109 L100 104 L93 109 L95 101 L89 96 L97 96 Z"/>`},
{id:"aru",kana:"ある",romaji:"aru",en:"there is ... (inanimate)",lesson:4,art:`<path class="s" d="M40 128 L160 128"/>
<path class="s" d="M56 128 L56 150 M144 128 L144 150"/>
<path class="s" d="M74 128 L74 96 L126 96 L126 128 Z"/>
<path class="s t" d="M74 112 L126 112 M100 96 L100 128"/>
<path class="s r" d="M100 76 L100 60 M92 68 L100 60 L108 68"/>
<circle class="fr" cx="100" cy="50" r="4"/>`},
{id:"kau_buy",kanji:"買う",kana:"かう",romaji:"kau",en:"to buy",lesson:4,art:`<circle class="s r" cx="58" cy="70" r="22"/>
<path class="s r" d="M58 54 L58 86 M48 62 L58 54 L68 62 M50 72 L66 72 M50 78 L66 78"/>
<path class="s" d="M96 68 L112 68 L100 130 L44 130" transform="translate(0,0)"/>
<path class="s r" d="M92 100 L128 100 M116 90 L130 100 L116 110"/>
<path class="s" d="M138 84 L172 84 L164 140 L110 140 Z"/>
<path class="s t" d="M148 84 Q148 72 155 72 Q162 72 162 84"/>`},
{id:"kaku",kanji:"書く",kana:"かく",romaji:"kaku",en:"to write",lesson:4,art:`<rect class="s" x="40" y="52" width="80" height="104" rx="3"/>
<path class="s t r" d="M52 72 L108 72 M52 88 L108 88 M52 104 L92 104"/>
<path class="s" d="M100 128 L150 52 Q156 42 164 47 Q172 52 166 62 L118 140 L98 150 Z"/>
<path class="f" d="M98 150 L112 143 L106 130 Z"/>`},
{id:"toru_photo",kanji:"撮る",kana:"とる",romaji:"toru",en:"to take (a picture)",lesson:4,art:`<path class="s" d="M40 80 L60 80 L68 66 L108 66 L116 80 L160 80 Q168 80 168 90 L168 140 Q168 148 160 148 L48 148 Q40 148 40 140 Z"/>
<circle class="s" cx="100" cy="112" r="22"/><circle class="s r" cx="100" cy="112" r="11"/>
<path class="s r" d="M132 52 L128 42 M148 48 L148 38 M164 52 L170 44"/>
<path class="fr" d="M52 92 L64 92 L64 100 L52 100 Z"/>`},
{id:"matsu",kanji:"待つ",kana:"まつ",romaji:"matsu",en:"to wait",lesson:4,art:`<circle class="s" cx="72" cy="56" r="14"/>
<path class="s" d="M72 70 L72 122 M72 122 L60 154 M72 122 L84 154 M72 88 L54 100 M72 88 L90 100"/>
<circle class="s r" cx="140" cy="80" r="28"/>
<path class="s r" d="M140 80 L140 62 M140 80 L156 88"/>
<path class="s t" d="M104 138 L108 138 M118 138 L122 138 M132 138 L136 138"/>`},
{id:"wakaru",kana:"わかる",romaji:"wakaru",en:"to understand",lesson:4,art:`<path class="s" d="M60 116 Q52 76 92 66 Q132 56 140 96 Q144 118 122 128 L120 140 L88 140 L86 126 Q68 122 60 116 Z"/>
<circle class="fr" cx="100" cy="92" r="9"/>
<path class="s r" d="M100 74 L100 64 M78 84 L70 78 M122 84 L130 78 M84 100 L76 106 M116 100 L124 106"/>
<path class="s" d="M100 140 L100 150"/>`},
{id:"iru_exist",kana:"いる",romaji:"iru",en:"(a person) is in ...; stays at ...",lesson:4,art:`<path class="s r" d="M62 96 Q62 62 100 62 Q138 62 138 96 Q138 124 100 156 Q62 124 62 96 Z"/>
<circle class="s" cx="100" cy="86" r="10"/>
<path class="s" d="M100 96 L100 120 M100 104 L90 114 M100 104 L110 114"/>
<path style="fill:#fff" d="M100 62 Q76 62 68 84 Q92 78 100 62 Z" opacity="0"/>`},
{id:"gurai",kana:"〜ぐらい",romaji:"gurai",en:"about (approximate measurement)",lesson:4,art:`<path class="s" d="M40 120 L160 120"/>
<path class="s" d="M40 112 L40 128 M80 114 L80 126 M120 114 L120 126 M160 112 L160 128"/>
<path class="s r" d="M50 76 Q66 64 82 76 Q98 88 114 76 Q130 64 146 76"/>
<path class="s r" d="M100 92 L100 108"/>
<circle class="fr" cx="100" cy="118" r="4"/>`},
{id:"gomennasai",kana:"ごめんなさい",romaji:"gomennasai",en:"I'm sorry",lesson:4,art:`<circle class="s" cx="100" cy="76" r="20"/>
<path class="s t" d="M92 72 L98 76 M108 72 L102 76 M92 84 L108 84"/>
<path class="s" d="M100 96 Q64 100 60 150 M100 96 Q136 100 140 150"/>
<path class="s" d="M60 150 L82 150 M118 150 L140 150"/>
<path class="s r" d="M100 40 L96 30 M120 48 L128 40 M80 48 L72 40"/>`},
{id:"sorekara",kana:"それから",romaji:"sorekara",en:"and then",lesson:4,art:`<circle class="f" cx="44" cy="100" r="8"/>
<circle class="s" cx="100" cy="100" r="8"/>
<circle class="s r" cx="156" cy="100" r="10"/>
<path class="s t" d="M40 128 L48 128 M96 128 L104 128 M152 128 L160 128"/>
<path class="s r" d="M52 100 L92 100 M108 100 L146 100 M134 90 L148 100 L134 110"/>`},
{id:"dakara",kana:"だから",romaji:"dakara",en:"so; therefore",lesson:4,art:`<rect class="s" x="40" y="60" width="44" height="40" rx="3"/>
<path class="s t" d="M50 74 L74 74 M50 86 L74 86"/>
<path class="fr" d="M100 66 L103 74 L96 74 Z M116 66 L119 74 L112 74 Z M108 84 L111 92 L104 92 Z"/>
<rect class="s r" x="116" y="60" width="44" height="40" rx="3"/>
<path class="s r" d="M126 74 L150 74 M126 86 L150 86"/>
<path class="s" d="M70 112 Q100 132 130 112 M130 112 L120 108 M130 112 L124 122"/>`},
{id:"takusan",kana:"たくさん",romaji:"takusan",en:"many; a lot",lesson:4,art:`<circle class="s" cx="100" cy="60" r="14"/>
<circle class="s r" cx="78" cy="86" r="14"/><circle class="s" cx="122" cy="86" r="14"/>
<circle class="s" cx="60" cy="114" r="14"/><circle class="s r" cx="100" cy="114" r="14"/><circle class="s" cx="140" cy="114" r="14"/>
<circle class="s r" cx="80" cy="142" r="14"/><circle class="s" cx="120" cy="142" r="14"/>
<path class="s r" d="M100 30 L100 42 M94 36 L100 30 L106 36"/>`},
{id:"to",kana:"〜と",romaji:"to",en:"together with (a person); and",lesson:4,art:`<circle class="s" cx="56" cy="72" r="14"/>
<path class="s" d="M56 86 L56 128 M56 128 L46 156 M56 128 L66 156 M56 100 L74 112"/>
<circle class="s r" cx="144" cy="72" r="14"/>
<path class="s r" d="M144 86 L144 128 M144 128 L134 156 M144 128 L154 156 M144 100 L126 112"/>
<path class="s r" d="M92 84 L92 112 M78 98 L106 98"/>
<circle class="fr" cx="92" cy="70" r="6"/>`},
{id:"doushite",kana:"どうして",romaji:"doushite",en:"why",lesson:4,art:`<path class="s r" d="M78 56 Q78 40 100 40 Q124 40 124 62 Q124 80 100 88 L100 104"/>
<circle class="fr" cx="100" cy="122" r="6"/>
<path class="s" d="M40 150 L74 150 M56 140 L44 150 L56 160"/>
<path class="s" d="M126 150 L160 150 M144 140 L156 150 L144 160"/>`},
{id:"hitoride",kanji:"一人で",kana:"ひとりで",romaji:"hitori de",en:"alone",lesson:4,art:`<circle class="s r" cx="100" cy="80" r="42" stroke-dasharray="6 7"/>
<circle class="s" cx="100" cy="72" r="14"/>
<path class="s" d="M100 86 L100 128 M100 128 L88 156 M100 128 L112 156 M100 100 L82 114 M100 100 L118 114"/>
<path class="s t r" d="M40 60 L34 52 M160 60 L166 52 M40 120 L34 128 M160 120 L166 128"/>`},
{id:"moshimoshi",kana:"もしもし",romaji:"moshi moshi",en:"Hello? (used on the phone)",lesson:4,art:`<path class="s" d="M56 58 Q52 50 60 46 Q76 40 86 50 Q94 58 88 70 Q84 78 90 90 Q102 114 126 126 Q138 132 146 124 Q156 118 166 122"/>
<path class="s" d="M166 122 Q174 126 172 136"/>
<path class="s r" d="M100 44 L140 44 L140 74 L120 74 L108 84 L108 74 L100 74 Z"/>
<path class="s t r" d="M110 56 L130 56 M110 64 L124 64"/>`},
{id:"kodomo4",kanji:"子供",kana:"こども",romaji:"kodomo",en:"child",lesson:4,art:`<circle class="s" cx="100" cy="72" r="20"/>
<path class="s t" d="M90 68 L96 72 M110 68 L104 72 M92 82 Q100 88 108 82"/>
<path class="s" d="M100 92 L100 128 M100 128 L88 150 M100 128 L112 150 M100 104 L84 116 M100 104 L116 116"/>
<path class="s r" d="M82 54 Q100 44 118 54"/>
<path class="fr" d="M132 60 Q140 52 148 60 L140 76 Z"/>
<path class="s r" d="M140 40 L140 52"/>`},
{id:"isu4",kana:"いす",romaji:"isu",en:"chair",lesson:4,art:`<path class="s" d="M70 40 L70 96 L130 96 L130 40"/>
<path class="s t r" d="M70 56 L130 56 M70 72 L130 72"/>
<path class="s" d="M70 96 L60 156 M130 96 L140 156 M64 126 L136 126"/>
<path class="s" d="M70 96 L130 96"/>`},
{id:"tsukue4",kanji:"机",kana:"つくえ",romaji:"tsukue",en:"desk",lesson:4,art:`<path class="s" d="M36 72 L164 72 L164 88 L36 88 Z"/>
<path class="s" d="M48 88 L48 156 M152 88 L152 156"/>
<path class="s" d="M110 88 L110 124 L152 124 L152 88"/>
<path class="s r" d="M118 104 L128 104"/>
<circle class="s r" cx="80" cy="60" r="10"/>
<path class="s r" d="M74 60 L86 60"/>`},
{id:"shashin4",kanji:"写真",kana:"しゃしん",romaji:"shashin",en:"picture; photograph",lesson:4,art:`<rect class="s" x="40" y="52" width="120" height="96" rx="3"/>
<rect class="s t" x="52" y="64" width="96" height="72"/>
<circle class="s r" cx="122" cy="84" r="9"/>
<path class="s" d="M52 136 L84 100 L104 120 L120 104 L148 136 Z"/>
<path class="s r" d="M40 52 L52 64 M160 52 L148 64"/>`}
];