/* =======================================================================
   lesson_11.js  —  Doodle Tango vocabulary, Lesson 11  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 11.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[11] = [
{id:"onsen",kanji:"温泉",kana:"おんせん",romaji:"onsen",en:"hot spring",lesson:11,art:`
<path class="s" d="M20 130 Q36 118 54 128 Q72 120 92 128 Q112 118 130 128 Q150 120 168 128 Q180 124 184 132"/>
<path class="s t" d="M32 146 Q60 140 88 146 Q116 152 144 146 Q160 142 172 146 M40 160 Q70 154 100 160 Q130 166 160 160"/>
<circle class="s" cx="100" cy="100" r="24"/>
<path class="s t" d="M84 96 Q84 82 100 82 Q116 82 116 96 Q116 110 100 112 Q84 110 84 96"/>
<path class="s t" d="M90 94 Q94 91 98 94 M102 94 Q106 91 110 94 M96 104 Q100 107 104 104"/>
<circle class="s t" cx="76" cy="94" r="7"/><circle class="s t" cx="124" cy="94" r="7"/>
<path class="s r" d="M82 78 L84 66 L116 66 L118 78 M84 72 L116 72"/>
<path class="s t r" d="M60 62 Q52 50 60 40 Q68 30 60 20 M144 66 Q136 54 144 44 Q152 34 144 24 M100 52 Q94 44 100 36"/>`},
{id:"tsuri",kanji:"釣り",kana:"つり",romaji:"tsuri",en:"fishing",lesson:11,art:`
<circle class="s" cx="56" cy="56" r="14"/><path class="s t" d="M50 54 Q53 51 56 54 M60 54 Q63 51 66 54"/>
<path class="s" d="M58 70 Q64 92 60 110 M60 110 L48 118 L48 130 M60 110 Q72 114 76 122"/>
<path class="s" d="M62 80 L96 60 L150 44"/>
<path class="s t r" d="M150 44 L150 118"/>
<path class="s r" d="M136 132 Q150 118 164 132 Q150 146 136 132 Z M136 132 L126 122 M136 132 L126 142"/>
<circle class="f" cx="156" cy="129" r="2.5"/>
<path class="s t" d="M24 152 Q52 146 80 152 Q108 158 136 152 Q158 148 176 152"/>
<path class="s t" d="M40 122 L60 122 L60 134 L40 134 Z"/>`},
{id:"camp",kana:"キャンプ",romaji:"kyanpu",en:"camping",lesson:11,art:`
<path class="s" d="M40 148 L88 56 L136 148 Z M88 56 L88 148 M72 148 L88 116 L104 148"/>
<path class="s t r" d="M148 132 Q140 118 152 108 Q148 122 158 126 Q160 112 168 110 Q174 124 166 134 Q158 142 148 132 Z"/>
<path class="s" d="M138 148 L176 148"/>
<path class="s t" d="M152 44 Q140 40 140 30 Q140 20 150 18 Q144 26 148 34 Q152 42 160 40 Q158 44 152 44 Z"/>
<circle class="s t" cx="120" cy="32" r="1.5"/><circle class="s t" cx="170" cy="60" r="1.5"/>
<path class="s t" d="M24 164 L176 164"/>`},
{id:"yama",kanji:"山",kana:"やま",romaji:"yama",en:"mountain",lesson:11,art:`
<path class="s" d="M24 152 L100 44 L176 152 Z"/>
<path class="s t" d="M78 76 L88 88 L100 74 L112 88 L122 76 L100 44 Z"/>
<circle class="s r" cx="42" cy="44" r="14"/>
<path class="s t" d="M120 120 Q128 112 136 120 M56 128 Q64 120 72 128"/>
<path class="s t" d="M16 164 L184 164"/>`},
{id:"unten",kanji:"運転する",kana:"うんてんする",romaji:"unten suru",en:"to drive",lesson:11,art:`
<path class="s" d="M36 120 L44 92 Q48 78 66 78 L118 78 Q132 78 140 92 L156 116 Q166 120 164 134 L36 134 Q32 128 36 120 Z"/>
<path class="s t" d="M70 92 L70 112 M70 92 L108 92 L118 112"/>
<circle class="s" cx="66" cy="140" r="13"/><circle class="s" cx="136" cy="140" r="13"/>
<circle class="s t" cx="88" cy="70" r="9"/><path class="s t" d="M84 80 Q88 84 94 80"/>
<circle class="s t r" cx="96" cy="98" r="8"/>
<path class="s t" d="M22 104 L34 104 M18 118 L30 118"/>`},
{id:"mizuumi",kanji:"湖",kana:"みずうみ",romaji:"mizuumi",en:"lake",lesson:11,art:`
<ellipse class="s" cx="100" cy="128" rx="72" ry="26"/>
<path class="s" d="M56 104 L56 60 M56 60 Q40 62 38 48 Q52 44 56 52 Q58 40 70 38 Q72 52 60 56 Q74 54 78 64 Q66 70 56 60"/>
<path class="s t r" d="M52 132 Q56 150 52 154 M62 130 L62 150"/>
<path class="s t" d="M96 124 Q108 120 120 124 M120 134 Q134 130 148 134 M72 136 Q82 132 92 136"/>
<circle class="s t r" cx="152" cy="52" r="12"/>`},
{id:"jinja",kanji:"神社",kana:"じんじゃ",romaji:"jinja",en:"shrine",lesson:11,art:`
<path class="s r" d="M32 56 Q100 40 168 56 L164 68 L36 68 Z"/>
<path class="s r" d="M46 82 L154 82"/>
<path class="s r" d="M56 68 L54 160 M144 68 L146 160"/>
<path class="s r" d="M100 68 L100 82"/>
<path class="s t" d="M24 166 L176 166"/>
<circle class="s t" cx="176" cy="34" r="10"/>`},
{id:"shashin",kanji:"写真を撮る",kana:"しゃしんをとる",romaji:"shashin o toru",en:"to take a picture",lesson:11,art:`
<rect class="s" x="44" y="72" width="112" height="76" rx="12"/>
<path class="s" d="M78 72 L86 56 L114 56 L122 72"/>
<circle class="s" cx="100" cy="110" r="24"/><circle class="s t" cx="100" cy="110" r="12"/>
<rect class="fr" x="132" y="82" width="14" height="10" rx="3"/>
<path class="s t r" d="M40 44 L52 56 M64 34 L68 50 M164 48 L152 58 M176 70 L160 74"/>`},
{id:"omiyage",kanji:"お土産",kana:"おみやげ",romaji:"omiyage",en:"souvenir",lesson:11,art:`
<rect class="s" x="52" y="84" width="96" height="72" rx="6"/>
<path class="s" d="M52 108 L148 108 M100 84 L100 156"/>
<path class="s r" d="M100 84 Q76 78 74 62 Q86 54 100 72 Q114 54 126 62 Q124 78 100 84 Z"/>
<path class="s t" d="M160 60 Q176 62 174 78 M168 44 Q188 48 184 70"/>`},
{id:"yasumi",kanji:"休み",kana:"やすみ",romaji:"yasumi",en:"vacation",lesson:11,art:`
<path class="s r" d="M120 32 L108 128"/>
<path class="s r" d="M64 62 Q118 12 172 58 Q146 52 120 58 Q94 52 64 62 Z"/>
<path class="s" d="M36 136 L84 136 Q96 136 100 148 L100 160 M48 136 L44 160 M92 148 L96 160"/>
<path class="s" d="M36 136 Q28 122 38 112"/>
<path class="s t" d="M20 172 Q60 166 100 172 Q140 178 180 172"/>
<circle class="s t" cx="40" cy="40" r="13"/>`},
{id:"gaikoku",kanji:"外国",kana:"がいこく",romaji:"gaikoku",en:"foreign country",lesson:11,art:`<circle class="s" cx="92" cy="100" r="50"/>
<path class="s t" d="M52 78 L132 78 M46 100 L138 100 M52 122 L132 122 M92 50 L92 150"/>
<path class="s t" d="M92 50 Q64 74 92 100 Q120 126 92 150 M92 50 Q120 74 92 100 Q64 126 92 150"/>
<path class="s r" d="M150 44 L150 96 M150 44 L178 54 L150 64"/>`},
{id:"osutoraria11",kana:"オーストラリア",romaji:"osutoraria",en:"Australia",lesson:11,art:`<path class="s" d="M70 150 L64 96 Q60 70 84 64 Q96 60 104 70 L112 92 Q122 88 130 96 Q136 104 128 112 L112 108 L118 150 L104 150 L98 118 L92 150 Z"/>
<circle class="f" cx="88" cy="76" r="3"/>
<path class="s t" d="M84 64 Q80 52 88 46 M96 62 Q94 50 102 46"/>
<path class="s r" d="M96 118 Q88 134 96 148"/>`},
{id:"kawa",kanji:"川",kana:"かわ",romaji:"kawa",en:"river",lesson:11,art:`<path class="s r" d="M60 32 Q40 70 68 96 Q96 122 74 168"/>
<path class="s r" d="M140 32 Q120 70 148 96 Q176 122 154 168"/>
<path class="s t" d="M84 60 Q100 66 116 60 M78 96 Q100 104 122 96 Q100 104 82 112 M86 140 Q100 146 114 140"/>`},
{id:"doraibu",kana:"ドライブ",romaji:"doraibu",en:"drive",lesson:11,art:`<path class="s" d="M28 156 Q80 150 100 120 Q120 90 172 84"/>
<path class="s t" d="M40 154 L52 150 M74 140 L84 132 M120 100 L132 96 M156 86 L168 84"/>
<path class="s" d="M52 118 L60 100 Q63 92 74 92 L100 92 Q108 92 112 100 L120 116 Q128 118 126 128 L52 128 Q48 124 52 118 Z"/>
<circle class="s" cx="66" cy="132" r="9"/><circle class="s" cx="112" cy="132" r="9"/>
<circle class="s r" cx="156" cy="46" r="12"/>`},
{id:"bijutsukan",kanji:"美術館",kana:"びじゅつかん",romaji:"bijutsukan",en:"art museum",lesson:11,art:`<path class="s" d="M36 66 L100 38 L164 66 Z"/>
<path class="s" d="M48 66 L48 140 M84 66 L84 140 M116 66 L116 140 M152 66 L152 140 M32 140 L168 140 M32 150 L168 150"/>
<rect class="s r" x="74" y="86" width="52" height="40"/>
<path class="s t r" d="M80 118 L94 100 L104 112 L114 96 L120 118 Z"/>
<circle class="fr" cx="88" cy="96" r="3"/>`},
{id:"shachou",kanji:"社長",kana:"しゃちょう",romaji:"shachou",en:"president of a company",lesson:11,art:`<path class="s" d="M40 140 L160 140 L160 156 L40 156 Z M52 140 L52 120 L148 120 L148 140"/>
<circle class="s" cx="100" cy="60" r="16"/>
<path class="s t" d="M94 58 Q97 55 100 58 M104 58 Q107 55 110 58"/>
<path class="s" d="M100 76 L100 120 M100 92 L82 106 M100 92 L118 106"/>
<path class="s r" d="M100 76 L92 96 L100 104 L108 96 L100 76"/>
<path class="s r" d="M84 44 L92 34 L100 42 L108 34 L116 44 L112 56 L88 56 Z"/>`},
{id:"kashu",kanji:"歌手",kana:"かしゅ",romaji:"kashu",en:"singer",lesson:11,art:`<circle class="s" cx="88" cy="58" r="15"/>
<path class="s t" d="M82 56 Q85 53 88 56 M92 56 Q95 53 98 56"/>
<ellipse class="f" cx="92" cy="66" rx="4" ry="5"/>
<path class="s" d="M88 73 L88 128 M88 128 L76 166 M88 128 L100 166 M88 88 L110 78"/>
<rect class="s" x="118" y="70" width="14" height="22" rx="7"/>
<path class="s" d="M125 92 L125 150 M112 150 L138 150"/>
<path class="s t r" d="M140 54 Q146 58 140 64 M150 46 Q160 56 150 66"/>`},
{id:"ruumumeito",kana:"ルームメイト",romaji:"ruumumeito",en:"roommate",lesson:11,art:`<rect class="s" x="34" y="52" width="132" height="104"/>
<path class="s" d="M100 52 L100 156"/>
<path class="s" d="M44 130 L92 130 L92 112 L44 112 Z M52 112 L52 100 L84 100 L84 112"/>
<path class="s" d="M108 130 L156 130 L156 112 L108 112 Z M116 112 L116 100 L148 100 L148 112"/>
<circle class="s t" cx="68" cy="88" r="8"/><circle class="s t r" cx="132" cy="88" r="8"/>`},
{id:"hosutofamirii",kana:"ホストファミリー",romaji:"hosutofamirii",en:"host family",lesson:11,art:`<path class="s" d="M32 96 L100 46 L168 96"/>
<path class="s" d="M48 84 L48 156 L152 156 L152 84"/>
<circle class="s" cx="78" cy="108" r="10"/><path class="s" d="M78 118 L78 144 M78 126 L66 138 M78 126 L90 138"/>
<circle class="s" cx="118" cy="110" r="9"/><path class="s" d="M118 119 L118 144 M118 126 L108 136 M118 126 L128 136"/>
<circle class="s r" cx="98" cy="126" r="7"/><path class="s r" d="M98 133 L98 150 M98 138 L90 146 M98 138 L106 146"/>
<path class="fr" d="M100 74 Q94 66 100 60 Q106 66 100 74 Z"/>`},
{id:"shourai",kanji:"将来",kana:"しょうらい",romaji:"shourai",en:"future",lesson:11,art:`<path class="s t" d="M28 150 L172 150"/>
<path class="s" d="M40 150 Q70 148 96 118 Q120 90 150 82"/>
<path class="s r" d="M150 82 L128 78 M150 82 L146 104"/>
<circle class="s r" cx="150" cy="52" r="16"/>
<path class="s r" d="M150 30 L150 22 M172 52 L180 52 M166 36 L172 30 M166 68 L172 74"/>
<path class="fr" d="M96 40 L100 50 L110 50 L102 57 L105 67 L96 61 L87 67 L90 57 L82 50 L92 50 Z"/>`},
{id:"yume",kanji:"夢",kana:"ゆめ",romaji:"yume",en:"dream",lesson:11,art:`<path class="s" d="M52 120 Q34 120 34 102 Q34 86 52 86 Q54 66 78 70 Q90 56 108 66 Q132 62 132 84 Q150 88 144 106 Q140 120 120 118 Q90 124 52 120 Z"/>
<path class="s r" d="M116 96 Q100 90 104 74 Q116 82 122 74 Q124 90 116 96 Z"/>
<path class="fr" d="M72 96 L75 104 L83 104 L77 109 L79 117 L72 112 L65 117 L67 109 L61 104 L69 104 Z"/>
<path class="s t r" d="M96 138 Q106 132 96 144 M120 146 Q132 140 120 152 M76 148 Q86 142 76 154"/>`},
{id:"omatsuri",kanji:"お祭り",kana:"おまつり",romaji:"omatsuri",en:"festival",lesson:11,art:`<path class="s t" d="M28 44 Q100 30 172 44"/>
<path class="s t r" d="M52 40 L44 58 L60 58 Z M100 36 L92 54 L108 54 Z M148 40 L140 58 L156 58 Z"/>
<path class="s r" d="M78 72 Q78 62 100 62 Q122 62 122 72 L122 128 Q122 138 100 138 Q78 138 78 128 Z"/>
<path class="s t r" d="M78 84 Q100 90 122 84 M78 104 Q100 110 122 104 M78 122 Q100 128 122 122"/>
<path class="s" d="M100 54 L100 62 M100 138 L100 150"/>`},
{id:"oshougatsu",kanji:"お正月",kana:"おしょうがつ",romaji:"oshougatsu",en:"New Year's",lesson:11,art:`<ellipse class="s" cx="100" cy="130" rx="46" ry="16"/>
<path class="s" d="M56 130 Q56 106 100 106 Q144 106 144 130"/>
<ellipse class="s" cx="100" cy="100" rx="36" ry="13"/>
<path class="s" d="M66 100 Q66 82 100 82 Q134 82 134 100"/>
<circle class="s r" cx="100" cy="60" r="16"/>
<path class="s r" d="M100 44 L100 38 M100 60 L112 52"/>
<path class="s t" d="M84 82 L116 82"/>`},
{id:"okashi",kanji:"お菓子",kana:"おかし",romaji:"okashi",en:"snack; sweets",lesson:11,art:`<ellipse class="s r" cx="100" cy="100" rx="34" ry="24"/>
<path class="s r" d="M66 100 L38 84 L44 100 L38 116 Z M134 100 L162 84 L156 100 L162 116 Z"/>
<path class="s t r" d="M46 90 L40 94 M46 110 L40 106 M154 90 L160 94 M154 110 L160 106"/>
<path class="s t" d="M84 92 Q92 100 84 108 M100 88 Q108 100 100 112 M116 92 Q124 100 116 108"/>`},
{id:"biiru",kana:"ビール",romaji:"biiru",en:"beer",lesson:11,art:`<path class="s" d="M64 76 L64 150 Q64 158 74 158 L120 158 Q130 158 130 150 L130 76 Z"/>
<path class="s" d="M130 90 Q152 90 152 110 Q152 128 130 128"/>
<path class="s r" d="M60 76 Q60 58 76 60 Q80 46 96 52 Q104 42 116 52 Q134 50 132 68 Q142 72 134 82 Q100 72 64 82 Q58 80 60 76 Z"/>
<path class="s t" d="M80 96 L80 144 M100 96 L100 144 M120 96 L120 144"/>
<circle class="s t" cx="90" cy="110" r="3"/><circle class="s t" cx="110" cy="126" r="3"/>`},
{id:"omocha",kana:"おもちゃ",romaji:"omocha",en:"toy",lesson:11,art:`<circle class="s" cx="100" cy="86" r="34"/>
<path class="s" d="M74 62 Q70 44 84 42 Q90 52 88 66 M126 62 Q130 44 116 42 Q110 52 112 66"/>
<circle class="s t" cx="88" cy="84" r="6"/><circle class="s t" cx="112" cy="84" r="6"/>
<circle class="f" cx="88" cy="85" r="2.5"/><circle class="f" cx="112" cy="85" r="2.5"/>
<path class="s t" d="M92 100 Q100 106 108 100"/>
<path class="s" d="M76 116 Q76 156 100 156 Q124 156 124 116"/>
<path class="s r" d="M100 130 L100 152"/><circle class="fr" cx="100" cy="124" r="6"/>`},
{id:"kongakki",kanji:"今学期",kana:"こんがっき",romaji:"kongakki",en:"this semester",lesson:11,art:`<rect class="s" x="40" y="52" width="120" height="100" rx="5"/>
<path class="s" d="M40 78 L160 78"/><path class="s" d="M66 44 L66 60 M134 44 L134 60"/>
<rect class="fr" x="54" y="92" width="60" height="46"/>
<path class="s t" d="M124 96 L148 96 M124 112 L148 112 M124 128 L148 128"/>
<path class="s r" d="M84 40 L84 24 M76 32 L84 24 L92 32"/>
<circle class="f" cx="84" cy="18" r="4"/>`},
{id:"raigakki",kanji:"来学期",kana:"らいがっき",romaji:"raigakki",en:"next semester",lesson:11,art:`<rect class="s" x="40" y="52" width="120" height="100" rx="5"/>
<path class="s" d="M40 78 L160 78"/><path class="s" d="M66 44 L66 60 M134 44 L134 60"/>
<rect class="s t" x="52" y="92" width="52" height="46"/>
<rect class="fr" x="108" y="92" width="44" height="46"/>
<path class="s r" d="M92 116 L128 116 M118 106 L130 116 L118 126"/>`},
{id:"jugyou",kanji:"授業",kana:"じゅぎょう",romaji:"jugyou",en:"class",lesson:11,art:`<rect class="s" x="40" y="40" width="86" height="60" rx="3"/>
<path class="s t r" d="M52 56 Q66 48 80 56 M52 72 L96 72 M52 84 L84 84"/>
<circle class="s" cx="132" cy="112" r="12"/>
<path class="s" d="M132 124 L132 150 M132 132 L120 144 M132 132 L144 144 M132 132 L120 122"/>
<path class="s r" d="M120 122 L120 108 M112 116 L120 108 L128 116"/>
<path class="s" d="M56 116 L96 116 L96 150 M64 116 L64 150"/>`},
{id:"kochira",kana:"こちら",romaji:"kochira",en:"this person (polite)",lesson:11,art:`<circle class="s" cx="126" cy="60" r="16"/>
<path class="s t" d="M120 58 Q123 55 126 58 M130 58 Q133 55 136 58"/>
<path class="s" d="M126 76 L126 128 M126 128 L114 164 M126 128 L138 164 M126 92 L108 108 M126 92 L144 108"/>
<path class="s r" d="M36 130 Q54 120 74 118 L96 108 Q56 118 44 108 Q56 126 74 118"/>
<path class="s r" d="M40 132 Q52 138 66 134"/>`},
{id:"usootsuku",kana:"うそをつく",romaji:"usootsuku",en:"to tell a lie",lesson:11,art:`<path class="s" d="M64 44 Q104 40 108 84 Q140 88 168 96 Q140 108 108 104 Q104 148 64 152"/>
<circle class="f" cx="80" cy="70" r="4"/>
<path class="s t" d="M70 96 Q84 104 96 96"/>
<path class="s t r" d="M120 90 L134 88 M120 96 L138 96 M120 102 L134 104"/>`},
{id:"onakagasuku",kana:"おなかがすく",romaji:"onakagasuku",en:"to become hungry",lesson:11,art:`<circle class="s" cx="100" cy="50" r="15"/>
<path class="s t" d="M93 48 L99 50 M101 50 L107 48 M95 60 Q100 56 105 60"/>
<path class="s" d="M100 65 Q88 96 96 122 M96 122 L84 160 M96 122 L110 158 M98 82 L78 96"/>
<path class="s r" d="M98 96 Q86 104 90 118 Q94 128 104 124"/>
<path class="s t r" d="M124 108 Q136 108 136 120 Q136 132 124 132 L124 108 Z"/>
<path class="s t" d="M120 84 Q126 76 132 82 Q126 88 120 84"/>`},
{id:"kau",kanji:"飼う",kana:"かう",romaji:"kau",en:"to own (a pet)",lesson:11,art:`<circle class="s" cx="72" cy="52" r="14"/>
<path class="s" d="M72 66 L72 118 M72 118 L60 158 M72 118 L84 158 M72 82 L96 96"/>
<path class="s r" d="M96 96 Q120 100 122 124"/>
<circle class="s" cx="134" cy="132" r="16"/>
<path class="s" d="M120 126 Q116 112 128 116 M148 126 Q152 112 140 116"/>
<circle class="f" cx="128" cy="132" r="3"/><circle class="f" cx="140" cy="132" r="3"/>
<path class="s t" d="M132 140 L136 140"/>
<path class="fr" d="M158 100 Q152 92 158 88 Q164 92 158 100 Z"/>`},
{id:"saboru",kana:"サボる",romaji:"saboru",en:"to cut (classes)",lesson:11,art:`<rect class="s" x="34" y="44" width="70" height="112"/>
<path class="s t" d="M46 60 L92 60 M46 76 L92 76 M46 92 L80 92"/>
<circle class="s" cx="132" cy="70" r="13"/>
<path class="s" d="M132 83 L132 118 M132 118 L122 150 M132 118 L144 148 M132 96 L114 108 M132 96 L150 108"/>
<path class="s t r" d="M108 150 Q120 144 132 150 M140 152 Q152 146 164 152" stroke-dasharray="3 5"/>
<path class="s t r" d="M156 60 L172 60 M164 52 L172 60 L164 68"/>`},
{id:"toru",kanji:"取る",kana:"とる",romaji:"toru",en:"to take (a class); to get (a grade)",lesson:11,art:`<rect class="s r" x="96" y="44" width="60" height="76" rx="3" transform="rotate(8 126 82)"/>
<path class="s t r" d="M108 66 L146 60 M110 80 L148 74 M112 94 L140 90" transform="rotate(8 126 82)"/>
<path class="s" d="M40 150 Q40 118 66 112 L96 104 Q104 102 106 110 Q108 118 98 122 L84 128 Q98 124 108 128"/>
<path class="s" d="M40 150 Q54 156 72 152"/>`},
{id:"narau",kanji:"習う",kana:"ならう",romaji:"narau",en:"to learn",lesson:11,art:`<circle class="s" cx="76" cy="66" r="15"/>
<path class="s t" d="M70 64 Q73 61 76 64 M80 64 Q83 61 86 64"/>
<path class="s" d="M76 81 L76 130 M76 130 L64 164 M76 130 L88 164 M76 96 L98 108"/>
<path class="s r" d="M100 60 Q118 52 136 60 L136 88 Q118 80 100 88 Z M118 56 L118 84"/>
<path class="s r" d="M84 88 L104 76"/>
<circle class="fr" cx="118" cy="40" r="9"/>
<path class="s t r" d="M118 24 L118 30 M104 40 L110 40 M126 40 L132 40"/>`},
{id:"noboru",kanji:"登る",kana:"のぼる",romaji:"noboru",en:"to climb",lesson:11,art:`<path class="s" d="M28 156 L100 40 L172 156 Z"/>
<path class="s t" d="M80 70 L92 84 L104 68 L116 84"/>
<path class="s r" d="M60 150 L74 132 L86 140 L98 118 L110 124 L120 104"/>
<circle class="s r" cx="120" cy="94" r="9"/>
<path class="s r" d="M120 103 L120 122 M120 110 L110 118 M120 110 L130 118"/>
<path class="s t r" d="M146 60 L146 44 M138 52 L146 44 L154 52"/>`},
{id:"hashiru",kanji:"走る",kana:"はしる",romaji:"hashiru",en:"to run",lesson:11,art:`<circle class="s" cx="112" cy="46" r="14"/>
<path class="s" d="M112 60 Q126 80 116 100 M116 100 L92 116 L88 142 M116 100 L140 112"/>
<path class="s" d="M112 74 L90 62 M116 78 L140 68"/>
<path class="s t r" d="M32 90 L72 90 M28 108 L64 108 M40 126 L72 126"/>
<path class="s t" d="M28 156 L172 156 M60 152 L60 160 M120 152 L120 160"/>`},
{id:"tsukareru",kanji:"疲れる",kana:"つかれる",romaji:"tsukareru",en:"to get tired",lesson:11,art:`<circle class="s" cx="100" cy="56" r="16"/>
<path class="s t" d="M91 52 L99 56 M109 52 L101 56 M94 66 L106 66"/>
<path class="s" d="M100 72 Q98 104 100 126 M100 126 L86 162 M100 126 L114 160 M100 88 Q84 96 82 112 M100 88 Q116 96 118 112"/>
<path class="s t r" d="M60 44 Q54 52 60 60 Q66 68 60 76 M140 44 Q146 52 140 60 Q134 68 140 76"/>
<path class="s t r" d="M120 122 Q130 118 132 128 M124 140 Q134 136 136 146"/>`},
{id:"yameru",kana:"やめる",romaji:"yameru",en:"to quit",lesson:11,art:`<path class="s r" d="M74 40 L126 40 L160 74 L160 126 L126 160 L74 160 L40 126 L40 74 Z"/>
<path class="s t r" d="M70 100 L130 100"/>
<path class="s" d="M52 150 Q52 128 72 128 L72 118 Q80 116 80 124 L84 132 L84 150"/>
<path class="s t" d="M60 132 L60 150 M68 130 L68 150"/>`},
{id:"kenkasuru",kana:"けんかする",romaji:"kenkasuru",en:"to have a fight; to quarrel",lesson:11,art:`<circle class="s" cx="54" cy="86" r="18"/>
<path class="s t" d="M46 80 L54 84 M62 80 L54 84 M48 96 L60 96"/>
<circle class="s" cx="146" cy="86" r="18"/>
<path class="s t" d="M138 80 L146 84 M154 80 L146 84 M140 96 L152 96"/>
<path class="s r" d="M84 66 L98 88 L86 92 L104 118 M116 66 L102 88 L114 92 L96 118"/>
<path class="s t r" d="M100 44 L100 30 M76 50 L68 40 M124 50 L132 40"/>`},
{id:"shoukaisuru",kanji:"紹介する",kana:"しょうかいする",romaji:"shoukaisuru",en:"to introduce",lesson:11,art:`<circle class="s" cx="48" cy="72" r="13"/>
<path class="s" d="M48 85 L48 124 M48 124 L38 156 M48 124 L58 156 M48 98 L66 110"/>
<circle class="s" cx="152" cy="72" r="13"/>
<path class="s" d="M152 85 L152 124 M152 124 L142 156 M152 124 L162 156 M152 98 L134 110"/>
<circle class="s r" cx="100" cy="60" r="13"/>
<path class="s r" d="M100 73 L100 112 M100 84 L78 100 M100 84 L122 100"/>
<path class="s t r" d="M78 100 L66 110 M122 100 L134 110"/>`},
{id:"daiettosuru",kana:"ダイエットする",romaji:"daiettosuru",en:"to go on a diet",lesson:11,art:`<path class="s" d="M46 132 Q46 88 100 88 Q154 88 154 132 Z"/>
<path class="s" d="M40 132 L160 132 L160 144 L40 144 Z"/>
<circle class="s r" cx="100" cy="118" r="20"/>
<path class="s r" d="M100 118 L100 102"/>
<path class="s t" d="M78 112 L74 106 M122 112 L126 106 M84 132 L80 138 M116 132 L120 138"/>
<path class="s t r" d="M100 70 L100 58 M92 64 L100 58 L108 64"/>`},
{id:"chikokusuru",kanji:"遅刻する",kana:"ちこくする",romaji:"chikokusuru",en:"to be late (for an appointment)",lesson:11,art:`<circle class="s" cx="72" cy="86" r="34"/>
<path class="s" d="M72 86 L72 66 M72 86 L88 96"/>
<path class="s r" d="M48 56 Q40 44 50 36 M96 56 Q104 44 94 36"/>
<path class="s r" d="M50 52 L58 60 M94 52 L86 60"/>
<circle class="s" cx="140" cy="72" r="12"/>
<path class="s" d="M140 84 L140 118 M140 118 L130 150 M140 118 L152 148 M140 96 L120 108"/>
<path class="s t r" d="M118 140 Q128 136 130 146 M124 118 Q134 114 136 124"/>`},
{id:"ryuugakusuru",kanji:"留学する",kana:"りゅうがくする",romaji:"ryuugakusuru",en:"to study abroad",lesson:11,art:`<circle class="s" cx="100" cy="108" r="44"/>
<path class="s t" d="M100 64 L100 152 M56 108 L144 108"/>
<path class="s t" d="M100 64 Q72 88 100 108 Q128 128 100 152 M100 64 Q128 88 100 108 Q72 128 100 152"/>
<path class="s r" d="M40 60 L96 40 L84 74 L74 60 Z"/>
<path class="s t r" d="M40 60 Q54 66 74 60" stroke-dasharray="4 5"/>
<circle class="fr" cx="96" cy="40" r="4"/>`},
{id:"shusshin",kanji:"出身",kana:"しゅっしん",romaji:"shusshin",en:"coming from (place)",lesson:11,art:`<path class="s r" d="M64 108 Q64 66 100 66 Q136 66 136 108 Q136 132 100 158 Q64 132 64 108 Z"/>
<circle style="fill:#fff" cx="100" cy="100" r="14"/>
<path class="s" d="M100 90 L100 40 M100 40 L142 40 L134 52 L142 64 L100 64"/>
<circle class="fr" cx="100" cy="104" r="4"/>`},
{id:"hisashiburi",kanji:"久しぶり",kana:"ひさしぶり",romaji:"hisashiburi",en:"it has been a long time",lesson:11,art:`<circle class="s" cx="48" cy="66" r="13"/>
<path class="s" d="M48 79 L48 118 M48 118 L38 152 M48 118 L58 152 M48 92 L34 108 M48 92 L64 78"/>
<circle class="s" cx="152" cy="66" r="13"/>
<path class="s" d="M152 79 L152 118 M152 118 L142 152 M152 118 L162 152 M152 92 L166 108 M152 92 L136 78"/>
<path class="s t r" d="M70 74 Q100 62 130 74" stroke-dasharray="4 6"/>
<circle class="s r" cx="100" cy="112" r="14"/>
<path class="s t r" d="M100 104 L100 112 L108 116"/>`},
{id:"maamaa",kana:"まあまあ",romaji:"maamaa",en:"okay; so-so",lesson:11,art:`<circle class="s" cx="90" cy="76" r="34"/>
<path class="s t" d="M74 68 Q80 62 86 68 M94 68 Q100 62 106 68"/>
<path class="s t" d="M76 94 L104 94"/>
<path class="s r" d="M40 138 L52 130 L64 140 L76 130 L88 140 L100 130 L112 140 L124 130 L136 140"/>`},
{id:"motto",kana:"もっと",romaji:"motto",en:"more",lesson:11,art:`<rect class="s" x="40" y="120" width="34" height="34"/>
<rect class="s r" x="96" y="86" width="60" height="68"/>
<path class="s r" d="M126 44 L126 74 M111 59 L126 44 L141 59"/>
<path class="s t" d="M50 108 L64 108 M57 101 L57 115"/>`},
{id:"ato",kanji:"後",kana:"あと",romaji:"ato",en:"after (an event)",lesson:11,art:`<path class="s r" d="M40 44 L40 92 M40 44 Q54 54 68 46 Q82 38 96 48 L96 78 Q82 68 68 76 Q54 84 40 74"/>
<path class="s" d="M56 96 L130 96 M116 82 L134 96 L116 110"/>
<circle class="s t" cx="150" cy="120" r="14"/>
<path class="s t" d="M150 110 L150 120 L158 126"/>`},
{id:"soshite",kana:"そして",romaji:"soshite",en:"and then",lesson:11,art:`<rect class="s" x="30" y="72" width="48" height="48" rx="4"/>
<path class="s t r" d="M42 90 Q54 82 66 90 M42 104 L66 104"/>
<path class="s r" d="M86 96 L120 96 M108 84 L124 96 L108 108"/>
<rect class="s" x="128" y="72" width="48" height="48" rx="4"/>
<path class="fr" d="M152 82 L155 90 L163 90 L157 95 L159 103 L152 98 L145 103 L147 95 L141 90 L149 90 Z"/>`},
{id:"dake",kana:"〜だけ",romaji:"dake",en:"just...; only...",lesson:11,art:`<circle class="s r" cx="100" cy="88" r="28"/>
<circle class="fr" cx="100" cy="88" r="8"/>
<path class="s t" d="M40 60 L60 80 M60 60 L40 80 M140 60 L160 80 M160 60 L140 80 M40 120 L60 140 M60 120 L40 140 M140 120 L160 140 M160 120 L140 140"/>`},
{id:"ten",kanji:"〜点",kana:"〜てん",romaji:"ten",en:"...points",lesson:11,art:`<path class="s r" d="M100 40 L112 78 L152 78 L120 102 L132 140 L100 116 L68 140 L80 102 L48 78 L88 78 Z"/>
<circle class="fr" cx="100" cy="90" r="7"/>
<circle class="s t r" cx="40" cy="140" r="4"/><circle class="s t r" cx="58" cy="150" r="4"/><circle class="s t r" cx="160" cy="140" r="4"/><circle class="s t r" cx="142" cy="150" r="4"/>`},
{id:"sakka_writer",kanji:"作家",kana:"さっか",romaji:"sakka",en:"writer",lesson:11,art:`<rect class="s" x="44" y="60" width="80" height="100" rx="2"/>
<path class="s t r" d="M56 80 L112 80 M56 96 L112 96 M56 112 L96 112"/>
<path class="s" d="M118 132 L150 40 Q154 30 162 34 Q170 38 166 48 L134 140 L116 150 Z"/>
<path class="s" d="M116 150 L122 130"/>
<path class="f" d="M116 150 L128 144 L122 130 Z"/>
<path class="s t r" d="M64 148 Q80 140 100 148"/>`},
{id:"jaanarisuto",kana:"ジャーナリスト",romaji:"jaanarisuto",en:"journalist",lesson:11,art:`<rect class="s r" x="86" y="40" width="28" height="34" rx="6"/>
<path class="s t r" d="M92 50 L108 50 M92 58 L108 58 M92 66 L108 66"/>
<path class="s" d="M100 74 L100 96 M84 96 L116 96"/>
<rect class="s" x="46" y="112" width="52" height="44" rx="3"/>
<path class="s t" d="M56 124 L88 124 M56 134 L88 134 M56 144 L76 144"/>
<path class="s r" d="M112 120 L156 120 L156 156 L112 156 Z M120 120 L120 156 M148 120 L148 156"/>`},
{id:"keisatsukan",kanji:"警察官",kana:"けいさつかん",romaji:"keisatsukan",en:"police officer",lesson:11,art:`<path class="s" d="M50 96 Q50 60 100 60 Q150 60 150 96"/>
<path class="s" d="M40 96 L160 96 L160 112 L40 112 Z"/>
<path class="s" d="M74 72 Q74 60 100 60 Q126 60 126 72 L126 84 L74 84 Z"/>
<path class="s r" d="M100 66 L104 74 L112 74 L106 79 L108 87 L100 82 L92 87 L94 79 L88 74 L96 74 Z"/>
<path class="s r" d="M116 130 L116 158 L140 158 L140 130 Q140 120 128 120 Q116 120 116 130 Z"/>
<path class="s t r" d="M122 128 L134 128 M122 136 L134 136 M122 144 L134 144"/>`},
{id:"shouboushi",kanji:"消防士",kana:"しょうぼうし",romaji:"shouboushi",en:"firefighter",lesson:11,art:`<path class="s" d="M48 108 Q48 66 100 66 Q152 66 152 108 L152 120 L48 120 Z"/>
<path class="s" d="M100 66 L100 48 L118 52 Q124 66 118 78"/>
<path class="s r" d="M82 96 Q82 84 90 88 Q88 78 100 80 Q98 70 108 74 Q118 78 112 90 Q120 96 110 102 Q114 112 102 110 Q104 120 92 114 Q84 110 88 100 Q78 100 82 96 Z"/>
<path class="s" d="M40 138 L60 138 L60 150 L40 150 Z M154 132 Q168 134 166 148"/>
<path class="s t" d="M60 144 L100 144"/>`},
{id:"kyoushi",kanji:"教師",kana:"きょうし",romaji:"kyoushi",en:"schoolteacher",lesson:11,art:`<rect class="s" x="36" y="42" width="90" height="62" rx="3"/>
<path class="s t r" d="M50 62 L74 62 L74 88 L50 88 Z M86 60 L114 76"/>
<path class="s" d="M52 132 L124 132 L124 118 L52 118 Z M60 118 L60 108 L116 108 L116 118"/>
<path class="s" d="M136 100 Q124 96 124 108 Q124 122 138 128 Q152 122 152 108 Q152 96 140 100 Q138 90 137 100 Z"/>
<path class="s r" d="M138 90 Q134 82 140 80 Q142 86 138 90"/>`},
{id:"kenkyuusha",kanji:"研究者",kana:"けんきゅうしゃ",romaji:"kenkyuusha",en:"researcher",lesson:11,art:`<path class="s" d="M100 52 L100 40 M88 40 L112 40"/>
<path class="s" d="M100 52 Q84 60 84 82 L84 108 L116 108 L116 82 Q116 60 100 52 Z"/>
<path class="s" d="M76 108 L124 108 L124 118 L76 118 Z"/>
<path class="s" d="M84 118 L84 138 Q84 150 100 150 Q116 150 116 138 L116 118"/>
<path class="s r" d="M100 72 L100 104"/>
<circle class="fr" cx="100" cy="90" r="6"/>
<path class="s t r" d="M52 148 L72 128 M48 140 L56 144 L52 152"/>`},
{id:"uchuuhikoushi",kanji:"宇宙飛行士",kana:"うちゅうひこうし",romaji:"uchuuhikoushi",en:"astronaut",lesson:11,art:`<circle class="s" cx="100" cy="96" r="46"/>
<path class="s" d="M66 78 Q66 62 100 62 Q134 62 134 78 L134 110 Q134 126 100 126 Q66 126 66 110 Z"/>
<path class="s r" d="M78 90 Q90 82 78 106 Q72 96 78 90 Z"/>
<circle class="fr" cx="146" cy="52" r="6"/><circle class="fr" cx="52" cy="140" r="5"/>
<path class="fr" d="M150 130 L152 136 L158 136 L153 140 L155 146 L150 142 L145 146 L147 140 L142 136 L148 136 Z"/>`},
{id:"supootsusenshu",kanji:"スポーツ選手",kana:"スポーツせんしゅ",romaji:"supootsusenshu",en:"athlete",lesson:11,art:`<circle class="s" cx="100" cy="48" r="14"/>
<path class="s" d="M100 62 L100 108 M100 108 L86 150 M100 108 L114 150 M100 76 L120 60 M100 76 L80 92"/>
<path class="s r" d="M100 84 Q100 104 88 104 Q76 104 76 92 L76 84 L100 84 Z"/>
<circle class="s r" cx="88" cy="94" r="4"/>
<path class="s" d="M120 60 Q136 60 136 76"/>
<circle class="s t r" cx="140" cy="132" r="14"/>
<path class="s t r" d="M140 118 L143 128 L140 138 L137 128 Z M126 132 L154 132"/>`},
{id:"haiyuu",kanji:"俳優",kana:"はいゆう",romaji:"haiyuu",en:"actor; actress",lesson:11,art:`<path class="s" d="M40 52 Q40 40 52 42 L84 46 Q94 48 92 60 Q88 108 64 118 Q42 108 40 60 Z"/>
<path class="s t" d="M52 66 Q58 60 64 66 M72 68 Q78 62 84 68"/>
<path class="s t" d="M54 90 Q66 82 78 92"/>
<path class="s r" d="M108 60 Q106 48 118 46 L150 42 Q162 40 160 52 L158 92 Q154 116 132 118 Q112 108 108 60 Z"/>
<path class="s t r" d="M120 66 Q126 72 132 66 M140 68 Q146 74 152 68"/>
<path class="s t r" d="M120 96 Q132 104 146 94"/>`},
{id:"kangoshi",kanji:"看護師",kana:"かんごし",romaji:"kangoshi",en:"nurse",lesson:11,art:`<path class="s" d="M56 96 L144 96 L136 64 L64 64 Z"/>
<path class="s r" d="M94 72 L106 72 L106 80 L114 80 L114 88 L106 88 L106 90 L94 90 L94 88 L86 88 L86 80 L94 80 Z"/>
<circle class="s" cx="100" cy="124" r="18"/>
<path class="s t" d="M92 120 Q95 117 98 120 M102 120 Q105 117 108 120 M94 132 Q100 136 106 132"/>
<path class="s" d="M100 142 L100 158 M84 150 L116 150"/>`},
{id:"shefu",kana:"シェフ",romaji:"shefu",en:"chef",lesson:11,art:`<path class="s" d="M64 96 Q44 96 44 76 Q44 60 62 62 Q64 44 84 46 Q92 34 108 40 Q126 36 130 54 Q150 54 148 74 Q148 94 130 94 Z"/>
<path class="s" d="M64 94 L64 112 L130 112 L130 94"/>
<circle class="s" cx="97" cy="140" r="18"/>
<path class="s t" d="M89 136 Q92 133 95 136 M99 136 Q102 133 105 136"/>
<path class="s t" d="M89 146 Q97 152 105 146"/>
<path class="s t" d="M108 132 Q120 128 122 138"/>`},
{id:"mangaka",kanji:"漫画家",kana:"まんがか",romaji:"mangaka",en:"cartoonist",lesson:11,art:`<rect class="s" x="36" y="44" width="96" height="96"/>
<path class="s" d="M84 44 L84 92 M36 92 L132 92"/>
<path class="s t r" d="M50 60 Q60 54 70 60 M50 72 L72 72"/>
<path class="s r" d="M104 56 L108 66 L118 64 L110 72 L116 82 L104 76 L96 84 L98 72 L92 64 Z"/>
<path class="s t" d="M50 108 Q66 116 78 108 M96 108 L120 108 M96 120 L116 120"/>
<path class="s" d="M138 128 L162 60 Q166 50 172 54 Q178 58 174 68 L150 138 L134 146 Z"/>
<path class="f" d="M134 146 L146 140 L142 128 Z"/>`},
{id:"daitouryou",kanji:"大統領",kana:"だいとうりょう",romaji:"daitouryou",en:"president of a country",lesson:11,art:`<path class="s" d="M74 96 L126 96 L120 156 L80 156 Z"/>
<path class="s" d="M74 96 L126 96 L134 108 L66 108 Z"/>
<circle class="s r" cx="100" cy="130" r="14"/>
<path class="s r" d="M100 120 L104 128 L112 128 L106 133 L108 141 L100 136 L92 141 L94 133 L88 128 L96 128 Z"/>
<path class="s r" d="M60 44 Q86 54 60 64 M60 44 L60 96 M140 44 Q114 54 140 64 M140 44 L140 96"/>
<path class="s t" d="M100 40 L100 96"/>`}
];
