/* =======================================================================
   lesson_18.js  —  Doodle Tango vocabulary, Lesson 18  (Genki II)
   Loaded on demand by index.html when the chosen range includes lesson 18.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[18] = [
{id:"kaaten_18",kana:"カーテン",romaji:"kaaten",en:"curtain",lesson:18,art:`<path class="s" d="M32 40 L168 40"/>
<path class="s t" d="M80 60 L120 60 L120 140 L80 140 Z M100 60 L100 140"/>
<path class="s r" d="M44 40 Q54 100 40 160 L74 160 Q64 100 80 40"/>
<path class="s r" d="M156 40 Q146 100 160 160 L126 160 Q136 100 120 40"/>
<path class="s t" d="M60 48 Q64 100 56 152 M140 48 Q136 100 144 152"/>`},
{id:"sofa_18",kana:"ソファ",romaji:"sofa",en:"sofa",lesson:18,art:`<path class="s" d="M50 100 L50 70 Q50 60 60 60 L140 60 Q150 60 150 70 L150 100"/>
<path class="s" d="M34 100 Q34 90 44 90 Q54 90 54 100 L54 136 L146 136 L146 100 Q146 90 156 90 Q166 90 166 100 L166 136 Q166 144 158 144 L42 144 Q34 144 34 136 Z"/>
<path class="s r" d="M54 112 L146 112 M100 112 L100 136"/>
<path class="s" d="M46 144 L46 158 M154 144 L154 158"/>`},
{id:"reizouko_18",kanji:"冷蔵庫",kana:"れいぞうこ",romaji:"reizouko",en:"refrigerator",lesson:18,art:`<rect class="s" x="62" y="28" width="76" height="140" rx="8"/>
<path class="s" d="M62 76 L138 76"/>
<path class="s" d="M126 44 L126 64 M126 90 L126 120"/>
<path class="s r" d="M88 40 L88 64 M78 46 L98 58 M78 58 L98 46"/>
<path class="s t" d="M74 104 L104 104 M74 118 L96 118"/>`},
{id:"suicchi_18",kana:"スイッチ",romaji:"suicchi",en:"switch",lesson:18,art:`<rect class="s" x="66" y="40" width="68" height="110" rx="10"/>
<rect class="s" x="86" y="66" width="28" height="58" rx="5"/>
<rect class="fr" x="90" y="70" width="20" height="26" rx="3"/>
<circle class="f" cx="100" cy="52" r="3"/><circle class="f" cx="100" cy="138" r="3"/>`},
{id:"shouyu_18",kanji:"しょう油",kana:"しょうゆ",romaji:"shouyu",en:"soy sauce",lesson:18,art:`<path class="s" d="M70 150 L70 96 Q70 76 86 70 L86 54 L102 54 L102 70 Q118 76 118 96 L118 150 Z"/>
<path class="f" d="M74 112 L114 112 L114 146 L74 146 Z"/>
<path class="fr" d="M84 38 L104 38 L104 54 L84 54 Z"/>
<path class="s t r" d="M104 44 L116 38"/>
<ellipse class="s" cx="146" cy="150" rx="22" ry="7"/>
<ellipse class="f" cx="146" cy="149" rx="12" ry="3"/>`},
{id:"suupu_18",kana:"スープ",romaji:"suupu",en:"soup",lesson:18,art:`<path class="s" d="M38 96 L162 96 Q158 150 100 152 Q42 150 38 96 Z"/>
<path class="s t" d="M50 106 Q100 114 150 106"/>
<path class="s" d="M80 162 L120 162"/>
<path class="s r" d="M80 84 Q72 72 80 60 Q88 48 80 36 M100 84 Q92 72 100 60 Q108 48 100 36 M120 84 Q112 72 120 60 Q128 48 120 36"/>`},
{id:"banana_18",kana:"バナナ",romaji:"banana",en:"banana",lesson:18,art:`<path class="s" d="M50 70 Q60 150 150 134 Q162 128 152 120 Q82 124 68 64 Z"/>
<path class="s t" d="M60 80 Q78 126 140 126"/>
<path class="s r" d="M50 70 L44 56 L60 52 L68 64"/>
<path class="s t r" d="M152 132 L162 138"/>`},
{id:"poppukoon_18",kana:"ポップコーン",romaji:"poppukoon",en:"popcorn",lesson:18,art:`<path class="s" d="M60 90 L140 90 L128 166 L72 166 Z"/>
<path class="s r" d="M80 90 L86 166 M100 90 L100 166 M120 90 L114 166"/>
<path class="s" d="M58 90 Q52 70 70 68 Q72 52 90 58 Q100 44 112 58 Q130 52 130 68 Q148 70 142 90"/>
<circle class="s t" cx="76" cy="38" r="8"/><circle class="s t" cx="126" cy="36" r="7"/>
<path class="s t" d="M64 30 L58 24 M138 28 L144 24"/>`},
{id:"shanpuu_18",kana:"シャンプー",romaji:"shanpuu",en:"shampoo",lesson:18,art:`<rect class="s" x="66" y="70" width="58" height="96" rx="12"/>
<path class="s" d="M88 70 L88 56 L102 56 L102 70 M90 56 L90 44 L120 44 L120 52"/>
<path class="s r" d="M95 94 Q112 116 112 124 Q112 138 95 138 Q78 138 78 124 Q78 116 95 94 Z"/>
<circle class="s t" cx="146" cy="72" r="10"/><circle class="s t" cx="158" cy="104" r="7"/><circle class="s t" cx="142" cy="128" r="5"/>`},
{id:"rousoku_18",kana:"ろうそく",romaji:"rousoku",en:"candle",lesson:18,art:`<rect class="s" x="80" y="76" width="40" height="80" rx="3"/>
<path class="s" d="M100 76 L100 64"/>
<path class="fr" d="M100 28 Q116 48 108 60 Q100 68 92 60 Q84 48 100 28 Z"/>
<path class="s t" d="M80 88 Q88 98 92 86 M108 86 Q112 104 120 92"/>
<ellipse class="s" cx="100" cy="158" rx="40" ry="8"/>`},
{id:"taoru_18",kana:"タオル",romaji:"taoru",en:"towel",lesson:18,art:`<path class="s" d="M36 50 L164 50"/>
<circle class="f" cx="36" cy="50" r="5"/><circle class="f" cx="164" cy="50" r="5"/>
<path class="s" d="M62 50 L62 150 L138 150 L138 50"/>
<path class="s r" d="M62 122 L138 122 M62 134 L138 134"/>
<path class="s t" d="M70 150 L70 160 M84 150 L84 160 M98 150 L98 160 M112 150 L112 160 M126 150 L126 160"/>`},
{id:"sukaato_18",kana:"スカート",romaji:"sukaato",en:"skirt",lesson:18,art:`<rect class="fr" x="72" y="42" width="56" height="16" rx="3"/>
<path class="s" d="M74 58 L42 152 L158 152 L126 58"/>
<path class="s t" d="M88 58 L74 152 M100 58 L100 152 M112 58 L126 152"/>
<path class="s t" d="M56 120 L64 124 M144 120 L136 124"/>`},
{id:"nikki_18",kanji:"日記",kana:"にっき",romaji:"nikki",en:"diary",lesson:18,art:`<rect class="s" x="48" y="38" width="84" height="120" rx="6"/>
<path class="s" d="M62 38 L62 158"/>
<path class="s r" d="M132 84 L112 84 L112 110 L132 110"/>
<circle class="fr" cx="119" cy="97" r="5"/>
<path class="s" d="M150 46 L150 136 L156 152 L162 136 L162 46 Z M150 60 L162 60"/>`},
{id:"keitai_18",kanji:"携帯",kana:"けいたい",romaji:"keitai",en:"cell phone",lesson:18,art:`<rect class="s" x="68" y="40" width="60" height="120" rx="10"/>
<path class="s t" d="M76 56 L120 56 L120 136 L76 136 Z"/>
<circle class="s t" cx="98" cy="148" r="5"/>
<path class="s r" d="M140 62 Q150 72 140 82 M150 50 Q168 72 150 94"/>`},
{id:"sakura_18",kanji:"桜",kana:"さくら",romaji:"sakura",en:"cherry blossom",lesson:18,art:`<path class="s" d="M28 166 Q70 140 100 104"/>
<path class="s t" d="M64 146 Q60 128 74 120"/>
<path class="s r" d="M110 90 Q94 70 102 52 L110 60 L118 52 Q126 70 110 90 Z"/>
<path class="s r" d="M110 90 Q94 70 102 52 L110 60 L118 52 Q126 70 110 90 Z" transform="rotate(72 110 90)"/>
<path class="s r" d="M110 90 Q94 70 102 52 L110 60 L118 52 Q126 70 110 90 Z" transform="rotate(144 110 90)"/>
<path class="s r" d="M110 90 Q94 70 102 52 L110 60 L118 52 Q126 70 110 90 Z" transform="rotate(216 110 90)"/>
<path class="s r" d="M110 90 Q94 70 102 52 L110 60 L118 52 Q126 70 110 90 Z" transform="rotate(288 110 90)"/>
<circle class="f" cx="110" cy="90" r="5"/>`},
{id:"mushi_18",kanji:"虫",kana:"むし",romaji:"mushi",en:"insect",lesson:18,art:`<ellipse class="s" cx="100" cy="110" rx="34" ry="42"/>
<circle class="s" cx="100" cy="58" r="14"/>
<path class="s" d="M100 68 L100 152"/>
<path class="s" d="M68 92 L46 82 M66 112 L42 114 M70 134 L48 148 M132 92 L154 82 M134 112 L158 114 M130 134 L152 148"/>
<path class="s t" d="M94 46 L82 30 M106 46 L118 30"/>
<circle class="fr" cx="86" cy="100" r="6"/><circle class="fr" cx="114" cy="100" r="6"/><circle class="fr" cx="88" cy="130" r="5"/><circle class="fr" cx="112" cy="130" r="5"/>`},
{id:"yachin_18",kanji:"家賃",kana:"やちん",romaji:"yachin",en:"rent",lesson:18,art:`<path class="s" d="M32 96 L76 58 L120 96 M42 88 L42 152 L110 152 L110 88"/>
<rect class="s" x="66" y="118" width="20" height="34"/>
<rect class="s r" x="126" y="124" width="44" height="26" rx="3"/>
<circle class="s t r" cx="148" cy="137" r="7"/>
<path class="s r" d="M148 114 Q140 82 112 72 M112 72 L124 68 M112 72 L120 82"/>`},
{id:"soto_18",kanji:"外",kana:"そと",romaji:"soto",en:"outside",lesson:18,art:`<path class="s" d="M28 100 L62 70 L96 100 M36 94 L36 150 L88 150 L88 94"/>
<rect class="s" x="52" y="118" width="18" height="32"/>
<path class="s r" d="M74 136 L110 136 M102 128 L110 136 L102 144"/>
<circle class="s" cx="140" cy="84" r="10"/>
<path class="s" d="M140 94 L140 128 M140 128 L130 152 M140 128 L150 152 M140 104 L126 116 M140 104 L154 116"/>
<circle class="s t r" cx="156" cy="40" r="10"/>
<path class="s t" d="M24 160 L176 160"/>`},
{id:"ato_rest_18",kanji:"後",kana:"あと",romaji:"ato",en:"the rest",lesson:18,art:`<circle class="s t" cx="100" cy="100" r="60"/>
<path class="fr" d="M100 100 L160 100 A60 60 0 0 1 70 152 Z"/>
<path class="s" d="M100 100 L160 100 A60 60 0 0 1 70 152 Z M100 100 L130 152"/>
<circle class="f" cx="70" cy="70" r="3"/><circle class="f" cx="88" cy="56" r="2.5"/><circle class="f" cx="122" cy="66" r="2.5"/>`},
{id:"yuugata_18",kanji:"夕方",kana:"ゆうがた",romaji:"yuugata",en:"evening",lesson:18,art:`<path class="s" d="M28 128 L172 128"/>
<path class="fr" d="M64 128 A36 36 0 0 1 136 128 Z"/>
<path class="s t r" d="M100 80 L100 66 M66 94 L56 84 M134 94 L144 84 M48 116 L36 112 M152 116 L164 112"/>
<path class="s t" d="M50 144 L90 144 M84 156 L150 156"/>
<path class="s t" d="M118 46 Q124 40 130 46 Q136 40 142 46"/>`},
{id:"akarui_18",kanji:"明るい",kana:"あかるい",romaji:"akarui",en:"bright",lesson:18,art:`<circle class="fr" cx="100" cy="100" r="30"/>
<circle class="s t" cx="100" cy="100" r="40"/>
<path class="s r" d="M100 52 L100 32 M100 148 L100 166 M52 100 L32 100 M148 100 L168 100 M66 66 L52 52 M134 66 L148 52 M66 134 L52 148 M134 134 L148 148"/>
<path style="fill:#fff" d="M86 104 Q100 120 114 104 Z"/>`},
{id:"kurai_18",kanji:"暗い",kana:"くらい",romaji:"kurai",en:"dark",lesson:18,art:`<rect class="f" x="40" y="36" width="120" height="124" rx="6"/>
<path style="fill:#fff" d="M112 60 A32 32 0 1 0 140 110 A26 26 0 1 1 112 60 Z"/>
<circle style="fill:#fff" cx="62" cy="64" r="3"/><circle style="fill:#fff" cx="78" cy="134" r="2.5"/><circle style="fill:#fff" cx="144" cy="54" r="2.5"/>
<rect class="s r" x="32" y="28" width="136" height="140" rx="8"/>`},
{id:"hazukashii_18",kanji:"恥ずかしい",kana:"はずかしい",romaji:"hazukashii",en:"embarrassing; to feel embarrassed",lesson:18,art:`<circle class="s" cx="100" cy="96" r="46"/>
<path class="s" d="M78 88 Q84 94 90 88 M110 88 Q116 94 122 88"/>
<ellipse class="fr" cx="74" cy="110" rx="10" ry="6"/><ellipse class="fr" cx="126" cy="110" rx="10" ry="6"/>
<path class="s" d="M90 122 Q95 118 100 122 Q105 126 110 122"/>
<path class="s t" d="M154 52 Q162 64 154 70 Q146 64 154 52 Z"/>`},
{id:"taisetsu_18",kanji:"大切",kana:"たいせつ",romaji:"taisetsu",en:"precious; important",lesson:18,art:`<path class="fr" d="M100 90 Q100 62 78 62 Q60 62 60 82 Q60 102 100 124 Q140 102 140 82 Q140 62 122 62 Q100 62 100 90 Z"/>
<path class="s" d="M36 108 Q50 152 100 152 Q150 152 164 108"/>
<path class="s" d="M36 108 L52 112 L60 132 M164 108 L148 112 L140 132"/>
<path class="s t r" d="M58 44 L66 54 M100 32 L100 44 M142 44 L134 54"/>`},
{id:"fuan_18",kanji:"不安",kana:"ふあん",romaji:"fuan",en:"anxious; worried",lesson:18,art:`<circle class="s" cx="100" cy="114" r="40"/>
<path class="s" d="M76 104 L92 96 M124 104 L108 96"/>
<circle class="f" cx="86" cy="114" r="3.5"/><circle class="f" cx="114" cy="114" r="3.5"/>
<path class="s" d="M86 136 Q93 128 100 136 Q107 144 114 136"/>
<path class="s r" d="M70 54 Q86 30 102 50 Q118 70 130 46 Q120 28 106 42 Q94 58 84 40"/>`},
{id:"muri_18",kanji:"無理",kana:"むり",romaji:"muri",en:"impossible",lesson:18,art:`<circle class="s" cx="100" cy="44" r="15"/>
<path class="s t" d="M94 52 L106 52"/>
<path class="s" d="M100 59 L100 118 M100 118 L86 158 M100 118 L114 158"/>
<path class="s r" d="M62 60 L138 112 M138 60 L62 112"/>`},
{id:"aku_18",kanji:"開く",kana:"あく",romaji:"aku",en:"(something) opens",lesson:18,art:`<rect class="s" x="74" y="34" width="60" height="130"/>
<path class="s" d="M74 34 L42 48 L42 152 L74 164 Z"/>
<circle class="f" cx="52" cy="100" r="4"/>
<path class="s r" d="M128 52 Q98 34 54 40 M128 148 Q98 164 54 158"/>
<path class="s r" d="M54 40 L64 34 M54 40 L64 48"/>
<path class="s t" d="M150 70 L162 66 M150 100 L164 100 M150 130 L162 134"/>`},
{id:"shimaru_18",kanji:"閉まる",kana:"しまる",romaji:"shimaru",en:"(something) closes",lesson:18,art:`<rect class="s" x="74" y="34" width="60" height="130"/>
<rect class="s t" x="80" y="40" width="48" height="118"/>
<circle class="f" cx="120" cy="100" r="4"/>
<path class="s r" d="M142 70 L156 62 M144 100 L160 100 M142 130 L156 138"/>
<path class="s r" d="M38 52 Q58 100 66 140 M66 140 L56 132 M66 140 L70 128"/>`},
{id:"ayamaru_18",kanji:"謝る",kana:"あやまる",romaji:"ayamaru",en:"to apologize",lesson:18,art:`<circle class="s" cx="62" cy="88" r="13"/>
<path class="s" d="M76 86 L122 80 M122 80 L114 122 L112 160 M122 80 L128 122 L130 160"/>
<path class="s" d="M86 86 L84 118 M96 85 L94 116"/>
<path class="s r" d="M58 58 Q90 36 124 56 M58 58 L62 46 M58 58 L70 62"/>
<path class="s t" d="M148 40 Q154 50 148 54 Q142 50 148 40 Z"/>`},
{id:"osu_18",kanji:"押す",kana:"おす",romaji:"osu",en:"to press; to push",lesson:18,art:`<rect class="s" x="56" y="134" width="88" height="22" rx="4"/>
<path class="fr" d="M76 134 Q76 112 100 112 Q124 112 124 134 Z"/>
<rect class="s" x="92" y="52" width="16" height="60" rx="8"/>
<path class="s" d="M108 64 L142 64 Q154 64 154 78 L154 86 Q154 100 140 100 L108 100"/>
<path class="s t r" d="M66 116 L54 108 M134 116 L146 108"/>`},
{id:"otosu_18",kanji:"落とす",kana:"おとす",romaji:"otosu",en:"to drop (something)",lesson:18,art:`<path class="s" d="M30 34 L84 34 Q100 34 100 48 Q100 60 88 60 L56 60"/>
<path class="s" d="M88 60 L96 76 M76 60 L80 78 M64 60 L64 76"/>
<g transform="rotate(25 112 126)"><path class="s r" d="M96 106 L128 106 L124 148 L100 148 Z"/></g>
<path class="s t" d="M100 84 L100 98 M116 80 L116 96 M132 86 L132 100"/>
<path class="s" d="M40 166 L160 166"/>`},
{id:"oyugawaku_18",kanji:"お湯が沸く",kana:"おゆがわく",romaji:"oyu ga waku",en:"water boils",lesson:18,art:`<path class="s" d="M50 90 L150 90 L144 146 Q142 154 132 154 L68 154 Q58 154 56 146 Z"/>
<path class="s" d="M50 94 L36 88 M150 94 L164 88"/>
<circle class="s t r" cx="78" cy="80" r="7"/><circle class="s t r" cx="102" cy="74" r="9"/><circle class="s t r" cx="126" cy="80" r="6"/>
<path class="s r" d="M86 58 Q78 46 86 34 M116 56 Q108 44 116 32"/>
<path class="s t" d="M70 168 L78 160 L86 168 M114 168 L122 160 L130 168"/>`},
{id:"korobu_18",kanji:"転ぶ",kana:"ころぶ",romaji:"korobu",en:"to fall down",lesson:18,art:`<path class="s" d="M28 150 L172 150"/>
<path class="s" d="M44 150 Q48 132 64 132 Q80 132 84 150 Z"/>
<circle class="s" cx="134" cy="120" r="12"/>
<path class="s" d="M78 100 L120 114 M78 100 L50 80 M78 100 L62 128 M118 114 L140 144 M114 112 L108 144"/>
<path class="s t" d="M42 64 L28 60 M44 84 L30 84"/>
<path class="s t r" d="M152 136 L164 128 M156 146 L170 146 M150 102 L160 92"/>`},
{id:"kowasu_18",kanji:"壊す",kana:"こわす",romaji:"kowasu",en:"to break (something)",lesson:18,art:`<circle class="s" cx="44" cy="36" r="10"/>
<path class="s" d="M52 42 L94 76"/>
<path class="s" d="M82 90 L108 60 L118 69 L92 99 Z"/>
<path class="s" d="M76 102 L124 102 L118 162 L82 162 Z"/>
<path class="s r" d="M100 102 L94 118 L106 130 L96 146 L102 162"/>
<path class="s t r" d="M130 92 L144 84 M134 106 L150 104"/>
<path class="s t" d="M136 156 L146 148 L150 160 Z"/>`},
{id:"saku_18",kanji:"咲く",kana:"さく",romaji:"saku",en:"to bloom",lesson:18,art:`<path class="s" d="M100 166 L100 96"/>
<path class="s" d="M100 142 Q76 138 70 118 Q92 118 100 134 M100 128 Q124 124 130 104 Q108 104 100 120"/>
<path class="s r" d="M100 96 Q72 92 68 62 Q88 66 100 86 Q112 66 132 62 Q128 92 100 96 Z"/>
<path class="s r" d="M100 86 Q92 64 100 48 Q108 64 100 86"/>
<path class="s t r" d="M58 48 L48 40 M100 36 L100 26 M142 48 L152 40"/>`},
{id:"tasukaru_18",kanji:"助かる",kana:"たすかる",romaji:"tasukaru",en:"to be saved; to be helped",lesson:18,art:`<circle class="s" cx="100" cy="70" r="13"/>
<circle class="s r" cx="100" cy="114" r="30"/>
<circle class="s r" cx="100" cy="114" r="16"/>
<path class="s" d="M88 82 L74 104 M112 82 L126 104"/>
<path class="s t" d="M28 150 Q46 140 64 150 Q82 160 100 150 Q118 140 136 150 Q154 160 172 150"/>
<path class="s t r" d="M136 52 L146 42 M140 64 L152 62"/>`},
{id:"tanomu_18",kanji:"頼む",kana:"たのむ",romaji:"tanomu",en:"to ask (a favor)",lesson:18,art:`<circle class="s" cx="62" cy="58" r="13"/>
<path class="s" d="M66 71 L74 120 M74 120 L64 158 M74 120 L86 158 M70 86 L92 92"/>
<path class="s r" d="M88 98 L96 70 L104 98 Z"/>
<circle class="s" cx="142" cy="54" r="13"/>
<path class="s" d="M142 67 L142 120 M142 120 L132 158 M142 120 L152 158 M142 84 L128 104 M142 84 L156 104"/>
<path class="s t" d="M104 46 Q114 36 122 46"/>`},
{id:"tsuku_on_18",kana:"つく",romaji:"tsuku",en:"(something) turns on",lesson:18,art:`<path class="s" d="M84 118 Q60 100 64 76 Q68 48 100 48 Q132 48 136 76 Q140 100 116 118 Z"/>
<path class="s" d="M86 126 L114 126 M88 136 L112 136 M92 146 L108 146"/>
<path class="s r" d="M90 104 L94 84 L100 96 L106 84 L110 104"/>
<path class="s r" d="M100 36 L100 26 M60 46 L52 38 M140 46 L148 38 M46 82 L32 82 M154 82 L168 82 M56 116 L46 124 M144 116 L154 124"/>`},
{id:"yogosu_18",kanji:"汚す",kana:"よごす",romaji:"yogosu",en:"to make dirty",lesson:18,art:`<path class="s" d="M48 60 L70 48 Q86 58 102 48 L124 60 L138 82 L120 90 L120 150 L52 150 L52 90 L34 82 Z"/>
<path class="f" d="M68 100 Q86 90 104 102 Q108 112 96 116 Q80 122 68 112 Z"/>
<path class="s" d="M112 106 L156 60"/>
<path class="s" d="M102 104 L114 98 L118 112 Q108 122 100 116 Z"/>
<circle class="s" cx="160" cy="54" r="10"/>
<path class="s r" d="M78 132 Q100 142 122 128"/>`},
{id:"ochiru_18",kanji:"落ちる",kana:"おちる",romaji:"ochiru",en:"(something) drops",lesson:18,art:`<path class="s" d="M28 42 Q80 30 132 46"/>
<path class="s t" d="M70 38 Q76 52 66 58 Q60 46 70 38 Z"/>
<circle class="fr" cx="104" cy="120" r="18"/>
<path class="s" d="M104 102 L107 92"/>
<path class="s t" d="M90 66 L90 88 M104 60 L104 84 M118 66 L118 88"/>
<path class="s" d="M44 164 L164 164"/>`},
{id:"katazukeru_18",kanji:"片付ける",kana:"かたづける",romaji:"katazukeru",en:"to tidy up",lesson:18,art:`<path class="s" d="M28 140 L172 140 M32 140 L32 160 M168 140 L168 160"/>
<path class="s" d="M44 140 L44 84 L60 84 L60 140 M60 140 L60 76 L78 76 L78 140 M78 140 L78 88 L94 88 L94 140"/>
<g transform="rotate(-20 124 96)"><rect class="s r" x="116" y="70" width="16" height="56"/></g>
<path class="s r" d="M154 120 Q130 132 108 128 M108 128 L118 122 M108 128 L118 136"/>
<path class="s t" d="M150 38 L150 54 M142 46 L158 46 M64 50 L64 62 M58 56 L70 56"/>`},
{id:"kangaeru_18",kanji:"考える",kana:"かんがえる",romaji:"kangaeru",en:"to think (about); to consider",lesson:18,art:`<circle class="s" cx="68" cy="112" r="22"/>
<path class="s" d="M68 134 L68 166 M68 148 L92 146 L84 126"/>
<circle class="s t" cx="98" cy="90" r="5"/><circle class="s t" cx="108" cy="78" r="3"/>
<path class="s" d="M114 68 Q104 54 120 46 Q124 30 142 36 Q160 30 164 48 Q178 58 164 70 Q158 82 140 78 Q124 84 114 68 Z"/>
<path class="s r" d="M136 58 Q136 48 144 50 Q152 54 146 62 Q138 68 130 60"/>`},
{id:"kieru_18",kanji:"消える",kana:"きえる",romaji:"kieru",en:"(something) goes off",lesson:18,art:`<path class="f" d="M84 118 Q60 100 64 76 Q68 48 100 48 Q132 48 136 76 Q140 100 116 118 Z"/>
<path class="s" d="M86 126 L114 126 M88 136 L112 136 M92 146 L108 146"/>
<path class="s t r" d="M100 42 Q90 34 98 26 M120 40 Q130 30 124 24 M80 40 Q72 32 76 26"/>
<path class="s t" d="M50 70 L40 70 M150 70 L160 70 M54 100 L44 104 M146 100 L156 104"/>`},
{id:"kowareru_18",kanji:"壊れる",kana:"こわれる",romaji:"kowareru",en:"(something) breaks",lesson:18,art:`<path class="s" d="M60 100 L94 100 L96 160 L66 160 Z"/>
<path class="s" d="M106 100 L140 100 L134 160 L104 160 Z"/>
<path class="s r" d="M94 100 L88 116 L98 130 L90 146 L96 160 M106 100 L100 116 L110 130 L102 146 L104 160"/>
<path class="s t" d="M84 78 L80 64 M100 76 L100 60 M116 78 L120 64"/>
<path class="s t" d="M40 120 L50 112 L52 124 Z M160 116 L150 108 L148 122 Z"/>
<path class="s" d="M32 168 L168 168"/>`},
{id:"yogoreru_18",kanji:"汚れる",kana:"よごれる",romaji:"yogoreru",en:"to become dirty",lesson:18,art:`<path class="s" d="M62 60 L84 48 Q100 58 116 48 L138 60 L152 82 L134 90 L134 150 L66 150 L66 90 L48 82 Z"/>
<path class="f" d="M80 100 L86 92 L90 100 L98 96 L94 106 L100 112 L90 112 L86 120 L82 112 L74 110 Z"/>
<circle class="f" cx="118" cy="122" r="7"/><circle class="f" cx="100" cy="138" r="4"/><circle class="f" cx="118" cy="80" r="3"/>
<path class="s r" d="M164 98 Q170 106 164 114 Q158 122 164 130 M36 98 Q30 106 36 114 Q42 122 36 130"/>`},
{id:"chuumonsuru_18",kanji:"注文する",kana:"ちゅうもんする",romaji:"chuumon suru",en:"to place an order",lesson:18,art:`<path class="s" d="M32 50 L100 60 L168 50 L168 150 L100 160 L32 150 Z M100 60 L100 160"/>
<path class="s t" d="M46 76 L88 82 M46 96 L88 102 M46 116 L88 122 M112 82 L154 76 M112 122 L154 116"/>
<ellipse class="s r" cx="132" cy="98" rx="26" ry="11"/>
<path class="s t" d="M116 99 L150 96"/>
<g transform="rotate(-25 144 136)"><rect class="s" style="fill:#fff" x="136" y="112" width="16" height="50" rx="8"/></g>`},
{id:"imasugu_18",kanji:"今すぐ",kana:"いますぐ",romaji:"ima sugu",en:"right away",lesson:18,art:`<circle class="s" cx="104" cy="104" r="44"/>
<path class="s" d="M104 104 L104 74 M104 104 L126 104"/>
<path class="s t" d="M104 62 L104 68 M146 104 L140 104 M104 146 L104 140"/>
<path class="s t" d="M28 84 L52 84 M24 104 L50 104 M28 124 L52 124"/>
<path class="fr" d="M156 24 L140 54 L152 54 L140 82 L172 46 L160 46 L172 24 Z"/>`},
{id:"madeni_18",kana:"〜までに",romaji:"made ni",en:"by (time/date)",lesson:18,art:`<path class="s" d="M28 130 L148 130"/>
<path class="s r" d="M150 46 L150 150"/>
<path class="fr" d="M150 46 L174 56 L150 66 Z"/>
<circle class="f" cx="110" cy="130" r="8"/>
<path class="s t" d="M60 122 L90 122 M54 138 L90 138"/>
<circle class="s" cx="100" cy="68" r="20"/>
<path class="s t" d="M100 68 L100 56 M100 68 L110 68"/>`},
{id:"hontouni_18",kanji:"本当に",kana:"ほんとうに",romaji:"hontou ni",en:"really",lesson:18,art:`<circle class="s r" cx="100" cy="100" r="46"/>
<circle class="s t r" cx="100" cy="100" r="34"/>
<path class="s" d="M84 100 L96 114 L120 84"/>
<path class="s t" d="M100 42 L100 28 M100 158 L100 170 M42 100 L28 100 M158 100 L172 100 M60 60 L50 50 M140 60 L150 50 M60 140 L50 150 M140 140 L150 150"/>`},
{id:"mazu_18",kana:"まず",romaji:"mazu",en:"first of all",lesson:18,art:`<path class="s" d="M28 160 L68 160 L68 130 L108 130 L108 100 L148 100 L148 70 L172 70"/>
<ellipse class="fr" cx="48" cy="150" rx="13" ry="7"/>
<path class="s r" d="M48 134 L48 104 M38 114 L48 104 L58 114"/>
<ellipse class="s t" cx="88" cy="120" rx="11" ry="6"/>
<ellipse class="s t" cx="128" cy="90" rx="11" ry="6"/>`},
{id:"okagede_18",kana:"おかげで",romaji:"okage de",en:"thanks to ...",lesson:18,art:`<path class="s r" d="M40 70 Q100 18 160 70 Q145 62 130 70 Q115 62 100 70 Q85 62 70 70 Q55 62 40 70 Z"/>
<path class="s" d="M100 46 L100 70 M100 70 L100 112 Q100 120 92 120"/>
<circle class="s" cx="68" cy="98" r="11"/>
<path class="s" d="M68 109 L68 140 M68 140 L60 166 M68 140 L76 166 M68 118 L92 118"/>
<circle class="s" cx="132" cy="102" r="10"/>
<path class="s" d="M132 112 L132 142 M132 142 L124 166 M132 142 L140 166"/>
<path class="s t" d="M32 90 L28 102 M38 124 L34 136 M168 90 L164 102 M172 124 L168 136"/>`},
{id:"doushiyou_18",kana:"どうしよう",romaji:"doushiyou",en:"What should I/we do?",lesson:18,art:`<circle class="s" cx="100" cy="114" r="14"/>
<path class="s" d="M100 128 L100 168 M100 136 L80 124 L88 106 M100 136 L120 124 L112 106"/>
<path class="s r" d="M100 94 L100 64 M100 64 L64 40 M100 64 L136 40 M100 64 L100 30 M64 40 L76 40 M64 40 L70 51 M136 40 L124 40 M136 40 L130 51 M100 30 L92 40 M100 30 L108 40"/>
<path class="s t" d="M130 102 Q136 110 130 116 Q124 110 130 102 Z"/>`},
{id:"darou_18",kana:"〜だろう",romaji:"darou",en:"short form of 〜でしょう",lesson:18,art:`<circle class="fr" cx="76" cy="74" r="26"/>
<path class="s t r" d="M76 38 L76 28 M40 74 L30 74 M50 48 L42 40 M102 48 L110 40"/>
<path class="s" style="fill:#fff" d="M60 130 Q40 130 42 112 Q44 96 64 98 Q70 76 96 80 Q112 66 132 82 Q158 80 156 106 Q170 112 162 126 Q158 132 146 130 Z"/>
<path class="s t" d="M74 146 L70 156 M104 146 L100 156 M134 146 L130 156"/>`},
{id:"osakinishitsureishimasu_18",kanji:"お先に失礼します",kana:"おさきにしつれいします",romaji:"osaki ni shitsurei shimasu",en:"See you. (I'm leaving ahead of you.)",lesson:18,art:`<path class="s" d="M28 130 L80 130 M36 130 L36 160 M72 130 L72 160"/>
<rect class="s t" x="40" y="104" width="28" height="22"/>
<path class="s" d="M140 36 L170 36 L170 162 M140 36 L140 162"/>
<circle class="s" cx="112" cy="70" r="11"/>
<path class="s" d="M112 81 L116 122 M116 122 L106 158 M116 122 L130 156 M112 92 L94 74 M113 94 L132 106"/>
<path class="s r" d="M86 64 Q80 70 86 78 M78 56 Q68 70 78 86"/>`},
{id:"otsukaresama_18",kanji:"お疲れ様",kana:"おつかれさま",romaji:"otsukaresama",en:"You must be tired after working so hard.",lesson:18,art:`<circle class="s" cx="70" cy="92" r="13"/>
<path class="s" d="M80 102 Q98 110 100 132 M100 132 L132 132 L132 160 M86 108 L82 142"/>
<rect class="s t" x="84" y="134" width="30" height="26"/>
<rect class="s" x="122" y="50" width="40" height="22" rx="3"/>
<path class="s" d="M162 56 L168 56 L168 66 L162 66"/>
<rect class="fr" x="126" y="54" width="8" height="14"/>
<path class="s t" d="M50 66 Q56 76 50 80 Q44 76 50 66 Z"/>`}
];
