/* =======================================================================
   vocab-lessons.js — extra mini-lessons for Vocab Flip's slideshow.
   Each word's first mini-lesson ("The basics") lives in vocab-notes.js;
   these add more angles. Each time a word's card comes up with 💡 on,
   the next one in line plays, so you hear them all over a few passes.

     window.VOCAB_LESSONS["kana|kanji"] = [ { tag, explain }, … ]

   tag:     short label shown on the card (Memory hook, Word family,
            Real-life Japanese, Don't mix it up, Culture corner, Sound it out)
   explain: same markup as vocab-notes.js — English, with Japanese in
            「かな」 or 「漢字|かな」 (shown as kanji, spoken as kana).

   Covered so far: Genki lessons 16–17.
   ======================================================================= */
window.VOCAB_LESSONS = window.VOCAB_LESSONS || {};
/* Lesson 16 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "えきいん|駅員": [
    { tag: "Word family", explain: "The ending 「員|いん」 means a member of staff, and once you spot it, it's everywhere. 「会社員|かいしゃいん」 is a company employee. 「店員|てんいん」 is a store clerk. 「銀行員|ぎんこういん」 is a bank employee. So 「駅員|えきいん」 is simply station staff. And 「駅|えき」 itself shows up in 「駅前|えきまえ」, the area in front of the station, which is where every town's shops and cafés gather." },
    { tag: "Real-life Japanese", explain: "If you're lost in a big Tokyo station, the 「駅員さん|えきいんさん」 is your best friend. Notice the 「さん」. People add it to job titles when talking to or about the person, just like 「お店の人|おみせのひと」. A natural question is 「すみません、〜はどこですか」. Excuse me, where is such and such? They're used to it. Shinjuku station handles millions of people a day." }
  ],
  "おや|親": [
    { tag: "Word family", explain: "This kanji is about closeness. Read 「おや」, it's a parent. Read 「しん」, it means intimate or close, as in 「親切|しんせつ」, kind, which is being close and caring with someone. And in 「親せき|しんせき」, relatives, the family close to you. Then there's 「両親|りょうしん」, both parents, the polite word you use for your own mother and father together." },
    { tag: "Memory hook", explain: "Here's a fun way to remember 「おや」. In Japanese, 「おや」 is also a little exclamation of surprise. Oh my! So picture coming home late, and your parent is waiting at the door. 「おや？」 Oh? And where have you been? The parent and the oh my share one sound. Also, the opposite of 「親|おや」 is 「子|こ」, child, and 「親子|おやこ」 means parent and child together." }
  ],
  "しんせき|親せき": [
    { tag: "Real-life Japanese", explain: "You'll often see this written with the rarer second kanji as 「親戚|しんせき」, but Genki uses kana for that half because the kanji is tricky. Relatives get together in Japan especially at New Year, 「お正月|おしょうがつ」, and during 「お盆|おぼん」 in summer, when families visit hometowns and honor ancestors. Those are the times trains are packed." },
    { tag: "Don't mix it up", explain: "Compare three family words. 「家族|かぞく」 is your family, the people in your household or immediate circle. 「親|おや」 is a parent. 「親せき|しんせき」 is the wider group, aunts, uncles, cousins. A handy sentence. 「しんせきがたくさんいます」. I have a lot of relatives. Notice it takes 「いる」, because relatives are people." }
  ],
  "ごみ|": [
    { tag: "Culture corner", explain: "Garbage in Japan is a serious skill. Towns have strict sorting rules: burnable, 「燃えるごみ|もえるごみ」, non-burnable, 「燃えないごみ|もえないごみ」, plus bottles, cans, and plastic, each picked up on certain days. And public trash cans are rare, so people carry their 「ごみ」 home. Putting out garbage on the wrong day is a classic way for a new neighbor to make a bad impression." },
    { tag: "Real-life Japanese", explain: "The verb that goes with 「ごみ」 is 「出す|だす」, also in this lesson. 「ごみを出す」 means to take out the garbage. So, 「あしたごみを出してくれる？」 Could you take out the trash tomorrow? A trash can is 「ごみ箱|ごみばこ」, garbage box. You'll also hear 「ゴミ」 in katakana on signs. Same word, just louder looking." }
  ],
  "さとう|砂糖": [
    { tag: "Memory hook", explain: "「さとう」 sounds exactly like Satō, the most common family name in Japan, 「佐藤|さとう」. Different kanji, same sound. So picture Mr. Satō as a sweet old man who puts way too much sugar in his coffee. Every time you hear the name, think sugar. And remember the first kanji of sugar, 「砂|さ」, sand. Sugar is sweet sand." },
    { tag: "Real-life Japanese", explain: "Japanese cooking uses sugar in places that surprise people, like savory dishes with soy sauce. 「すき焼き|すきやき」 and teriyaki both have a sweet side. Fun fact, there's a classic order for adding seasonings, remembered as さしすせそ. 「さ」 is for 「砂糖|さとう」, sugar, first. 「し」 is salt, 「しお」. 「す」 is vinegar. 「せ」 is soy sauce, and 「そ」 is miso." }
  ],
  "ファイル|": [
    { tag: "Don't mix it up", explain: "In English a file is often digital. In Japanese, 「ファイル」 can be a computer file, but very often it means the plastic clear folder that every Japanese student and office worker carries, the 「クリアファイル」, clear file. They're so popular that shops sell them with anime characters and art on them as souvenirs. So if a friend says 「このファイル、かわいい」, they probably mean the folder." },
    { tag: "Sound it out", explain: "Japanese has no true f sound, so 「フ」 is used, which is actually a soft breathy sound made with the lips, not the teeth. Then the small 「ァ」 makes it fa. The same trick makes other loanwords. 「ファン」, fan. 「ファッション」, fashion. 「カフェ」, café, with a small 「ェ」. Once you see the pattern, these words become easy to read." }
  ],
  "おおきさ|大きさ": [
    { tag: "Word family", explain: "The 「さ」 ending turns any adjective into a noun, like the English ness. Learn it once and you get dozens of words free. 「高い|たかい」, high, becomes 「高さ|たかさ」, height. 「長い|ながい」, long, becomes 「長さ|ながさ」, length. 「重い|おもい」, heavy, becomes 「重さ|おもさ」, weight. And 「やさしい」, kind, becomes 「やさしさ」, kindness. It works for な adjectives too. 「しずか」 becomes 「しずかさ」." },
    { tag: "Real-life Japanese", explain: "Use 「大きさ|おおきさ」 when shopping or describing things. 「このぐらいの大きさ」 means about this size, while you show it with your hands. Notice 「このぐらい」 is another word from this lesson. And 「大きさはどうですか」 is a natural way to ask, how is the size? Shoes, clothes, rooms, anything." }
  ],
  "みち|道": [
    { tag: "Word family", explain: "This kanji is not only roads. Read 「どう」, it means a path or way of life, a discipline. 「柔道|じゅうどう」, judo, is the gentle way. 「剣道|けんどう」 is the way of the sword. 「茶道|さどう」 is the way of tea. And 「北海道|ほっかいどう」, the island up north, also has it. So 「道」 is any path you walk, with your feet or with your whole life." },
    { tag: "Real-life Japanese", explain: "Two phrases worth knowing. 「道を教える|みちをおしえる」 is to give directions, literally to teach the road. And 「道に迷う|みちにまよう」, to get lost, is also in this lesson. So a perfect lesson sixteen sentence is, 「道に迷ったので、駅員さんに道を教えてもらいました」. I got lost, so I had the station attendant tell me the way." }
  ],
  "きまつしけん|期末試験": [
    { tag: "Word family", explain: "Japanese school years have two big test types. 「期末|きまつ」 means the end of the term, so 「期末試験|きまつしけん」 is the final. Its partner is 「中間試験|ちゅうかんしけん」, the midterm, literally the middle test. Students often shorten these to 「期末|きまつ」 and 「中間|ちゅうかん」. So if a friend says 「来週、期末だ」, they mean finals are next week, and they're probably stressed." },
    { tag: "Memory hook", explain: "Break the sound up. 「き」, 「まつ」. 「まつ」 sounds like 「待つ|まつ」, to wait. Picture yourself all term long, just waiting, waiting, for the final. That's not the real meaning of the kanji, which is end, but it sticks. And 「試験|しけん」, exam, sounds a bit like chicken. Picture a chicken nervously taking its final exam." }
  ],
  "けんきゅう|研究": [
    { tag: "Word family", explain: "Words built on research. 「研究者|けんきゅうしゃ」 is a researcher, with 「者|しゃ」, person. 「研究所|けんきゅうじょ」 is a research institute, with 「所|じょ」, place. And 「研究室|けんきゅうしつ」 is a professor's lab or office, where grad students hang out. A space lab that builds satellites would be a kind of 「研究所|けんきゅうじょ」." },
    { tag: "Real-life Japanese", explain: "To say what you research, use 「を」. 「日本の文化を研究しています|にほんのぶんかをけんきゅうしています」. I'm researching Japanese culture. Notice it becomes a verb with 「する」. And you can ask someone, 「何を研究していますか|なにをけんきゅうしていますか」. What do you research? A great question for a grad student or professor." }
  ],
  "だいがくいん|大学院": [
    { tag: "Word family", explain: "The kanji 「院|いん」 means an institution, a building with walls around it. It shows up in places you really want to know. 「病院|びょういん」, hospital. 「美容院|びよういん」, hair salon. And 「寺院|じいん」, temple. So 「大学院|だいがくいん」 is the college institution, the place you go after college. Its student is a 「大学院生|だいがくいんせい」, a grad student." },
    { tag: "Don't mix it up", explain: "Listen carefully to these two. 「病院|びょういん」, hospital, and 「美容院|びよういん」, hair salon. They sound almost the same, but one has a long 「びょう」 and the other has 「びよう」, two separate beats. Say them slowly. 「びょう」, 「いん」. 「び」, 「よう」, 「いん」. You don't want to ask for directions to the hospital when you just want a haircut." }
  ],
  "しょうがくきん|奨学金": [
    { tag: "Word family", explain: "The last kanji, 「金|きん」, money, ends lots of money words. 「料金|りょうきん」 is a fee or charge. 「現金|げんきん」 is cash. 「税金|ぜいきん」 is tax. And 「お金|おかね」 is plain money, where the same kanji takes its native reading. So 「奨学金|しょうがくきん」 is literally encourage learning money. A nice idea for what a scholarship is." },
    { tag: "Real-life Japanese", explain: "The verb you use is 「もらう」. 「奨学金をもらう|しょうがくきんをもらう」 is to receive a scholarship. Applying is 「申し込む|もうしこむ」. Something useful to know. In Japan, many things called 「奨学金」 are actually student loans that must be paid back. So a Japanese friend might say they're still paying back their scholarship, which sounds strange in English." }
  ],
  "すいせんじょう|推薦状": [
    { tag: "Real-life Japanese", explain: "This word is perfect for a lesson sixteen favor. You learned 「〜ていただけませんか」, could you please do something for me. So, to a teacher, 「推薦状を書いていただけませんか|すいせんじょうをかいていただけませんか」. Could you please write me a letter of recommendation? Very polite, exactly the right tone for asking a professor." },
    { tag: "Word family", explain: "The ending 「状|じょう」 means a formal letter or document. 「年賀状|ねんがじょう」 is a New Year's card, which Japanese people send by the hundreds. 「招待状|しょうたいじょう」 is an invitation. And 「推薦|すいせん」 on its own means recommendation. So you can also say 「先生に推薦してもらった|せんせいにすいせんしてもらった」. My teacher recommended me." }
  ],
  "たいふう|台風": [
    { tag: "Memory hook", explain: "Say 「たいふう」 out loud, then say typhoon. They're cousins. The English word typhoon is related to the same East Asian word, mixed with Greek and Arabic words for a violent storm. So when you hear 「たいふう」, just hear typhoon with a Japanese accent. You already know this one." },
    { tag: "Culture corner", explain: "Typhoon season in Japan runs mostly from late summer into fall. Typhoons get numbers rather than names in Japan, like 「台風十号|たいふうじゅうごう」, typhoon number ten. When a big one comes, trains stop and schools may close. Students secretly hope for that. A useful sentence, 「台風で学校が休みになりました|たいふうでがっこうがやすみになりました」. School was canceled because of the typhoon." }
  ],
  "ぶんか|文化": [
    { tag: "Word family", explain: "The kanji 「化|か」 means to change or transform. So 「文化|ぶんか」 is, roughly, how writing and learning transform a people. That 「化|か」 is a super useful ending, like ize in English. 「国際化|こくさいか」 is internationalization. 「変化|へんか」 is change. And you'll see it again in 「化粧|けしょう」, makeup, in the next lesson, where it's read 「け」. Makeup transforms your face." },
    { tag: "Culture corner", explain: "Japan has a national holiday called 「文化の日|ぶんかのひ」, Culture Day, on November third. It's a day for art, festivals, and awards for people who have contributed to culture. Many schools hold a 「文化祭|ぶんかさい」, a culture festival, in the fall, where students run cafés, haunted houses, and plays. It's a huge event in Japanese school life and anime." }
  ],
  "へんじ|返事": [
    { tag: "Real-life Japanese", explain: "The key verb is 「する」. 「返事をする|へんじをする」, to reply. And people often add 「お」 to make it polite, 「お返事|おへんじ」, especially in emails. A sentence you might really need, 「まだ返事がありません|まだへんじがありません」. There's still no reply. Or, if you're the slow one, 「返事が遅くなってごめん|へんじがおそくなってごめん」. Sorry for the late reply." },
    { tag: "Word family", explain: "The first kanji, 「返|へん」, means to give back. You'll see it in the verb 「返す|かえす」, to return something you borrowed. That pairs nicely with 「貸す|かす」, to lend, from this lesson. Lend, then get it back. A reply is the words you send back. And when a teacher calls attendance, students answer with 「はい」. That's also called a 「返事|へんじ」." }
  ],
  "ひ|日": [
    { tag: "Word family", explain: "This kanji has an amazing number of readings. Here it's 「ひ」, day. In 「日曜日|にちようび」, Sunday, it's 「にち」 and 「び」. In 「日本|にほん」, Japan, it's 「に」. In 「毎日|まいにち」 it's 「にち」. In 「今日|きょう」, today, it's part of a special reading. And as a counter, 「三日|みっか」, three days, it's 「か」. One little sun, many sounds." },
    { tag: "Real-life Japanese", explain: "In lesson sixteen, 「日|ひ」 is useful with 「時|とき」. 「雨の日|あめのひ」 is a rainy day. 「休みの日|やすみのひ」 is a day off. 「その日|そのひ」 is that day. And a great phrase, 「あの日|あのひ」, that day, often used in stories. 「誕生日|たんじょうび」, birthday, ends in this kanji too, read 「び」. So the birth day." }
  ],
  "きたない|汚い": [
    { tag: "Memory hook", explain: "Hear the sound 「きた」. It's like the English word kit. Imagine opening your old gym kit after a month. Kit nai, totally dirty. And notice, like 「あぶない」 and 「すくない」 later, the 「ない」 here is not negative. 「きたない」 is a normal い adjective. Its opposite is 「きれい」, clean or pretty. Clean and dirty both start with 「き」." },
    { tag: "Real-life Japanese", explain: "「汚い|きたない」 goes beyond dirty rooms. It also means unfair or dirty in a moral sense. 「それはきたない！」 is like saying, that's a dirty trick, no fair! Kids say it during games. And messy handwriting is 「字がきたない|じがきたない」, literally the characters are dirty. Something a Japanese learner might say about their own kanji." }
  ],
  "おこす|起こす": [
    { tag: "Don't mix it up", explain: "This lesson is full of verb pairs. 「起きる|おきる」 is to wake up, something you do yourself. 「起こす|おこす」 is to wake someone else up. Same with 「見える|みえる」, to be visible, and 「見せる|みせる」, to show. And 「出る|でる」, to come out, and 「出す|だす」, to take out. A good rule of thumb, the 「す」 verbs often mean you're doing it to something." },
    { tag: "Real-life Japanese", explain: "Here's the perfect lesson sixteen sentence. 「あした七時に起こしてくれない？|あしたしちじにおこしてくれない？」 Can you wake me up at seven tomorrow? And the answer to oversleeping, 「朝寝坊|あさねぼう」, also in this lesson. 「どうして起こしてくれなかったの？」 Why didn't you wake me up? Every household has had that conversation." }
  ],
  "おごる|": [
    { tag: "Culture corner", explain: "In Japan, the senior person often pays. A boss treats the team, an upperclassman, a 「先輩|せんぱい」, treats younger students. That's 「おごる」. If you want to treat someone, say 「きょうはぼくがおごるよ」. Today's on me. And the response you'll love to hear is 「おごってくれるの？」 You're treating me? Then a big 「ごちそうさまでした」 afterward." },
    { tag: "Real-life Japanese", explain: "The flip side of 「おごる」 is 「割り勘|わりかん」, splitting the bill evenly. Among friends, 「わりかんにしよう」, let's split it, is common. And when someone treats you, the phrase is 「ごちそうになる」, to be treated to a meal. So you can say 「先輩にごちそうになりました|せんぱいにごちそうになりました」. My senior treated me." }
  ],
  "わらう|笑う": [
    { tag: "Memory hook", explain: "「わら」 sounds like wa ha ha. That's literally how Japanese writes a big laugh, 「わははは」. So the verb to laugh starts with the sound of laughing. Japanese internet slang even uses 「w」 for laughing, from this word, and a long row of them, 「wwww」, looks like grass, 「草|くさ」, so people say grass when something is funny." },
    { tag: "Word family", explain: "「笑顔|えがお」 is a smiling face, a lovely word. Here the kanji is read 「え」. And 「ほほえむ」 is to smile softly. A lesson sixteen sentence, 「みんなに笑われた|みんなにわらわれた」. Everyone laughed at me. That's actually passive, which you'll learn soon. For now, 「笑ってください」, please smile, is what photographers say." }
  ],
  "おちこむ|落ち込む": [
    { tag: "Real-life Japanese", explain: "This is casual and very common, more like to feel down than clinical depression. 「試験に落ちて、落ち込んでいる|しけんにおちて、おちこんでいる」. I failed the exam and I'm feeling down. Notice that 「落ちる」, to fall, also means to fail a test. And to cheer someone up, you can say 「落ち込まないで」, don't be down." },
    { tag: "Word family", explain: "「込む|こむ」 at the end of a verb adds the sense of going in, deep inside. 「落ち込む|おちこむ」 is to fall in, to sink. 「入り込む|はいりこむ」, to get into. 「申し込む|もうしこむ」, to apply, is literally to speak your way in. And the 「こむ」 of 「混む|こむ」, crowded, next lesson, is a cousin sound. Everything packed in." }
  ],
  "こまる|困る": [
    { tag: "Memory hook", explain: "The kanji shows a tree trapped in a box. 「木|き」 in a frame. A tree can't grow. That's being stuck, in trouble. And the sound 「こまる」 is like coma. Imagine being so stuck on a problem you fall into a coma. Lesson sixteen links it with 「〜て」. 「財布をなくして困っています|さいふをなくしてこまっています」. I lost my wallet and I'm in trouble." },
    { tag: "Real-life Japanese", explain: "「困ったなあ」 is the go-to phrase when you're in a jam, like, oh man, what now. And 「困っている人を助ける|こまっているひとをたすける」 is to help someone in trouble, which is what lesson sixteen is all about. People in Japan sometimes say 「困ります」 politely to mean, that's a problem for me, as a soft way to say no." }
  ],
  "だす|出す": [
    { tag: "Word family", explain: "「出す|だす」 is a workhorse. 「宿題を出す|しゅくだいをだす」, to hand in homework. 「手紙を出す|てがみをだす」, to mail a letter. 「ごみを出す|ごみをだす」, to put out the garbage. 「元気を出す|げんきをだす」, to cheer up, literally to bring out your energy. And 「〜出す」 after a verb stem means to suddenly start. 「泣き出す|なきだす」, to burst out crying." },
    { tag: "Real-life Japanese", explain: "A sentence every student says. 「宿題を出すのを忘れました|しゅくだいをだすのをわすれました」. I forgot to hand in my homework. And on the teacher side, 「宿題を出す」 also means to give homework, to assign it. Context tells you which. In a classroom, if the teacher says 「宿題を出してください」, though, it means pass it in." }
  ],
  "なおす|直す": [
    { tag: "Don't mix it up", explain: "There's a sound-alike, 「治す|なおす」, with a different kanji, which means to cure an illness. 「直す」 fixes things or mistakes. 「治す」 heals people. Both are 「なおす」. So, 「先生が作文を直してくれた|せんせいがさくぶんをなおしてくれた」, the teacher corrected my essay, but 「医者が病気を治した|いしゃがびょうきをなおした」, the doctor cured the illness." },
    { tag: "Word family", explain: "The core of this kanji is straight. 「正直|しょうじき」 means honest, literally correct and straight. 「直接|ちょくせつ」 means directly. And the verb ending 「〜直す」 after a stem means to redo something. 「書き直す|かきなおす」, to rewrite. 「やり直す|やりなおす」, to start over. Perfect for any essay a teacher sends back." }
  ],
  "みつかる|見つかる": [
    { tag: "Don't mix it up", explain: "Another verb pair. 「見つける|みつける」 is to find, something you do. 「見つかる|みつかる」 is to be found, it just turns up. So, 「かぎを見つけた」, I found the key, but 「かぎが見つかった」, the key turned up. Notice the particle. 「を」 with 「見つける」, 「が」 with 「見つかる」. The 「る」 verb with 「か」 is usually the one that happens by itself." },
    { tag: "Real-life Japanese", explain: "This verb is great for lesson sixteen's 「〜といい」, I hope. 「仕事が見つかるといいですね|しごとがみつかるといいですね」. I hope you find a job. And 「いいアパートが見つかりました」. I found a good apartment. Japanese often prefers this version, things being found, rather than I found them. It sounds natural and modest." }
  ],
  "やくす|訳す": [
    { tag: "Word family", explain: "Add 「通|つう」, to pass through, and you get 「通訳|つうやく」, interpreter, the person who passes words through. 「翻訳|ほんやく」 is translation, especially written. And 「言い訳|いいわけ」 is an excuse, which is fun. Literally, the explanation you say. So translation and excuses share a kanji. Both are about putting things in other words." },
    { tag: "Real-life Japanese", explain: "Lesson sixteen gives you the perfect use. 「これを英語に訳してくれませんか|これをえいごにやくしてくれませんか」. Could you translate this into English for me? Notice 「に」 marks the target language. And to say translate from, you use 「から」. 「日本語から英語に訳す|にほんごからえいごにやくす」. From Japanese into English." }
  ],
  "かす|貸す": [
    { tag: "Don't mix it up", explain: "These three trip everyone up. 「貸す|かす」 is to lend, the thing goes away from me. 「借りる|かりる」 is to borrow, it comes to me. And 「返す|かえす」 is to return it. A trick, 「貸す」 has 「す」, like send. 「借りる」 has 「り」, like receive. So, 「友だちにかさを貸した」, I lent my friend an umbrella. 「友だちにかさを借りた」, I borrowed one from my friend." },
    { tag: "Memory hook", explain: "The bottom of 「貸|か」 is the shell part, 「貝|かい」, which meant money in ancient China. On top is a part meaning to change hands. Money changing hands, a loan. Lots of money kanji have that shell, like 「買う|かう」, to buy, and 「貯金|ちょきん」, savings. And 「貸し切り|かしきり」, which you'll see on restaurant doors, means reserved for a private party." }
  ],
  "つれていく|連れていく": [
    { tag: "Don't mix it up", explain: "Japanese distinguishes taking people from taking things. For people and animals, use 「連れていく|つれていく」. For things, use 「持っていく|もっていく」. So, 「犬を連れていく」, I'll take the dog, but 「かさを持っていく」, I'll take an umbrella. And the reverse direction, bringing to here, is 「連れてくる」 for people and 「持ってくる」 for things." },
    { tag: "Real-life Japanese", explain: "Combine it with lesson sixteen's giving verbs. 「友だちが京都に連れていってくれました|ともだちがきょうとにつれていってくれました」. My friend took me to Kyoto, kindly. 「連れていって！」 Take me with you! That's what a kid shouts. The kanji 「連|つれ」 also appears in 「連絡|れんらく」, to contact, keeping in touch, connected." }
  ],
  "みちにまよう|道に迷う": [
    { tag: "Memory hook", explain: "The kanji 「迷|まよ」 has the moving along a road part, wrapped around 「米|こめ」, rice. Picture wandering in circles around and around a rice field, no idea where to go. That's 「迷う」. The 「ま」 sound can remind you of a maze, 「まよう」. The same kanji appears in 「迷子|まいご」, a lost child, which you'll hear announced in department stores." },
    { tag: "Word family", explain: "「迷う|まよう」 also means to hesitate or be unsure. 「どっちにするか迷っています」. I can't decide which one to pick. That's really common when ordering food. And 「迷惑|めいわく」 means trouble or bother to others, a hugely important word in Japanese culture. 「迷惑をかける」 means to cause someone trouble, which people try hard to avoid." }
  ],
  "むかえにいく|迎えに行く": [
    { tag: "Real-life Japanese", explain: "This is a lesson sixteen favor waiting to happen. 「駅まで迎えに来てくれない？|えきまでむかえにきてくれない？」 Can you come pick me up at the station? Or offering, 「空港まで迎えに行きましょうか|くうこうまでむかえにいきましょうか」. Shall I go pick you up at the airport? Note the 「まで」, to, up to that point." },
    { tag: "Word family", explain: "The verb 「迎える|むかえる」 means to welcome or receive someone. 「歓迎|かんげい」 is a welcome, as in a welcome party, 「歓迎会|かんげいかい」. And the opposite of 「迎え|むかえ」, picking up, is 「送る|おくる」, to send off or drop someone off. 「駅まで送りましょうか」. Shall I take you to the station? Pick up and drop off." }
  ],
  "あつめる|集める": [
    { tag: "Don't mix it up", explain: "Another pair. 「集める|あつめる」, to collect, you're doing it. 「集まる|あつまる」, to gather, people come together by themselves. So, 「切手を集めています|きってをあつめています」, I collect stamps. But 「学生が集まった」, the students gathered. And the noun 「集まり|あつまり」 is a meeting or get-together." },
    { tag: "Memory hook", explain: "The kanji shows birds on top of a tree. On top, 「隹」, the short-tailed bird. Below, 「木|き」, tree. Birds flocking to one tree. That's gathering. In old forms, there were three birds on the tree. And this kanji ends 「全集|ぜんしゅう」, complete works, and 「集中|しゅうちゅう」, concentration, gathering your mind in the middle." }
  ],
  "いれる|入れる": [
    { tag: "Don't mix it up", explain: "Pair it with 「入る|はいる」, to enter. 「入る」 is you going in. 「入れる」 is putting something in. 「部屋に入る」, to enter a room. 「かばんに本を入れる」, to put a book in a bag. Same kanji, different readings, 「はい」 and 「い」. And in the next lesson, 「いれる」 also means making tea or coffee, putting the leaves in water." },
    { tag: "Real-life Japanese", explain: "At a café, 「砂糖を入れますか|さとうをいれますか」. Do you take sugar? And sugar is in this lesson too. In a bath, 「お風呂に入る|おふろにはいる」, to take a bath. And here's one for the phone. 「電源を入れる|でんげんをいれる」, to turn on the power, literally to put the power in. Its opposite is 「切る|きる」, to cut it off." }
  ],
  "みせる|見せる": [
    { tag: "Real-life Japanese", explain: "The most useful phrase is 「見せてください」, please show me. In shops, 「それを見せてください」, please show me that one. And lesson sixteen's favor form. 「写真を見せてくれませんか|しゃしんをみせてくれませんか」. Could you show me the photo? The noun for store, 「店|みせ」, sounds similar, and some say stores are where things are shown." },
    { tag: "Word family", explain: "You now know a whole family of see verbs. 「見る|みる」, to look. 「見える|みえる」, to be visible. 「見せる|みせる」, to show. 「見つける|みつける」, to find. 「見つかる|みつかる」, to be found. And 「お見舞い|おみまい」, visiting someone sick. One kanji, an eye on legs, does all of that." }
  ],
  "のりおくれる|乗り遅れる": [
    { tag: "Word family", explain: "「遅れる|おくれる」 means to be late, and 「遅い|おそい」 means slow or late. Glue 「乗る」 on front and you're late for the ride. Compare 「乗りかえる|のりかえる」, to transfer trains, and 「乗り物|のりもの」, vehicle, things you ride. And the opposite of missing your train is 「間に合う|まにあう」, to make it in time." },
    { tag: "Real-life Japanese", explain: "Japanese trains are famously on time, so missing one is your fault. 「終電に乗り遅れた|しゅうでんにのりおくれた」. I missed the last train. That's a real classic. 「終電|しゅうでん」 is the last train of the night. Missing it can mean a taxi, an internet café, or karaoke until the first train, 「始発|しはつ」." }
  ],
  "アイロンをかける|": [
    { tag: "Word family", explain: "「かける」 is one of the most flexible verbs. 「アイロンをかける」, to iron. 「めがねをかける」, to put on glasses. 「電話をかける」, to make a call. 「かぎをかける」, to lock, which is in the next lesson. 「迷惑をかける」, to cause trouble. And 「エアコンをかける」, to turn on the AC. The core is to hang, apply, or put onto." },
    { tag: "Sound it out", explain: "Interesting detail. Japanese 「アイロン」 means the clothes iron only. The metal iron is a different word, 「鉄|てつ」. Japanese borrowed iron from English pronunciation as it's spelled, with the r. So 「アイロン」 kept a sound English speakers dropped. And 「アイ」 for the I sound, like in 「アイス」, ice cream." }
  ],
  "あさねぼうする|朝寝坊する": [
    { tag: "Memory hook", explain: "「ねぼう」 alone means oversleeping, a sleepyhead. The 「坊|ぼう」 is the boy you hear in 「坊や|ぼうや」, a little boy, and 「赤ん坊|あかんぼう」, a baby. So picture a little boy who just won't wake up in the morning. Morning sleep boy. That's you after a long night of studying. 「すみません、朝寝坊しました」, sorry, I overslept." },
    { tag: "Real-life Japanese", explain: "Lesson sixteen teaches 「〜てしまう」, to do something regrettable. That's made for this word. 「朝寝坊してしまいました|あさねぼうしてしまいました」. I ended up oversleeping. Casually, 「寝坊しちゃった」. People drop the 「朝」 a lot. And the cure, of course, is someone to 「起こす|おこす」 you." }
  ],
  "あんないする|案内する": [
    { tag: "Real-life Japanese", explain: "「案内|あんない」 is all over Japan. The information desk is 「案内所|あんないじょ」. A guidebook is 「案内書|あんないしょ」. And a lesson sixteen favor. 「町を案内してくれませんか|まちをあんないしてくれませんか」. Could you show me around town? A friend might offer, 「京都を案内しましょうか」. Shall I show you around Kyoto?" },
    { tag: "Word family", explain: "「内|ない」 means inside, and 「案|あん」 means a plan. So guiding is the plan for the inside, leading someone through. 「内|うち」 or 「ない」 also appears in 「家内|かない」, an old way to say my wife, the one inside the house, and 「国内|こくない」, domestic, inside the country. Like a domestic flight, 「国内線|こくないせん」." }
  ],
  "せつめいする|説明する": [
    { tag: "Word family", explain: "The second kanji, 「明|めい」, is sun plus moon, which means bright and clear. So explaining is making something bright and clear with words. You know 「明日|あした」, the bright day, tomorrow. And 「明るい|あかるい」, bright. A 「説明書|せつめいしょ」 is an instruction manual. Which, of course, nobody reads." },
    { tag: "Real-life Japanese", explain: "In class you might say, 「もう一度説明してくれませんか|もういちどせつめいしてくれませんか」. Could you explain that one more time? And the te-form 「〜てあげる」 from this lesson, 「宿題を説明してあげる」, I'll explain the homework for you. Careful, that 「あげる」 can sound a bit condescending to a superior." }
  ],
  "むかえにくる|迎えに来る": [
    { tag: "Don't mix it up", explain: "Lesson sixteen loves direction. 「迎えに行く|むかえにいく」 is going to pick up, away from where you are now. 「迎えに来る|むかえにくる」 is someone coming to where you are to pick you up. So on the phone, 「駅に迎えに来てくれる？」, can you come get me at the station? Your friend answers, 「うん、今から迎えに行くね」. Yes, I'll go get you now." },
    { tag: "Real-life Japanese", explain: "The 「に」 here marks purpose, like going somewhere to do something. Same as 「食べに行く|たべにいく」, to go eat, and 「遊びに来る|あそびにくる」, to come hang out. So when you hear 「〜に来る」, think come in order to. 「父が空港まで迎えに来てくれました|ちちがくうこうまでむかえにきてくれました」. My dad came to the airport to pick me up." }
  ],
  "きょうじゅうに|今日中に": [
    { tag: "Word family", explain: "The 「中|じゅう」 here means throughout or within. Watch how its sound changes. 「今日中に|きょうじゅうに」, by the end of today. 「今週中に|こんしゅうちゅうに」, by the end of this week, and here it's 「ちゅう」. 「一日中|いちにちじゅう」, all day long. And 「世界中|せかいじゅう」, all over the world. A small kanji with big reach." },
    { tag: "Real-life Japanese", explain: "You'll hear this from bosses and teachers. 「今日中にレポートを出してください|きょうじゅうにレポートをだしてください」. Please hand in the report by the end of today. And it pairs with 「〜てもらえませんか」. 「今日中に返事をもらえませんか|きょうじゅうにへんじをもらえませんか」. Could I get a reply by the end of today?" }
  ],
  "じゅぎょうちゅうに|授業中に": [
    { tag: "Word family", explain: "When 「中」 is read 「ちゅう」 after a noun, it means in the middle of doing it. 「授業中|じゅぎょうちゅう」, in class. 「電話中|でんわちゅう」, on the phone. 「食事中|しょくじちゅう」, eating. 「会議中|かいぎちゅう」, in a meeting, often on office doors. And 「準備中|じゅんびちゅう」 on a restaurant sign means preparing, so it's closed." },
    { tag: "Real-life Japanese", explain: "Sentences for classroom life. 「授業中に寝てしまいました|じゅぎょうちゅうにねてしまいました」. I fell asleep in class. Oops, lesson sixteen's 「〜てしまう」 again. Or a teacher's rule, 「授業中に携帯を使わないでください|じゅぎょうちゅうにけいたいをつかわないでください」. Please don't use your phone during class." }
  ],
  "このあいだ|この間": [
    { tag: "Real-life Japanese", explain: "This is how people bring up something from a few days or weeks ago. 「この間はありがとう|このあいだはありがとう」. Thanks for the other day. That's a very Japanese thing to say. The next time you see someone after they helped you, treated you, or invited you, thank them again. It's polite and expected." },
    { tag: "Word family", explain: "The kanji 「間|あいだ」 is the sun peeking through a gate, the gap between. It shows up as 「時間|じかん」, time, and 「人間|にんげん」, human. And 「〜の間|〜のあいだ」 means between or during. 「休みの間に|やすみのあいだに」, during the break. Also 「間に合う|まにあう」, to make it in time, where it's read 「ま」." }
  ],
  "これから|": [
    { tag: "Real-life Japanese", explain: "「これからよろしくお願いします」 is one of the most common phrases in Japanese. It's what you say when starting a new job or class. Roughly, I look forward to working with you from now on. And casually, 「これからどうする？」 So what do we do now? Perfect after a movie or a meal." },
    { tag: "Word family", explain: "Japanese loves this 「〜から」 pattern. 「これから」, from now on. 「それから」, after that, and then. 「あれから」, since then, since that time. 「今から|いまから」, starting now. So 「あれから三年|あれからさんねん」 means three years since then. It sounds very dramatic, like the start of a movie." }
  ],
  "このぐらい|": [
    { tag: "Word family", explain: "It's part of the こそあど family. 「このぐらい」, about this much, near me. 「そのぐらい」, about that much, near you. 「あのぐらい」, about that much, over there. 「どのぐらい」, how much or how long. You can also say 「くらい」 without the dots. 「このくらい」 and 「このぐらい」 are both fine." },
    { tag: "Real-life Japanese", explain: "People use 「このぐらい」 with their hands to show size. 「このぐらいの箱|このぐらいのはこ」, a box about this big. And with time, 「このぐらいで大丈夫|このぐらいでだいじょうぶ」, this much is fine, about this amount. A friend pouring you a drink might ask, 「このぐらい？」 About this much? You answer, 「うん、ありがとう」." }
  ],
  "じぶんで|自分で": [
    { tag: "Real-life Japanese", explain: "Lesson sixteen is about doing things for others. 「自分で|じぶんで」 is the opposite, doing it yourself. 「自分でやって」. Do it yourself. A parent says it to a lazy kid. And proudly, 「この料理、自分で作ったんです|このりょうり、じぶんでつくったんです」. I made this dish myself. Notice the 「で」. It's like by means of myself." },
    { tag: "Memory hook", explain: "The kanji 「自|じ」 was originally a picture of a nose. In Japan, when people point to themselves, they point at their nose, not their chest. So the nose is the self. That's a lovely little cultural clue packed into the kanji. You'll see 「自|じ」 in 「自転車|じてんしゃ」, bicycle, the vehicle that turns by itself." }
  ],
  "ほかの|他の": [
    { tag: "Real-life Japanese", explain: "In a shop, 「ほかの色はありますか|ほかのいろはありますか」. Do you have other colors? And 「ほかに何かありますか」. Anything else? Waiters ask, 「ほかにご注文は？」, any other orders? Also note that 「ほか」 is often written in hiragana, because the kanji 「他」 has another reading, 「た」, which might confuse readers." },
    { tag: "Word family", explain: "With its Chinese reading 「た」, this kanji means other in formal words. 「他人|たにん」, a stranger, literally other person. 「その他|そのた」, others, the et cetera on forms. And the expression 「他人事|ひとごと」, someone else's problem, where the kanji is read in a special way." }
  ],
  "ええと|": [
    { tag: "Real-life Japanese", explain: "Japanese has many fillers, and using them makes you sound natural. 「ええと」 is the classic thinking sound, while you search for a word. 「あのう」 is more hesitant, used to get someone's attention politely. And 「まあ」 means well, kind of. Try saying 「ええと…」 instead of um when you're stuck in class. Teachers notice." },
    { tag: "Sound it out", explain: "Listen to how it's stretched. The first part, 「ええ」, can be held as long as you need. 「えーーと」. Some people shorten it to 「えっと」 with a little catch in the throat. That's more casual and very common with young people. Both buy you time while your brain looks for the right word." }
  ],
  "じつは|実は": [
    { tag: "Real-life Japanese", explain: "「実は」 is how Japanese people introduce a request or confession. It signals something important is coming. 「実は、お願いがあるんですが」. Actually, I have a favor to ask. That's a perfect lesson sixteen opener. Then, 「推薦状を書いていただけませんか」. Could you please write me a recommendation letter?" },
    { tag: "Word family", explain: "「実|じつ」 means truth or substance. 「事実|じじつ」 is a fact. 「実際に|じっさいに」 means actually, in reality. 「実家|じっか」 is your parents' house, your real home, the place you grew up. And with its native reading, 「実|み」 means fruit or a nut. So the real thing, the fruit of something, the truth inside." }
  ],
  "〜いがい|〜以外": [
    { tag: "Word family", explain: "The kanji 「以|い」 helps build several handy words. 「以上|いじょう」 means more than, or that's all, as in the end of a speech. 「以下|いか」 means less than, or below. 「以前|いぜん」 means before. 「以外|いがい」 means other than, outside of. And 「外|がい」 is the same kanji as in 「外国|がいこく」, foreign country, outside country." },
    { tag: "Real-life Japanese", explain: "It's great for food preferences. 「肉以外は何でも食べます|にくいがいはなんでもたべます」. I'll eat anything other than meat. And 「日曜日以外|にちようびいがい」, every day except Sunday. Careful, there's a sound-alike, 「意外|いがい」, surprising, unexpected. 「意外においしい」, surprisingly tasty. Context tells them apart." }
  ],
  "ごめん|": [
    { tag: "Don't mix it up", explain: "There's a ladder of apologies. 「ごめん」 is casual, with friends. 「ごめんなさい」 is a bit softer and fine for family. 「すみません」 is polite and also means excuse me. 「申し訳ありません|もうしわけありません」 is very formal, used by businesses. Saying 「ごめん」 to your teacher would sound much too casual." },
    { tag: "Word family", explain: "It comes from 「御免|ごめん」, which meant permission or pardon, given by someone higher up. Samurai dramas use 「ごめん」 when entering a house, like excuse me, coming in. And 「ごめんください」 is still used today when you visit someone's house and call out at the door. Hello? Anyone home?" }
  ],
  "しつれいします|失礼します": [
    { tag: "Real-life Japanese", explain: "This phrase does many jobs. When you enter a teacher's office, 「失礼します」. When you leave, 「失礼しました」, past tense. When you hang up the phone, 「失礼します」. When you leave work before others, 「お先に失礼します|おさきにしつれいします」. Excuse me for leaving first. Learn this one, it's used every day." },
    { tag: "Word family", explain: "「失礼|しつれい」 alone means rude. 「失礼な人|しつれいなひと」, a rude person. And 「失礼ですが」, excuse me, but, before a personal question. 「失礼ですが、お名前は？」, excuse me, but your name? The kanji 「礼|れい」 also appears in 「お礼|おれい」, thanks, a token of gratitude. So 「お礼を言う」, to say thank you." }
  ]
});
/* Lesson 17 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "あかちゃん|赤ちゃん": [
    { tag: "Memory hook", explain: "Why red? Because newborn babies are red and wrinkly. Japanese literally calls them little red ones. 「赤|あか」, red, plus 「ちゃん」, the cute name ending. You might hear the older form 「赤ん坊|あかんぼう」 too, the red boy. So the next time you see a baby crying with a bright red face, think 「あかちゃん」." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen is about hearsay, 「〜そうです」. Perfect for baby news. 「田中さんに赤ちゃんが生まれたそうです|たなかさんにあかちゃんがうまれたそうです」. I heard that Tanaka-san had a baby. And to congratulate them, 「おめでとうございます」, also in this lesson. Three new words in one happy sentence." }
  ],
  "おきゃくさん|お客さん": [
    { tag: "Culture corner", explain: "Japanese customer service is famous, and it all centers on this word. Workers say 「お客様|おきゃくさま」, the even more polite version, with 「様|さま」. There's a well-known saying, 「お客様は神様です|おきゃくさまはかみさまです」. The customer is a god. When you walk into a shop and staff shout 「いらっしゃいませ」, that's welcome, honored guest." },
    { tag: "Word family", explain: "「客|きゃく」 builds many words. 「客室|きゃくしつ」 is a guest room, or a cabin on a plane. 「観光客|かんこうきゃく」 is a tourist, a sightseeing guest. 「乗客|じょうきゃく」 is a passenger, a riding guest. And at home, 「お客さんが来る」 means we're having visitors. Time to clean that 「きたない」 room." }
  ],
  "しゅしょう|首相": [
    { tag: "Memory hook", explain: "The first kanji, 「首|しゅ」, is head or neck. Its native reading, 「くび」, is the neck. So the prime minister is the head minister, the neck that holds the whole country's head up. Funny bonus. 「首になる|くびになる」, to become neck, means to get fired. So the head of a company can make you 「くび」." },
    { tag: "Word family", explain: "「首|しゅ」 shows up in other top words. 「首都|しゅと」 is the capital city, the head city. 「東京は日本の首都です|とうきょうはにほんのしゅとです」. And people also call the prime minister 「総理大臣|そうりだいじん」, or just 「総理|そうり」, in the news. 「首相」 is shorter and you'll see it in headlines." }
  ],
  "サラリーマン|": [
    { tag: "Culture corner", explain: "The classic 「サラリーマン」 image is a man in a dark suit on a packed morning train, working late, then out drinking with coworkers. Women office workers were once called 「OL」, office lady. These days people also say 「会社員|かいしゃいん」, company employee, which is more neutral. That's what you'd write on a form." },
    { tag: "Sound it out", explain: "Made-in-Japan English is called 「和製英語|わせいえいご」. Other examples you'll love. 「ガソリンスタンド」, gas station, from gasoline stand. 「ノートパソコン」, laptop, from notebook personal computer. 「マイペース」, doing things at your own pace. And 「サラリーマン」. They sound English, but an English speaker wouldn't say them." }
  ],
  "きゅうりょう|給料": [
    { tag: "Word family", explain: "The second kanji, 「料|りょう」, means a fee or charge. It's in 「料金|りょうきん」, a fee. 「料理|りょうり」, cooking. And 「授業料|じゅぎょうりょう」, tuition. The first kanji, 「給|きゅう」, means to supply. You'll also hear 「給料日|きゅうりょうび」, payday, the happiest day of the month for a 「サラリーマン」." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen's comparisons work well here. 「この会社は給料がいいそうです|このかいしゃはきゅうりょうがいいそうです」. I hear this company pays well. Notice you say the salary is good, 「給料がいい」, or high, 「給料が高い」. And low pay is 「給料が安い」, literally cheap salary." }
  ],
  "ざんぎょう|残業": [
    { tag: "Culture corner", explain: "Overtime is a big topic in Japan. There's even a word, 「過労死|かろうし」, death from overwork, which made headlines worldwide. More recently, the government has pushed to limit long hours. You might hear a coworker say, 「今日も残業だ」. Overtime again today. Or the dream, 「残業なしの会社|ざんぎょうなしのかいしゃ」, a company with no overtime." },
    { tag: "Word family", explain: "「残|ざん」 means to remain or be left over. The verb 「残る|のこる」 is to remain. 「残念|ざんねん」 is too bad, the feeling that remains. And 「業|ぎょう」 is work or business, as in 「授業|じゅぎょう」, class, and 「工業|こうぎょう」, industry. So overtime is the leftover work. Work that stays after everyone else goes home." }
  ],
  "パンダ|": [
    { tag: "Culture corner", explain: "Pandas are superstars in Japan. Tokyo's Ueno Zoo, 「上野動物園|うえのどうぶつえん」, became famous for its pandas, and when baby pandas were born there, it was national news. Fans would wait in long lines just to see a cub for a few seconds. So 「パンダの赤ちゃん」 is a phrase that shows up in Japanese headlines." },
    { tag: "Real-life Japanese", explain: "A fun lesson seventeen sentence with 「〜そうです」, it looks like. 「このパンダは眠そうですね|このパンダはねむそうですね」. This panda looks sleepy. Careful, that's the looks like 「そう」 from lesson thirteen. The hearsay 「そう」 attaches to a full sentence. 「パンダは竹を食べるそうです|パンダはたけをたべるそうです」. I hear pandas eat bamboo." }
  ],
  "コンタクト|": [
    { tag: "Real-life Japanese", explain: "You wear contacts with 「する」 or 「入れる」. 「コンタクトをしている」, wearing contacts. 「コンタクトを入れる」, to put in contacts, using 「入れる」 from lesson sixteen. And taking them out is 「はずす」 or 「外す|はずす」. Compare glasses, 「めがねをかける」. Each accessory has its own verb, and this lesson is full of them." },
    { tag: "Sound it out", explain: "Japanese often clips long loanwords. Contact lens becomes 「コンタクトレンズ」, then just 「コンタクト」. Same trick with 「デパート」, department store, 「エアコン」, air conditioner, and 「スマホ」, smartphone. If a Japanese word sounds like half an English word, try adding the missing half." }
  ],
  "ひげ|": [
    { tag: "Word family", explain: "「ひげ」 covers all facial hair. If you want to be specific, 「あごひげ」 is a beard on the chin, 「あご」 being chin. 「口ひげ|くちひげ」 is a mustache, mouth whiskers. And cat whiskers are also 「ひげ」. So you can say 「ねこのひげ」, a cat's whiskers. Same word." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen loves 「〜たり〜たり」 and appearance changes. 「ひげを生やす|ひげをはやす」 is to grow a beard. 「ひげをそる」 is to shave it. So a friend might say, 「ひげを生やしたら、かっこよくなった」. When you grew a beard, you got cooler. Or the opposite. 「ひげをそったほうがいいよ」. You'd better shave." }
  ],
  "ブーツ|": [
    { tag: "Real-life Japanese", explain: "Footwear uses the verb 「はく」. 「ブーツをはく」, to put on boots. 「くつをはく」, shoes. Pants and skirts use 「はく」 too. And you take them off with 「ぬぐ」, also in this lesson. Important in Japan, because you take off your shoes at the entrance to a house, called the 「げんかん」. Boots are a pain there." },
    { tag: "Sound it out", explain: "Listen to the long 「ー」 in 「ブーツ」. That's the long oo of boots. Then the final ts becomes 「ツ」. Japanese can't end a word on a plain t or s, so it adds a vowel, and tsu fits perfectly. Same in 「スーツ」, suit, and 「シャツ」, shirt. Three clothing words, all ending in 「ツ」." }
  ],
  "かぎ|鍵": [
    { tag: "Word family", explain: "「かぎ」 means both lock and key in Japanese. 「かぎをかける」 is to lock it. 「かぎを開ける|かぎをあける」 is to unlock it. 「合いかぎ|あいかぎ」 is a spare key, a matching key. And the key to success is also 「かぎ」 in Japanese, just like English. 「成功のかぎ|せいこうのかぎ」. Nice when an image works the same in both languages." },
    { tag: "Real-life Japanese", explain: "A useful lesson seventeen sentence with 「〜ないで」, without doing. 「かぎをかけないで出かけてしまった|かぎをかけないででかけてしまった」. I went out without locking the door. That's 「〜てしまう」 again, it was a mistake. And the regret, 「かぎをかけたかな」. I wonder if I locked it. Using 「〜かな」 from this lesson." }
  ],
  "たからくじ|宝くじ": [
    { tag: "Culture corner", explain: "Japan's biggest lotteries are the year-end jumbo lotteries, 「年末ジャンボ|ねんまつジャンボ」. People line up at lucky ticket booths, especially one in Tokyo's Ginza, believed to sell more winners. Some people even visit shrines to pray for a win. That connects to 「お祈りする」, to pray, also in this lesson." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen teaches 「〜たら」, if. The dream sentence is, 「宝くじに当たったら、何をしますか|たからくじにあたったら、なにをしますか」. If you won the lottery, what would you do? Classic Genki question. Then answer with 「〜たり〜たりする」. 「世界中を旅行したり、家を買ったりします」. I'd travel the world, buy a house, and so on." }
  ],
  "かみ|紙": [
    { tag: "Don't mix it up", explain: "Watch out, Japanese has several 「かみ」. 「紙|かみ」 is paper. 「髪|かみ」 is hair, also in this lesson. 「神|かみ」 is god. And 「上|かみ」 can mean upper, in old words. The pitch helps native speakers, but for you, context does the work. A joke Japanese kids make, the god of paper and hair." },
    { tag: "Word family", explain: "「紙|かみ」 hides in many words, where it often becomes 「がみ」. 「手紙|てがみ」, a letter, hand paper. 「折り紙|おりがみ」, origami, folded paper. 「和紙|わし」, traditional Japanese paper, where it's read 「し」. And 「紙コップ|かみコップ」, a paper cup. The thread on the left side reminds you paper was made from fibers." }
  ],
  "スプーン|": [
    { tag: "Real-life Japanese", explain: "Japanese restaurants often give you chopsticks, 「はし」. If you need something else, ask. 「スプーンをもらえますか」. Can I have a spoon? Curry rice, 「カレーライス」, is always eaten with a spoon, never chopsticks. And a fork is 「フォーク」, with the small 「ォ」 trick for the f sound." },
    { tag: "Sound it out", explain: "English spoon starts with s and p together. Japanese can't put two consonants together, so it slips a vowel in. s becomes 「ス」, then 「プーン」. The same thing happens with 「スポーツ」, sports, 「スキー」, ski, and 「ストーリー」, story. Whenever English starts with s plus another consonant, expect a 「ス」 in front." }
  ],
  "おゆ|お湯": [
    { tag: "Don't mix it up", explain: "English uses one word, water, and adds hot or cold. Japanese has two words. 「水|みず」 is cold or room temperature water. 「お湯|おゆ」 is hot water. So hot water in Japanese is never 「あつい水」, it's just 「お湯」. And the word for boiled-and-cooled water for drinking is 「お湯ざまし|おゆざまし」, cooled hot water." },
    { tag: "Culture corner", explain: "You'll see the kanji 「湯|ゆ」 on hot spring curtains, 「のれん」. A big 「ゆ」 sign means a bath. Men's baths are often marked 「男湯|おとこゆ」 and women's baths 「女湯|おんなゆ」, and the colors are usually blue and red. A public bathhouse is a 「銭湯|せんとう」, and a hot spring is 「温泉|おんせん」. Remember the signs, and you'll never walk into the wrong one." }
  ],
  "でんしレンジ|電子レンジ": [
    { tag: "Real-life Japanese", explain: "People shorten it to just 「レンジ」. 「レンジで温める|レンジであたためる」, to heat it in the microwave. And at a convenience store, after you buy a bento, the clerk asks, 「温めますか|あたためますか」. Shall I heat it up? Say 「はい、お願いします」, and they'll microwave it right there. Very convenient." },
    { tag: "Word family", explain: "「電|でん」 means electricity, and it's everywhere. 「電話|でんわ」, telephone, electric talk. 「電車|でんしゃ」, train, electric car. 「電気|でんき」, electricity or the light. 「電池|でんち」, battery, electric pond. So 「電子|でんし」, electron, the electric child. And a microwave cooks with electronic waves." }
  ],
  "ヒーター|": [
    { tag: "Culture corner", explain: "Many Japanese homes don't have central heating, so people heat one room at a time. That's why winter gadgets are a big deal. The famous one is the 「こたつ」, a low table with a heater underneath and a blanket over it. Families gather around it, eat mandarin oranges, and refuse to leave. Once you try it, you'll understand." },
    { tag: "Real-life Japanese", explain: "Heaters and AC both use 「つける」, to turn on, and 「消す|けす」, to turn off. 「寒いからヒーターをつけて」, it's cold, turn on the heater. And a lesson seventeen line, 「ヒーターをつけたまま寝てしまった|ヒーターをつけたままねてしまった」. I fell asleep with the heater left on. 「〜たまま」 means leaving it as it is." }
  ],
  "ニュース|": [
    { tag: "Real-life Japanese", explain: "This is the perfect word for lesson seventeen's hearsay. 「ニュースによると|ニュースによると」, according to the news. Then end with 「〜そうです」. 「ニュースによると、台風が来るそうです|ニュースによると、たいふうがくるそうです」. According to the news, a typhoon is coming. That's lesson sixteen's typhoon, plus lesson seventeen's grammar." },
    { tag: "Culture corner", explain: "Japan's national broadcaster is 「NHK」. Its news is spoken in clear, standard Japanese at a steady pace, so learners love it. There's even a version for learners and kids called NHK News Web Easy, with simpler words and furigana. It's a great next step for your listening practice." }
  ],
  "かじ|火事": [
    { tag: "Don't mix it up", explain: "Two big sound-alikes. 「火事|かじ」 is a fire, a building on fire. 「家事|かじ」 is housework, chores. Same sound, different kanji. So 「家事を手伝う|かじをてつだう」, to help with chores, is good. But if you hear 「かじだ！」 shouted, run. And for a fire to cook on, people just say 「火|ひ」, the native reading." },
    { tag: "Culture corner", explain: "Old Tokyo, called Edo, was made of wood and burned often. There was a famous saying, 「火事と喧嘩は江戸の華|かじとけんかはえどのはな」. Fires and fights are the flowers of Edo. Firefighter crews became local heroes. Today, the emergency number for fire and ambulance in Japan is one one nine, which is the reverse of the US 911." }
  ],
  "りょこうがいしゃ|旅行会社": [
    { tag: "Sound it out", explain: "Notice that 「会社|かいしゃ」 became 「がいしゃ」. When two words join, the second one often gets a muddy sound, a 「゛」. That's called rendaku. You've seen it in 「手紙|てがみ」, from 「かみ」, and 「本棚|ほんだな」, from 「たな」. So 「旅行」 plus 「会社」 is 「りょこうがいしゃ」. It just flows better." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen uses this with 「就職する」, to get a job. 「旅行会社に就職しました|りょこうがいしゃにしゅうしょくしました」. I got a job at a travel agency. Notice the 「に」, you get a job into a company. And customers are the 「お客さん」 from this same lesson. The Genki authors were clever." }
  ],
  "ショッピングモール|": [
    { tag: "Sound it out", explain: "Look at the small 「ッ」 in 「ショッピング」. It's a tiny pause, a held breath, before the 「ピ」. That's how Japanese shows the double p in shopping. And the final ing becomes 「ング」. Same pattern in 「ハイキング」, hiking, and 「ジョギング」, jogging. Ing words almost always end in 「ング」." },
    { tag: "Culture corner", explain: "Big malls in Japan often sit near train stations or outside towns. Many have a food court, a movie theater, and even a 「ゲームセンター」, arcade. Japan also has station buildings with shops stacked on top of the trains, called 「駅ビル|えきビル」. In bigger cities, you might never need a car to go shopping." }
  ],
  "りょう|寮": [
    { tag: "Real-life Japanese", explain: "University students and new company employees in Japan sometimes live in a 「寮」. A company dorm is 「社員寮|しゃいんりょう」. A student dorm is 「学生寮|がくせいりょう」. Lesson seventeen sentence, 「寮に住んでいたとき、毎日友だちと遊んだ|りょうにすんでいたとき、まいにちともだちとあそんだ」. When I lived in the dorm, I hung out with friends every day." },
    { tag: "Don't mix it up", explain: "There's a pile of 「りょう」 words. 「寮|りょう」, dorm. 「料理|りょうり」, cooking. 「両親|りょうしん」, parents. 「旅行|りょこう」, travel, which is shorter, 「りょ」 not 「りょう」. Listen for that long vowel. 「りょう」 has two beats, 「りょ」, 「う」. 「りょこう」 starts with only one." }
  ],
  "ちがい|違い": [
    { tag: "Real-life Japanese", explain: "The classic language-learner question. 「AとBの違いは何ですか|AとBのちがいはなんですか」. What's the difference between A and B? Use it in class all the time. And a set phrase, 「間違い|まちがい」, a mistake, is this word with 「間|ま」 in front. 「間違いがあったら教えてください」. If there are mistakes, please tell me." },
    { tag: "Word family", explain: "「違う|ちがう」 is used constantly to mean no, that's wrong. 「ちがうよ」. Nope. In casual speech it even becomes 「ちげーよ」 in rough guy talk. And 「違いない|ちがいない」 means there's no doubt, it must be. 「あの人は先生にちがいない」. That person must be a teacher. Literally, there's no difference from the truth." }
  ],
  "ひみつ|秘密": [
    { tag: "Real-life Japanese", explain: "「これは秘密だよ」. This is a secret. Then lesson seventeen's hearsay. 「秘密なんだけど、あの二人、付き合っているそうだよ|ひみつなんだけど、あのふたり、つきあっているそうだよ」. It's a secret, but I hear those two are dating. Ironically, hearsay is how secrets spread. And 「秘密を守る|ひみつをまもる」 is to keep a secret." },
    { tag: "Memory hook", explain: "「ひみつ」 sounds like he meets you. Picture a spy whispering, he meets you at midnight, it's a secret. And the second kanji, 「密|みつ」, means dense or close, packed tight. During the pandemic, Japan used the phrase 「三密|さんみつ」, the three Cs, closed spaces, crowded places, close contact. Same kanji, tight together." }
  ],
  "じゅんび|準備": [
    { tag: "Real-life Japanese", explain: "「準備はいい？」 Ready? That's a very natural question before going out. Answer 「うん、できた」, yes, done. And 「パーティーの準備をする」, to prepare for the party. And you'll see 「準備中|じゅんびちゅう」 on restaurant doors. It means preparing, so they're not open yet. Come back later." },
    { tag: "Word family", explain: "「準|じゅん」 means a standard or a level. 「水準|すいじゅん」, a level or standard. 「標準|ひょうじゅん」, standard, as in 「標準語|ひょうじゅんご」, standard Japanese. And 「備|び」 means to equip or be ready, as in 「備える|そなえる」, to prepare for something like an earthquake. So 「準備」 is getting everything to the right level, ready to go." }
  ],
  "じぶん|自分": [
    { tag: "Real-life Japanese", explain: "「自分|じぶん」 means self, but it's flexible. 「自分の部屋|じぶんのへや」, one's own room. And in some regions, especially Kansai, 「自分」 can mean you. A friend in Osaka might say 「自分、何してんの？」, meaning what are you doing? Confusing at first, but fun. Athletes and soldiers sometimes use it to mean I, too." },
    { tag: "Word family", explain: "「自|じ」 for self appears in many cool words. 「自信|じしん」, self-confidence, self-belief. 「自由|じゆう」, freedom. 「自然|しぜん」, nature, read 「し」 there, things as they are by themselves. And 「自動|じどう」, automatic, self moving. 「自動ドア」, automatic door. And 「自動販売機|じどうはんばいき」, vending machine. Japan has millions of them." }
  ],
  "あぶない|危ない": [
    { tag: "Real-life Japanese", explain: "「あぶない！」 is what you shout when someone is about to get hit. Watch out! And it's used for close calls. 「あぶなかった」. That was close! Like when you almost miss the train. Lesson sixteen's 「乗り遅れる」 almost happened." },
    { tag: "Word family", explain: "With its Chinese reading 「き」, this kanji means danger. 「危険|きけん」, danger, is the formal version, on warning signs. 「危機|きき」, crisis. And 「危ない|あぶない」 is the everyday spoken word. Kanji for crisis is a famous one, 「危機」, often said to be danger and opportunity, though that's actually a bit of a myth." }
  ],
  "うらやましい|": [
    { tag: "Real-life Japanese", explain: "Japanese people say 「うらやましい！」 a lot, and it's friendly, not bitter. Your friend got a new phone. 「いいなあ、うらやましい」. Lucky! I'm jealous! It's a compliment really. Lesson seventeen pairs it with hearsay. 「宝くじに当たったそうですね。うらやましいです」. I heard you won the lottery. I'm so envious." },
    { tag: "Memory hook", explain: "「うら」 means the back or the hidden side, as in 「裏|うら」, the back of a coin. Old Japanese 「うら」 also meant heart. So envy is a feeling at the back of your heart. And it's built on that old 「うら」, heart, plus 「やむ」, to be sick. Envy is literally a sick heart. Next time you feel it, say it out loud, 「うらやましい」, and laugh it off." }
  ],
  "すくない|少ない": [
    { tag: "Don't mix it up", explain: "Careful, 「少ない」 is not the same as 「少し|すこし」. 「少し」 means a little, an adverb, and it's neutral. 「少ない」 is an adjective, and it means not much, too few. So 「お金が少ない」, there's not much money, and 「人が少ない」, there are few people. 「少し」 just measures, 「少ない」 judges it as not enough. Its opposite is 「多い|おおい」, many." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen's comparisons. 「東京に比べて、ボルダーは人が少ないです|とうきょうにくらべて、ボルダーはひとがすくないです」. Compared with Tokyo, Boulder has fewer people. That's 「〜に比べて」 from this lesson. And remember, like 「きたない」 and 「あぶない」, the 「ない」 at the end is not negative. It's an ordinary い adjective." }
  ],
  "つごうがわるい|都合が悪い": [
    { tag: "Culture corner", explain: "This is the polite way to say no to plans without giving a reason. 「その日はちょっと都合が悪いんです」. That day is a bit inconvenient for me. Nobody will ask why. Japanese values not making people lose face. And the positive version, 「都合がいい」, means it works for me. So ask, 「ご都合はいかがですか」. How is your schedule?" },
    { tag: "Word family", explain: "「都合|つごう」 alone is circumstances or convenience. 「都|つ」 here is the same kanji as 「都|と」 in 「東京都|とうきょうと」, Tokyo Metropolis. 「合|ごう」 means to fit, as in 「合う|あう」, to match. So circumstances that fit together. And 「都合のいい人|つごうのいいひと」 is someone others take advantage of. A convenient person, which is not a compliment." }
  ],
  "つよい|強い": [
    { tag: "Word family", explain: "The kanji 「強|きょう」 also means study. 「勉強|べんきょう」, studying, is literally forcing your strength. Ha, that feels right during finals. And the opposite of 「強い」 is 「弱い|よわい」, weak. Notice both kanji have the bow, 「弓|ゆみ」, on the left. A strong bow and a weak bow. 「お酒に強い|おさけにつよい」 means can hold one's alcohol." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen comparison. 「アメリカのチームに比べて、日本のチームのほうが強い」. Compared with the American team, the Japanese team is stronger. And weather. 「風が強い|かぜがつよい」, the wind is strong. And personality, 「強い人|つよいひと」, a strong person, emotionally tough. All the same word." }
  ],
  "さいあく|最悪": [
    { tag: "Real-life Japanese", explain: "「最悪！」 is something young people shout when things go wrong. The worst! Ugh! You missed the train, it's raining, and you forgot your umbrella. 「最悪…」 Its opposite is 「最高|さいこう」, the best, which is equally common. 「この映画、最高！」 This movie is the best! So you now have both extremes." },
    { tag: "Word family", explain: "「最|さい」 means most and builds superlatives. 「最近|さいきん」, recently, the nearest time. 「最初|さいしょ」, the first. 「最後|さいご」, the last. 「最高|さいこう」, the best, the highest. And 「悪|あく」 means bad, the same as in 「悪い|わるい」. So 「最悪」 is simply the most bad." }
  ],
  "えらぶ|選ぶ": [
    { tag: "Real-life Japanese", explain: "「どれを選びますか|どれをえらびますか」. Which one will you choose? And at a shop, 「好きなのを選んでください」. Please pick the one you like. Lesson seventeen's 「〜たら」 works well. 「選ぶなら、赤いほうがいい」. If I'm choosing, the red one is better. And politics uses it too. 「選挙|せんきょ」 is an election." },
    { tag: "Memory hook", explain: "The kanji 「選」 has the moving part along the bottom, and on top two little people kneeling side by side. Imagine lining people up and walking past them to choose one. That's picking a team. And a sound hook, 「えら」 like era. Picture choosing your favorite era of music." }
  ],
  "おゆをわかす|お湯を沸かす": [
    { tag: "Don't mix it up", explain: "Notice that Japanese boils hot water, not water. 「お湯を沸かす」. Water that's going to be hot is already 「お湯」. You can also say 「お風呂を沸かす|おふろをわかす」, to heat the bath. And the self verb is 「沸く|わく」, to boil by itself. 「お湯が沸いた」. The water's boiling. And many Japanese bath systems announce in a cheerful voice, 「お風呂が沸きました」, the bath is ready." },
    { tag: "Real-life Japanese", explain: "Making tea in Japan starts with this. 「お湯を沸かして、お茶をいれる」. Boil water, then make tea. And 「いれる」 is in this lesson too. Lesson seventeen's 「〜てから」, after doing. 「お湯を沸かしてから、ラーメンを作ります」. After boiling water, I make ramen. Instant ramen counts." }
  ],
  "かみをとかす|髪をとかす": [
    { tag: "Word family", explain: "A comb is 「くし」, so you can say 「くしで髪をとかす」, to comb your hair with a comb. Other hair verbs. 「髪を切る|かみをきる」, to cut your hair. 「髪を洗う|かみをあらう」, to wash it. 「髪を染める|かみをそめる」, to dye it. And the hair salon from lesson sixteen, 「美容院|びよういん」." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen teaches 「〜てから」 and 「〜前に」. Perfect for morning routines. 「顔を洗ってから、髪をとかします」. After washing my face, I comb my hair. 「出かける前に、髪をとかします」. Before going out, I comb my hair. Notice 「前に」 takes the dictionary form, 「出かける」, never past." }
  ],
  "ひげをそる|": [
    { tag: "Real-life Japanese", explain: "A razor is 「かみそり」, which literally means hair shaver, from 「髪|かみ」 plus 「そる」. An electric shaver is 「電気かみそり|でんきかみそり」 or 「シェーバー」. And lesson seventeen's 「〜前に」. 「会社に行く前に、ひげをそります」. I shave before going to work. Every 「サラリーマン」 says it." },
    { tag: "Don't mix it up", explain: "The verb 「そる」 is a u-verb, even though it ends in 「る」. So its forms are 「そります」 and 「そって」. Same with 「切る|きる」, to cut, 「帰る|かえる」, to go home, and 「入る|はいる」, to enter. Japanese loves to sneak u-verbs in with a 「る」 ending. 「ひげをそって」, shave, please." }
  ],
  "ぬぐ|脱ぐ": [
    { tag: "Culture corner", explain: "Taking off shoes is the most important use. 「くつを脱いでください」. Please take off your shoes. In Japanese homes, temples, some restaurants, and even schools, you take your shoes off at the entrance. Then you might wear slippers, but you take those off too before stepping onto tatami mats. Very serious rules." },
    { tag: "Word family", explain: "Japanese uses different verbs for putting on clothes. 「着る|きる」, upper body. 「はく」, lower body and shoes. 「かぶる」, hats. 「かける」, glasses. 「する」, small items like ties and watches. But for taking off, almost everything uses one verb, 「脱ぐ|ぬぐ」. Except glasses and accessories, which use 「はずす」. Much easier going off than going on." }
  ],
  "こむ|混む": [
    { tag: "Real-life Japanese", explain: "Japanese trains in rush hour are famous for this. 「電車が混んでいる|でんしゃがこんでいる」. The train is crowded. Notice the 「〜ている」, it's in a crowded state. And the opposite is 「すいている」, empty. A useful question, 「レストラン、混んでるかな」. I wonder if the restaurant's crowded. That's 「〜かな」 from this lesson." },
    { tag: "Memory hook", explain: "The kanji 「混」 has water on the left, and on the right, the sun over two people side by side, like a crowd. Water mixing people together. And the main meaning of the kanji is to mix, as in 「混ぜる|まぜる」, to mix. So a crowded train is everyone mixed together. Like a bowl of soup, people instead of noodles." }
  ],
  "たからくじにあたる|宝くじに当たる": [
    { tag: "Word family", explain: "「当たる|あたる」 means to hit, to be right on target. 「天気予報が当たった|てんきよほうがあたった」, the weather forecast was right. 「日が当たる|ひがあたる」, the sun shines on it. And in a store, 「当たり|あたり」 is a winner, while 「はずれ」 is a miss. Japanese snack packages and vending machines sometimes say 「当たり」 on lucky ones." },
    { tag: "Real-life Japanese", explain: "Notice the particle 「に」. 「宝くじに当たる」. You hit into the lottery. Not 「を」. And the dream lesson seventeen sentence, 「宝くじに当たったら、会社をやめます」. If I win the lottery, I'll quit my job. A classic 「サラリーマン」 fantasy, maybe after too much 「残業」." }
  ],
  "いれる|": [
    { tag: "Real-life Japanese", explain: "When you offer a guest a drink, 「お茶をいれましょうか」. Shall I make some tea? And 「コーヒーをいれてくれる？」. Could you make me some coffee? People often write it with a different kanji, 「淹れる|いれる」, specifically for brewing, but hiragana is perfectly normal. You can also make tea with 「入れる」." },
    { tag: "Culture corner", explain: "Japanese tea is usually green tea, 「緑茶|りょくちゃ」. Fun fact, for good green tea you don't use boiling water. People let the 「お湯」 cool a bit, to about 70 or 80 degrees Celsius, or the tea turns bitter. So you 「お湯を沸かす」, let it cool, then 「お茶をいれる」. Three verbs from this lesson in one ritual." }
  ],
  "うまれる|生まれる": [
    { tag: "Real-life Japanese", explain: "The key phrase is 「〜で生まれました」, I was born in. 「わたしはアメリカで生まれました」. I was born in America. And with years, 「二千年に生まれました|にせんねんにうまれました」. Notice it's always past tense, because you were born once. Then 「生まれた町|うまれたまち」, my hometown, the town where I was born." },
    { tag: "Word family", explain: "「生|せい」 is the busiest kanji in Japanese, with maybe the most readings of any. 「生まれる|うまれる」, to be born. 「生きる|いきる」, to live. 「生|なま」, raw, as in 「生ビール|なまビール」, draft beer. 「学生|がくせい」, student. 「一生|いっしょう」, a whole lifetime. And 「誕生日|たんじょうび」, birthday. All about life." }
  ],
  "かぎをかける|鍵をかける": [
    { tag: "Culture corner", explain: "Japan is known for being very safe, and in some rural areas people famously don't lock their doors at all. But in cities, people do. And a tip, Japanese houses often have the keyhole and a chain, and you'll hear 「ちゃんとかぎをかけてね」. Make sure you lock up properly, from parents everywhere." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen's 「〜てから」 and 「〜前に」. 「寝る前に、かぎをかけます」. Before going to bed, I lock up. And the panic sentence, 「かぎをかけるのを忘れた！」, I forgot to lock it! Also, a lock and its opposite, 「かぎを開ける|かぎをあける」, to unlock. Remember, 「かぎ」 is both the lock and the key." }
  ],
  "たりる|足りる": [
    { tag: "Real-life Japanese", explain: "This word is mostly heard in the negative. 「お金が足りない|おかねがたりない」. I don't have enough money. 「時間が足りない|じかんがたりない」. There's not enough time. Exam week in one sentence. And when ordering food for a group, 「これで足りるかな」, I wonder if this is enough. Using 「〜かな」 from this lesson." },
    { tag: "Memory hook", explain: "Why does foot mean enough? One idea, enough is what you can stand on, what has legs. Another verb from it is 「足す|たす」, to add. So 「足す」, add, until it 「足りる」, is enough. In math class, 「足す」 is plus. 「一足す一は二|いちたすいちはに」. One plus one is two. Enough." }
  ],
  "なれる|慣れる": [
    { tag: "Real-life Japanese", explain: "A question every exchange student gets. 「日本の生活に慣れましたか|にほんのせいかつになれましたか」. Have you gotten used to life in Japan? Answer, 「はい、だいぶ慣れました」. Yes, I've gotten pretty used to it. Notice the particle 「に」. You get used to something with 「に」." },
    { tag: "Don't mix it up", explain: "There's another 「なれる」 that trips learners up. 「なる」, to become, has a potential form, 「なれる」, can become. 「先生になれる」, I can become a teacher. Then there's 「慣れる」, get used to. Same sound. Context and the kanji help. 「慣れる」 has the heart part on the left. You get used to things in your heart." }
  ],
  "おいのりする|お祈りする": [
    { tag: "Culture corner", explain: "At a Japanese shrine, people pray in a specific way. Bow twice, clap twice, pray, bow once. It's called 「二礼二拍手一礼|にれいにはくしゅいちれい」. Two bows, two claps, one bow. At a temple, you don't clap, you just put your hands together quietly. Many people visit shrines at New Year to pray for luck, 「初詣|はつもうで」." },
    { tag: "Real-life Japanese", explain: "The plain verb is 「祈る|いのる」. A lovely set phrase, 「ご成功をお祈りしています|ごせいこうをおいのりしています」. I'm praying for your success. People use it in emails and cards, even if not religious, like I wish you all the best. And a friend before your exam, 「祈ってるよ」. Fingers crossed." }
  ],
  "けしょうする|化粧する": [
    { tag: "Word family", explain: "「化粧|けしょう」 builds useful words. 「化粧品|けしょうひん」 is cosmetics, makeup products. 「化粧室|けしょうしつ」 is a polite word for restroom, literally makeup room, like powder room in English. You'll see 「化粧室」 on signs in department stores. And 「お化け|おばけ」, a ghost, uses the same 「化」, a thing that transforms." },
    { tag: "Real-life Japanese", explain: "Another way to say it is 「メイクする」, from English makeup, which is more casual and very common. Lesson seventeen's 「〜てから」. 「化粧してから出かけます」. I'll go out after putting on makeup. And the classic train manners debate in Japan, people doing makeup on trains, 「電車の中で化粧する」, which some think is rude." }
  ],
  "しゅうしょくする|就職する": [
    { tag: "Culture corner", explain: "Japanese students do something called 「就活|しゅうかつ」, short for 「就職活動|しゅうしょくかつどう」, job hunting. Third-year college students put on identical black suits and go through company info sessions and interviews together. Then many start work all at once in April. It's a very structured system, quite different from the US." },
    { tag: "Real-life Japanese", explain: "The particle is 「に」. 「銀行に就職しました|ぎんこうにしゅうしょくしました」. I got a job at a bank. And with 「〜たら」 from this lesson. 「卒業したら、日本で就職したい」. After I graduate, I want to get a job in Japan. Interestingly, the word implies a full-time career job, not a part-time job, which is 「アルバイト」." }
  ],
  "りこんする|離婚する": [
    { tag: "Word family", explain: "「婚|こん」 is marriage, with the woman part on the left. 「結婚|けっこん」 is marriage, to tie the knot. 「婚約|こんやく」 is engagement, the marriage promise. And 「離婚|りこん」 is divorce, separating the marriage. And 「離|り」 also appears in 「距離|きょり」, distance. So divorce is putting distance into a marriage." },
    { tag: "Real-life Japanese", explain: "This word appears with lesson seventeen's hearsay, which is how gossip works. 「あの俳優、離婚したそうですよ|あのはいゆう、りこんしたそうですよ」. I hear that actor got divorced. Japanese entertainment news is full of this. Notice that the particle for divorcing someone is 「と」. 「夫と離婚した|おっととりこんした」, divorced her husband." }
  ],
  "する|": [
    { tag: "Real-life Japanese", explain: "For small accessories you use 「する」. 「ネクタイをする」, to wear a tie. 「時計をする|とけいをする」, a watch. 「指輪をする|ゆびわをする」, a ring. 「マスクをする」, a mask. And 「マフラーをする」, a scarf. To describe someone, use 「〜ている」. 「赤いネクタイをしている人」. The person wearing a red tie." },
    { tag: "Word family", explain: "Here's the full wearing system. Upper body clothes, 「着る|きる」. Pants, skirts, shoes, 「はく」. Hats, 「かぶる」. Glasses, 「かける」. Small accessories, 「する」. And for describing what someone has on, use the 「〜ている」 form. 「ぼうしをかぶって、めがねをかけて、ネクタイをしている」. Wearing a hat, glasses, and a tie." }
  ],
  "ずいぶん|": [
    { tag: "Don't mix it up", explain: "「ずいぶん」 isn't just very. It carries a feeling of surprise, more than I expected. 「ずいぶん大きくなったね」. You've gotten so big! That's what relatives say to kids. Compare 「とても」, which is neutral, very. And 「かなり」, quite or fairly. So use 「ずいぶん」 when something surprises you." },
    { tag: "Real-life Japanese", explain: "Lesson seventeen's comparisons. 「去年に比べて、ずいぶん日本語が上手になりましたね|きょねんにくらべて、ずいぶんにほんごがじょうずになりましたね」. Compared with last year, your Japanese has really improved. A nice thing to hear from a teacher. Answer with a modest 「いえいえ、まだまだです」. Oh no, I've got a long way to go." }
  ],
  "たとえば|例えば": [
    { tag: "Real-life Japanese", explain: "「たとえば」 is perfect for giving examples, and for buying time. 「日本料理、たとえばすしやてんぷらが好きです」. I like Japanese food, for example sushi and tempura. Notice 「や」, and the like. And in conversation, if someone asks you a hard question, 「たとえば？」 For example? throws it right back to them." },
    { tag: "Word family", explain: "「例|れい」 means example. 「例文|れいぶん」, example sentence. That's what this app shows you. 「例外|れいがい」, exception, outside the example. And 「例えば」 comes from the verb 「例える|たとえる」, to compare one thing to another, to use a metaphor. So for example means let me compare it to this." }
  ],
  "〜にくらべて|〜に比べて": [
    { tag: "Memory hook", explain: "The kanji 「比|くら」 is two people side by side, both facing the same way. Literally standing next to each other to compare heights. Remember it, two people lined up. And you've seen it before in 「比較|ひかく」, comparison, in more formal Japanese. So 「Aに比べて」, compared with A, put them side by side." },
    { tag: "Real-life Japanese", explain: "The pattern is 「Aに比べて、Bは〜」. Compared with A, B is something. 「日本に比べて、アメリカは大きいです」. Compared with Japan, America is big. And you'll love this one, 「東京に比べて、ボルダーは静かです」. Compared with Tokyo, Boulder is quiet. And the plain verb 「比べる|くらべる」 means to compare. 「二つを比べる」, to compare the two." }
  ],
  "〜によると|": [
    { tag: "Real-life Japanese", explain: "This always goes with hearsay. Your source, then 「〜そうです」 at the end. 「天気予報によると、あしたは雨が降るそうです|てんきよほうによると、あしたはあめがふるそうです」. According to the weather forecast, it's going to rain tomorrow. Notice the 「そう」 attaches to the plain form, 「降る」. That's the lesson seventeen grammar." },
    { tag: "Word family", explain: "「よる」 here means to depend on, to rely on, written 「因る」 or 「依る」 in kanji, but nobody uses those for this. Its cousin is 「〜によって」, depending on. 「人によって違う|ひとによってちがう」. It differs from person to person. And the famous answer, 「場合による|ばあいによる」, it depends on the situation. Very useful." }
  ],
  "まえ|前": [
    { tag: "Real-life Japanese", explain: "In lesson seventeen, 「前|まえ」 means before doing something. Always use the dictionary form, even for the past. 「寝る前に歯をみがきます」. I brush my teeth before going to bed. 「日本に来る前に、日本語を勉強しました」. Before coming to Japan, I studied Japanese. Never 「来た前」. That's a classic mistake." },
    { tag: "Don't mix it up", explain: "Lesson seventeen pairs 「前|まえ」 with 「〜てから」, after doing. Before uses the dictionary form, 「食べる前に」. After uses the te form, 「食べてから」. And with time spans, 「前」 means ago. 「三年前|さんねんまえ」, three years ago. So 「前」 can be in front of, before doing, and ago. All looking at one thing from behind." }
  ],
  "やっぱり|": [
    { tag: "Real-life Japanese", explain: "「やっぱり」 is used in two ways. As I thought. 「やっぱり雨が降ってきた」. Sure enough, it started raining. And changing your mind. 「やっぱり、コーヒーにします」. Actually, on second thought, I'll have coffee. You'll hear it constantly. Young people even shorten it to 「やっぱ」." },
    { tag: "Word family", explain: "It's the spoken, emphatic form of 「やはり」, which is more formal and used in writing. 「やっぱり」 adds the small 「っ」 for punch. Casual speakers say 「やっぱ」. And a common phrase, 「やっぱり日本の食べ物はおいしい」. Japanese food is delicious after all. Said by everyone who just came home from abroad." }
  ],
  "〜かな|": [
    { tag: "Real-life Japanese", explain: "「〜かな」 is talking to yourself, out loud. 「あしたは晴れるかな」. I wonder if it'll be sunny tomorrow. It's casual. Use it with friends or alone. In polite speech, it becomes 「〜でしょうか」. And women and men both use it. You'll also hear 「〜かなあ」 stretched, sounding more thoughtful." },
    { tag: "Don't mix it up", explain: "Don't confuse 「〜かな」 with 「かな」, the name for kana, the Japanese syllabaries. Different words, same sound. And 「〜かな」 is also used softly for requests. 「ちょっと手伝ってくれないかな」. I wonder if you could help me a little. Very gentle, much softer than 「手伝って」." }
  ],
  "そうか|": [
    { tag: "Don't mix it up", explain: "There are a few versions with different moods. 「そうか」 is casual, I see, often used by men or with friends. 「そうですか」 is polite. 「そっか」 is a soft, shortened version, very common with young people. And 「そうなんだ」 means oh, is that so? With real interest. Rising intonation, 「そうか？」, means really? I'm not so sure." },
    { tag: "Real-life Japanese", explain: "Listen to the tone. A falling 「そうか…」 means I see, often a bit sad or thoughtful. 「試験に落ちたんだ」. I failed the exam. 「そうか…」 Oh, I see. Using a rising 「そうか？」 questions it. And people say 「あ、そうか！」 when they realize something. Oh, right! That's the light bulb moment." }
  ],
  "おめでとうございます|": [
    { tag: "Real-life Japanese", explain: "Put the occasion in front. 「誕生日おめでとう|たんじょうびおめでとう」, happy birthday. 「結婚おめでとう|けっこんおめでとう」, congratulations on your marriage. 「卒業おめでとう|そつぎょうおめでとう」, on your graduation. And the big one, 「あけましておめでとうございます」, Happy New Year. Drop 「ございます」 with friends." },
    { tag: "Culture corner", explain: "Japanese has a special response. When someone says 「おめでとうございます」, you answer 「ありがとうございます」. Simple. But at New Year, you say it back. 「あけましておめでとうございます」, Happy New Year, and the other person repeats it. Also, a celebratory red bean rice, 「お赤飯|おせきはん」, is made for happy occasions. Red again, like the 「あかちゃん」." }
  ]
});
