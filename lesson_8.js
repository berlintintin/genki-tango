/* =======================================================================
   lesson_8.js  —  Doodle Tango vocabulary, Lesson 8  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 8.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[8] = [
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
{id:"yuumei",kanji:"有名",kana:"ゆうめい",romaji:"yūmei",en:"famous",lesson:8,art:`
<circle class="s" cx="100" cy="62" r="17"/><path class="s t" d="M92 58 Q96 54 100 58 M104 58 Q108 54 112 58 M94 70 Q100 75 106 70"/>
<path class="s" d="M96 79 Q92 106 94 128 M94 128 L78 164 M94 128 L112 162"/>
<path class="s" d="M94 92 L68 82 M98 94 L126 86"/>
<path class="s r" d="M100 20 L104 30 L114 30 L106 37 L109 47 L100 41 L91 47 L94 37 L86 30 L96 30 Z"/>
<path class="s t" d="M40 60 L52 68 M36 84 L50 86 M164 56 L152 66 M168 80 L154 84"/>
<path class="s t r" d="M44 128 L58 120 M48 140 L60 136"/>`},
{id:"yuki",kanji:"雪",kana:"ゆき",romaji:"yuki",en:"snow",lesson:8,art:`<path class="s r" d="M100 40 L100 120 M70 56 L130 104 M130 56 L70 104"/>
<path class="s r" d="M100 40 L92 50 M100 40 L108 50 M70 56 L70 68 M70 56 L82 58 M130 56 L118 58 M130 56 L130 68"/>
<path class="s" d="M40 148 Q70 128 100 148 Q130 128 160 148 L160 158 L40 158 Z"/>
<circle class="s t r" cx="60" cy="120" r="3"/><circle class="s t r" cx="140" cy="128" r="3"/>`},
{id:"tenkiyohou",kanji:"天気予報",kana:"てんきよほう",romaji:"tenki yohou",en:"weather forecast",lesson:8,art:`<rect class="s" x="36" y="46" width="128" height="86" rx="4"/>
<path class="s" d="M84 132 L84 148 M116 132 L116 148 M70 148 L130 148"/>
<circle class="s r" cx="70" cy="76" r="10"/>
<path class="s r" d="M70 60 L70 54 M70 98 L70 104 M54 76 L48 76 M86 76 L92 76 M58 64 L54 60 M82 64 L86 60"/>
<path class="s" d="M104 92 Q96 92 96 82 Q96 72 108 74 Q112 62 126 66 Q140 66 138 82 Q148 84 144 94 Z"/>
<path class="s" d="M126 128 L146 108 M136 108 L136 118"/>`},
{id:"kion",kanji:"気温",kana:"きおん",romaji:"kion",en:"temperature",lesson:8,art:`<path class="s" d="M86 40 Q86 32 100 32 Q114 32 114 40 L114 116 Q126 124 126 138 Q126 156 100 156 Q74 156 74 138 Q74 124 86 116 Z"/>
<circle class="fr" cx="100" cy="138" r="12"/>
<path class="fr" d="M96 66 L104 66 L104 120 L96 120 Z"/>
<path class="s t" d="M114 56 L124 56 M114 76 L124 76 M114 96 L124 96"/>
<path class="s r" d="M148 60 L148 46 M141 53 L148 46 L155 53 M141 62 L155 62"/>`},
{id:"natsu",kanji:"夏",kana:"なつ",romaji:"natsu",en:"summer",lesson:8,art:`<circle class="s r" cx="100" cy="76" r="26"/>
<path class="s r" d="M100 34 L100 44 M100 108 L100 118 M58 76 L68 76 M132 76 L142 76 M70 46 L77 53 M130 46 L123 53 M70 106 L77 99 M130 106 L123 99"/>
<path class="s" d="M34 140 Q54 128 74 140 Q94 128 114 140 Q134 128 154 140 M40 152 Q60 142 80 152 Q100 142 120 152 Q140 142 160 152"/>`},
{id:"fuyu",kanji:"冬",kana:"ふゆ",romaji:"fuyu",en:"winter",lesson:8,art:`<path class="s" d="M100 40 L100 150 M74 74 L126 116 M126 74 L74 116"/>
<path class="s" d="M100 40 L91 51 M100 40 L109 51 M74 74 L74 88 M74 74 L88 76 M126 74 L112 76 M126 74 L126 88 M74 116 L74 102 M74 116 L88 114 M126 116 L112 114 M126 116 L126 102 M100 150 L90 138 M100 150 L110 138"/>
<path class="fr" d="M52 148 Q100 136 148 148 L148 158 Q100 148 52 158 Z"/>
<path class="fr" d="M136 152 L132 176 L146 176 L150 154 Z"/>`},
{id:"kesa",kanji:"今朝",kana:"けさ",romaji:"kesa",en:"this morning",lesson:8,art:`<path class="s" d="M34 132 L166 132"/>
<circle class="s r" cx="100" cy="132" r="30"/>
<path class="s r" d="M100 88 L100 78 M60 132 L48 132 M140 132 L152 132 M70 100 L62 92 M130 100 L138 92"/>
<path class="s t" d="M48 148 Q64 140 80 148 M120 148 Q136 140 152 148"/>
<path class="s" d="M118 60 L118 90 M104 68 Q118 60 132 68"/>`},
{id:"asatte",kana:"あさって",romaji:"asatte",en:"the day after tomorrow",lesson:8,art:`<rect class="s" x="34" y="60" width="40" height="44" rx="3"/><rect class="s" x="80" y="60" width="40" height="44" rx="3"/><rect class="s r" x="126" y="60" width="40" height="44" rx="3"/>
<path class="s t" d="M34 74 L74 74 M80 74 L120 74 M126 74 L166 74"/>
<circle class="s t" cx="54" cy="90" r="7"/>
<path class="fr" d="M146 82 L149 90 L157 90 L151 95 L153 103 L146 98 L139 103 L141 95 L135 90 L143 90 Z"/>
<path class="s r" d="M56 140 L144 140 M132 130 L146 140 L132 150" stroke-dasharray="0"/>
<path class="s t" d="M56 140 L100 140" stroke-dasharray="3 5"/>`},
{id:"maishuu",kanji:"毎週",kana:"まいしゅう",romaji:"maishuu",en:"every week",lesson:8,art:`<rect class="s" x="36" y="72" width="128" height="40" rx="4"/>
<path class="s t" d="M54 72 L54 112 M72 72 L72 112 M90 72 L90 112 M108 72 L108 112 M126 72 L126 112 M144 72 L144 112"/>
<path class="s r" d="M52 140 Q100 120 148 140" />
<path class="s r" d="M148 140 L138 128 M148 140 L136 146"/>
<path class="s r" d="M52 140 Q46 128 56 122"/>`},
{id:"kongetsu",kanji:"今月",kana:"こんげつ",romaji:"kongetsu",en:"this month",lesson:8,art:`<rect class="s" x="40" y="52" width="120" height="104" rx="5"/>
<path class="s" d="M40 78 L160 78"/><path class="s" d="M66 44 L66 60 M134 44 L134 60"/>
<path class="s t" d="M56 92 L56 148 M84 92 L84 148 M112 92 L112 148 M140 92 L140 148 M40 106 L160 106 M40 132 L160 132"/>
<circle class="s r" cx="100" cy="119" r="38" fill="none"/>
<path class="s r" d="M100 40 L100 30 M92 36 L100 30 L108 36"/>`},
{id:"raigetsu",kanji:"来月",kana:"らいげつ",romaji:"raigetsu",en:"next month",lesson:8,art:`<rect class="s" x="30" y="66" width="70" height="80" rx="4"/>
<path class="s" d="M30 86 L100 86"/><path class="s t" d="M44 74 L44 60 M86 74 L86 60"/>
<rect class="s r" x="112" y="66" width="58" height="80" rx="4"/>
<path class="s r" d="M112 86 L170 86"/>
<path class="s r" d="M100 106 L112 106 M104 98 L112 106 L104 114"/>`},
{id:"kamera",kana:"カメラ",romaji:"kamera",en:"camera",lesson:8,art:`<path class="s" d="M40 78 L60 78 L68 64 L108 64 L116 78 L160 78 Q168 78 168 88 L168 138 Q168 146 160 146 L48 146 Q40 146 40 138 Z"/>
<circle class="s" cx="100" cy="110" r="24"/><circle class="s r" cx="100" cy="110" r="12"/>
<circle class="f" cx="152" cy="92" r="4"/>
<path class="s t" d="M52 90 L64 90"/>`},
{id:"tokoro",kanji:"所",kana:"ところ",romaji:"tokoro",en:"place",lesson:8,art:`<path class="s" d="M40 70 L80 56 L120 70 L160 56 L160 140 L120 154 L80 140 L40 154 Z"/>
<path class="s t" d="M80 56 L80 140 M120 70 L120 154"/>
<path class="s r" d="M100 78 Q84 78 84 96 Q84 112 100 128 Q116 112 116 96 Q116 78 100 78 Z"/>
<circle style="fill:#fff" cx="100" cy="96" r="6"/>`},
{id:"tomato",kana:"トマト",romaji:"tomato",en:"tomato",lesson:8,art:`<circle class="s r" cx="100" cy="112" r="42"/>
<path class="s" d="M100 70 L100 82 M100 70 Q86 60 74 66 Q84 74 96 74 M100 70 Q114 60 126 66 Q116 74 104 74 M100 74 Q92 62 82 62 M100 74 Q108 62 118 62"/>
<path style="fill:#fff" d="M80 96 Q88 88 92 98 Q84 104 80 96 Z"/>`},
{id:"hashi",kana:"はし",romaji:"hashi",en:"chopsticks",lesson:8,art:`<path class="s" d="M52 44 L96 150 M64 40 L108 148"/>
<path class="s r" d="M52 44 L64 40"/>
<circle class="s r" cx="128" cy="120" r="18"/>
<path class="s t r" d="M120 112 Q128 120 136 112"/>
<path class="s" d="M96 150 L120 130 M108 148 L128 132"/>`},
{id:"paatii",kana:"パーティー",romaji:"paatii",en:"party",lesson:8,art:`<ellipse class="s" cx="74" cy="72" rx="18" ry="22"/><path class="s t" d="M74 94 L74 140"/>
<ellipse class="s r" cx="120" cy="66" rx="18" ry="22"/><path class="s t r" d="M120 88 L120 140"/>
<path class="s r" d="M150 150 L136 108 L166 128 Z"/>
<path class="s t" d="M138 118 L150 112 M144 132 L156 128 M60 150 Q100 140 150 150"/>
<circle class="fr" cx="90" cy="120" r="3"/><circle class="f" cx="108" cy="112" r="3"/><circle class="fr" cx="46" cy="120" r="3"/>`},
{id:"baabekyuu",kana:"バーベキュー",romaji:"baabekyuu",en:"barbecue",lesson:8,art:`<path class="s" d="M50 104 L150 104 Q150 128 128 132 L72 132 Q50 128 50 104 Z"/>
<path class="s t" d="M64 104 L64 128 M84 104 L84 130 M104 104 L104 130 M124 104 L124 130 M144 104 L144 128"/>
<path class="s" d="M72 132 L60 156 M128 132 L140 156"/>
<path class="s r" d="M76 92 Q70 80 78 72 Q82 82 88 84 Q84 74 92 66 Q96 82 90 92 M112 92 Q106 82 112 74 Q116 84 122 84 Q118 74 124 68 Q128 84 122 92"/>`},
{id:"hoomusutei",kana:"ホームステイ",romaji:"hoomusutei",en:"homestay; living with a local family",lesson:8,art:`<path class="s" d="M40 96 L96 54 L152 96"/>
<path class="s" d="M52 86 L52 152 L140 152 L140 86"/>
<path class="s" d="M96 152 L96 118 L120 118 L120 152"/>
<circle class="s r" cx="76" cy="112" r="10"/>
<path class="s r" d="M76 122 L76 142 M76 128 L66 138 M76 128 L86 138"/>
<path class="s" d="M150 128 L172 128 L172 156 L150 156 Z M158 128 L158 118 L166 118 L166 128"/>
<path class="s t r" d="M158 138 L166 138 M158 146 L166 146"/>`},
{id:"supein",kana:"スペイン",romaji:"supein",en:"Spain",lesson:8,art:`<path class="f" d="M72 92 Q72 68 100 68 Q128 68 128 92 L124 122 Q118 144 100 144 Q82 144 76 122 Z"/>
<path class="s r" d="M74 86 Q50 80 44 56 Q64 62 82 82 Z"/>
<path class="s r" d="M126 86 Q150 80 156 56 Q136 62 118 82 Z"/>
<circle style="fill:#fff" cx="89" cy="98" r="4"/><circle style="fill:#fff" cx="111" cy="98" r="4"/>
<circle class="s r" cx="100" cy="128" r="6" style="fill:#fff"/>
<path class="s" d="M92 120 L95 125 M108 120 L105 125"/>`},
{id:"nanika",kanji:"何か",kana:"なにか",romaji:"nanika",en:"something",lesson:8,art:`<path class="s" d="M56 96 L144 96 L144 150 L56 150 Z M56 96 L72 76 L128 76 L144 96 M100 76 L100 150"/>
<path class="s t" d="M56 96 L144 96"/>
<path class="s r" d="M92 118 Q92 108 100 108 Q110 108 110 118 Q110 126 100 128 L100 134"/>
<circle class="fr" cx="100" cy="144" r="3"/>`},
{id:"jouzu",kanji:"上手",kana:"じょうず",romaji:"jouzu",en:"skillful; good at...",lesson:8,art:`<circle class="s" cx="100" cy="104" r="46"/>
<circle class="s r" cx="100" cy="104" r="28"/>
<circle class="s r" cx="100" cy="104" r="10"/>
<path class="s" d="M150 60 L108 100 M150 60 L136 60 M150 60 L150 74"/>
<path class="f" d="M108 100 L124 92 L118 108 Z"/>
<path class="fr" d="M60 46 L63 54 L71 54 L65 59 L67 67 L60 62 L53 67 L55 59 L49 54 L57 54 Z"/>`},
{id:"heta",kanji:"下手",kana:"へた",romaji:"heta",en:"clumsy; poor at...",lesson:8,art:`<circle class="s" cx="88" cy="104" r="42"/>
<circle class="s t" cx="88" cy="104" r="24"/>
<circle class="s t" cx="88" cy="104" r="8"/>
<path class="s r" d="M158 52 L138 78 M158 52 L146 54 M158 52 L156 64"/>
<path class="fr" d="M138 78 L130 70 L134 84 Z"/>
<path class="s t r" d="M140 120 Q150 116 148 128 M120 150 Q130 146 128 158"/>`},
{id:"iu",kanji:"言う",kana:"いう",romaji:"iu",en:"to say",lesson:8,art:`<circle class="s" cx="72" cy="90" r="30"/>
<path class="s t" d="M62 84 L70 88 M84 82 L76 86"/>
<path class="s" d="M64 100 Q72 108 82 100 L78 110 L70 110 Z"/>
<path class="s r" d="M104 66 Q150 62 150 96 Q150 122 118 124 L96 138 L104 118 Q90 110 92 92 Q94 72 104 66 Z"/>
<path class="s t r" d="M112 90 L136 90 M112 102 L128 102"/>`},
{id:"iru",kana:"いる",romaji:"iru",en:"to need",lesson:8,art:`<path class="s r" d="M100 40 Q86 40 86 56 Q86 68 100 82 Q114 68 114 56 Q114 40 100 40 Z"/>
<path class="fr" d="M96 96 L104 96 L104 106 L96 106 Z"/>
<path class="s" d="M50 150 Q50 124 72 120 L72 112 Q80 110 80 118 M72 120 L88 120 Q96 120 96 128"/>
<path class="s" d="M150 150 Q150 124 128 120 L128 112 Q120 110 120 118 M128 120 L112 120 Q104 120 104 128"/>`},
{id:"osokunaru",kanji:"遅くなる",kana:"おそくなる",romaji:"osoku naru",en:"to be late",lesson:8,art:`<circle class="s" cx="88" cy="96" r="40"/>
<path class="s" d="M88 96 L88 70 M88 96 L108 108"/>
<path class="s r" d="M126 60 Q150 66 150 96 Q150 116 134 126"/>
<path class="s r" d="M150 96 L158 88 M150 96 L142 88 M150 96 L158 104"/>
<path class="s t" d="M88 44 L88 36 M40 96 L32 96"/>`},
{id:"ofuronihairu",kanji:"お風呂に入る",kana:"おふろにはいる",romaji:"ofuro ni hairu",en:"to take a bath",lesson:8,art:`<path class="s" d="M40 108 L160 108 Q160 140 128 144 L72 144 Q40 140 40 108 Z"/>
<path class="s" d="M52 108 L52 90 Q52 82 62 82 L62 100"/>
<circle class="s" cx="96" cy="98" r="11"/>
<path class="s" d="M96 108 L110 118 M110 118 L128 108"/>
<path class="s r" d="M78 70 Q72 62 78 54 M100 66 Q94 58 100 50 M122 70 Q116 62 122 54"/>
<path class="s" d="M64 144 L58 158 M136 144 L142 158"/>`},
{id:"omou",kanji:"思う",kana:"おもう",romaji:"omou",en:"to think",lesson:8,art:`<circle class="s" cx="76" cy="108" r="30"/>
<path class="s t" d="M66 102 L74 106 M88 100 L80 104 M68 118 Q76 124 86 118"/>
<path class="s" d="M104 78 Q98 62 118 58 Q122 44 140 48 Q158 46 156 66 Q168 72 158 84 Q130 92 104 78 Z"/>
<circle class="s r" cx="112" cy="98" r="6"/><circle class="s r" cx="98" cy="112" r="4"/>`},
{id:"kiru_cut",kanji:"切る",kana:"きる",romaji:"kiru",en:"to cut",lesson:8,art:`<circle class="s" cx="70" cy="70" r="12"/><circle class="s" cx="70" cy="118" r="12"/>
<path class="s" d="M78 78 L150 120 M78 110 L150 68"/>
<path class="s r" d="M150 120 L162 116 M150 68 L162 72"/>
<path class="s t r" d="M110 40 L118 52 M126 44 L120 58" stroke-dasharray="4 4"/>`},
{id:"tsukuru",kanji:"作る",kana:"つくる",romaji:"tsukuru",en:"to make",lesson:8,art:`<circle class="s r" cx="100" cy="76" r="22"/>
<path class="s r" d="M100 54 L100 44 M100 98 L100 108 M78 76 L68 76 M122 76 L132 76 M84 60 L77 53 M116 60 L123 53 M84 92 L77 99 M116 92 L123 99"/>
<circle class="fr" cx="100" cy="76" r="8"/>
<path class="s" d="M56 150 Q56 128 74 124 L74 116 Q82 114 82 122 M74 124 L88 124 Q96 124 96 132"/>
<path class="s" d="M144 150 Q144 128 126 124 L126 116 Q118 114 118 122 M126 124 L112 124 Q104 124 104 132"/>`},
{id:"furu",kanji:"降る",kana:"ふる",romaji:"furu",en:"(rain/snow) falls",lesson:8,art:`<path class="s" d="M62 82 Q52 62 74 58 Q78 44 98 48 Q116 44 118 62 Q138 62 134 82 Q100 90 62 82 Z"/>
<path class="s r" d="M66 100 L58 124 M92 100 L84 124 M118 100 L110 124"/>
<path class="s" d="M78 108 L74 118 M74 108 L78 118 M104 116 L100 126 M100 116 L104 126 M130 108 L126 118 M126 108 L130 118"/>
<path class="s r" d="M70 138 L62 156 M96 138 L88 156 M122 138 L114 156"/>`},
{id:"motteiku",kanji:"持っていく",kana:"もっていく",romaji:"motte iku",en:"to take (a thing)",lesson:8,art:`<circle class="s" cx="80" cy="52" r="13"/>
<path class="s" d="M80 65 L80 116 M80 116 L70 152 M80 116 L92 150 M80 82 L100 96"/>
<path class="s" d="M100 96 L100 116 L138 116 L138 96 Q138 90 128 90 L110 90 Q100 90 100 96 Z"/>
<path class="s t" d="M112 90 Q112 80 124 80 Q136 80 136 90"/>
<path class="s r" d="M150 84 L170 84 M160 74 L170 84 L160 94"/>`},
{id:"suteru",kanji:"捨てる",kana:"すてる",romaji:"suteru",en:"to throw away",lesson:8,art:`<path class="s" d="M66 92 L134 92 L128 154 L72 154 Z"/>
<path class="s" d="M58 92 L142 92 M84 92 L88 80 L112 80 L116 92"/>
<path class="s t" d="M86 106 L90 142 M100 106 L100 142 M114 106 L110 142"/>
<path class="s r" d="M150 44 Q120 44 108 66"/>
<path class="fr" d="M108 66 L104 52 L120 58 Z"/>`},
{id:"hajimeru",kanji:"始める",kana:"はじめる",romaji:"hajimeru",en:"to begin",lesson:8,art:`<path class="s" d="M56 40 L56 156"/>
<path class="s" d="M56 52 L120 52 L108 70 L120 88 L56 88"/>
<path class="fr" d="M72 60 L72 80 L92 70 Z"/>
<path class="s r" d="M76 120 L140 120 M128 108 L144 120 L128 132"/>`},
{id:"untensuru",kanji:"運転する",kana:"うんてんする",romaji:"unten suru",en:"to drive",lesson:8,art:`<circle class="s" cx="100" cy="104" r="52"/>
<circle class="s r" cx="100" cy="104" r="16"/>
<path class="s r" d="M100 88 L100 56 M86 116 L58 138 M114 116 L142 138"/>
<path class="s" d="M100 52 L100 36 M84 44 L84 30 L116 30 L116 44"/>
<path class="s t" d="M64 90 Q76 82 88 88 M136 90 Q124 82 112 88"/>`},
{id:"un",kana:"うん",romaji:"un",en:"uh-huh; yes",lesson:8,art:`<circle class="s" cx="96" cy="88" r="34"/>
<path class="s t" d="M84 82 Q90 76 96 82 M100 82 Q106 76 112 82 M86 102 Q98 112 110 102"/>
<path class="s r" d="M96 30 L96 46 M88 40 L96 48 L104 40 M96 130 L96 146 M88 138 L96 146 L104 138"/>
<path class="s r" d="M150 74 L162 86 L150 98"/>`},
{id:"uun",kana:"ううん",romaji:"uun",en:"uh-uh; no",lesson:8,art:`<circle class="s" cx="100" cy="92" r="34"/>
<path class="s t" d="M86 86 L96 90 M114 86 L104 90 M88 108 Q100 100 112 108"/>
<path class="s r" d="M40 92 L56 92 M48 84 L40 92 L48 100 M144 92 L160 92 M152 84 L160 92 L152 100"/>
<path class="s r" d="M150 44 L166 60 M166 44 L150 60"/>`},
{id:"itsumo",kana:"いつも",romaji:"itsumo",en:"always",lesson:8,art:`<path class="s" d="M100 46 A54 54 0 1 1 46 100"/>
<path class="s r" d="M46 100 L36 86 M46 100 L60 92"/>
<path class="s" d="M100 46 L88 40 M100 46 L92 58"/>
<circle class="fr" cx="100" cy="100" r="6"/>
<path class="s t r" d="M100 74 L100 100 L120 108"/>`},
{id:"osoku",kanji:"遅く",kana:"おそく",romaji:"osoku",en:"(do something) late",lesson:8,art:`<path class="s r" d="M74 52 Q58 60 58 82 Q58 108 84 116 Q72 96 76 74 Q78 60 74 52 Z"/>
<circle class="s" cx="122" cy="112" r="34"/>
<path class="s" d="M122 112 L122 90 M122 112 L140 122"/>
<path class="fr" d="M96 60 L98 66 L104 66 L99 70 L101 76 L96 72 L91 76 L93 70 L88 66 L94 66 Z"/>
<circle class="fr" cx="150" cy="58" r="3"/>`},
{id:"kanpai",kanji:"乾杯",kana:"かんぱい",romaji:"kanpai",en:"Cheers! (a toast)",lesson:8,art:`<path class="s" d="M52 60 L86 60 L80 104 Q80 116 69 118 L69 148 M52 148 L86 148 M52 60 Q48 84 69 92"/>
<path class="s r" d="M114 60 L148 60 L142 104 Q142 116 131 118 L131 148 M114 148 L148 148 M148 60 Q152 84 131 92"/>
<path class="s r" d="M92 70 L108 62 M96 84 L112 80"/>
<path class="fr" d="M100 40 L103 48 L111 48 L105 53 L107 61 L100 56 L93 61 L95 53 L89 48 L97 48 Z"/>`},
{id:"minnade",kana:"みんなで",romaji:"minna de",en:"all (of the people) together",lesson:8,art:`<circle class="s" cx="100" cy="52" r="11"/><path class="s" d="M100 63 L100 92 M90 100 L110 100 L100 78 Z"/>
<circle class="s r" cx="56" cy="86" r="11"/><path class="s r" d="M56 97 L56 124 M48 130 L64 130 L56 110 Z"/>
<circle class="s r" cx="144" cy="86" r="11"/><path class="s r" d="M144 97 L144 124 M136 130 L152 130 L144 110 Z"/>
<circle class="s" cx="76" cy="128" r="11"/><path class="s" d="M76 139 L76 160 M68 160 L84 160 L76 148 Z"/>
<circle class="s" cx="124" cy="128" r="11"/><path class="s" d="M124 139 L124 160 M116 160 L132 160 L124 148 Z"/>
<path class="fr" d="M100 128 Q92 120 100 114 Q108 120 100 128 Z"/>`},
{id:"zannen",kanji:"残念",kana:"ざんねん",romaji:"zannen",en:"That's too bad.",lesson:8,art:`<circle class="s" cx="96" cy="96" r="38"/>
<path class="s" d="M82 88 L92 94 M110 88 L100 94"/>
<path class="s r" d="M82 116 Q96 106 110 116"/>
<path class="s" d="M78 74 L70 66 M114 74 L122 66"/>
<path class="s t r" d="M140 54 Q134 62 140 70 M154 60 Q148 68 154 76"/>
<path class="s r" d="M60 128 L54 140 M52 120 L44 128"/>`},
{id:"mada",kana:"まだ",romaji:"mada",en:"not ... yet",lesson:8,art:`<path class="s" d="M64 44 L136 44 M64 156 L136 156"/>
<path class="s" d="M74 44 Q74 82 100 100 Q74 118 74 156 M126 44 Q126 82 100 100 Q126 118 126 156"/>
<path class="fr" d="M84 62 Q100 74 116 62 L116 52 L84 52 Z"/>
<path class="s r" d="M100 100 L100 60"/>
<rect class="s r" x="140" y="120" width="24" height="24" rx="2"/>`},
{id:"nitsuite",kana:"〜について",romaji:"ni tsuite",en:"about ...; concerning ...",lesson:8,art:`<rect class="s" x="40" y="60" width="60" height="80" rx="3"/>
<path class="s t r" d="M52 78 L88 78 M52 94 L88 94 M52 110 L76 110"/>
<circle class="s r" cx="132" cy="88" r="22"/>
<path class="s r" d="M148 104 L166 122"/>
<path class="s" d="M100 100 L118 100 M110 92 L118 100 L110 108"/>`},
{id:"do",kanji:"〜度",kana:"〜ど",romaji:"do",en:"... degrees (temperature)",lesson:8,art:`<path class="s" d="M52 132 A52 52 0 0 1 148 132"/>
<path class="s t" d="M60 118 L68 124 M78 100 L84 108 M100 92 L100 102 M122 100 L116 108 M140 118 L132 124"/>
<path class="s r" d="M100 132 L130 104"/>
<circle class="f" cx="100" cy="132" r="6"/>
<circle class="s r" cx="150" cy="70" r="9"/>`},
{id:"dou",kana:"どう",romaji:"dou",en:"how",lesson:8,art:`<circle class="s" cx="86" cy="88" r="34"/>
<path class="s t" d="M76 82 L84 86 M96 82 L88 86 M78 102 Q86 96 96 102"/>
<path class="s r" d="M120 60 Q120 46 134 46 Q150 46 150 62 Q150 74 134 80 L134 92"/>
<circle class="fr" cx="134" cy="108" r="4"/>
<path class="s t r" d="M120 118 L128 110 M116 134 L126 126"/>`},
{id:"kaishain8",kanji:"会社員",kana:"かいしゃいん",romaji:"kaishain",en:"office worker",lesson:8,art:`<circle class="s" cx="100" cy="48" r="14"/>
<path class="s" d="M100 62 L100 96 M88 96 L112 96"/>
<path class="s r" d="M100 62 L94 76 L100 84 L106 76 Z"/>
<path class="s" d="M50 150 L150 150 L150 108 L50 108 Z M50 124 L150 124"/>
<rect class="s" x="86" y="132" width="28" height="18"/>
<path class="s t" d="M66 116 L78 116 M122 116 L134 116"/>
<rect class="s r" x="118" y="98" width="26" height="20" rx="2"/>`},
{id:"shigoto8",kanji:"仕事",kana:"しごと",romaji:"shigoto",en:"job; work; occupation",lesson:8,art:`<path class="s" d="M56 84 L144 84 L138 150 L62 150 Z"/>
<path class="s" d="M84 84 L84 70 Q84 62 96 62 L104 62 Q116 62 116 70 L116 84"/>
<path class="s" d="M56 108 L144 108"/>
<circle class="s r" cx="150" cy="60" r="14"/>
<path class="s r" d="M150 46 L150 52 M150 68 L150 74 M136 60 L142 60 M158 60 L164 60 M140 50 L144 54 M160 50 L156 54"/>
<circle class="fr" cx="150" cy="60" r="4"/>`},
{id:"karaoke8",kana:"カラオケ",romaji:"karaoke",en:"karaoke",lesson:8,art:`<rect class="s" x="40" y="48" width="94" height="66" rx="4"/>
<path class="s" d="M74 114 L74 128 M100 114 L100 128 M60 128 L114 128"/>
<ellipse class="s r f" cx="70" cy="72" rx="9" ry="7" transform="rotate(-18 70 72)"/>
<path class="s r" d="M79 68 L79 88"/>
<path class="s t r" d="M96 64 Q104 58 112 64 M96 80 L118 80"/>
<rect class="s" x="140" y="58" width="16" height="24" rx="8"/>
<path class="s" d="M148 82 L148 140 M136 140 L160 140"/>`},
{id:"ofuro8",kanji:"お風呂",kana:"おふろ",romaji:"ofuro",en:"bath",lesson:8,art:`<path class="s" d="M36 100 L164 100 Q164 134 130 138 L70 138 Q36 134 36 100 Z"/>
<path class="s" d="M50 100 L50 80 Q50 70 62 70 L62 92"/>
<path class="s" d="M60 138 L54 156 M140 138 L146 156"/>
<circle class="s r" cx="128" cy="118" r="9"/>
<path class="s r" d="M120 116 Q128 122 136 116"/>
<path class="s r" d="M80 60 Q74 52 80 44 M100 56 Q94 48 100 40 M120 60 Q114 52 120 44"/>`}
];