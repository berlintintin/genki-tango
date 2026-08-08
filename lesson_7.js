/* =======================================================================
   lesson_7.js  —  Doodle Tango vocabulary, Lesson 7  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 7.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[7] = [
{id:"megane",kana:"めがね",romaji:"megane",en:"glasses",lesson:7,art:`
<path class="s" d="M55 42 Q100 22 145 42 Q168 78 158 128 Q130 168 100 166 Q70 168 42 128 Q32 78 55 42 Z"/>
<circle class="s r" cx="74" cy="95" r="24"/><circle class="s r" cx="126" cy="95" r="24"/>
<path class="s r" d="M98 95 Q100 90 102 95"/><path class="s t r" d="M50 92 Q42 88 38 80 M150 92 Q158 88 162 80"/>
<path class="s" d="M66 96 Q74 90 82 96 M118 96 Q126 90 134 96"/><path class="s" d="M82 135 Q100 148 118 135"/>
<path class="s t" d="M132 82 L138 76 M138 82 L132 76"/>`},
{id:"utau",kanji:"歌う",kana:"うたう",romaji:"utau",en:"to sing",lesson:7,art:`
<circle class="s" cx="86" cy="70" r="18"/><path class="s t" d="M78 66 Q82 62 86 66 M90 64 Q94 60 98 64"/>
<ellipse class="f" cx="90" cy="80" rx="6" ry="8"/><path class="s" d="M84 88 Q80 115 82 138"/>
<path class="s" d="M82 138 L66 172 M82 138 L98 170"/><path class="s" d="M82 100 L56 92 M86 102 Q104 100 108 88"/>
<path class="s t r" d="M128 60 L128 38 Q138 36 140 42"/><ellipse class="fr" cx="124" cy="61" rx="5" ry="4"/>
<path class="s t r" d="M156 92 L156 74"/><ellipse class="fr" cx="152" cy="93" rx="5" ry="4"/>
<path class="s t" d="M104 74 Q110 78 104 84 M112 70 Q120 78 112 88"/>`},
{id:"kami",kanji:"髪",kana:"かみ",romaji:"kami",en:"hair",lesson:7,art:`
<circle class="s" cx="100" cy="82" r="30"/>
<path class="s r" d="M72 62 Q58 105 66 155 M82 55 Q72 110 82 160 M128 62 Q142 105 134 155 M118 55 Q128 110 118 160"/>
<path class="s r" d="M70 62 Q100 30 130 62"/>
<path class="s t" d="M88 80 Q92 76 96 80 M104 80 Q108 76 112 80"/><path class="s t" d="M92 94 Q100 100 108 94"/>
<path class="s t" d="M150 130 L166 122 M152 140 L168 140 M150 150 L166 158"/>`},
{id:"me",kanji:"目",kana:"め",romaji:"me",en:"eye",lesson:7,art:`
<path class="s" d="M28 100 Q100 42 172 100 Q100 158 28 100 Z"/>
<circle class="s" cx="100" cy="100" r="26"/><circle class="f" cx="100" cy="100" r="11"/>
<circle style="fill:#fff" cx="108" cy="92" r="4"/>
<path class="s t r" d="M56 62 L48 50 M84 50 L80 36 M116 50 L120 36 M144 62 L152 50"/>`},
{id:"kuchi",kanji:"口",kana:"くち",romaji:"kuchi",en:"mouth",lesson:7,art:`
<path class="s r" d="M38 96 Q70 64 100 82 Q130 64 162 96 Q130 156 100 152 Q70 156 38 96 Z"/>
<path class="s t" d="M38 96 Q100 112 162 96"/>
<path class="s t" d="M70 100 L70 112 M100 106 L100 120 M130 100 L130 112"/>`},
{id:"segatakai",kanji:"背が高い",kana:"せがたかい",romaji:"se ga takai",en:"tall",lesson:7,art:`
<circle class="s" cx="70" cy="36" r="13"/><path class="s" d="M70 49 L70 120 M70 120 L56 166 M70 120 L84 166 M70 70 L52 90 M70 70 L88 90"/>
<circle class="s" cx="140" cy="110" r="11"/><path class="s" d="M140 121 L140 148 M140 148 L130 168 M140 148 L150 168 M140 130 L128 140 M140 130 L152 140"/>
<path class="s r" d="M108 160 L108 40 M100 52 L108 40 L116 52"/>`},
{id:"kaburu",kana:"かぶる",romaji:"kaburu",en:"to put on (hat)",lesson:7,art:`
<path class="s r" d="M64 52 Q100 20 136 52 L144 60 Q100 74 56 60 Z"/>
<path class="s t r" d="M100 82 L100 96 M92 88 L100 96 L108 88"/>
<circle class="s" cx="100" cy="122" r="20"/>
<path class="s t" d="M92 118 Q96 114 100 118 M104 118 Q108 114 112 118"/><path class="s t" d="M94 130 Q100 135 106 130"/>
<path class="s" d="M100 142 L100 168 M100 150 L82 160 M100 150 L118 160"/>`},
{id:"ojiisan",kana:"おじいさん",romaji:"ojiisan",en:"grandfather",lesson:7,art:`
<circle class="s" cx="96" cy="58" r="20"/>
<path class="s t" d="M86 54 Q90 51 94 54 M100 54 Q104 51 108 54"/>
<path class="s t" d="M84 68 Q96 84 108 68 Q106 80 96 82 Q86 80 84 68 Z"/>
<path class="s" d="M94 84 Q86 112 88 140 M88 140 L78 172 M88 140 L100 170"/>
<path class="s" d="M92 96 L70 110 M94 100 L118 112"/>
<path class="s r" d="M124 108 L128 170 M118 170 L138 170"/>
<path class="s t" d="M78 40 Q86 32 96 34"/>`},
{id:"kiru",kanji:"着る",kana:"きる",romaji:"kiru",en:"to wear",lesson:7,art:`
<path class="s" d="M70 56 L52 70 L64 92 L76 84 L76 156 L124 156 L124 84 L136 92 L148 70 L130 56 Q116 70 100 70 Q84 70 70 56 Z"/>
<path class="s t r" d="M100 96 L100 122 M90 104 Q100 98 110 104"/>
<circle class="s t r" cx="100" cy="134" r="6"/>`},
{id:"kawaii",kana:"かわいい",romaji:"kawaii",en:"cute",lesson:7,art:`
<path class="s" d="M58 66 L52 34 L80 52 Q100 44 120 52 L148 34 L142 66 Q156 84 148 110 Q130 140 100 138 Q70 140 52 110 Q44 84 58 66 Z"/>
<path class="s t" d="M78 92 Q84 86 90 92 M110 92 Q116 86 122 92"/>
<path class="s t" d="M94 106 Q100 112 106 106"/><path class="s t" d="M96 104 L100 108 L104 104"/>
<path class="s t r" d="M40 120 Q34 110 42 106 Q50 102 52 112 Q54 102 62 106 Q70 110 64 120 L52 132 Z"/>
<path class="s t r" d="M148 130 Q144 124 149 121 Q154 118 156 124 Q158 118 163 121 Q168 124 164 130 L156 138 Z"/>`},
{id:"kazoku",kanji:"家族",kana:"かぞく",romaji:"kazoku",en:"family",lesson:7,art:`<circle class="s" cx="52" cy="66" r="12"/><path class="s" d="M52 78 L52 120 M52 120 L44 152 M52 120 L60 152 M52 92 L64 104"/>
<circle class="s" cx="86" cy="72" r="11"/><path class="s" d="M86 83 L74 118 L98 118 Z M86 118 L86 150 M76 150 L96 150"/>
<circle class="s" cx="118" cy="82" r="9"/><path class="s" d="M118 91 L118 128 M118 128 L110 150 M118 128 L126 150 M118 104 L106 96"/>
<circle class="s" cx="146" cy="92" r="8"/><path class="s" d="M146 100 L138 124 L154 124 Z M146 124 L146 148 M64 104 L106 96"/>
<path class="fr" d="M100 40 Q92 30 100 24 Q108 30 100 40 Z"/>`},
{id:"obaasan",kana:"おばあさん",romaji:"obaasan",en:"grandmother; old woman",lesson:7,art:`<circle class="s" cx="98" cy="58" r="15"/>
<path class="s" d="M86 46 Q98 34 110 46"/>
<circle class="s t" cx="92" cy="58" r="5"/><circle class="s t" cx="104" cy="58" r="5"/><path class="s t" d="M97 58 L99 58"/>
<path class="s t" d="M92 68 Q98 72 104 68"/>
<path class="s" d="M98 73 Q86 80 88 110 L92 150 M98 73 Q112 80 112 110 L110 150"/>
<path class="s" d="M112 96 L132 96 L132 156 M128 96 Q132 88 136 96"/>`},
{id:"chichi",kanji:"父",kana:"ちち",romaji:"chichi",en:"(my) father",lesson:7,art:`<circle class="s" cx="100" cy="52" r="15"/>
<path class="s" d="M86 46 L114 46"/>
<path class="s t" d="M92 52 Q95 49 98 52 M102 52 Q105 49 108 52 M94 60 L106 60"/>
<path class="s" d="M100 67 L100 150 M100 150 L86 152 M100 150 L114 152 M100 84 L80 100 M100 84 L120 100"/>
<path class="s r" d="M100 67 L94 82 L100 96 L106 82 Z"/>`},
{id:"haha",kanji:"母",kana:"はは",romaji:"haha",en:"(my) mother",lesson:7,art:`<circle class="s" cx="100" cy="52" r="15"/>
<path class="s" d="M85 52 Q82 74 90 90 M115 52 Q118 74 110 90"/>
<path class="s t" d="M92 50 Q95 47 98 50 M102 50 Q105 47 108 50 M94 60 Q100 64 106 60"/>
<path class="s" d="M100 67 L86 118 L114 118 Z M100 118 L100 150 M88 92 L74 104 M100 92 L100 84"/>
<path class="s r" d="M86 118 L114 118 L110 140 L90 140 Z"/>`},
{id:"ani",kanji:"兄",kana:"あに",romaji:"ani",en:"(my) older brother",lesson:7,art:`<circle class="s" cx="100" cy="50" r="14"/>
<path class="s" d="M88 44 L92 38 L98 44 L104 38 L110 46"/>
<path class="s t" d="M94 50 Q97 47 100 50 M103 50 Q106 47 109 50 M96 58 L106 58"/>
<path class="s" d="M100 64 L100 148 M100 148 L88 150 M100 148 L112 150 M100 80 L82 92 M100 80 L118 92"/>
<path class="s r" d="M90 30 L100 22 L110 30"/>`},
{id:"ane",kanji:"姉",kana:"あね",romaji:"ane",en:"(my) older sister",lesson:7,art:`<circle class="s" cx="100" cy="50" r="14"/>
<path class="s" d="M100 36 Q114 40 116 30 Q120 44 112 52"/>
<path class="s t" d="M94 50 Q97 47 100 50 M103 50 Q106 47 109 50 M96 58 Q100 61 104 58"/>
<path class="s" d="M100 64 L88 116 L112 116 Z M100 116 L100 148 M88 90 L74 100 M100 90 L100 82"/>
<path class="s r" d="M90 30 L100 22 L110 30"/>`},
{id:"kyoudai",kanji:"兄弟",kana:"きょうだい",romaji:"kyoudai",en:"brothers and sisters",lesson:7,art:`<circle class="s" cx="72" cy="56" r="14"/>
<path class="s" d="M72 70 L72 130 M72 130 L62 156 M72 130 L82 156 M72 86 L56 98 M72 86 L88 98"/>
<circle class="s r" cx="124" cy="78" r="11"/>
<path class="s r" d="M124 89 L124 138 M124 138 L116 158 M124 138 L132 158 M124 100 L110 110 M124 100 L138 110"/>
<path class="s t" d="M88 98 L110 110"/>
<path class="s t" d="M52 40 L52 32 M92 40 L92 32"/>`},
{id:"otokonohito",kanji:"男の人",kana:"おとこのひと",romaji:"otokonohito",en:"man",lesson:7,art:`<circle class="s" cx="100" cy="48" r="16"/>
<path class="s t" d="M90 42 L96 46 M110 42 L104 46 M94 50 Q97 47 100 50 M103 50 Q106 47 109 50 M94 58 L106 58"/>
<path class="s" d="M76 90 L84 74 Q88 66 100 66 Q112 66 116 74 L124 90 L114 96 L114 150 L86 150 L86 96 Z"/>
<path class="s t" d="M100 96 L100 148"/>`},
{id:"onnanohito",kanji:"女の人",kana:"おんなのひと",romaji:"onnanohito",en:"woman",lesson:7,art:`<circle class="s" cx="100" cy="48" r="15"/>
<path class="s" d="M85 48 Q80 78 90 98 M115 48 Q120 78 110 98"/>
<path class="s t" d="M92 46 Q95 43 98 46 M102 46 Q105 43 108 46 M94 56 Q100 60 106 56"/>
<path class="s" d="M100 63 L78 140 L122 140 Z M100 140 L100 152 M88 94 L100 88 L112 94"/>`},
{id:"kaisha",kanji:"会社",kana:"かいしゃ",romaji:"kaisha",en:"company",lesson:7,art:`<path class="s" d="M52 156 L52 60 L120 60 L120 156 Z"/>
<path class="s t" d="M64 74 L74 74 L74 84 L64 84 Z M88 74 L98 74 L98 84 L88 84 Z M108 74 L108 84 M64 98 L74 98 L74 108 L64 108 Z M88 98 L98 98 L98 108 L88 108 Z M64 122 L74 122 L74 132 L64 132 Z M88 122 L98 122 L98 132 L88 132 Z"/>
<path class="s" d="M120 96 L156 96 L156 156 L120 156 M132 112 L144 112 M132 130 L144 130"/>
<path class="s r" d="M86 60 L86 42 L112 48 Q106 55 112 60"/>`},
{id:"shokudou",kanji:"食堂",kana:"しょくどう",romaji:"shokudou",en:"cafeteria; dining commons",lesson:7,art:`<ellipse class="s" cx="100" cy="120" rx="52" ry="16"/>
<path class="s" d="M56 118 Q56 100 100 100 Q144 100 144 118"/>
<circle class="s r" cx="86" cy="110" r="9"/>
<path class="s" d="M108 96 L128 96 L124 118 M118 96 L118 118"/>
<path class="s" d="M46 72 L46 96 M42 60 L50 60 L50 72 L42 72 M154 72 L154 96 M150 60 L158 60 M154 60 L154 72"/>
<path class="s t r" d="M86 78 Q90 70 82 66 M86 90 L86 100"/>`},
{id:"uta",kanji:"歌",kana:"うた",romaji:"uta",en:"song",lesson:7,art:`<path class="s t" d="M40 108 L160 100 M40 128 L160 120"/>
<path class="s" d="M78 116 L78 60 L122 52 L122 108"/>
<ellipse class="s f" cx="70" cy="116" rx="12" ry="9" transform="rotate(-18 70 116)"/>
<ellipse class="s f" cx="114" cy="108" rx="12" ry="9" transform="rotate(-18 114 108)"/>
<path class="s r" d="M50 84 Q56 76 52 68 M150 72 Q156 64 152 56"/>`},
{id:"saakuru",kana:"サークル",romaji:"saakuru",en:"club activity",lesson:7,art:`<circle class="s" cx="100" cy="104" r="42"/>
<circle class="s r" cx="82" cy="104" r="7"/><circle class="s r" cx="118" cy="104" r="7"/><circle class="s r" cx="100" cy="128" r="7"/>
<path class="s t r" d="M82 104 L100 128 L118 104"/>
<path class="s" d="M100 62 L100 40 L134 44 Q128 52 134 60 L100 62"/>
<path class="fr" d="M100 118 L102 124 L108 124 L103 128 L105 134 L100 130 L95 134 L97 128 L92 124 L98 124 Z"/>`},
{id:"kuruma",kanji:"車",kana:"くるま",romaji:"kuruma",en:"car",lesson:7,art:`<path class="s" d="M36 128 L48 100 Q52 92 64 92 L120 92 Q132 92 138 100 L154 124 Q164 126 162 138 L38 138 Q30 134 36 128 Z"/>
<path class="s t" d="M60 100 L74 100 L74 120 L52 120 Z M84 100 L120 100 L134 120 L84 120 Z M78 100 L78 120"/>
<circle class="s" cx="66" cy="140" r="12"/><circle class="s" cx="134" cy="140" r="12"/>
<circle class="f" cx="66" cy="140" r="3"/><circle class="f" cx="134" cy="140" r="3"/>
<path class="s r" d="M40 112 L52 112"/>`},
{id:"nagai",kanji:"長い",kana:"ながい",romaji:"nagai",en:"long",lesson:7,art:`<path class="s" d="M34 100 L166 100"/>
<path class="s r" d="M34 100 L50 86 M34 100 L50 114 M166 100 L150 86 M166 100 L150 114"/>
<path class="s t" d="M34 76 L34 124 M166 76 L166 124"/>`},
{id:"mijikai",kanji:"短い",kana:"みじかい",romaji:"mijikai",en:"short (length)",lesson:7,art:`<path class="s" d="M78 100 L122 100"/>
<path class="s r" d="M78 100 L92 88 M78 100 L92 112 M122 100 L108 88 M122 100 L108 112"/>
<path class="s t" d="M78 76 L78 124 M122 76 L122 124"/>
<path class="s t r" d="M40 100 L60 100 M140 100 L160 100" stroke-dasharray="4 5"/>`},
{id:"hayai",kanji:"速い",kana:"はやい",romaji:"hayai",en:"fast",lesson:7,art:`<path class="fr" d="M116 40 L84 104 L108 104 L92 160 L140 88 L114 88 Z"/>
<path class="s r" d="M30 76 L74 76 M24 100 L64 100 M34 124 L74 124"/>`},
{id:"segahikui",kanji:"背が低い",kana:"せがひくい",romaji:"segahikui",en:"short (stature)",lesson:7,art:`<path class="s" d="M48 40 L48 156 M44 156 L160 156"/>
<path class="s t" d="M48 56 L60 56 M48 72 L60 72 M48 88 L60 88 M48 104 L60 104 M48 120 L64 120"/>
<circle class="s r" cx="108" cy="118" r="12"/>
<path class="s r" d="M108 130 L108 150 M108 138 L96 150 M108 138 L120 150 M108 124 L94 132 M108 124 L122 132"/>
<path class="s r" d="M132 122 L150 122 M141 114 L150 122 L141 130"/>`},
{id:"atamagaii",kanji:"頭がいい",kana:"あたまがいい",romaji:"atamagaii",en:"bright; smart; clever",lesson:7,art:`<path class="s" d="M62 118 Q54 78 92 66 Q130 56 138 96 Q142 118 120 128 L118 140 L86 140 L84 126 Q70 124 62 118 Z"/>
<circle class="s t" cx="94" cy="94" r="10"/><circle class="s t" cx="118" cy="90" r="10"/>
<path class="s t" d="M104 94 L108 92 M84 96 L74 92 M128 88 L138 86"/>
<path class="fr" d="M100 40 L104 52 L116 50 L106 60 L112 72 L100 64 L88 72 L94 60 L84 50 L96 52 Z"/>`},
{id:"shinsetsu",kanji:"親切",kana:"しんせつ",romaji:"shinsetsu",en:"kind",lesson:7,art:`<circle class="s" cx="62" cy="66" r="12"/>
<path class="s" d="M62 78 L62 120 M62 120 L54 150 M62 120 L70 150 M62 92 L86 104"/>
<circle class="s" cx="140" cy="72" r="11"/>
<path class="s" d="M140 83 L140 130 M140 130 L132 154 M140 130 L148 154 M140 96 L120 108"/>
<path class="s r" d="M86 104 L112 112"/>
<path class="fr" d="M100 66 Q92 56 100 50 Q108 56 100 66 Z"/>`},
{id:"benri",kanji:"便利",kana:"べんり",romaji:"benri",en:"convenient",lesson:7,art:`<path class="s" d="M92 150 L108 150 L108 96 L92 96 Z"/>
<path class="s" d="M92 96 Q84 78 96 70 Q104 82 100 96"/>
<path class="s r" d="M108 96 L138 66 Q146 58 152 66 Q146 74 132 80"/>
<path class="s" d="M92 96 L64 74 Q56 68 62 60 Q70 66 84 82"/>
<path class="s r" d="M108 84 Q128 84 134 100"/>
<path class="fr" d="M100 40 L103 50 L113 50 L105 56 L108 66 L100 60 L92 66 L95 56 L87 50 L97 50 Z"/>`},
{id:"haku",kana:"はく",romaji:"haku",en:"to put on (items below your waist)",lesson:7,art:`<path class="s" d="M74 60 L126 60 L132 100 L118 100 L112 150 L96 150 L100 104 L96 104 L92 150 L76 150 L70 104 Z"/>
<path class="s t" d="M74 74 L126 74"/>
<path class="s r" d="M100 30 L100 54 M92 46 L100 54 L108 46"/>
<circle class="s t" cx="150" cy="120" r="9"/>
<path class="s t" d="M150 129 L150 150 M142 138 L150 150 L158 138"/>`},
{id:"shiru",kanji:"知る",kana:"しる",romaji:"shiru",en:"to get to know",lesson:7,art:`<path class="s" d="M60 116 Q52 76 92 66 Q132 56 140 96 Q144 118 122 128 L120 140 L88 140 L86 126 Q68 122 60 116 Z"/>
<path class="s r" d="M100 118 L100 84 M92 96 L100 84 L108 96"/>
<circle class="fr" cx="100" cy="130" r="4"/>
<path class="s t" d="M40 96 L52 96 M148 92 L160 92 M60 60 L68 52 M132 56 L140 48"/>`},
{id:"sumu",kanji:"住む",kana:"すむ",romaji:"sumu",en:"to live",lesson:7,art:`<path class="s" d="M40 100 L100 52 L160 100"/>
<path class="s" d="M54 90 L54 156 L146 156 L146 90"/>
<circle class="s r" cx="100" cy="118" r="10"/>
<path class="s r" d="M100 128 L100 156 M100 134 L88 148 M100 134 L112 148"/>
<path class="s" d="M120 120 L136 120 L136 156 L120 156 Z"/>`},
{id:"hataraku",kanji:"働く",kana:"はたらく",romaji:"hataraku",en:"to work",lesson:7,art:`<circle class="s" cx="86" cy="62" r="14"/>
<path class="s" d="M72 60 Q72 48 86 48 Q100 48 100 60 L72 60 Z"/>
<path class="s" d="M86 76 L86 128 M86 128 L76 154 M86 128 L96 154 M86 92 L108 100"/>
<path class="s r" d="M108 100 L140 88 M132 78 L146 84 L140 98"/>
<circle class="s r" cx="150" cy="130" r="12"/>
<path class="s r" d="M150 116 L150 122 M150 138 L150 144 M136 130 L142 130 M158 130 L164 130 M140 120 L144 124 M160 120 L156 124"/>`},
{id:"futoru",kanji:"太る",kana:"ふとる",romaji:"futoru",en:"to gain weight",lesson:7,art:`<circle class="s" cx="100" cy="52" r="15"/>
<path class="s t" d="M92 50 Q95 47 98 50 M102 50 Q105 47 108 50 M94 60 Q100 64 106 60"/>
<path class="s" d="M100 67 Q64 74 66 116 Q68 148 100 148 Q132 148 134 116 Q136 74 100 67 Z"/>
<path class="s r" d="M40 100 L58 100 M40 100 L50 92 M40 100 L50 108 M160 100 L142 100 M160 100 L150 92 M160 100 L150 108"/>`},
{id:"kakeru",kanji:"かける",kana:"かける",romaji:"kakeru",en:"to put on (glasses)",lesson:7,art:`<circle class="s" cx="86" cy="78" r="30"/>
<path class="s t" d="M78 92 L94 92"/>
<circle class="s r" cx="112" cy="70" r="12"/><circle class="s r" cx="140" cy="66" r="12"/>
<path class="s r" d="M124 68 L128 67 M152 64 Q160 62 160 70"/>
<path class="s" d="M112 100 Q100 92 90 84"/>
<path class="s r" d="M100 118 L118 100"/>`},
{id:"yaseru",kana:"やせる",romaji:"yaseru",en:"to lose weight",lesson:7,art:`<circle class="s" cx="100" cy="52" r="14"/>
<path class="s t" d="M92 50 Q95 47 98 50 M102 50 Q105 47 108 50 M96 60 L104 60"/>
<path class="s" d="M100 66 L94 118 L106 118 L100 66 M100 118 L92 150 M100 118 L108 150 M100 82 L86 96 M100 82 L114 96"/>
<path class="s r" d="M52 92 L70 100 L52 108 M148 92 L130 100 L148 108"/>`},
{id:"kekkonsuru",kanji:"結婚する",kana:"けっこんする",romaji:"kekkon suru",en:"to get married",lesson:7,art:`<circle class="s" cx="66" cy="90" r="14"/>
<path class="s" d="M66 104 L66 146 M66 146 L56 158 M66 146 L76 158 M66 116 L84 124"/>
<circle class="s" cx="134" cy="90" r="14"/>
<path class="s" d="M134 104 L120 150 L148 150 Z M134 116 L116 124"/>
<path class="s r" d="M84 124 L116 124"/>
<circle class="s r" cx="90" cy="52" r="10"/><circle class="s r" cx="108" cy="52" r="10"/>
<path class="fr" d="M100 30 Q94 22 100 18 Q106 22 100 30 Z"/>`},
{id:"ga",kana:"〜が",romaji:"ga",en:"..., but",lesson:7,art:`<path class="s" d="M34 100 L96 100"/>
<path class="s" d="M96 100 L96 150 L134 150"/>
<path class="s r" d="M134 150 L118 138 M134 150 L118 162"/>
<path class="s" d="M96 76 L96 88"/>
<path class="s r" d="M112 88 L156 88 M144 78 L156 88 L144 98"/>
<path class="s r" d="M122 100 L138 116 M138 100 L122 116"/>`},
{id:"nanimo",kanji:"何も",kana:"なにも",romaji:"nanimo",en:"not ... anything",lesson:7,art:`<circle class="s" cx="100" cy="100" r="46"/>
<path class="s r" d="M68 68 L132 132"/>
<path class="s t" d="M60 150 Q60 132 76 130 L76 122 Q84 120 84 128 M76 130 L92 130 Q100 130 100 138 M140 150 Q140 132 124 130 L124 122 Q116 120 116 128 M124 130 L108 130 Q100 130 100 138"/>`},
{id:"nin",kanji:"〜人",kana:"〜にん",romaji:"nin",en:"[counter for people]",lesson:7,art:`<circle class="s" cx="60" cy="70" r="11"/><path class="s" d="M60 81 L60 118 M60 118 L52 140 M60 118 L68 140 M60 92 L48 102 M60 92 L72 102"/>
<circle class="s" cx="100" cy="70" r="11"/><path class="s" d="M100 81 L100 118 M100 118 L92 140 M100 118 L108 140 M100 92 L88 102 M100 92 L112 102"/>
<circle class="s" cx="140" cy="70" r="11"/><path class="s" d="M140 81 L140 118 M140 118 L132 140 M140 118 L148 140 M140 92 L128 102 M140 92 L152 102"/>
<path class="s r" d="M44 154 L156 154 M44 148 L44 158 M156 148 L156 158"/>
<path class="fr" d="M96 158 L100 168 L104 158 Z"/>`},
{id:"hitori",kanji:"一人",kana:"ひとり",romaji:"hitori",en:"one person",lesson:7,art:`<circle class="s r" cx="100" cy="70" r="34"/>
<circle class="s" cx="100" cy="66" r="14"/>
<path class="s" d="M100 80 L100 128 M100 128 L88 156 M100 128 L112 156 M100 96 L82 108 M100 96 L118 108"/>
<path class="fr" d="M148 44 L148 96 M138 54 L148 44 L158 54"/>`},
{id:"futari",kanji:"二人",kana:"ふたり",romaji:"futari",en:"two people",lesson:7,art:`<circle class="s" cx="72" cy="66" r="13"/>
<path class="s" d="M72 79 L72 124 M72 124 L62 152 M72 124 L82 152 M72 92 L88 104"/>
<circle class="s r" cx="128" cy="66" r="13"/>
<path class="s r" d="M128 79 L128 124 M128 124 L118 152 M128 124 L138 152 M128 92 L112 104"/>
<path class="s t" d="M88 104 L112 104"/>
<path class="fr" d="M100 34 L100 22 M90 28 L100 22 L110 28"/>`},
{id:"betsuni",kanji:"別に",kana:"べつに",romaji:"betsuni",en:"nothing in particular",lesson:7,art:`<circle class="s" cx="100" cy="70" r="26"/>
<path class="s t" d="M88 64 L96 68 M112 64 L104 68 M88 82 L112 82"/>
<path class="s" d="M62 108 Q54 104 58 96 M138 108 Q146 104 142 96"/>
<path class="s" d="M74 120 L74 108 Q74 100 84 100 M126 120 L126 108 Q126 100 116 100"/>
<path class="s r" d="M84 150 L116 150" stroke-dasharray="4 5"/>`},
{id:"mochiron",kana:"もちろん",romaji:"mochiron",en:"of course",lesson:7,art:`<path class="s" d="M74 96 L74 150 L108 150 L108 100 Q108 90 96 92 L84 94 L84 78 Q84 68 76 70 Q70 72 70 82 L72 96 Z"/>
<path class="s t" d="M84 110 L84 144"/>
<path class="s r" d="M118 96 L134 116 L162 72"/>
<path class="fr" d="M126 60 L129 68 L137 68 L131 73 L133 81 L126 76 L119 81 L121 73 L115 68 L123 68 Z"/>`},
{id:"yokattara",kana:"よかったら",romaji:"yokattara",en:"if you like",lesson:7,art:`<path class="s" d="M44 150 Q44 122 68 116 L96 106 Q104 104 106 112 Q108 120 98 124 L86 128"/>
<rect class="s r" x="96" y="70" width="44" height="40" rx="4"/>
<path class="s r" d="M118 70 L118 110 M96 88 L140 88"/>
<path class="fr" d="M118 60 Q110 50 118 44 Q126 50 118 60 Z"/>
<path class="s" d="M150 108 Q158 100 152 92 Q150 100 156 104 M150 130 L150 118"/>
<circle class="f" cx="150" cy="140" r="3"/>`},
{id:"oniisan7",kanji:"お兄さん",kana:"おにいさん",romaji:"oniisan",en:"older brother",lesson:7,art:`<circle class="s" cx="100" cy="50" r="15"/>
<path class="s" d="M86 44 Q92 36 100 40 Q108 36 114 44"/>
<path class="s t" d="M93 50 Q96 47 99 50 M101 50 Q104 47 107 50 M95 58 Q100 61 105 58"/>
<path class="s" d="M100 65 L100 130 M100 130 L90 156 M100 130 L110 156 M100 82 L120 70 M100 88 L82 104"/>
<path class="s" d="M120 70 Q136 66 138 82"/>`},
{id:"oneesan7",kanji:"お姉さん",kana:"おねえさん",romaji:"oneesan",en:"older sister",lesson:7,art:`<circle class="s" cx="100" cy="50" r="15"/>
<path class="s" d="M85 48 Q80 78 88 100 M115 48 Q120 78 112 100"/>
<path class="s t" d="M93 48 Q96 45 99 48 M101 48 Q104 45 107 48 M95 58 Q100 61 105 58"/>
<path class="s" d="M100 65 L82 128 L118 128 Z M100 128 L100 156 M100 82 L120 70"/>
<path class="s" d="M120 70 Q134 68 136 82"/>`},
{id:"imouto7",kanji:"妹",kana:"いもうと",romaji:"imouto",en:"younger sister",lesson:7,art:`<circle class="s" cx="100" cy="66" r="14"/>
<path class="s" d="M86 60 Q82 76 88 88 M114 60 Q118 76 112 88"/>
<circle class="s r" cx="86" cy="58" r="4"/><circle class="s r" cx="114" cy="58" r="4"/>
<path class="s t" d="M94 66 Q97 63 100 66 M100 66 Q103 63 106 66 M96 74 Q100 77 104 74"/>
<path class="s" d="M100 80 L86 130 L114 130 Z M100 130 L100 152 M92 152 L108 152"/>
<path class="fr" d="M100 40 L103 48 L111 48 L104 53 L107 61 L100 56 L93 61 L96 53 L89 48 L97 48 Z"/>`},
{id:"otouto7",kanji:"弟",kana:"おとうと",romaji:"otouto",en:"younger brother",lesson:7,art:`<circle class="s" cx="100" cy="70" r="14"/>
<path class="s" d="M88 62 L92 56 L100 60 L108 56 L112 62"/>
<path class="s t" d="M94 70 Q97 67 100 70 M100 70 Q103 67 106 70 M96 78 L104 78"/>
<path class="s" d="M100 84 L100 132 M100 132 L90 154 M100 132 L110 154 M100 98 L84 108 M100 98 L116 108"/>
<circle class="fr" cx="132" cy="140" r="9"/>`},
{id:"depaato7",kana:"デパート",romaji:"depaato",en:"department store",lesson:7,art:`<path class="s" d="M44 156 L44 56 L132 56 L132 156"/>
<path class="s t" d="M56 72 L68 72 M80 72 L92 72 M104 72 L116 72 M56 92 L68 92 M80 92 L92 92 M104 92 L116 92 M56 112 L68 112 M80 112 L92 112 M104 112 L116 112"/>
<path class="s" d="M78 156 L78 130 L98 130 L98 156"/>
<path class="s r" d="M40 56 L136 40 L136 56"/>
<path class="s" d="M138 120 L138 100 L162 100 L162 156 L138 156 M138 120 L162 120"/>
<path class="s r" d="M150 82 L150 68 L166 74 Q160 80 166 84 Z"/>`}
];