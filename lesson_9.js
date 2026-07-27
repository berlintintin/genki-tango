/* =======================================================================
   lesson_9.js  —  Doodle Tango vocabulary, Lesson 9  (Genki I)
   Loaded on demand by index.html when the chosen range includes lesson 9.
   Each entry: { id, kana, kanji?, romaji, en, lesson, art? }
     • art present -> plays as a draggable doodle
     • art absent  -> plays as an English text tile (still studiable)
   Safe to edit: fix a reading, tweak a doodle, add a word — keep the shape.
   ===================================================================== */
window.GENKI_LESSONS = window.GENKI_LESSONS || {};
window.GENKI_LESSONS[9] = [
{id:"odoru",kanji:"踊る",kana:"おどる",romaji:"odoru",en:"to dance",lesson:9,art:`
<circle class="s" cx="96" cy="46" r="15"/><path class="s t" d="M90 44 Q93 41 96 44 M100 44 Q103 41 106 44 M92 54 Q96 58 100 54"/>
<path class="s" d="M98 61 Q110 84 100 106"/>
<path class="s" d="M100 106 L74 128 L66 152 M100 106 L124 126 L140 116"/>
<path class="s" d="M100 74 L72 56 M102 78 L132 66 L140 48"/>
<path class="s t r" d="M156 84 L156 66"/><ellipse class="fr" cx="152" cy="85" rx="5" ry="4"/>
<path class="s t" d="M52 92 Q46 100 52 108 M148 140 Q154 148 148 156"/>`},
{id:"piano",kanji:"ピアノを弾く",kana:"ピアノをひく",romaji:"piano o hiku",en:"to play piano",lesson:9,art:`
<rect class="s" x="36" y="76" width="128" height="56" rx="6"/>
<path class="s t" d="M52 76 L52 132 M68 76 L68 132 M84 76 L84 132 M100 76 L100 132 M116 76 L116 132 M132 76 L132 132 M148 76 L148 132"/>
<rect class="f" x="47" y="76" width="10" height="30"/><rect class="f" x="79" y="76" width="10" height="30"/><rect class="f" x="111" y="76" width="10" height="30"/><rect class="f" x="143" y="76" width="10" height="30"/>
<path class="s t r" d="M76 56 Q80 44 92 46 M120 54 Q124 42 136 44"/>
<path class="s t r" d="M164 40 L164 24 Q172 22 174 27"/>`},
{id:"guitar",kana:"ギター",romaji:"gitā",en:"guitar",lesson:9,art:`
<circle class="s" cx="84" cy="128" r="34"/><circle class="s" cx="110" cy="96" r="24"/>
<circle class="s t" cx="94" cy="116" r="10"/>
<path class="s" d="M124 78 L160 36 M132 84 L168 44"/>
<path class="s t r" d="M158 30 L172 44 M164 24 L178 38"/>
<path class="s t" d="M90 74 L120 108 M96 68 L126 102"/>`},
{id:"kusuri",kanji:"薬を飲む",kana:"くすりをのむ",romaji:"kusuri o nomu",en:"to take medicine",lesson:9,art:`
<rect class="s" x="48" y="66" width="52" height="84" rx="8"/><rect class="s" x="54" y="46" width="40" height="20" rx="4"/>
<path class="s t r" d="M58 96 L90 96 M58 112 L90 112"/>
<ellipse class="s r" cx="140" cy="70" rx="18" ry="11" transform="rotate(-24 140 70)"/><path class="s t r" d="M132 76 L148 64"/>
<path class="s" d="M120 108 L164 108 L158 160 L126 160 Z"/><path class="s t" d="M124 122 Q142 130 160 122"/>`},
{id:"kaze",kanji:"風邪をひく",kana:"かぜをひく",romaji:"kaze o hiku",en:"to catch a cold",lesson:9,art:`
<circle class="s" cx="96" cy="88" r="30"/>
<path class="s t" d="M84 82 L92 86 M108 86 L116 82"/>
<path class="s t" d="M88 104 Q96 100 104 104"/>
<path class="s t r" d="M96 118 Q94 128 98 134"/>
<path class="s r" d="M60 56 L132 40"/><rect class="fr" x="126" y="34" width="10" height="10" rx="3"/>
<path class="s t" d="M140 108 Q152 104 152 116 Q152 126 142 124 Q136 122 138 114"/>
<path class="s" d="M96 118 Q92 148 94 168"/>`},
{id:"karaoke",kana:"カラオケ",romaji:"karaoke",en:"karaoke",lesson:9,art:`
<circle class="s" cx="84" cy="64" r="24"/><path class="s t" d="M68 56 Q84 40 100 56 M66 66 Q84 50 102 66 M68 76 Q84 62 100 76"/>
<path class="s" d="M92 86 L124 148 L112 156 L80 94"/>
<path class="s t r" d="M136 52 L136 32 Q146 30 148 36"/><ellipse class="fr" cx="132" cy="53" rx="5" ry="4"/>
<path class="s t r" d="M156 96 L156 80"/><ellipse class="fr" cx="152" cy="97" rx="5" ry="4"/>
<path class="s t" d="M48 100 Q40 108 48 118 M40 88 Q28 100 40 116"/>`},
{id:"kodomo",kanji:"子供",kana:"こども",romaji:"kodomo",en:"child",lesson:9,art:`
<circle class="s" cx="92" cy="84" r="22"/>
<path class="s t" d="M84 80 Q88 76 92 80 M98 80 Q102 76 106 80 M86 94 Q93 100 100 94"/>
<path class="s t" d="M80 64 Q92 54 104 64"/>
<path class="s" d="M92 106 L92 146 M92 146 L78 172 M92 146 L106 170 M92 116 L72 128 M92 116 L114 110"/>
<path class="s t r" d="M122 106 Q120 90 132 84"/><circle class="s r" cx="140" cy="62" r="20"/>`},
{id:"tori",kanji:"鳥",kana:"とり",romaji:"tori",en:"bird",lesson:9,art:`
<path class="s" d="M30 140 Q100 128 176 142"/><path class="s t" d="M64 140 L54 156 M118 138 L128 154"/>
<circle class="s" cx="96" cy="80" r="26"/><circle class="s" cx="118" cy="56" r="16"/>
<path class="s r" d="M132 54 L148 58 L132 62 Z"/><circle class="f" cx="120" cy="52" r="3"/>
<path class="s t" d="M84 78 Q96 70 104 82 Q96 92 84 86"/>
<path class="s" d="M92 106 L92 134 M104 104 L104 132"/>
<path class="s t r" d="M56 48 Q64 44 68 50 M148 30 Q156 26 160 32"/>`},
{id:"oboeru",kanji:"覚える",kana:"おぼえる",romaji:"oboeru",en:"to memorize",lesson:9,art:`
<path class="s" d="M72 150 Q46 140 46 106 Q46 66 84 58 Q120 52 132 82 Q140 100 128 118 L128 138 L104 138 L104 152 Z"/>
<path class="s t" d="M78 92 Q92 78 108 90 Q100 102 86 100"/>
<circle class="s r" cx="156" cy="44" r="16"/>
<path class="s t r" d="M150 60 L162 60 L160 70 L152 70 Z M156 20 L156 12 M136 28 L130 22 M176 28 L182 22"/>`},
{id:"kabuki",kanji:"歌舞伎",kana:"かぶき",romaji:"kabuki",en:"kabuki",lesson:9,art:`
<path class="s" d="M60 52 Q100 32 140 52 Q158 92 144 132 Q124 164 100 162 Q76 164 56 132 Q42 92 60 52 Z"/>
<path class="s r" d="M58 62 Q74 78 66 100 M142 62 Q126 78 134 100 M78 44 Q88 60 82 74 M122 44 Q112 60 118 74"/>
<path class="s" d="M74 96 L94 96 M106 96 L126 96"/>
<circle class="f" cx="84" cy="104" r="4"/><circle class="f" cx="116" cy="104" r="4"/>
<path class="s r" d="M86 132 Q100 124 114 132"/>`}
];
