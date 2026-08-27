/* =======================================================================
   lesson_13.js  —  Doodle Tango vocabulary, Lesson 13  (Genki II)
   Loaded on demand by index.html when the chosen range includes lesson 13.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[13] = [
{id:"otona",kanji:"大人",kana:"おとな",romaji:"otona",en:"adult",lesson:13,art:`<circle class="s" cx="100" cy="46" r="14"/>
<path class="s" d="M100 60 L100 120 M100 120 L88 156 M100 120 L112 156 M100 76 L78 92 M100 76 L118 90"/>
<path class="s r" d="M100 62 L94 78 L100 92 L106 78 Z"/>
<path class="s" d="M118 90 L118 118 L136 118 L136 96 Z M120 96 L134 96"/>`},
{id:"bengoshi13",kanji:"弁護士",kana:"べんごし",romaji:"bengoshi",en:"lawyer",lesson:13,art:`<g transform="rotate(-35 96 68)"><rect class="s" x="70" y="50" width="52" height="30" rx="6"/><path class="s" d="M96 80 L96 132"/><path class="s t" d="M82 58 L110 58"/></g>
<ellipse class="s" cx="122" cy="152" rx="30" ry="8"/><path class="s" d="M122 144 L122 152"/>
<path class="s r" d="M150 58 L162 52 M152 76 L164 74"/>`},
{id:"watakushi",kanji:"私",kana:"わたくし",romaji:"watakushi",en:"I (formal)",lesson:13,art:`<circle class="s" cx="100" cy="48" r="14"/>
<path class="s" d="M100 62 L100 116 M100 116 L88 150 M100 116 L112 150 M100 80 L120 92"/>
<path class="s r" d="M100 64 L92 80 L100 96 L108 80 Z"/>
<path class="s" d="M100 82 L78 96 L92 104"/><circle class="fr" cx="92" cy="104" r="4"/>
<path class="s t r" d="M62 40 L68 46 M138 40 L132 46"/>`},
{id:"karee",kana:"カレー",romaji:"karee",en:"curry",lesson:13,art:`<ellipse class="s" cx="100" cy="120" rx="54" ry="18"/>
<path class="s" d="M46 120 Q46 100 100 100 Q154 100 154 120"/>
<path class="s r" d="M100 104 Q70 104 62 118 Q80 126 100 122 Z"/>
<path style="fill:#fff" d="M100 104 Q130 104 138 118 Q120 124 100 122 Z"/>
<path class="s" d="M100 104 L100 122"/>
<path class="s" d="M150 58 L150 104 M144 58 Q144 72 150 72 Q156 72 156 58 Z"/>`},
{id:"koucha",kanji:"紅茶",kana:"こうちゃ",romaji:"koucha",en:"black tea",lesson:13,art:`<path class="s" d="M56 90 L128 90 L122 138 Q122 150 106 150 L78 150 Q62 150 62 138 Z"/>
<path class="s" d="M128 102 Q152 102 152 120 Q152 138 128 138"/>
<ellipse class="s" cx="92" cy="158" rx="42" ry="7"/>
<path class="s r" d="M92 90 L92 60"/>
<path class="s r" d="M82 50 L102 50 L102 62 L82 62 Z"/>
<ellipse class="fr" cx="92" cy="102" rx="12" ry="5"/>`},
{id:"kimono",kanji:"着物",kana:"きもの",romaji:"kimono",en:"kimono; Japanese traditional dress",lesson:13,art:`<path class="s" d="M100 44 L72 60 L58 152 L92 152 L92 96 M100 44 L128 60 L142 152 L108 152 L108 96"/>
<path class="s" d="M100 44 L92 96 L108 96 Z"/>
<path class="s r" d="M58 104 L142 104 L142 122 L58 122 Z"/>
<path class="s r" d="M92 104 L108 104"/>`},
{id:"seetaa",kana:"セーター",romaji:"seetaa",en:"sweater",lesson:13,art:`<path class="s" d="M62 74 L84 60 Q100 70 116 60 L138 74 L124 94 L118 86 L118 140 L82 140 L82 86 L76 94 Z"/>
<path class="s t" d="M84 62 Q100 74 116 62"/>
<path class="s t r" d="M82 132 L82 144 M90 132 L90 144 M98 132 L98 144 M106 132 L106 144 M114 132 L114 144"/>`},
{id:"gakki",kanji:"楽器",kana:"がっき",romaji:"gakki",en:"musical instrument",lesson:13,art:`<ellipse class="s" cx="82" cy="128" rx="34" ry="30"/>
<circle class="s r" cx="82" cy="128" r="10"/>
<path class="s" d="M106 106 L152 52 L164 60 L118 116"/>
<path class="s" d="M152 52 L160 42 L172 50 L164 60 Z"/>
<path class="s t r" d="M82 98 L82 158"/>`},
{id:"karate",kanji:"空手",kana:"からて",romaji:"karate",en:"karate",lesson:13,art:`<circle class="s" cx="86" cy="46" r="13"/>
<path class="s" d="M86 59 L86 98 M86 72 L118 64 M86 72 L58 80"/>
<path class="s r" d="M68 102 L104 102"/>
<path class="s" d="M86 98 L118 106 M86 98 L94 140 M94 118 L138 108"/>
<path class="s t r" d="M124 62 L134 56 M142 106 L152 100"/>`},
{id:"gorufu",kana:"ゴルフ",romaji:"gorufu",en:"golf",lesson:13,art:`<path class="s" d="M56 40 L92 122 M92 122 L80 134 L100 134 Z"/>
<path class="s t" d="M56 40 Q48 44 52 52"/>
<circle class="s" cx="128" cy="152" r="9"/>
<path class="s r" d="M150 152 L150 92 L124 102 L150 112"/>
<path class="s" d="M112 158 Q130 150 150 158"/>`},
{id:"baiku",kana:"バイク",romaji:"baiku",en:"motorcycle",lesson:13,art:`<circle class="s" cx="54" cy="128" r="22"/><circle class="s" cx="146" cy="128" r="22"/>
<path class="s" d="M54 128 L86 128 L102 100 L128 100 L146 128 M86 128 L110 128 L124 100 M128 100 L142 84 L158 84"/>
<path class="s r" d="M102 100 L94 88 L106 88"/>
<path class="s" d="M62 108 L86 108"/>`},
{id:"zou",kanji:"象",kana:"ぞう",romaji:"zou",en:"elephant",lesson:13,art:`<ellipse class="s" cx="110" cy="106" rx="44" ry="34"/>
<circle class="s" cx="68" cy="90" r="24"/>
<path class="s" d="M54 98 Q38 112 46 142 Q50 152 60 148"/>
<path class="s r" d="M66 72 Q46 68 46 92 Q58 94 70 84"/>
<circle class="f" cx="72" cy="86" r="3"/>
<path class="s" d="M86 140 L86 158 M110 140 L110 158 M134 140 L134 158 M152 132 Q162 130 160 120"/>`},
{id:"karada",kanji:"体",kana:"からだ",romaji:"karada",en:"body",lesson:13,art:`<circle class="s" cx="100" cy="42" r="16"/>
<path class="s" d="M100 58 L100 120 M100 120 L84 160 M100 120 L116 160 M100 72 L72 96 M100 72 L128 96"/>
<path class="s r" d="M100 72 Q86 92 92 118 M100 72 Q114 92 108 118"/>`},
{id:"gaikokugo",kanji:"外国語",kana:"がいこくご",romaji:"gaikokugo",en:"foreign language",lesson:13,art:`<circle class="s" cx="74" cy="98" r="34"/>
<path class="s t" d="M40 98 L108 98 M74 64 L74 132 M48 76 Q74 92 100 76 M48 120 Q74 104 100 120"/>
<path class="s r" d="M114 54 L166 54 L166 90 L138 90 L126 102 L126 90 L114 90 Z"/>
<path class="s r" d="M124 64 Q130 60 128 70 M140 64 L140 78 M150 64 Q156 70 150 76"/>`},
{id:"kotoba",kanji:"言葉",kana:"ことば",romaji:"kotoba",en:"language; word",lesson:13,art:`<path class="s" d="M40 54 L160 54 L160 118 L94 118 L72 142 L72 118 L40 118 Z"/>
<path class="s t r" d="M56 74 L144 74 M56 90 L144 90 M56 106 L116 106"/>`},
{id:"bunpou",kanji:"文法",kana:"ぶんぽう",romaji:"bunpou",en:"grammar",lesson:13,art:`<rect class="s" x="28" y="82" width="34" height="30" rx="4"/>
<rect class="s r" x="83" y="82" width="34" height="30" rx="4"/>
<rect class="s" x="138" y="82" width="34" height="30" rx="4"/>
<path class="s" d="M62 97 L83 97 M117 97 L138 97"/>
<path class="s t r" d="M38 122 L52 122 M93 122 L107 122 M148 122 L162 122"/>
<path class="s r" d="M100 70 L100 60 M92 66 L100 58 L108 66"/>`},
{id:"apuri",kana:"アプリ",romaji:"apuri",en:"application (app)",lesson:13,art:`<rect class="s" x="66" y="36" width="68" height="128" rx="10"/>
<path class="s t" d="M66 52 L134 52 M66 148 L134 148"/><circle class="s t" cx="100" cy="156" r="4"/>
<rect class="fr" x="78" y="64" width="18" height="18" rx="4"/><rect class="s r" x="104" y="64" width="18" height="18" rx="4"/>
<rect class="s r" x="78" y="90" width="18" height="18" rx="4"/><rect class="s r" x="104" y="90" width="18" height="18" rx="4"/>
<rect class="s r" x="78" y="116" width="18" height="18" rx="4"/><rect class="s r" x="104" y="116" width="18" height="18" rx="4"/>`},
{id:"apaato",kana:"アパート",romaji:"apaato",en:"apartment; smaller apartment building",lesson:13,art:`<path class="s" d="M50 156 L50 60 L134 60 L134 156"/>
<path class="s" d="M50 108 L134 108"/>
<path class="s t" d="M64 74 L80 74 L80 92 L64 92 Z M104 74 L120 74 L120 92 L104 92 Z M64 122 L80 122 L80 140 L64 140 Z M104 122 L120 122 L120 140 L104 140 Z"/>
<path class="s r" d="M134 156 L152 156 L152 108 L134 108 M134 132 L152 132"/>`},
{id:"manshon",kana:"マンション",romaji:"manshon",en:"larger apartment building; condominium",lesson:13,art:`<path class="s" d="M56 156 L56 36 L144 36 L144 156"/>
<path class="s t" d="M70 50 L84 50 L84 64 L70 64 Z M94 50 L108 50 L108 64 L94 64 Z M118 50 L132 50 L132 64 L118 64 Z M70 78 L84 78 L84 92 L70 92 Z M94 78 L108 78 L108 92 L94 92 Z M118 78 L132 78 L132 92 L118 92 Z M70 106 L84 106 L84 120 L70 120 Z M94 106 L108 106 L108 120 L94 120 Z M118 106 L132 106 L132 120 L118 120 Z"/>
<path class="s" d="M90 156 L90 134 L110 134 L110 156"/>`},
{id:"kuukou",kanji:"空港",kana:"くうこう",romaji:"kuukou",en:"airport",lesson:13,art:`<path class="s" d="M40 156 L160 156"/>
<path class="s" d="M52 156 L52 100 L74 100 L74 156 M48 100 L78 100 L74 84 L52 84 Z"/>
<path class="s t" d="M56 96 L70 96"/>
<path class="s r" d="M92 72 L148 90 M118 80 L110 62 M118 80 L106 96 M148 90 L164 84 M148 90 L150 106"/>
<path class="s t" d="M90 140 L148 140 M100 148 L158 148"/>`},
{id:"mise",kanji:"店",kana:"みせ",romaji:"mise",en:"shop; store",lesson:13,art:`<path class="s" d="M50 156 L50 84 L150 84 L150 156"/>
<path class="s" d="M40 84 L160 84 L152 60 L48 60 Z"/>
<path class="s r" d="M60 60 L56 84 M76 60 L72 84 M92 60 L88 84 M108 60 L104 84 M124 60 L120 84 M140 60 L136 84"/>
<path class="s" d="M86 156 L86 116 L114 116 L114 156"/>
<rect class="s r" x="118" y="94" width="26" height="18" rx="2"/><path class="s r" d="M131 84 L131 94"/>`},
{id:"bukka",kanji:"物価",kana:"ぶっか",romaji:"bukka",en:"consumer prices",lesson:13,art:`<path class="s" d="M44 56 L96 56 L142 102 L96 148 L44 148 Z"/>
<circle class="s" cx="66" cy="80" r="7"/>
<path class="s r" d="M76 118 L76 92 M68 100 L76 90 L84 100 M70 105 L82 105 M70 112 L82 112"/>
<path class="s r" d="M152 120 L152 62 M141 76 L152 60 L163 76"/>`},
{id:"koukoku",kanji:"広告",kana:"こうこく",romaji:"koukoku",en:"advertisement",lesson:13,art:`<rect class="s" x="44" y="44" width="112" height="72" rx="3"/>
<path class="s" d="M72 116 L72 156 M128 116 L128 156"/>
<path class="fr" d="M80 60 L86 74 L100 76 L90 86 L92 100 L80 92 L68 100 L70 86 L60 74 L74 74 Z"/>
<path class="s t r" d="M110 66 L142 66 M110 80 L142 80 M110 94 L136 94"/>`},
{id:"boshuu",kanji:"募集",kana:"ぼしゅう",romaji:"boshuu",en:"recruitment",lesson:13,art:`<rect class="s" x="54" y="44" width="94" height="116" rx="3"/>
<circle class="s" cx="101" cy="80" r="15"/>
<path class="s" d="M77 128 Q77 100 101 100 Q125 100 125 128"/>
<path class="s r" d="M93 140 L109 140 M101 132 L101 148"/>
<path class="s r" d="M38 40 L58 48 L58 62 L38 70 Z M58 52 L70 52"/>`},
{id:"yakusoku",kanji:"約束",kana:"やくそく",romaji:"yakusoku",en:"promise; appointment",lesson:13,art:`<path class="s" d="M40 150 L40 118 Q40 104 58 104 L88 104 M88 104 Q88 90 98 92 L98 108"/>
<path class="s" d="M160 150 L160 118 Q160 104 142 104 L112 104 M112 104 Q112 90 102 92 L102 108"/>
<path class="fr" d="M92 100 Q100 90 108 100 Q100 110 92 100 Z"/>`},
{id:"ureshii",kana:"うれしい",romaji:"ureshii",en:"glad",lesson:13,art:`<circle class="s" cx="100" cy="62" r="15"/>
<path class="s t" d="M92 58 Q95 54 98 58 M102 58 Q105 54 108 58 M92 68 Q100 76 108 68"/>
<path class="s" d="M100 77 L100 112 M100 112 L86 140 M100 112 L114 140 M100 88 L74 72 M100 88 L126 72"/>
<path class="s r" d="M50 62 L54 70 L62 70 L56 75 L58 83 L50 78 L42 83 L44 75 L38 70 L46 70 Z"/>
<path class="s r" d="M150 62 L154 70 L162 70 L156 75 L158 83 L150 78 L142 83 L144 75 L138 70 L146 70 Z"/>`},
{id:"kanashii",kanji:"悲しい",kana:"かなしい",romaji:"kanashii",en:"sad",lesson:13,art:`<circle class="s" cx="100" cy="96" r="42"/>
<path class="s t" d="M78 86 L92 92 M122 86 L108 92"/>
<path class="s" d="M82 122 Q100 108 118 122"/>
<path class="s r" d="M82 100 Q78 114 86 118 Q92 112 88 100 Z"/>`},
{id:"kibishii",kanji:"厳しい",kana:"きびしい",romaji:"kibishii",en:"strict",lesson:13,art:`<circle class="s" cx="84" cy="92" r="40"/>
<path class="s" d="M66 82 L82 88 M102 82 L86 88"/>
<path class="s r" d="M68 76 L84 72 M102 76 L88 72"/>
<path class="s" d="M70 116 L98 116"/>
<path class="s r" d="M130 60 L152 60 M144 52 L156 60 L144 68 M130 60 L118 72"/>`},
{id:"kibungawarui",kanji:"気分が悪い",kana:"きぶんがわるい",romaji:"kibun ga warui",en:"to feel sick",lesson:13,art:`<circle class="s" cx="100" cy="70" r="20"/>
<path class="s t" d="M92 66 L98 70 M108 66 L102 70"/>
<path class="s" d="M90 82 Q95 78 100 82 Q105 78 110 82"/>
<path class="s" d="M100 90 Q80 100 78 140 M100 90 Q120 100 122 140 M78 140 L122 140"/>
<path class="s r" d="M114 106 Q122 102 120 112 Q112 116 114 106 Z"/>
<path class="s r" d="M132 58 Q140 52 138 62 Q130 66 132 58 M142 76 Q150 70 148 80"/>`},
{id:"karai",kanji:"辛い",kana:"からい",romaji:"karai",en:"hot and spicy; salty",lesson:13,art:`<path class="s r" d="M100 72 Q72 80 68 120 Q66 148 92 150 Q120 150 122 118 Q124 88 110 76 Z"/>
<path class="s" d="M110 76 Q114 60 130 60 Q120 68 116 74"/>
<path class="s r" d="M54 108 Q46 96 54 84 Q58 96 66 92 M146 116 Q154 104 146 92 Q142 104 134 100"/>`},
{id:"sugoi",kana:"すごい",romaji:"sugoi",en:"incredible; awesome",lesson:13,art:`<circle class="s" cx="100" cy="100" r="40"/>
<path class="s r" d="M82 84 L74 92 L82 100 M74 92 L66 92 M66 84 L66 100"/>
<path class="s r" d="M118 84 L126 92 L118 100 M126 92 L134 92 M134 84 L134 100"/>
<ellipse class="s" cx="100" cy="120" rx="10" ry="13"/>
<path class="s r" d="M48 52 L52 60 L60 60 L54 65 L56 73 L48 68 L40 73 L42 65 L36 60 L44 60 Z"/>
<path class="s r" d="M152 52 L156 60 L164 60 L158 65 L160 73 L152 68 L144 73 L146 65 L140 60 L148 60 Z"/>`},
{id:"chikai",kanji:"近い",kana:"ちかい",romaji:"chikai",en:"close; near",lesson:13,art:`<path class="s r" d="M72 60 Q72 46 86 46 Q100 46 100 60 Q100 74 86 98 Q72 74 72 60 Z"/>
<circle style="fill:#fff" cx="86" cy="60" r="6"/>
<path class="s" d="M108 96 Q108 82 122 82 Q136 82 136 96 Q136 110 122 134 Q108 110 108 96 Z"/>
<circle style="fill:#fff" cx="122" cy="96" r="6"/>
<path class="s r" d="M94 150 L114 150 M100 144 L92 150 L100 156 M108 144 L116 150 L108 156"/>`},
{id:"iroiro",kana:"いろいろ",romaji:"iroiro",en:"various; different kinds of",lesson:13,art:`<circle class="s r" cx="64" cy="70" r="18"/>
<rect class="s" x="104" y="52" width="36" height="36" rx="3"/>
<path class="s r" d="M60 152 L84 110 L108 152 Z"/>
<path class="s" d="M150 116 L154 128 L166 128 L156 136 L160 148 L150 140 L140 148 L144 136 L134 128 L146 128 Z"/>`},
{id:"shiawase",kanji:"幸せ",kana:"しあわせ",romaji:"shiawase",en:"happy (lasting happiness)",lesson:13,art:`<circle class="s" cx="100" cy="90" r="34"/>
<path class="s t" d="M84 84 Q90 78 96 84 M104 84 Q110 78 116 84"/>
<path class="s" d="M82 104 Q100 118 118 104"/>
<path class="fr" d="M100 46 Q92 34 100 28 Q108 34 100 46 Z"/>
<path class="s r" d="M58 62 L52 56 M142 62 L148 56 M60 118 L54 124 M140 118 L146 124"/>`},
{id:"dame",kana:"だめ",romaji:"dame",en:"no good",lesson:13,art:`<circle class="s r" cx="100" cy="100" r="46"/>
<path class="s r" d="M68 68 L132 132 M132 68 L68 132" stroke-width="6"/>`},
{id:"amu",kanji:"編む",kana:"あむ",romaji:"amu",en:"to knit",lesson:13,art:`<circle class="s r" cx="70" cy="120" r="26"/>
<path class="s r" d="M54 108 Q70 120 86 108 M50 122 Q70 132 90 122 M58 138 Q70 144 82 138"/>
<path class="s" d="M94 128 L150 60 M102 136 L158 68"/>
<path class="s" d="M150 60 L162 54 M158 68 L170 62"/>
<path class="s r" d="M70 94 Q88 88 102 96"/>`},
{id:"ganbaru",kanji:"頑張る",kana:"がんばる",romaji:"ganbaru",en:"to do one's best; to try hard",lesson:13,art:`<circle class="s" cx="100" cy="52" r="14"/>
<path class="s t" d="M92 48 L98 52 M108 48 L102 52 M92 60 L108 60"/>
<path class="s" d="M100 66 L100 116 M100 116 L86 150 M100 116 L114 150 M100 82 L76 74 L76 64 M100 82 L124 74 L124 64"/>
<circle class="s r" cx="76" cy="60" r="7"/><circle class="s r" cx="124" cy="60" r="7"/>
<path class="s r" d="M58 40 L52 32 M142 40 L148 32"/>`},
{id:"naku",kanji:"泣く",kana:"なく",romaji:"naku",en:"to cry",lesson:13,art:`<circle class="s" cx="100" cy="86" r="38"/>
<path class="s t" d="M82 80 Q88 74 94 80 M106 80 Q112 74 118 80"/>
<path class="s" d="M88 108 Q100 100 112 108"/>
<path class="s r" d="M84 96 L78 132 M84 96 L88 132 M116 96 L112 132 M116 96 L122 132"/>
<circle class="fr" cx="80" cy="142" r="4"/><circle class="fr" cx="118" cy="142" r="4"/>`},
{id:"migaku",kanji:"磨く",kana:"みがく",romaji:"migaku",en:"to brush (teeth); to polish",lesson:13,art:`<path class="s" d="M70 60 Q70 44 100 44 Q130 44 130 60 Q130 100 116 120 Q108 130 104 110 Q100 96 96 110 Q92 130 84 120 Q70 100 70 60 Z"/>
<path class="s r" d="M40 96 L88 80 Q96 78 98 86 Q100 94 92 96 L44 112 Z"/>
<path class="s t" d="M52 92 L56 100 M64 88 L68 96 M76 84 L80 92"/>
<path class="s r" d="M138 54 L142 62 M150 46 L154 54"/>`},
{id:"yakusokuwomamoru",kanji:"約束を守る",kana:"やくそくをまもる",romaji:"yakusoku o mamoru",en:"to keep a promise",lesson:13,art:`<path class="s" d="M46 152 L46 124 Q46 112 62 112 L90 112 M90 112 Q90 100 100 102 L100 116"/>
<path class="s" d="M154 152 L154 124 Q154 112 138 112 L110 112 M110 112 Q110 100 100 102"/>
<path class="fr" d="M92 108 Q100 100 108 108 Q100 116 92 108 Z"/>
<path class="s r" d="M100 40 L126 48 L126 64 Q126 82 100 92 Q74 82 74 64 L74 48 Z"/>
<path class="s r" d="M88 64 L97 74 L114 54"/>`},
{id:"kandousuru",kanji:"感動する",kana:"かんどうする",romaji:"kandou suru",en:"to be moved/touched (by ...)",lesson:13,art:`<circle class="s" cx="100" cy="52" r="14"/>
<path class="s r" d="M94 50 Q96 47 98 50 M102 50 Q104 47 106 50"/>
<path class="s r" d="M92 58 L88 72"/>
<path class="s" d="M100 66 L100 110 M100 110 L88 148 M100 110 L112 148 M100 86 Q86 92 86 106 M100 86 Q114 92 114 106"/>
<path class="fr" d="M100 88 Q90 76 100 68 Q110 76 100 88 Z"/>
<path class="s r" d="M56 56 L48 50 M144 56 L152 50 M60 92 L52 96 M140 92 L148 96"/>`},
{id:"kai",kanji:"〜回",kana:"〜かい",romaji:"kai",en:"... times",lesson:13,art:`<path class="s r" d="M136 78 A44 44 0 1 1 100 56"/>
<path class="s r" d="M100 56 L86 50 M100 56 L96 70"/>
<path class="s" d="M78 100 L78 132 M92 100 L92 132 M106 100 L106 132 M120 96 L106 136"/>`},
{id:"kiro",kana:"〜キロ",romaji:"kiro",en:"... kilometers; ... kilograms",lesson:13,art:`<path class="s" d="M60 40 L60 156"/>
<path class="s" d="M60 52 L140 52 L150 64 L140 76 L60 76 Z"/>
<path class="s r" d="M74 64 L128 64"/>
<path class="s" d="M60 110 L96 110 L96 132 Q96 140 88 140 L68 140 Q60 140 60 132 Z"/>
<path class="s" d="M70 110 L70 100 Q70 92 82 92 Q94 92 94 100 L94 110"/>
<path class="s r" d="M72 124 L88 124"/>`},
{id:"zenbu",kanji:"全部",kana:"ぜんぶ",romaji:"zenbu",en:"all",lesson:13,art:`<path class="s" d="M46 56 L36 56 L36 144 L46 144 M154 56 L164 56 L164 144 L154 144"/>
<circle class="s" cx="70" cy="82" r="11"/><circle class="s r" cx="100" cy="82" r="11"/><circle class="s" cx="130" cy="82" r="11"/>
<circle class="s r" cx="78" cy="114" r="11"/><circle class="s" cx="108" cy="114" r="11"/>
<path class="s r" d="M74 138 L86 152 L104 128"/>`},
{id:"tomoushimasu",kanji:"〜と申します",kana:"〜ともうします",romaji:"to moushimasu",en:"my name is ...",lesson:13,art:`<circle class="s" cx="66" cy="50" r="13"/>
<path class="s" d="M60 62 Q54 98 82 118 L96 128 M60 62 Q76 58 90 66"/>
<path class="s" d="M82 118 L104 128"/>
<rect class="s r" x="110" y="70" width="56" height="42" rx="3"/>
<path class="s t r" d="M120 84 L156 84 M120 96 L146 96"/>
<circle class="s t r" cx="118" cy="66" r="3"/>`},
{id:"tokuni",kanji:"特に",kana:"とくに",romaji:"tokuni",en:"especially",lesson:13,art:`<circle class="s" cx="52" cy="104" r="14"/>
<circle class="s" cx="148" cy="104" r="14"/>
<circle class="s r" cx="100" cy="104" r="20"/>
<path class="s r" d="M100 60 L104 68 L112 68 L106 73 L108 81 L100 76 L92 81 L94 73 L88 68 L96 68 Z"/>
<path class="s t" d="M66 104 L80 104 M120 104 L134 104"/>`},
{id:"ichinichi",kanji:"一日",kana:"いちにち",romaji:"ichinichi",en:"one day",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="s t" x="58" y="74" width="24" height="30" rx="3"/><rect class="s t" x="88" y="74" width="24" height="30" rx="3"/><rect class="s t" x="118" y="74" width="24" height="30" rx="3"/><rect class="s t" x="148" y="74" width="24" height="30" rx="3"/><rect class="s t" x="28" y="112" width="24" height="30" rx="3"/><rect class="s t" x="58" y="112" width="24" height="30" rx="3"/><rect class="s t" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"futsuka",kanji:"二日",kana:"ふつか",romaji:"futsuka",en:"two days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="s t" x="88" y="74" width="24" height="30" rx="3"/><rect class="s t" x="118" y="74" width="24" height="30" rx="3"/><rect class="s t" x="148" y="74" width="24" height="30" rx="3"/><rect class="s t" x="28" y="112" width="24" height="30" rx="3"/><rect class="s t" x="58" y="112" width="24" height="30" rx="3"/><rect class="s t" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"mikka",kanji:"三日",kana:"みっか",romaji:"mikka",en:"three days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="s t" x="118" y="74" width="24" height="30" rx="3"/><rect class="s t" x="148" y="74" width="24" height="30" rx="3"/><rect class="s t" x="28" y="112" width="24" height="30" rx="3"/><rect class="s t" x="58" y="112" width="24" height="30" rx="3"/><rect class="s t" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"yokka",kanji:"四日",kana:"よっか",romaji:"yokka",en:"four days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="fr" x="118" y="74" width="24" height="30" rx="3"/><rect class="s t" x="148" y="74" width="24" height="30" rx="3"/><rect class="s t" x="28" y="112" width="24" height="30" rx="3"/><rect class="s t" x="58" y="112" width="24" height="30" rx="3"/><rect class="s t" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"itsuka",kanji:"五日",kana:"いつか",romaji:"itsuka",en:"five days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="fr" x="118" y="74" width="24" height="30" rx="3"/><rect class="fr" x="148" y="74" width="24" height="30" rx="3"/><rect class="s t" x="28" y="112" width="24" height="30" rx="3"/><rect class="s t" x="58" y="112" width="24" height="30" rx="3"/><rect class="s t" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"muika",kanji:"六日",kana:"むいか",romaji:"muika",en:"six days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="fr" x="118" y="74" width="24" height="30" rx="3"/><rect class="fr" x="148" y="74" width="24" height="30" rx="3"/><rect class="fr" x="28" y="112" width="24" height="30" rx="3"/><rect class="s t" x="58" y="112" width="24" height="30" rx="3"/><rect class="s t" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"nanoka",kanji:"七日",kana:"なのか",romaji:"nanoka",en:"seven days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="fr" x="118" y="74" width="24" height="30" rx="3"/><rect class="fr" x="148" y="74" width="24" height="30" rx="3"/><rect class="fr" x="28" y="112" width="24" height="30" rx="3"/><rect class="fr" x="58" y="112" width="24" height="30" rx="3"/><rect class="s t" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"youka",kanji:"八日",kana:"ようか",romaji:"youka",en:"eight days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="fr" x="118" y="74" width="24" height="30" rx="3"/><rect class="fr" x="148" y="74" width="24" height="30" rx="3"/><rect class="fr" x="28" y="112" width="24" height="30" rx="3"/><rect class="fr" x="58" y="112" width="24" height="30" rx="3"/><rect class="fr" x="88" y="112" width="24" height="30" rx="3"/><rect class="s t" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"kokonoka",kanji:"九日",kana:"ここのか",romaji:"kokonoka",en:"nine days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="fr" x="118" y="74" width="24" height="30" rx="3"/><rect class="fr" x="148" y="74" width="24" height="30" rx="3"/><rect class="fr" x="28" y="112" width="24" height="30" rx="3"/><rect class="fr" x="58" y="112" width="24" height="30" rx="3"/><rect class="fr" x="88" y="112" width="24" height="30" rx="3"/><rect class="fr" x="118" y="112" width="24" height="30" rx="3"/><rect class="s t" x="148" y="112" width="24" height="30" rx="3"/>`},
{id:"tooka",kanji:"十日",kana:"とおか",romaji:"tooka",en:"ten days",lesson:13,art:`<circle class="s r" cx="100" cy="42" r="10"/><path class="s r" d="M100 26 L100 32 M100 52 L100 58 M78 42 L84 42 M116 42 L122 42 M86 28 L90 32 M114 28 L110 32"/><rect class="fr" x="28" y="74" width="24" height="30" rx="3"/><rect class="fr" x="58" y="74" width="24" height="30" rx="3"/><rect class="fr" x="88" y="74" width="24" height="30" rx="3"/><rect class="fr" x="118" y="74" width="24" height="30" rx="3"/><rect class="fr" x="148" y="74" width="24" height="30" rx="3"/><rect class="fr" x="28" y="112" width="24" height="30" rx="3"/><rect class="fr" x="58" y="112" width="24" height="30" rx="3"/><rect class="fr" x="88" y="112" width="24" height="30" rx="3"/><rect class="fr" x="118" y="112" width="24" height="30" rx="3"/><rect class="fr" x="148" y="112" width="24" height="30" rx="3"/>`}
];
