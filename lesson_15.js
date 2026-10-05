/* =======================================================================
   lesson_15.js  —  Doodle Tango vocabulary, Lesson 15  (Genki II)
   Loaded on demand by index.html when the chosen range includes lesson 15.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[15] = [
{id:"gaikokujin",kanji:"外国人",kana:"がいこくじん",romaji:"gaikokujin",en:"foreigner",lesson:15,art:`<circle class="s" cx="72" cy="54" r="14"/>
<path class="s" d="M72 68 L72 120 M72 120 L60 158 M72 120 L84 158 M72 84 L52 106 M72 84 L120 94"/>
<rect class="s" x="104" y="106" width="36" height="50" rx="5"/>
<path class="s" d="M114 106 L114 94 L130 94 L130 106"/>
<path class="s r" d="M120 44 L170 44 M152 44 L138 28 M152 44 L138 60 M126 44 L120 34"/>`},
{id:"soba",kana:"そば",romaji:"soba",en:"soba; Japanese buckwheat noodles",lesson:15,art:`<path class="s" d="M44 104 L156 104 Q150 156 100 156 Q50 156 44 104 Z"/>
<path class="s t r" d="M58 114 Q72 108 86 114 Q100 120 114 114 Q128 108 142 114"/>
<path class="s" d="M124 30 L98 96 M142 34 L108 98"/>
<path class="s t r" d="M100 94 Q94 100 100 106 Q104 110 100 104 M106 96 Q112 102 106 106"/>`},
{id:"e_picture",kanji:"絵",kana:"え",romaji:"e",en:"painting; picture; drawing",lesson:15,art:`<path class="s t" d="M70 56 L100 32 L130 56"/>
<rect class="s" x="38" y="56" width="124" height="98"/>
<rect class="s t" x="48" y="66" width="104" height="78"/>
<path class="s" d="M48 136 L82 96 L104 120 L120 104 L152 136"/>
<circle class="fr" cx="126" cy="84" r="9"/>`},
{id:"chizu",kanji:"地図",kana:"ちず",romaji:"chizu",en:"map",lesson:15,art:`<path class="s" d="M32 60 L76 46 L124 62 L168 48 L168 148 L124 162 L76 146 L32 160 Z"/>
<path class="s t" d="M76 46 L76 146 M124 62 L124 162"/>
<path class="s t" d="M44 140 Q70 118 96 128 Q116 136 136 108"/>
<path class="fr" d="M140 64 Q126 64 126 78 Q126 88 140 104 Q154 88 154 78 Q154 64 140 64 Z"/>
<circle style="fill:#fff" cx="140" cy="78" r="5"/>`},
{id:"jisho15",kanji:"辞書",kana:"じしょ",romaji:"jisho",en:"dictionary",lesson:15,art:`<rect class="s" x="54" y="38" width="88" height="124" rx="4"/>
<path class="s" d="M70 38 L70 162"/>
<path class="s t" d="M86 64 L126 64 M86 78 L118 78"/>
<rect class="fr" x="142" y="52" width="12" height="16" rx="2"/><rect class="fr" x="142" y="80" width="12" height="16" rx="2"/><rect class="fr" x="142" y="108" width="12" height="16" rx="2"/><rect class="fr" x="142" y="136" width="12" height="16" rx="2"/>`},
{id:"kagu",kanji:"家具",kana:"かぐ",romaji:"kagu",en:"furniture",lesson:15,art:`<path class="s" d="M40 98 L40 74 Q40 66 48 66 L112 66 Q120 66 120 74 L120 98"/>
<rect class="s" x="26" y="94" width="16" height="42" rx="5"/><rect class="s" x="118" y="94" width="16" height="42" rx="5"/>
<path class="s" d="M42 112 L118 112 M42 136 L118 136 M36 136 L36 150 M124 136 L124 150"/>
<path class="s" d="M156 74 L156 150 M144 150 L168 150"/>
<path class="s r" d="M144 74 L168 74 L162 50 L150 50 Z"/>`},
{id:"denchi",kanji:"電池",kana:"でんち",romaji:"denchi",en:"battery",lesson:15,art:`<path class="s" d="M104 26 L90 50 L108 50 L96 70"/>
<rect class="s" x="38" y="78" width="114" height="54" rx="6"/>
<rect class="f" x="152" y="93" width="10" height="24" rx="2"/>
<rect class="fr" x="48" y="88" width="26" height="34" rx="2"/><rect class="fr" x="80" y="88" width="26" height="34" rx="2"/><rect class="fr" x="112" y="88" width="26" height="34" rx="2"/>`},
{id:"jaketto",kana:"ジャケット",romaji:"jaketto",en:"jacket",lesson:15,art:`<path class="s" d="M76 46 L54 58 L40 140 L58 142 L64 96 L64 156 L136 156 L136 96 L142 142 L160 140 L146 58 L124 46"/>
<path class="s" d="M76 46 Q100 58 124 46 M76 46 L92 74 L100 64 M124 46 L108 74 L100 64"/>
<path class="s r" d="M100 64 L100 156"/>
<rect class="fr" x="95" y="96" width="10" height="14" rx="2"/>
<path class="s t" d="M72 124 L90 120 M128 124 L110 120"/>`},
{id:"petto",kana:"ペット",romaji:"petto",en:"pet",lesson:15,art:`<circle class="s" cx="100" cy="96" r="40"/>
<path class="s" d="M68 72 Q46 80 52 120 Q66 116 70 96 M132 72 Q154 80 148 120 Q134 116 130 96"/>
<circle class="f" cx="86" cy="90" r="4"/><circle class="f" cx="114" cy="90" r="4"/>
<ellipse class="f" cx="100" cy="106" rx="7" ry="5"/>
<path class="s t" d="M100 110 L100 118 M90 120 Q100 128 110 120"/>
<path class="s r" d="M70 138 Q100 152 130 138"/><circle class="fr" cx="100" cy="152" r="7"/>`},
{id:"waribikiken",kanji:"割引券",kana:"わりびきけん",romaji:"waribikiken",en:"discount coupon",lesson:15,art:`<path class="s" d="M30 62 L170 62 L170 88 Q160 98 170 108 L170 132 L30 132 L30 108 Q40 98 30 88 Z"/>
<path class="s t" d="M120 68 L120 76 M120 84 L120 92 M120 100 L120 108 M120 116 L120 124"/>
<path class="s r" d="M94 78 L60 118"/><circle class="s r" cx="62" cy="82" r="6"/><circle class="s r" cx="92" cy="114" r="6"/>
<circle class="s t" cx="112" cy="160" r="6"/><circle class="s t" cx="128" cy="160" r="6"/>
<path class="s t" d="M116 155 L126 140 M124 155 L114 140"/>`},
{id:"intaanetto",kana:"インターネット",romaji:"intaanetto",en:"internet",lesson:15,art:`<path class="s" d="M76 52 Q100 30 124 52 M86 60 Q100 48 114 60"/>
<rect class="s" x="48" y="72" width="104" height="66" rx="4"/>
<path class="s" d="M36 150 L164 150 L152 138 L48 138 Z"/>
<circle class="s r" cx="100" cy="105" r="20"/>
<path class="s t r" d="M80 105 L120 105 M100 85 Q86 105 100 125 Q114 105 100 85"/>`},
{id:"jishin",kanji:"地震",kana:"じしん",romaji:"jishin",en:"earthquake",lesson:15,art:`<g transform="rotate(-8 100 116)"><path class="s" d="M66 96 L100 66 L134 96 L134 136 L66 136 Z"/><rect class="s t" x="90" y="110" width="18" height="26"/></g>
<path class="s" d="M28 142 L84 142 M106 142 L172 142"/>
<path class="s r" d="M84 142 L96 152 L88 158 L102 168 L106 142"/>
<path class="s r" d="M44 76 Q38 92 44 108 M32 82 Q26 92 32 102 M156 76 Q162 92 156 108 M168 82 Q174 92 168 102"/>`},
{id:"hoken",kanji:"保険",kana:"ほけん",romaji:"hoken",en:"insurance",lesson:15,art:`<path class="s t" d="M38 38 L32 52 M60 28 L54 42 M146 30 L140 44 M168 44 L162 58 M30 112 L24 126 M172 112 L166 126"/>
<path class="s r" d="M36 92 Q100 30 164 92 Q148 82 132 92 Q116 82 100 92 Q84 82 68 92 Q52 82 36 92 Z"/>
<path class="s" d="M100 92 L100 110"/>
<path class="s" d="M70 134 L100 110 L130 134 L130 162 L70 162 Z"/>
<rect class="s t" x="92" y="140" width="16" height="22"/>`},
{id:"zeikin",kanji:"税金",kana:"ぜいきん",romaji:"zeikin",en:"tax",lesson:15,art:`<ellipse class="s" cx="58" cy="146" rx="24" ry="8"/>
<path class="s" d="M34 146 L34 118 M82 146 L82 118 M34 132 Q58 144 82 132"/>
<ellipse class="s" cx="58" cy="118" rx="24" ry="8" style="fill:#fff"/>
<path class="s r" d="M58 98 Q78 56 112 74 M100 64 L114 76 L98 82"/>
<path class="s" d="M112 94 L142 76 L172 94 Z M114 154 L170 154 M120 100 L120 148 M134 100 L134 148 M150 100 L150 148 M164 100 L164 148"/>`},
{id:"kyoushitsu",kanji:"教室",kana:"きょうしつ",romaji:"kyoushitsu",en:"classroom",lesson:15,art:`<rect class="s" x="40" y="32" width="120" height="66" rx="3"/>
<path class="s t r" d="M58 82 L76 50 L94 82 Z M110 66 A16 16 0 1 0 142 66 A16 16 0 1 0 110 66"/>
<circle class="s" cx="58" cy="116" r="9"/><circle class="s" cx="142" cy="116" r="9"/>
<path class="s" d="M34 134 L82 134 M42 134 L42 158 M74 134 L74 158 M118 134 L166 134 M126 134 L126 158 M158 134 L158 158"/>`},
{id:"tatemono",kanji:"建物",kana:"たてもの",romaji:"tatemono",en:"building",lesson:15,art:`<path class="s" d="M28 164 L172 164"/>
<rect class="s" x="60" y="30" width="62" height="134"/>
<path class="s t" d="M72 46 L84 46 M98 46 L110 46 M72 66 L84 66 M98 66 L110 66 M72 86 L84 86 M98 86 L110 86 M72 106 L84 106 M98 106 L110 106 M72 126 L84 126 M98 126 L110 126"/>
<rect class="s" x="122" y="88" width="40" height="76"/>
<path class="s t" d="M132 104 L152 104 M132 122 L152 122 M132 140 L152 140"/>
<rect class="fr" x="83" y="142" width="16" height="22"/>`},
{id:"puuru",kana:"プール",romaji:"puuru",en:"swimming pool",lesson:15,art:`<path class="s" d="M28 100 L172 100 L172 152 L28 152 Z"/>
<path class="s r" d="M36 118 Q48 110 60 118 Q72 126 84 118 Q96 110 108 118 M36 138 Q48 130 60 138 Q72 146 84 138 Q96 130 108 138"/>
<path class="s" d="M128 128 L128 60 Q128 46 142 46 M154 128 L154 60 Q154 46 168 46 M128 76 L154 76 M128 96 L154 96 M128 116 L154 116"/>`},
{id:"eigakan",kanji:"映画館",kana:"えいがかん",romaji:"eigakan",en:"movie theater",lesson:15,art:`<rect class="s" x="34" y="32" width="132" height="76" rx="3"/>
<path class="s r" d="M34 32 Q48 62 36 108 M166 32 Q152 62 164 108"/>
<path class="f" d="M90 52 L90 88 L118 70 Z"/>
<path class="s" d="M34 160 L34 138 Q34 126 46 126 Q58 126 58 138 L58 160 M70 160 L70 138 Q70 126 82 126 Q94 126 94 138 L94 160 M106 160 L106 138 Q106 126 118 126 Q130 126 130 138 L130 160 M142 160 L142 138 Q142 126 154 126 Q166 126 166 138 L166 160"/>`},
{id:"ryokan",kanji:"旅館",kana:"りょかん",romaji:"ryokan",en:"Japanese inn",lesson:15,art:`<path class="s t" d="M88 44 Q82 36 88 28 M112 44 Q106 36 112 28"/>
<path class="s" d="M26 80 Q52 82 70 54 L130 54 Q148 82 174 80 Z"/>
<path class="s" d="M44 82 L44 158 L156 158 L156 82"/>
<path class="fr" d="M72 86 L128 86 L128 112 L102 112 L102 96 L98 96 L98 112 L72 112 Z"/>
<path class="s t" d="M58 116 L142 116 M58 116 L58 158 M86 116 L86 158 M114 116 L114 158 M142 116 L142 158"/>`},
{id:"niwa",kanji:"庭",kana:"にわ",romaji:"niwa",en:"garden",lesson:15,art:`<path class="s" d="M28 150 L172 150"/>
<path class="s" d="M58 150 L58 106"/>
<circle class="s" cx="58" cy="84" r="26"/>
<path class="s" d="M112 150 L112 122 M142 150 L142 116"/>
<circle class="fr" cx="112" cy="116" r="8"/><circle class="fr" cx="142" cy="110" r="8"/>
<path class="s t" d="M80 162 Q90 156 100 162 Q90 168 80 162 Z M114 164 Q124 158 134 164 Q124 170 114 164 Z"/>`},
{id:"borantia",kana:"ボランティア",romaji:"borantia",en:"volunteer",lesson:15,art:`<circle class="s" cx="86" cy="64" r="13"/>
<path class="s" d="M86 77 L86 124 M86 124 L74 160 M86 124 L98 160 M86 90 L66 112 M86 90 L112 64"/>
<path class="s t" d="M104 52 L100 44 M118 58 L126 54"/>
<path class="fr" d="M126 54 Q126 40 138 40 Q148 40 148 50 Q148 40 158 40 Q170 40 170 54 Q170 66 148 80 Q126 66 126 54 Z"/>
<path class="s r" d="M78 98 L94 98"/>`},
{id:"katsudou",kanji:"活動",kana:"かつどう",romaji:"katsudou",en:"activity",lesson:15,art:`<circle class="s" cx="108" cy="46" r="13"/>
<path class="s" d="M104 59 L94 104 M94 104 L118 124 L114 156 M94 104 L78 132 L56 136 M100 74 L126 88 L140 76 M100 74 L76 82 L68 98"/>
<path class="s r" d="M36 62 L66 62 M28 80 L62 80 M38 98 L58 98"/>
<circle class="fr" cx="148" cy="150" r="10"/>`},
{id:"keiken",kanji:"経験",kana:"けいけん",romaji:"keiken",en:"experience",lesson:15,art:`<path class="s" d="M28 162 L96 58 L172 162"/>
<path class="s" d="M96 58 L96 28"/>
<path class="fr" d="M96 28 L126 36 L96 44 Z"/>
<path class="s r" d="M60 152 L68 146 M80 140 L86 132 M84 120 L80 112 M80 100 L88 94 M96 88 L102 82 M100 74 L98 68"/>`},
{id:"shuukan_custom",kanji:"習慣",kana:"しゅうかん",romaji:"shuukan",en:"custom",lesson:15,art:`<circle class="s" cx="84" cy="80" r="10"/>
<path class="s" d="M58 118 L76 88 M58 118 L52 160 M58 118 L66 160 M72 94 L70 120"/>
<circle class="s" cx="116" cy="80" r="10"/>
<path class="s" d="M142 118 L124 88 M142 118 L148 160 M142 118 L134 160 M128 94 L130 120"/>
<path class="s r" d="M70 50 Q84 36 96 56 M130 50 Q116 36 104 56"/>
<path class="s t" d="M30 160 L170 160"/>`},
{id:"shimekiri",kanji:"締め切り",kana:"しめきり",romaji:"shimekiri",en:"deadline",lesson:15,art:`<circle class="s" cx="100" cy="106" r="54"/>
<path class="fr" d="M100 106 L100 52 A54 54 0 0 0 73 59 Z"/>
<path class="s t" d="M146 106 L138 106 M100 160 L100 152 M54 106 L62 106"/>
<path class="s" d="M100 106 L84 74 M100 106 L118 86"/>
<path class="s r" d="M52 48 L40 36 M148 48 L160 36 M100 42 L100 30"/>`},
{id:"yotei",kanji:"予定",kana:"よてい",romaji:"yotei",en:"schedule; plan",lesson:15,art:`<rect class="s" x="40" y="38" width="100" height="126" rx="4"/>
<path class="s" d="M60 28 L60 46 M90 28 L90 46 M120 28 L120 46"/>
<path class="s t" d="M52 66 L128 66 M52 88 L128 88 M52 136 L128 136"/>
<rect class="fr" x="52" y="100" width="76" height="24" rx="3"/>
<circle class="s" cx="146" cy="142" r="22" style="fill:#fff"/>
<path class="s t" d="M146 142 L146 128 M146 142 L156 148"/>`},
{id:"sotsugyoushiki",kanji:"卒業式",kana:"そつぎょうしき",romaji:"sotsugyoushiki",en:"graduation ceremony",lesson:15,art:`<g transform="rotate(-18 62 76)"><path class="s" d="M36 76 L62 64 L88 76 L62 88 Z M48 82 L48 94 Q62 102 76 94 L76 82"/><path class="s t r" d="M62 76 L80 82 L80 96"/></g>
<g transform="rotate(16 140 62)"><path class="s" d="M114 62 L140 50 L166 62 L140 74 Z M126 68 L126 80 Q140 88 154 80 L154 68"/><path class="s t r" d="M140 62 L158 68 L158 82"/></g>
<g transform="rotate(-4 100 124)"><path class="s" d="M74 124 L100 112 L126 124 L100 136 Z M86 130 L86 142 Q100 150 114 142 L114 130"/><path class="s t r" d="M100 124 L118 130 L118 144"/></g>
<path class="s t r" d="M36 130 L42 136 M160 118 L166 112 M98 30 L104 36 M150 150 L156 156 M44 40 L50 34"/>`},
{id:"kekkonshiki",kanji:"結婚式",kana:"けっこんしき",romaji:"kekkonshiki",en:"wedding",lesson:15,art:`<circle class="s" cx="80" cy="116" r="32"/>
<circle class="s r" cx="120" cy="116" r="32"/>
<path class="fr" d="M120 62 L131 73 L120 84 L109 73 Z"/>
<path class="s t" d="M142 50 L148 44 M148 66 L158 66 M134 44 L134 36"/>
<path class="s t" d="M62 56 Q62 50 67 50 Q72 50 72 55 Q72 50 77 50 Q82 50 82 56 Q82 62 72 68 Q62 62 62 56 Z"/>`},
{id:"uru",kanji:"売る",kana:"うる",romaji:"uru",en:"to sell",lesson:15,art:`<circle class="s" cx="54" cy="58" r="13"/>
<path class="s" d="M54 71 L54 110 M54 84 L98 92"/>
<path class="s" d="M28 110 L128 110 M34 110 L34 162 M122 110 L122 162"/>
<rect class="s" x="96" y="76" width="32" height="32" rx="2"/>
<path class="s t" d="M128 84 L138 80"/>
<path class="fr" d="M136 70 L158 70 L168 80 L158 90 L136 90 Z"/><circle style="fill:#fff" cx="158" cy="80" r="3"/>`},
{id:"orosu",kanji:"下ろす",kana:"おろす",romaji:"orosu",en:"to withdraw (money)",lesson:15,art:`<rect class="s" x="50" y="28" width="100" height="136" rx="6"/>
<rect class="s t" x="64" y="42" width="72" height="44" rx="3"/>
<path class="s r" d="M100 50 L100 76 M90 66 L100 76 L110 66"/>
<path class="s" d="M68 108 L132 108"/>
<rect class="fr" x="78" y="108" width="44" height="32"/>
<circle style="fill:#fff" cx="100" cy="124" r="7"/>`},
{id:"kaku_draw",kanji:"描く",kana:"かく",romaji:"kaku",en:"to draw; to paint",lesson:15,art:`<rect class="s" x="50" y="40" width="92" height="80"/>
<path class="s" d="M74 120 L60 162 M118 120 L132 162 M96 120 L96 162"/>
<path class="s r" d="M64 100 Q80 58 96 86 Q112 112 126 64"/>
<path class="s" d="M168 34 L136 58"/>
<path class="f" d="M140 52 L126 64 L134 50 Z"/>`},
{id:"sagasu",kanji:"探す",kana:"さがす",romaji:"sagasu",en:"to look for",lesson:15,art:`<g transform="rotate(-40 56 134)"><rect class="s" x="20" y="124" width="40" height="20" rx="4"/><path class="s" d="M60 120 L78 112 L78 156 L60 148 Z"/></g>
<path class="s t" d="M66 106 L150 34 M86 124 L172 104"/>
<circle class="s r" cx="122" cy="78" r="9"/>
<path class="s r" d="M131 78 L156 78 M148 78 L148 88 M156 78 L156 86"/>`},
{id:"sasou",kanji:"誘う",kana:"さそう",romaji:"sasou",en:"to invite",lesson:15,art:`<path class="s r" d="M136 40 Q100 16 64 40 M74 30 L64 40 L78 46"/>
<circle class="s" cx="60" cy="66" r="12"/>
<path class="s" d="M60 78 L60 122 M60 122 L50 158 M60 122 L70 158 M60 92 L96 84 Q106 80 100 94"/>
<circle class="s" cx="140" cy="66" r="12"/>
<path class="s" d="M140 78 L140 122 M140 122 L130 158 M140 122 L150 158 M140 92 L126 114 M140 92 L154 114"/>`},
{id:"shaberu",kana:"しゃべる",romaji:"shaberu",en:"to chat",lesson:15,art:`<path class="s" d="M28 50 L104 50 L104 92 L66 92 L50 108 L54 92 L28 92 Z"/>
<path class="s t" d="M40 71 Q48 64 56 71 Q64 78 72 71 Q80 64 90 71"/>
<path class="s r" d="M96 72 L172 72 L172 114 L146 114 L150 128 L132 114 L96 114 Z" style="fill:#fff"/>
<path class="s t r" d="M108 93 Q116 86 124 93 Q132 100 140 93 Q148 86 158 93"/>
<circle class="s" cx="48" cy="140" r="20"/><circle class="s" cx="152" cy="148" r="18"/>`},
{id:"tsukiau",kanji:"付き合う",kana:"つきあう",romaji:"tsukiau",en:"to date (someone); to keep company",lesson:15,art:`<path class="fr" d="M88 38 Q88 28 95 28 Q100 28 100 35 Q100 28 105 28 Q112 28 112 38 Q112 46 100 56 Q88 46 88 38 Z"/>
<circle class="s" cx="66" cy="62" r="13"/>
<path class="s" d="M66 75 L66 122 M66 122 L56 160 M66 122 L76 160 M66 90 L100 108 L134 90 M66 90 L50 116"/>
<circle class="s" cx="134" cy="62" r="13"/>
<path class="s" d="M134 75 L120 128 L148 128 L134 75 M128 128 L126 160 M140 128 L142 160 M134 90 L150 116"/>`},
{id:"tsuku_arrive",kanji:"着く",kana:"つく",romaji:"tsuku",en:"to arrive",lesson:15,art:`<circle class="s" cx="118" cy="52" r="12"/>
<path class="s" d="M118 64 L118 112 M118 112 L108 146 M118 112 L128 146 M118 80 L100 60 M118 80 L136 60"/>
<ellipse class="s r" cx="118" cy="150" rx="36" ry="10"/>
<ellipse class="fr" cx="118" cy="150" rx="12" ry="4"/>
<path class="s t" d="M26 150 L36 150 M46 150 L56 150 M66 150 L76 150"/>`},
{id:"hokennihairu",kanji:"保険に入る",kana:"ほけんにはいる",romaji:"hoken ni hairu",en:"to buy insurance",lesson:15,art:`<rect class="s" x="44" y="34" width="90" height="124" rx="3"/>
<path class="s r" d="M62 82 Q89 50 116 82 Z M89 82 L89 94"/>
<path class="s t" d="M58 108 L120 108 M58 122 L106 122"/>
<path class="s r" d="M58 146 Q68 132 76 142 Q84 152 96 140"/>
<path class="s" d="M166 70 L104 136 M104 136 L98 146 L108 142"/>`},
{id:"kiwotsukeru",kanji:"気をつける",kana:"きをつける",romaji:"ki o tsukeru",en:"to be cautious/careful",lesson:15,art:`<path class="s r" d="M140 30 L166 74 L114 74 Z"/>
<circle class="s" cx="78" cy="50" r="12"/>
<path class="s" d="M78 62 L78 108 M78 76 L50 68 M78 76 L106 68"/>
<path class="s" d="M78 108 L68 142 L60 146 M78 108 L100 126 L108 120"/>
<path class="fr" d="M112 160 Q120 144 128 152 Q134 140 142 152 Q150 144 158 160 Z"/>
<path class="s t" d="M34 150 L170 160"/>`},
{id:"shiraberu",kanji:"調べる",kana:"しらべる",romaji:"shiraberu",en:"to look into (a matter)",lesson:15,art:`<rect class="s" x="34" y="34" width="92" height="122" rx="3"/>
<path class="s t" d="M48 56 L110 56 M48 72 L110 72 M48 88 L96 88 M48 104 L110 104 M48 120 L100 120"/>
<circle class="s r" cx="112" cy="106" r="28" style="fill:#fff"/>
<path class="s" d="M96 100 L128 100 M96 114 L120 114"/>
<path class="s" d="M132 126 L162 158"/>`},
{id:"mieru",kanji:"見える",kana:"みえる",romaji:"mieru",en:"to be visible",lesson:15,art:`<path class="s" d="M26 100 Q50 76 74 100 Q50 124 26 100 Z"/>
<circle class="f" cx="50" cy="100" r="8"/>
<path class="s t r" d="M80 92 L122 66 M80 108 L122 146"/>
<path class="s" d="M100 152 L134 70 L150 70 L176 152"/>
<path class="s t" d="M134 70 L140 86 L146 78 L150 70"/>`},
{id:"suru_decide",kana:"する",romaji:"suru",en:"to decide on (an item)",lesson:15,art:`<rect class="s" x="30" y="44" width="36" height="36" rx="4"/>
<circle class="s" cx="100" cy="62" r="18"/>
<path class="s" d="M134 80 L152 44 L170 80 Z"/>
<path class="s r" d="M88 32 L98 42 L118 20"/>
<rect class="s" x="84" y="122" width="34" height="38" rx="10"/>
<path class="s" d="M94 122 L94 92 M84 136 Q74 132 72 142"/>`},
{id:"kankousuru",kanji:"観光する",kana:"かんこうする",romaji:"kankou suru",en:"to do sightseeing",lesson:15,art:`<path class="s" d="M146 154 L160 40 L174 154 M151 118 L169 118 M155 84 L165 84"/>
<rect class="s" x="34" y="82" width="98" height="66" rx="8"/>
<path class="s" d="M56 82 L64 68 L92 68 L100 82"/>
<circle class="s" cx="83" cy="115" r="20"/>
<circle class="fr" cx="83" cy="115" r="8"/>
<path class="s r" d="M116 60 L124 48 M128 70 L140 64 M108 54 L106 42"/>`},
{id:"yoyakusuru",kanji:"予約する",kana:"よやくする",romaji:"yoyaku suru",en:"to reserve",lesson:15,art:`<ellipse class="s t" cx="52" cy="106" rx="18" ry="5"/>
<ellipse class="s t" cx="148" cy="106" rx="18" ry="5"/>
<path class="fr" d="M80 112 L90 74 L110 74 L120 112 Z"/>
<path style="fill:#fff" d="M92 86 L108 86 L109 90 L91 90 Z"/>
<path class="s" d="M28 112 L172 112 M42 112 L42 160 M158 112 L158 160"/>`},
{id:"sankasuru",kanji:"参加する",kana:"さんかする",romaji:"sanka suru",en:"to participate",lesson:15,art:`<circle class="s" cx="40" cy="72" r="10"/><path class="s" d="M40 82 L40 124 M40 124 L32 156 M40 124 L48 156"/>
<circle class="s" cx="80" cy="72" r="10"/><path class="s" d="M80 82 L80 124 M80 124 L72 156 M80 124 L88 156"/>
<circle class="s" cx="120" cy="72" r="10"/><path class="s" d="M120 82 L120 124 M120 124 L112 156 M120 124 L128 156"/>
<circle class="s r" cx="160" cy="72" r="10"/><path class="s r" d="M160 82 L160 124 M160 124 L152 156 M160 124 L168 156"/>
<path class="s t" d="M40 98 L80 98 M80 98 L120 98"/>
<path class="s r" d="M160 98 L130 98"/>`},
{id:"sotsugyousuru",kanji:"卒業する",kana:"そつぎょうする",romaji:"sotsugyou suru",en:"to graduate (from ...)",lesson:15,art:`<circle class="s" cx="90" cy="70" r="14"/>
<path class="s" d="M62 50 L90 38 L118 50 L90 62 Z"/>
<path class="s t r" d="M90 50 L112 56 L112 70"/>
<path class="s" d="M90 84 L90 132 M90 132 L78 164 M90 132 L102 164 M90 98 L124 90 M90 98 L70 120"/>
<rect class="s" x="120" y="80" width="42" height="14" rx="7"/>
<path class="s r" d="M140 78 L140 96 M134 104 L140 96 L146 104"/>`},
{id:"happyousuru",kanji:"発表する",kana:"はっぴょうする",romaji:"happyou suru",en:"to make a presentation; to make public",lesson:15,art:`<rect class="s" x="74" y="32" width="96" height="72" rx="3"/>
<path class="fr" d="M90 92 L102 92 L102 76 L90 76 Z M112 92 L124 92 L124 62 L112 62 Z M134 92 L146 92 L146 46 L134 46 Z"/>
<path class="s" d="M122 104 L122 132 M106 132 L138 132"/>
<circle class="s" cx="44" cy="72" r="12"/>
<path class="s" d="M44 84 L44 128 M44 128 L34 164 M44 128 L54 164 M44 98 L66 86"/>
<path class="s t" d="M66 86 L94 66"/>`},
{id:"kedo",kana:"〜けど",romaji:"kedo",en:"..., but; ..., so",lesson:15,art:`<circle class="f" cx="32" cy="80" r="4"/><circle class="f" cx="46" cy="80" r="4"/><circle class="f" cx="60" cy="80" r="4"/>
<path class="s" d="M74 80 L112 80"/>
<path class="s r" d="M112 80 Q152 80 152 112 Q152 142 114 142 M126 130 L114 142 L126 154"/>`},
{id:"me_th",kanji:"〜目",kana:"〜め",romaji:"me",en:"-th",lesson:15,art:`<rect class="s" x="28" y="92" width="24" height="32" rx="3"/>
<rect class="s" x="60" y="92" width="24" height="32" rx="3"/>
<rect class="fr" x="92" y="92" width="24" height="32" rx="3"/>
<rect class="s t" x="124" y="92" width="24" height="32" rx="3"/>
<rect class="s t" x="156" y="92" width="18" height="32" rx="3"/>
<path class="s r" d="M104 40 L104 78 M94 68 L104 78 L114 68"/>`},
{id:"ichinichime",kanji:"一日目",kana:"いちにちめ",romaji:"ichinichime",en:"first day",lesson:15,art:`<rect class="s" x="36" y="44" width="128" height="116" rx="6"/>
<path class="s" d="M36 70 L164 70 M64 34 L64 54 M136 34 L136 54"/>
<path class="s t" d="M68 70 L68 160 M100 70 L100 160 M132 70 L132 160 M36 100 L164 100 M36 130 L164 130"/>
<path class="s" d="M46 96 L46 74"/>
<path class="fr" d="M46 74 L64 79 L46 85 Z"/>`},
{id:"ichinichijuu",kanji:"一日中",kana:"いちにちじゅう",romaji:"ichinichijuu",en:"all day long",lesson:15,art:`<path class="s" d="M26 140 L174 140"/>
<path class="s" d="M30 140 A14 14 0 0 1 58 140 M142 140 A14 14 0 0 1 170 140"/>
<path class="s t r" d="M44 126 Q100 34 156 126 M146 116 L156 126 L158 112"/>
<circle class="fr" cx="100" cy="80" r="12"/>
<path class="s t" d="M100 58 L100 50 M78 80 L70 80 M122 80 L130 80 M84 64 L78 58 M116 64 L122 58"/>`},
{id:"saikin",kanji:"最近",kana:"さいきん",romaji:"saikin",en:"recently",lesson:15,art:`<path class="s" d="M28 112 L164 112 M152 102 L166 112 L152 122"/>
<path class="s t" d="M44 106 L44 118 M68 106 L68 118 M92 106 L92 118 M116 106 L116 118 M140 106 L140 118"/>
<path class="s r" d="M116 94 L116 84 L148 84 L148 94"/>
<circle class="fr" cx="148" cy="112" r="7"/>
<path class="s t r" d="M148 66 Q132 50 116 66 M124 68 L116 66 L118 58"/>`},
{id:"mouichido",kanji:"もう一度",kana:"もういちど",romaji:"mou ichido",en:"one more time",lesson:15,art:`<path class="s r" d="M146 100 A46 46 0 1 1 134 68"/>
<path class="s r" d="M131 54 L134 68 L120 66"/>
<rect class="s" x="86" y="98" width="28" height="30" rx="8"/>
<path class="s" d="M94 98 L94 74"/>`},
{id:"tanoshimidesu",kanji:"楽しみです",kana:"たのしみです",romaji:"tanoshimi desu",en:"cannot wait; to look forward to it",lesson:15,art:`<circle class="s" cx="58" cy="62" r="13"/>
<path class="s" d="M58 75 L58 120 M58 120 L48 156 M58 120 L68 156 M58 88 L38 66 M58 88 L78 66"/>
<path class="s t r" d="M34 50 L28 42 M82 50 L88 42"/>
<rect class="s" x="98" y="64" width="70" height="78" rx="4"/>
<path class="s" d="M98 84 L168 84 M114 56 L114 70 M152 56 L152 70"/>
<path class="fr" d="M121 106 Q121 98 127 98 Q133 98 133 104 Q133 98 139 98 Q145 98 145 106 Q145 114 133 124 Q121 114 121 106 Z"/>`}
];