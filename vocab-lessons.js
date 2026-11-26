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

   Covered so far: Genki lessons 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19.
   Note: Lessons 18–19 added Nov 13, 2026 (verb pairs, keigo).
   ======================================================================= */
window.VOCAB_LESSONS = window.VOCAB_LESSONS || {};
/* Lesson 1 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "せんせい|先生": [
    { tag: "Real-life Japanese", explain: "Put 「先生」 after a name, never 「さん」 too. 「山下先生|やましたせんせい」, Professor Yamashita. And you can call your teacher just 「先生」, no name needed, like saying Professor. Students do it all day. 「先生、質問があります|せんせい、しつもんがあります」. Teacher, I have a question." },
    { tag: "Don't mix it up", explain: "You never call yourself 「先生」. If you're a teacher, you say 「教師|きょうし」, teacher, as a job title. 「わたしは教師です」. 「先生」 is a title other people give you, out of respect, like Doctor or Professor in English. So it's always pointing outward." }
  ],
  "がくせい|学生": [
    { tag: "Real-life Japanese", explain: "The very first sentence many learners say. 「わたしは学生です」. I am a student. And to be specific, add the school. 「コロラド大学の学生です|コロラドだいがくのがくせいです」. I'm a student at the University of Colorado. The 「の」 connects them, like of." },
    { tag: "Culture corner", explain: "Student discounts are everywhere in Japan, called 「学割|がくわり」, short for student discount. Museums, movie theaters, and train passes offer them. Show your student ID, your 「学生証|がくせいしょう」. Another 「学生」 word that saves you money." }
  ],
  "だいがく|大学": [
    { tag: "Real-life Japanese", explain: "Ask what year someone is in. 「何年生ですか|なんねんせいですか」. What year are you? Answer, 「三年生です|さんねんせいです」, I'm a junior, a third-year. And 「大学一年生」 is a freshman. Japanese uses numbers, not freshman and sophomore." },
    { tag: "Culture corner", explain: "Getting into a Japanese 「大学」 is famously hard, with big entrance exams. But many students say college life itself is more relaxed, full of clubs, called 「サークル」, and part-time jobs. Some joke that Japanese college is the four-year vacation between exam hell and work life." }
  ],
  "ともだち|友だち": [
    { tag: "Word family", explain: "「友|とも」 means friend, and 「だち」 was once a plural ending. So originally, friends. Now it's one or many. Close friend is 「親友|しんゆう」, best friend, with the closeness kanji 「親」. And slang, young people say 「ダチ」 for buddy. A bit tough-guy sounding." },
    { tag: "Real-life Japanese", explain: "「友だちと映画を見ます」. I'll see a movie with a friend. 「と」 is with. And 「友だちになりましょう」. Let's be friends. Or 「友だちになってください」. Please be my friend. Simple, sweet, and kids really say it." }
  ],
  "にほん|日本": [
    { tag: "Memory hook", explain: "The kanji say sun origin. 「日|に」, sun, 「本|ほん」, origin or root. Japan is the place where the sun comes from, because it's east of China. That's why it's called the Land of the Rising Sun, and why its flag is a red sun." },
    { tag: "Don't mix it up", explain: "Japan has two readings, 「にほん」 and 「にっぽん」. Both are correct. 「にっぽん」 sounds stronger and more official, so you'll hear it on money, stamps, and when fans cheer at sports. 「にっぽん、ちゃちゃちゃ！」 Everyday speech mostly uses 「にほん」." }
  ],
  "りゅうがくせい|留学生": [
    { tag: "Word family", explain: "「留|りゅう」 means to stay. So an international student is a student who stays to study. 「留学|りゅうがく」 is studying abroad. 「留学する」, to study abroad. And 「留守|るす」, being out of the house, uses the same kanji. 「留守番電話|るすばんでんわ」 is voicemail." },
    { tag: "Real-life Japanese", explain: "「日本に留学したいです」. I want to study abroad in Japan. And a question you'll hear in Japan, 「留学生ですか」. Are you an international student? Answer, 「はい、アメリカから来ました」. Yes, I came from America." }
  ],
  "とけい|時計": [
    { tag: "Word family", explain: "「時|と」 here means time, and 「計|けい」 means to measure. So a time measurer. 「計|けい」 shows up in 「体温計|たいおんけい」, a thermometer, body heat measurer, and 「計算|けいさん」, calculation. The reading 「と」 for 「時」 is a special one, used only in this word." },
    { tag: "Real-life Japanese", explain: "「時計」 covers both wristwatches and wall clocks. If you need to be specific, a wristwatch is 「腕時計|うでどけい」, arm clock, and notice 「とけい」 turns into 「どけい」. And 「目覚まし時計|めざましどけい」 is an alarm clock, eye-waker clock." }
  ],
  "でんわ|電話": [
    { tag: "Real-life Japanese", explain: "On the phone, Japanese say 「もしもし」, hello. And 「電話をかける」, to make a call. 「電話番号|でんわばんごう」, phone number. To ask, 「電話番号は何ですか」. And when you read numbers, the dash is said as 「の」. So 「五五五の一二三四」." },
    { tag: "Word family", explain: "「電|でん」, electric, plus 「話|わ」, talk. Electric talk. Beautiful logic. Other electric words, 「電車|でんしゃ」, train, 「電気|でんき」, electricity or lights. And 「話|わ」 shows up in 「会話|かいわ」, conversation. Lesson nineteen's 「話|はなし」 is the same kanji." }
  ],
  "ほん|本": [
    { tag: "Memory hook", explain: "The kanji 「本」 is a tree, 「木|き」, with a line marking its root at the bottom. So it means origin, the root. Books are where knowledge comes from, the root of learning. And as a counter, 「本|ほん」 counts long thin things, like pens and bottles. Long like a tree trunk." },
    { tag: "Word family", explain: "「本」 is in many words. 「本屋|ほんや」, bookstore. 「日本|にほん」, Japan, the sun's origin. 「本当|ほんとう」, true, from the root. And the counter, 「一本|いっぽん」, 「二本|にほん」, 「三本|さんぼん」, for bottles, pencils, and umbrellas. Watch the sound change." }
  ],
  "いま|": [
    { tag: "Real-life Japanese", explain: "「今、何時ですか|いま、なんじですか」. What time is it now? The most useful time question. And 「今、いい？」, do you have a minute now? And 「今行きます|いまいきます」, I'm coming now. It's written 「今」 in kanji, which you'll learn soon." },
    { tag: "Word family", explain: "The kanji 「今」 is in lots of time words. 「今日|きょう」, today. 「今朝|けさ」, this morning. 「今晩|こんばん」, tonight. 「今週|こんしゅう」, this week. 「今年|ことし」, this year. Many have special readings, so learn them as whole words." }
  ],
  "えいご|": [
    { tag: "Word family", explain: "The ending 「語|ご」 means language. 「英語|えいご」, English. 「日本語|にほんご」, Japanese. 「中国語|ちゅうごくご」, Chinese. 「スペイン語」, Spanish. Just add 「ご」 to the country. And 「英|えい」 comes from an old name for England, 「英国|えいこく」." },
    { tag: "Real-life Japanese", explain: "「英語が話せますか」. Can you speak English? People in Japan often study English for years but feel shy speaking it. A kind answer if someone apologizes for their English, 「上手ですね」, you're good at it! And then switch to your Japanese to be friendly." }
  ],
  "にほんご|": [
    { tag: "Real-life Japanese", explain: "The phrases you'll use most. 「日本語で何ですか」. What is it in Japanese? 「日本語でお願いします」. In Japanese, please. And when people praise you, 「日本語が上手ですね」. A modest answer, 「いいえ、まだまだです」. No, I still have a long way to go." },
    { tag: "Culture corner", explain: "Japanese uses three writing systems at once. Hiragana, katakana, and kanji. Plus romaji for the Roman alphabet. A single sentence can mix all four. It looks scary at first, but each has a job. Kanji for meaning, hiragana for grammar, katakana for loanwords." }
  ],
  "こうこう|": [
    { tag: "Word family", explain: "「高校|こうこう」 is short for 「高等学校|こうとうがっこう」, high level school. The kanji are 「高|こう」, high, as in 「高い|たかい」, and 「校|こう」, school, as in 「学校|がっこう」. Its student is 「高校生|こうこうせい」, also in this lesson." },
    { tag: "Culture corner", explain: "Japanese high school isn't compulsory, but almost everyone goes. Students take an entrance exam to get in. The national high school baseball tournament, 「甲子園|こうしえん」, is a huge summer TV event. Teams who lose often take home a bag of dirt from the field as a memento." }
  ],
  "ごご|": [
    { tag: "Word family", explain: "「午|ご」 means noon. 「午前|ごぜん」, before noon, A.M. 「午後|ごご」, after noon, P.M. And 「正午|しょうご」, exactly noon. Notice 「前|まえ」 and 「後|あと」. Before and after. Once you see that, A.M. and P.M. are easy." },
    { tag: "Real-life Japanese", explain: "「午後」 goes before the time, unlike English. 「午後三時|ごごさんじ」, three P.M. Not three 「午後」. And in train stations and on schedules, Japan uses the twenty-four hour clock. So 「十五時|じゅうごじ」 is also three P.M." }
  ],
  "ごぜん|": [
    { tag: "Memory hook", explain: "「ごぜん」, before noon. A memory trick, A.M. is 「ごぜん」, Zen morning. Start your day calm, like a Zen monk. And 「午後|ごご」, P.M., go go, the afternoon is busy. Zen in the morning, go go in the afternoon." },
    { tag: "Real-life Japanese", explain: "「午前中|ごぜんちゅう」 means during the morning, the whole time before noon. 「午前中に電話してください」. Please call sometime in the morning. And 「午前零時|ごぜんれいじ」, midnight. Japan often uses 「零|れい」, zero, for midnight." }
  ],
  "せんこう|専攻": [
    { tag: "Real-life Japanese", explain: "「専攻は何ですか|せんこうはなんですか」. What's your major? Answer, 「日本語です」. And 「経済を専攻しています|けいざいをせんこうしています」. I'm majoring in economics. Common small talk at any Japanese university." },
    { tag: "Word family", explain: "「専|せん」 means specialty or exclusive. 「専門|せんもん」, specialty, a field of expertise. 「専門学校|せんもんがっこう」, a vocational school. And 「専用|せんよう」, exclusive use. You'll see 「女性専用車|じょせいせんようしゃ」, women-only train cars." }
  ],
  "なまえ|": [
    { tag: "Real-life Japanese", explain: "Ask politely, 「お名前は？|おなまえは？」 And your name? You add 「お」 for other people's names, never your own. And forms ask for 「名前」, often next to 「ふりがな」, where you write the reading in kana. Japanese names can be read many ways." },
    { tag: "Culture corner", explain: "In Japan, family name comes first. 「山田花子|やまだはなこ」, Yamada is the family name. And people usually call each other by family name plus 「さん」. First names are for close friends and family. So don't be surprised if classmates call you by your last name." }
  ],
  "なん|": [
    { tag: "Don't mix it up", explain: "「何」 is read 「なん」 or 「なに」. 「なん」 before 「です」, and before sounds like t, d, n, and counters. 「何ですか|なんですか」, 「何時|なんじ」, 「何人|なんにん」. 「なに」 before 「を」, 「が」, and most others. 「何を食べますか|なにをたべますか」." },
    { tag: "Real-life Japanese", explain: "「え？なに？」, huh? what? when you didn't hear. And 「なんで？」, why? casual. And 「なんでもない」, it's nothing. And 「なんか」, something, or kind of, a filler young people use constantly. 「なんか、おなかすいた」. Kinda hungry." }
  ],
  "にほんじん|": [
    { tag: "Word family", explain: "Add 「人|じん」 to a country to get its people. 「日本人|にほんじん」, Japanese person. 「アメリカ人」, American. 「中国人|ちゅうごくじん」, Chinese. Easy! And 「外国人|がいこくじん」, a foreigner, a person from outside the country." },
    { tag: "Don't mix it up", explain: "「人」 has three common readings. 「じん」 for nationality, 「日本人」. 「にん」 for counting, 「三人|さんにん」, three people. And 「ひと」 alone, a person, 「あの人」, that person. One kanji, three jobs." }
  ],
  "はん|": [
    { tag: "Real-life Japanese", explain: "「半|はん」 is half past. 「三時半|さんじはん」, three thirty. And with days, 「一時間半|いちじかんはん」, an hour and a half. And 「半分|はんぶん」, half of something. 「半分ちょうだい」. Give me half. Cake-sharing Japanese." },
    { tag: "Memory hook", explain: "The kanji 「半」 is a line cut down the middle with two little marks on top. A thing split exactly in half. And 「はん」 sounds like hand. Hold up one hand to show half of your ten fingers. Half." }
  ],
  "ばんごう|": [
    { tag: "Word family", explain: "「番|ばん」 means number or turn. 「一番|いちばん」, number one, the best. 「番号|ばんごう」, a number like a phone number. 「交番|こうばん」, a police box. And 「順番|じゅんばん」, your turn in line. 「わたしの番」, my turn!" },
    { tag: "Real-life Japanese", explain: "「電話番号は何番ですか」. What's your phone number? And at hospitals and banks, you take a number ticket, then wait for your 「番号」 to be called. Numbers are read one digit at a time, and zero is 「ゼロ」 or 「れい」." }
  ],
  "わたし|": [
    { tag: "Don't mix it up", explain: "Japanese has many words for I. 「わたし」, standard and safe for anyone. 「わたくし」, very formal. 「ぼく」, boys and men, casual. 「おれ」, rough, masculine. 「あたし」, casual and feminine. Choosing one says a lot about you." },
    { tag: "Real-life Japanese", explain: "Japanese often drops 「わたし」 entirely. 「学生です」 already means I am a student. Saying 「わたしは」 every sentence sounds a bit robotic. Use it when you're contrasting, like, 「わたしはコーヒーです」. As for me, coffee." }
  ],
  "アメリカ|": [
    { tag: "Word family", explain: "Japanese has a kanji nickname for America, 「米|べい」, from an old spelling. You'll see it in news. 「米国|べいこく」, the U.S. 「日米|にちべい」, Japan and the US. And funnily, 「米|こめ」 also means rice. So America is the rice country in headlines." },
    { tag: "Real-life Japanese", explain: "「アメリカから来ました」. I came from America. And 「アメリカのどこですか」. Where in America? Answer, 「コロラドです」. Many Japanese people know Denver or Boulder from skiing, or might ask about cowboys." }
  ],
  "イギリス|": [
    { tag: "Sound it out", explain: "Why 「イギリス」 for Britain? It comes from Portuguese 「Inglês」, meaning English. Portuguese traders were among the first Europeans in Japan, in the fifteen-hundreds. That's also where 「パン」, bread, came from, Portuguese pão." },
    { tag: "Word family", explain: "The kanji abbreviation for Britain is 「英|えい」. That's why English is 「英語|えいご」, the language of 「英国|えいこく」. So 「イギリス」 and 「英語」 are the same country, with different words." }
  ],
  "オーストラリア|": [
    { tag: "Sound it out", explain: "Long word, but easy. The long 「オー」 for the aw sound, then 「ストラリア」. Every consonant gets its own vowel. Japanese people sometimes shorten it to 「オーストラリア人」 for an Australian. And it's a hugely popular study-abroad and working-holiday spot for young Japanese." },
    { tag: "Real-life Japanese", explain: "Lesson one practice, 「オーストラリアの大学生です」. I'm an Australian college student. Notice 「の」 links country to person. And 「オーストラリアはいま何時ですか」. What time is it in Australia now? Also useful with lesson one's time words." }
  ],
  "かんこく|": [
    { tag: "Culture corner", explain: "Korean culture is massively popular in Japan, called the Korean wave. K-pop, Korean dramas, and Korean food all trend. Tokyo's 「新大久保|しんおおくぼ」 is a Korea Town packed with young people on weekends. Many Japanese learn Korean, 「韓国語|かんこくご」." },
    { tag: "Word family", explain: "The kanji are 「韓国」. 「国|こく」 means country. 「中国|ちゅうごく」, China, the middle country. 「外国|がいこく」, foreign country. 「国|くに」 alone, country or homeland. 「お国はどちらですか」. Where are you from?" }
  ],
  "ちゅうごく|": [
    { tag: "Memory hook", explain: "The kanji are 「中国」, middle country. China historically saw itself at the center of the world. And 「中|ちゅう」 is a box with a line right through the middle. You'll see it in 「中学生|ちゅうがくせい」, middle school student." },
    { tag: "Don't mix it up", explain: "Careful, there's also a region of Japan called 「中国地方|ちゅうごくちほう」, the Chugoku region, which includes Hiroshima. Same kanji, totally different place. Context makes it clear. And Japanese kanji came from China, so many words share roots." }
  ],
  "けいざい|": [
    { tag: "Word family", explain: "The kanji are 「経済」. It comes from an old Chinese phrase about governing the world and saving the people. So economics was originally about good government. You'll also see 「経済学部|けいざいがくぶ」, economics department, and 「経済的|けいざいてき」, economical." },
    { tag: "Real-life Japanese", explain: "「経済を勉強しています」. I study economics. And 「日本の経済」, the Japanese economy, is common in news. A fun one, 「経済的」 means economical, cheap. 「自転車は経済的です」. Bikes are economical." }
  ],
  "コンピューター|": [
    { tag: "Sound it out", explain: "You'll see it spelled 「コンピューター」 and 「コンピュータ」. Both are fine. Engineers and companies often drop the long mark at the end. But day to day, people say 「パソコン」, short for personal computer. 「パソコンを使う」, to use a computer." },
    { tag: "Word family", explain: "Computer words in Japanese are mostly katakana. 「パソコン」, PC. 「ノートパソコン」, laptop. 「マウス」, mouse. 「キーボード」, keyboard. 「ソフト」, software. 「プログラマー」, programmer. Great news for a web developer, you already know them." }
  ],
  "ビジネス|": [
    { tag: "Real-life Japanese", explain: "「ビジネス」 appears in many phrases. 「ビジネスマン」, businessman. 「ビジネスホテル」, an inexpensive, simple hotel for business travelers. Super useful when traveling in Japan. And 「ビジネスクラス」, business class on a plane." },
    { tag: "Sound it out", explain: "English business has a z sound in the middle, which becomes 「ジ」. Then the final s becomes 「ス」. So 「ビ」, 「ジ」, 「ネ」, 「ス」. Four even beats. Japanese often keeps the spelling's vowels where English swallows them." }
  ],
  "れきし|": [
    { tag: "Word family", explain: "The kanji are 「歴史」. 「歴|れき」 means passing through time, and 「史|し」 means a record. 「日本史|にほんし」, Japanese history. 「世界史|せかいし」, world history. Japanese high schoolers choose one for their exams." },
    { tag: "Culture corner", explain: "Japanese history is divided into named eras. The samurai Edo period, 「江戸時代|えどじだい」, lasted over two hundred and fifty years. And modern Japan uses imperial era names, like 「令和|れいわ」, which started in 2019. Japanese forms often ask for the year in that system." }
  ],
  "しごと|": [
    { tag: "Real-life Japanese", explain: "「お仕事は何ですか|おしごとはなんですか」. What do you do for work? Add 「お」 for politeness. And 「仕事に行きます」, I'm going to work. And 「仕事が忙しい」, work is busy. A sentence you'll hear from every adult in Japan." },
    { tag: "Word family", explain: "The kanji are 「仕事」. 「仕|し」 means to serve, and 「事|こと」, a thing, matter. So work is the thing you serve. And 「事|じ」 appears in 「火事|かじ」, fire, and 「食事|しょくじ」, a meal. Notice how 「しごと」 has 「こと」 becoming 「ごと」." }
  ],
  "かいしゃいん|": [
    { tag: "Word family", explain: "「会社|かいしゃ」 is a company, and 「員|いん」 is a member. So company member. 「会社」 is 「会|かい」, to meet, and 「社|しゃ」, society. A company is a meeting of people. And 「社長|しゃちょう」 is the company president." },
    { tag: "Real-life Japanese", explain: "「父は会社員です」. My father is an office worker. When you talk about your own family, use plain words like 「父|ちち」. And Japanese people often say which company, not the job title. 「トヨタで働いています」. I work at Toyota." }
  ],
  "こうこうせい|": [
    { tag: "Real-life Japanese", explain: "「妹は高校生です」. My little sister is in high school. And high schoolers have a cool slang name, 「JK」, for 「女子高生|じょしこうせい」, high school girl. It shows up in media and marketing all the time." },
    { tag: "Word family", explain: "Grades in Japanese high school, 「高校一年生」, first year, 「二年生」, second, 「三年生」, third. Japanese high school is three years, grades ten to twelve. So a 「高一|こういち」 is a sophomore, in US terms." }
  ],
  "しゅふ|": [
    { tag: "Word family", explain: "The kanji are 「主婦」. 「主|しゅ」, main, and 「婦|ふ」, woman. And today there's 「主夫|しゅふ」, house husband, same sound with 「夫|おっと」, husband. Written differently, said the same. A small sign of changing times." },
    { tag: "Culture corner", explain: "In the past, many Japanese women left work after marriage to become 「主婦」. Now most married women work, often part-time. You'll see the phrase 「専業主婦|せんぎょうしゅふ」, full-time housewife, versus 「共働き|ともばたらき」, both partners working." }
  ],
  "だいがくいんせい|": [
    { tag: "Real-life Japanese", explain: "「大学院生です」. I'm a grad student. And in conversation, people often shorten it to 「院生|いんせい」. 「院生室」, the grad student room. Lesson sixteen gives you more, like 「研究|けんきゅう」, research, and 「推薦状|すいせんじょう」, recommendation letter." },
    { tag: "Word family", explain: "Building blocks. 「大学|だいがく」, college. Add 「院|いん」, institution, to get grad school. Add 「生|せい」, student. Japanese builds big words like Lego. 「大学院生」, college institution student. Each kanji adds one idea." }
  ],
  "だいがくせい|": [
    { tag: "Real-life Japanese", explain: "「大学生です」. I'm a college student. And 「大学生になったら、一人暮らしをしたい」. When I become a college student, I want to live alone. Very common goal for Japanese high schoolers. That's 「一人暮らし|ひとりぐらし」, living alone." },
    { tag: "Word family", explain: "The student ladder. 「小学生」, elementary. 「中学生」, junior high. 「高校生」, high school. 「大学生」, college. 「大学院生」, grad student. Each ends in 「生|せい」, life or student. Learn the pattern once." }
  ],
  "べんごし|": [
    { tag: "Word family", explain: "The kanji are 「弁護士」. 「弁|べん」, speech, 「護|ご」, to protect, and 「士|し」, a professional. A professional who protects with speech. That 「士」 ending appears in other jobs. 「消防士|しょうぼうし」, firefighter. 「運転士」, driver. 「力士|りきし」, a sumo wrestler!" },
    { tag: "Culture corner", explain: "Japan has far fewer lawyers per person than the U.S. The bar exam is famously hard. And Japanese people tend to settle disputes by talking rather than going to court. So a 「弁護士」 is a rare and respected job." }
  ],
  "おかあさん|": [
    { tag: "Don't mix it up", explain: "Your own mom, when talking to others, is 「母|はは」. 「母は先生です」. Someone else's mother is 「お母さん」. But when you talk to your own mom, you call her 「お母さん」. It switches based on who you're talking to. Very Japanese." },
    { tag: "Word family", explain: "Casual versions, 「ママ」, used by kids and some adults, and 「おかん」, in western Japan. And 「お」 plus 「かあ」 plus 「さん」. Grandmother is 「おばあさん」, and aunt is 「おばさん」. Notice the long vowel difference." }
  ],
  "おとうさん|": [
    { tag: "Don't mix it up", explain: "Like mother, your own father, to others, is 「父|ちち」. 「父は会社員です」. Someone else's father is 「お父さん」. And you call your own dad 「お父さん」 to his face. Kids often say 「パパ」. And in western Japan, 「おとん」." },
    { tag: "Culture corner", explain: "Japanese families often call each other by role, not name. Parents call each other 「お父さん」 and 「お母さん」 once they have kids. And older siblings are called 「お兄ちゃん」 or 「お姉ちゃん」 by younger ones, rarely by name." }
  ],
  "おねえさん|": [
    { tag: "Real-life Japanese", explain: "「お姉さん」 is also how you'd call a young woman you don't know, like miss. A kid might say 「お姉さん」 to a shop clerk. And your own older sister to others is 「姉|あね」. 「姉は大学生です」. Casual with family, 「お姉ちゃん」." },
    { tag: "Word family", explain: "Japanese family words split by older and younger. Older sister, 「姉|あね」. Younger sister, 「妹|いもうと」. Older brother, 「兄|あに」. Younger brother, 「弟|おとうと」. And siblings in general, 「兄弟|きょうだい」, older and younger brothers." }
  ],
  "おにいさん|": [
    { tag: "Real-life Japanese", explain: "「お兄さん」 is also used for young men you don't know. Shop workers, waiters. 「お兄さん、すみません」. And your own big brother to others is 「兄|あに」. 「兄は弁護士です」. And casually, 「お兄ちゃん」, often heard in anime." },
    { tag: "Memory hook", explain: "The kanji 「兄」 has a big mouth, 「口|くち」, on top of legs. Picture your older brother, all mouth, always telling you what to do. And 「にい」, sounds like knee. Big brother sits on your knee." }
  ],
  "いもうと|": [
    { tag: "Don't mix it up", explain: "「妹|いもうと」 is your own little sister. For someone else's, add 「さん」, 「妹さん」. 「妹さんはおいくつですか」. How old is your little sister? Don't add 「さん」 to your own family members when talking to others." },
    { tag: "Memory hook", explain: "The kanji 「妹」 is 「女|おんな」, woman, plus 「未|み」, not yet. A girl who isn't grown yet. And the sound 「いもうと」, imagine your little sister saying, I'm-o-too! I want to come too! Little sisters always want to come along." }
  ],
  "おとうと|": [
    { tag: "Don't mix it up", explain: "Careful, 「弟|おとうと」, younger brother, sounds a lot like 「お父さん|おとうさん」, father. 「おとうと」 has no 「さん」 and a slightly different ending. Say them slowly. 「お、と、う、と」, younger brother. 「お、と、う、さ、ん」, father." },
    { tag: "Real-life Japanese", explain: "「弟が一人います」. I have one younger brother. Notice 「います」, because people use 「いる」. And someone else's brother, 「弟さん」. A common question, 「兄弟がいますか|きょうだいがいますか」. Do you have siblings?" }
  ],
  "かがく|": [
    { tag: "Don't mix it up", explain: "Two 「かがく」. 「科学」, science, the general field. 「化学」, chemistry. Same sound! So people sometimes call chemistry 「ばけがく」, using another reading of 「化」, to make it clear. A classroom trick to avoid confusion." },
    { tag: "Word family", explain: "「科|か」 means a department or branch. 「教科書|きょうかしょ」, textbook. 「外科|げか」, surgery. And 「学|がく」, learning. Science is branch learning. And 「科学者|かがくしゃ」, a scientist. Your space lab friends are 「科学者」." }
  ],
  "せいじ|": [
    { tag: "Word family", explain: "The kanji are 「政治」. 「政|せい」, government, and 「治|じ」, to rule or cure. 「政治家|せいじか」, a politician. 「政府|せいふ」, the government. And 「治|なお」 also means to heal, as in 「治る|なおる」, to get better. Govern and heal, one kanji." },
    { tag: "Culture corner", explain: "Japan's parliament is called the 「国会|こっかい」, the national meeting. It has two houses. And the head of government is the 「首相|しゅしょう」, prime minister, from lesson seventeen. Many Japanese people avoid talking 「政治」 in casual conversation." }
  ],
  "ぶんがく|": [
    { tag: "Word family", explain: "「文|ぶん」 means writing, and 「学|がく」, learning. Literature is the study of writing. 「文化|ぶんか」, culture. 「文法|ぶんぽう」, grammar. 「作文|さくぶん」, a composition. And 「日本文学|にほんぶんがく」, Japanese literature." },
    { tag: "Culture corner", explain: "Japan has one of the oldest novels in the world, 「源氏物語|げんじものがたり」, The Tale of Genji, written by a woman, Murasaki Shikibu, about a thousand years ago. And Japan has had Nobel Prize winners in literature, like Kawabata and Ōe." }
  ]
});
/* Lesson 2 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "かさ|傘": [
    { tag: "Memory hook", explain: "The kanji 「傘」 is a picture of an umbrella! A roof on top, four little people underneath, and a handle down the middle. People huddled under an umbrella. One of the most picture-like kanji there is." },
    { tag: "Culture corner", explain: "Japan uses tons of cheap clear plastic umbrellas, 「ビニール傘|ビニールがさ」, sold at every convenience store. Shops have umbrella stands at the door, and many people leave umbrellas behind. Lost umbrellas are one of the most common items at train lost and found." }
  ],
  "くつ|靴": [
    { tag: "Real-life Japanese", explain: "「くつをはく」, to put on shoes, and 「くつを脱ぐ|くつをぬぐ」, to take them off. Essential in Japan. And 「くつした」, socks, under the shoes. And 「上履き|うわばき」, indoor shoes students wear at school." },
    { tag: "Memory hook", explain: "The kanji 「靴」 has 「革|かわ」, leather, on the left, and 「化|か」, change, on the right. Leather changed into shoes. And 「くつ」 sounds like cute! Picture a pair of cute shoes." }
  ],
  "さかな|魚": [
    { tag: "Memory hook", explain: "The kanji 「魚」 is a picture of a fish. Head on top, scaly body in the middle, and the four dots at the bottom are the tail fin. Turn it sideways and you can see it swimming. Many fish names use it, like 「鮭|さけ」, salmon, and 「鮪|まぐろ」, tuna." },
    { tag: "Culture corner", explain: "Japan eats a lot of fish, raw and cooked. Sushi, sashimi, grilled fish for breakfast. Tokyo's famous fish market moved from Tsukiji to 「豊洲|とよす」 in 2018, but the Tsukiji outer market is still full of food stalls. And 「魚屋|さかなや」 is a fish shop." }
  ],
  "しんぶん|新聞": [
    { tag: "Memory hook", explain: "「新|しん」, new, and 「聞|ぶん」, to hear. A newspaper is new things heard. And 「聞|きく」 is a gate with an ear inside, 「門」 and 「耳」. Your ear at the gate, listening for news." },
    { tag: "Word family", explain: "「新|しん」 means new. 「新幹線|しんかんせん」, the bullet train, the new trunk line. 「新年|しんねん」, New Year. 「新しい|あたらしい」, new. And 「新聞」, newspaper. And 「新聞記者|しんぶんきしゃ」, a newspaper reporter." }
  ],
  "じてんしゃ|自転車": [
    { tag: "Culture corner", explain: "Bikes are everywhere in Japan. People ride the 「ママチャリ」, the mom bike, a heavy bike with a basket, often with a child seat. You park at bike lots near stations. And watch out, illegally parked bikes get towed by the city." },
    { tag: "Word family", explain: "「自|じ」, self, 「転|てん」, turn, 「車|しゃ」, vehicle. A self-turning vehicle. Other 「車」 words. 「電車|でんしゃ」, train. 「車|くるま」, car. 「駐車場|ちゅうしゃじょう」, parking lot. And 「自動車|じどうしゃ」, automobile, self-moving vehicle." }
  ],
  "さいふ|財布": [
    { tag: "Word family", explain: "「財|ざい」 means money or wealth, with the shell, 「貝」, on the left. 「布|ふ」 is cloth. So a money cloth. 「財産|ざいさん」 is property, assets. And the shell shows up in money kanji everywhere, like 「買う|かう」, to buy." },
    { tag: "Culture corner", explain: "If you lose your 「財布」 in Japan, there's a good chance you'll get it back, cash and all. People take found items to the 「交番|こうばん」, police box. Also, Japan still uses a lot of cash, so 「財布」 is important. Many people carry coin purses for all the coins." }
  ],
  "やさい|野菜": [
    { tag: "Word family", explain: "「野|や」 means field or wild, and 「菜|さい」 means greens. 「野球|やきゅう」, baseball, field ball. 「野原|のはら」, a field. And 「菜」 has the plant radical on top. 「野菜ジュース」, vegetable juice, is sold in every convenience store." },
    { tag: "Real-life Japanese", explain: "「野菜が好きです」. I like vegetables. And at a restaurant, 「野菜を多めにお願いします」. Extra vegetables, please. And some Japanese veggies you'll see, 「だいこん」, a big white radish, 「なす」, eggplant, and 「ねぎ」, green onion." }
  ],
  "いす|": [
    { tag: "Real-life Japanese", explain: "「いすに座ってください|いすにすわってください」. Please sit on the chair. Notice 「に」 for where you sit. And traditional Japanese rooms have no chairs, people sit on cushions, 「ざぶとん」, on tatami mats. 「いす」 came with Western-style living." },
    { tag: "Memory hook", explain: "The kanji is 「椅子」, with 「子|す」 as a little thing. Sound hook, 「いす」, ease. A chair is where you sit at your ease. Imagine sinking into a chair and sighing, ease. 「いす」." }
  ],
  "つくえ|机": [
    { tag: "Memory hook", explain: "The kanji 「机」 has 「木|き」, wood, on the left, and on the right, a little table shape with legs. A wooden table. And the sound 「つくえ」, think two-queue. Two queues of desks lined up in a classroom." },
    { tag: "Real-life Japanese", explain: "「机の上に本があります」. There's a book on the desk. Lesson four's location phrases. 「上|うえ」, on, 「下|した」, under, 「中|なか」, inside. And Japanese students clean their own classroom desks every day, called 「そうじ」." }
  ],
  "ぼうし|帽子": [
    { tag: "Real-life Japanese", explain: "Hats use the verb 「かぶる」. 「ぼうしをかぶる」, to put on a hat. And Japanese kids in kindergarten often wear matching yellow or colored hats so teachers can spot them. Elementary schoolers wear yellow safety hats walking to school." },
    { tag: "Word family", explain: "「帽|ぼう」 means hat, with the cloth radical, 「巾」. And 「子|し」 is just a little thing. Hat types, 「野球帽|やきゅうぼう」, baseball cap. 「麦わら帽子|むぎわらぼうし」, straw hat, made from wheat straw. Famous from One Piece." }
  ],
  "これ|": [
    { tag: "Word family", explain: "Here's the こそあど family, the most useful system in Japanese. 「これ」, this, near me. 「それ」, that, near you. 「あれ」, that over there. 「どれ」, which one. Then the same pattern for places, 「ここ」, 「そこ」, 「あそこ」, 「どこ」. Learn the pattern once." },
    { tag: "Real-life Japanese", explain: "Shopping in Japan, point and say, 「これをください」. This one, please. Works anywhere, even when you don't know the name. And 「これは何ですか」. What is this? You can survive a whole trip with these two." }
  ],
  "それ|": [
    { tag: "Real-life Japanese", explain: "「それ」 is also used for things just mentioned in conversation. 「それはいいですね」. That sounds good. And 「それで？」, and then? And a teen classic, 「それな！」, exactly, so true! Slang for total agreement." },
    { tag: "Don't mix it up", explain: "「それ」 is that, near the listener. 「あれ」 is that, far from both of us. In English, both are that. So if your friend is holding a book, it's 「それ」. If it's across the room, 「あれ」. Think of distance from you and from them." }
  ],
  "あれ|": [
    { tag: "Real-life Japanese", explain: "「あれ？」 with a rising tone means, huh? that's weird. 「あれ？さいふがない」. Huh? My wallet's gone. You'll hear it constantly. And 「あれ」 also means that thing, you know, when you forget the word. 「あれ、取って」. Pass me that thing." },
    { tag: "Word family", explain: "The あ words point to things far away, or shared memories. 「あれ」, that over there. 「あそこ」, over there. 「あの人」, that person. And 「あの時|あのとき」, that time, back then, which we both remember. Distance in space and in time." }
  ],
  "どれ|": [
    { tag: "Real-life Japanese", explain: "「どれがいいですか」. Which one is good? Notice 「が」, not 「は」, after question words. Always 「どれが」. And shops, 「どれにしますか」. Which will you choose? Answer by pointing, 「これにします」." },
    { tag: "Don't mix it up", explain: "「どれ」 is which, out of three or more. For two things, use 「どちら」 or 「どっち」. 「コーヒーと紅茶、どっちがいい？」 Coffee or tea, which do you prefer? And 「どの」 goes before a noun, 「どの本」, which book." }
  ],
  "あそこ|": [
    { tag: "Real-life Japanese", explain: "「トイレはあそこです」. The restroom is over there. And pointing, 「あそこに座りましょう」. Let's sit over there. In Japan, pointing with a finger can feel rude, so people often gesture with an open hand." },
    { tag: "Don't mix it up", explain: "Watch the pattern. 「ここ」, 「そこ」, 「あそこ」, 「どこ」. Why 「あそこ」 and not 「あこ」? It's just irregular, a little extra 「そ」. Everything else in the family is regular. 「あれ」, 「あの」, 「あっち」, but 「あそこ」." }
  ],
  "どこ|": [
    { tag: "Real-life Japanese", explain: "The traveler's best friend, 「〜はどこですか」. Where is? 「駅はどこですか」. Where's the station? 「トイレはどこですか」. Where's the restroom? And 「どこに行きますか」. Where are you going?" },
    { tag: "Word family", explain: "Add 「か」 to question words and they become something. 「どこか」, somewhere. 「どこかに行きたい」, I want to go somewhere. And 「でも」 makes them every. 「どこでも」, anywhere. Like Doraemon's 「どこでもドア」, the door to anywhere." }
  ],
  "だれ|": [
    { tag: "Real-life Japanese", explain: "「だれですか」. Who is it? And politely, 「どなたですか」. And 「だれの本ですか」. Whose book is it? Add 「の」 for whose. And 「だれか」, someone, 「だれか助けて！」, someone, help! And 「だれも」, nobody, with a negative." },
    { tag: "Memory hook", explain: "Sound hook, 「だれ」, darling? Who's that, darling? And the kanji, rarely used, is 「誰」, with the speech part on the left. Asking with words, who? Most people just write it in hiragana." }
  ],
  "とんかつ|": [
    { tag: "Word family", explain: "「とん」 is pork, from the kanji 「豚|とん」, and 「かつ」 comes from English cutlet. A half Japanese, half English word! Related dishes, 「カツ丼|カツどん」, cutlet on rice with egg, and 「カツカレー」, cutlet with curry." },
    { tag: "Culture corner", explain: "Students eat 「カツ丼」 before exams, because 「かつ」 sounds like 「勝つ|かつ」, to win! A food pun for good luck. It's a real tradition. And at 「とんかつ」 restaurants, you often grind your own sesame seeds for the sauce, and get free cabbage refills." }
  ],
  "にく|": [
    { tag: "Word family", explain: "Add the animal for the meat type. 「牛肉|ぎゅうにく」, beef, cow meat. 「豚肉|ぶたにく」, pork, pig meat. 「鶏肉|とりにく」, chicken. And 「焼肉|やきにく」, Korean-style grilled meat, a huge favorite. Easy system." },
    { tag: "Culture corner", explain: "Japanese beef, 「和牛|わぎゅう」, is famous worldwide, especially Kobe beef, with lots of marbling. And historically, Japan barely ate meat for over a thousand years, partly due to Buddhism. Meat eating took off only in the late eighteen-hundreds." }
  ],
  "メニュー|": [
    { tag: "Culture corner", explain: "Japanese restaurants often have plastic food displays in the window, 「食品サンプル|しょくひんサンプル」, realistic models of every dish. Super helpful when you can't read the 「メニュー」. Just point. And some restaurants have picture menus or touch screens." },
    { tag: "Real-life Japanese", explain: "「メニューをください」. The menu, please. Or 「メニュー、お願いします」. And 「英語のメニューはありますか」. Do you have an English menu? Many places in cities do. And the set meal is 「定食|ていしょく」, a great deal." }
  ],
  "えんぴつ|": [
    { tag: "Word family", explain: "The kanji are 「鉛筆」. 「鉛|えん」, lead, and 「筆|ひつ」, brush or writing tool. A lead brush. And 「筆|ふで」 alone is a calligraphy brush. Notice 「ひつ」 becomes 「ぴつ」. Japanese students use pencils, not pens, for tests." },
    { tag: "Real-life Japanese", explain: "Count pencils with 「本|ほん」, for long thin things. 「えんぴつ一本|いっぽん」, one pencil. 「二本|にほん」, two. 「三本|さんぼん」, three. And 「シャーペン」, mechanical pencil, from the Sharp brand." }
  ],
  "かばん|": [
    { tag: "Culture corner", explain: "Japanese elementary kids carry a 「ランドセル」, a sturdy leather backpack, for all six years. They're expensive, often a gift from grandparents. The word comes from Dutch ransel. You'll see them in red and black, and now every color." },
    { tag: "Real-life Japanese", explain: "「かばんの中に何がありますか」. What's in your bag? And 「かばんを持つ」, to carry a bag. And in lesson sixteen, 「かばんに入れる」, to put in a bag. People also say 「バッグ」, especially for fashionable bags." }
  ],
  "ジーンズ|": [
    { tag: "Real-life Japanese", explain: "Pants use 「はく」. 「ジーンズをはく」, to wear jeans. And Japanese denim is famous, especially from Kojima, in Okayama, called the denim capital of Japan. People also say 「ジーパン」, jeans pants, an older word." },
    { tag: "Sound it out", explain: "English jeans becomes 「ジーンズ」. The long ee is 「ジー」, then 「ン」, then the final s becomes 「ズ」. Japanese keeps the plural s, like 「ブーツ」, boots. You'll see other plurals in loanwords, like 「スニーカー」, sneaker, which often doesn't." }
  ],
  "じしょ|": [
    { tag: "Word family", explain: "The kanji are 「辞書」. 「辞|じ」, words, and 「書|しょ」, to write, or a book. A word book. Other 「書」 words, 「書く|かく」, to write, 「図書館|としょかん」, library. And 「教科書|きょうかしょ」, textbook." },
    { tag: "Real-life Japanese", explain: "「辞書を引く|じしょをひく」, to look up in a dictionary. Literally pull. And today people use phone apps, but say the same thing. 「この言葉を辞書で調べて」. Look this word up. And an electronic dictionary is 「電子辞書|でんしじしょ」." }
  ],
  "テープ|": [
    { tag: "Real-life Japanese", explain: "「テープ」 means tape, both sticky tape and recording tape. Sticky tape is also 「セロテープ」, from a brand name, like Scotch tape. And 「ガムテープ」, packing tape. 「ビデオテープ」, a videotape, from Genki's earlier era." },
    { tag: "Sound it out", explain: "The long a sound of tape becomes 「テー」, with the long mark. Then p becomes 「プ」. Japanese can't end on a consonant. Same as 「ケーキ」, cake, and 「ゲーム」, game. Long vowel plus a final vowel." }
  ],
  "トレーナー|": [
    { tag: "Don't mix it up", explain: "Surprise! 「トレーナー」 means sweatshirt in Japanese, not a coach. It's Japanese-made English. A coach or personal trainer is also 「トレーナー」, so context matters. A hooded sweatshirt is a 「パーカー」, which in English is a heavy coat." },
    { tag: "Real-life Japanese", explain: "「トレーナーを着る|トレーナーをきる」, to put on a sweatshirt. Upper body, so 「着る」. And winter in Japan, 「寒いから、トレーナーを着て」. It's cold, put on a sweatshirt. The word comes from training wear." }
  ],
  "ノート|": [
    { tag: "Don't mix it up", explain: "「ノート」 is a notebook, not a note. A small note or memo is 「メモ」. So 「ノートを取る」, to take notes in a notebook. And 「ノートパソコン」, a laptop, notebook computer. Japanese shortens notebook to note." },
    { tag: "Culture corner", explain: "Japanese stationery is a world of its own. Notebooks with grids for kanji practice, colorful pens, and erasable pens. Brands like Campus notebooks are in every student's bag. Stores like Loft and Tokyu Hands are stationery heaven." }
  ],
  "ペン|": [
    { tag: "Real-life Japanese", explain: "「ペンを貸してください|ペンをかしてください」. Please lend me a pen. And 「ボールペン」, ballpoint pen, is the everyday pen. And Japan's famous erasable pen, 「フリクション」, from Pilot, lets you erase ink. Students love them." },
    { tag: "Word family", explain: "Writing tools. 「ペン」, pen. 「えんぴつ」, pencil. 「消しゴム|けしゴム」, eraser. 「マーカー」, marker. 「筆|ふで」, brush. And 「ペンネーム」, pen name. Count them all with 「本|ほん」, long thin things." }
  ],
  "おてあらい|": [
    { tag: "Don't mix it up", explain: "Restroom words. 「お手洗い|おてあらい」, polite, hand-washing place. 「トイレ」, the most common. 「化粧室|けしょうしつ」, powder room, in fancy places. And 「便所|べんじょ」, old and blunt. 「お手洗い」 is a safe, polite choice." },
    { tag: "Culture corner", explain: "Japanese toilets are famous. Heated seats, bidet buttons, even a sound button, 「音姫|おとひめ」, that plays flushing sounds for privacy. And many homes have separate toilet slippers you change into. Don't forget to change back!" }
  ],
  "たかい|": [
    { tag: "Real-life Japanese", explain: "「たかい」 means both expensive and tall or high. 「この時計は高いです」. This watch is expensive. 「高い山|たかいやま」, a tall mountain. Context tells you which. And the opposite for price is 「安い|やすい」, cheap, and for height, 「低い|ひくい」, low." },
    { tag: "Word family", explain: "The kanji 「高」 is a picture of a tall building, a tower. 「高校|こうこう」, high school. 「最高|さいこう」, the best, the highest. And 「高さ|たかさ」, height. And 「たかい、たかい」 is what parents say lifting a baby up in the air." }
  ],
  "こくばん|": [
    { tag: "Word family", explain: "The kanji are 「黒板」. 「黒|こく」, black, and 「板|ばん」, board. Literally blackboard, just like English. And today many are green, but still called 「黒板」. A whiteboard is 「ホワイトボード」. And chalk is 「チョーク」." },
    { tag: "Culture corner", explain: "Japanese classrooms often have a duty student, 「日直|にっちょく」, who cleans the 「黒板」 between classes. On graduation day, students sometimes draw huge chalk art on the blackboard as a surprise. They're amazing." }
  ],
  "けしゴム|": [
    { tag: "Word family", explain: "Half Japanese, half Dutch! 「消す|けす」, to erase, and 「ゴム」, rubber, from Dutch gom. Erase rubber. Later you'll learn 「消す」 means to turn off too. 「電気を消す」, turn off the light. And 「消える|きえる」, to disappear." },
    { tag: "Culture corner", explain: "Japanese erasers are amazing, and some are tiny food or animal shapes that kids collect. In schools, there was a game where you flicked erasers to knock others off the desk. Shopping for erasers is a whole hobby in Japan." }
  ],
  "ビデオ|": [
    { tag: "Sound it out", explain: "English video becomes 「ビデオ」, with v turning into 「ビ」. Japanese has no v sound, so b takes its place. 「バイオリン」, violin. 「テレビ」, television. Some people write 「ヴ」 for v, but most don't." },
    { tag: "Real-life Japanese", explain: "Genki was written when people used VCRs. Today, you'd say 「動画|どうが」, a moving picture, for a video online. 「動画を見る」, watch a video. Or 「ユーチューブ」. But 「ビデオ通話|ビデオつうわ」, video call, still uses the word." }
  ],
  "ドア|": [
    { tag: "Don't mix it up", explain: "Two door words. 「ドア」, a Western-style hinged door. 「戸|と」, a traditional sliding door, like the paper 「ふすま」 or 「しょうじ」. And 「入口|いりぐち」, entrance. Trains say 「ドアが閉まります」, the doors are closing." },
    { tag: "Culture corner", explain: "Taxi doors in Japan open and close automatically! The driver controls them. Don't try to close it yourself. And many Japanese homes have sliding doors inside. So 「ドア」 is mostly for front doors and Western rooms." }
  ]
});
/* Lesson 3 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "たべる|食べる": [
    { tag: "Real-life Japanese", explain: "Before eating, say 「いただきます」, I humbly receive. After, 「ごちそうさまでした」, thank you for the meal. And 「何を食べますか」, what will you eat? And casually, 「食べよう！」, let's eat! The let's form comes in lesson five." },
    { tag: "Word family", explain: "「食|しょく」 is food and eating. 「食べ物|たべもの」, food, eating things. 「食事|しょくじ」, a meal. 「食堂|しょくどう」, a cafeteria. 「和食|わしょく」, Japanese food. And 「朝食|ちょうしょく」, breakfast, on hotel signs." }
  ],
  "のむ|飲む": [
    { tag: "Don't mix it up", explain: "Japanese uses 「飲む」 for more than drinks. 「薬を飲む|くすりをのむ」, to take medicine. 「スープを飲む」, to have soup. Swallowing without chewing is 「飲む」. So don't say 「薬を食べる」. And 「飲み会|のみかい」 is a drinking party." },
    { tag: "Word family", explain: "「飲み物|のみもの」, a drink. 「飲み会|のみかい」, a drinking party, huge in Japanese work culture. 「飲み放題|のみほうだい」, all you can drink. And 「飲酒運転|いんしゅうんてん」, drunk driving, on warning signs. Japan has zero tolerance." }
  ],
  "ねる|寝る": [
    { tag: "Don't mix it up", explain: "「寝る」 is to go to bed, lie down, or sleep. 「眠る|ねむる」 is specifically to be asleep. And 「眠い|ねむい」, sleepy. 「十一時に寝ます」. I go to bed at eleven. And 「寝坊|ねぼう」, oversleeping, is in lesson sixteen." },
    { tag: "Real-life Japanese", explain: "At night, 「おやすみなさい」, good night. Casually, 「おやすみ」. And 「もう寝る」, I'm going to bed now. And Japanese people often sleep on 「布団|ふとん」, a mattress on the floor, folded away in the morning." }
  ],
  "よむ|読む": [
    { tag: "Word family", explain: "「読|どく」 shows up in 「読書|どくしょ」, reading books. 「読者|どくしゃ」, readers. And 「読み方|よみかた」, how to read, a word reading. That's Yomikata! Your own app name. 「この漢字の読み方は？」, how do you read this kanji?" },
    { tag: "Real-life Japanese", explain: "「本を読みます」, I read books. And 「空気を読む|くうきをよむ」, read the air. A famous Japanese phrase, meaning to sense the mood and act appropriately. Someone who can't is called 「KY」, from 「空気が読めない」." }
  ],
  "えいが|映画": [
    { tag: "Word family", explain: "「映|えい」, to reflect or project, and 「画|が」, a picture. A projected picture. 「映画館|えいがかん」, a movie theater. 「漫画|まんが」, manga, uses the same 「画」. And 「画面|がめん」, a screen." },
    { tag: "Culture corner", explain: "Japanese movie theaters are quiet. People stay until the credits finish, then leave. Studio Ghibli films like Spirited Away are classics. And Japanese movies often come out months after the US, so friends ask, 「もう見た？」, have you seen it yet?" }
  ],
  "おんがく|音楽": [
    { tag: "Memory hook", explain: "「音|おん」, sound, and 「楽|がく」, enjoyment. Music is enjoyable sound. And 「楽|たの」 is the same kanji as in 「楽しい|たのしい」, fun. So music is literally sound fun. Easy to remember." },
    { tag: "Real-life Japanese", explain: "「どんな音楽が好きですか」. What kind of music do you like? Great conversation starter. And Japanese music, J-pop, city pop, anime songs, and 「演歌|えんか」, traditional ballads. And 「音楽を聞く|おんがくをきく」, to listen to music." }
  ],
  "おちゃ|": [
    { tag: "Culture corner", explain: "「お茶|おちゃ」 means green tea by default. Black tea is 「紅茶|こうちゃ」, red tea. And Japanese tea ceremony is 「茶道|さどう」. Bottles of cold unsweetened green tea are in every vending machine. They're super refreshing in summer." },
    { tag: "Real-life Japanese", explain: "「お茶でもどうですか」. How about some tea? Or a casual invitation, 「お茶しない？」, want to grab a drink? It means go to a café, not just tea. And the brown 「麦茶|むぎちゃ」, barley tea, is a classic summer drink." }
  ],
  "がっこう|学校": [
    { tag: "Word family", explain: "「学|がく」 becomes 「がっ」 before 「こう」. 「学校」 is learning plus school building. 「校|こう」 shows up in 「高校|こうこう」, high school, and 「校長|こうちょう」, principal. And 「小学校|しょうがっこう」, elementary school." },
    { tag: "Real-life Japanese", explain: "「学校に行きます」. I go to school. And 「学校はどうだった？」. How was school? Parents ask that every day. And Japanese school year starts in April, with cherry blossoms. Ends in March." }
  ],
  "としょかん|図書館": [
    { tag: "Word family", explain: "「図|と」, drawings, 「書|しょ」, books, 「館|かん」, a large building. 「館」 is in big public buildings. 「美術館|びじゅつかん」, art museum. 「博物館|はくぶつかん」, museum. 「映画館|えいがかん」, cinema. 「大使館|たいしかん」, embassy." },
    { tag: "Real-life Japanese", explain: "「図書館で勉強します」. I study at the library. 「で」 marks where you do something. Japanese students line up early at libraries before exams for seats. And to borrow a book, 「本を借りる|ほんをかりる」, from lesson six." }
  ],
  "テレビ|": [
    { tag: "Sound it out", explain: "Television is long, so Japanese chopped it to 「テレビ」. Japanese loves clipping words. 「リモコン」, remote control. 「エアコン」, air conditioner. 「パソコン」, personal computer. 「テレビ」 is the original clip." },
    { tag: "Culture corner", explain: "Japanese TV is famous for variety shows, with comedians reacting, and colorful text, called 「テロップ」, popping up on screen. Watching Japanese TV is great listening practice because the subtitles show what people say." }
  ],
  "ざっし|雑誌": [
    { tag: "Word family", explain: "「雑|ざつ」 means mixed or miscellaneous. 「雑|ざつ」 alone, sloppy. And 「誌|し」, a record or journal. A mixed record. And 「雑音|ざつおん」, noise, mixed sound. Notice 「ざつ」 becomes 「ざっ」 before 「し」." },
    { tag: "Culture corner", explain: "Japanese convenience stores have magazine racks by the windows. People stand and read for free, called 「立ち読み|たちよみ」, standing reading. It's so common there's a word for it. Some stores now seal magazines to discourage it." }
  ],
  "スポーツ|": [
    { tag: "Real-life Japanese", explain: "「スポーツをする」, to play sports. And 「何かスポーツをしますか」. Do you play any sports? Japan's big ones are baseball, 「野球|やきゅう」, and soccer, 「サッカー」. And sumo, 「相撲|すもう」, the national sport." },
    { tag: "Sound it out", explain: "English sports starts with s plus p together. Japanese inserts a vowel, 「ス」. Then 「ポー」 for the long o and r. Then 「ツ」 for ts. Same in 「スポーツジム」. And the adjective, 「スポーティー」, sporty." }
  ],
  "デート|": [
    { tag: "Don't mix it up", explain: "「デート」 means a romantic date only. A calendar date is 「日付|ひづけ」. So 「デートの日付」 is the date of your date! And going out with friends isn't 「デート」. Use 「遊びに行く|あそびにいく」, to hang out." },
    { tag: "Real-life Japanese", explain: "「デートに行く」, to go on a date. And 「デートしよう」, let's go on a date. Popular date spots in Japan are aquariums, amusement parks, and illuminations in winter. Christmas Eve is a big date night in Japan." }
  ],
  "テニス|": [
    { tag: "Culture corner", explain: "Soft tennis, 「ソフトテニス」, with a squishy rubber ball, is a Japanese invention and very popular in junior high clubs. And the manga 「テニスの王子様|テニスのおうじさま」, The Prince of Tennis, made tennis cool for a generation." },
    { tag: "Real-life Japanese", explain: "「テニスをします」. I play tennis. With most sports, use 「する」. And 「テニスが上手ですね」. You're good at tennis. Answer modestly, 「いえいえ」. And 「テニスコート」, tennis court." }
  ],
  "アイスクリーム|": [
    { tag: "Real-life Japanese", explain: "People shorten it to 「アイス」. 「アイス食べたい」. I want ice cream. And Japan has unique flavors, green tea, 「抹茶|まっちゃ」, black sesame, and sweet potato. And soft serve is 「ソフトクリーム」." },
    { tag: "Don't mix it up", explain: "Careful, 「アイス」 means ice cream, not ice! Ice is 「氷|こおり」. So 「アイスコーヒー」 is iced coffee, but 「アイス」 alone is ice cream. And 「氷を入れてください」, please add ice." }
  ],
  "ハンバーガー|": [
    { tag: "Don't mix it up", explain: "「ハンバーガー」 is in a bun. 「ハンバーグ」 is a hamburger steak, a patty on a plate with sauce and rice. Totally different dishes! 「ハンバーグ」 is a Japanese home-cooking favorite. Kids love it." },
    { tag: "Culture corner", explain: "Japan has its own burger chains, like MOS Burger, with rice burgers that use rice patties for buns. And McDonald's is called 「マクド」 in Osaka and 「マック」 in Tokyo. A famous regional rivalry." }
  ],
  "おさけ|お酒": [
    { tag: "Don't mix it up", explain: "「お酒」 means alcohol in general. Japanese rice wine specifically is 「日本酒|にほんしゅ」. So 「お酒が飲めない」 means I can't drink alcohol. And beer is 「ビール」. Wine, 「ワイン」. Shochu, 「焼酎|しょうちゅう」." },
    { tag: "Culture corner", explain: "Drinking etiquette, never pour your own drink. Pour for others, and they'll pour for you. And the toast is 「乾杯|かんぱい」, from lesson eight. Drinking age in Japan is twenty. And 「お酒に強い」 means can hold your liquor." }
  ],
  "コーヒー|": [
    { tag: "Culture corner", explain: "Japan has a rich coffee culture. Old-style coffee shops, 「喫茶店|きっさてん」, serve hand-drip coffee. And canned coffee from vending machines, hot in winter! The machines have red labels for hot drinks and blue for cold." },
    { tag: "Sound it out", explain: "Coffee came from Dutch koffie, which is why it's 「コーヒー」, not something like kofi. The f becomes 「ヒ」. And it's written in kanji as 「珈琲」, which looks fancy and shows up on café signs." }
  ],
  "みず|水": [
    { tag: "Memory hook", explain: "The kanji 「水」 is a picture of flowing water. A line down the middle, with splashes on the sides. And it's 「水曜日|すいようび」, Wednesday, water day. And the three dots on the left of many kanji are this water, like 「海|うみ」, sea." },
    { tag: "Culture corner", explain: "Japanese restaurants give you free water or tea automatically, often ice water. Refills too. And tap water in Japan is safe to drink. Ask, 「お水をください」, water, please. And notice the polite 「お」." }
  ],
  "あさごはん|朝ご飯": [
    { tag: "Culture corner", explain: "A traditional Japanese breakfast is rice, miso soup, grilled fish, pickles, and natto, fermented soybeans. Many people now eat toast and coffee. And hotels offer 「和食|わしょく」, Japanese, or 「洋食|ようしょく」, Western breakfast." },
    { tag: "Word family", explain: "The meal family. 「朝ご飯」, breakfast. 「昼ご飯|ひるごはん」, lunch. 「晩ご飯|ばんごはん」, dinner. And 「ご飯|ごはん」 means rice and meal. Rice is so central that the word for cooked rice means meal." }
  ],
  "ひるごはん|昼ご飯": [
    { tag: "Culture corner", explain: "Japanese lunch is often a 「弁当|べんとう」, a boxed lunch, homemade or from a convenience store. Parents make beautiful 「キャラ弁」, character bentos, for kids. And many restaurants have cheap lunch sets called 「ランチ」." },
    { tag: "Real-life Japanese", explain: "「昼ご飯、何食べる？」. What do you want for lunch? Casually, people say 「お昼|おひる」 for lunch. 「お昼にしよう」. Let's have lunch. And 「昼休み|ひるやすみ」 is lunch break." }
  ],
  "ばんごはん|晩ご飯": [
    { tag: "Word family", explain: "Two words for dinner. 「晩ご飯|ばんごはん」, and 「夕ご飯|ゆうごはん」. Both mean dinner, both common. Formal, 「夕食|ゆうしょく」. And 「晩|ばん」, evening, is in 「今晩|こんばん」, tonight, and 「こんばんは」, good evening." },
    { tag: "Real-life Japanese", explain: "「晩ご飯は何がいい？」. What do you want for dinner? And 「晩ご飯を作る」, to make dinner. A classic Japanese mom question to her family. The classic kid answer, 「何でもいい」, anything is fine. Which isn't helpful." }
  ],
  "いえ|家": [
    { tag: "Don't mix it up", explain: "「家|いえ」 is the building, the house. 「うち」 is home, where you belong, my place. 「うちに帰る」, go home. 「大きい家」, a big house. Both are written 「家」 sometimes. And 「家族|かぞく」, family, uses it too." },
    { tag: "Memory hook", explain: "The kanji 「家」 is a roof, with a pig, 「豕」, underneath. In ancient China, families kept pigs inside the house. So a house is a roof over a pig. Strange, but you won't forget it." }
  ],
  "うち|": [
    { tag: "Real-life Japanese", explain: "「うち」 also means our or my group. 「うちの子」, our kid. 「うちの会社」, our company. And 「うちに来ませんか」. Won't you come over to my place? It's warm and casual. Young women in western Japan even use 「うち」 to mean I." },
    { tag: "Culture corner", explain: "The 「うち」 and 「そと」 idea, inside and outside groups, shapes Japanese culture. Your 「うち」 is family, company, team. You act differently with them. And you speak humbly about 「うち」 members to outsiders. It's why 「母」 and 「お母さん」 differ." }
  ],
  "カフェ|": [
    { tag: "Sound it out", explain: "The small 「ェ」 helps make the fe sound, 「フェ」. Japanese uses small vowels to make new sounds. 「フェ」, 「ファ」, 「フィ」. Café, fan, film. These combinations were invented just for loanwords." },
    { tag: "Culture corner", explain: "Japan has every kind of 「カフェ」. Cat cafés, owl cafés, maid cafés, and manga cafés. Old-style ones are called 「喫茶店|きっさてん」, from lesson four. And 「カフェラテ」, café latte, is everywhere." }
  ],
  "あした|明日": [
    { tag: "Memory hook", explain: "The kanji are 「明」, bright, and 「日」, day. The bright day, tomorrow. A hopeful word. And there's a formal reading, 「あす」, and a business one, 「みょうにち」. And 「また明日|またあした」, see you tomorrow." },
    { tag: "Word family", explain: "Time line. 「おととい」, day before yesterday. 「きのう」, yesterday. 「きょう」, today. 「あした」, tomorrow. 「あさって」, the day after tomorrow. And the old saying, 「明日は明日の風が吹く|あしたはあしたのかぜがふく」. Tomorrow's wind will blow tomorrow." }
  ],
  "きょう|今日": [
    { tag: "Real-life Japanese", explain: "「今日はいい天気ですね」. Nice weather today. The classic small talk. And 「今日は何曜日ですか」. What day is it today? And 「今日はありがとう」, thanks for today. Said when parting after spending time together." },
    { tag: "Don't mix it up", explain: "「今日」 has a special reading, 「きょう」. Neither kanji normally makes that sound. In formal speech it's 「こんにち」, as in 「こんにちは」, which literally means as for today. So hello is really about today." }
  ],
  "あさ|朝": [
    { tag: "Word family", explain: "「朝|あさ」 builds many words. 「毎朝|まいあさ」, every morning. 「今朝|けさ」, this morning, a special reading. 「朝ご飯」, breakfast. And with its Chinese reading, 「朝食|ちょうしょく」, breakfast. And 「朝日|あさひ」, the morning sun, a beer brand." },
    { tag: "Real-life Japanese", explain: "「おはようございます」, good morning. Used until about ten or eleven. At part-time jobs, staff say 「おはようございます」 whenever they arrive, even at night! It means hello to coworkers at the start of a shift." }
  ],
  "こんばん|今晩": [
    { tag: "Real-life Japanese", explain: "「こんばんは」, good evening, is literally as for tonight. And 「今晩、ひま？」, are you free tonight? A casual invitation. And 「今夜|こんや」 also means tonight, a bit more dramatic and romantic." },
    { tag: "Word family", explain: "「今」, now, plus 「晩」, evening. The current evening. Same pattern as 「今朝|けさ」, this morning, 「今週|こんしゅう」, this week, 「今年|ことし」, this year. 「今」 means this current one." }
  ],
  "まいにち|毎日": [
    { tag: "Real-life Japanese", explain: "「毎日、日本語を勉強します」. I study Japanese every day. No particle needed after 「毎日」. And 「毎日大変です」, every day is tough. And a famous newspaper, 「毎日新聞|まいにちしんぶん」, the Mainichi, is named for this." },
    { tag: "Memory hook", explain: "The kanji 「毎」 has a woman, 「母|はは」, mother, inside it, with a hat. Mom, every single day, doing it again. Every day, mom is there. And 「毎」 makes every everything. 「毎週」, 「毎月」, 「毎年」." }
  ],
  "まいばん|毎晩": [
    { tag: "Real-life Japanese", explain: "「毎晩、テレビを見ます」. I watch TV every night. And 「毎晩おそくまで勉強しています」. I study until late every night. And in Japan, many people take a bath, 「お風呂」, every night, not in the morning." },
    { tag: "Don't mix it up", explain: "「毎晩|まいばん」 and 「毎夜|まいよ」 both mean every night, but 「毎晩」 is far more common. And 「毎朝|まいあさ」, every morning, uses the native reading 「あさ」, while 「毎晩」 uses the Chinese reading 「ばん」. Just learn them as words." }
  ],
  "しゅうまつ|週末": [
    { tag: "Word family", explain: "「週|しゅう」, week, and 「末|まつ」, end. The end of the week. 「月末|げつまつ」, end of the month. 「年末|ねんまつ」, end of the year. And 「期末試験|きまつしけん」, final exam, end of the term. Lesson sixteen." },
    { tag: "Real-life Japanese", explain: "「週末は何をしますか」. What will you do this weekend? The Monday question is 「週末はどうでしたか」, how was your weekend? And 「週末」 is often called 「土日|どにち」, Saturday Sunday." }
  ],
  "いつ|": [
    { tag: "Word family", explain: "Question word magic again. 「いつ」, when. 「いつか」, someday. 「いつも」, always. 「いつでも」, anytime. And 「いつまで」, until when. One word, five uses. 「いつか日本に行きたい」, I want to go to Japan someday." },
    { tag: "Real-life Japanese", explain: "「誕生日はいつですか」. When is your birthday? And 「いつ日本に来ましたか」. When did you come to Japan? Notice no 「に」 after 「いつ」. And 「いつにする？」, when should we make it? For plans." }
  ],
  "〜ごろ|": [
    { tag: "Don't mix it up", explain: "「ごろ」 is about, for a point in time. 「三時ごろ」, around three o'clock. 「ぐらい」, from lesson four, is about, for an amount. 「三時間ぐらい」, about three hours. Time point, 「ごろ」. Amount, 「ぐらい」." },
    { tag: "Real-life Japanese", explain: "「何時ごろ寝ますか」. Around what time do you go to bed? And 「十二時ごろです」. Around twelve. And 「このごろ」, these days, lately. 「このごろ、忙しいです」. I've been busy lately." }
  ],
  "いく|行く": [
    { tag: "Real-life Japanese", explain: "「行ってきます」. I'm off! What you say leaving home. Literally, I'll go and come back. And family answers, 「いってらっしゃい」, go and come back. When you return, 「ただいま」, I'm home, and 「おかえり」, welcome back." },
    { tag: "Don't mix it up", explain: "「行く」 is irregular in one spot. The te form is 「行って|いって」, not 「行いて」. And the past, 「行った」. It looks like a normal u-verb, but sneaks in this exception. And 「に」 or 「へ」 marks where. 「日本に行く」." }
  ],
  "かえる|帰る": [
    { tag: "Don't mix it up", explain: "「帰る」 looks like a ru-verb but it's a u-verb. 「帰ります」, 「帰って」. And there's 「変える|かえる」, to change, and 「かえる」, frog. A pun, 「無事かえる」, the frog that returns safely. Frog charms are good luck for travelers." },
    { tag: "Real-life Japanese", explain: "「うちに帰ります」. I'm going home. And 「何時に帰る？」, what time will you be home? And 「帰国|きこく」, returning to your country. 「来月帰国します」. I'm going back to my country next month." }
  ],
  "はなす|話す": [
    { tag: "Real-life Japanese", explain: "「日本語を話します」. I speak Japanese. And 「ゆっくり話してください」. Please speak slowly. A lifesaver. And 「話」 alone, 「はなし」, a story or talk, in lesson nineteen." },
    { tag: "Don't mix it up", explain: "Talk words. 「話す|はなす」, to speak, to talk. 「言う|いう」, to say. 「しゃべる」, to chat, casual. 「話す」 is about conversation. 「言う」 is about the words. 「何と言いましたか」, what did you say?" }
  ],
  "おきる|起きる": [
    { tag: "Real-life Japanese", explain: "「毎朝六時に起きます」. I get up at six every morning. And 「起きて！」, wake up! What moms shout. And 「起きる」 also means to happen. 「事故が起きた」, an accident happened. Something wakes up in the world." },
    { tag: "Word family", explain: "「起こす|おこす」, to wake someone up, lesson sixteen. 「早起き|はやおき」, early riser. And the proverb, 「早起きは三文の徳|はやおきはさんもんのとく」. Getting up early earns three coins. The early bird gets the worm." }
  ],
  "みる|見る": [
    { tag: "Word family", explain: "The 「見」 kanji is an eye, 「目|め」, on legs. An eye walking around, looking. And 「見る」 also means to try, after a te form. 「食べてみる」, try eating it. That's lesson thirteen. Look and see." },
    { tag: "Real-life Japanese", explain: "「テレビを見ます」, watch TV. 「映画を見る」, see a movie. And 「見て見て！」, look, look! Kids say it all the time. And sightseeing is 「見物|けんぶつ」. Watching, looking, seeing, all one verb." }
  ],
  "くる|来る": [
    { tag: "Don't mix it up", explain: "「来る」 is one of only two irregular verbs, with 「する」. 「来ます|きます」, 「来ない|こない」, 「来て|きて」. The first sound keeps changing, 「く」, 「き」, 「こ」. Practice saying them in a row. It's worth it." },
    { tag: "Real-life Japanese", explain: "「日本に来ました」. I came to Japan. And 「来て！」, come here! And 「来週|らいしゅう」, next week, uses this kanji. Coming week. And 「来年|らいねん」, next year, the coming year." }
  ],
  "べんきょうする|勉強する": [
    { tag: "Memory hook", explain: "「勉|べん」, effort, and 「強|きょう」, strong, to force. Studying is forcing yourself with effort. Every student agrees. And in shops, 「勉強します」 can mean, I'll give you a discount! The shop owner makes an effort." },
    { tag: "Real-life Japanese", explain: "「日本語を勉強しています」. I'm studying Japanese. And 「図書館で勉強します」. I study at the library. And 「いい勉強になった」. That was a good lesson, I learned a lot. Even from a mistake." }
  ],
  "いい|": [
    { tag: "Don't mix it up", explain: "「いい」 is irregular! Its other forms use 「よ」. 「よくない」, not good. 「よかった」, was good. Never 「いくない」. And 「よかった！」 alone means, oh good, what a relief. You'll hear it constantly." },
    { tag: "Real-life Japanese", explain: "「いいですね」, sounds good! And 「いいよ」, sure, okay. And careful, 「いいです」 can mean no thanks. If someone offers a bag and you say 「いいです」, it means I'm fine without it. Tone and gesture tell you." }
  ],
  "あまり|": [
    { tag: "Real-life Japanese", explain: "「あまり」 goes with a negative. 「あまり好きじゃない」. I don't really like it. A soft way to say no. Casually, 「あんまり」. And it's polite, Japanese often prefers 「あまり」 over a blunt no." },
    { tag: "Word family", explain: "「あまり」 also means leftover, 「余り」. In math, the remainder. And 「あまりに」 means too much. 「あまりに高い」, way too expensive. So too much left over, and not very, come from the same root." }
  ],
  "ぜんぜん|全然": [
    { tag: "Real-life Japanese", explain: "「全然わかりません」. I don't understand at all. Goes with negatives. But young people also say 「全然大丈夫」, totally fine, with a positive. Teachers might say that's wrong, but everyone uses it." },
    { tag: "Word family", explain: "「全|ぜん」 means all, whole. 「全部|ぜんぶ」, everything. 「安全|あんぜん」, safe. 「全国|ぜんこく」, nationwide. So 「全然」 is about all of it, entirely. Not at all, entirely not." }
  ],
  "たいてい|": [
    { tag: "Real-life Japanese", explain: "「たいてい七時に起きます」. I usually get up at seven. And 「週末はたいてい家にいます」. On weekends I'm usually home. Use it for habits. And the frequency ladder, 「いつも」, 「たいてい」, 「よく」, 「ときどき」, 「あまり」, 「ぜんぜん」." },
    { tag: "Word family", explain: "「たいてい」, written 「大抵」. And 「たいていの人」, most people. 「たいていの日本人はお茶が好きです」. Most Japanese people like tea. So it means usually for time, and most for people." }
  ],
  "ちょっと|": [
    { tag: "Real-life Japanese", explain: "「ちょっと」 is the most useful soft no. 「金曜日はちょっと…」. Friday is a little... and you trail off. Everyone understands it's a no. No reason needed. And 「ちょっと待って」, wait a sec." },
    { tag: "Word family", explain: "「ちょっと」 can also get attention. 「ちょっと！」, hey! or excuse me! with a sharp tone. And 「ちょっとすみません」, excuse me a moment. And a polite version for a little, 「少し|すこし」. And 「少々|しょうしょう」, very polite." }
  ],
  "ときどき|時々": [
    { tag: "Memory hook", explain: "That 「々」 isn't a kanji, it's a repeat mark. 「時々」 is time time, time to time. Like English, now and then. And 「人々|ひとびと」, people, 「色々|いろいろ」, various. Double means plural or repeated." },
    { tag: "Real-life Japanese", explain: "「ときどき映画を見ます」. I sometimes watch movies. And weather forecasts say 「晴れときどき雨」, sunny, sometimes rain. You'll see that on TV every day. Perfect real-world reading practice." }
  ],
  "よく|": [
    { tag: "Don't mix it up", explain: "「よく」 means often, and also well. 「よく行きます」, I go often. 「よくできました」, well done! Teachers stamp that on homework. And 「よく寝た」, I slept well. Context tells you which." },
    { tag: "Real-life Japanese", explain: "「よく来ますか」. Do you come here often? And a polite welcome, 「よくいらっしゃいました」, thank you for coming. And 「よく知っていますね」. You know a lot, don't you! A compliment." }
  ],
  "そうですね|": [
    { tag: "Real-life Japanese", explain: "「そうですね」 does two jobs. Agreeing, that's right. And thinking, let me see. 「週末は何をしますか」. 「そうですね…」. Hmm, let me see... Super natural. Use it to buy time." },
    { tag: "Don't mix it up", explain: "「そうですね」, agreeing, isn't it so. 「そうですか」, oh, is that so? Receiving new info. 「そうですよ」, that's right, I'm telling you. The last particle changes everything. 「ね」 shares, 「か」 receives, 「よ」 informs." }
  ],
  "でも|": [
    { tag: "Real-life Japanese", explain: "「でも」 starts a sentence with but. 「日本語はむずかしいです。でも、おもしろいです」. Japanese is hard. But it's interesting. Casually, 「でもさ」, but, you know. And 「だけど」, but, is similar." },
    { tag: "Word family", explain: "「でも」 after a noun means or something. 「お茶でもどうですか」. How about tea or something? And with question words, 「何でも|なんでも」, anything, 「だれでも」, anyone. Same 「でも」, different job." }
  ],
  "どうですか|": [
    { tag: "Real-life Japanese", explain: "「どうですか」 asks how is it, and also suggests. 「日本の生活はどうですか」. How is life in Japan? And 「コーヒーはどうですか」. How about some coffee? An easy, polite offer." },
    { tag: "Word family", explain: "Casual, 「どう？」. 「この服、どう？」 How does this outfit look? And very polite, 「いかがですか」. Shops say 「いかがですか」 when offering samples. Same meaning, three levels of politeness." }
  ],
  "ええ|": [
    { tag: "Don't mix it up", explain: "Yes words. 「はい」, the standard yes. 「ええ」, softer, a bit conversational. 「うん」, casual. And in Japanese, 「はい」 also means I'm listening, not always I agree. So don't take every 「はい」 as yes." },
    { tag: "Real-life Japanese", explain: "「ええ、そうです」. Yes, that's right. And with a rising tone, 「ええ？」 means what? huh? Surprise. And 「えー」 stretched means, aww, no way. Same sound, very different feelings." }
  ],
  "きく|聞く": [
    { tag: "Don't mix it up", explain: "「聞く」 means both to listen and to ask. 「音楽を聞く」, listen to music. 「先生に聞く」, ask the teacher. And 「聞こえる|きこえる」, to be audible. And 「聴く」, another kanji, for listening attentively, like to music." },
    { tag: "Memory hook", explain: "The kanji 「聞」 is an ear, 「耳|みみ」, inside a gate, 「門|もん」. Your ear pressed at the gate, listening. And newspaper, 「新聞|しんぶん」, new things heard. And 「聞く」, ask, is putting your ear out for an answer." }
  ],
  "はやい|早い": [
    { tag: "Don't mix it up", explain: "Two 「はやい」. 「早い」, early, about time. 「速い」, fast, about speed. 「朝早い」, early in the morning. 「足が速い」, fast runner. Same sound, different kanji. And the opposite of both is 「遅い|おそい」, late or slow." },
    { tag: "Real-life Japanese", explain: "「早く！」, hurry up! And 「早く起きる」, get up early. And 「お早う|おはよう」, good morning, comes from this word. It's early! So every 「おはようございます」 is really saying, it's early." }
  ],
  "どようび|土曜日": [
    { tag: "Memory hook", explain: "The days follow the planets. 「土|ど」 is earth, and Saturn, 「土星|どせい」. So Saturday is Saturn day, in both languages! 「日」, sun, Sunday. 「月」, moon, Monday. Then fire, water, wood, gold, earth. Mars, Mercury, Jupiter, Venus, Saturn." },
    { tag: "Real-life Japanese", explain: "「土曜日に何をしますか」. What do you do on Saturday? And weekends are 「土日|どにち」, Saturday Sunday. 「土日は休みです」. I'm off on weekends. And some schools in Japan used to have Saturday classes." }
  ],
  "にちようび|日曜日": [
    { tag: "Real-life Japanese", explain: "「日曜日はひまです」. I'm free on Sunday. And shortened, 「日曜|にちよう」. In schedules, just 「日」 in a circle. Calendars in Japan show Sundays and holidays in red. 「日曜大工|にちようだいく」 means DIY, Sunday carpenter." },
    { tag: "Word family", explain: "「曜日|ようび」 means day of the week. 「何曜日ですか」. What day is it? And 「日」 shows up three times as many sounds. 「日曜日|にちようび」. 「にち」, 「よう」, 「び」. The sun gets busy on Sunday." }
  ]
});
/* Lesson 4 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "いぬ|犬": [
    { tag: "Memory hook", explain: "The kanji 「犬」 is 「大|だい」, big, with a little dot, like an ear. A big guy with an ear perked up. And dogs bark 「ワンワン」 in Japanese, not woof. So kids call a dog 「ワンちゃん」." },
    { tag: "Culture corner", explain: "The most famous dog in Japan is 「ハチ公|ハチこう」, who waited at Shibuya Station for his owner every day for nearly ten years after the owner died. His statue is a famous meeting spot. 「ハチ公前で会おう」. Let's meet at Hachiko." }
  ],
  "ねこ|猫": [
    { tag: "Culture corner", explain: "Japan loves cats. The beckoning cat, 「招き猫|まねきねこ」, waves in shop windows for good luck. There are cat cafés and cat islands. And cats say 「ニャー」. Kids call them 「ニャンちゃん」 or 「ねこちゃん」." },
    { tag: "Word family", explain: "Cat phrases. 「猫舌|ねこじた」, cat tongue, someone who can't handle hot food. 「猫の手も借りたい」, I'd even borrow a cat's paws, meaning I'm so busy. And 「猫背|ねこぜ」, cat back, slouching." }
  ],
  "はな|花": [
    { tag: "Don't mix it up", explain: "Careful, 「花|はな」, flower, and 「鼻|はな」, nose, are the same sound! Pitch differs slightly. And 「話|はなし」, story, starts the same too. Context saves you. 「きれいな花」 is pretty flowers, not pretty nose." },
    { tag: "Word family", explain: "「花見|はなみ」, flower viewing, cherry blossom parties. 「花火|はなび」, fireworks, fire flowers! 「花屋|はなや」, florist. And 「生け花|いけばな」, flower arranging. Fire flowers is one of the prettiest words in Japanese." }
  ],
  "こうえん|公園": [
    { tag: "Word family", explain: "「公|こう」 means public, and 「園|えん」 means garden. Public garden. 「動物園|どうぶつえん」, zoo, animal garden. 「幼稚園|ようちえん」, kindergarten. And 「公|こう」 in 「公務員|こうむいん」, a public servant." },
    { tag: "Don't mix it up", explain: "「こうえん」 has a sound-alike, 「講演|こうえん」, a lecture or speech. And 「公演|こうえん」, a performance. Three 「こうえん」. For you, park is the first one you'll need. 「公園で遊ぶ」, play in the park." }
  ],
  "おてら|お寺": [
    { tag: "Don't mix it up", explain: "Temple vs shrine. 「お寺|おてら」 is Buddhist. 「神社|じんじゃ」 is Shinto. At temples, put your hands together quietly. At shrines, clap twice. Shrines have red gates, 「鳥居|とりい」. Temples often have a big incense burner." },
    { tag: "Word family", explain: "The kanji 「寺|じ」 has a Chinese reading in temple names. 「金閣寺|きんかくじ」, the Golden Pavilion. 「清水寺|きよみずでら」, Kiyomizu, where it's 「でら」. So names end in 「じ」 or 「でら」. Kyoto is full of them." }
  ],
  "ぎんこう|銀行": [
    { tag: "Word family", explain: "「銀|ぎん」 is silver, because coins were silver. 「行|こう」 here means a business or store. So a silver store. And 「銀座|ぎんざ」, Tokyo's fancy district, was named for an old silver mint. 「金|きん」 is gold, 「銀」 silver, 「銅|どう」 bronze." },
    { tag: "Culture corner", explain: "Japanese bank ATMs used to close at night and on holidays! Now convenience store ATMs, at 7-Eleven, are open twenty-four hours and work with foreign cards. They're a lifesaver for travelers. And many Japanese still use a personal stamp, 「はんこ」, at banks." }
  ],
  "ゆうびんきょく|郵便局": [
    { tag: "Culture corner", explain: "The Japanese post office symbol is 〒, a T with a line over it. You'll see it on red mailboxes and before zip codes. And post offices in Japan also do banking. It's called Japan Post. And New Year's cards are delivered all on January first." },
    { tag: "Word family", explain: "「局|きょく」 means a bureau or office. 「郵便局」, post office. 「放送局|ほうそうきょく」, a broadcasting station. 「薬局|やっきょく」, a pharmacy. And 「郵便|ゆうびん」 alone is mail. 「郵便番号|ゆうびんばんごう」, zip code." }
  ],
  "きっさてん|喫茶店": [
    { tag: "Word family", explain: "「喫|きっ」 means to consume, drink or smoke. 「茶|さ」, tea. 「店|てん」, shop. A tea-drinking shop. And 「喫煙|きつえん」 is smoking. 「禁煙|きんえん」, no smoking. Some old 「喫茶店」 still allow smoking." },
    { tag: "Culture corner", explain: "A 「喫茶店」 is an old-style café, often run by an older owner, with wood paneling, jazz, and hand-dripped coffee. They serve 「ナポリタン」, ketchup spaghetti, and morning sets with toast and egg. Very nostalgic, called Showa retro." }
  ],
  "スーパー|": [
    { tag: "Sound it out", explain: "「スーパー」 is short for supermarket. And here's a fun one, 「コンビニ」 is short for convenience store. 「デパート」, department store. Japanese chops long English words. Super, convenient, depart." },
    { tag: "Culture corner", explain: "Japanese supermarkets mark down bento and sushi in the evening with discount stickers, 「半額|はんがく」, half price. People wait for them. And you bag your own groceries at a separate counter. And many stores charge for plastic bags." }
  ],
  "デパート|": [
    { tag: "Culture corner", explain: "The basement food floor of a 「デパート」 is called 「デパ地下|デパちか」, department store basement. It's a food paradise, with fancy sweets, bento, and free samples. And the rooftop sometimes has a beer garden in summer." },
    { tag: "Real-life Japanese", explain: "When a department store opens, staff line up and bow to the first customers. And elevator girls, 「エレベーターガール」, still operate elevators in some. 「デパートで買い物をします」. I shop at the department store." }
  ],
  "ゲーム|": [
    { tag: "Real-life Japanese", explain: "「ゲームをする」, play games. And an arcade is 「ゲームセンター」, shortened to 「ゲーセン」. Japan is home to Nintendo, Sony, and many game companies. And 「ゲームオーバー」, game over, in every language." },
    { tag: "Sound it out", explain: "English game, the long a sound, becomes 「ゲー」, stretched. Then m becomes 「ム」. The same pattern in 「ケーキ」, cake, 「テープ」, tape. When English has a long a, Japanese often uses 「エー」." }
  ],
  "アルバイト|": [
    { tag: "Sound it out", explain: "Surprise, 「アルバイト」 comes from German Arbeit, which means work. Japanese shortened it to 「バイト」. 「バイトに行く」, I'm going to my part-time job. And someone who works part-time is a 「バイト」 too." },
    { tag: "Real-life Japanese", explain: "Japanese college students often have a 「バイト」 at convenience stores, restaurants, or cram schools. 「コンビニでバイトしています」. I work part-time at a convenience store. And foreign students can work limited hours." }
  ],
  "かいもの|買い物": [
    { tag: "Real-life Japanese", explain: "「買い物に行きます」. I'm going shopping. Lesson seven teaches the pattern. And grocery shopping too. And 「買い物かご」, shopping basket. A common phrase, 「いい買い物をしましたね」. That was a good buy." },
    { tag: "Word family", explain: "「〜物|もの」 makes things. 「買い物」, shopping, buying things. 「食べ物」, food. 「飲み物」, drinks. 「着物|きもの」, kimono, wearing thing! 「忘れ物|わすれもの」, a forgotten thing. Verb stem plus 「物」." }
  ],
  "クラス|": [
    { tag: "Don't mix it up", explain: "「クラス」 is the class group, the students. A lesson or lecture is 「授業|じゅぎょう」. So 「クラスのみんな」, everyone in the class. But 「授業は九時からです」. Class starts at nine. Two different words for class." },
    { tag: "Culture corner", explain: "In Japanese schools, students stay in one homeroom 「クラス」 all day, and teachers come to them. Classmates are 「クラスメート」. And class reunions, 「同窓会|どうそうかい」, are a big deal years later." }
  ],
  "ひと|人": [
    { tag: "Memory hook", explain: "The kanji 「人」 is a person walking, two legs. Or some say two people leaning on each other, supporting one another. That's why people are always connected. A famous TV teacher made that idea popular in Japan." },
    { tag: "Real-life Japanese", explain: "「あの人はだれですか」. Who's that person? And 「人が多い」, there are lots of people. And 「いい人」, a nice person. And careful, 「いい人」 can also mean a nice guy, but not dating material. Ouch." }
  ],
  "あなた|": [
    { tag: "Culture corner", explain: "Japanese people rarely say 「あなた」. It can sound distant or even rude. Instead, use the person's name plus 「さん」. 「田中さんは学生ですか」. Are you a student, Tanaka-san? And wives sometimes call their husbands 「あなた」, like dear." },
    { tag: "Don't mix it up", explain: "You words. 「あなた」, polite but cold. 「君|きみ」, used by men to friends or juniors. 「お前|おまえ」, rough. And best of all, just the name. In Japanese, using someone's name is the polite way to say you." }
  ],
  "レポート|": [
    { tag: "Don't mix it up", explain: "「レポート」 means a term paper or school report. Not a news report, which is 「報道|ほうどう」 or 「ニュース」. So 「レポートを書く」 is to write a paper. And 「レポートの締め切り|しめきり」, the paper's deadline." },
    { tag: "Real-life Japanese", explain: "「あしたまでにレポートを出してください」. Please submit your paper by tomorrow. A phrase you'll hear. And 「レポートが終わらない」. My paper isn't done. College students everywhere." }
  ],
  "ごはん|ご飯": [
    { tag: "Real-life Japanese", explain: "「ご飯」 is cooked rice, and it's also a meal. 「ご飯を食べる」, to eat a meal. 「ご飯行こう」, let's go eat. Super common. And uncooked rice is 「米|こめ」. Rice in the field is 「稲|いね」. Three words for rice!" },
    { tag: "Culture corner", explain: "Don't stick chopsticks upright in a bowl of rice. That's done only at funerals for the dead. And don't pass food from chopsticks to chopsticks, also a funeral thing. Rest your chopsticks on the holder, 「はし置き|はしおき」." }
  ],
  "パン|": [
    { tag: "Sound it out", explain: "「パン」 comes from Portuguese pão, bread. Portuguese traders brought bread in the fifteen-hundreds. So Japanese is older than English for this! Other Portuguese words, 「カステラ」, sponge cake, and 「てんぷら」, maybe from tempero." },
    { tag: "Culture corner", explain: "Japanese bakeries are amazing. Try 「メロンパン」, a sweet bun with a cookie crust, 「カレーパン」, fried bread with curry inside, and 「あんパン」, red bean bun. And Japanese toast bread is thick and fluffy, called 「食パン|しょくパン」." }
  ],
  "バスてい|バス停": [
    { tag: "Word family", explain: "「停|てい」 means to stop. 「バス停」, bus stop. 「停電|ていでん」, a power outage, electricity stop. 「停止|ていし」, a stop or halt. And signs say 「一時停止|いちじていし」, a stop sign." },
    { tag: "Culture corner", explain: "Japanese buses often have you board from the back or middle, take a numbered ticket, and pay when you get off at the front. A screen shows the fare by number. Or tap an IC card like 「Suica」. Buses are very punctual." }
  ],
  "びょういん|病院": [
    { tag: "Don't mix it up", explain: "Classic trap. 「病院|びょういん」, hospital, with the long 「びょう」. 「美容院|びよういん」, hair salon, with 「び」 and 「よう」 separate. Say them slowly. You want a haircut, not surgery!" },
    { tag: "Word family", explain: "「病|びょう」 means illness. 「病気|びょうき」, sick. 「病院」, hospital. And 「院|いん」, institution, in 「大学院|だいがくいん」, grad school. And in Japan, small clinics are 「〜医院|いいん」 or 「クリニック」." }
  ],
  "ホテル|": [
    { tag: "Culture corner", explain: "Japan has unique hotel types. 「旅館|りょかん」, a traditional inn with tatami and dinner served in your room. 「カプセルホテル」, a capsule hotel where you sleep in a pod. And 「ビジネスホテル」, small and cheap. Try a ryokan once." },
    { tag: "Real-life Japanese", explain: "「ホテルに泊まる|ホテルにとまる」, to stay at a hotel. And at the desk, 「チェックインをお願いします」. Check in, please. And Japanese hotels give you slippers, a robe called 「浴衣|ゆかた」, and tea." }
  ],
  "ほんや|本屋": [
    { tag: "Word family", explain: "The ending 「屋|や」 means shop. 「本屋」, bookstore. 「花屋|はなや」, florist. 「パン屋」, bakery. 「八百屋|やおや」, greengrocer, eight hundred shop, because of all the items. And 「屋」 alone is a roof. Shop owners are also called 「〜屋さん」." },
    { tag: "Culture corner", explain: "Japanese bookstores wrap your book in a free paper cover so people on the train can't see what you're reading. They'll ask, 「カバーをおつけしますか」. Would you like a cover? And manga have their own floors." }
  ],
  "まち|町": [
    { tag: "Word family", explain: "「町|まち」 is town. With the Chinese reading 「ちょう」, it's in addresses. And 「下町|したまち」, downtown, the old working-class areas of Tokyo, like Asakusa. And 「町」 has 「田|た」, rice field, on the left. Towns grew from rice fields." },
    { tag: "Don't mix it up", explain: "Place sizes. 「村|むら」, village. 「町|まち」, town. 「市|し」, city. 「都市|とし」, big city. And 「街|まち」, with another kanji, is a street area, like a shopping street. Same sound, different feel." }
  ],
  "レストラン|": [
    { tag: "Culture corner", explain: "In Japan, you don't tip. Ever. It can even confuse staff. Service is included. And many restaurants give you a wet towel, 「おしぼり」, to wipe your hands. And call staff with 「すみません」, or press a button on the table." },
    { tag: "Real-life Japanese", explain: "「レストランで晩ご飯を食べます」. I eat dinner at a restaurant. And Japanese restaurant words, 「食堂|しょくどう」, diner. 「居酒屋|いざかや」, a pub with food. 「ラーメン屋」, ramen shop. 「レストラン」 usually means Western style." }
  ],
  "きのう|昨日": [
    { tag: "Word family", explain: "「昨|さく」 means previous. 「昨日|きのう」, yesterday. 「昨年|さくねん」, last year, formal. 「昨夜|さくや」, last night. And 「きのう」 is a special reading. Formal speech uses 「さくじつ」 for yesterday." },
    { tag: "Real-life Japanese", explain: "「きのう何をしましたか」. What did you do yesterday? The past tense practice question in every class. And 「きのうはありがとう」. Thanks for yesterday. Japanese thank people again the next day." }
  ],
  "〜じかん|〜時間": [
    { tag: "Don't mix it up", explain: "「時|じ」 is o'clock. 「三時|さんじ」, three o'clock. 「時間|じかん」 is hours, a length. 「三時間|さんじかん」, three hours. One small 「間」 changes a point in time into a length of time." },
    { tag: "Real-life Japanese", explain: "「時間」 alone means time. 「時間がない」, I don't have time. 「時間ありますか」, do you have time? And 「時間通り|じかんどおり」, on time. Japanese trains are famously 「時間通り」." }
  ],
  "いちじかん|一時間": [
    { tag: "Real-life Japanese", explain: "「一時間ぐらい勉強します」. I study for about an hour. And 「一時間半|いちじかんはん」, an hour and a half. And the classic, 「一時間待った」, I waited an hour! When someone's late." },
    { tag: "Word family", explain: "Counting hours. 「一時間」, 「二時間|にじかん」, 「三時間」. And watch out, four hours is 「よじかん」, not 「よんじかん」. Same as four o'clock, 「四時|よじ」. And nine is 「くじかん」. Those are the tricky ones." }
  ],
  "せんしゅう|先週": [
    { tag: "Word family", explain: "Week words. 「先週|せんしゅう」, last week. 「今週|こんしゅう」, this week. 「来週|らいしゅう」, next week. And months, 「先月|せんげつ」, 「今月|こんげつ」, 「来月|らいげつ」. Same pattern. But years are irregular, 「去年|きょねん」, 「今年|ことし」, 「来年」." },
    { tag: "Memory hook", explain: "「先|せん」 means before, ahead. The week before. Same kanji as 「先生|せんせい」, born before. So 「先週」 is the week that went ahead of this one. And 「先」 in 「お先に」, after you." }
  ],
  "とき|時": [
    { tag: "Real-life Japanese", explain: "「子どもの時|こどものとき」, when I was a child. And 「ひまな時」, when I'm free. And lesson sixteen builds whole sentences. 「日本に行った時、写真を撮りました」. When I went to Japan, I took pictures." },
    { tag: "Word family", explain: "「時」 is busy. 「時|じ」, o'clock. 「時間|じかん」, time. 「時計|とけい」, clock. 「時々|ときどき」, sometimes. And 「その時|そのとき」, at that time. One kanji for all things time." }
  ],
  "げつようび|月曜日": [
    { tag: "Memory hook", explain: "「月|げつ」, the moon. Monday is moon day, same as English! Moon-day. And the kanji 「月」 also means month, because months follow the moon. 「一月|いちがつ」, January. And 「月」 alone, 「つき」, the moon." },
    { tag: "Culture corner", explain: "Japan has holidays that always fall on Mondays, called Happy Monday. Like 「成人の日|せいじんのひ」, Coming of Age Day, the second Monday of January. Long weekends, 「三連休|さんれんきゅう」, three days off, are everyone's favorite." }
  ],
  "かようび|火曜日": [
    { tag: "Memory hook", explain: "「火|か」, fire. Tuesday is fire day, for Mars, the red planet, 「火星|かせい」. And the kanji 「火」 looks like a campfire, flames rising with sparks on the sides. Tuesday, fire day." },
    { tag: "Word family", explain: "「火」 shows up as 「火事|かじ」, a fire, lesson seventeen. 「花火|はなび」, fireworks. 「火山|かざん」, volcano, fire mountain. Mount Fuji is a 「火山」! And 「火」 with the native reading, 「ひ」, fire." }
  ],
  "すいようび|水曜日": [
    { tag: "Memory hook", explain: "「水|すい」, water. Wednesday, water day, for Mercury, 「水星|すいせい」, water star. And the kanji 「水」 looks like water splashing out from a stream. The middle of the week, water day." },
    { tag: "Real-life Japanese", explain: "「水曜日にテストがあります」. There's a test on Wednesday. And some Japanese companies have 「ノー残業デー|ノーざんぎょうデー」, no overtime day, often on Wednesday. Go home on time day." }
  ],
  "もくようび|木曜日": [
    { tag: "Memory hook", explain: "「木|もく」, tree, wood. Thursday is wood day, for Jupiter, 「木星|もくせい」. And the kanji 「木」 is a tree, with branches on top and roots below. Two trees, 「林|はやし」, a grove. Three, 「森|もり」, a forest." },
    { tag: "Word family", explain: "「木」 has the native reading 「き」. 「木の下|きのした」, under a tree. And as a part, it's on the left of tons of kanji for trees and wood things, like 「机|つくえ」, desk, and 「橋|はし」, bridge. Spot the tree." }
  ],
  "きんようび|金曜日": [
    { tag: "Memory hook", explain: "「金|きん」, gold, metal, money. Friday is gold day, for Venus, 「金星|きんせい」. And Friday, payday feeling, the golden day! And 「花金|はなきん」 is slang for flower Friday, a fun Friday night out." },
    { tag: "Word family", explain: "「金」 is gold and money. 「お金|おかね」, money. 「金曜日」, Friday. 「金閣寺|きんかくじ」, the Golden Pavilion. And 「金メダル」, gold medal. And 「料金|りょうきん」, fee. Money everywhere." }
  ],
  "あう|会う": [
    { tag: "Real-life Japanese", explain: "「友だちに会います」. I meet a friend. Notice 「に」, not 「を」. That's the classic learner mistake. And 「また会いましょう」, let's meet again. And 「はじめまして」 is for the first time you 「会う」." },
    { tag: "Don't mix it up", explain: "Two 「あう」. 「会う」, to meet. 「合う|あう」, to fit or match. 「この服はサイズが合わない」, these clothes don't fit. And 「会社|かいしゃ」, company, a meeting place. And 「会議|かいぎ」, a meeting." }
  ],
  "ある|": [
    { tag: "Don't mix it up", explain: "Japanese has two there is verbs. 「ある」 for things and plants. 「いる」 for people and animals, things that move on their own. 「本がある」, there's a book. 「犬がいる」, there's a dog. What about a taxi? 「タクシーがいる」. It moves!" },
    { tag: "Real-life Japanese", explain: "「ある」 also means to have. 「時間がある」, I have time. 「質問がある」, I have a question. And events, 「あしたテストがある」, there's a test tomorrow. And its negative is irregular, 「ない」, never 「あらない」." }
  ],
  "かう|買う": [
    { tag: "Memory hook", explain: "The kanji 「買」 has a net, 「罒」, on top of a shell, 「貝」, money. Catching money in a net? Or a net bag with money below. You buy things with shells. And 「買い物|かいもの」, shopping." },
    { tag: "Don't mix it up", explain: "Two 「かう」. 「買う」, to buy. 「飼う|かう」, to keep a pet, lesson eleven. 「犬を飼っています」, I have a dog. Same sound. And 「売る|うる」 is to sell, the opposite of buy." }
  ],
  "かく|書く": [
    { tag: "Real-life Japanese", explain: "「手紙を書く」, write a letter. And 「ここに名前を書いてください」. Please write your name here. Very useful at offices. And 「書く」 also means to draw, sometimes written 「描く」. 「絵をかく」, draw a picture." },
    { tag: "Word family", explain: "「書|しょ」 means writing. 「辞書|じしょ」, dictionary. 「図書館|としょかん」, library. 「書道|しょどう」, calligraphy, the way of writing. And 「教科書|きょうかしょ」, textbook. Writing is everywhere." }
  ],
  "とる|撮る": [
    { tag: "Real-life Japanese", explain: "「写真を撮ってもいいですか」. May I take a picture? Ask before photographing people or inside temples. And 「写真を撮ってくれませんか」. Could you take our picture? Tourists say it every day." },
    { tag: "Don't mix it up", explain: "Many 「とる」 verbs. 「撮る」, to take a photo. 「取る」, to take or grab. 「とって」, pass it. 「年を取る|としをとる」, to grow old. And 「捕る|とる」, to catch. Hiragana is safe when you're not sure." }
  ],
  "まつ|待つ": [
    { tag: "Real-life Japanese", explain: "「ちょっと待ってください」. Please wait a moment. Super common. And 「友だちを待っています」. I'm waiting for a friend. Note 「を」. And 「お待たせしました」, sorry to keep you waiting, from every restaurant." },
    { tag: "Memory hook", explain: "The kanji 「待」 has the going person part on the left, and 「寺|てら」, temple, on the right. Picture standing at the temple gate waiting for a friend. And 「待ち合わせ|まちあわせ」, a meeting spot." }
  ],
  "わかる|": [
    { tag: "Real-life Japanese", explain: "「わかりました」. I understand, got it. You'll say this a lot. And 「わかりません」, I don't understand. And casually, 「わかる！」 means I know right! Totally! Agreeing with feeling." },
    { tag: "Word family", explain: "The kanji is 「分かる」, with 「分|ぶん」, to divide. Understanding is dividing things clearly. And it takes 「が」. 「日本語がわかります」, I understand Japanese. Not 「を」. A classic mistake." }
  ],
  "いる|": [
    { tag: "Real-life Japanese", explain: "「家に犬がいます」. There's a dog at home. And 「兄弟がいますか」. Do you have siblings? And on the phone, 「田中さんはいますか」. Is Tanaka there? And honorific, 「いらっしゃいますか」." },
    { tag: "Don't mix it up", explain: "Two 「いる」! 「居る」, to be, for people and animals. And 「要る|いる」, to need. 「お金が要る」, I need money. And careful, 「要る」 is a u-verb, 「要ります」. Context and conjugation tell them apart." }
  ],
  "〜ぐらい|": [
    { tag: "Real-life Japanese", explain: "「一時間ぐらい」, about an hour. 「十人ぐらい」, about ten people. And 「どのぐらい」, how long, how much. 「駅までどのぐらいですか」. How long to the station? Answer, 「十分ぐらいです」, about ten minutes." },
    { tag: "Don't mix it up", explain: "Point vs amount. 「三時ごろ」, around three o'clock. 「三時間ぐらい」, about three hours. And 「くらい」 and 「ぐらい」 are both fine. And lesson sixteen's 「このぐらい」, about this much." }
  ],
  "ごめんなさい|": [
    { tag: "Don't mix it up", explain: "「ごめんなさい」 is sincere and personal, used with family and friends. 「すみません」 is more polite and general, also excuse me. To a teacher or stranger, use 「すみません」. And casual, 「ごめん」." },
    { tag: "Real-life Japanese", explain: "「遅れてごめんなさい」. Sorry I'm late. And kids say 「ごめんなさい」 to parents. And it's often paired with a bow. The deeper the bow, the bigger the apology. Japanese has a lot of apology culture." }
  ],
  "それから|": [
    { tag: "Real-life Japanese", explain: "「それから」 strings events. 「朝ご飯を食べました。それから、学校に行きました」. I ate breakfast. And then, I went to school. Also, and also, in lists. 「パンと、牛乳と、それから卵」. Bread, milk, and also eggs." },
    { tag: "Word family", explain: "Connector toolkit. 「それから」, and then. 「でも」, but. 「だから」, so. 「それに」, besides. 「それで」, and so. With these five, you can tell any story. And 「それから」 also means since then." }
  ],
  "だから|": [
    { tag: "Real-life Japanese", explain: "「だから」 means so, therefore. 「雨です。だから、行きません」. It's raining. So I'm not going. And with frustration, 「だから、言ったでしょ！」 I told you so! Very common." },
    { tag: "Don't mix it up", explain: "「だから」 starts a sentence. 「から」 ends a clause. 「雨だから行かない」. Because it's raining, I won't go. Same meaning. And polite, 「ですから」. And 「なので」 is softer, more polite than 「だから」." }
  ],
  "たくさん|": [
    { tag: "Real-life Japanese", explain: "「たくさん食べてください」. Please eat a lot. What hosts say. And 「宿題がたくさんある」, I have lots of homework. And 「たくさんの人」, lots of people. Add 「の」 before a noun." },
    { tag: "Word family", explain: "Many words. 「たくさん」, a lot, for amounts. 「多い|おおい」, many, an adjective. 「いっぱい」, full, a lot, casual. And 「もうたくさん」, enough already! I've had it. Too much." }
  ],
  "〜と|": [
    { tag: "Real-life Japanese", explain: "「と」 means and, between nouns. 「パンとコーヒー」, bread and coffee. And with, 「友だちと行きます」. I'll go with a friend. And 「一緒に|いっしょに」 makes it stronger, 「友だちと一緒に」." },
    { tag: "Don't mix it up", explain: "「と」 lists everything, complete. 「や」 lists examples, and so on. 「りんごとバナナ」, apples and bananas, that's all. 「りんごやバナナ」, things like apples and bananas. And 「と」 doesn't join verbs or sentences." }
  ],
  "どうして|": [
    { tag: "Real-life Japanese", explain: "「どうして日本語を勉強していますか」. Why are you studying Japanese? Everyone gets asked. Answer with 「から」. 「アニメが好きだからです」. Because I like anime. And casually, 「なんで？」." },
    { tag: "Word family", explain: "Why words. 「どうして」, standard. 「なんで」, casual. 「なぜ」, formal, lesson nineteen. And 「どうしても」 means no matter what. 「どうしても行きたい」, I want to go no matter what." }
  ],
  "ひとりで|一人で": [
    { tag: "Real-life Japanese", explain: "「一人で映画を見ました」. I watched a movie alone. And Japan has lots of solo culture. Solo karaoke, 「ひとカラ」, and ramen shops with private booths. 「一人暮らし|ひとりぐらし」, living alone." },
    { tag: "Word family", explain: "People counting is irregular. 「一人|ひとり」, 「二人|ふたり」, then 「三人|さんにん」. And 「一人で」, alone. 「二人で」, the two of us. 「みんなで」, all together. 「で」 shows how many do it." }
  ],
  "もしもし|": [
    { tag: "Culture corner", explain: "「もしもし」 comes from 「申す|もうす」, to say, humbly. I'm saying, I'm saying! An old folk belief said ghosts couldn't repeat words twice, so saying 「もし」 twice proved you're human. Fun story." },
    { tag: "Real-life Japanese", explain: "Only for the phone. Don't use 「もしもし」 in person. And businesses answer with the company name, not 「もしもし」. And if the signal's bad, 「もしもし？聞こえますか」. Hello? Can you hear me?" }
  ],
  "こども|子供": [
    { tag: "Word family", explain: "「子供」 is also written 「子ども」, half in kana. Some people avoid 「供」 because it means servant or offering. And someone else's child, 「お子さん」, lesson nineteen. And 「子供の日|こどものひ」, Children's Day, May fifth." },
    { tag: "Culture corner", explain: "On Children's Day, families fly carp streamers, 「こいのぼり」, outside. The carp swim upstream, a symbol of strength. And kids in Japan walk to school alone from age six. Seeing tiny kids riding trains alone surprises visitors." }
  ],
  "しゃしん|写真": [
    { tag: "Word family", explain: "「写|しゃ」, to copy, and 「真|しん」, truth. A photo copies the truth. Nice. 「写す|うつす」, to copy. And 「真|ま」 in 「真ん中|まんなか」, the very middle. And 「写真家|しゃしんか」, photographer." },
    { tag: "Culture corner", explain: "Japanese people make a peace sign in photos, the V sign. And the photographer says 「はい、チーズ」, okay, cheese! Japan also invented photo booths with filters, 「プリクラ」, from print club. Teens love them." }
  ]
});
/* Lesson 5 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "うみ|海": [
    { tag: "Word family", explain: "「海|かい」 with its Chinese reading. 「海外|かいがい」, overseas, beyond the sea. 「海外旅行」, a trip abroad. 「日本海|にほんかい」, the Sea of Japan. And 「海|うみ」 alone, the sea. Japan is an island nation, so it's everywhere." },
    { tag: "Culture corner", explain: "Japan has a holiday, 「海の日|うみのひ」, Marine Day, in July, to thank the ocean. It kicks off beach season. And beach houses, 「海の家|うみのいえ」, pop up selling ramen and shaved ice. Very summer." }
  ],
  "サーフィン|": [
    { tag: "Sound it out", explain: "Surfing becomes 「サーフィン」. The small 「ィ」 makes fi. And the ing becomes 「ン」 here, not 「ング」. Japanese sometimes drops the g. Same with 「マラソン」, marathon. Loanwords aren't always consistent." },
    { tag: "Culture corner", explain: "Surfing is popular in Japan, especially at Shonan, near Tokyo, and in Chiba. Surfing made its Olympic debut at the Tokyo Olympics, held at a Chiba beach. And a surfer is a 「サーファー」." }
  ],
  "たんじょうび|誕生日": [
    { tag: "Real-life Japanese", explain: "「誕生日はいつですか」. When's your birthday? And 「誕生日おめでとう」, happy birthday. And Japanese people sing the same Happy Birthday song in English! 「ハッピーバースデー」. And 「誕生日プレゼント」, birthday present." },
    { tag: "Word family", explain: "「誕|たん」 means birth, 「生|じょう」, life. Birth life day. And 「生」 reads 「じょう」 here, unusual. And 「誕生|たんじょう」 alone means birth. 「赤ちゃんが誕生しました」. A baby was born, formal." }
  ],
  "てがみ|手紙": [
    { tag: "Don't mix it up", explain: "Surprise for Chinese readers. In Chinese, 「手紙」 means toilet paper! In Japanese, it's a letter, hand paper. Toilet paper is 「トイレットペーパー」. Kanji can mean different things in different countries." },
    { tag: "Culture corner", explain: "Japanese people send New Year's cards, 「年賀状|ねんがじょう」, by the millions. The post office holds them to deliver all on January first. And letters start with a season greeting, like it's getting warm, before getting to the point." }
  ],
  "すき|好き": [
    { tag: "Memory hook", explain: "The kanji 「好」 is 「女|おんな」, woman, and 「子|こ」, child. A mother and child, the image of love. And 「好き」 uses 「が」. 「ねこが好きです」. I like cats. Not 「を」. A very common slip." },
    { tag: "Real-life Japanese", explain: "「好き」 is also how you confess love. 「好きです」. I like you. That's the big confession in Japanese, more common than 「愛してる」, I love you, which feels heavy. And 「大好き」, I really like it, love it." }
  ],
  "おいしい|": [
    { tag: "Real-life Japanese", explain: "Say 「おいしい！」 after the first bite. Hosts love it. And men often say 「うまい！」, which is casual and means the same. And the opposite, 「まずい」, gross. Never say that to a host." },
    { tag: "Word family", explain: "Food reactions. 「おいしい」, delicious. 「あまい」, sweet. 「からい」, spicy. 「しょっぱい」, salty. 「すっぱい」, sour. 「にがい」, bitter. TV food reporters have a hundred more, it's an art." }
  ],
  "おおきい|大きい": [
    { tag: "Don't mix it up", explain: "「大きい」 is an い adjective. But 「大きな」 also exists, before nouns. 「大きな家」, a big house. Both are fine there. And sizes go 「大|だい」, 「中|ちゅう」, 「小|しょう」, large, medium, small, at restaurants." },
    { tag: "Word family", explain: "「大」 everywhere. 「大学|だいがく」, college. 「大人|おとな」, adult, a special reading. 「大切|たいせつ」, important. 「大丈夫|だいじょうぶ」, okay. And 「大阪|おおさか」, Osaka, big hill." }
  ],
  "ちいさい|小さい": [
    { tag: "Memory hook", explain: "The kanji 「小」 is a little line with two tiny dots, something small being split. Small. And 「小」 shows up in 「小学校|しょうがっこう」, elementary school, small school. And 「小鳥|ことり」, little bird." },
    { tag: "Real-life Japanese", explain: "「小さい時|ちいさいとき」 means when I was little. 「小さい時、犬を飼っていました」. When I was little, I had a dog. And Japan is famous for small things, tiny cars, small apartments, mini everything." }
  ],
  "あたらしい|新しい": [
    { tag: "Word family", explain: "「新」 with its Chinese reading 「しん」. 「新聞|しんぶん」, newspaper. 「新幹線|しんかんせん」, bullet train. 「新年|しんねん」, New Year. And 「新宿|しんじゅく」, new lodging, a Tokyo district. And 「新人|しんじん」, a newcomer." },
    { tag: "Don't mix it up", explain: "「新しい」 describes things being new. For people being young, use 「若い|わかい」. 「新しい人」 would mean someone who just joined, not a young person. And old works the same way. 「古い」 for things, 「年を取った」 for people." }
  ],
  "ふるい|古い": [
    { tag: "Don't mix it up", explain: "Big trap. 「古い」 is for things, not people. 「古い車」, an old car. Never say 「古い人」 for an old person. That means outdated, old-fashioned person. Old people are 「お年寄り|おとしより」, elderly." },
    { tag: "Word family", explain: "「古|こ」 appears in 「中古|ちゅうこ」, secondhand, used. 「中古車|ちゅうこしゃ」, a used car. And 「古本|ふるほん」, a used book. Japan has amazing used book areas, like Jimbocho in Tokyo." }
  ],
  "たべもの|食べ物": [
    { tag: "Real-life Japanese", explain: "「どんな食べ物が好きですか」. What kind of food do you like? Classic question. And 「日本の食べ物」, Japanese food. And allergies, 「食べられない食べ物がありますか」. Is there food you can't eat?" },
    { tag: "Word family", explain: "Verb stem plus 「物|もの」. 「食べ物」, food. 「飲み物」, drinks. 「買い物」, shopping. 「忘れ物」, a forgotten item. 「乗り物|のりもの」, vehicles. 「着物」, kimono. Learn the pattern, get dozens." }
  ],
  "のみもの|飲み物": [
    { tag: "Real-life Japanese", explain: "「飲み物は何がいいですか」. What would you like to drink? Restaurants ask first. Answer, 「お茶をお願いします」. And 「飲み物」 menus often have 「ソフトドリンク」, non-alcoholic drinks." },
    { tag: "Culture corner", explain: "Japan has over four million vending machines. Hot and cold drinks, everywhere, even on mountain trails. Try a hot corn soup can in winter. And 「ポカリスエット」, a sports drink, is a classic." }
  ],
  "くだもの|果物": [
    { tag: "Culture corner", explain: "Fruit in Japan can be super expensive, and given as luxury gifts. A perfect melon can cost over a hundred dollars. Square watermelons exist too. Fruit shops wrap each piece like jewelry." },
    { tag: "Word family", explain: "「果物」 is a special reading. The kanji 「果|か」 means fruit or result. 「結果|けっか」, result, the tied fruit. 「効果|こうか」, effect. So results are the fruit of effort." }
  ],
  "りょこう|旅行": [
    { tag: "Word family", explain: "「旅|りょ」 means journey, 「行|こう」 going. 「旅|たび」 alone, a journey. 「旅館|りょかん」, a Japanese inn. 「旅行会社|りょこうがいしゃ」, travel agency. And 「修学旅行|しゅうがくりょこう」, the school trip." },
    { tag: "Culture corner", explain: "Japanese students take a big school trip, 「修学旅行」, often to Kyoto or Hiroshima. And after any trip, you must bring 「おみやげ」 for coworkers and friends. Travel isn't done until the souvenirs are given." }
  ],
  "バス|": [
    { tag: "Don't mix it up", explain: "「バス」 means bus, and also bath! A bathroom with a tub is 「バスルーム」. And 「バスタオル」, bath towel. But a bus ride is 「バス」 too. Context. And the bus stop is 「バス停|バスてい」." },
    { tag: "Culture corner", explain: "Night buses, 「夜行バス|やこうバス」, are a cheap way to travel between cities in Japan. Sleep overnight, arrive in the morning. Students love them. And highway buses are clean and on time." }
  ],
  "てんき|天気": [
    { tag: "Real-life Japanese", explain: "「いい天気ですね」. Nice weather, isn't it? The ultimate small talk. And 「天気予報|てんきよほう」, weather forecast. 「天気予報によると」, according to the forecast, lesson seventeen." },
    { tag: "Word family", explain: "「天|てん」, heaven, sky. 「気|き」, spirit, air. The sky's mood. 「気」 is everywhere. 「元気|げんき」, energetic. 「電気|でんき」, electricity. 「人気|にんき」, popularity. 「天気」, weather." }
  ],
  "しゅくだい|宿題": [
    { tag: "Memory hook", explain: "「宿|しゅく」, to lodge, stay overnight, and 「題|だい」, topic. A topic that stays with you overnight! That's homework. And 「宿|やど」 is an inn. 「新宿|しんじゅく」, new lodging." },
    { tag: "Real-life Japanese", explain: "「宿題を出す|しゅくだいをだす」, hand in homework. 「宿題を忘れた」, I forgot my homework. And 「夏休みの宿題」, summer homework, a famously huge pile Japanese kids get." }
  ],
  "テスト|": [
    { tag: "Real-life Japanese", explain: "「あしたテストがあります」. There's a test tomorrow. And 「テストはどうでしたか」. How was the test? And bigger exams are 「試験|しけん」. A quiz, 「小テスト|しょうテスト」." },
    { tag: "Don't mix it up", explain: "Exam words. 「テスト」, a test, casual. 「試験|しけん」, an exam, more formal. 「受験|じゅけん」, taking entrance exams. And 「入試|にゅうし」, entrance exam. Japanese students take many." }
  ],
  "へや|部屋": [
    { tag: "Culture corner", explain: "Japanese apartments are described like 「1LDK」. One bedroom plus a living, dining, kitchen. And room size is measured in tatami mats, 「畳|じょう」. A six-mat room is about ten square meters." },
    { tag: "Word family", explain: "「部屋」 is a special reading. 「部|ぶ」 alone means a section or club, as in 「部活|ぶかつ」. And 「屋|や」 means building. And Japanese homes have 「和室|わしつ」, Japanese style rooms, and 「洋室|ようしつ」, Western." }
  ],
  "ぼく|僕": [
    { tag: "Don't mix it up", explain: "「ぼく」 is used by boys and men, casual and friendly. 「おれ」 is rougher. 「わたし」 is neutral. A grown man in a job interview says 「わたし」. And 「ぼく」 is also used to talk to a little boy, like, hey kiddo." },
    { tag: "Real-life Japanese", explain: "Parents and strangers call a little boy 「ぼく」. 「ぼく、いくつ？」 Hey kid, how old are you? It means you here. Weird but true. And some women singers use 「ぼく」 in song lyrics for a boyish feel." }
  ],
  "エルサイズ|": [
    { tag: "Real-life Japanese", explain: "Sizes, 「Sサイズ」, 「Mサイズ」, 「Lサイズ」. And Japanese sizes run smaller, so a Japanese L may fit like a US medium. And 「サイズが合わない」, the size doesn't fit. Try clothes on, 「試着|しちゃく」." },
    { tag: "Sound it out", explain: "Letters in Japanese. L is 「エル」. S is 「エス」. M is 「エム」. And XL is 「エックスエル」. And 「サイズ」, size. Japanese reads English letters with vowels after them." }
  ],
  "あつい|暑い": [
    { tag: "Don't mix it up", explain: "Three 「あつい」! 「暑い」, hot weather. 「熱い」, hot to the touch, also in this lesson. 「厚い」, thick, like a book. All 「あつい」. And the opposites differ too. 「寒い」, cold weather. 「冷たい」, cold to touch. 「薄い」, thin." },
    { tag: "Culture corner", explain: "Japanese summers are hot and humid. People carry fans, 「うちわ」, and cooling towels. And 「暑いですね」 is the summer greeting. The answer, 「本当に暑いですね」. Really hot, isn't it." }
  ],
  "さむい|寒い": [
    { tag: "Real-life Japanese", explain: "「寒い！」 is also slang for a bad joke. If your joke falls flat, friends say 「寒い」, it's freezing in here. And dad jokes are 「おやじギャグ」. Very 「寒い」." },
    { tag: "Don't mix it up", explain: "「寒い」, cold weather, the air. 「冷たい|つめたい」, cold to the touch, like a drink. 「冷たい人」, a cold person, unkind. And 「寒い日」 is a cold day. Use 「寒い」 for your body feeling cold in the air." }
  ],
  "あつい|熱い": [
    { tag: "Real-life Japanese", explain: "「熱い！」 is what you say after touching a hot pan or tasting hot soup. And 「熱いお茶」, hot tea. And 「熱い人」, a passionate person. And 「熱|ねつ」 alone is a fever. 「熱がある」, I have a fever." },
    { tag: "Memory hook", explain: "The kanji 「熱」 has four dots at the bottom. That's fire! The fire radical. So something hot from fire. And 「暑」 has the sun, 「日」, on top. Sun for weather, fire for touch. Look at the kanji." }
  ],
  "おもしろい|面白い": [
    { tag: "Don't mix it up", explain: "「おもしろい」 means both funny and interesting. 「おもしろい本」, an interesting book. 「おもしろい人」, a funny person. And for just funny, laugh out loud, 「おかしい」 or 「ウケる」." },
    { tag: "Memory hook", explain: "The kanji 「面白い」 means face white. One popular story says people's faces lit up white in the firelight while listening to a fun story. Faces glowing. Interesting enough to light you up." }
  ],
  "つまらない|": [
    { tag: "Culture corner", explain: "A classic gift phrase, 「つまらないものですが」. It's a boring thing, but please take it. Japanese people downplay gifts out of modesty. Now many say 「心ばかりのものですが」, a small token of my feelings, instead." },
    { tag: "Real-life Japanese", explain: "「この映画はつまらない」. This movie is boring. And kids say 「つまんない」, casual. And the opposite, 「おもしろい」. And when you're bored, 「ひま」, free, or 「たいくつ」, bored." }
  ],
  "やさしい|": [
    { tag: "Don't mix it up", explain: "Two kanji for 「やさしい」. 「優しい」, kind, gentle. 「易しい」, easy. Genki gives you both. 「やさしい人」, a kind person. 「やさしい問題」, an easy problem. And easy more often is 「簡単|かんたん」." },
    { tag: "Real-life Japanese", explain: "「やさしい」 is one of the top qualities people want in a partner in Japan. 「やさしい人が好き」. I like kind people. And 「やさしいね」, you're so sweet. And easy Japanese, 「やさしい日本語」, is used for foreigners." }
  ],
  "むずかしい|難しい": [
    { tag: "Real-life Japanese", explain: "「日本語は難しいですか」. Is Japanese hard? Everyone asks. And casually, 「むずい」. And in business, 「それはちょっと難しいですね」 means no. A polite rejection. It's not hard, it's not happening." },
    { tag: "Word family", explain: "「難|なん」 means difficulty. 「難民|なんみん」, refugee. 「難問|なんもん」, a tough question. And 「〜にくい」, hard to do, is a related idea. 「読みにくい」, hard to read." }
  ],
  "かっこいい|": [
    { tag: "Word family", explain: "「かっこう」 means appearance, style, and 「いい」, good. Good look. So cool. And the opposite, 「かっこ悪い|かっこわるい」, uncool, lame. And 「かっこつける」, to show off, act cool." },
    { tag: "Real-life Japanese", explain: "「かっこいい」 is for guys, cars, anything cool. For girls, 「かわいい」 or 「きれい」. But you can say 「かっこいい女性」 for a cool, strong woman. And 「かっけー」 is slang. So cool!" }
  ],
  "こわい|怖い": [
    { tag: "Real-life Japanese", explain: "「こわい！」, scary! And 「こわい映画」, a horror movie. And 「こわい先生」, a strict teacher. Japanese horror, like 「リング」, The Ring, is famous worldwide. And summer is ghost story season to cool down." },
    { tag: "Memory hook", explain: "The kanji 「怖」 has the heart part on the left. Fear is a heart thing. And 「こわい」 sounds like cower. You cower when it's scary. And 「こわれる」, to break, lesson eighteen, sounds close." }
  ],
  "きらい|嫌い": [
    { tag: "Real-life Japanese", explain: "「嫌い」 is strong. Japanese people often soften it, 「あまり好きじゃない」, not really a fan. And like 「好き」, it takes 「が」. 「虫が嫌いです」. I hate bugs. And a confession, 「嫌いじゃない」, I don't hate it, which might mean I like it." },
    { tag: "Don't mix it up", explain: "「嫌い」 looks like an い adjective but it's a な adjective! 「嫌いな食べ物」, a food I dislike. Same with 「きれい」. Both end in 「い」, both are 「な」. Sneaky ones." }
  ],
  "だいすき|大好き": [
    { tag: "Real-life Japanese", explain: "「大好き！」 is very common for things you love. 「ラーメンが大好き」. I love ramen. And to people, 「大好きだよ」 is warm and cute. Japanese uses it more freely than 「愛してる」." },
    { tag: "Word family", explain: "「大」 makes things extra. 「大好き」, love. 「大嫌い|だいきらい」, hate. 「大事|だいじ」, important. 「大切|たいせつ」, precious. 「大変|たいへん」, terrible, tough. Big feelings." }
  ],
  "だいきらい|大嫌い": [
    { tag: "Real-life Japanese", explain: "「大嫌い」 is very strong. Save it for things, like 「虫が大嫌い」, I hate bugs. To a person, it's harsh. Though in anime, a blushing 「大嫌い！」 often means I like you. Tsundere logic." },
    { tag: "Don't mix it up", explain: "Like and dislike scale. 「大好き」, love. 「好き」, like. 「あまり好きじゃない」, not really. 「嫌い」, dislike. 「大嫌い」, hate. All take 「が」. 「何が嫌いですか」. What do you dislike?" }
  ],
  "きれい|": [
    { tag: "Don't mix it up", explain: "「きれい」 is a な adjective, not い! 「きれいな花」, a beautiful flower. 「きれいじゃない」, not pretty. Never 「きれくない」. And it means both beautiful and clean. 「きれいな部屋」, a clean room." },
    { tag: "Real-life Japanese", explain: "The kanji is 「綺麗」, hard, so people use kana. And 「きれいにする」, to clean up. 「部屋をきれいにして」. Clean your room. And compliments, 「きれいですね」, it's beautiful." }
  ],
  "げんき|元気": [
    { tag: "Real-life Japanese", explain: "「お元気ですか」. How are you? Used for people you haven't seen in a while. Not daily. And 「元気？」, casual, how's it going? And 「元気出して」, cheer up! And Genki itself, your textbook, means energetic." },
    { tag: "Word family", explain: "「元|げん」, origin, base, and 「気|き」, spirit. Your base energy. 「元|もと」 also means former, like 「元カレ|もとカレ」, ex-boyfriend. And 「気」 in 「病気|びょうき」, illness, sick spirit." }
  ],
  "しずか|静か": [
    { tag: "Real-life Japanese", explain: "「静かにしてください」. Please be quiet. Teachers say this. And 「静かな町」, a quiet town. And on trains, a 「静か」 culture. Japanese trains are quiet, people don't talk loudly." },
    { tag: "Word family", explain: "「静|せい」 appears in 「静岡|しずおか」, Shizuoka, the prefecture near Mount Fuji, famous for tea. And 「冷静|れいせい」, calm, cool-headed. And Japanese has sound words for quiet, 「しーん」, the sound of silence." }
  ],
  "にぎやか|": [
    { tag: "Real-life Japanese", explain: "「にぎやかな町」, a lively town. And 「にぎやかな人」, a lively, fun person. It's positive. For annoyingly loud, use 「うるさい」. So a festival is 「にぎやか」, the neighbor's party at 2 a.m. is 「うるさい」." },
    { tag: "Culture corner", explain: "Tokyo's Shibuya and Osaka's Dotonbori are famous 「にぎやか」 places, full of lights, crowds, and noise. And shopping streets, 「商店街|しょうてんがい」, are lively with shopkeepers calling out." }
  ],
  "ひま|暇": [
    { tag: "Real-life Japanese", explain: "「今晩ひま？」 Free tonight? A casual invite. But careful, 「ひま」 can sound like you're bored, with nothing to do. Politer, 「時間ある？」, got time? And 「ひまつぶし」, killing time." },
    { tag: "Don't mix it up", explain: "「ひま」, free time, not busy. 「忙しい|いそがしい」, busy. And 「休み|やすみ」, a day off. 「ひま」 is a な adjective. 「ひまな日」, a free day. And 「ひまじゃない」, I'm not free." }
  ],
  "およぐ|泳ぐ": [
    { tag: "Culture corner", explain: "Almost every Japanese school has a pool, and kids learn to swim in summer PE classes. And on Japanese beaches, you might see 「遊泳禁止|ゆうえいきんし」, no swimming. Learn that sign." },
    { tag: "Real-life Japanese", explain: "「海で泳ぎます」. I swim in the sea. And 「泳げますか」, can you swim? That's the potential form, lesson thirteen. And 「泳ぎに行こう」, let's go swimming." }
  ],
  "のる|乗る": [
    { tag: "Don't mix it up", explain: "「乗る」 takes 「に」. 「電車に乗る」, get on a train. Not 「を」. And getting off is 「降りる|おりる」, with 「を」. 「電車を降りる」. And 「乗り換え|のりかえ」, transferring trains." },
    { tag: "Real-life Japanese", explain: "「乗る」 also means to go along with something. 「ノリがいい」, someone who goes with the flow, fun at parties. And 「調子に乗る|ちょうしにのる」, getting carried away, cocky. Ride the mood." }
  ],
  "やる|": [
    { tag: "Don't mix it up", explain: "「やる」 means to do, casual. Like 「する」 but more informal. 「宿題をやる」, do homework. 「何やってるの？」, what are you doing? And 「やる」 also means to give, to animals or plants. 「花に水をやる」, water the flowers." },
    { tag: "Real-life Japanese", explain: "「やった！」 means I did it! Yes! Pure joy. And 「やればできる」, if you try, you can do it. A famous motivational phrase. And 「やめて」, stop it, is a different verb, lesson eleven." }
  ],
  "でかける|出かける": [
    { tag: "Real-life Japanese", explain: "「出かけます」. I'm going out. And 「どこか出かけない？」, wanna go out somewhere? And returning home, 「出かけていた」, I was out. And 「お出かけ|おでかけ」, an outing." },
    { tag: "Word family", explain: "「出|で」 means to go out. 「出る|でる」, to leave. 「出口|でぐち」, exit. 「出発|しゅっぱつ」, departure. 「出かける」, go out. And train stations have many exits. 「東口|ひがしぐち」, east exit." }
  ],
  "いっしょに|一緒に": [
    { tag: "Real-life Japanese", explain: "「一緒に行きませんか」. Won't you go together? A polite invitation, lesson eight. And 「一緒に写真を撮ろう」, let's take a picture together. And 「いつも一緒」, always together." },
    { tag: "Word family", explain: "「一緒|いっしょ」 alone means the same. 「わたしも一緒」, me too, same here. And 「一緒にする」, to lump together. And 「一|いち」 plus 「緒|しょ」, thread. One thread. Together like a single thread." }
  ],
  "すごく|": [
    { tag: "Real-life Japanese", explain: "「すごく」 is extremely, before adjectives. 「すごくおいしい」, super delicious. And 「すごい！」 alone means amazing! Wow! And slang, 「すごい」 becomes 「すげー」 for guys. And 「めっちゃ」, very, is from Osaka." },
    { tag: "Word family", explain: "Very words. 「とても」, very, standard. 「すごく」, really, casual. 「本当に」, truly. 「めっちゃ」, super, slang. 「ちょう」, ultra, slang. And 「かなり」, quite. A whole intensity ladder." }
  ],
  "だいじょうぶ|大丈夫": [
    { tag: "Real-life Japanese", explain: "「大丈夫？」, are you okay? 「大丈夫です」, I'm fine. And also no thanks. 「袋は大丈夫です」. I don't need a bag. And 「大丈夫」 can be yes too. Context and tone, like 「いいです」." },
    { tag: "Memory hook", explain: "「大丈夫|だいじょうぶ」 originally meant a great man, a strong man. 「丈夫|じょうぶ」 means sturdy. So it's okay because a strong man is here. You're covered. 「大丈夫、大丈夫」." }
  ],
  "とても|": [
    { tag: "Real-life Japanese", explain: "「とても」 is the polite very. 「とてもきれいです」. It's very beautiful. And with negatives, 「とても無理」, totally impossible. And in casual speech, people prefer 「すごく」 or 「めっちゃ」." },
    { tag: "Don't mix it up", explain: "「とても」 can't be used with nouns alone. 「とても学生」 is wrong. It only boosts adjectives and some verbs. 「とても好き」, really like. And 「とっても」 is a cute, emphatic version." }
  ],
  "どんな|": [
    { tag: "Real-life Japanese", explain: "「どんな人ですか」. What kind of person are they? And 「どんな音楽が好きですか」. What kind of music do you like? It always goes before a noun. Great for conversation." },
    { tag: "Word family", explain: "こそあど again. 「こんな」, this kind. 「そんな」, that kind. 「あんな」, that kind over there. 「どんな」, what kind. 「そんなことない」, that's not true! A humble reply to compliments." }
  ],
  "〜まい|〜枚": [
    { tag: "Real-life Japanese", explain: "Flat things use 「枚」. Paper, shirts, tickets, plates, stamps, pizza. 「切手を三枚ください」. Three stamps, please. 「Tシャツ二枚」, two T-shirts. If it's flat, it's 「枚」." },
    { tag: "Memory hook", explain: "The kanji 「枚」 has 「木|き」, tree, on the left. Thin slices of wood, flat boards. Picture flat wooden planks. And it's easy to say, 「一枚」, 「二枚」, 「三枚」. No sound changes. Nice." }
  ],
  "やすみ|休み": [
    { tag: "Memory hook", explain: "The kanji 「休」 is a person, 「亻」, leaning against a tree, 「木」. Resting! One of the best picture kanji. A person taking a break under a tree." },
    { tag: "Real-life Japanese", explain: "「休み」 is a day off, holiday, break, or absence. 「夏休み|なつやすみ」, summer vacation. 「昼休み|ひるやすみ」, lunch break. 「今日は休みです」, I'm off today. And 「お休みなさい」, good night." }
  ],
  "おみやげ|お土産": [
    { tag: "Culture corner", explain: "In Japan, you bring 「おみやげ」 for coworkers after any trip, often individually wrapped snacks from the place you visited. Every region has famous ones. And train stations have whole floors of them. It's a social duty." },
    { tag: "Word family", explain: "The kanji are 「土産」, land, product. A product of the land. Local specialty. And 「土|ど」 is earth. 「産|さん」 is produce, birth. And a gift you bring when visiting someone is 「手土産|てみやげ」, hand souvenir." }
  ],
  "いそがしい|忙しい": [
    { tag: "Memory hook", explain: "The kanji 「忙」 is heart, 「忄」, plus 「亡|ぼう」, to lose. Busy means losing your heart! Too busy to feel. A deep little kanji. And 「忘|わす」, to forget, is the same parts stacked." },
    { tag: "Real-life Japanese", explain: "「最近、忙しいです」. I've been busy lately. Japanese people say this a lot. And 「お忙しいところすみません」. Sorry to bother you when you're busy. A polite business opener." }
  ]
});
/* Lesson 6 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "あける|開ける": [
    { tag: "Real-life Japanese", explain: "「窓を開けてもいいですか」. May I open the window? Lesson six's 「〜てもいい」, permission. And 「開けて！」, open up! And the self-opening partner, 「開く|あく」, comes in lesson eighteen. 「ドアが開く」, the door opens." },
    { tag: "Word family", explain: "The kanji 「開」 is a gate, 「門」, with hands lifting the bar. Opening the gate. With the Chinese reading 「かい」, 「開店|かいてん」, store opening. 「開始|かいし」, start. And 「満開|まんかい」, full bloom of cherry blossoms." }
  ],
  "でんき|電気": [
    { tag: "Real-life Japanese", explain: "「電気」 means electricity and the lights. 「電気をつけて」, turn on the light. 「電気を消して|でんきをけして」, turn it off. And 「電気代|でんきだい」, the electric bill. Japanese say lights as electricity." },
    { tag: "Culture corner", explain: "Tokyo's 「秋葉原|あきはばら」 began as an electronics town, 「電気街|でんきがい」, electric town. Now it's famous for anime, games, and maid cafés. And Japan uses two electric frequencies, east and west, 50 and 60 hertz." }
  ],
  "まど|窓": [
    { tag: "Real-life Japanese", explain: "「窓を開ける」, open the window. 「窓を閉める|まどをしめる」, close it. And 「窓側|まどがわ」, the window side. On a train, 「窓側の席」, a window seat. And 「窓口|まどぐち」, a service window, like at a bank." },
    { tag: "Word family", explain: "「窓口|まどぐち」, window mouth, is a counter where you get help. 「切符の窓口」, the ticket window. And 「出窓|でまど」, a bay window. And the kanji has a roof, 「穴」, a hole on top. A hole in the wall." }
  ],
  "すわる|座る": [
    { tag: "Real-life Japanese", explain: "「座ってください」. Please sit down. And 「ここに座ってもいいですか」. May I sit here? Lesson six's permission. And polite, 「おかけください」, lesson nineteen. And 「正座|せいざ」, the formal kneeling sit." },
    { tag: "Culture corner", explain: "「正座|せいざ」 is kneeling with your legs folded under you, the formal way to sit on tatami. It hurts after a while! Legs fall asleep, 「足がしびれる」. Hosts often say 「足をくずしてください」, please sit comfortably." }
  ],
  "たつ|立つ": [
    { tag: "Real-life Japanese", explain: "「立ってください」. Please stand up. And 「起立|きりつ」, stand, said at the start of Japanese classes. And 「役に立つ|やくにたつ」, to be useful. 「この辞書は役に立つ」. This dictionary is useful." },
    { tag: "Memory hook", explain: "The kanji 「立」 is a person standing on the ground, arms out, feet on a line. Standing up. And 「立」 in 「国立|こくりつ」, national, established by the country. And 「立ち読み」, reading standing up." }
  ],
  "にもつ|荷物": [
    { tag: "Real-life Japanese", explain: "「荷物を持ちましょうか」. Shall I carry your bags? A kind offer. And 「荷物が多い」, I have lots of luggage. And Japan has amazing luggage delivery, 「宅急便|たっきゅうびん」, to send bags ahead to your hotel." },
    { tag: "Word family", explain: "「荷|に」 means a load, cargo. 「荷物」, luggage, load things. And 「お荷物|おにもつ」, sometimes means a burden person. Ouch. And 「荷造り|にづくり」, packing. 「物|もつ」 here is the Chinese-ish reading of 「もの」." }
  ],
  "おふろ|お風呂": [
    { tag: "Culture corner", explain: "Japanese bathing: wash and rinse outside the tub, then soak in clean hot water. The family often shares the same bath water, so never pull the plug. And nightly baths are standard. It's for relaxing, not just cleaning." },
    { tag: "Real-life Japanese", explain: "「お風呂に入る」, take a bath, literally enter the bath. And 「お風呂が沸いた」, the bath is ready, lesson eighteen. And 「お風呂上がり|おふろあがり」, just out of the bath, when people drink cold milk." }
  ],
  "シャワー|": [
    { tag: "Real-life Japanese", explain: "「シャワーを浴びる|シャワーをあびる」, take a shower, literally bathe in a shower. And many Japanese people shower in the morning and bathe at night. And 「シャワーだけ」, just a shower, in hot summer." },
    { tag: "Sound it out", explain: "English shower, the sh sound becomes 「シャ」, small 「ャ」. Then 「ワー」 for the ow-er. Same trick as 「シャツ」, shirt, and 「シャンプー」. Small 「ャ」, 「ュ」, 「ョ」 create new sounds." }
  ],
  "きょうかしょ|教科書": [
    { tag: "Word family", explain: "「教|きょう」, to teach, 「科|か」, subject, 「書|しょ」, book. A subject teaching book. And 「教室|きょうしつ」, classroom. 「教会|きょうかい」, church. 「宗教|しゅうきょう」, religion. 「教える|おしえる」, to teach." },
    { tag: "Real-life Japanese", explain: "「教科書の三十ページを開けてください」. Please open your textbook to page thirty. You'll hear that in class. And 「教科書を忘れました」, I forgot my textbook. Also very common." }
  ],
  "てつだう|手伝う": [
    { tag: "Real-life Japanese", explain: "「手伝いましょうか」. Shall I help? And 「手伝ってくれませんか」. Could you help me? And 「お手伝い|おてつだい」, chores kids do to help. 「お手伝いをする」, help out at home." },
    { tag: "Memory hook", explain: "「手|て」, hand, and 「伝う|つたう」, to pass along. Lending a hand, passing your hand to someone. And it takes 「を」 for the task. 「宿題を手伝う」, help with homework. And 「に」 for the person sometimes." }
  ],
  "かんじ|漢字": [
    { tag: "Word family", explain: "「漢|かん」 refers to the Han dynasty of China. So 「漢字」, Han characters. And 「字|じ」, a letter or character. 「ローマ字」, romaji, Roman letters. 「数字|すうじ」, numbers. 「字が上手」, nice handwriting." },
    { tag: "Culture corner", explain: "Japanese schools teach 1,026 kanji in elementary school and the 「常用漢字|じょうようかんじ」, about 2,136 everyday kanji, by high school. There's a national kanji test, 「漢検|かんけん」. And every December, a kanji of the year is chosen at a temple in Kyoto." }
  ],
  "ページ|": [
    { tag: "Real-life Japanese", explain: "「何ページですか」. What page? And 「次のページ|つぎのページ」, the next page. And counting pages, 「一ページ」, or sometimes 「いっぺーじ」 in fast speech. And 「ホームページ」 means a website in Japanese." },
    { tag: "Don't mix it up", explain: "Japanese uses 「ホームページ」 for any website, not just the home page. 「会社のホームページ」, the company website. Shortened to 「HP」. And a web page is 「ウェブページ」. Interesting for a web developer!" }
  ],
  "つぎ|次": [
    { tag: "Real-life Japanese", explain: "On trains, 「次は渋谷です|つぎはしぶやです」. Next is Shibuya. You'll hear it constantly. And 「次の人どうぞ」, next person, please. And 「次に」, next, in a list of steps." },
    { tag: "Word family", explain: "「次|じ」 with the Chinese reading. 「目次|もくじ」, table of contents. 「次回|じかい」, next time. And 「次々|つぎつぎ」, one after another. 「次々に人が来た」. People came one after another." }
  ],
  "おかね|お金": [
    { tag: "Real-life Japanese", explain: "「お金がない」. I'm broke. And 「お金を払う|おかねをはらう」, to pay. 「お金をおろす」, to withdraw money from the ATM. And 「お金持ち|おかねもち」, a rich person, money holder." },
    { tag: "Culture corner", explain: "Japanese money is the 「円|えん」, yen. Coins go up to five hundred. The five yen coin, 「五円|ごえん」, is lucky, because 「ご縁」 means connection. People toss it at shrines. And Japan redesigned its bills in 2024." }
  ],
  "パソコン|": [
    { tag: "Real-life Japanese", explain: "「パソコンを使ってもいいですか」. May I use the computer? And 「パソコンが壊れた」. My computer broke. And 「ノートパソコン」, a laptop. Japanese people often say 「PC」 too." },
    { tag: "Sound it out", explain: "「パソコン」, from personal computer. Take the first parts, 「パーソナル」 and 「コンピューター」, and smash them. 「パソ」 plus 「コン」. Japan loves two plus two syllable clips. 「スマホ」, 「コンビニ」, 「エアコン」." }
  ],
  "エアコン|": [
    { tag: "Real-life Japanese", explain: "「エアコンをつけて」, turn on the AC. And 「エアコンが効かない|エアコンがきかない」, the AC isn't working. And in Japan, 「エアコン」 usually does both cooling and heating. One wall unit per room." },
    { tag: "Sound it out", explain: "Air conditioner shortened to 「エアコン」. 「エア」, air, plus 「コン」 from conditioner. And 「クーラー」 is older and means AC for cooling. Grandparents still say 「クーラー」." }
  ],
  "でんしゃ|電車": [
    { tag: "Culture corner", explain: "Japanese trains are incredibly punctual, average delays of seconds. Rush hour trains are packed. There are women-only cars in the morning. And the conductors point and call out checks, called 「指差し確認|ゆびさしかくにん」." },
    { tag: "Real-life Japanese", explain: "「電車で学校に行きます」. I go to school by train. 「で」 for how. And 「電車に乗る」, take the train. And 「電車が遅れている」. The train is late. Station staff hand out delay slips." }
  ],
  "くに|国": [
    { tag: "Real-life Japanese", explain: "「お国はどちらですか」. Where are you from? Polite. And 「国に帰る」, go back to my country. And 「くに」 can also mean hometown, region, in Japan. 「くにの母」, my mother back home." },
    { tag: "Word family", explain: "「国|こく」 with the Chinese reading. 「外国|がいこく」, foreign country. 「中国|ちゅうごく」, China. 「韓国|かんこく」, Korea. 「国際|こくさい」, international. And the kanji is a jewel, 「玉」, inside a border, 「口」." }
  ],
  "こんしゅう|今週": [
    { tag: "Real-life Japanese", explain: "「今週は忙しいです」. I'm busy this week. And 「今週の土曜日」, this Saturday. And 「今週中に|こんしゅうちゅうに」, sometime this week, by the end of this week." },
    { tag: "Word family", explain: "「週|しゅう」, week. 「今週」, this week. 「先週」, last week. 「来週」, next week. 「毎週」, every week. 「週末」, weekend. 「一週間|いっしゅうかん」, one week. Notice 「いっ」." }
  ],
  "らいしゅう|来週": [
    { tag: "Real-life Japanese", explain: "「来週、テストがあります」. There's a test next week. And 「また来週」, see you next week. A common goodbye in class. And 「来週の月曜日」, next Monday." },
    { tag: "Memory hook", explain: "「来|らい」 means coming. The coming week. And 「来る|くる」, to come. And 「来年|らいねん」, next year, 「来月|らいげつ」, next month. The future is always coming toward you." }
  ],
  "らいねん|来年": [
    { tag: "Real-life Japanese", explain: "「来年、日本に行きたいです」. I want to go to Japan next year. And at year's end, 「来年もよろしくお願いします」. Please treat me well next year too. Said in late December." },
    { tag: "Culture corner", explain: "A Japanese saying, 「来年のことを言えば鬼が笑う|らいねんのことをいえばおにがわらう」. If you talk about next year, the ogre laughs. Meaning, nobody can predict the future. A fun proverb." }
  ],
  "よる|夜": [
    { tag: "Word family", explain: "「夜|や」 with the Chinese reading. 「夜行バス|やこうバス」, night bus. 「今夜|こんや」, tonight. And 「夜中|よなか」, the middle of the night. And 「夜景|やけい」, a night view, like city lights from a mountain." },
    { tag: "Don't mix it up", explain: "「夜|よる」, night. 「晩|ばん」, evening. Similar, but 「夜」 is later and darker. 「よる」 also sounds like 「寄る|よる」, to stop by, lesson nineteen. And 「夜」 has the reading 「よ」 in 「夜中」." }
  ],
  "たいへん|大変": [
    { tag: "Real-life Japanese", explain: "「大変ですね」 is how you show sympathy. Someone tells you about their hard week. 「それは大変ですね」. That must be tough. A super useful phrase. And 「大変！」 alone means, oh no! Emergency!" },
    { tag: "Word family", explain: "「大変」 as an adverb means very, in formal speech. 「大変申し訳ありません」. I'm very sorry. Businesses use it. And 「変|へん」 alone means strange. 「変な人」, a weird person." }
  ],
  "あそぶ|遊ぶ": [
    { tag: "Don't mix it up", explain: "「遊ぶ」 is not just play like a kid. Adults use it for hanging out. 「友だちと遊ぶ」, hang out with friends. And for sports and instruments, don't use 「遊ぶ」. Use 「する」 or 「ひく」. 「テニスをする」." },
    { tag: "Real-life Japanese", explain: "「遊びに来てください」. Please come visit, come hang out. A warm invitation. And 「遊びに行く」, go out for fun. And 「遊園地|ゆうえんち」, an amusement park, playing garden." }
  ],
  "いそぐ|急ぐ": [
    { tag: "Real-life Japanese", explain: "「急いでください」. Please hurry. And 「急いで！」, hurry up! And 「急がなくていいです」, no need to hurry. And the 「急」 kanji in 「急行|きゅうこう」, an express train. Faster than the local." },
    { tag: "Word family", explain: "Train types. 「各駅停車|かくえきていしゃ」, local, stops every station. 「急行|きゅうこう」, express. 「特急|とっきゅう」, limited express. And 「急に|きゅうに」, suddenly. Lesson fourteen." }
  ],
  "かえす|返す": [
    { tag: "Don't mix it up", explain: "「返す|かえす」, return a thing. 「帰る|かえる」, return home, a person. Different kanji, similar sound. 「本を返す」, return the book. 「うちに帰る」, go home. And 「借りる」, borrow, then 「返す」, return it." },
    { tag: "Word family", explain: "「返事|へんじ」, a reply, lesson sixteen. 「お返し|おかえし」, a return gift, lesson fourteen. 「返品|へんぴん」, returning a product. And 「くり返す|くりかえす」, to repeat. Return, return again." }
  ],
  "けす|消す": [
    { tag: "Real-life Japanese", explain: "「電気を消してください」. Please turn off the light. And 「テレビを消して」. Turn off the TV. And erase, 「名前を消す」, erase a name. And 「消しゴム|けしゴム」, eraser, erase rubber." },
    { tag: "Word family", explain: "「消|しょう」 in 「消防士|しょうぼうし」, firefighter, fire-extinguishing person. 「消防車|しょうぼうしゃ」, fire truck. 「消化|しょうか」, digestion. And its partner, 「消える|きえる」, to go out, lesson eighteen." }
  ],
  "しぬ|死ぬ": [
    { tag: "Don't mix it up", explain: "「死ぬ」 is the only common verb ending in 「ぬ」. It's the textbook example for the 「ぬ」 conjugation. 「死にます」, 「死んで」. And politely, people say 「亡くなる|なくなる」, to pass away, about real people." },
    { tag: "Culture corner", explain: "The number four, 「四|し」, sounds like 「死|し」, death. So hospitals and hotels in Japan sometimes skip room four. And gifts never come in sets of four. Use 「よん」 for four to avoid it." }
  ],
  "たばこをすう|たばこを吸う": [
    { tag: "Culture corner", explain: "Japan has designated smoking areas, 「喫煙所|きつえんじょ」, and many cities ban smoking while walking on the street. Indoor smoking is now mostly banned too. And signs say 「禁煙|きんえん」, no smoking." },
    { tag: "Word family", explain: "「吸う|すう」 means to inhale, suck. 「息を吸う|いきをすう」, to breathe in. 「吸い込む」, to suck in. And 「たばこ」 came from Portuguese tabaco. Another Portuguese word, like 「パン」." }
  ],
  "つかう|使う": [
    { tag: "Real-life Japanese", explain: "「このペンを使ってもいいですか」. May I use this pen? And 「はしを使う」, to use chopsticks. And 「使い方|つかいかた」, how to use. 「使い方を教えてください」. Please show me how to use it." },
    { tag: "Word family", explain: "「使|し」 in 「大使|たいし」, ambassador, big messenger. 「大使館|たいしかん」, embassy. 「天使|てんし」, an angel, heaven's messenger. And 「使い捨て|つかいすて」, disposable, use and throw away." }
  ],
  "はいる|入る": [
    { tag: "Don't mix it up", explain: "「入る」 looks like a ru-verb but it's a u-verb. 「入ります」, 「入って」. And it takes 「に」. 「部屋に入る」, enter a room. And 「入れる|いれる」, put in, is its partner, lesson sixteen." },
    { tag: "Real-life Japanese", explain: "「入ってもいいですか」. May I come in? And 「お風呂に入る」, take a bath. 「大学に入る」, enter college. 「クラブに入る」, join a club. Entering anything. And 「入口|いりぐち」, entrance." }
  ],
  "もつ|持つ": [
    { tag: "Real-life Japanese", explain: "「持っている」 means to have, own. 「車を持っています」. I have a car. And 「荷物を持ちましょうか」. Shall I carry your bag? And 「ちょっと持って」, hold this for a sec." },
    { tag: "Word family", explain: "「持ってくる」, bring a thing. 「持っていく」, take a thing. 「お金持ち|おかねもち」, rich, money holder. 「気持ち|きもち」, feelings, what your heart holds. And 「持ち物|もちもの」, belongings." }
  ],
  "やすむ|休む": [
    { tag: "Real-life Japanese", explain: "「休む」 means rest, and also be absent. 「学校を休む」, miss school. 「今日は休みます」, I'm taking the day off. And 「ゆっくり休んでください」. Rest well. To someone sick." },
    { tag: "Memory hook", explain: "Same kanji as 「休み」, a person leaning against a tree. Resting. And 「休憩|きゅうけい」, a break, at work. 「十分休憩しましょう」. Let's take a ten minute break." }
  ],
  "しめる|閉める": [
    { tag: "Real-life Japanese", explain: "「ドアを閉めてください」. Please close the door. And 「窓を閉めて」, close the window. And shops, 「店を閉める」, close the shop. And its self partner, 「閉まる|しまる」, lesson eighteen." },
    { tag: "Don't mix it up", explain: "「しめる」 has many meanings with different kanji. 「閉める」, close. 「締める」, tighten, like a seatbelt or tie. 「ネクタイを締める」. And 「湿る|しめる」, to get damp. Context, as always." }
  ],
  "おしえる|教える": [
    { tag: "Real-life Japanese", explain: "「教える」 also means to tell, give information. 「電話番号を教えてください」. Please tell me your phone number. Not 「言う」. And 「道を教える」, give directions. Teaching and telling." },
    { tag: "Word family", explain: "「教|きょう」 in 「教室|きょうしつ」, classroom. 「教師|きょうし」, teacher. 「教会|きょうかい」, church. 「宗教|しゅうきょう」, religion. And 「教わる|おそわる」, to be taught, from someone." }
  ],
  "わすれる|忘れる": [
    { tag: "Real-life Japanese", explain: "「宿題を忘れました」. I forgot my homework. And 「忘れ物|わすれもの」, an item left behind. Trains announce, 「お忘れ物のないよう」, please don't leave anything behind. And 「忘れないで」, don't forget." },
    { tag: "Memory hook", explain: "The kanji 「忘」 is 「亡」, to lose, over 「心」, heart. Lost from your heart. Forgetting. Same parts as 「忙しい|いそがしい」, busy, rearranged. Busy and forgetful, same pieces. Very true." }
  ],
  "おりる|降りる": [
    { tag: "Real-life Japanese", explain: "「次の駅で降ります」. I'm getting off at the next station. And 「電車を降りる」, uses 「を」. Get on with 「に」, off with 「を」. And 「降ります！」, getting off! When pushing through a crowd." },
    { tag: "Word family", explain: "「降」 also reads 「ふる」, to fall from the sky. 「雨が降る|あめがふる」, it rains. Lesson eight. Same kanji, coming down. And 「おりる」 also means coming down stairs, 「階段を下りる」." }
  ],
  "かりる|借りる": [
    { tag: "Real-life Japanese", explain: "「本を借りてもいいですか」. May I borrow the book? And 「友だちにお金を借りた」. I borrowed money from a friend. Note 「に」 for who. And 「借りる」 also means to rent. 「アパートを借りる」." },
    { tag: "Don't mix it up", explain: "The borrowing trio. 「借りる」, borrow, it comes to me. 「貸す|かす」, lend, it goes away. 「返す|かえす」, return it. 「図書館で本を借りて、一週間後に返します」. Borrow, then return a week later." }
  ],
  "シャワーをあびる|シャワーを浴びる": [
    { tag: "Word family", explain: "「浴びる|あびる」 means to be showered with, bathe in. 「日光を浴びる|にっこうをあびる」, sunbathe. And 「浴衣|ゆかた」, summer kimono, bath clothes. And 「浴室|よくしつ」, bathroom." },
    { tag: "Real-life Japanese", explain: "「朝シャワーを浴びます」. I shower in the morning. And 「朝シャン」, morning shampoo, is slang for washing your hair in the morning. Was trendy in the eighties. And 「シャワーだけ浴びる」, just shower." }
  ],
  "つける|": [
    { tag: "Real-life Japanese", explain: "「電気をつけてください」. Please turn on the light. And 「テレビをつける」, turn on TV. 「エアコンをつける」, AC. And its partner, 「つく」, it comes on, lesson eighteen." },
    { tag: "Word family", explain: "「つける」 is a busy verb. 「気をつける|きをつける」, be careful, attach your spirit! 「名前をつける」, give a name. 「日記をつける」, keep a diary. And 「つけて」, attach. Turn on, attach, apply." }
  ],
  "でんわする|電話する": [
    { tag: "Real-life Japanese", explain: "「あとで電話します」. I'll call you later. And 「母に電話する」, call my mom, with 「に」. And 「電話してね」, call me! And 「電話をかける」 means the same, a bit more formal." },
    { tag: "Culture corner", explain: "Many Japanese people now use the LINE app for messages and calls. 「LINEして」, message me on LINE. It's the dominant chat app in Japan. Exchanging LINE contacts is how friendships start." }
  ],
  "つれてくる|連れてくる": [
    { tag: "Real-life Japanese", explain: "「友だちを連れてきてもいいですか」. May I bring a friend? Great permission question. And 「犬を連れてくる」, bring the dog. People and animals only. For things, 「持ってくる」." },
    { tag: "Don't mix it up", explain: "Direction matters. 「連れてくる」, bring here, toward me. 「連れていく」, take there, away from me, lesson sixteen. 「パーティーに彼女を連れていく」. I'll take my girlfriend to the party." }
  ],
  "もってくる|持ってくる": [
    { tag: "Real-life Japanese", explain: "「何を持ってくればいいですか」. What should I bring? Perfect before a party. And 「傘を持ってきて」, bring an umbrella. And potlucks in Japan, 「持ち寄り|もちより」, everyone brings something." },
    { tag: "Don't mix it up", explain: "「持ってくる」, bring things here. 「持っていく」, take things there. 「連れてくる」, bring people. The verb 「持つ」, hold, plus come or go. Holding something and coming." }
  ],
  "あとで|後で": [
    { tag: "Real-life Japanese", explain: "「あとでね」, see you later, catch you later. And 「あとで電話します」, I'll call later. And kids' favorite reply to chores, 「あとで」. Later. Which means never." },
    { tag: "Don't mix it up", explain: "「あとで」, later, vague. 「〜の後で」, after something specific. 「授業の後で」, after class. 「食べた後で」, after eating. And 「〜てから」, after doing, lesson six. Similar." }
  ],
  "すぐ|": [
    { tag: "Real-life Japanese", explain: "「すぐ行きます」, I'll be right there. And 「すぐ近く」, very close by. 「駅のすぐ前」, right in front of the station. And 「すぐに」 is the same. And 「今すぐ」, right now, lesson eighteen." },
    { tag: "Word family", explain: "「すぐ」 has a feeling of easily, too. 「すぐ泣く」, cries easily. 「すぐ忘れる」, forgets easily. So 「すぐ」 means fast and also too quickly. Context." }
  ],
  "ゆっくり|": [
    { tag: "Real-life Japanese", explain: "「ゆっくり話してください」. Please speak slowly. Learner lifesaver. And 「ごゆっくりどうぞ」, take your time, enjoy, said by waiters and hotel staff. And 「ゆっくり休んで」, rest well." },
    { tag: "Culture corner", explain: "「ゆっくり」 has a relaxing feeling. Taking it easy. 「温泉でゆっくりする」, relax at a hot spring. Japanese people value this time to unwind after hard work. 「ゆっくりしていってね」, stay and relax." }
  ],
  "けっこうです|結構です": [
    { tag: "Don't mix it up", explain: "Tricky one! 「結構です」 can mean no thanks, or that's fine, yes. Offered more food, 「もう結構です」, no more, thanks. But 「それで結構です」, that's fine. Tone and context decide." },
    { tag: "Word family", explain: "「結構|けっこう」 also means quite, pretty. 「結構おいしい」, pretty tasty. Very common in speech. And 「結|けつ」 means to tie, as in 「結婚|けっこん」, marriage. Tying knots." }
  ],
  "ほんとうですか|本当ですか": [
    { tag: "Real-life Japanese", explain: "「本当ですか」, really? And casually, 「ほんと？」. And super casual, 「マジ？」. And for surprise, 「うそ！」, no way! Literally lie! It doesn't accuse, it just means wow." },
    { tag: "Word family", explain: "「本当|ほんとう」, truth. 「本当に」, really. 「本当は」, actually, lesson nineteen. 「本物|ほんもの」, the real thing. And 「嘘|うそ」, lie, the opposite." }
  ]
});
/* Lesson 7 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "めがね|": [
    { tag: "Real-life Japanese", explain: "「めがねをかける」, put on glasses. And describing someone, 「めがねをかけている人」, the person wearing glasses. Lesson seven's 「〜ている」 for a state. And taking them off, 「めがねを外す|めがねをはずす」." },
    { tag: "Memory hook", explain: "The kanji are 「眼鏡」, eye mirror. 「眼|め」, eye, and 「鏡|かがみ」, mirror. Glasses are little mirrors for your eyes. And anime has a word, 「めがねキャラ」, the glasses character, usually the smart one." }
  ],
  "うたう|歌う": [
    { tag: "Real-life Japanese", explain: "「カラオケで歌いましょう」. Let's sing at karaoke! And 「歌が上手ですね」. You're a good singer. And 「歌ってください」, please sing. In Japan, everyone eventually gets asked to sing at karaoke." },
    { tag: "Word family", explain: "「歌|か」 in 「歌手|かしゅ」, singer, lesson eleven. 「歌舞伎|かぶき」, kabuki, song dance skill, lesson nine. And 「国歌|こっか」, national anthem. And 「歌|うた」, a song. Song and singing share one kanji." }
  ],
  "かみ|髪": [
    { tag: "Real-life Japanese", explain: "Describing hair, 「髪が長い」, long hair. 「髪が短い|かみがみじかい」, short hair. And 「髪を切る」, get a haircut. And lesson seven's pattern, 「〜は〜が〜」. 「メアリーさんは髪が長いです」. Mary has long hair." },
    { tag: "Don't mix it up", explain: "「髪|かみ」, hair on your head. 「毛|け」, hair or fur in general, body hair. 「髪の毛|かみのけ」, a strand of hair. And remember 「紙|かみ」, paper, and 「神|かみ」, god. Context saves you." }
  ],
  "め|目": [
    { tag: "Memory hook", explain: "The kanji 「目」 is an eye turned on its side. Turn your head and you'll see it, an eye with the iris lines. And 「目」 is part of 「見|み」, to see, an eye on legs. Eyes everywhere." },
    { tag: "Word family", explain: "「目」 phrases. 「目がいい」, good eyesight. 「目が悪い」, bad eyesight. 「目が覚める|めがさめる」, wake up, eyes awaken. And 「一つ目|ひとつめ」, the first one. 「目」 makes ordinals! 「二つ目」, second." }
  ],
  "くち|口": [
    { tag: "Word family", explain: "「口」 is mouth and also an opening. 「入口|いりぐち」, entrance, enter mouth. 「出口|でぐち」, exit. 「東口」, east exit. And 「人口|じんこう」, population, people mouths to feed. Cool!" },
    { tag: "Real-life Japanese", explain: "「口が大きい」, a big mouth. And idioms, 「口が悪い|くちがわるい」, foul-mouthed. 「口がかたい」, tight-lipped, keeps secrets. 「口に合う|くちにあう」, suits your taste. 「お口に合いますか」. Is it to your taste?" }
  ],
  "せがたかい|背が高い": [
    { tag: "Real-life Japanese", explain: "「背が高い」, tall, literally back is high. 「兄は背が高いです」. My big brother is tall. And 「背が高くなった」, got taller. And don't use 「高い」 alone for people. 「高い人」 sounds like an expensive person!" },
    { tag: "Word family", explain: "「背|せ」 means back or height. 「背中|せなか」, your back. 「背」 also height. 「背比べ|せいくらべ」, comparing heights. And Japanese kids mark their height on a pillar at home, a famous children's song." }
  ],
  "かぶる|": [
    { tag: "Real-life Japanese", explain: "Hats use 「かぶる」. 「ぼうしをかぶる」, put on a hat. And 「ぼうしをかぶっている」, wearing a hat. Things that go on your head. And 「布団をかぶる」, pull the covers over your head." },
    { tag: "Don't mix it up", explain: "「かぶる」 also means to overlap, to clash. 「予定がかぶった」, my plans overlap. 「服がかぶった」, we wore the same outfit! Embarrassing. Slang from putting on the same hat." }
  ],
  "おじいさん|": [
    { tag: "Don't mix it up", explain: "Long vowel alert! 「おじいさん」, grandfather, long 「じい」. 「おじさん」, uncle, short 「じ」. A big difference. And your own grandfather to others is 「祖父|そふ」. Casual, 「おじいちゃん」." },
    { tag: "Culture corner", explain: "「おじいさん」 also means any old man. And Japan has one of the oldest populations in the world. Many 「おじいさん」 are very active, hiking and working. And Japan has a holiday, 「敬老の日|けいろうのひ」, Respect for the Aged Day." }
  ],
  "きる|着る": [
    { tag: "Real-life Japanese", explain: "「着る」 is for the upper body. Shirts, jackets, coats, dresses. 「コートを着る」. And 「着物|きもの」, kimono, the wearing thing. And 「〜を着ている」, wearing. 「赤いシャツを着ている人」." },
    { tag: "Don't mix it up", explain: "Two 「きる」. 「着る」, to wear, a ru-verb. 「着ます」. 「切る」, to cut, a u-verb. 「切ります」. And 「来る|くる」 makes 「来ます|きます」. So 「きます」 can be come or wear! Context." }
  ],
  "かわいい|": [
    { tag: "Culture corner", explain: "「かわいい」 culture is huge in Japan. Mascots, 「ゆるキャラ」, for every city and company. Hello Kitty. Cute police mascots. Even serious things get cute versions. 「かわいい」 is a value, not just an adjective." },
    { tag: "Real-life Japanese", explain: "「かわいい！」 is said constantly, for babies, clothes, food, anything. And 「かわいそう」, a different word, means poor thing, pitiful. Careful! 「かわいそうな犬」, the poor dog. Not cute." }
  ],
  "かぞく|家族": [
    { tag: "Real-life Japanese", explain: "「何人家族ですか|なんにんかぞくですか」. How many people in your family? Answer, 「四人家族です」. Four people. And 「家族の写真」, a family photo. People in Japan count themselves in the number." },
    { tag: "Word family", explain: "「族|ぞく」 means tribe, group. 「家族」, house group. 「民族|みんぞく」, ethnic group. And slang, 「暴走族|ぼうそうぞく」, biker gangs. And 「家族」 for your family, 「ご家族」 for someone else's." }
  ],
  "おばあさん|": [
    { tag: "Don't mix it up", explain: "Again, long vowel! 「おばあさん」, grandmother, long 「ばあ」. 「おばさん」, aunt, short. Say it wrong and you've called your aunt grandma! And your own grandmother to others, 「祖母|そぼ」. Casual, 「おばあちゃん」." },
    { tag: "Culture corner", explain: "Japanese grandmas, 「おばあちゃん」, are famous for long lives, especially in Okinawa, a Blue Zone. And they often run little shops or farms into their nineties. And 「おばあちゃんの知恵」, grandma's wisdom, life hacks." }
  ],
  "ちち|父": [
    { tag: "Don't mix it up", explain: "「父|ちち」 is your own father, talking to others. 「父は会社員です」. Never 「お父さん」 about your own dad to outsiders. And 「父の日|ちちのひ」, Father's Day. And 「父親|ちちおや」, a father, neutral." },
    { tag: "Memory hook", explain: "The kanji 「父」 shows two crossed sticks, like hands holding tools, or an axe. The father, the worker. And 「祖父|そふ」, grandfather. 「父」 appears there at the bottom, the father of the father." }
  ],
  "はは|母": [
    { tag: "Memory hook", explain: "The kanji 「母」 is a woman with two dots, breasts, a mother nursing. And it's inside 「毎|まい」, every. Mom, every day. And 「母」 appears in 「祖母|そぼ」, grandmother." },
    { tag: "Real-life Japanese", explain: "「母は料理が上手です」. My mother is a good cook. And 「母の日|ははのひ」, Mother's Day, with red carnations, the same as America. And 「母国語|ぼこくご」, mother tongue, native language." }
  ],
  "あに|兄": [
    { tag: "Real-life Japanese", explain: "「兄は東京に住んでいます」. My older brother lives in Tokyo. Your own brother to others. And to his face, call him 「お兄ちゃん」 or 「兄さん|にいさん」. And older guys in a gang call their boss 「アニキ」, big bro." },
    { tag: "Word family", explain: "「兄|きょう」 in 「兄弟|きょうだい」, siblings, older and younger brothers. And 「兄|けい」 in formal letters. And 「義理の兄|ぎりのあに」, brother-in-law. 「義理」 means in-law, by obligation." }
  ],
  "あね|姉": [
    { tag: "Real-life Japanese", explain: "「姉は先生です」. My older sister is a teacher. And to her face, 「お姉ちゃん」. And 「姉妹|しまい」, sisters. 「姉妹都市|しまいとし」, sister cities. Boulder's sister city in Japan is Yamagata, 「山形|やまがた」." },
    { tag: "Memory hook", explain: "The kanji 「姉」 is 「女|おんな」, woman, plus 「市|し」, market or city. The big sister who goes to the market. And 「あね」 sounds like Anne. Big sister Anne." }
  ],
  "きょうだい|兄弟": [
    { tag: "Real-life Japanese", explain: "「兄弟がいますか」. Do you have siblings? Answer, 「兄が一人います」, I have one older brother. Or 「一人っ子|ひとりっこ」, an only child. And 「兄弟げんか」, sibling fights." },
    { tag: "Word family", explain: "「兄弟」 is literally older brother, younger brother, but it covers sisters too in casual speech. 「姉妹|しまい」 is just sisters. And formal, 「兄弟姉妹|きょうだいしまい」, all siblings." }
  ],
  "おとこのひと|男の人": [
    { tag: "Memory hook", explain: "The kanji 「男」 is a rice field, 「田」, plus power, 「力|ちから」. The man is the power in the rice field. Old-fashioned, but it sticks. And 「男の子|おとこのこ」, a boy." },
    { tag: "Don't mix it up", explain: "Man words. 「男の人」, a man, polite and neutral. 「男性|だんせい」, formal, on signs. 「男」 alone, a bit rough. And on restrooms, 「男」 or 「殿方|とのがた」. Look for blue too." }
  ],
  "おんなのひと|女の人": [
    { tag: "Memory hook", explain: "The kanji 「女」 is a woman kneeling gracefully, arms crossed. And it's a part in many kanji, 「好|す」, like, 「姉|あね」, 「妹|いもうと」. And 「女の子|おんなのこ」, a girl." },
    { tag: "Don't mix it up", explain: "Woman words. 「女の人」, neutral. 「女性|じょせい」, formal. 「女」 alone, rough. And restrooms, 「女」 or 「婦人|ふじん」. Usually red. And 「女子|じょし」, girls, used even for adult women casually." }
  ],
  "かいしゃ|会社": [
    { tag: "Real-life Japanese", explain: "「会社に行く」, go to work, go to the company. And 「会社を休む」, take a day off work. And Japanese people often say 「うちの会社」, our company, as if it's family. Company loyalty is strong." },
    { tag: "Word family", explain: "「社|しゃ」, company, society. 「社長|しゃちょう」, company president. 「社会|しゃかい」, society, the reverse kanji! 「会社」 and 「社会」, company and society. And 「神社|じんじゃ」, a shrine." }
  ],
  "しょくどう|食堂": [
    { tag: "Culture corner", explain: "A 「食堂」 is a cafeteria or a simple diner. University cafeterias, 「学食|がくしょく」, are cheap and good. Order with a ticket machine. And small family diners called 「定食屋|ていしょくや」 serve set meals." },
    { tag: "Word family", explain: "「堂|どう」 means a hall. 「食堂」, eating hall. 「講堂|こうどう」, an auditorium. 「本堂|ほんどう」, a temple's main hall. And 「国会議事堂|こっかいぎじどう」, the National Diet Building." }
  ],
  "うた|歌": [
    { tag: "Real-life Japanese", explain: "「好きな歌は何ですか」. What's your favorite song? And 「歌を歌う」, sing a song. And 「この歌、知ってる？」, do you know this song? Karaoke conversation." },
    { tag: "Culture corner", explain: "Japan has a famous New Year's Eve singing show, 「紅白歌合戦|こうはくうたがっせん」, the red and white song battle. A red team of women and a white team of men compete. Families watch it every year." }
  ],
  "サークル|": [
    { tag: "Culture corner", explain: "In Japanese colleges, 「サークル」 is a casual club, often social. 「部活|ぶかつ」 is a serious club with practice. 「テニスサークル」 might mean more drinking than tennis. Joining one is how students make friends." },
    { tag: "Real-life Japanese", explain: "「何のサークルに入っていますか」. What club are you in? And 「サークルの飲み会」, club drinking party. And new students get recruited heavily in April, called 「新歓|しんかん」, welcoming new students." }
  ],
  "くるま|車": [
    { tag: "Memory hook", explain: "The kanji 「車」 is a cart seen from above. Two wheels, an axle through the middle. And it's in 「電車|でんしゃ」, 「自転車|じてんしゃ」, 「駐車場|ちゅうしゃじょう」. Wheels everywhere." },
    { tag: "Culture corner", explain: "Japan has tiny cars with yellow plates, 「軽自動車|けいじどうしゃ」, kei cars. Cheap tax, perfect for narrow streets. And Japan drives on the left. And you need proof of a parking space to buy a car in cities." }
  ],
  "ながい|長い": [
    { tag: "Real-life Japanese", explain: "「髪が長い」, long hair. 「長い時間」, a long time. And 「足が長い」, long legs. And 「話が長い」, talks too long. And 「長生き|ながいき」, a long life." },
    { tag: "Word family", explain: "「長|ちょう」, head, chief. 「社長|しゃちょう」, company president. 「部長|ぶちょう」, department head. 「校長|こうちょう」, principal. Long and leader share a kanji, the elder." }
  ],
  "みじかい|短い": [
    { tag: "Don't mix it up", explain: "「短い」, short, length. 「背が低い|せがひくい」, short, height. Don't say 「短い人」 for a short person. And 「短い」 for time, 「短い休み」, a short break." },
    { tag: "Word family", explain: "「短|たん」 in 「短所|たんしょ」, weakness, short point. And its partner, 「長所|ちょうしょ」, strength, long point. Job interviews in Japan ask, 「あなたの長所と短所は？」." }
  ],
  "はやい|速い": [
    { tag: "Don't mix it up", explain: "Two 「はやい」. 「速い」, fast, speed. 「早い」, early, time. 「新幹線は速い」, the bullet train is fast. 「朝が早い」, it's early morning. And 「速度|そくど」, speed." },
    { tag: "Real-life Japanese", explain: "「走るのが速い」, fast runner. And 「話すのが速い」, talks fast. And 「速く走って！」, run fast! And 「速達|そくたつ」, express mail at the post office." }
  ],
  "せがひくい|背が低い": [
    { tag: "Real-life Japanese", explain: "「妹は背が低いです」. My little sister is short. And 「低い|ひくい」 also means low. 「低い声」, a low voice. And 「低い山」, a low mountain. And the opposite, 「背が高い」." },
    { tag: "Word family", explain: "「低|てい」 in 「最低|さいてい」, the worst, the lowest. 「最低！」 is something you say about awful behavior. And 「低温|ていおん」, low temperature. And 「高低|こうてい」, high and low." }
  ],
  "あたまがいい|頭がいい": [
    { tag: "Real-life Japanese", explain: "「頭がいい」, smart, literally head is good. 「彼は頭がいい」. He's smart. And 「頭が痛い|あたまがいたい」, I have a headache. Or, this problem gives me a headache!" },
    { tag: "Word family", explain: "「頭」 phrases. 「頭が固い|あたまがかたい」, stubborn, hard head. 「頭に来る|あたまにくる」, to get angry, it comes to my head. And 「頭」 with the reading 「とう」, 「先頭|せんとう」, the front of a line." }
  ],
  "しんせつ|親切": [
    { tag: "Real-life Japanese", explain: "「親切な人」, a kind person. And 「ご親切にありがとうございます」. Thank you for your kindness. And Japanese people are often super 「親切」 to lost tourists, even walking them to the station." },
    { tag: "Don't mix it up", explain: "Kind words. 「親切|しんせつ」, kind in actions, helpful. 「やさしい」, gentle, kind in nature. A stranger who helps you is 「親切」. A gentle grandmother is 「やさしい」. And 「不親切」, unkind." }
  ],
  "べんり|便利": [
    { tag: "Real-life Japanese", explain: "「コンビニは便利です」. Convenience stores are convenient. And 「便利な場所」, a convenient place. And the opposite, 「不便|ふべん」, inconvenient. 「駅から遠くて不便です」. It's far from the station, so it's inconvenient." },
    { tag: "Word family", explain: "「便|べん」 has many uses. 「郵便|ゆうびん」, mail. 「便|びん」, a flight. 「次の便」, the next flight. And 「便」 also means bowel movement. Doctors ask about 「便」. Context!" }
  ],
  "はく|": [
    { tag: "Real-life Japanese", explain: "「はく」 is for below the waist. Pants, skirts, shoes, socks. 「くつをはく」, 「ジーンズをはく」. And describing, 「スカートをはいている」, wearing a skirt. Lesson seven's state form." },
    { tag: "Don't mix it up", explain: "Many 「はく」. 「履く」, wear on legs. 「吐く」, to throw up, or exhale. 「掃く」, to sweep. Hiragana 「はく」 hides all of them. Context, please. Hopefully it's about pants." }
  ],
  "しる|知る": [
    { tag: "Don't mix it up", explain: "Tricky! Know is 「知っている」, the te-iru form. 「知っています」, I know. But don't know is 「知りません」, not 「知っていません」. A weird asymmetry. Memorize it." },
    { tag: "Real-life Japanese", explain: "「知ってる？」, did you know? A gossip opener. And 「知らない」, I don't know, casual. And 「知り合い|しりあい」, acquaintance, lesson nineteen. And 「お知らせ」, a notice, an announcement." }
  ],
  "すむ|住む": [
    { tag: "Real-life Japanese", explain: "「どこに住んでいますか」. Where do you live? Always 「住んでいる」, the state form. And 「に」 for the place. 「ボルダーに住んでいます」. I live in Boulder." },
    { tag: "Word family", explain: "「住|じゅう」 in 「住所|じゅうしょ」, address, living place. 「住民|じゅうみん」, residents. And 「住まい|すまい」, a home, 「お住まいはどちらですか」, very polite. And the kanji has a person and a lamp, 「主」." }
  ],
  "はたらく|働く": [
    { tag: "Memory hook", explain: "The kanji 「働」 is a person, 「亻」, plus 「動|どう」, to move. A person moving! Working. This kanji was made in Japan, not China. A Japanese invention, called 「国字|こくじ」." },
    { tag: "Real-life Japanese", explain: "「銀行で働いています」. I work at a bank. 「で」 for where. And 「働きすぎ」, overworking. And 「よく働く」, a hard worker. And 「共働き|ともばたらき」, both partners working." }
  ],
  "ふとる|太る": [
    { tag: "Don't mix it up", explain: "Like 「住む」, use the state form. 「太っている」, is fat, overweight. 「太った」, gained weight. And careful, commenting on weight is more common in Japan, but still sensitive. Be kind." },
    { tag: "Word family", explain: "「太」 is 「大|だい」, big, plus a dot. Extra big. 「太い|ふとい」, thick. 「太陽|たいよう」, the sun. And 「太平洋|たいへいよう」, the Pacific Ocean. And 「太る」, to get fat." }
  ],
  "かける|かける": [
    { tag: "Real-life Japanese", explain: "「めがねをかける」, put on glasses. And 「サングラスをかける」, sunglasses. Things you hang on your face. And 「めがねをかけている」, wearing glasses. Lesson seven describes people." },
    { tag: "Word family", explain: "「かける」 is a super flexible verb. Glasses, phone calls, locks, irons, sitting down, and soy sauce on food. The core idea, hanging or putting something onto something. It keeps showing up through Genki." }
  ],
  "やせる|": [
    { tag: "Real-life Japanese", explain: "「やせている」, is thin. And 「やせた？」, did you lose weight? A compliment in Japan. And 「やせたい」, I want to lose weight. And 「ダイエット」, dieting, lesson eleven." },
    { tag: "Don't mix it up", explain: "「やせる」 and 「ふとる」 use 「〜ている」 for states. 「やせている」, is thin. 「太っている」, is fat. And the change itself, 「やせた」, got thinner. State versus change." }
  ],
  "けっこんする|結婚する": [
    { tag: "Real-life Japanese", explain: "「結婚しています」. I'm married. State form! Not 「結婚します」, which means will get married. 「結婚していますか」. Are you married? And 「と」 for who. 「〜と結婚した」." },
    { tag: "Culture corner", explain: "Japanese weddings often have two parts, a ceremony, sometimes Shinto or Western chapel style, and a reception, 「披露宴|ひろうえん」. Guests give cash in special envelopes, often about thirty thousand yen." }
  ],
  "〜が|": [
    { tag: "Real-life Japanese", explain: "「が」 at the end of a clause means but. 「日本語はむずかしいですが、おもしろいです」. Japanese is hard, but interesting. And softening, 「すみませんが」, excuse me, but. Makes requests polite." },
    { tag: "Don't mix it up", explain: "Two 「が」. The subject marker, 「ねこが好き」. And but, at the end of a clause. 「高いですが、いいです」. And sentence ending 「が」 trails off politely. 「あのう、ちょっと質問があるんですが…」." }
  ],
  "なにも|何も": [
    { tag: "Real-life Japanese", explain: "「何も」 plus a negative, nothing. 「何も食べませんでした」. I didn't eat anything. And 「何もない」, there's nothing. And 「何もしない」, do nothing. A lazy Sunday." },
    { tag: "Word family", explain: "Question word plus 「も」 plus negative. 「何も」, nothing. 「だれも」, nobody. 「どこも」, nowhere. And 「どこにも行かない」, not going anywhere. One pattern, all the nos." }
  ],
  "〜にん|〜人": [
    { tag: "Real-life Japanese", explain: "「何人ですか|なんにんですか」. How many people? Restaurants ask. And 「三人です」. Three. And counting people goes 「ひとり」, 「ふたり」, then 「さんにん」, 「よにん」, 「ごにん」." },
    { tag: "Don't mix it up", explain: "Watch four. 「四人|よにん」, not 「よんにん」. And seven, 「ななにん」 or 「しちにん」. And restaurants politely say 「何名様|なんめいさま」, lesson nineteen." }
  ],
  "ひとり|一人": [
    { tag: "Real-life Japanese", explain: "「一人です」. Just one, table for one. And 「一人っ子|ひとりっこ」, only child. And 「一人暮らし|ひとりぐらし」, living alone. And 「一人で」, by myself, alone." },
    { tag: "Culture corner", explain: "Japan is very solo-friendly. 「一人焼肉」, solo barbecue. 「おひとりさま」, the honored single person, a marketing term for people who do things alone. No shame in eating alone in Japan." }
  ],
  "ふたり|二人": [
    { tag: "Real-life Japanese", explain: "「二人で行きましょう」. Let's go, the two of us. And couples, 「二人きり」, just the two of us. And 「お二人|おふたり」, the two of you, polite. Wedding speeches use it a lot." },
    { tag: "Word family", explain: "Native counting. 「一人|ひとり」, 「二人|ふたり」 use old Japanese numbers, 「ひと」, 「ふた」. Like 「一つ|ひとつ」, 「二つ|ふたつ」. From three on, it's Chinese numbers. 「三人|さんにん」." }
  ],
  "べつに|別に": [
    { tag: "Real-life Japanese", explain: "「別に」 alone means not really, nothing much. 「何かあったの？」, did something happen? 「別に」, nothing. It can sound cold, like whatever. A famous actress caused a scandal by saying just 「別に」 at an event." },
    { tag: "Word family", explain: "「別|べつ」 means separate, different. 「別々に|べつべつに」, separately, like paying separately at a restaurant. 「特別|とくべつ」, special. And 「別れる|わかれる」, to break up, part ways." }
  ],
  "もちろん|": [
    { tag: "Real-life Japanese", explain: "「もちろん！」, of course! Enthusiastic yes. 「来ますか？」, are you coming? 「もちろん！」. And 「もちろんです」, polite. And it's written 「勿論」 in kanji, which nobody uses." },
    { tag: "Memory hook", explain: "「もちろん」 sounds like mochi run. Of course I'll run for mochi! Who wouldn't? Picture someone sprinting toward a plate of rice cakes. 「もちろん！」" }
  ],
  "よかったら|": [
    { tag: "Real-life Japanese", explain: "「よかったら」 makes invitations soft. 「よかったら、一緒に行きませんか」. If you'd like, want to go together? And offering food, 「よかったら、どうぞ」. Help yourself if you like." },
    { tag: "Word family", explain: "「よかったら」 is from 「いい」, good, in the 「たら」 if form. If it's good for you. And 「よかった」, oh good, what a relief. And 「よければ」, same meaning, a bit more formal." }
  ],
  "おにいさん|お兄さん": [
    { tag: "Culture corner", explain: "Shopkeepers call young men 「お兄さん」 to be friendly. 「お兄さん、安いよ！」 Hey, young man, it's cheap! It flatters. And older men are 「お父さん」 or 「おじさん」, which can sting." },
    { tag: "Real-life Japanese", explain: "Lesson seven, 「お兄さんは何をしていますか」. What does your older brother do? Asking about someone else's family uses 「お兄さん」. And answer about yours with 「兄は〜」." }
  ],
  "おねえさん|お姉さん": [
    { tag: "Culture corner", explain: "Shop staff call young women 「お姉さん」, and women staff are called 「お姉さん」 by kids. It's a friendly term. And calling a woman 「おばさん」, auntie, when she expects 「お姉さん」 is a big faux pas." },
    { tag: "Real-life Japanese", explain: "「お姉さんはどこに住んでいますか」. Where does your older sister live? Lesson seven practice. And answer about your own, 「姉は東京に住んでいます」." }
  ],
  "いもうと|妹": [
    { tag: "Real-life Japanese", explain: "「妹は高校生です」. My little sister is in high school. And 「妹さんはおいくつですか」. How old is your little sister? Polite question, with 「さん」 for theirs." },
    { tag: "Culture corner", explain: "In Japanese families, the older sibling has a role, and younger siblings call them by title, 「お姉ちゃん」. But older siblings call younger ones by name. Age order matters a lot in Japanese relationships." }
  ],
  "おとうと|弟": [
    { tag: "Memory hook", explain: "The kanji 「弟」 looks like a cord wrapped around a stick, in order, one after another. The younger one, next in line. And 「弟子|でし」, a disciple or apprentice, uses it too." },
    { tag: "Real-life Japanese", explain: "「弟は背が高いです」. My younger brother is tall. Lesson seven description. And 「弟さん」, someone else's younger brother. And 「弟がほしい」, I want a little brother, kids say." }
  ]
});
/* Lesson 8 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "そうじする|掃除する": [
    { tag: "Culture corner", explain: "Japanese students clean their own schools every day, called 「そうじの時間」, cleaning time. No janitors in many schools. Kids sweep, mop, and wipe. It teaches responsibility. And at year's end, everyone does 「大掃除|おおそうじ」, the big clean." },
    { tag: "Real-life Japanese", explain: "「部屋を掃除する」, clean your room. And 「掃除機|そうじき」, a vacuum cleaner, cleaning machine. 「掃除機をかける」, to vacuum. That 「かける」 again!" }
  ],
  "あめ|雨": [
    { tag: "Don't mix it up", explain: "「雨|あめ」, rain, and 「あめ」, candy, sound the same! Pitch differs. In Tokyo, rain goes high-low, candy low-high. And 「雨」 becomes 「さめ」 in compounds. 「春雨|はるさめ」, spring rain, and also glass noodles." },
    { tag: "Culture corner", explain: "Japan's rainy season, 「梅雨|つゆ」, plum rain, runs June to July. Hydrangeas bloom, and everyone carries umbrellas. And 「雨女|あめおんな」 or 「雨男|あめおとこ」 is a person who always brings rain to events." }
  ],
  "せんたくする|洗濯する": [
    { tag: "Culture corner", explain: "Most Japanese homes don't have dryers. People hang laundry on balconies, even big futons get sunned. So weather forecasts include a laundry index, 「洗濯指数|せんたくしすう」, telling you if it's a good day to dry clothes." },
    { tag: "Real-life Japanese", explain: "「洗濯物|せんたくもの」, the laundry, the clothes. 「洗濯物を干す|ほす」, hang the laundry. And 「洗濯機|せんたくき」, washing machine. And 「雨だから洗濯物を入れて」. It's raining, bring in the laundry!" }
  ],
  "りょうりする|料理する": [
    { tag: "Real-life Japanese", explain: "「料理が上手ですね」. You're a great cook. And 「料理を作る|りょうりをつくる」, to cook. And 「日本料理|にほんりょうり」, Japanese cuisine. 「手料理|てりょうり」, home cooking." },
    { tag: "Word family", explain: "「料|りょう」, materials, fee. 「料理」, handling materials, cooking. 「料金|りょうきん」, a fee. 「材料|ざいりょう」, ingredients. And 「理|り」, reason, as in 「無理|むり」, impossible." }
  ],
  "あらう|洗う": [
    { tag: "Real-life Japanese", explain: "「手を洗ってください」. Please wash your hands. And 「顔を洗う」, wash your face. 「皿を洗う|さらをあらう」, wash dishes. And 「お手洗い|おてあらい」, the restroom, the hand-washing place!" },
    { tag: "Memory hook", explain: "The kanji 「洗」 has water, three drops, on the left, and 「先|さき」, ahead, on the right. Wash first, before anything else. Japanese bathing etiquette in one kanji." }
  ],
  "はれ|晴れ": [
    { tag: "Word family", explain: "「晴れ」 builds weather words. 「晴天|せいてん」, clear sky. 「快晴|かいせい」, perfectly clear. And 「晴れる|はれる」, to clear up, lesson nineteen. And the kanji has the sun, 「日」, on the left. Sun plus blue, 「青」." },
    { tag: "Culture corner", explain: "Kids hang 「てるてる坊主」, little cloth dolls, in windows to wish for 「晴れ」. And 「晴れ着|はれぎ」, special clothes for big days, like a kimono. Sunny clothes for sunny occasions." }
  ],
  "くもり|曇り": [
    { tag: "Memory hook", explain: "The kanji 「曇」 is sun, 「日」, on top of cloud, 「雲|くも」. The sun hidden by clouds. And 「くも」, cloud, also means spider, 「蜘蛛|くも」! Same sound." },
    { tag: "Real-life Japanese", explain: "Forecasts say 「曇りのち雨|くもりのちあめ」, cloudy, later rain. 「のち」 means later. And 「曇りときどき晴れ」, cloudy, sometimes sunny. And 「曇り空|くもりぞら」, an overcast sky." }
  ],
  "ゆうめい|有名": [
    { tag: "Real-life Japanese", explain: "「有名な人」, a famous person. And 「京都はお寺で有名です」. Kyoto is famous for temples. 「で」 marks what it's famous for. And 「有名人|ゆうめいじん」, a celebrity." },
    { tag: "Word family", explain: "「有|ゆう」, to have, exist, and 「名|めい」, name. Having a name. 「有料|ゆうりょう」, paid, has a fee. Opposite of 「無料|むりょう」, free. And 「名前」, name." }
  ],
  "ゆき|雪": [
    { tag: "Culture corner", explain: "Japan's northern Hokkaido has the Sapporo Snow Festival, 「さっぽろ雪まつり」, with giant snow sculptures. And Niseko has world-famous powder snow, 「パウダースノー」. Great for skiers from Colorado." },
    { tag: "Word family", explain: "「雪」 words. 「雪だるま|ゆきだるま」, snowman, snow daruma doll. 「大雪|おおゆき」, heavy snow. And the kanji 「雪」 has rain, 「雨」, on top. Rain that froze." }
  ],
  "てんきよほう|天気予報": [
    { tag: "Real-life Japanese", explain: "「天気予報によると」, according to the forecast, lesson seventeen. And 「天気予報が当たった」, the forecast was right. And Japanese forecasts give rain chances by percent, 「降水確率|こうすいかくりつ」." },
    { tag: "Word family", explain: "「予|よ」, ahead, and 「報|ほう」, report. A report ahead of time. 「予約|よやく」, a reservation, promise ahead. 「予定|よてい」, plans. 「予習|よしゅう」, preparing for class." }
  ],
  "きおん|気温": [
    { tag: "Real-life Japanese", explain: "「今日の気温は何度ですか」. What's today's temperature? Japan uses Celsius. Thirty degrees is hot, about eighty-six. And 「最高気温|さいこうきおん」, the high. 「最低気温」, the low." },
    { tag: "Don't mix it up", explain: "Temperature words. 「気温」, air temperature. 「体温|たいおん」, body temperature. 「温度|おんど」, general temperature, like water. And 「温泉|おんせん」, hot spring, warm spring." }
  ],
  "なつ|夏": [
    { tag: "Culture corner", explain: "Japanese summer means fireworks festivals, 「花火大会|はなびたいかい」, wearing 「浴衣|ゆかた」. Shaved ice, 「かき氷|かきごおり」. And 「お盆|おぼん」, when families honor ancestors. And cicadas buzzing everywhere." },
    { tag: "Word family", explain: "Seasons. 「春|はる」, spring. 「夏|なつ」, summer. 「秋|あき」, fall. 「冬|ふゆ」, winter. And 「夏休み」, summer vacation. 「夏バテ|なつバテ」, summer fatigue from the heat." }
  ],
  "ふゆ|冬": [
    { tag: "Culture corner", explain: "Japanese winter means the 「こたつ」, a heated table, hot pot, 「鍋|なべ」, and hot springs. And illuminations, light displays, everywhere in December. And snow monkeys bathing in hot springs in Nagano." },
    { tag: "Word family", explain: "「冬休み」, winter break. 「真冬|まふゆ」, the dead of winter. And 「冬眠|とうみん」, hibernation, winter sleep. Bears do it. And students wish they could." }
  ],
  "けさ|今朝": [
    { tag: "Don't mix it up", explain: "「今朝」 is a special reading, 「けさ」. Not 「いまあさ」 or 「こんちょう」. Learn it as a whole word. Same with 「今日|きょう」 and 「今年|ことし」. Time words love special readings." },
    { tag: "Real-life Japanese", explain: "「今朝、何を食べましたか」. What did you eat this morning? And 「今朝は寒かった」, it was cold this morning. Notice no particle after 「今朝」. Time words often skip 「に」." }
  ],
  "あさって|": [
    { tag: "Real-life Japanese", explain: "「あさって、ひま？」 Free the day after tomorrow? And kanji 「明後日」, bright after day. Also read 「みょうごにち」 in formal speech. And a fun one, 「明明後日|しあさって」, three days from now!" },
    { tag: "Word family", explain: "Days line. 「おととい」, 「きのう」, 「きょう」, 「あした」, 「あさって」, 「しあさって」. And years, 「おととし」, 「去年」, 「今年」, 「来年」, 「さらいねん」. Lots to memorize." }
  ],
  "まいしゅう|毎週": [
    { tag: "Real-life Japanese", explain: "「毎週、日本語のクラスがあります」. I have Japanese class every week. And 「毎週土曜日」, every Saturday. No particle needed. And 「毎週末|まいしゅうまつ」, every weekend." },
    { tag: "Word family", explain: "Every words. 「毎日」, 「毎朝」, 「毎晩」, 「毎週」, 「毎月|まいつき」, 「毎年|まいとし」 or 「まいねん」. And 「毎回|まいかい」, every time. Japanese makes every with one kanji." }
  ],
  "こんげつ|今月": [
    { tag: "Real-life Japanese", explain: "「今月は忙しい」. This month is busy. And 「今月の終わり」, the end of this month. And 「今月中に|こんげつちゅうに」, within this month. Business deadlines." },
    { tag: "Don't mix it up", explain: "「月」 readings. 「今月|こんげつ」, 「げつ」. 「一月|いちがつ」, January, 「がつ」. 「一か月|いっかげつ」, one month long. And 「月|つき」, the moon. Month names use 「がつ」, lengths use 「げつ」." }
  ],
  "らいげつ|来月": [
    { tag: "Real-life Japanese", explain: "「来月、日本に行きます」. I'm going to Japan next month. And 「来月の五日」, the fifth of next month. And 「再来月|さらいげつ」, the month after next." },
    { tag: "Word family", explain: "The 「来」 family. 「来週」, next week. 「来月」, next month. 「来年」, next year. And 「未来|みらい」, the future, not yet come. 「将来|しょうらい」, your future, career." }
  ],
  "カメラ|": [
    { tag: "Culture corner", explain: "Japan is camera country. Canon, Nikon, Sony, Fujifilm, Olympus. Tokyo's Shinjuku has giant camera stores. And disposable film cameras, 「写ルンです|うつるんです」, are trendy again with young people." },
    { tag: "Real-life Japanese", explain: "「カメラで写真を撮る」, take pictures with a camera. And 「カメラマン」, a photographer. And smartphones, 「スマホのカメラ」. And Japanese phones make a shutter sound you can't turn off, by custom." }
  ],
  "ところ|所": [
    { tag: "Real-life Japanese", explain: "「静かなところ」, a quiet place. 「いいところ」, a nice place. And 「〜ているところ」, in the middle of doing. 「今、食べているところ」, I'm in the middle of eating. A pattern you'll meet later in Genki." },
    { tag: "Word family", explain: "「所|しょ」 with the Chinese reading. 「住所|じゅうしょ」, address. 「台所|だいどころ」, kitchen. 「場所|ばしょ」, a place. 「事務所|じむしょ」, an office. Places everywhere." }
  ],
  "トマト|": [
    { tag: "Sound it out", explain: "Easy word! 「トマト」 sounds just like English, said the British way. Each syllable even. And Japanese tomatoes are often eaten as fruit, sweet ones called 「フルーツトマト」, sold like candy." },
    { tag: "Real-life Japanese", explain: "「トマトが好きですか」. Do you like tomatoes? And 「トマトジュース」, popular in Japan. And 「ミニトマト」, cherry tomatoes, are in every bento for color." }
  ],
  "はし|": [
    { tag: "Don't mix it up", explain: "Three 「はし」! 「箸」, chopsticks. 「橋」, bridge. 「端」, edge. Pitch differs. And a famous riddle, a sign says no crossing 「はし」, so a monk walks across the middle, not the edge! The 「一休さん」 story." },
    { tag: "Culture corner", explain: "Chopstick rules. Don't stab food. Don't point with them. Don't pass food chopstick to chopstick. Don't stick them upright in rice. And 「はしが上手ですね」, you're good with chopsticks, is a classic compliment." }
  ],
  "パーティー|": [
    { tag: "Real-life Japanese", explain: "「パーティーをしましょう」. Let's have a party. And 「誕生日パーティー」. And Japanese casual parties are often 「飲み会|のみかい」, drinking parties, or 「ホームパーティー」, at home." },
    { tag: "Sound it out", explain: "Party becomes 「パーティー」, with two long marks. 「パー」 and 「ティー」. The small 「ィ」 makes ti, since Japanese 「チ」 is chi. New sounds for loanwords." }
  ],
  "バーベキュー|": [
    { tag: "Real-life Japanese", explain: "People shorten it to 「BBQ」. 「BBQしよう」. Let's barbecue. Japanese BBQ often happens at riversides and parks in summer. And 「焼肉|やきにく」, grill-your-own meat restaurants, are the indoor version." },
    { tag: "Sound it out", explain: "Long! 「バーベキュー」. Barbecue, the 「キュー」 is the cue sound. Small 「ュ」 again. Five syllables in Japanese, three in English. Japanese stretches words out evenly." }
  ],
  "ホームステイ|": [
    { tag: "Real-life Japanese", explain: "「ホームステイをする」, do a homestay. And the host family, 「ホストファミリー」, lesson eleven. And 「ホームステイ先|さき」, your homestay destination. Many learners start their Japan trip this way." },
    { tag: "Culture corner", explain: "On a homestay, bring a gift for your host family, 「おみやげ」 from home. Take off shoes, help with chores, and say 「ただいま」 when you come home. They'll answer 「おかえり」. You'll feel like family." }
  ],
  "スペイン|": [
    { tag: "Sound it out", explain: "「スペイン」 for Spain. And Spanish is 「スペイン語」. And Spaniards, 「スペイン人」. The country names in Japanese are mostly katakana, except Asian neighbors, which use kanji." },
    { tag: "Word family", explain: "Countries in katakana. 「フランス」, France. 「ドイツ」, Germany, from Dutch Duits. 「イタリア」, Italy. 「ロシア」, Russia. And 「メキシコ」, Mexico. Germany is the surprising one." }
  ],
  "なにか|何か": [
    { tag: "Real-life Japanese", explain: "「何か食べませんか」. Want to eat something? And 「何か質問はありますか」. Any questions? Teachers ask this. And 「何か」 often skips particles. 「何か飲む？」, want something to drink?" },
    { tag: "Don't mix it up", explain: "「何か」, something. 「何も」, nothing, with a negative. 「何でも」, anything. 「何か食べる」, eat something. 「何も食べない」, eat nothing. 「何でも食べる」, eat anything." }
  ],
  "じょうず|上手": [
    { tag: "Culture corner", explain: "「日本語が上手ですね」. Your Japanese is great! You'll hear it after saying hello. It's kind but almost automatic. A humble answer, 「いえいえ、まだまだです」. When people stop saying it, you're actually good!" },
    { tag: "Don't mix it up", explain: "Don't say 「上手」 about yourself. It's bragging. Use 「得意|とくい」, good at, my strong point. 「料理が得意です」. And 「上手」 takes 「が」. 「歌が上手」." }
  ],
  "へた|下手": [
    { tag: "Real-life Japanese", explain: "「歌が下手です」. I'm bad at singing. Fine to say about yourself, modest. And about others, careful, it's harsh. Softer, 「あまり上手じゃない」. And 「苦手|にがて」, not my thing." },
    { tag: "Memory hook", explain: "「上手」, up hand, skilled. 「下手」, down hand, clumsy. A pair! Up and down. And 「下手」 read 「しもて」 means stage left. Different meaning, same kanji." }
  ],
  "いう|言う": [
    { tag: "Real-life Japanese", explain: "「何と言いましたか」. What did you say? And 「〜と言っていました」, they said that. Quoting, lesson eight. And 「日本語で何と言いますか」. How do you say it in Japanese? Learner's best friend." },
    { tag: "Don't mix it up", explain: "「言う」 is spelled 「いう」 but pronounced 「ゆう」. 「言って」 sounds like 「いって」. And honorific, 「おっしゃる」. Humble, 「申す|もうす」. Three levels." }
  ],
  "おそくなる|遅くなる": [
    { tag: "Real-life Japanese", explain: "「遅くなってすみません」. Sorry I'm late. Classic apology. And 「遅くなる」, it gets late. 「遅くなったから帰ります」. It's gotten late, so I'll head home." },
    { tag: "Word family", explain: "Adjective plus 「なる」, to become. 「遅い」 becomes 「遅くなる」. 「寒い」, 「寒くなる」, getting colder. 「きれい」, 「きれいになる」. Change words." }
  ],
  "おふろにはいる|お風呂に入る": [
    { tag: "Real-life Japanese", explain: "「お風呂に入ってから寝ます」. I'll take a bath, then go to bed. Lesson six's 「てから」. And kids are told, 「早くお風呂に入りなさい」. Get in the bath! Nightly routine." },
    { tag: "Culture corner", explain: "Public baths, 「銭湯|せんとう」, have big murals of Mount Fuji painted on the wall. You bathe naked with strangers, same gender. And many places don't allow tattoos. Check first." }
  ],
  "おもう|思う": [
    { tag: "Real-life Japanese", explain: "「〜と思います」, I think that. Japanese uses it constantly to soften opinions. 「雨が降ると思います」. I think it'll rain. And 「どう思いますか」. What do you think?" },
    { tag: "Word family", explain: "「思い出|おもいで」, a memory, thoughts that come out. 「思い出す|おもいだす」, to remember. And 「思いやり|おもいやり」, consideration for others, a deeply valued word." }
  ],
  "きる|切る": [
    { tag: "Don't mix it up", explain: "「切る」 is a u-verb! 「切ります」, 「切って」. And 「着る」, wear, is a ru-verb. 「着ます」, 「着て」. Same sound, different conjugation. Make sure you're cutting, not wearing." },
    { tag: "Real-life Japanese", explain: "「切る」 also means hang up the phone. 「電話を切る」. And 「髪を切る」, cut hair. 「電源を切る」, turn off power. And 「切手|きって」, stamp, cut hand. And 「切符|きっぷ」, ticket." }
  ],
  "つくる|作る": [
    { tag: "Real-life Japanese", explain: "「晩ご飯を作る」, make dinner. 「友だちを作る」, make friends. 「時間を作る」, make time. Same as English! And 「作り方|つくりかた」, how to make, a recipe." },
    { tag: "Word family", explain: "「作|さく」 in 「作文|さくぶん」, an essay. 「作家|さっか」, writer, lesson eleven. 「作品|さくひん」, a work of art. And 「手作り|てづくり」, handmade. Notice 「つくり」 becomes 「づくり」." }
  ],
  "ふる|降る": [
    { tag: "Real-life Japanese", explain: "「雨が降っている」, it's raining. 「雪が降りそう」, it looks like it'll snow. And 「雨が降ったら」, if it rains, lesson seventeen. Only for things that fall from the sky." },
    { tag: "Don't mix it up", explain: "「降」 reads 「ふる」, fall from sky, and 「おりる」, get off a vehicle. 「バスを降りる」. And another 「ふる」, 「振る」, to wave, or to dump someone. 「手を振る」, wave your hand." }
  ],
  "もっていく|持っていく": [
    { tag: "Real-life Japanese", explain: "「傘を持っていったほうがいい」. You'd better take an umbrella. And 「何を持っていけばいい？」, what should I take? Before a party or trip. And the opposite direction, 「持ってくる」, bring." },
    { tag: "Word family", explain: "「持ち帰り|もちかえり」, takeout, carrying home. Restaurants ask, 「店内でお召し上がりですか、お持ち帰りですか」. Eat in or take out? Super useful." }
  ],
  "すてる|捨てる": [
    { tag: "Culture corner", explain: "Throwing things away in Japan is complex. Trash is sorted, and big items, 「粗大ごみ|そだいごみ」, require a sticker you buy. So 「捨てる」 takes planning. And trash cans on streets are rare." },
    { tag: "Real-life Japanese", explain: "「ごみを捨てる」, throw away trash. And 「捨てないで」, don't throw it away. And 「使い捨て|つかいすて」, disposable. 「使い捨てカメラ」, disposable camera." }
  ],
  "はじめる|始める": [
    { tag: "Don't mix it up", explain: "「始める」, start something, with 「を」. 「始まる|はじまる」, it starts, with 「が」. 「授業を始めます」, I'll start the class. 「授業が始まる」, class begins. Another verb pair." },
    { tag: "Real-life Japanese", explain: "「はじめまして」 comes from this! Literally, for the first time. And 「〜し始める」, start doing. 「雨が降り始めた」. It started raining. And 「始め」, the beginning." }
  ],
  "うんてんする|運転する": [
    { tag: "Real-life Japanese", explain: "「車を運転できますか」. Can you drive? And 「運転免許|うんてんめんきょ」, driver's license. Getting one in Japan is expensive and takes driving school. And Japan drives on the left." },
    { tag: "Word family", explain: "「運|うん」, carry, luck. 「運動|うんどう」, exercise. 「運|うん」 alone, luck. 「運がいい」, lucky. And 「転|てん」, turn, roll. Driving is carrying and turning." }
  ],
  "うん|": [
    { tag: "Real-life Japanese", explain: "「うん」, casual yes, uh-huh. With friends and family. And nodding along in conversation, people say 「うん、うん」, showing they're listening. That's 「相づち|あいづち」, back-channel responses." },
    { tag: "Culture corner", explain: "Japanese listeners give constant feedback, 「うん」, 「へえ」, 「そうなんだ」. Silence feels rude. On the phone, if you don't say 「うん」, the other person thinks you hung up." }
  ],
  "ううん|": [
    { tag: "Don't mix it up", explain: "「ううん」, casual no. Careful, it sounds a lot like 「うん」, yes! The difference is the falling tone and the extra beat. Often with a head shake. 「うん」, short and nodding. 「ううん」, longer, shaking." },
    { tag: "Real-life Japanese", explain: "「疲れた？」 Tired? 「ううん、大丈夫」. Nah, I'm fine. And polite no is 「いいえ」. But in real life, people rarely say 「いいえ」. More 「ううん」 or 「いや」." }
  ],
  "いつも|": [
    { tag: "Real-life Japanese", explain: "「いつもありがとう」. Thanks for always being there. A warm phrase. And 「いつもの」, the usual. 「いつものください」, the usual, please, at your favorite café." },
    { tag: "Word family", explain: "Frequency ladder. 「いつも」, always. 「たいてい」, usually. 「よく」, often. 「ときどき」, sometimes. 「たまに」, occasionally. 「あまり」, not often. 「ぜんぜん」, never." }
  ],
  "おそく|遅く": [
    { tag: "Real-life Japanese", explain: "「遅くまで勉強した」. I studied until late. And 「夜遅く」, late at night. And 「遅くなってすみません」. Sorry for being late. And 「遅く起きる」, get up late." },
    { tag: "Don't mix it up", explain: "「遅く」 is the adverb form of 「遅い」. And 「遅い」 means slow or late. 「遅いね」, you're late! Or, slow, isn't it? Context. And 「遅刻|ちこく」, being late for something." }
  ],
  "かんぱい|乾杯": [
    { tag: "Culture corner", explain: "At Japanese drinking parties, nobody drinks until everyone says 「乾杯！」 together, often led by the senior person. And clink your glass lower than your boss's, a show of respect." },
    { tag: "Memory hook", explain: "「乾|かん」, dry, and 「杯|ぱい」, cup. Dry the cup! Like bottoms up. And 「乾く|かわく」, to dry. 「のどが乾いた」, I'm thirsty, my throat is dry." }
  ],
  "みんなで|": [
    { tag: "Real-life Japanese", explain: "「みんなで食べましょう」. Let's all eat together. And 「みんなで写真を撮ろう」. Let's take a group picture. And 「みんな」 alone, everyone. 「みんな、こんにちは」, hi everyone." },
    { tag: "Word family", explain: "「で」 shows how many do it. 「一人で」, alone. 「二人で」, the two of us. 「みんなで」, all together. And 「家族で」, as a family. A small particle, big meaning." }
  ],
  "ざんねん|残念": [
    { tag: "Real-life Japanese", explain: "「残念ですね」. That's too bad. Sympathy. And 「残念！」, darn! Missed it. And 「残念ながら|ざんねんながら」, unfortunately. Used in formal rejections." },
    { tag: "Memory hook", explain: "「残|ざん」, remain, and 「念|ねん」, thought. A thought that remains. Regret that lingers. And 「残業|ざんぎょう」, overtime, leftover work. Lesson seventeen." }
  ],
  "〜について|": [
    { tag: "Real-life Japanese", explain: "「日本の文化について話します」. I'll talk about Japanese culture. And 「〜について、どう思いますか」. What do you think about? Great for essays and presentations." },
    { tag: "Word family", explain: "「について」, about. And 「についての」 before a noun. 「日本についての本」, a book about Japan. And formal, 「に関して|にかんして」, regarding. Same idea, stiffer." }
  ],
  "〜ど|〜度": [
    { tag: "Real-life Japanese", explain: "「三十度|さんじゅうど」, thirty degrees. Celsius! That's hot. And 「度」 also counts times. 「もう一度|もういちど」, one more time. Super useful. 「もう一度お願いします」." },
    { tag: "Word family", explain: "「度」 in 「今度|こんど」, next time, this time. 「温度|おんど」, temperature. 「速度|そくど」, speed. And 「〜度目」, the nth time. 「二度目|にどめ」, the second time." }
  ],
  "どう|": [
    { tag: "Real-life Japanese", explain: "「どう？」, how is it? How about it? And 「どうでしたか」, how was it? And 「どうしたの？」, what happened? What's wrong? And 「どうしよう」, what should I do? Lesson eighteen." },
    { tag: "Word family", explain: "こそあど for how. 「こう」, like this. 「そう」, like that. 「ああ」, like that over there. 「どう」, how. And 「そうですね」, 「ああ、そうか」. You use these constantly." }
  ],
  "かいしゃいん|会社員": [
    { tag: "Culture corner", explain: "Traditionally, Japanese 「会社員」 joined a company after college and stayed until retirement, called lifetime employment. Now more people change jobs. And the company's job hunting season is intense." },
    { tag: "Real-life Japanese", explain: "On forms, under occupation, people write 「会社員」. And in news, 「三十代の会社員」, an office worker in their thirties. A neutral, common label." }
  ],
  "しごと|仕事": [
    { tag: "Real-life Japanese", explain: "「仕事は何時に終わりますか」. What time does work end? And 「仕事が忙しい」. Work is busy. And 「お仕事、お疲れさまでした」. Thanks for your hard work today." },
    { tag: "Culture corner", explain: "Japanese has a famous word, 「仕事人間|しごとにんげん」, a work person, a workaholic. And 「仕事帰り|しごとがえり」, on the way home from work, when people stop for a drink." }
  ],
  "カラオケ|": [
    { tag: "Memory hook", explain: "「カラオケ」 is Japanese! 「空|から」, empty, and 「オケ」, short for orchestra. Empty orchestra, music without the singer. It was invented in Japan and spread worldwide." },
    { tag: "Culture corner", explain: "Japanese karaoke is in private rooms, with friends, not on a stage with strangers. Order food and drinks by phone. And there's 「ひとカラ」, solo karaoke. No judgment." }
  ]
});
/* Lesson 9 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "おどる|踊る": [
    { tag: "Culture corner", explain: "Japan's summer 「盆踊り|ぼんおどり」 is a Bon dance festival. Everyone dances in a circle around a tower with drums, wearing 「浴衣|ゆかた」. Simple moves, anyone can join. And Awa Odori in Tokushima is a famous dance festival." },
    { tag: "Word family", explain: "「踊り|おどり」, a dance. 「日本舞踊|にほんぶよう」, traditional Japanese dance. And casual dancing is often 「ダンス」. 「ダンスが好き」. And the kanji has 「足」, foot, on the left. Dancing feet." }
  ],
  "ピアノをひく|ピアノを弾く": [
    { tag: "Don't mix it up", explain: "Instruments use different verbs. Strings and keys, 「弾く|ひく」. Piano, guitar, violin. Wind instruments, 「吹く|ふく」, blow. Flute, trumpet. Drums, 「たたく」, hit. So 「ピアノを弾く」, but 「フルートを吹く」." },
    { tag: "Word family", explain: "Many 「ひく」! 「弾く」, play an instrument. 「引く」, pull, or look up in a dictionary. 「風邪をひく」, catch a cold. All 「ひく」. Hiragana hides the kanji. Context is everything." }
  ],
  "ギター|": [
    { tag: "Real-life Japanese", explain: "「ギターを弾けますか」. Can you play guitar? That's the potential form, lesson thirteen. And 「エレキギター」, electric guitar. And Japanese rock bands, and anime like K-On, made guitar hugely popular." },
    { tag: "Sound it out", explain: "Guitar becomes 「ギター」. The ar at the end is a long 「ー」. Same as 「スター」, star, 「カレンダー」, calendar. When English ends with er or ar, Japanese often uses 「ー」." }
  ],
  "くすりをのむ|薬を飲む": [
    { tag: "Don't mix it up", explain: "Medicine is drunk, not eaten, in Japanese. 「薬を飲む」, even for pills. Anything swallowed without chewing. And 「薬局|やっきょく」, pharmacy. And 「ドラッグストア」, drugstores, sell everything, even snacks." },
    { tag: "Word family", explain: "The kanji 「薬」 has the grass radical on top, plants, and 「楽|らく」, ease, below. Plants that bring ease. Ancient medicine was herbs. And 「目薬|めぐすり」, eye drops, eye medicine." }
  ],
  "かぜをひく|風邪をひく": [
    { tag: "Real-life Japanese", explain: "「風邪をひきました」. I caught a cold. And 「風邪ですか」, is it a cold? And in Japan, people wear masks when they're sick to protect others. And 「お大事に|おだいじに」, take care, get well." },
    { tag: "Don't mix it up", explain: "「風邪|かぜ」, a cold, illness. 「風|かぜ」, wind. Same sound! The kanji 「風邪」 means wind evil. Old belief, bad winds bring colds. And 「ひく」, pull. You pull in a cold." }
  ],
  "とり|鳥": [
    { tag: "Memory hook", explain: "The kanji 「鳥」 is a picture of a bird. The head and eye on top, the body, and the four dots at the bottom are its feet and tail. And 「鳥」 also means chicken in food. 「焼き鳥|やきとり」, grilled chicken skewers." },
    { tag: "Word family", explain: "「鳥居|とりい」, the red shrine gate, bird perch. Birds were thought to carry messages to the gods. And 「白鳥|はくちょう」, swan, white bird. 「小鳥|ことり」, little bird. And 「焼き鳥」." }
  ],
  "おぼえる|覚える": [
    { tag: "Real-life Japanese", explain: "「漢字を覚える」, memorize kanji. Your life right now. And 「覚えていますか」, do you remember? Use the state form for remember. 「覚えています」. And 「覚えられない」, I can't memorize it." },
    { tag: "Don't mix it up", explain: "「覚える」, to memorize, to learn by heart. 「思い出す|おもいだす」, to recall something forgotten. 「覚えている」, remember, keep in memory. And 「目が覚める|めがさめる」, wake up. Same kanji, awaken." }
  ],
  "かぶき|歌舞伎": [
    { tag: "Memory hook", explain: "The kanji are 「歌」, song, 「舞」, dance, 「伎」, skill. Song, dance, skill. That's kabuki! And the original word, 「かぶく」, meant to be wild, outlandish. The early performers were rebels." },
    { tag: "Culture corner", explain: "Kabuki actors are all men, even for women's roles, called 「女形|おやま」. Faces painted with bold makeup, 「隈取|くまどり」. Fans shout actors' family names at key moments. And Tokyo's Kabuki-za is the main theater." }
  ]
});
/* Lesson 10 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "きせつ|季節": [
    { tag: "Real-life Japanese", explain: "「どの季節が一番好きですか」. Which season do you like best? Lesson ten's classic question. And Japanese people love to say Japan has four distinct seasons, 「四季|しき」. Answer, 「秋が一番好きです」." },
    { tag: "Culture corner", explain: "Japan is obsessed with seasons. Seasonal food, 「旬|しゅん」, in season. Seasonal snacks, like cherry blossom flavored everything in spring. And haiku must include a season word, 「季語|きご」." }
  ],
  "はる|春": [
    { tag: "Culture corner", explain: "Spring in Japan means cherry blossoms, and also new beginnings. The school year and work year start in April. So spring is graduation, entrance ceremonies, and new jobs. Also the season of 「花粉症|かふんしょう」, hay fever!" },
    { tag: "Word family", explain: "「春休み|はるやすみ」, spring break. 「青春|せいしゅん」, youth, blue spring. A beautiful word for your teenage years. And 「春」 in 「春雨|はるさめ」, glass noodles." }
  ],
  "あき|秋": [
    { tag: "Culture corner", explain: "Autumn in Japan has many nicknames. 「食欲の秋|しょくよくのあき」, autumn of appetite. 「読書の秋|どくしょのあき」, autumn of reading. 「スポーツの秋」. And red leaves viewing, 「紅葉|こうよう」 or 「もみじ」." },
    { tag: "Memory hook", explain: "The kanji 「秋」 is grain, 「禾」, plus fire, 「火」. Harvested grain, the color of fire. Autumn. And 「秋」 also in 「秋葉原|あきはばら」, Akihabara, autumn leaf field." }
  ],
  "ぎゅうにゅう|牛乳": [
    { tag: "Word family", explain: "「牛|ぎゅう」, cow, and 「乳|にゅう」, milk. Cow milk. 「牛肉|ぎゅうにく」, beef. 「牛丼|ぎゅうどん」, beef bowl. And casually, people say 「ミルク」. But on cartons it's 「牛乳」." },
    { tag: "Culture corner", explain: "Japanese school lunches always include a small carton of 「牛乳」. And after a bath at a hot spring, people drink cold milk from glass bottles, sometimes coffee milk, with hand on hip. A tradition!" }
  ],
  "ケーキ|": [
    { tag: "Culture corner", explain: "Christmas in Japan means Christmas cake! A strawberry shortcake with whipped cream. People reserve them weeks ahead. And Japanese cake shops, 「ケーキ屋」, are beautiful, every cake perfect." },
    { tag: "Real-life Japanese", explain: "「ケーキを食べませんか」. Want some cake? And 「誕生日ケーキ」, birthday cake. And 「チーズケーキ」, Japanese cheesecake is famous for being jiggly and fluffy." }
  ],
  "すし|": [
    { tag: "Culture corner", explain: "Conveyor belt sushi, 「回転寿司|かいてんずし」, is cheap and fun. Plates come around, pick what you like. Plate color shows price. And at fancy sushi bars, you sit at the counter and the chef serves you directly, 「おまかせ」, chef's choice." },
    { tag: "Real-life Japanese", explain: "Sushi words. 「まぐろ」, tuna. 「サーモン」, salmon. 「えび」, shrimp. 「わさび」, wasabi. 「さび抜き|さびぬき」, no wasabi. And 「すし」 becomes 「ずし」 after other words, like 「回転ずし」." }
  ],
  "てんぷら|天ぷら": [
    { tag: "Word family", explain: "「天ぷら」 may come from Portuguese, from tempero, seasoning, or from Ember days, when Catholics ate fish. Portuguese missionaries brought frying in the fifteen-hundreds. And 「天丼|てんどん」, tempura on rice." },
    { tag: "Real-life Japanese", explain: "Dip tempura in 「天つゆ|てんつゆ」, dipping sauce with grated radish, or just salt. And 「えび天」, shrimp tempura. And in soba or udon, 「天ぷらそば」. And it's best eaten fresh and crispy." }
  ],
  "りんご|": [
    { tag: "Culture corner", explain: "Japanese apples are huge and sweet. Aomori prefecture is apple country. Fuji apples, 「ふじ」, were developed in Japan. And 「りんご」 is the kids' first word in the famous word-chain game, 「しりとり」." },
    { tag: "Real-life Japanese", explain: "「りんごを一つください」. One apple, please. Count with 「つ」. 「一つ」, 「二つ」. And 「りんごジュース」. And Japanese parents cut apples into bunny shapes for kids' lunches. 「うさぎりんご」." }
  ],
  "りょうり|料理": [
    { tag: "Real-life Japanese", explain: "「日本料理」, Japanese food. 「中華料理|ちゅうかりょうり」, Chinese food. 「イタリア料理」. Just add the country. And 「料理が得意|とくい」, good at cooking. And 「手料理」, home cooking." },
    { tag: "Culture corner", explain: "Japanese cuisine, 「和食|わしょく」, is a UNESCO intangible cultural heritage. It emphasizes seasonal ingredients and the five colors. And the core broth, 「だし」, gives Japanese food its deep umami flavor." }
  ],
  "サッカー|": [
    { tag: "Sound it out", explain: "Japanese uses 「サッカー」, from soccer, like American English, not football. American football is 「アメフト」. And the J-League is Japan's pro soccer league. And soccer is huge in schools." },
    { tag: "Real-life Japanese", explain: "「サッカーをする」, play soccer. And 「サッカーを見る」, watch soccer. And the national team is called 「サムライブルー」, Samurai Blue. During the World Cup, Tokyo's Shibuya crossing fills with fans." }
  ],
  "やきゅう|野球": [
    { tag: "Culture corner", explain: "Baseball is Japan's most loved sport. Pro teams like the Yomiuri Giants and Hanshin Tigers. And the high school tournament, 「甲子園|こうしえん」, is a national obsession. And Shohei Ohtani is a superhero there." },
    { tag: "Word family", explain: "「野|や」, field, and 「球|きゅう」, ball. Field ball. 「球」 in 「地球|ちきゅう」, the Earth, the ground ball. 「卓球|たっきゅう」, table tennis, table ball. 「電球|でんきゅう」, light bulb." }
  ],
  "いしゃ|医者": [
    { tag: "Real-life Japanese", explain: "「医者に行く」, go to the doctor. And you call a doctor 「先生」. 「先生、ちょっと熱があります」. And 「歯医者|はいしゃ」, dentist, tooth doctor. Watch out, 「はいしゃ」 also means loser, 「敗者」." },
    { tag: "Word family", explain: "「医|い」, medicine. 「医学|いがく」, medical science. 「医院|いいん」, a clinic. And 「者|しゃ」, person. 「医者」, medicine person. 「学者|がくしゃ」, scholar." }
  ],
  "おかねもち|お金持ち": [
    { tag: "Real-life Japanese", explain: "「お金持ちになりたい」. I want to become rich. And 「お金持ちの家」, a rich family's house. And slang, 「金持ち|かねもち」 without 「お」. And 「セレブ」, celeb, for glamorous rich people." },
    { tag: "Word family", explain: "「持ち」, holder. 「お金持ち」, money holder. 「気持ち|きもち」, feelings, spirit holder. 「力持ち|ちからもち」, a strong person, power holder. And 「持ち物」, belongings." }
  ],
  "ゆうめいじん|有名人": [
    { tag: "Real-life Japanese", explain: "「有名人に会ったことがありますか」. Have you ever met a celebrity? Lesson eleven grammar. And 「芸能人|げいのうじん」, an entertainer, TV star. That's the more common word for TV celebrities." },
    { tag: "Word family", explain: "「有名」, famous, plus 「人」, person. And 「有名な人」 means the same. And 「人」 endings, 「日本人」, 「外国人」, 「大人|おとな」, adult, special reading." }
  ],
  "かお|顔": [
    { tag: "Real-life Japanese", explain: "「顔を洗う」, wash your face. And 「顔が広い|かおがひろい」, a wide face, knows lots of people, well connected. And 「顔色が悪い|かおいろがわるい」, looking pale, unwell." },
    { tag: "Word family", explain: "「笑顔|えがお」, smiling face. 「顔文字|かおもじ」, emoticons, face characters, like (^_^). Japan invented the vertical style! And 「似顔絵|にがおえ」, a portrait sketch." }
  ],
  "としうえ|年上": [
    { tag: "Culture corner", explain: "Age matters a lot in Japan. Who's 「年上」, older, decides how you speak. People ask your age early to figure out politeness. And 「先輩|せんぱい」, a senior at school or work, even by one year." },
    { tag: "Word family", explain: "「年上」, older. 「年下|としした」, younger. 「同い年|おないどし」, the same age. And 「年|とし」, age. 「年を取る」, grow old. And 「年上の彼女」, an older girlfriend." }
  ],
  "えき|駅": [
    { tag: "Culture corner", explain: "Japanese stations are cities. Shinjuku station is the world's busiest, millions per day. And stations have 「駅弁|えきべん」, station bento, famous regional boxed lunches. People travel just to try them." },
    { tag: "Real-life Japanese", explain: "「駅はどこですか」. Where's the station? And 「駅まで歩いて十分」, ten minutes walk to the station. Apartment listings always say this. And 「駅前|えきまえ」, the area in front of the station." }
  ],
  "しんかんせん|新幹線": [
    { tag: "Culture corner", explain: "The bullet train started in 1964, for the Tokyo Olympics. It goes about three hundred kilometers per hour. And it's famous for its seven-minute cleaning crew, who clean the whole train between runs." },
    { tag: "Word family", explain: "「新|しん」, new, 「幹|かん」, trunk, main, 「線|せん」, line. New trunk line. 「線」 in 「山手線|やまのてせん」, the Yamanote line, Tokyo's loop. And 「〜番線」, platform number." }
  ],
  "ちかてつ|地下鉄": [
    { tag: "Word family", explain: "「地|ち」, ground, 「下|か」, under, 「鉄|てつ」, iron, railway. Underground railway. And 「地下|ちか」, basement. 「デパ地下」, department store basement. 「鉄道|てつどう」, railroad." },
    { tag: "Culture corner", explain: "Tokyo's subway map is famously complex, with many colored lines. But each station has a letter and number, like G09, so you can navigate without reading Japanese. And train fans are called 「鉄ちゃん」." }
  ],
  "ふね|船": [
    { tag: "Word family", explain: "「船|せん」 with the Chinese reading. 「風船|ふうせん」, balloon, wind ship! A wonderful word. 「船長|せんちょう」, captain. And 「船」 becomes 「ぶね」 in compounds, 「釣り船|つりぶね」, fishing boat." },
    { tag: "Real-life Japanese", explain: "「船で行く」, go by ship. And 「船酔い|ふなよい」, seasickness, ship drunk. Notice 「ふね」 becomes 「ふな」. And ferries connect Japan's many islands." }
  ],
  "ひこうき|飛行機": [
    { tag: "Word family", explain: "「飛|ひ」, fly, 「行|こう」, go, 「機|き」, machine. Flying going machine. 「空港|くうこう」, airport, sky port. 「機内|きない」, on the plane. 「飛ぶ|とぶ」, to fly." },
    { tag: "Real-life Japanese", explain: "「飛行機で行きます」. I'll go by plane. And 「飛行機に乗る」. And 「飛行機雲|ひこうきぐも」, a contrail, airplane cloud. Lovely word." }
  ],
  "よやく|予約": [
    { tag: "Real-life Japanese", explain: "「予約をお願いします」. I'd like to make a reservation. And 「予約していません」, I don't have a reservation. And 「予約が取れない」, can't get a reservation, at popular places." },
    { tag: "Word family", explain: "「予|よ」, beforehand. 「約|やく」, promise. Promise beforehand. 「約束|やくそく」, a promise. 「予定|よてい」, plan. 「予習|よしゅう」, preview. Ahead words." }
  ],
  "ツアー|": [
    { tag: "Real-life Japanese", explain: "「ツアーに参加する|ツアーにさんかする」, join a tour. And 「バスツアー」, bus tour, popular with older Japanese. And concert tours, 「全国ツアー」, nationwide tour." },
    { tag: "Sound it out", explain: "Tour becomes 「ツアー」. The t becomes 「ツ」 because of the u sound. Then 「アー」. And a tourist, 「観光客|かんこうきゃく」, more often than 「ツーリスト」." }
  ],
  "どうぶつえん|動物園": [
    { tag: "Word family", explain: "「動|どう」, move, 「物|ぶつ」, thing, 「園|えん」, garden. Moving things garden. Animals are moving things! 「動物」, animal. And 「植物|しょくぶつ」, plants, planted things. 「植物園」, botanical garden." },
    { tag: "Culture corner", explain: "Ueno Zoo in Tokyo is Japan's oldest, famous for pandas. And Asahiyama Zoo in Hokkaido has penguin walks in winter. Penguins parade through the snow. Super cute." }
  ],
  "じかん|時間": [
    { tag: "Real-life Japanese", explain: "「時間がありますか」. Do you have time? And 「時間がかかる」, it takes time. Lesson ten. 「駅まで時間がかかりますか」. And 「時間通り|じかんどおり」, on time." },
    { tag: "Don't mix it up", explain: "「時間|じかん」, time, duration, hours. 「時|とき」, a moment, when. 「時|じ」, o'clock. And 「何時間」, how many hours. 「何時」, what time. Small kanji, big differences." }
  ],
  "せかい|世界": [
    { tag: "Word family", explain: "「世|せ」, world, generation, and 「界|かい」, boundary. 「世界中|せかいじゅう」, all over the world. 「世界一|せかいいち」, world's best. And 「世代|せだい」, generation." },
    { tag: "Real-life Japanese", explain: "「世界で一番高い山」. The highest mountain in the world. Lesson ten superlative. And 「世界旅行」, a trip around the world. And Japanese loves 「世界一」 claims, like world's best ramen." }
  ],
  "びょういん|美容院": [
    { tag: "Don't mix it up", explain: "Classic trap! 「美容院|びよういん」, hair salon, 「び」 「よう」 separate. 「病院|びょういん」, hospital, 「びょう」 together. Say 「びよういん」 slowly, four beats. Hospital is 「びょういん」, also four beats but different." },
    { tag: "Word family", explain: "「美|び」, beauty, 「容|よう」, appearance, 「院|いん」, institution. Beauty appearance place. And 「美容師|びようし」, hair stylist. And barbershop, 「床屋|とこや」, for men. 「美しい|うつくしい」, beautiful." }
  ],
  "てぶくろ|手袋": [
    { tag: "Word family", explain: "「手|て」, hand, 「袋|ふくろ」, bag. Hand bags! Gloves. And 「ふくろ」 becomes 「ぶくろ」. And 「袋」 alone, a bag. 「袋はいりますか」, do you need a bag? Every convenience store asks." },
    { tag: "Real-life Japanese", explain: "Gloves use 「する」 or 「はめる」. 「手袋をする」. And winter, 「寒いから手袋をして」. It's cold, put on gloves. And a famous kids' story, 「手袋を買いに」, A Fox Buys Gloves." }
  ],
  "せいかつ|生活": [
    { tag: "Real-life Japanese", explain: "「日本の生活に慣れましたか」. Have you gotten used to life in Japan? Lesson seventeen's 「慣れる」. And 「大学生活」, college life. 「生活費|せいかつひ」, living expenses." },
    { tag: "Word family", explain: "「生」, life, and 「活|かつ」, active. Active life. 「活」 in 「部活|ぶかつ」, club activities. 「就活|しゅうかつ」, job hunting. 「婚活|こんかつ」, partner hunting. 「活動」, activity." }
  ],
  "ことし|今年": [
    { tag: "Don't mix it up", explain: "Special reading! 「今年」 is 「ことし」, not 「こんねん」. And last year, 「去年|きょねん」. Next year, 「来年|らいねん」. And in formal speech, 「本年|ほんねん」. Learn 「ことし」 by heart." },
    { tag: "Real-life Japanese", explain: "「今年もよろしくお願いします」. Please treat me well this year too. Said in January. And 「今年の目標|もくひょう」, this year's goal. New Year's resolutions." }
  ],
  "あたたかい|暖かい": [
    { tag: "Don't mix it up", explain: "Two 「あたたかい」. 「暖かい」, warm weather or air. 「温かい」, warm to touch, food or heart. 「温かいスープ」, warm soup. 「温かい人」, a warm person. And casual, 「あったかい」." },
    { tag: "Real-life Japanese", explain: "「春は暖かいです」. Spring is warm. And at convenience stores, 「温めますか|あたためますか」, shall I warm it up? For bento. And 「暖房|だんぼう」, heating." }
  ],
  "すずしい|涼しい": [
    { tag: "Real-life Japanese", explain: "「秋は涼しいです」. Fall is cool. 「涼しい」 is pleasant cool, a nice breeze. Cold is 「寒い」. And summer relief, 「涼しくなりましたね」. It's gotten cooler. A September greeting." },
    { tag: "Culture corner", explain: "Japanese has a whole culture of feeling cool in summer, 「涼|りょう」. Wind chimes, 「風鈴|ふうりん」, make a cool sound. And 「流しそうめん」, noodles slid down bamboo with cold water. Visual coolness." }
  ],
  "つめたい|冷たい": [
    { tag: "Don't mix it up", explain: "「冷たい」, cold to the touch. 「冷たい水」, cold water. 「寒い」, cold weather. And 「冷たい人」, a cold person, unfriendly. Same as English. And 「冷蔵庫|れいぞうこ」, fridge." },
    { tag: "Real-life Japanese", explain: "「冷たい飲み物」, a cold drink. And vending machines label cold drinks 「つめた〜い」, stretched cute, in blue. Hot ones say 「あったか〜い」, in red." }
  ],
  "おそい|遅い": [
    { tag: "Real-life Japanese", explain: "「遅い！」, you're late! Or, so slow! And 「もう遅い」, it's too late now. And 「遅いですね」, it's late, isn't it? About time of night." },
    { tag: "Don't mix it up", explain: "「遅い」 is both late and slow. Opposites, 「早い」, early, and 「速い」, fast. And 「遅れる|おくれる」, to be late for something, a verb. 「遅刻|ちこく」, tardiness." }
  ],
  "ねむい|眠い": [
    { tag: "Real-life Japanese", explain: "「眠い…」, I'm sleepy. Said in every class after lunch. And 「眠そう」, you look sleepy, lesson thirteen. And casually, 「ねむ…」. And 「眠れない」, I can't sleep." },
    { tag: "Word family", explain: "「眠|みん」, sleep. 「睡眠|すいみん」, sleep, formal. 「冬眠|とうみん」, hibernation. And 「眠る|ねむる」, to sleep. And the kanji has 「目」, eye, on the left. Eyes closing." }
  ],
  "かんたん|簡単": [
    { tag: "Real-life Japanese", explain: "「簡単です」, it's easy. And 「簡単な料理」, a simple dish. And reassuring, 「簡単だよ」, it's easy! And 「簡単に言うと」, to put it simply. Great for explanations." },
    { tag: "Don't mix it up", explain: "「簡単」, easy, simple, a な adjective. 「やさしい」, easy, an い adjective. 「簡単な問題」 or 「やさしい問題」. Both work. But 「簡単」 is more common for easy tasks." }
  ],
  "かかる|": [
    { tag: "Real-life Japanese", explain: "「時間がかかる」, it takes time. 「お金がかかる」, it costs money. 「駅まで三十分かかります」. It takes thirty minutes to the station. And 「どのぐらいかかりますか」, how long does it take?" },
    { tag: "Word family", explain: "「かかる」 has many jobs. 「電話がかかる」, a call comes in. 「かぎがかかる」, it's locked. 「医者にかかる」, see a doctor. The partner of 「かける」." }
  ],
  "とまる|泊まる": [
    { tag: "Real-life Japanese", explain: "「ホテルに泊まる」, stay at a hotel. And 「友だちの家に泊まる」, sleep over at a friend's. And 「お泊まり|おとまり」, a sleepover. Kids love it." },
    { tag: "Don't mix it up", explain: "Two 「とまる」. 「泊まる」, stay overnight. 「止まる」, to stop. 「電車が止まった」, the train stopped. Same sound. And 「一泊|いっぱく」, one night's stay." }
  ],
  "なる|": [
    { tag: "Real-life Japanese", explain: "「先生になりたい」. I want to become a teacher. And 「寒くなった」, it got cold. And 「二十歳になる|はたちになる」, turn twenty. Coming of age." },
    { tag: "Word family", explain: "「なる」 with nouns, use 「に」. 「医者になる」. With い adjectives, 「く」. 「大きくなる」. With な adjectives, 「に」. 「きれいになる」. Become, become, become." }
  ],
  "きめる|決める": [
    { tag: "Real-life Japanese", explain: "「何にするか決めましたか」. Have you decided what to get? And 「決めた！」, I've decided! And 「これに決めた」, I'll go with this one. And Pokémon fans know 「君に決めた|きみにきめた」, I choose you!" },
    { tag: "Don't mix it up", explain: "「決める」, decide, I do it, 「を」. 「決まる」, be decided, 「が」, lesson nineteen. And 「決して|けっして」, never, with a negative. 「決して忘れない」, I'll never forget." }
  ],
  "ごろごろする|": [
    { tag: "Memory hook", explain: "「ごろごろ」 is the sound of rolling around. Picture rolling on the couch, lazy day. And 「ごろごろ」 is also thunder rumbling, and a cat's purr. Rolling sounds." },
    { tag: "Real-life Japanese", explain: "「週末は家でごろごろしていた」. I lazed around at home all weekend. The perfect lazy weekend. And sound words, 「オノマトペ」, are everywhere in Japanese. 「だらだら」, being lazy too." }
  ],
  "りょこうする|旅行する": [
    { tag: "Real-life Japanese", explain: "「日本を旅行したい」. I want to travel around Japan. 「を」 for traveling through. And 「一人旅|ひとりたび」, solo travel. And 「旅行に行く」, go on a trip." },
    { tag: "Culture corner", explain: "The Japan Rail Pass lets tourists ride trains, even the bullet train, for a set price. And Japanese love domestic trips to hot springs. And 「旅の恥はかき捨て」, shame on a trip doesn't count, an old saying." }
  ],
  "れんしゅうする|練習する": [
    { tag: "Real-life Japanese", explain: "「毎日ピアノを練習します」. I practice piano every day. And 「日本語の練習」, Japanese practice. And club teams practice hard, 「練習が厳しい|きびしい」, practice is tough." },
    { tag: "Word family", explain: "「練|れん」, refine, and 「習|しゅう」, learn. Refining learning. 「習う|ならう」, learn. 「予習|よしゅう」, prepare. 「復習|ふくしゅう」, review. And 「練習問題」, practice problems." }
  ],
  "いちばん|一番": [
    { tag: "Real-life Japanese", explain: "「一番好きな食べ物は何ですか」. What's your favorite food? Lesson ten superlative. And 「一番」 alone, number one! And 「一番線|いちばんせん」, platform one." },
    { tag: "Word family", explain: "「番|ばん」, number, turn. 「一番」, number one. 「二番」, second. And 「番号|ばんごう」, number. 「交番|こうばん」, police box. 「番組|ばんぐみ」, TV program." }
  ],
  "どっち／どちら|": [
    { tag: "Real-life Japanese", explain: "「AとB、どっちがいい？」 A or B, which is better? Lesson ten comparisons. Answer, 「Aのほうがいい」, A is better. And 「どっちでもいい」, either is fine." },
    { tag: "Don't mix it up", explain: "「どっち」, casual. 「どちら」, polite. Both mean which of two. And 「どちら」 also means where, politely. 「どちらからですか」, where are you from?" }
  ],
  "はやく|早く／速く": [
    { tag: "Real-life Japanese", explain: "「早く！」, hurry! And 「早く起きる」, get up early. 「速く走る」, run fast. And 「早く会いたい」, I want to see you soon. Sweet." },
    { tag: "Word family", explain: "Adverbs from adjectives. 「早い」 becomes 「早く」. 「遅い」, 「遅く」. 「上手」, 「上手に」. い adjectives use 「く」, な adjectives use 「に」. Easy rule." }
  ],
  "あるいて|歩いて": [
    { tag: "Real-life Japanese", explain: "「歩いて行きます」. I'll walk there. And 「駅まで歩いて五分」, five minutes on foot to the station. And 「歩く|あるく」, to walk. 「歩きスマホ」, walking while on your phone, discouraged." },
    { tag: "Memory hook", explain: "The kanji 「歩」 is two feet, one stepping forward, 「止」 on top, and the other below. Footsteps. And 「散歩|さんぽ」, a stroll. 「犬の散歩」, walking the dog." }
  ],
  "〜で|": [
    { tag: "Real-life Japanese", explain: "「で」 marks how. 「バスで行く」, go by bus. 「はしで食べる」, eat with chopsticks. 「日本語で話す」, speak in Japanese. Means, tools, and languages." },
    { tag: "Don't mix it up", explain: "「で」 has two big jobs. Where something happens, 「図書館で勉強する」. And by means of, 「電車で来た」. And 「歩いて」, on foot, doesn't use 「で」. Never 「足で行く」." }
  ],
  "どうやって|": [
    { tag: "Real-life Japanese", explain: "「どうやって行きますか」. How do you get there? And 「どうやって作りますか」. How do you make it? And 「どうやって覚えた？」, how did you memorize it? Asking about methods." },
    { tag: "Word family", explain: "「どう」, how, plus 「やって」, doing. How doing it? And 「こうやって」, like this, doing it this way. Teachers show you, 「こうやって書きます」. Write it like this." }
  ],
  "どのぐらい|": [
    { tag: "Real-life Japanese", explain: "「どのぐらいかかりますか」. How long does it take? And 「どのぐらい日本語を勉強していますか」. How long have you been studying Japanese? And 「どのぐらい」 also how much." },
    { tag: "Word family", explain: "こそあど plus 「ぐらい」. 「このぐらい」, about this much. 「そのぐらい」, about that much. 「どのぐらい」, how much. And 「くらい」 works too. 「どのくらい」." }
  ],
  "〜しゅうかん|〜週間": [
    { tag: "Real-life Japanese", explain: "「二週間日本にいました」. I was in Japan for two weeks. And 「一週間|いっしゅうかん」, one week. Notice 「いっ」. And 「何週間」, how many weeks." },
    { tag: "Don't mix it up", explain: "Length vs point. 「週」, week. 「週間」, weeks of duration. 「先週」, last week, a point. 「一週間」, one week long. Same with 「時」 and 「時間」. 「間」 makes it a duration." }
  ],
  "〜かげつ|〜か月": [
    { tag: "Don't mix it up", explain: "Months long. 「一か月|いっかげつ」, one month. 「三か月」, three months. Versus 「三月|さんがつ」, March! The little 「か」 changes March into three months. Super important." },
    { tag: "Real-life Japanese", explain: "「日本に六か月住んでいた」. I lived in Japan for six months. And 「六か月|ろっかげつ」, watch the sound. And 「か」 can be written 「ヶ」 or 「カ」, all the same." }
  ],
  "〜ねん|〜年": [
    { tag: "Real-life Japanese", explain: "「二年|にねん」, two years. And 「何年生|なんねんせい」, what year in school. And 「二〇二六年|にせんにじゅうろくねん」, the year 2026. And Japanese era years too, like 「令和八年」." },
    { tag: "Word family", explain: "「年」, year, and also age. 「年|とし」. 「年上」, older. 「年末」, year's end. 「新年」, new year. And 「〜年間」, years of duration. 「三年間」." }
  ],
  "このごろ|": [
    { tag: "Real-life Japanese", explain: "「このごろ、忙しいです」. I've been busy these days. And 「このごろの若者」, young people these days. Classic grumpy old person line." },
    { tag: "Word family", explain: "「この」, this, plus 「ごろ」, around, time. Around this time. Similar, 「最近|さいきん」, recently. And 「近ごろ|ちかごろ」, lately. All mean these days." }
  ],
  "〜ご|〜後": [
    { tag: "Real-life Japanese", explain: "「一時間後」, one hour later. 「三日後」, three days later. And 「卒業後|そつぎょうご」, after graduation. And 「その後|そのご」, after that." },
    { tag: "Word family", explain: "「後」 readings. 「ご」, after a time. 「あと」, after, later. 「うしろ」, behind. 「のち」, later, in forecasts. And 「午後|ごご」, afternoon." }
  ],
  "〜か〜|": [
    { tag: "Real-life Japanese", explain: "「コーヒーか紅茶」, coffee or tea. And 「月曜日か火曜日に」, Monday or Tuesday. Simple or. And 「行くか行かないか」, whether to go or not." },
    { tag: "Don't mix it up", explain: "「か」, or, between choices. 「と」, and, complete. 「や」, and so on. And 「か」 at a sentence end makes questions. 「行きますか」. Same little sound, different jobs." }
  ]
});
/* Lesson 11 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "おんせん|温泉": [
    { tag: "Culture corner", explain: "Japan has thousands of hot springs, thanks to volcanoes. Rules, wash before entering, no swimsuits, keep your small towel out of the water, and many ban tattoos. Outdoor baths, 「露天風呂|ろてんぶろ」, in the snow are magical." },
    { tag: "Word family", explain: "「温|おん」, warm, and 「泉|せん」, spring. 「温度|おんど」, temperature. 「温かい|あたたかい」, warm. And 「泉」 alone, 「いずみ」, a spring, also a name. And 「温泉卵|おんせんたまご」, eggs slow-cooked in hot springs." }
  ],
  "つり|釣り": [
    { tag: "Real-life Japanese", explain: "「釣りに行く」, go fishing. And 「魚を釣る|さかなをつる」, catch a fish. And slang, 「釣り」 online means clickbait, or trolling. Fishing for reactions! Same as English." },
    { tag: "Don't mix it up", explain: "「おつり」, with 「お」, means change, money back. 「おつりです」, here's your change. Different meaning! And 「釣り」, fishing. Context. Both have the same kanji, oddly." }
  ],
  "キャンプ|": [
    { tag: "Culture corner", explain: "Camping got hugely popular in Japan recently, especially 「グランピング」, glamping. And the anime 「ゆるキャン△」, Laid-Back Camp, made winter camping near Mount Fuji trendy. And 「ソロキャンプ」, solo camping, is a big trend." },
    { tag: "Real-life Japanese", explain: "「キャンプに行きたい」. I want to go camping. And 「キャンプ場|キャンプじょう」, a campground. And 「テント」, tent. And 「たき火|たきび」, campfire." }
  ],
  "やま|山": [
    { tag: "Memory hook", explain: "The kanji 「山」 is three mountain peaks. The tallest in the middle. One of the easiest kanji. And 「山」 reads 「さん」 in mountain names, 「富士山|ふじさん」. Not Mount Fuji-yama in Japanese." },
    { tag: "Word family", explain: "「山」 in names, 「山田|やまだ」, 「山本|やまもと」, very common family names. And 「火山|かざん」, volcano. 「登山|とざん」, mountain climbing. And 「山の日|やまのひ」, Mountain Day, an August holiday." }
  ],
  "みずうみ|湖": [
    { tag: "Word family", explain: "「みずうみ」 is 「水|みず」, water, plus 「海|うみ」, sea. A water sea, a freshwater sea. Lake! And 「湖|こ」 with the Chinese reading in names, 「琵琶湖|びわこ」, Japan's biggest lake." },
    { tag: "Culture corner", explain: "Lake Biwa, near Kyoto, is Japan's largest lake and one of the oldest in the world. And the Fuji Five Lakes, 「富士五湖|ふじごこ」, have stunning views of Mount Fuji reflected in the water." }
  ],
  "じんじゃ|神社": [
    { tag: "Culture corner", explain: "Shrines are Shinto. Look for the red gate, 「鳥居|とりい」. At the entrance, wash your hands and mouth at the water basin. Then toss a coin, bow twice, clap twice, pray, bow once. And buy a fortune, 「おみくじ」." },
    { tag: "Word family", explain: "「神|じん」, god, and 「社|じゃ」, shrine. 「神|かみ」, god. 「神様|かみさま」. And 「神宮|じんぐう」, a grand shrine, like 「明治神宮|めいじじんぐう」 in Tokyo. And 「神戸|こうべ」, Kobe, god door." }
  ],
  "しゃしんをとる|写真を撮る": [
    { tag: "Real-life Japanese", explain: "「写真を撮ってもいいですか」. May I take a picture? And 「写真を撮りましょうか」. Shall I take your picture? A nice offer to tourists. And 「インスタ映え|インスタばえ」, Instagram-worthy." },
    { tag: "Culture corner", explain: "Some places in Japan ban photos, like inside temples, some museums, and certain Kyoto streets in Gion, to protect geisha from tourists. Look for 「撮影禁止|さつえいきんし」, no photography." }
  ],
  "がいこく|外国": [
    { tag: "Real-life Japanese", explain: "「外国に行ったことがありますか」. Have you ever been abroad? Lesson eleven's 「〜たことがある」. And 「外国人|がいこくじん」, foreigner. And 「外国語|がいこくご」, a foreign language." },
    { tag: "Word family", explain: "「外|がい」, outside. 「外国」, outside country. 「海外|かいがい」, overseas. 「以外|いがい」, except. And 「外|そと」, outside. And 「外食|がいしょく」, eating out." }
  ],
  "かわ|川": [
    { tag: "Memory hook", explain: "The kanji 「川」 is three lines of flowing water. A river, seen from above. And Japanese has a cute phrase, sleeping like the character 「川」. Parent, child, parent, side by side, called 「川の字で寝る」." },
    { tag: "Word family", explain: "「川」 in names, 「川口|かわぐち」, 「石川|いしかわ」. And it becomes 「がわ」 in compounds. 「多摩川|たまがわ」. And 「小川|おがわ」, a stream. And 「川」 is used for rivers in place names." }
  ],
  "ドライブ|": [
    { tag: "Don't mix it up", explain: "「ドライブ」 in Japanese means a leisure drive, a road trip for fun. Not the act of driving, which is 「運転|うんてん」. 「ドライブに行こう」. Let's go for a drive. And 「ドライブスルー」, drive-through." },
    { tag: "Culture corner", explain: "Japan has 「道の駅|みちのえき」, roadside stations, rest stops with local food, souvenirs, and farm produce. Some are famous destinations. A Japanese 「ドライブ」 often goes from one to the next." }
  ],
  "びじゅつかん|美術館": [
    { tag: "Word family", explain: "「美|び」, beauty, 「術|じゅつ」, art, technique, 「館|かん」, building. Beauty art building. 「美術」, fine art. 「芸術|げいじゅつ」, the arts. And 「博物館|はくぶつかん」, a museum of history or science." },
    { tag: "Culture corner", explain: "Japan has amazing art museums. The Ghibli Museum in Mitaka. Naoshima, an island of art with Yayoi Kusama's pumpkin. And teamLab digital art museums in Tokyo." }
  ],
  "しゃちょう|社長": [
    { tag: "Real-life Japanese", explain: "「社長」 is the company president. Employees call them 「社長」, not by name. And at bars, staff jokingly call male customers 「社長！」 to flatter them. Hey boss!" },
    { tag: "Word family", explain: "The company ladder. 「社長」, president. 「部長|ぶちょう」, department head. 「課長|かちょう」, section chief. 「係長|かかりちょう」, team leader. 「社員|しゃいん」, employee. And 「新入社員」, new hire." }
  ],
  "かしゅ|歌手": [
    { tag: "Word family", explain: "「手|しゅ」 here means a person skilled at something. 「歌手」, a singer. 「選手|せんしゅ」, an athlete. 「運転手|うんてんしゅ」, a driver. 「助手|じょしゅ」, an assistant. Hand means skilled person." },
    { tag: "Culture corner", explain: "Japanese pop stars are called 「アイドル」, idols, managed by agencies. And there's 「演歌歌手|えんかかしゅ」, enka singers, singing traditional ballads. And Utada Hikaru, a famous singer, grew up partly in New York." }
  ],
  "ルームメイト|": [
    { tag: "Real-life Japanese", explain: "「ルームメイトがいます」. I have a roommate. And in Japan, roommates are less common. People live alone or with family. But 「シェアハウス」, share house, is growing popular with young people." },
    { tag: "Sound it out", explain: "Roommate, 「ルーム」 plus 「メイト」. And 「クラスメイト」, classmate. 「チームメイト」, teammate. The mate part becomes 「メイト」, sometimes 「メート」. Both spellings exist." }
  ],
  "ホストファミリー|": [
    { tag: "Real-life Japanese", explain: "「ホストファミリーはやさしいです」. My host family is kind. And you call the host parents 「お父さん」, 「お母さん」. And bring 「おみやげ」 from your hometown." },
    { tag: "Culture corner", explain: "Homestay families often take you to festivals, cook regional food, and treat you like family. Many students stay in touch for life. And the host mom, 「ホストマザー」, often packs your lunch!" }
  ],
  "しょうらい|将来": [
    { tag: "Real-life Japanese", explain: "「将来、何になりたいですか」. What do you want to be in the future? Lesson eleven's big question. And 「将来の夢」, your future dream. Kids write essays on it." },
    { tag: "Don't mix it up", explain: "Future words. 「将来」, your personal future, career and life. 「未来|みらい」, the future in general, sci-fi future. So 「将来の夢」, my future dream, but 「未来の車」, cars of the future." }
  ],
  "ゆめ|夢": [
    { tag: "Real-life Japanese", explain: "「夢を見る」, to dream, literally see a dream. And 「夢は何ですか」. What's your dream? And 「夢がかなう」, a dream comes true. And 「初夢|はつゆめ」, the first dream of the year." },
    { tag: "Culture corner", explain: "The luckiest first dream of the New Year is said to be Mount Fuji, a hawk, and an eggplant. 「一富士、二鷹、三なすび」. Nobody's sure why eggplant. Fun tradition." }
  ],
  "おまつり|お祭り": [
    { tag: "Culture corner", explain: "Japanese festivals have food stalls, 「屋台|やたい」, selling takoyaki, cotton candy, and goldfish scooping, 「金魚すくい」. People wear 「浴衣」. And portable shrines, 「みこし」, get carried through the streets." },
    { tag: "Word family", explain: "「祭|さい」 in 「文化祭|ぶんかさい」, school festival. 「学園祭|がくえんさい」, college festival. And 「後の祭り|あとのまつり」, after the festival, meaning too late. A useful saying." }
  ],
  "おしょうがつ|お正月": [
    { tag: "Culture corner", explain: "New Year's is Japan's biggest holiday. Families eat special food, 「おせち料理」, visit a shrine, 「初詣|はつもうで」, and kids get money in envelopes, 「お年玉|おとしだま」. Everything closes for a few days." },
    { tag: "Real-life Japanese", explain: "「あけましておめでとうございます」. Happy New Year. And 「今年もよろしくお願いします」. And at the end of December, 「よいお年を」, have a good new year." }
  ],
  "おかし|お菓子": [
    { tag: "Culture corner", explain: "Japanese snacks are famous worldwide. Pocky, KitKats in wild flavors like wasabi and sake. And traditional sweets, 「和菓子|わがし」, made with bean paste, beautifully shaped by season." },
    { tag: "Don't mix it up", explain: "Careful, 「おかしい」 means strange or funny. 「お菓子」 is snacks. One letter! 「このお菓子、おかしい」. This snack is weird. And 「駄菓子|だがし」, cheap candy for kids." }
  ],
  "ビール|": [
    { tag: "Culture corner", explain: "The first drink at a Japanese party is almost always beer. 「とりあえずビール」, beer for now, is a famous ordering phrase. And Japan's big brands are Asahi, Kirin, Sapporo, and Suntory." },
    { tag: "Sound it out", explain: "「ビール」 comes from Dutch bier, not English beer. That's why it has the 「ル」. Dutch traders were the only Europeans allowed in Japan for two hundred years. Lots of Dutch words!" }
  ],
  "おもちゃ|": [
    { tag: "Culture corner", explain: "Japan makes famous toys. Gundam models, 「ガンプラ」. Capsule toys, 「ガチャガチャ」, from vending machines, with whole stores full of them. And Tamagotchi, the digital pet." },
    { tag: "Real-life Japanese", explain: "「おもちゃを買って！」, buy me a toy! What kids say. And 「おもちゃ屋」, toy store. And 「おもちゃにする」, to toy with someone, play with them. Same as English." }
  ],
  "こんがっき|今学期": [
    { tag: "Real-life Japanese", explain: "「今学期は何を取っていますか」. What are you taking this semester? And 「今学期は忙しい」. Busy semester. And 「学期末|がっきまつ」, the end of the term." },
    { tag: "Word family", explain: "「学期|がっき」, term, semester. 「前期|ぜんき」, first semester. 「後期|こうき」, second. And Japanese schools have three terms, 「一学期」, 「二学期」, 「三学期」." }
  ],
  "らいがっき|来学期": [
    { tag: "Real-life Japanese", explain: "「来学期、留学します」. Next semester, I'm studying abroad. And 「来学期も日本語を取る」. I'll take Japanese next semester too. A good plan." },
    { tag: "Word family", explain: "「来|らい」, coming. 「来学期」, 「来週」, 「来月」, 「来年」. And 「先学期|せんがっき」, last semester. The pattern, 「先」, 「今」, 「来」, last, this, next." }
  ],
  "じゅぎょう|授業": [
    { tag: "Real-life Japanese", explain: "「授業は何時からですか」. What time does class start? And 「授業をサボる」, skip class, also in this lesson. And 「授業中|じゅぎょうちゅう」, during class, lesson sixteen." },
    { tag: "Don't mix it up", explain: "Class words. 「授業」, a class session, lecture. 「クラス」, the group of students. 「講義|こうぎ」, a university lecture. And 「授業料」, tuition. Different things English calls class." }
  ],
  "うそをつく|": [
    { tag: "Real-life Japanese", explain: "「うそ！」 alone means no way! Really? Surprise, not accusation. And 「うそつき」, a liar. Kids say it. And 「うそをつかないで」, don't lie." },
    { tag: "Culture corner", explain: "A Japanese saying, 「うそも方便|ほうべん」, a lie can be a means. White lies are sometimes okay. And another, 「うそつきは泥棒の始まり|どろぼうのはじまり」, lying is the first step to becoming a thief." }
  ],
  "おなかがすく|": [
    { tag: "Real-life Japanese", explain: "「おなかがすいた」, I'm hungry. Past tense, because the state already happened. Casual, 「おなかすいた！」. And 「おなかがいっぱい」, I'm full." },
    { tag: "Word family", explain: "「おなか」, stomach. 「おなかが痛い」, stomachache. 「おなかを壊す」, upset stomach. And guys say 「腹減った|はらへった」, I'm starving, rough version." }
  ],
  "かう|飼う": [
    { tag: "Real-life Japanese", explain: "「犬を飼っています」. I have a dog. State form! And 「ペットを飼いたい」, I want a pet. And many Japanese apartments don't allow pets, 「ペット不可|ペットふか」." },
    { tag: "Don't mix it up", explain: "「飼う」, keep a pet. 「買う」, buy. Same sound, 「かう」. 「犬を買う」, buy a dog. 「犬を飼う」, keep a dog. And the kanji 「飼」 has 「食」, food, on the left. Feeding an animal." }
  ],
  "サボる|": [
    { tag: "Memory hook", explain: "「サボる」 comes from French sabotage! Half French, half Japanese verb. Add 「る」 and it's a verb. 「授業をサボる」, skip class. Sabotage your own education." },
    { tag: "Word family", explain: "Japanese makes verbs from loanwords with 「る」. 「サボる」, skip. 「ググる」, google it. 「メモる」, take notes. And 「バズる」, go viral. Super casual, super useful." }
  ],
  "とる|取る": [
    { tag: "Real-life Japanese", explain: "「授業を取る」, take a class. 「いい点を取る」, get a good grade. 「塩を取ってください」, pass the salt. And 「年を取る」, get older. Lots of taking." },
    { tag: "Don't mix it up", explain: "Many 「とる」. 「取る」, take, get. 「撮る」, take a photo. 「捕る」, catch. And 「とって」, could you pass it? Hiragana 「とる」 hides them all." }
  ],
  "ならう|習う": [
    { tag: "Don't mix it up", explain: "「習う」, learn from a teacher. 「勉強する」, study, on your own or in school. 「学ぶ|まなぶ」, learn, formal. So 「ピアノを習う」, take piano lessons. And 「習い事|ならいごと」, after-school lessons." },
    { tag: "Memory hook", explain: "The kanji 「習」 has 「羽|はね」, wings, on top, and 「白」, white, below. A baby bird practicing flapping its white wings again and again. That's learning." }
  ],
  "のぼる|登る": [
    { tag: "Real-life Japanese", explain: "「富士山に登る」, climb Mount Fuji. The season is July to early September. People climb overnight to see the sunrise from the top, 「ご来光|ごらいこう」. And 「山に登る」, use 「に」." },
    { tag: "Culture corner", explain: "A famous saying, he who never climbs Mount Fuji is a fool, but he who climbs twice is a bigger fool. 「富士山に一度も登らぬばか、二度登るばか」. Climb once!" }
  ],
  "はしる|走る": [
    { tag: "Real-life Japanese", explain: "「毎朝走っています」. I run every morning. And 「走らないでください」, please don't run. Signs say it in stations. And 「駆け込み乗車|かけこみじょうしゃ」, rushing onto trains, is discouraged." },
    { tag: "Culture corner", explain: "Japan loves long distance running. The 「箱根駅伝|はこねえきでん」, a college relay race on January second and third, is a huge TV event. And Tokyo Marathon draws runners from around the world." }
  ],
  "つかれる|疲れる": [
    { tag: "Real-life Japanese", explain: "「疲れた」, I'm tired. Past tense for the state. And 「お疲れさま」, good work, lesson eighteen. And 「疲れているみたい」, you seem tired." },
    { tag: "Memory hook", explain: "The kanji 「疲」 has the sickness radical, 「疒」, a sick bed, wrapped around 「皮|かわ」, skin. Tired to the skin, sick of it. And 「疲れ」, fatigue." }
  ],
  "やめる|": [
    { tag: "Real-life Japanese", explain: "「やめて！」, stop it! And 「たばこをやめる」, quit smoking. 「会社をやめる」, quit a job. And 「やめた」, I quit, never mind." },
    { tag: "Don't mix it up", explain: "Two kanji. 「止める|やめる」, stop an action. 「辞める|やめる」, quit a job or school. And 「止める」 also reads 「とめる」, to stop something, like a car." }
  ],
  "けんかする|": [
    { tag: "Real-life Japanese", explain: "「友だちとけんかした」. I had a fight with a friend. 「と」 for with. And 「けんかしないで」, don't fight. And making up is 「仲直り|なかなおり」." },
    { tag: "Culture corner", explain: "A saying, 「けんかするほど仲がいい」. The more you fight, the closer you are. And another, 「けんか両成敗|りょうせいばい」, both sides are to blame in a fight." }
  ],
  "しょうかいする|紹介する": [
    { tag: "Real-life Japanese", explain: "「自己紹介|じこしょうかい」, a self-introduction. Every Japanese class starts with one. 「自己紹介をしてください」. And 「友だちを紹介します」. Let me introduce my friend." },
    { tag: "Culture corner", explain: "Japanese self-introductions follow a pattern. Name, where you're from, school or job, a hobby, and end with 「よろしくお願いします」. Short and humble. And a bow." }
  ],
  "ダイエットする|": [
    { tag: "Don't mix it up", explain: "「ダイエット」 in Japanese means trying to lose weight, not just what you eat. 「ダイエット中」, I'm on a diet. And it's casual. Many people say it. And 「ダイエットコーラ」 exists too." },
    { tag: "Real-life Japanese", explain: "「ダイエットしているから、ケーキはいいです」. I'm dieting, so no cake for me. And everyone says it starts tomorrow, 「ダイエットは明日から」." }
  ],
  "ちこくする|遅刻する": [
    { tag: "Real-life Japanese", explain: "「遅刻してすみません」. Sorry for being late. And 「また遅刻？」, late again? And 「遅刻しそう！」, I'm going to be late! A classic anime opening, running with toast in your mouth." },
    { tag: "Culture corner", explain: "Being late in Japan is a big deal. People arrive early. Trains even issue delay certificates, 「遅延証明書」, so you can prove it wasn't your fault. Five minutes early is on time." }
  ],
  "りゅうがくする|留学する": [
    { tag: "Real-life Japanese", explain: "「日本に留学したい」. I want to study abroad in Japan. And 「留学生」, international student. And 「留学中」, while studying abroad. 「留学中に、たくさん友だちができた」." },
    { tag: "Word family", explain: "「留|りゅう」, stay. 「留学」, staying to study. 「留守|るす」, being away from home. 「留守番|るすばん」, house-sitting. And 「書留|かきとめ」, registered mail." }
  ],
  "しゅっしん|出身": [
    { tag: "Real-life Japanese", explain: "「ご出身はどちらですか」. Where are you from? Polite. And 「コロラド出身です」. I'm from Colorado. And 「出身大学」, alma mater." },
    { tag: "Word family", explain: "「出|しゅつ」, out, and 「身|しん」, body, self. Where your body came out from. And 「身長|しんちょう」, height. 「自身|じしん」, oneself. And 「中身|なかみ」, contents." }
  ],
  "ひさしぶり|久しぶり": [
    { tag: "Real-life Japanese", explain: "「久しぶり！」, long time no see! Casual. Polite, 「お久しぶりです」. And 「久しぶりに映画を見た」. I saw a movie for the first time in ages." },
    { tag: "Word family", explain: "「久しい|ひさしい」, a long time, old word. And 「〜ぶり」, after an interval. 「三年ぶり」, after three years. 「一週間ぶりに会った」, met after a week. Very handy." }
  ],
  "まあまあ|": [
    { tag: "Real-life Japanese", explain: "「テストはどうだった？」 How was the test? 「まあまあ」. So-so. And 「まあまあおいしい」, not bad. And 「まあまあ」 also calms someone. 「まあまあ、落ち着いて」. Now now, calm down." },
    { tag: "Word family", explain: "「まあ」 alone is a filler, well. 「まあ、いいか」, oh well, whatever. And older women say 「まあ！」, oh my! Surprise. One small sound, many feelings." }
  ],
  "もっと|": [
    { tag: "Real-life Japanese", explain: "「もっとゆっくり話してください」. Please speak more slowly. Lifesaver. And 「もっと食べて」, eat more. And 「もっと勉強すればよかった」, I should have studied more." },
    { tag: "Don't mix it up", explain: "「もっと」, more. 「もう」, already, or one more. 「もう一つ」, one more. 「もっと」 is a bigger amount. 「もう少し|もうすこし」, a little more." }
  ],
  "そして|": [
    { tag: "Real-life Japanese", explain: "「そして」 is and then, in writing and speech. 「朝ご飯を食べた。そして、学校に行った」. And it's a bit more formal than 「それから」. Great for essays." },
    { tag: "Word family", explain: "「そして」, and. 「それから」, and then. 「それに」, besides. 「そのうえ」, moreover. Each adds a little differently. 「そして」 is the most neutral." }
  ],
  "〜だけ|": [
    { tag: "Real-life Japanese", explain: "「一つだけ」, just one. 「水だけ」, only water. And 「ちょっとだけ」, just a little. And 「見るだけです」, just looking. What to say to shop staff." },
    { tag: "Don't mix it up", explain: "「だけ」, only, neutral or positive. 「しか」, only, with a negative, feels like not enough. 「千円だけある」, I have just a thousand yen. 「千円しかない」, I only have a thousand yen. Sad." }
  ],
  "〜てん|〜点": [
    { tag: "Real-life Japanese", explain: "「テストで百点を取った」. I got a hundred on the test! And 「何点だった？」, what did you get? And 「満点|まんてん」, a perfect score. And Japanese tests mark wrong answers with a check." },
    { tag: "Word family", explain: "「点」, point, dot. 「点数|てんすう」, score. 「欠点|けってん」, a flaw. 「交差点|こうさてん」, intersection, crossing point. And the kanji has four fire dots at the bottom." }
  ],
  "さっか|作家": [
    { tag: "Word family", explain: "「作|さっ」, make, and 「家|か」, expert. A maker expert. 「家」 ends many professions. 「画家|がか」, painter. 「音楽家|おんがくか」, musician. 「政治家|せいじか」, politician." },
    { tag: "Culture corner", explain: "Famous Japanese authors. Haruki Murakami, read worldwide. Natsume Soseki, on the old thousand-yen bill. And Banana Yoshimoto. A great way to practice reading is short stories." }
  ],
  "ジャーナリスト|": [
    { tag: "Real-life Japanese", explain: "「ジャーナリストになりたい」. I want to be a journalist. And a reporter, 「記者|きしゃ」, is more common in daily speech. 「新聞記者」, newspaper reporter." },
    { tag: "Sound it out", explain: "Journalist becomes 「ジャーナリスト」. The j sound is 「ジャ」, small 「ャ」. Then the ur is a long 「ー」. And st at the end, 「スト」. Long, but every piece is regular." }
  ],
  "けいさつかん|警察官": [
    { tag: "Culture corner", explain: "Japanese police work from small boxes, 「交番|こうばん」, in every neighborhood. They give directions, take lost items, and bike around. People call them 「おまわりさん」, the walking-around person." },
    { tag: "Word family", explain: "「警|けい」, warn, 「察|さつ」, observe, 「官|かん」, official. Warning observing official. 「警察」, police. 「警察署|けいさつしょ」, police station. And emergency is 「110」, read 「ひゃくとおばん」." }
  ],
  "しょうぼうし|消防士": [
    { tag: "Word family", explain: "「消|しょう」, extinguish, 「防|ぼう」, prevent, 「士|し」, professional. Fire extinguishing professional. And 「消防車|しょうぼうしゃ」, fire truck. And emergency number 「119」 for fire and ambulance." },
    { tag: "Culture corner", explain: "Japanese firefighters do public demos and festivals. And in the New Year, they hold a ceremony with ladder acrobatics, 「出初式|でぞめしき」. Old Edo firefighters were local heroes." }
  ],
  "きょうし|教師": [
    { tag: "Don't mix it up", explain: "「教師」 is a teacher as a job. 「先生」 is how you address or respect them. So 「母は教師です」, my mom is a teacher. Not 「先生です」 about your own mom. Humble." },
    { tag: "Word family", explain: "「師|し」, master, teacher. 「教師」, teaching master. 「医師|いし」, doctor, formal. 「看護師|かんごし」, nurse. 「美容師|びようし」, hairdresser. Skilled professions." }
  ],
  "けんきゅうしゃ|研究者": [
    { tag: "Real-life Japanese", explain: "「研究者になりたい」. I want to be a researcher. And 「宇宙の研究者」, a space researcher. Like the people building satellites at LASP." },
    { tag: "Word family", explain: "「者|しゃ」, person. 「研究者」, researcher. 「学者」, scholar. 「医者」, doctor. 「記者」, reporter. 「若者」, youth. And 「研究」, research, lesson sixteen." }
  ],
  "うちゅうひこうし|宇宙飛行士": [
    { tag: "Word family", explain: "「宇宙|うちゅう」, outer space. 「飛行|ひこう」, flight. 「士|し」, professional. Space flight professional. And 「宇宙人|うちゅうじん」, alien, space person. And JAXA is Japan's space agency." },
    { tag: "Culture corner", explain: "Japan has many astronauts who've flown to the International Space Station. Koichi Wakata even commanded it. And Japan's 「はやぶさ」 probes brought back samples from asteroids. A space nation." }
  ],
  "スポーツせんしゅ|スポーツ選手": [
    { tag: "Word family", explain: "「選|せん」, chosen, and 「手|しゅ」, skilled person. A chosen one. 「選手」, athlete. 「野球選手」, baseball player. And 「選ぶ|えらぶ」, to choose, lesson seventeen." },
    { tag: "Real-life Japanese", explain: "「将来、サッカー選手になりたい」. I want to be a soccer player. The classic boy's dream in Japan. And 「選手」 alone is enough. 「大谷選手|おおたにせんしゅ」, Ohtani the athlete." }
  ],
  "はいゆう|俳優": [
    { tag: "Word family", explain: "「俳優」 covers actors, any gender. And 「女優|じょゆう」, actress, also common. 「声優|せいゆう」, voice actor, for anime. Voice actors are huge stars in Japan." },
    { tag: "Culture corner", explain: "Voice actors, 「声優」, have fan clubs, concerts, and appear on TV. Some are as famous as movie stars. And dubbed Hollywood stars have their own fixed Japanese voice actors for decades." }
  ],
  "かんごし|看護師": [
    { tag: "Word family", explain: "「看|かん」, watch over, 「護|ご」, protect, 「師|し」, professional. Watching and protecting professional. And 「看病|かんびょう」, caring for the sick. And formerly, nurses were 「看護婦|かんごふ」, a gendered word." },
    { tag: "Real-life Japanese", explain: "「看護師になりたい」. I want to be a nurse. And people call nurses 「看護師さん」. Lesson eleven, future dreams. A respected job in Japan's aging society." }
  ],
  "シェフ|": [
    { tag: "Don't mix it up", explain: "「シェフ」 usually means a Western-style chef, French or Italian. A Japanese cuisine chef is an 「板前|いたまえ」, in front of the cutting board. And a sushi chef, 「すし職人|しょくにん」." },
    { tag: "Sound it out", explain: "Chef becomes 「シェフ」, with small 「ェ」 making she. And 「フ」 for the f. Japanese adds a vowel at the end. And the TV show Iron Chef was 「料理の鉄人|りょうりのてつじん」." }
  ],
  "まんがか|漫画家": [
    { tag: "Culture corner", explain: "Manga artists work insane hours with weekly deadlines. Famous ones, Osamu Tezuka, the god of manga, Akira Toriyama of Dragon Ball, and Eiichiro Oda of One Piece. Weekly magazines like Shonen Jump are huge." },
    { tag: "Word family", explain: "「漫|まん」, random, 「画|が」, picture, 「家|か」, expert. Random pictures expert. And 「漫画」, manga. 「画家|がか」, painter. And 「アニメーター」, animator." }
  ],
  "だいとうりょう|大統領": [
    { tag: "Don't mix it up", explain: "「大統領」, a country's president, like the US. 「社長|しゃちょう」, a company president. And Japan has a 「首相|しゅしょう」, prime minister, not a president. Three different heads." },
    { tag: "Word family", explain: "「大|だい」, big, 「統|とう」, unite, govern, 「領|りょう」, territory. Big uniting ruler. And 「領土|りょうど」, territory. And 「アメリカの大統領」, the US President." }
  ]
});
/* Lesson 12 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "おなか|": [
    { tag: "Real-life Japanese", explain: "「おなかが痛い|おなかがいたい」, my stomach hurts. Lesson twelve's sick sentences. And 「おなかがすいた」, hungry. 「おなかいっぱい」, full. And the kanji is 「お腹」, rarely used." },
    { tag: "Word family", explain: "Body parts with 「が痛い」. 「頭が痛い」, headache. 「歯が痛い」, toothache. 「のどが痛い」, sore throat. 「足が痛い」, my leg hurts. One pattern, every ache." }
  ],
  "あし|足": [
    { tag: "Don't mix it up", explain: "「足」 means both leg and foot in Japanese. Context tells you. 「足が長い」, long legs. 「足が大きい」, big feet. And 「脚」, another kanji, specifically for legs, but 「足」 is common." },
    { tag: "Word family", explain: "「足」 also means enough. 「足りる|たりる」, lesson seventeen. And 「遠足|えんそく」, a school field trip, far feet. And 「一足|いっそく」, counter for pairs of shoes." }
  ],
  "は|歯": [
    { tag: "Real-life Japanese", explain: "「歯をみがく」, brush your teeth, lesson thirteen. And 「歯医者|はいしゃ」, dentist. And 「歯が痛い」, toothache. And 「虫歯|むしば」, a cavity, bug tooth." },
    { tag: "Culture corner", explain: "Japanese people often brush their teeth after lunch, at school and even at work. Offices have toothbrushes in the restroom. And 「八重歯|やえば」, a snaggletooth, was once considered cute in Japan." }
  ],
  "のど|": [
    { tag: "Real-life Japanese", explain: "「のどが痛い」, sore throat. And 「のどが渇いた|のどがかわいた」, I'm thirsty, my throat is dry. And 「のど飴|のどあめ」, throat drops. Every convenience store has them." },
    { tag: "Word family", explain: "The kanji is 「喉」, usually written in kana. And 「のど自慢|のどじまん」, a famous TV singing contest for amateurs, throat pride. It's been on air since the 1940s." }
  ],
  "ねつ|熱": [
    { tag: "Real-life Japanese", explain: "「熱があります」, I have a fever. And 「熱を測る|ねつをはかる」, take your temperature. And Japanese thermometers go under your arm, in Celsius. Thirty-seven point five is a fever." },
    { tag: "Word family", explain: "「熱」 also means passion. 「熱心|ねっしん」, enthusiastic, hot heart. 「熱中|ねっちゅう」, absorbed in. And 「熱中症|ねっちゅうしょう」, heatstroke, a summer warning." }
  ],
  "せき|": [
    { tag: "Real-life Japanese", explain: "「せきが出る」, I have a cough. And 「せき止め|せきどめ」, cough medicine, cough stopper. And Japanese people cough into their elbow or a mask to be polite." },
    { tag: "Don't mix it up", explain: "「せき」 also means seat! 「席|せき」. 「席を取る」, save a seat. 「この席、空いていますか」, is this seat free? Same sound. Cough versus seat." }
  ],
  "びょうき|病気": [
    { tag: "Real-life Japanese", explain: "「病気になる」, get sick. And 「病気で学校を休んだ」. I missed school because I was sick. And 「病気の時」, when you're sick. Lesson twelve's 「〜んです」 helps explain." },
    { tag: "Word family", explain: "「病|びょう」, illness, and 「気」, spirit. Sick spirit. 「病院」, hospital. 「看病|かんびょう」, nursing someone. And 「気」 in 「元気」, healthy spirit. Opposites!" }
  ],
  "プレゼント|": [
    { tag: "Real-life Japanese", explain: "「プレゼントをあげる」, give a present. Lesson fourteen. And 「誕生日プレゼント」. And gifts in Japan are often wrapped beautifully, and people don't open them in front of the giver." },
    { tag: "Culture corner", explain: "Japanese gift culture has many types. 「お土産|おみやげ」, souvenirs. 「お歳暮|おせいぼ」, year-end gifts. 「お中元|おちゅうげん」, summer gifts. And 「プレゼント」 is a personal gift to friends." }
  ],
  "ふつかよい|二日酔い": [
    { tag: "Memory hook", explain: "「二日|ふつか」, two days, plus 「酔い|よい」, drunkenness. Drunk on two days! Still drunk the second day. That's a hangover. Brilliant word." },
    { tag: "Real-life Japanese", explain: "「二日酔いで頭が痛い」. I have a headache from a hangover. And Japanese convenience stores sell hangover drinks, like turmeric drinks, 「ウコン」. People drink them before parties." }
  ],
  "しけん|試験": [
    { tag: "Real-life Japanese", explain: "「試験に合格する|しけんにごうかくする」, pass an exam. 「試験に落ちる」, fail. And 「試験勉強」, studying for exams. And the Japanese Language Proficiency Test is 「日本語能力試験|にほんごのうりょくしけん」, the JLPT." },
    { tag: "Word family", explain: "「試|し」, try, and 「験|けん」, test. 「試す|ためす」, to try. 「試合|しあい」, a match. 「試着|しちゃく」, trying on clothes. And 「経験|けいけん」, experience." }
  ],
  "インフルエンザ|": [
    { tag: "Real-life Japanese", explain: "「インフルエンザにかかった」. I caught the flu. And in Japan, students with the flu must stay home for several days by law. And people shorten it to 「インフル」." },
    { tag: "Sound it out", explain: "Influenza becomes 「インフルエンザ」, the full word. English says flu, but Japanese keeps all of it. And schools announce 「学級閉鎖|がっきゅうへいさ」, class closure, when too many kids get the flu." }
  ],
  "かぜ|風邪": [
    { tag: "Real-life Japanese", explain: "「風邪をひいた」, I caught a cold. And 「風邪気味|かぜぎみ」, I'm a bit under the weather, a touch of a cold. And 「風邪薬|かぜぐすり」, cold medicine." },
    { tag: "Culture corner", explain: "A Japanese saying, 「ばかは風邪をひかない」. Fools don't catch colds. Because they don't notice they're sick! People joke about it when someone's never sick." }
  ],
  "ホームシック|": [
    { tag: "Real-life Japanese", explain: "「ホームシックになった」. I got homesick. Common for exchange students. And comfort, 「家族に電話したら？」, why not call your family? Lesson twelve's advice form." },
    { tag: "Sound it out", explain: "Homesick becomes 「ホームシック」. The small 「ッ」 makes the quick stop before 「ク」. And it's a noun in Japanese. You become it, 「ホームシックになる」." }
  ],
  "アレルギー|": [
    { tag: "Real-life Japanese", explain: "「卵アレルギーがあります」. I'm allergic to eggs. Put the thing in front. And 「花粉症|かふんしょう」, hay fever, is a big spring problem in Japan. Everyone wears masks." },
    { tag: "Sound it out", explain: "「アレルギー」 comes from German Allergie, not English allergy. That's why it ends in 「ギー」. Medical words in Japanese often came from German. 「カルテ」, medical chart, too." }
  ],
  "ジュース|": [
    { tag: "Don't mix it up", explain: "In Japanese, 「ジュース」 can mean any sweet soft drink, even soda, not just fruit juice. Kids say 「ジュース飲みたい」 for cola. And 100 percent juice is 「果汁|かじゅう」 juice." },
    { tag: "Real-life Japanese", explain: "「オレンジジュースをください」. Orange juice, please. And vending machines everywhere. And 「ジュース」 for kids at parties instead of alcohol." }
  ],
  "たまご|卵": [
    { tag: "Culture corner", explain: "Japanese eat raw eggs safely! 「卵かけご飯|たまごかけごはん」, raw egg over rice with soy sauce, a classic breakfast. Japanese eggs are carefully handled. And 「温泉卵」, soft hot-spring eggs." },
    { tag: "Word family", explain: "「卵」 also means a future professional. 「医者の卵」, a doctor in the making, an egg of a doctor. Cute. And 「玉子|たまご」, another spelling, used for cooked eggs on menus." }
  ],
  "ふく|服": [
    { tag: "Real-life Japanese", explain: "「服を買う」, buy clothes. And 「いい服ですね」, nice clothes. And 「服」 covers all clothes. Western clothes, 「洋服|ようふく」. Traditional, 「和服|わふく」." },
    { tag: "Word family", explain: "「服」 in 「制服|せいふく」, uniform. 「洋服」, Western clothes. 「和服」, Japanese clothes. And 「服装|ふくそう」, attire, dress code." }
  ],
  "もの|物": [
    { tag: "Don't mix it up", explain: "「物|もの」, a physical thing. 「事|こと」, an abstract thing, a matter. 「おいしい物」, tasty things. 「大切な事」, an important matter. And 「者|もの」, a person, same sound. Three 「もの」." },
    { tag: "Word family", explain: "「物」 makes many words. 「食べ物」, 「飲み物」, 「買い物」, 「着物」. And Chinese reading 「ぶつ」, 「動物|どうぶつ」, animal. 「荷物|にもつ」, luggage, 「もつ」." }
  ],
  "きっぷ|切符": [
    { tag: "Real-life Japanese", explain: "「切符を買う」, buy a ticket. And at stations, ticket machines, 「券売機|けんばいき」. And now most people use IC cards like 「Suica」, tapping instead. But 「切符」 for the bullet train." },
    { tag: "Word family", explain: "「切|き」, cut, and 「符|ふ」, tag. Cut tag, the old tickets were punched. And 「〜券|けん」, ticket, voucher. 「乗車券」, boarding ticket. 「食券|しょっけん」, meal ticket." }
  ],
  "〜だい|〜代": [
    { tag: "Real-life Japanese", explain: "「電気代|でんきだい」, electric bill. 「ガス代」, gas bill. 「食事代」, food costs. And 「タクシー代」, taxi fare. 「代」 means the fee for something." },
    { tag: "Don't mix it up", explain: "「代」 has other meanings. 「二十代|にじゅうだい」, in your twenties. 「時代|じだい」, era. And 「代わり|かわり」, a substitute. So 「代」, fee, generation, substitute." }
  ],
  "ようじ|用事": [
    { tag: "Real-life Japanese", explain: "「用事があるので、先に帰ります」. I have something to do, so I'll leave first. A polite excuse. Nobody asks what. And 「ちょっと用事が」, I've got a thing." },
    { tag: "Word family", explain: "「用|よう」, use, business. 「用意|ようい」, preparation. 「使用|しよう」, usage. 「〜用」, for use by. 「子供用」, for kids. And 「用」 alone, 「何の用？」, what do you want?" }
  ],
  "おてあらい|お手洗い": [
    { tag: "Real-life Japanese", explain: "「お手洗いはどこですか」. Where is the restroom? Polite and perfect. And 「お手洗いに行ってきます」. I'll go to the restroom. Excuse yourself politely." },
    { tag: "Culture corner", explain: "Japanese public restrooms are clean and free, often in stations and parks. And department stores have amazing ones. And many have both Western toilets and squat toilets, 「和式|わしき」." }
  ],
  "しあい|試合": [
    { tag: "Real-life Japanese", explain: "「試合に勝つ|しあいにかつ」, win a game. 「試合に負ける|まける」, lose. And 「試合を見に行く」, go watch a game. And 「練習試合」, a practice match." },
    { tag: "Word family", explain: "「試|し」, try, and 「合|あい」, match together. Trying against each other. And 「合」 in 「都合」, 「合う」, fit. And sumo bouts are 「取組|とりくみ」. Different word." }
  ],
  "せいじ|政治": [
    { tag: "Real-life Japanese", explain: "「政治に興味がありますか」. Are you interested in politics? Lesson twelve's 「興味がある」. And 「政治家」, politician. Many Japanese avoid political talk socially." },
    { tag: "Word family", explain: "「政」, government. 「政府|せいふ」, the government. 「行政|ぎょうせい」, administration. And 「治」, rule, govern, heal. 「治る|なおる」, recover." }
  ],
  "せいせき|成績": [
    { tag: "Real-life Japanese", explain: "「成績がいい」, good grades. 「成績が悪い」, bad grades. And 「成績表|せいせきひょう」, report card. Japanese students get them each term. And 「成績が上がった」, grades went up!" },
    { tag: "Word family", explain: "「成|せい」, accomplish, become, and 「績|せき」, achievement. 「成功|せいこう」, success. 「成人|せいじん」, adult, become person. 「完成|かんせい」, completion." }
  ],
  "かのじょ|彼女": [
    { tag: "Don't mix it up", explain: "「彼女」 means she and also girlfriend. Context! 「彼女は先生です」, she's a teacher. 「彼女がいます」, I have a girlfriend. And Japanese rarely uses she. Names are better." },
    { tag: "Word family", explain: "「彼|かの」, that, old word, and 「女|じょ」, woman. That woman. And 「元カノ|もとカノ」, ex-girlfriend. 「カノジョ」 in katakana, often for girlfriend." }
  ],
  "かれ|彼": [
    { tag: "Don't mix it up", explain: "「彼」 is he, and also boyfriend. 「彼は学生です」, he's a student. 「彼ができた」, I got a boyfriend. And 「彼氏|かれし」, boyfriend specifically, also in this lesson." },
    { tag: "Real-life Japanese", explain: "Japanese prefers names over he and she. Using 「彼」 too much sounds like a translated novel. And 「彼ら|かれら」, they, plural. And in songs, 「彼」 is romantic." }
  ],
  "かれし|彼氏": [
    { tag: "Real-life Japanese", explain: "「彼氏がいますか」. Do you have a boyfriend? Common question among friends. And 「元カレ|もとカレ」, ex-boyfriend. And 「彼氏募集中|かれしぼしゅうちゅう」, looking for a boyfriend." },
    { tag: "Word family", explain: "「氏|し」, a polite suffix for men, like Mr. 「田中氏」, Mr. Tanaka, in news. So 「彼氏」 is that gentleman. And in slang, 「カレシ」 in katakana." }
  ],
  "いみ|意味": [
    { tag: "Real-life Japanese", explain: "「これはどういう意味ですか」. What does this mean? A must-know phrase. And 「意味がわからない」, I don't understand the meaning. Slang, 「意味わかんない」, that makes no sense!" },
    { tag: "Word family", explain: "「意|い」, mind, intention, and 「味|み」, taste. The taste of the mind. Meaning. And 「味|あじ」, flavor. 「意見|いけん」, opinion. 「意外|いがい」, unexpected." }
  ],
  "せまい|狭い": [
    { tag: "Real-life Japanese", explain: "「部屋が狭い」, the room is small. And Japanese apartments are famously 「狭い」. And 「世界は狭い」, it's a small world. Same as English!" },
    { tag: "Don't mix it up", explain: "「狭い」, narrow, small space. 「小さい」, small size. A room is 「狭い」, not 「小さい」. A cup is 「小さい」. And the opposite, 「広い」, spacious." }
  ],
  "ひろい|広い": [
    { tag: "Real-life Japanese", explain: "「アメリカは広い」. America is big, spacious. Japanese people say it about the US. And 「心が広い|こころがひろい」, open-minded, wide heart. And 「顔が広い」, well connected." },
    { tag: "Word family", explain: "「広|こう」 in 「広告|こうこく」, advertisement, wide notice, lesson thirteen. 「広島|ひろしま」, Hiroshima, wide island. And 「広場|ひろば」, a plaza." }
  ],
  "わるい|悪い": [
    { tag: "Real-life Japanese", explain: "「悪いね」 means sorry, my bad. Casual apology. And 「気分が悪い」, feel sick. And 「頭が悪い」, dumb. And 「悪くない」, not bad." },
    { tag: "Word family", explain: "「悪|あく」 in 「最悪|さいあく」, the worst. 「悪人|あくにん」, a bad guy. And 「悪口|わるぐち」, badmouthing. 「悪口を言う」, to talk behind someone's back." }
  ],
  "いたい|痛い": [
    { tag: "Real-life Japanese", explain: "「いたい！」, ouch! And 「どこが痛いですか」. Where does it hurt? At the doctor. And slang, 「痛い人」, a cringey person, painful to watch." },
    { tag: "Word family", explain: "「痛|つう」, pain. 「頭痛|ずつう」, headache. 「腹痛|ふくつう」, stomachache. And kids say 「痛いの痛いの飛んでいけ」, pain, pain, fly away! Like kiss it better." }
  ],
  "あまい|甘い": [
    { tag: "Real-life Japanese", explain: "「甘い物が好き」, I like sweets. And 「甘い」 also means lenient. 「親が甘い」, the parents are soft. And 「考えが甘い」, naive thinking. Sweet but not realistic." },
    { tag: "Word family", explain: "「甘える|あまえる」, to act spoiled, depend on someone's kindness. A key Japanese idea, 「甘え」. And 「甘口|あまくち」, mild, for curry. 「辛口|からくち」, spicy." }
  ],
  "おおい|多い": [
    { tag: "Don't mix it up", explain: "「多い」 can't go directly before a noun! 「多い人」 is wrong. Say 「多くの人」, or 「人が多い」. Weird rule. And 「たくさんの人」 works too. Watch out." },
    { tag: "Real-life Japanese", explain: "「東京は人が多い」. Tokyo has lots of people. And 「宿題が多い」. Lots of homework. And 「多すぎる」, too many. And the opposite, 「少ない」." }
  ],
  "すてき|素敵": [
    { tag: "Real-life Japanese", explain: "「すてきですね」, how lovely. For clothes, places, people. 「すてきな人」, a wonderful person. It's elegant, a bit more than 「いい」. Often used by women, but anyone can." },
    { tag: "Word family", explain: "「すてき」 is a な adjective. 「すてきな家」. And similar words, 「おしゃれ」, stylish. 「きれい」, pretty. 「かっこいい」, cool. 「すてき」 is the classy version." }
  ],
  "あるく|歩く": [
    { tag: "Real-life Japanese", explain: "「駅まで歩く」, walk to the station. And 「歩いて十分」, ten minutes on foot. And 「歩きながら」, while walking. Eating while walking is considered a bit rude in Japan." },
    { tag: "Word family", explain: "「歩|ほ」 in 「散歩|さんぽ」, a stroll. 「歩道|ほどう」, sidewalk. 「一歩|いっぽ」, one step. And 「歩行者|ほこうしゃ」, pedestrian." }
  ],
  "ねつがある|熱がある": [
    { tag: "Real-life Japanese", explain: "「熱があるんです」. I have a fever, you see. Lesson twelve's 「んです」 explains. And calling in sick, 「熱があるので、今日は休みます」. I have a fever, so I'll take today off." },
    { tag: "Culture corner", explain: "Japanese people often take their temperature daily, especially since COVID. And schools may ask parents to record kids' temperature. 「平熱|へいねつ」 means your normal temperature." }
  ],
  "のどがかわく|喉が渇く": [
    { tag: "Real-life Japanese", explain: "「のどが渇いた」, I'm thirsty. Past tense for the state. And 「のどが渇いたら、水を飲んでください」. Lesson seventeen's 「たら」." },
    { tag: "Don't mix it up", explain: "Two 「かわく」. 「渇く」, thirsty, throat dry. 「乾く」, dry, like laundry. 「洗濯物が乾いた」. Laundry dried. Same sound, different kanji." }
  ],
  "はらう|払う": [
    { tag: "Real-life Japanese", explain: "「カードで払えますか」. Can I pay by card? And 「現金で払う」, pay in cash. And 「私が払います」, I'll pay. Or splitting, 「割り勘|わりかん」." },
    { tag: "Word family", explain: "「支払い|しはらい」, payment. 「前払い|まえばらい」, prepay. 「後払い|あとばらい」, pay later. And 「払う」 also means to brush off, sweep away dust." }
  ],
  "なくす|": [
    { tag: "Real-life Japanese", explain: "「財布をなくした」. I lost my wallet. And 「なくさないで」, don't lose it. And the noun, 「なくし物」, a lost item. Go to the 「交番」, police box." },
    { tag: "Don't mix it up", explain: "Kanji 「無くす」, lose a thing. And 「亡くす」, lose a person, they died. 「父を亡くした」. Sad but important. And 「なくなる」, to run out, disappear." }
  ],
  "きょうみがある|興味がある": [
    { tag: "Real-life Japanese", explain: "「日本の文化に興味があります」. I'm interested in Japanese culture. Note 「に」. And 「何に興味がありますか」. What are you interested in? And 「興味ない」, not interested." },
    { tag: "Word family", explain: "「興|きょう」, interest, excitement, and 「味|み」, taste. Tasting interest. And 「興奮|こうふん」, excitement. And 「趣味|しゅみ」, hobby, another taste word." }
  ],
  "せきがでる|せきが出る": [
    { tag: "Real-life Japanese", explain: "「せきが出るんです」. I've got a cough. At the doctor. And 「熱はないけど、せきが出る」. No fever, but I'm coughing. And 「せきが止まらない」, can't stop coughing." },
    { tag: "Word family", explain: "Symptoms with 「出る」, come out. 「せきが出る」, cough. 「熱が出る」, fever. 「鼻水が出る|はなみずがでる」, runny nose. 「涙が出る|なみだがでる」, tears. Things come out." }
  ],
  "わかれる|別れる": [
    { tag: "Real-life Japanese", explain: "「彼女と別れた」. I broke up with my girlfriend. 「と」 for with. And 「別れる」 also means to part ways. 「駅で別れた」, we said goodbye at the station." },
    { tag: "Word family", explain: "「別|べつ」, separate. 「別々|べつべつ」, separately. 「特別|とくべつ」, special. 「送別会|そうべつかい」, a farewell party. And 「別に」, not really, lesson seven." }
  ],
  "きんちょうする|緊張する": [
    { tag: "Real-life Japanese", explain: "「緊張しています」. I'm nervous. Before a test or speech. And 「緊張しないで」, don't be nervous. And trick, Japanese people write 「人」 on their palm three times and swallow it to calm nerves!" },
    { tag: "Word family", explain: "「緊|きん」, tight, and 「張|ちょう」, stretch. Stretched tight. Tense! And 「張る」, to stretch. 「がんばる」, do your best, sometimes written 「頑張る」." }
  ],
  "しんぱいする|心配する": [
    { tag: "Real-life Japanese", explain: "「心配しないでください」. Please don't worry. And 「ご心配をおかけしました」. Sorry to have worried you. A polite formal phrase. And 「心配性|しんぱいしょう」, a worrier." },
    { tag: "Word family", explain: "「心|しん」, heart, and 「配|ぱい」, distribute. Distributing your heart. And 「心|こころ」, heart. 「安心|あんしん」, relief. 「心臓|しんぞう」, the heart organ." }
  ],
  "おだいじに|お大事に": [
    { tag: "Real-life Japanese", explain: "「お大事に」, take care, get well soon. Said to sick people, and by doctors and pharmacists as you leave. And 「お大事にしてください」, more polite." },
    { tag: "Word family", explain: "「大事|だいじ」, important, precious. So, treat yourself as precious. And 「大事な人」, someone important. And 「大事にする」, take good care of." }
  ],
  "げんきがない|元気がない": [
    { tag: "Real-life Japanese", explain: "「元気がないね。どうしたの？」. You don't look well. What's up? Caring friends say this. And 「元気出して|げんきだして」, cheer up!" },
    { tag: "Word family", explain: "「元気」, energy. 「元気がある」, energetic. 「元気がない」, low energy, down. And 「お元気で」, take care, said when parting for a long time." }
  ],
  "できるだけ|": [
    { tag: "Real-life Japanese", explain: "「できるだけ早く来てください」. Please come as soon as possible. And 「できるだけ日本語で話します」. I'll speak Japanese as much as possible. A good study goal." },
    { tag: "Word family", explain: "「できる」, can, plus 「だけ」, only, as much as. As much as you can. And 「できるだけ」 is softer than 「必ず|かならず」, definitely." }
  ],
  "たぶん|多分": [
    { tag: "Real-life Japanese", explain: "「たぶん雨が降るでしょう」. It'll probably rain. And 「たぶん」 pairs with 「でしょう」 or 「と思う」. And alone, 「たぶん」, maybe, probably." },
    { tag: "Don't mix it up", explain: "Certainty scale. 「きっと」, surely. 「たぶん」, probably. 「もしかしたら」, maybe, possibly. And 「絶対|ぜったい」, absolutely. Choose your confidence level." }
  ],
  "もうすぐ|": [
    { tag: "Real-life Japanese", explain: "「もうすぐ夏休みです」. Summer break is coming soon! And 「もうすぐ着きます」, I'll arrive soon. And 「もうすぐ」 for a few days or minutes." },
    { tag: "Word family", explain: "「もう」, already, plus 「すぐ」, soon. Already soon! And 「もう少し」, a bit more. 「もう一度」, once more. 「もう」 is a busy little word." }
  ],
  "はじめて|初めて": [
    { tag: "Real-life Japanese", explain: "「初めて日本に来ました」. This is my first time in Japan. And 「はじめまして」, nice to meet you, the first time. Same root!" },
    { tag: "Word family", explain: "「初|しょ」 in 「最初|さいしょ」, the first. 「初心者|しょしんしゃ」, a beginner. And 「初|はつ」 in 「初詣|はつもうで」, first shrine visit. 「初雪|はつゆき」, first snow." }
  ],
  "にさんにち|二三日": [
    { tag: "Real-life Japanese", explain: "「二三日休んだほうがいいですよ」. You should rest for two or three days. Doctor's advice, lesson twelve. And 「二三日」, a couple of days, vague." },
    { tag: "Word family", explain: "Japanese combines numbers for a rough amount. 「二三日」, two or three days. 「四五人|しごにん」, four or five people. 「一二週間」, a week or two. Vague and natural." }
  ],
  "それに|": [
    { tag: "Real-life Japanese", explain: "「このアパートは安い。それに、駅に近い」. This apartment is cheap. Besides, it's close to the station. Adding reasons. And 「それに」, on top of that." },
    { tag: "Don't mix it up", explain: "「それに」, besides, adds a similar point. 「でも」, but, contrasts. 「それから」, and then, time order. And 「それで」, so. Pick the right connector." }
  ],
  "おなじ|同じ": [
    { tag: "Don't mix it up", explain: "「同じ」 doesn't take 「な」 before nouns! 「同じ本」, the same book. Not 「同じな本」. A weird exception. And 「同じだ」 at the end is fine." },
    { tag: "Word family", explain: "「同|どう」, same. 「同時|どうじ」, simultaneous. 「同級生|どうきゅうせい」, classmate. 「同僚|どうりょう」, coworker. And 「同じクラス」, the same class." }
  ]
});
/* Lesson 13 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "おとな|大人": [
    { tag: "Culture corner", explain: "In Japan, you become an adult at eighteen now, but drinking and smoking still wait until twenty. And 「成人式|せいじんしき」, the coming of age ceremony, has young women in colorful kimono every January." },
    { tag: "Word family", explain: "「大人」 is a special reading. Big person, adult. And 「大人っぽい」, mature looking. 「大人げない」, childish, for an adult. And tickets, 「大人一枚、子供一枚」. One adult, one child." }
  ],
  "べんごし|弁護士": [
    { tag: "Real-life Japanese", explain: "Lesson thirteen's potential form. 「弁護士になれるかな」. I wonder if I can become a lawyer. And Japanese TV dramas about lawyers are popular, like 「リーガルハイ」." },
    { tag: "Culture corner", explain: "Japanese lawyers wear a gold badge with a sunflower and scales. The sunflower means justice and freedom. And the bar exam pass rate used to be just a few percent." }
  ],
  "わたくし|私": [
    { tag: "Real-life Japanese", explain: "「わたくし」 is the formal I, for job interviews, speeches, and business. 「わたくし、田中と申します」. And it's also humble. And shop staff on announcements use it." },
    { tag: "Don't mix it up", explain: "Same kanji as 「わたし」, 「私」. Just more formal reading. And 「私」 also means private, as in 「私立|しりつ」, a private school. And 「私鉄|してつ」, private railway." }
  ],
  "カレー|": [
    { tag: "Culture corner", explain: "Japanese curry came from India via the British Navy. Japan's navy still eats curry every Friday! And Japanese curry is thick, sweet, and comes in blocks, 「カレールー」. Spice levels, 「甘口」, 「中辛」, 「辛口」." },
    { tag: "Real-life Japanese", explain: "「カレーライス」, curry rice, a national comfort food. And 「カレーパン」, curry bread. And 「カレーうどん」. And kids love it. 「今日はカレーだ！」 Curry tonight! Yay!" }
  ],
  "こうちゃ|紅茶": [
    { tag: "Memory hook", explain: "「紅|こう」, crimson red, and 「茶|ちゃ」, tea. Red tea! English calls it black tea, Japanese calls it red, for the color of the brewed liquid. And green tea is just 「お茶」." },
    { tag: "Real-life Japanese", explain: "「紅茶とコーヒー、どちらがいいですか」. Tea or coffee? And 「ミルクティー」, milk tea. And Japan's famous bottled 「午後の紅茶|ごごのこうちゃ」, Afternoon Tea, in every vending machine." }
  ],
  "きもの|着物": [
    { tag: "Culture corner", explain: "Kimono are worn for special events now, like weddings, coming-of-age, and New Year. Putting one on is complex, called 「着付け|きつけ」, often done by professionals. And 「浴衣|ゆかた」 is the casual summer version." },
    { tag: "Word family", explain: "「着|き」, wear, and 「物|もの」, thing. Wearing thing. Originally, 「着物」 meant any clothing. And 「着る|きる」, to wear. 「着替える|きがえる」, change clothes." }
  ],
  "セーター|": [
    { tag: "Real-life Japanese", explain: "「セーターを着る」, put on a sweater. And lesson thirteen's verb, 「セーターを編む|あむ」, knit a sweater. A classic Japanese romance trope, knitting a sweater for a boyfriend." },
    { tag: "Sound it out", explain: "Sweater becomes 「セーター」. Notice no w. Japanese drops the sw cluster to 「セ」. And the long mark for ea. And 「トレーナー」, sweatshirt, lesson two. Different!" }
  ],
  "がっき|楽器": [
    { tag: "Real-life Japanese", explain: "「何か楽器ができますか」. Can you play any instruments? Lesson thirteen potential. And 「楽器を弾く」, play an instrument. Japan has big instrument makers, Yamaha and Roland." },
    { tag: "Word family", explain: "「楽|がく」, music, and 「器|き」, tool. Music tool. 「音楽|おんがく」, music. 「食器|しょっき」, dishes, eating tools. 「器用|きよう」, handy, skilled with tools." }
  ],
  "からて|空手": [
    { tag: "Memory hook", explain: "「空|から」, empty, and 「手|て」, hand. Empty hand. Fighting without weapons! And 「空|から」 also in 「カラオケ」, empty orchestra. Empty hands, empty orchestra." },
    { tag: "Culture corner", explain: "Karate came from Okinawa, mixing local fighting arts with Chinese influence. It became an Olympic sport at Tokyo 2020. And the uniform is 「道着|どうぎ」, and belts show rank." }
  ],
  "ゴルフ|": [
    { tag: "Culture corner", explain: "Golf is a big business tool in Japan. Executives play together to build relationships. And Japan has multi-level driving ranges in cities, big green nets on rooftops. Space is tight." },
    { tag: "Real-life Japanese", explain: "「ゴルフをする」, play golf. And honorific, 「ゴルフをなさいますか」, do you play golf? Lesson nineteen. Very common question to a boss." }
  ],
  "バイク|": [
    { tag: "Don't mix it up", explain: "In Japanese, 「バイク」 means motorcycle, not bicycle! A bicycle is 「自転車|じてんしゃ」. So 「バイクに乗る」 means ride a motorbike. Easy mistake for English speakers." },
    { tag: "Culture corner", explain: "Japan is home to Honda, Yamaha, Suzuki, and Kawasaki, the big four motorcycle makers. And small scooters, 「原付|げんつき」, are popular with students and delivery workers." }
  ],
  "ぞう|象": [
    { tag: "Real-life Japanese", explain: "「象は鼻が長い」. Elephants have long noses. The most famous Japanese grammar example sentence ever! It shows the 「は」 and 「が」 pattern. You'll see it in linguistics books." },
    { tag: "Word family", explain: "「象|しょう」 means image, shape. 「印象|いんしょう」, impression. 「対象|たいしょう」, target. 「現象|げんしょう」, phenomenon. The elephant kanji became shape, because elephants were imagined, not seen." }
  ],
  "からだ|体": [
    { tag: "Real-life Japanese", explain: "「体に気をつけてください」. Take care of your health. A warm goodbye in letters. And 「体にいい」, good for your body. 「体に悪い」, bad for you. And 「体が弱い」, sickly." },
    { tag: "Word family", explain: "「体|たい」 in 「体育|たいいく」, PE class. 「体重|たいじゅう」, body weight. 「体温|たいおん」, body temperature. 「体験|たいけん」, a hands-on experience." }
  ],
  "がいこくご|外国語": [
    { tag: "Real-life Japanese", explain: "「外国語が話せますか」. Can you speak a foreign language? Lesson thirteen potential. And 「外国語を勉強するのは楽しい」. Studying foreign languages is fun." },
    { tag: "Word family", explain: "「外国」, foreign country, plus 「語」, language. And 「外来語|がいらいご」, loanwords, words that came from outside. All that katakana is 「外来語」." }
  ],
  "ことば|言葉": [
    { tag: "Memory hook", explain: "「言|こと」, speech, and 「葉|ば」, leaves. Speech leaves! Words are the leaves of speech. Poetic. The famous old poetry collection describes poems as leaves grown from the heart." },
    { tag: "Real-life Japanese", explain: "「この言葉の意味は何ですか」. What does this word mean? And 「言葉が通じない」, can't communicate. And 「言葉遣い|ことばづかい」, language use, manners of speaking." }
  ],
  "ぶんぽう|文法": [
    { tag: "Real-life Japanese", explain: "「日本語の文法はむずかしい」. Japanese grammar is difficult. And 「文法の間違い」, grammar mistake. And good news, Japanese grammar is very regular once you get it." },
    { tag: "Word family", explain: "「文|ぶん」, sentence, and 「法|ぽう」, law. Sentence laws. 「法律|ほうりつ」, law. 「方法|ほうほう」, method. And 「文」 in 「文化」, culture, 「作文」, essay." }
  ],
  "アプリ|": [
    { tag: "Real-life Japanese", explain: "「アプリをダウンロードする」, download an app. And 「便利なアプリ」, a handy app. And LINE is the main messaging app in Japan. Your vocab-flip could be one!" },
    { tag: "Sound it out", explain: "Application shortened to 「アプリ」. Japan clips! 「アプリケーション」 becomes 「アプリ」. And 「スマホ」, smartphone. 「パソコン」. Clip, clip, clip." }
  ],
  "アパート|": [
    { tag: "Don't mix it up", explain: "「アパート」 is a small, cheaper apartment building, often two stories, wood. 「マンション」 is a bigger concrete building, nicer. Not a mansion! A Japanese word with a surprising meaning." },
    { tag: "Real-life Japanese", explain: "「アパートに住んでいます」. I live in an apartment. And 「アパートを探す」, look for an apartment. And real estate agents are 「不動産屋|ふどうさんや」." }
  ],
  "マンション|": [
    { tag: "Don't mix it up", explain: "Big surprise. 「マンション」 is a condo or nice apartment building, not a mansion! An actual mansion is 「豪邸|ごうてい」. So 「マンションに住んでいる」 isn't bragging." },
    { tag: "Culture corner", explain: "Tokyo 「マンション」 often have auto-lock entries, delivery boxes, and tiny balconies for laundry. And tower condos, 「タワマン」, are status symbols." }
  ],
  "くうこう|空港": [
    { tag: "Word family", explain: "「空|くう」, sky, and 「港|こう」, port. Sky port! And 「港|みなと」, harbor. 「空|そら」, sky. And 「成田空港|なりたくうこう」 and 「羽田空港|はねだくうこう」, Tokyo's two airports." },
    { tag: "Real-life Japanese", explain: "「空港まで迎えに行きます」. I'll pick you up at the airport. Lesson sixteen. And 「空港バス」, airport limousine bus. Very convenient." }
  ],
  "みせ|店": [
    { tag: "Real-life Japanese", explain: "「この店はおいしい」. This place is tasty. 「店」 means restaurants too. And 「お店|おみせ」, polite. And 「店員|てんいん」, clerk. 「店長|てんちょう」, store manager." },
    { tag: "Word family", explain: "「店|てん」 in 「喫茶店」, café. 「書店|しょてん」, bookstore. 「売店|ばいてん」, kiosk. And 「〜店」 for branches, 「新宿店」, the Shinjuku branch." }
  ],
  "ぶっか|物価": [
    { tag: "Real-life Japanese", explain: "「東京は物価が高い」. Prices are high in Tokyo. And 「物価が上がった」, prices went up. A common worry. And Japan had low inflation for decades, then prices rose recently." },
    { tag: "Word family", explain: "「物|ぶっ」, things, and 「価|か」, value, price. Price of things. 「価格|かかく」, price. 「定価|ていか」, list price. Notice 「ぶつ」 becomes 「ぶっ」." }
  ],
  "こうこく|広告": [
    { tag: "Real-life Japanese", explain: "「広告を見て、応募しました|おうぼしました」. I saw the ad and applied. And train cars are full of 「広告」, hanging ads. And 「CM」, a TV commercial, from commercial message." },
    { tag: "Word family", explain: "「広|こう」, wide, and 「告|こく」, announce. Wide announcement. 「報告|ほうこく」, a report. 「告白|こくはく」, confession of love. Announce your feelings!" }
  ],
  "ぼしゅう|募集": [
    { tag: "Real-life Japanese", explain: "Signs in shop windows, 「アルバイト募集」, part-timers wanted. And 「募集中」, now recruiting. And 「メンバー募集」, members wanted, for clubs and bands." },
    { tag: "Word family", explain: "「募|ぼ」, recruit, and 「集|しゅう」, gather. Gather by recruiting. 「集める」, collect. 「応募|おうぼ」, apply. And 「彼女募集中」, looking for a girlfriend." }
  ],
  "やくそく|約束": [
    { tag: "Real-life Japanese", explain: "「約束する」, promise. 「約束だよ」, it's a promise! And 「約束がある」, I have plans, an appointment. And kids pinky swear, 「指切りげんまん|ゆびきりげんまん」." },
    { tag: "Culture corner", explain: "The pinky promise song is scary! 「ゆびきりげんまん、うそついたら針千本のーます」. If you lie, you'll swallow a thousand needles. Kids sing it cheerfully." }
  ],
  "うれしい|": [
    { tag: "Real-life Japanese", explain: "「うれしい！」, I'm so happy! When something good happens. And 「来てくれてうれしい」. I'm glad you came. And it describes your own feelings, not others." },
    { tag: "Don't mix it up", explain: "「うれしい」, glad, happy right now. 「楽しい|たのしい」, fun, enjoyable. 「幸せ|しあわせ」, deep, lasting happiness. A gift makes you 「うれしい」. A party is 「楽しい」. Life is 「幸せ」." }
  ],
  "かなしい|悲しい": [
    { tag: "Real-life Japanese", explain: "「悲しい映画」, a sad movie. And 「悲しいです」, I'm sad. And Japanese movies love sad endings. 「泣ける映画」, movies that make you cry, is a whole genre." },
    { tag: "Memory hook", explain: "The kanji 「悲」 has 「非」, wrong, not, on top of 「心」, heart. A heart that's not right. Sad. And 「寂しい|さびしい」, lonely, is a different feeling." }
  ],
  "きびしい|厳しい": [
    { tag: "Real-life Japanese", explain: "「先生は厳しい」. The teacher is strict. And 「厳しい練習」, tough practice. And 「状況が厳しい」, the situation is tough. And 「厳しい寒さ」, severe cold." },
    { tag: "Culture corner", explain: "Japanese sports clubs are known for 「厳しい」 training. Seniors, 「先輩」, can be strict with juniors. And strict parents are 「教育ママ|きょういくママ」, education moms." }
  ],
  "きぶんがわるい|気分が悪い": [
    { tag: "Real-life Japanese", explain: "「気分が悪いんです」. I feel sick. And 「気分」 also means mood. 「気分がいい」, I'm in a good mood. And 「気分転換|きぶんてんかん」, a change of pace." },
    { tag: "Don't mix it up", explain: "「気分が悪い」, feel sick, nauseous. 「具合が悪い|ぐあいがわるい」, unwell, sick. 「体調が悪い|たいちょうがわるい」, in poor health. All for feeling sick." }
  ],
  "からい|辛い": [
    { tag: "Don't mix it up", explain: "「辛い」 has two readings! 「からい」, spicy. 「つらい」, painful, hard. Same kanji. 「辛いカレー」, spicy curry. 「辛い仕事」, tough job. Context." },
    { tag: "Word family", explain: "「辛口|からくち」, spicy, or dry for sake, or harsh for criticism. 「辛口のコメント」, a harsh comment. And 「からい」 also means salty in some regions. Taste words." }
  ],
  "すごい|": [
    { tag: "Real-life Japanese", explain: "「すごい！」, amazing! Wow! The all-purpose reaction. And 「すごいね」, that's impressive. And slang, 「すげー」. And 「すごく」, very, extremely." },
    { tag: "Word family", explain: "「すごい」 originally meant frightening, terrible. Now amazing. Like English awesome, from awe, fear. And the kanji 「凄い」, rarely used. Kana is standard." }
  ],
  "ちかい|近い": [
    { tag: "Real-life Japanese", explain: "「駅から近い」, close to the station. 「から」 with 「近い」. And 「近くのコンビニ」, a nearby convenience store. 「近く」, nearby. And 「近いうちに」, sometime soon." },
    { tag: "Word family", explain: "「近|きん」 in 「近所|きんじょ」, neighborhood. 「最近|さいきん」, recently. 「近代|きんだい」, modern. And the opposite, 「遠い|とおい」, far." }
  ],
  "いろいろ|": [
    { tag: "Real-life Japanese", explain: "「いろいろありがとう」. Thanks for everything. A warm, all-covering thank you. And 「いろいろな国」, various countries. And 「いろいろあって」, a lot happened." },
    { tag: "Memory hook", explain: "「色|いろ」, color, doubled. 「色々」. Many colors, so many kinds. Various! And the repeat mark, 「々」. Colorful variety." }
  ],
  "しあわせ|幸せ": [
    { tag: "Real-life Japanese", explain: "「幸せになってね」. Be happy. Said at weddings. And 「幸せです」, I'm happy, content. And 「お幸せに|おしあわせに」, may you be happy, to a newly married couple." },
    { tag: "Word family", explain: "「幸|こう」 in 「幸福|こうふく」, happiness, formal. 「不幸|ふこう」, misfortune. And the kanji 「幸」 and 「辛|つらい」, painful, differ by one line. Happiness and pain, one line apart." }
  ],
  "だめ|": [
    { tag: "Real-life Japanese", explain: "「だめ！」, no! don't! And 「だめです」, not allowed. And 「〜てはだめ」, you must not. And 「だめだ」, it's hopeless. And 「だめ人間」, a hopeless person." },
    { tag: "Word family", explain: "「だめ」 comes from the board game go, 「駄目」, a useless point. A move that does nothing. So no good! And 「むだ」, waste, from the same idea." }
  ],
  "あむ|編む": [
    { tag: "Real-life Japanese", explain: "「セーターを編む」, knit a sweater. And 「手編み|てあみ」, hand-knitted. 「手編みのマフラー」, a hand-knit scarf, a classic romantic gift in Japanese stories." },
    { tag: "Word family", explain: "「編|へん」 also means to edit. 「編集|へんしゅう」, editing. 「編集者|へんしゅうしゃ」, an editor. Knitting and editing, weaving pieces together." }
  ],
  "がんばる|頑張る": [
    { tag: "Real-life Japanese", explain: "「がんばって！」, good luck, do your best! Before exams, games, anything. And 「がんばります」, I'll do my best. And 「がんばったね」, you worked hard, well done." },
    { tag: "Culture corner", explain: "「がんばる」 is a core Japanese value, persevering, never giving up. But some say it's too much pressure. So now people also say 「無理しないで」, don't push too hard. Balance." }
  ],
  "なく|泣く": [
    { tag: "Don't mix it up", explain: "Two 「なく」. 「泣く」, cry, people. 「鳴く」, make a sound, animals. 「犬が鳴く」, a dog barks. 「赤ちゃんが泣く」, a baby cries. Different kanji." },
    { tag: "Real-life Japanese", explain: "「泣かないで」, don't cry. And 「泣き虫|なきむし」, crybaby. And 「泣ける」, a movie that makes you cry. 「この映画、泣けるよ」." }
  ],
  "みがく|磨く": [
    { tag: "Real-life Japanese", explain: "「歯をみがく」, brush your teeth. And 「くつをみがく」, polish shoes. And 「腕を磨く|うでをみがく」, polish your skills. Practice makes perfect." },
    { tag: "Word family", explain: "「磨|ま」 has 「石」, stone, at the bottom. Polishing with stones. And 「歯磨き|はみがき」, toothpaste or brushing. 「歯磨き粉|はみがきこ」, toothpaste." }
  ],
  "やくそくをまもる|約束を守る": [
    { tag: "Real-life Japanese", explain: "「約束を守る人」, a person who keeps promises. A big compliment. And 「約束を破る|やぶる」, break a promise. And 「時間を守る」, be on time." },
    { tag: "Word family", explain: "「守る|まもる」, protect, keep. 「お守り|おまもり」, a good luck charm from a shrine. 「留守|るす」, away from home. And 「守」 has the roof radical, protecting under a roof." }
  ],
  "かんどうする|感動する": [
    { tag: "Real-life Japanese", explain: "「感動しました」. I was moved. After a great movie or performance. And 「感動的|かんどうてき」, moving, touching. And Japanese TV loves 「感動」 stories." },
    { tag: "Word family", explain: "「感|かん」, feeling, and 「動|どう」, move. Your feelings move. 「感じる|かんじる」, feel. 「感謝|かんしゃ」, gratitude. 「感想|かんそう」, impressions." }
  ],
  "〜かい|〜回": [
    { tag: "Real-life Japanese", explain: "「一日に三回」, three times a day. Medicine instructions. And 「何回」, how many times. And 「もう一回」, one more time! Kids at play." },
    { tag: "Word family", explain: "「回」 means turn, round. 「回る|まわる」, to turn. 「今回|こんかい」, this time. 「次回|じかい」, next time. And the kanji is a box in a box, going round." }
  ],
  "〜キロ|": [
    { tag: "Real-life Japanese", explain: "「キロ」 means kilometers or kilograms. Context! 「十キロ走った」, ran ten kilometers. 「三キロやせた」, lost three kilos. Japan uses metric." },
    { tag: "Word family", explain: "Metric words. 「キロ」, kilo. 「メートル」, meter. 「センチ」, centimeter. 「グラム」, gram. 「リットル」, liter. And 「キロカロリー」, kilocalorie." }
  ],
  "ぜんぶ|全部": [
    { tag: "Real-life Japanese", explain: "「全部食べた」, I ate it all. And 「全部でいくらですか」. How much for everything? Super useful at shops. And 「全部」 alone, everything." },
    { tag: "Word family", explain: "「全|ぜん」, all, whole. 「全員|ぜんいん」, all members. 「全国|ぜんこく」, nationwide. 「安全|あんぜん」, safety. And 「部|ぶ」, part. All parts, everything." }
  ],
  "〜ともうします|〜と申します": [
    { tag: "Real-life Japanese", explain: "「田中と申します」. My name is Tanaka. Humble self-introduction. For business and formal settings. And casually, 「田中です」. And on the phone, 「〜と申しますが」." },
    { tag: "Word family", explain: "「申す|もうす」 is the humble form of 「言う」, to say. 「申し訳ありません」, I'm very sorry. 「申し込む|もうしこむ」, apply. And 「もしもし」 comes from it!" }
  ],
  "とくに|特に": [
    { tag: "Real-life Japanese", explain: "「日本の食べ物が好きです。特にラーメン」. I like Japanese food. Especially ramen. And 「特にない」, nothing in particular. A common answer." },
    { tag: "Word family", explain: "「特|とく」, special. 「特別|とくべつ」, special. 「特急|とっきゅう」, limited express. 「特徴|とくちょう」, characteristic. And 「得意|とくい」, good at, a different 「とく」." }
  ],
  "いちにち|一日": [
    { tag: "Don't mix it up", explain: "「一日|いちにち」, one day, duration. 「一日|ついたち」, the first of the month! Same kanji. So 「四月一日」 is 「しがつついたち」. And 「一日中|いちにちじゅう」, all day long." },
    { tag: "Real-life Japanese", explain: "「一日に三回」, three times a day. And 「いい一日を」, have a nice day. And 「一日中寝ていた」, I slept all day." }
  ],
  "ふつか|二日": [
    { tag: "Memory hook", explain: "「ふつか」 uses the old Japanese two, 「ふた」. Like 「二つ|ふたつ」. And 「二日酔い|ふつかよい」, hangover! Drunk for two days. You'll never forget it now." },
    { tag: "Real-life Japanese", explain: "「二日間|ふつかかん」, two days long. And 「五月二日」, May second. And 「二日」 for dates and durations. Both read 「ふつか」." }
  ],
  "みっか|三日": [
    { tag: "Culture corner", explain: "A Japanese saying, 「三日坊主|みっかぼうず」, a three-day monk. Someone who quits after three days. Like New Year's resolutions. Don't be a 「三日坊主」 with Japanese!" },
    { tag: "Real-life Japanese", explain: "「三日」, the third, or three days. 「三月三日|さんがつみっか」, March third, Girls' Day, 「ひな祭り|ひなまつり」, when families display dolls." }
  ],
  "よっか|四日": [
    { tag: "Don't mix it up", explain: "「四日|よっか」, the fourth. And 「八日|ようか」, the eighth. They sound similar! 「よっか」 has a small 「っ」, 「ようか」 has a long 「よう」. Listen carefully for dates." },
    { tag: "Real-life Japanese", explain: "「七月四日」, July fourth, Independence Day. 「しちがつよっか」. And four is avoided as unlucky, but 「よっか」 is fine for dates." }
  ],
  "いつか|五日": [
    { tag: "Don't mix it up", explain: "「五日|いつか」, the fifth. And 「いつか」, someday! Same sound. 「いつか日本に行きたい」, someday I want to go to Japan. Context tells you." },
    { tag: "Culture corner", explain: "「五月五日|ごがついつか」, May fifth, Children's Day. Families fly carp streamers, 「こいのぼり」. The last day of Golden Week, Japan's big spring holiday." }
  ],
  "むいか|六日": [
    { tag: "Memory hook", explain: "「むいか」 uses the old six, 「む」, like 「六つ|むっつ」. And it sounds like movie car. A movie about a car, on the sixth. Silly, but it helps." },
    { tag: "Real-life Japanese", explain: "「六日間|むいかかん」, six days. And 「六月六日」, June sixth. Practice the date counters, they're irregular. A Japanese calendar is great practice." }
  ],
  "なのか|七日": [
    { tag: "Culture corner", explain: "「七月七日|しちがつなのか」, July seventh, is 「七夕|たなばた」, the Star Festival. People write wishes on colorful paper strips and hang them on bamboo. Two star lovers meet once a year." },
    { tag: "Memory hook", explain: "「なのか」, from 「なな」, seven. And it sounds like nano car. A tiny car on the seventh. And 「なのか」 is also a grammar phrase, is it? Fun overlap." }
  ],
  "ようか|八日": [
    { tag: "Don't mix it up", explain: "「八日|ようか」, the eighth, and 「四日|よっか」, the fourth. Watch out! And 「ようか」 also sounds like 「〜ようか」, shall we? 「行こうか」 isn't the same, but close." },
    { tag: "Real-life Japanese", explain: "「八日間|ようかかん」, eight days. And 「八」 is lucky in Japan, because the shape 「八」 widens at the bottom, like growing prosperity. 「末広がり|すえひろがり」." }
  ],
  "ここのか|九日": [
    { tag: "Memory hook", explain: "「ここのか」, from 「ここのつ」, nine. And it sounds like coconut car. A coconut on the ninth. And nine, 「く」, sounds like suffering, 「苦」, so it's sometimes avoided." },
    { tag: "Real-life Japanese", explain: "「九月九日|くがつここのか」, the Chrysanthemum Festival, an old holiday. And practice, 「ここのか」, four beats. Easy to mix up with 「ここ」, here." }
  ],
  "とおか|十日": [
    { tag: "Real-life Japanese", explain: "「十日|とおか」, the tenth, or ten days. And then from 「十一日」, it's regular, 「じゅういちにち」. Except 「十四日|じゅうよっか」, 「二十日|はつか」, and 「二十四日」." },
    { tag: "Word family", explain: "The special dates. 「一日|ついたち」 through 「十日|とおか」, plus 「十四日」, 「二十日|はつか」, and 「二十四日」. Everything else is regular. Ten special words to memorize." }
  ]
});
/* Lesson 14 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "おくさん|奥さん": [
    { tag: "Real-life Japanese", explain: "「奥さんはお元気ですか」. How is your wife? A polite question to a colleague. And your own wife is 「妻|つま」 or 「家内|かない」. Never 「奥さん」 for yourself." },
    { tag: "Culture corner", explain: "Shopkeepers call middle-aged women customers 「奥さん」, like ma'am, whether married or not. 「奥さん、安いよ！」 Hey ma'am, it's cheap! A traditional market phrase." }
  ],
  "ごしゅじん|ご主人": [
    { tag: "Don't mix it up", explain: "Husband ladder. 「ご主人」, someone else's husband, polite. 「夫|おっと」, my husband, neutral. 「主人|しゅじん」, my husband, traditional. And 「旦那|だんな」, casual. Many prefer 「夫」 now, because 「主人」 means master." },
    { tag: "Word family", explain: "「主|しゅ」, master, main. 「主人公|しゅじんこう」, the main character of a story. 「主婦」, housewife. 「主語|しゅご」, subject in grammar. And 「ご主人様」, master, in maid cafés!" }
  ],
  "パートナー|": [
    { tag: "Real-life Japanese", explain: "「パートナー」 is a neutral word for spouse or partner, any gender. More people use it now to avoid old-fashioned words like 「主人」. And business partner, 「ビジネスパートナー」." },
    { tag: "Culture corner", explain: "Some Japanese cities now issue 「パートナーシップ証明書|しょうめいしょ」, partnership certificates, recognizing same-sex couples, though Japan hasn't legalized same-sex marriage nationally." }
  ],
  "おじさん|": [
    { tag: "Don't mix it up", explain: "Short vowel! 「おじさん」, uncle or middle-aged man. 「おじいさん」, grandfather or old man, long vowel. And kids call any middle-aged man 「おじさん」. Which can sting a bit." },
    { tag: "Culture corner", explain: "「おじさん」 has a whole culture. 「おやじギャグ」, dad jokes, are 「おじさん」 humor. And 「おじさん構文|こうぶん」, a meme about middle-aged men's emoji-heavy texts." }
  ],
  "おばさん|": [
    { tag: "Don't mix it up", explain: "Short vowel! 「おばさん」, aunt or middle-aged woman. 「おばあさん」, grandmother, long vowel. Don't call a young woman 「おばさん」! Use 「お姉さん」 to be safe." },
    { tag: "Culture corner", explain: "Osaka 「おばちゃん」 are famous, loud, friendly, wearing leopard print, and carrying candy, 「あめちゃん」, to hand out to strangers. A beloved stereotype." }
  ],
  "りょうしん|両親": [
    { tag: "Real-life Japanese", explain: "「両親は東京に住んでいます」. My parents live in Tokyo. And someone else's parents, 「ご両親|ごりょうしん」. 「ご両親はお元気ですか」. Are your parents well?" },
    { tag: "Word family", explain: "「両|りょう」, both. 「両手|りょうて」, both hands. 「両方|りょうほう」, both sides. And 「両替|りょうがえ」, currency exchange. And 「親」, parent. Both parents." }
  ],
  "おおやさん|大家さん": [
    { tag: "Real-life Japanese", explain: "「大家さんにお土産をあげました」. I gave the landlord a souvenir. Lesson fourteen giving. And good relations with your 「大家さん」 matter in Japan." },
    { tag: "Don't mix it up", explain: "「大家|おおや」, landlord. And 「大家|たいか」, an authority, a master in a field! Same kanji, different reading. And 「家賃」, rent, lesson eighteen." }
  ],
  "みなさん|皆さん": [
    { tag: "Real-life Japanese", explain: "「皆さん、こんにちは」. Hello, everyone. Teachers start class this way. And 「皆さん、お元気ですか」. And casual, 「みんな」. And very polite, 「皆様|みなさま」, on announcements." },
    { tag: "Word family", explain: "「皆|みな」, all. 「皆さん」, 「皆様」, 「みんな」. And 「皆|かい」, in 「皆勤|かいきん」, perfect attendance. Japanese schools give awards for it." }
  ],
  "チョコレート|": [
    { tag: "Culture corner", explain: "On Valentine's Day in Japan, women give chocolate to men. 「本命チョコ|ほんめいチョコ」, for someone special. 「義理チョコ|ぎりチョコ」, obligation chocolate for coworkers. And 「友チョコ」, for friends." },
    { tag: "Real-life Japanese", explain: "People shorten it to 「チョコ」. 「チョコ食べる？」. And Japan has amazing chocolate shops. Department stores hold huge chocolate fairs in February." }
  ],
  "みかん|": [
    { tag: "Culture corner", explain: "Winter in Japan means 「こたつでみかん」, eating mandarins under a heated table. A classic cozy image. And eat too many and your skin turns a bit orange! True." },
    { tag: "Real-life Japanese", explain: "「みかんを一つください」. And 「みかん箱|みかんばこ」, a cardboard mandarin box, a classic moving box. And Ehime prefecture is famous for 「みかん」, even mandarin juice from the tap." }
  ],
  "シャツ|": [
    { tag: "Real-life Japanese", explain: "「シャツを着る」, put on a shirt. Upper body, 「着る」. And 「Tシャツ」, T-shirt. 「ワイシャツ」, dress shirt, from white shirt. A Japanese-English mashup." },
    { tag: "Sound it out", explain: "Shirt becomes 「シャツ」. The r disappears, and the final t becomes 「ツ」. And 「ワイシャツ」 comes from white shirt, with white shrinking to 「ワイ」." }
  ],
  "ネクタイ|": [
    { tag: "Real-life Japanese", explain: "「ネクタイをする」, wear a tie, small accessory. Or 「締める|しめる」, tighten. And Father's Day gift classic, a 「ネクタイ」. And 「ノーネクタイ」, Cool Biz summer, no ties." },
    { tag: "Culture corner", explain: "Japan's 「クールビズ」, Cool Biz campaign, lets office workers skip ties and jackets in summer to save on AC. It started in 2005 and changed office fashion." }
  ],
  "マフラー|": [
    { tag: "Don't mix it up", explain: "「マフラー」 in Japanese is a winter scarf. In English, muffler is a car part! And a thin fashion scarf is 「スカーフ」. So a knit scarf is 「マフラー」." },
    { tag: "Real-life Japanese", explain: "「マフラーをする」, wear a scarf. And 「手編みのマフラー」, a hand-knit scarf, the classic romantic gift in Japanese stories. Lesson thirteen's 「編む」." }
  ],
  "ゆびわ|指輪": [
    { tag: "Word family", explain: "「指|ゆび」, finger, and 「輪|わ」, ring, circle. Finger circle. 「婚約指輪|こんやくゆびわ」, engagement ring. 「結婚指輪」, wedding ring. And 「輪」 in 「五輪|ごりん」, the Olympics, five rings!" },
    { tag: "Real-life Japanese", explain: "「指輪をする」, wear a ring. And lesson fourteen, 「彼に指輪をもらった」. I got a ring from him. And 「プロポーズ」 with a ring, also this lesson." }
  ],
  "えんぴつ|鉛筆": [
    { tag: "Real-life Japanese", explain: "Lesson fourteen counters! 「鉛筆を三本ください」. Three pencils, please. Long things use 「本」. 「一本|いっぽん」, 「二本|にほん」, 「三本|さんぼん」. Watch the sound changes." },
    { tag: "Culture corner", explain: "Japanese students before exams sometimes buy lucky pencils from shrines dedicated to learning, like Yushima Tenjin. And 「鉛筆削り|えんぴつけずり」, pencil sharpener." }
  ],
  "ぬいぐるみ|": [
    { tag: "Word family", explain: "「縫う|ぬう」, to sew, and 「くるむ」, to wrap. A sewn and wrapped thing. Stuffed animal! And 「着ぐるみ|きぐるみ」, a full-body costume, like mascot suits." },
    { tag: "Culture corner", explain: "Adults in Japan openly love 「ぬいぐるみ」. Crane games, 「UFOキャッチャー」, are full of them. And people take their plushies on trips and photograph them. Called 「ぬい撮り」." }
  ],
  "まんが|漫画": [
    { tag: "Culture corner", explain: "Manga covers every genre for every age, from cooking to business to history. Adults read manga openly on trains. And 「漫画喫茶|まんがきっさ」, manga cafés, let you read for hours." },
    { tag: "Real-life Japanese", explain: "Counter, 「漫画を三冊|さんさつ」, three volumes. Books use 「冊」, lesson fourteen. And manga reads right to left. And 「漫画家|まんがか」, manga artist, lesson eleven." }
  ],
  "けしょうひん|化粧品": [
    { tag: "Culture corner", explain: "Japanese cosmetics brands like Shiseido are famous. Drugstores have whole aisles of skincare. And Japanese sunscreen is especially popular with tourists. And lotions come in many steps." },
    { tag: "Word family", explain: "「化粧|けしょう」, makeup, plus 「品|ひん」, goods. Makeup goods. 「品」 ends many product words. 「食品|しょくひん」, food products. 「商品|しょうひん」, merchandise. 「作品|さくひん」, a work." }
  ],
  "ラジオ|": [
    { tag: "Culture corner", explain: "Japan has 「ラジオ体操|ラジオたいそう」, radio calisthenics, broadcast every morning since 1928. Kids do it at summer camp, and workers at factories. Everyone knows the music." },
    { tag: "Real-life Japanese", explain: "Lesson fourteen counter, 「ラジオ一台|いちだい」. Machines use 「台」. And 「ラジオを聞く」, listen to the radio. And it's great for learning Japanese. Lots of clear talk." }
  ],
  "おさら|お皿": [
    { tag: "Real-life Japanese", explain: "「お皿を洗う」, wash the dishes. And 「お皿を割った|おさらをわった」, I broke a plate. And 「小皿|こざら」, a small plate, for sauce. Notice 「さら」 becomes 「ざら」." },
    { tag: "Word family", explain: "Counter, 「一皿|ひとさら」, one plate. And sushi restaurants count plates. And 「皿」 is a picture of a dish on a stand. Easy kanji to recognize." }
  ],
  "おかえし|お返し": [
    { tag: "Culture corner", explain: "Japanese gift culture includes returning gifts. Get a wedding gift, give back about half its value, 「半返し|はんがえし」. And 「ホワイトデー」 is the return gift day for Valentine's chocolate." },
    { tag: "Real-life Japanese", explain: "「お返しに何をあげたらいいですか」. What should I give in return? Lesson fourteen. And 「お返し」 also means revenge, payback! 「お返しだ！」 Take that! Context." }
  ],
  "りれきしょ|履歴書": [
    { tag: "Culture corner", explain: "Japanese resumes follow a strict format, often handwritten in the past! With a photo, birth date, and education history. Mistakes meant starting over. Now most are typed." },
    { tag: "Word family", explain: "「履歴|りれき」, history, record. 「書|しょ」, document. 「閲覧履歴|えつらんりれき」, browsing history. And 「履く|はく」, to wear shoes, same kanji. Walking history!" }
  ],
  "クリスマス|": [
    { tag: "Culture corner", explain: "Christmas in Japan is a couples' holiday, like Valentine's. Christmas Eve dates are big. And families eat KFC! A marketing campaign from the 1970s made fried chicken a Christmas tradition. People reserve it weeks ahead." },
    { tag: "Real-life Japanese", explain: "「クリスマスに何をもらいましたか」. What did you get for Christmas? Lesson fourteen. And 「メリークリスマス」. And it's not a day off. People work on December twenty-fifth." }
  ],
  "バレンタインデー|": [
    { tag: "Real-life Japanese", explain: "「バレンタインデーにチョコをあげる」. Give chocolate on Valentine's. In Japan, women give to men. And guys wait anxiously. 「いくつもらった？」, how many did you get?" },
    { tag: "Sound it out", explain: "Valentine's Day becomes 「バレンタインデー」. The v becomes 「バ」. And Day becomes 「デー」. Six beats in Japanese. And people just say 「バレンタイン」." }
  ],
  "ホワイトデー|": [
    { tag: "Culture corner", explain: "White Day, March fourteenth, is a Japanese invention. Men return the favor with white chocolate, cookies, or gifts. Supposedly worth three times the Valentine's gift, 「三倍返し|さんばいがえし」!" },
    { tag: "Real-life Japanese", explain: "「ホワイトデーのお返し」, a White Day return gift. And it spread to Korea, China, and Taiwan. A holiday made in Japan." }
  ],
  "ほしい|欲しい": [
    { tag: "Real-life Japanese", explain: "「新しいパソコンが欲しい」. I want a new computer. 「が」 with 「ほしい」. And it's an い adjective. 「ほしくない」, don't want it. And 「何がほしい？」, what do you want?" },
    { tag: "Don't mix it up", explain: "「ほしい」 for things. 「〜たい」 for actions. 「車がほしい」, want a car. 「車を買いたい」, want to buy a car. And for other people, 「ほしがっている」, seems to want." }
  ],
  "おしゃれ|": [
    { tag: "Real-life Japanese", explain: "「おしゃれですね」. You're stylish! A great compliment. And 「おしゃれなカフェ」, a stylish café. Places can be 「おしゃれ」 too. And 「おしゃれする」, dress up." },
    { tag: "Culture corner", explain: "Tokyo's Harajuku and Omotesando are fashion centers. And Japanese street fashion magazines spread styles worldwide. And 「おしゃれ」 is a な adjective. 「おしゃれな人」." }
  ],
  "けち|": [
    { tag: "Real-life Japanese", explain: "「けち！」, you cheapskate! Kids say it when someone won't share. And 「けちな人」, a stingy person. Not nice. And 「節約|せつやく」, saving money, the positive version." },
    { tag: "Don't mix it up", explain: "「けち」, stingy, bad. 「節約家|せつやくか」, thrifty, good. Same behavior, different judgment. And 「けちをつける」, find fault with something. Nitpicking." }
  ],
  "にあう|似合う": [
    { tag: "Real-life Japanese", explain: "「その服、似合いますね」. That outfit suits you! A compliment. And shop staff say 「お似合いです」. And 「似合わない」, doesn't suit. Ouch." },
    { tag: "Word family", explain: "「似|に」, resemble, and 「合う|あう」, fit. 「似る|にる」, to resemble. 「母に似ている」, I look like my mom. And 「お似合いのカップル」, a perfect couple." }
  ],
  "あきらめる|": [
    { tag: "Real-life Japanese", explain: "「あきらめないで」, don't give up! And 「あきらめた」, I gave up. And the famous anime line, 「あきらめたら、そこで試合終了ですよ」. If you give up, the game is over. From Slam Dunk." },
    { tag: "Culture corner", explain: "Japanese has a related idea, 「しょうがない」, it can't be helped. Accepting what you can't change. Some see 「あきらめる」 as clear-eyed acceptance, not just quitting. Its kanji 「諦」 is linked to seeing clearly." }
  ],
  "あげる|": [
    { tag: "Don't mix it up", explain: "Giving verbs depend on direction. 「あげる」, I give to others, outward. 「くれる」, others give to me, inward. 「もらう」, I receive. 「友だちに本をあげた」. And never 「あげる」 toward yourself." },
    { tag: "Real-life Japanese", explain: "「これ、あげる」. Here, this is for you. Casual gift giving. And careful, 「〜てあげる」 to a superior sounds condescending. And polite, 「さしあげる」, for superiors." }
  ],
  "くれる|": [
    { tag: "Real-life Japanese", explain: "「母がセーターをくれた」. My mom gave me a sweater. Toward me! And 「〜てくれる」, someone does me a favor. 「友だちが手伝ってくれた」. My friend helped me." },
    { tag: "Don't mix it up", explain: "「くれる」, toward me or my group. 「あげる」, away from me. If your sister gets a gift from a friend, it's 「くれた」, because she's your group. Insider vs outsider." }
  ],
  "できる|": [
    { tag: "Real-life Japanese", explain: "「できる」 means many things. Can do, 「日本語ができる」. Be ready, 「ご飯ができた」, dinner's ready. Come into being, 「彼女ができた」, I got a girlfriend. And 「できた！」, done!" },
    { tag: "Word family", explain: "「できる人」, a capable person. And 「新しい店ができた」, a new store opened. And 「できるだけ」, as much as possible. A super versatile verb." }
  ],
  "そうだんする|相談する": [
    { tag: "Real-life Japanese", explain: "「先生に相談する」, consult a teacher. And 「相談があるんですが」. I need some advice. And 「相談に乗る|そうだんにのる」, give advice, listen to someone's problem." },
    { tag: "Word family", explain: "「相|そう」, mutual, and 「談|だん」, talk. Mutual talk. 「冗談|じょうだん」, a joke. 「相手|あいて」, partner, opponent. And 「人生相談」, life advice columns." }
  ],
  "ちゅういする|注意する": [
    { tag: "Real-life Japanese", explain: "「注意する」 has two uses. Be careful, 「車に注意してください」. And to warn, scold. 「先生に注意された」. I got warned by the teacher. And signs, 「足元注意」, watch your step." },
    { tag: "Word family", explain: "「注|ちゅう」, pour, focus, and 「意|い」, mind. Pour your mind into it. 「注文」, an order. 「注目|ちゅうもく」, attention. And 「不注意|ふちゅうい」, carelessness." }
  ],
  "プロポーズする|": [
    { tag: "Real-life Japanese", explain: "「彼女にプロポーズした」. I proposed to my girlfriend. And a classic Japanese proposal line used to be 「毎日味噌汁を作ってください」. Make miso soup for me every day. Old-fashioned now!" },
    { tag: "Culture corner", explain: "Japan has a tradition of visiting the bride's parents to ask permission, called 「ご挨拶|ごあいさつ」. And the classic TV drama moment, 「娘さんをください」. Please give me your daughter." }
  ],
  "〜くん|〜君": [
    { tag: "Real-life Japanese", explain: "「くん」 is for boys and younger men. 「田中くん」. Teachers use it for boys. And bosses for junior employees, even women sometimes. And 「さん」 is the safe, neutral choice." },
    { tag: "Don't mix it up", explain: "Name suffixes. 「さん」, polite, anyone. 「くん」, boys, juniors. 「ちゃん」, kids, cute, close friends. 「さま」, very polite, customers. 「せんぱい」, seniors. Choosing matters!" }
  ],
  "〜たち|": [
    { tag: "Real-life Japanese", explain: "「子供たち」, children. 「学生たち」, students. And 「私たち」, we. It makes plurals for people and animals. And 「田中さんたち」, Tanaka and his group." },
    { tag: "Don't mix it up", explain: "Japanese nouns usually don't need plurals. 「本」 is book or books. 「たち」 is only for people and sometimes animals. Never 「本たち」, unless you're being cute or poetic." }
  ],
  "わたしたち|私たち": [
    { tag: "Real-life Japanese", explain: "「私たちは学生です」. We are students. And casual, 「僕たち」, 「俺たち」. And formal, 「私ども|わたくしども」, humble we, in business." },
    { tag: "Word family", explain: "Plural pronouns. 「私たち」, we. 「あなたたち」, you all. 「彼ら|かれら」, they. 「彼女たち」, they, women. And 「みんな」, everyone. Japanese often drops these anyway." }
  ],
  "こんな〜|": [
    { tag: "Real-life Japanese", explain: "「こんなかばんがほしい」. I want a bag like this. Lesson fourteen. And 「こんな時間に？」, at this hour? And 「こんなはずじゃなかった」, it wasn't supposed to be like this." },
    { tag: "Word family", explain: "こそあど again. 「こんな」, this kind. 「そんな」, that kind. 「あんな」, that kind, far. 「どんな」, what kind. And 「そんなことない」, that's not true! A humble reply to praise." }
  ],
  "きゅうに|急に": [
    { tag: "Real-life Japanese", explain: "「急に雨が降ってきた」. It suddenly started raining. And 「急に用事ができた」. Something suddenly came up. A common excuse to cancel plans." },
    { tag: "Word family", explain: "「急|きゅう」, sudden, hurry. 「急ぐ|いそぐ」, hurry. 「急行|きゅうこう」, express train. 「救急車|きゅうきゅうしゃ」, ambulance. And 「急」 has the heart at the bottom. A racing heart." }
  ],
  "ちょうど|": [
    { tag: "Real-life Japanese", explain: "「ちょうど三時です」. It's exactly three. And at shops, 「ちょうどいただきます」, I received the exact amount. And 「ちょうどいい」, just right. Goldilocks." },
    { tag: "Word family", explain: "「ちょうど」 also means just now, 「ちょうど今、出かけるところ」. I'm just about to leave. And 「ちょうど」 for perfect timing. 「ちょうどよかった」, perfect timing!" }
  ],
  "さあ|": [
    { tag: "Real-life Japanese", explain: "「さあ…」 with a tilted head means, hmm, I'm not sure. 「田中さんはどこ？」 「さあ…」. Who knows. And 「さあ、行こう！」, come on, let's go! Different tone, different meaning." },
    { tag: "Don't mix it up", explain: "「さあ」 with a falling tone, I don't know. With energy, come on! let's go! And 「さあね」, who knows, a bit cool and evasive. Tone is everything." }
  ],
  "どうしたらいい|": [
    { tag: "Real-life Japanese", explain: "「どうしたらいいですか」. What should I do? Asking for advice, lesson fourteen. And the answer pattern, 「〜たらどうですか」, why don't you. 「先生に相談したらどうですか」." },
    { tag: "Word family", explain: "「どう」, how, 「したら」, if I do, 「いい」, good. How should I do it for it to be good? And 「どうしよう」, what do I do? Lesson eighteen. Panic versions." }
  ],
  "〜こ|〜個": [
    { tag: "Real-life Japanese", explain: "「個」 counts small round or compact things. Apples, eggs, candies, erasers. 「りんごを三個ください」. And 「一個|いっこ」, 「六個|ろっこ」, 「八個|はっこ」, 「十個|じゅっこ」. Small 「っ」 changes." },
    { tag: "Word family", explain: "「個」 means individual. 「個人|こじん」, an individual. 「個性|こせい」, individuality, personality. 「個室|こしつ」, a private room. One by one." }
  ],
  "〜さつ|〜冊": [
    { tag: "Memory hook", explain: "The kanji 「冊」 is a picture of old books, bamboo strips tied together with string. Count books, magazines, notebooks. 「一冊|いっさつ」, 「二冊」, 「三冊」." },
    { tag: "Real-life Japanese", explain: "「本を何冊持っていますか」. How many books do you have? And 「別冊|べっさつ」, a special issue. And 「一冊|いっさつ」, notice the small 「っ」." }
  ],
  "〜だい|〜台": [
    { tag: "Real-life Japanese", explain: "「台」 counts machines and vehicles. Cars, computers, TVs, bikes. 「車が二台あります」. We have two cars. And 「台」 alone, a stand or platform." },
    { tag: "Word family", explain: "「台所|だいどころ」, kitchen, stand place. 「台風|たいふう」, typhoon. 「舞台|ぶたい」, stage. And 「台湾|たいわん」, Taiwan. Many meanings for 「台」." }
  ],
  "〜ひき|〜匹": [
    { tag: "Real-life Japanese", explain: "「匹」 counts small animals. Cats, dogs, fish, bugs. 「猫が二匹いる」. And sound changes, 「一匹|いっぴき」, 「三匹|さんびき」, 「六匹|ろっぴき」. 「ひき」, 「ぴき」, 「びき」." },
    { tag: "Word family", explain: "Animal counters. 「匹」, small animals. 「頭|とう」, big animals, like cows. 「羽|わ」, birds and rabbits! Rabbits are counted like birds, an old trick from when eating land animals was taboo." }
  ],
  "〜ほん|〜本": [
    { tag: "Real-life Japanese", explain: "「本」 counts long thin things. Pens, bottles, umbrellas, trees, and movies! 「映画を二本見た」. Old film came on reels. And phone calls. 「電話を一本」." },
    { tag: "Word family", explain: "Sound changes. 「一本|いっぽん」, 「二本|にほん」, 「三本|さんぼん」, 「四本|よんほん」, 「六本|ろっぽん」, 「八本|はっぽん」, 「十本|じゅっぽん」. 「ほん」, 「ぽん」, 「ぼん」. Practice them!" }
  ]
});
/* Lesson 15 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "がいこくじん|外国人": [
    { tag: "Real-life Japanese", explain: "「外国人です」. I'm a foreigner. And the short form 「外人|がいじん」 can feel rude, so 「外国人」 or 「外国の方|がいこくのかた」 is better. And 「外国人登録」, foreigner registration." },
    { tag: "Culture corner", explain: "Japanese people sometimes compliment foreigners just for using chopsticks. It's well meant. And more foreign residents and tourists every year are changing Japan. Signs now come in English, Chinese, and Korean." }
  ],
  "そば|": [
    { tag: "Culture corner", explain: "On New Year's Eve, Japanese eat 「年越しそば|としこしそば」, year-crossing noodles. Long noodles for a long life. And it's fine to slurp noodles loudly. It's polite, and shows you enjoy it." },
    { tag: "Don't mix it up", explain: "「そば」 also means beside, near, 「側|そば」. 「駅のそば」, near the station. Same sound. And 「焼きそば|やきそば」, fried noodles, uses wheat noodles, not buckwheat. Confusing!" }
  ],
  "え|絵": [
    { tag: "Real-life Japanese", explain: "「絵を描く|えをかく」, draw a picture, also in this lesson. And 「絵が上手」, good at drawing. And 「絵本|えほん」, picture book. And 「絵文字|えもじ」, emoji! A Japanese word now used worldwide." },
    { tag: "Word family", explain: "「絵」 builds fun words. 「絵はがき|えはがき」, a picture postcard. 「浮世絵|うきよえ」, woodblock prints, like the famous Great Wave. And 「絵」, a single sound, one of the shortest words." }
  ],
  "ちず|地図": [
    { tag: "Real-life Japanese", explain: "「地図を見せてください」. Please show me the map. And 「地図アプリ」, map app. And Japanese maps often face the direction you're standing, not always north up, at stations." },
    { tag: "Word family", explain: "「地|ち」, ground, and 「図|ず」, drawing. Ground drawing. 「図|ず」 in 「図書館」, library. 「地下鉄」, subway. 「地震|じしん」, earthquake, also this lesson." }
  ],
  "じしょ|辞書": [
    { tag: "Real-life Japanese", explain: "Lesson fifteen's volitional plan. 「新しい辞書を買おうと思っています」. I'm thinking of buying a new dictionary. And 「辞書を引けば、わかる」. If you look it up, you'll know." },
    { tag: "Culture corner", explain: "Japanese students used electronic dictionaries, 「電子辞書」, for years. Now apps. And kanji dictionaries are organized by radical, the parts of kanji. A skill on its own." }
  ],
  "かぐ|家具": [
    { tag: "Word family", explain: "「家|か」, house, and 「具|ぐ」, tool, utensil. House tools! Furniture. 「道具|どうぐ」, tools. 「文房具|ぶんぼうぐ」, stationery. And 「具合|ぐあい」, condition." },
    { tag: "Real-life Japanese", explain: "「家具付きのアパート」, a furnished apartment. And IKEA and Nitori are popular furniture stores in Japan. And 「家具を運ぶ」, move furniture." }
  ],
  "でんち|電池": [
    { tag: "Memory hook", explain: "「電|でん」, electricity, and 「池|ち」, pond. An electric pond! A battery is a pool of electricity. Beautiful logic. And 「池|いけ」, a pond, in gardens." },
    { tag: "Real-life Japanese", explain: "「電池が切れた」. The battery died. Literally cut. And phones, 「充電|じゅうでん」, charging. 「充電が切れそう」, my phone's about to die. Super common." }
  ],
  "ジャケット|": [
    { tag: "Real-life Japanese", explain: "「ジャケットを着る」, put on a jacket. And 「ジャケット」 also means an album cover. 「CDのジャケット」. And a winter coat is 「コート」." },
    { tag: "Sound it out", explain: "Jacket becomes 「ジャケット」. The small 「ッ」 before 「ト」 doubles the t sound. And the j is 「ジャ」. Same pattern as 「チケット」, ticket, and 「ポケット」, pocket." }
  ],
  "ペット|": [
    { tag: "Culture corner", explain: "Japan has pet cafés, pet strollers, and pet fashion. And many apartments ban pets, so cat cafés let people enjoy cats without owning one. Small dogs are especially popular." },
    { tag: "Don't mix it up", explain: "「ペット」 also means a plastic bottle! 「ペットボトル」, from PET plastic. 「ペットボトルの水」, bottled water. So 「ペット」 could be your cat or your drink." }
  ],
  "わりびきけん|割引券": [
    { tag: "Word family", explain: "「割|わり」, divide, 「引|びき」, pull, take off, 「券|けん」, ticket. A ticket that takes off a portion. And 「割引」, discount. 「二割引」, twenty percent off. Japanese counts discounts by tenths!" },
    { tag: "Real-life Japanese", explain: "「割引券を使えますか」. Can I use this coupon? And 「学割|がくわり」, student discount. 「半額|はんがく」, half price. Super useful when shopping." }
  ],
  "インターネット|": [
    { tag: "Real-life Japanese", explain: "People say 「ネット」 for short. 「ネットで調べる」, look it up online. 「ネットで買う」, buy online. And 「ネット」 also means a net. Context." },
    { tag: "Word family", explain: "Internet words. 「ネット」. 「ウェブ」, web. 「サイト」, website. 「ホームページ」, website. 「ブログ」, blog. 「ネット炎上|ネットえんじょう」, an online flame war, an internet firestorm." }
  ],
  "じしん|地震": [
    { tag: "Culture corner", explain: "Japan has many earthquakes. Phones get alerts, 「緊急地震速報|きんきゅうじしんそくほう」, seconds before shaking. Schools hold drills. And everyone keeps an emergency bag, 「防災グッズ|ぼうさいグッズ」." },
    { tag: "Don't mix it up", explain: "「地震|じしん」, earthquake. 「自信|じしん」, self-confidence! Same sound. 「自信がある」, I'm confident. And 「自身|じしん」, oneself. Three 「じしん」." }
  ],
  "ほけん|保険": [
    { tag: "Real-life Japanese", explain: "「保険に入る」, get insurance, also this lesson. And 「健康保険|けんこうほけん」, health insurance. In Japan, everyone, even foreign residents, joins national health insurance." },
    { tag: "Word family", explain: "「保|ほ」, protect, keep, and 「険|けん」, danger. Protection from danger. 「保険証|ほけんしょう」, insurance card. 「保存|ほぞん」, save, like a file. And 「危険|きけん」, danger." }
  ],
  "ぜいきん|税金": [
    { tag: "Culture corner", explain: "Japan's consumption tax, 「消費税|しょうひぜい」, is ten percent, eight on food. Prices sometimes show 「税込|ぜいこみ」, tax included, or 「税抜|ぜいぬき」, without. Check before buying." },
    { tag: "Word family", explain: "「税|ぜい」, tax, and 「金|きん」, money. 「免税|めんぜい」, tax-free. Tourists can shop 「免税」 with a passport. And 「税関|ぜいかん」, customs at the airport." }
  ],
  "きょうしつ|教室": [
    { tag: "Real-life Japanese", explain: "「教室」 is a classroom, and also a class or school for lessons. 「料理教室」, cooking class. 「ピアノ教室」, piano school. And 「英会話教室|えいかいわきょうしつ」, English conversation school." },
    { tag: "Word family", explain: "「室|しつ」, room. 「教室」, teaching room. 「和室|わしつ」, Japanese-style room. 「浴室|よくしつ」, bathroom. 「研究室」, a lab. And 「会議室|かいぎしつ」, meeting room." }
  ],
  "たてもの|建物": [
    { tag: "Real-life Japanese", explain: "「あの建物は何ですか」. What's that building? And 「古い建物」, old building. And Kyoto has strict rules to protect traditional 「建物」, even limiting colors on signs." },
    { tag: "Word family", explain: "「建|た」, build. 「建てる|たてる」, to build. 「建築|けんちく」, architecture. And 「物|もの」, thing. Built thing. And 「二階建て|にかいだて」, a two-story building." }
  ],
  "プール|": [
    { tag: "Real-life Japanese", explain: "「プールで泳ぐ」, swim in the pool. And Japanese public pools often require a swim cap. And there's a mandatory break every hour, 「休憩時間」, when everyone gets out." },
    { tag: "Culture corner", explain: "Japanese schools almost all have outdoor pools for summer swim class. And summer water parks, like Tokyo Summerland, are packed. And 「プール」 ends with 「ル」, from pool." }
  ],
  "えいがかん|映画館": [
    { tag: "Real-life Japanese", explain: "「映画館で映画を見る」. Watch a movie at the theater. And tickets are often cheaper on 「映画の日」, Movie Day, the first of each month. And 「レディースデー」, ladies' day discounts." },
    { tag: "Word family", explain: "「館|かん」, big building. 「映画館」, 「図書館」, 「美術館」, 「旅館」, 「大使館」. And 「館」 alone, 「やかた」, a mansion. Every big public building." }
  ],
  "りょかん|旅館": [
    { tag: "Culture corner", explain: "Staying at a 「旅館」, a traditional inn. You get tatami rooms, futons laid out by staff, a 「浴衣」 to wear, a hot spring bath, and a multi-course dinner, 「懐石|かいせき」. Pricey but unforgettable." },
    { tag: "Real-life Japanese", explain: "「旅館に泊まったことがありますか」. Have you ever stayed at a ryokan? And 「旅館の女将|おかみ」, the landlady who runs it. And check-in includes tea and sweets." }
  ],
  "にわ|庭": [
    { tag: "Culture corner", explain: "Japanese gardens are art. Rock gardens, 「枯山水|かれさんすい」, use raked gravel for water. Kyoto's Ryoanji has the famous one. And tea gardens with stepping stones. Each is designed for contemplation." },
    { tag: "Real-life Japanese", explain: "「庭で遊ぶ」, play in the yard. And Japanese tongue twister, 「庭には二羽鶏がいる」, in the garden there are two chickens. 「にわにはにわにわとりがいる」. Try it!" }
  ],
  "ボランティア|": [
    { tag: "Real-life Japanese", explain: "「ボランティアをする」, volunteer. And 「ボランティア活動|かつどう」, volunteer activities. After disasters, many Japanese go as volunteers to help clean up." },
    { tag: "Sound it out", explain: "Volunteer becomes 「ボランティア」. The v becomes 「ボ」. And the eer becomes 「ティア」. Small 「ィ」 for ti. Five beats." }
  ],
  "かつどう|活動": [
    { tag: "Word family", explain: "「活|かつ」, active, lively, and 「動|どう」, move. Active movement. 「部活動|ぶかつどう」, club activities, shortened to 「部活」. 「就活」, job hunting. 「婚活」, marriage hunting. 「〜活」 is everywhere!" },
    { tag: "Real-life Japanese", explain: "「どんな活動をしていますか」. What activities do you do? And new slang uses 「〜活」 for any effort. 「朝活|あさかつ」, morning activities. 「推し活|おしかつ」, supporting your favorite idol." }
  ],
  "けいけん|経験": [
    { tag: "Real-life Japanese", explain: "「いい経験になりました」. It was a good experience. And job interviews, 「経験がありますか」. Do you have experience? And 「初めての経験」, a first-time experience." },
    { tag: "Word family", explain: "「経|けい」, pass through, and 「験|けん」, test. What you've passed through and tested. 「経済|けいざい」, economics. 「経由|けいゆ」, via. And 「試験」, exam." }
  ],
  "しゅうかん|習慣": [
    { tag: "Real-life Japanese", explain: "「日本の習慣」, Japanese customs. Taking off shoes, bowing, giving souvenirs. And 「毎朝走るのが習慣です」. Running every morning is my habit. Habit or custom." },
    { tag: "Don't mix it up", explain: "Sound-alike, 「週間|しゅうかん」, weeks. 「一週間」. And 「習慣」, habit. Same sound! And 「慣れる|なれる」, get used to, lesson seventeen, uses 「慣」. Habit is what you're used to." }
  ],
  "しめきり|締め切り": [
    { tag: "Real-life Japanese", explain: "「締め切りはいつですか」. When is the deadline? And 「締め切りに間に合わない」. I won't make the deadline. Every writer and student knows this one." },
    { tag: "Word family", explain: "「締める|しめる」, to close, tighten, and 「切る|きる」, cut. Close and cut off. Deadline! And signs, 「締切」, closed, for applications. And 「〆切」, a shorthand people use." }
  ],
  "よてい|予定": [
    { tag: "Real-life Japanese", explain: "「週末の予定は？」. Plans for the weekend? And 「予定がある」, I have plans. And lesson fifteen, 「来年日本に行く予定です」. I'm planning to go to Japan next year." },
    { tag: "Word family", explain: "「予|よ」, ahead, and 「定|てい」, fix, decide. Decided ahead. 「定食|ていしょく」, set meal. 「予約」, reservation. And 「予定表|よていひょう」, a schedule." }
  ],
  "そつぎょうしき|卒業式": [
    { tag: "Culture corner", explain: "Japanese graduation ceremonies, in March, are emotional. Students sing songs, cry, and give the second button from their uniform to someone they like, the button closest to the heart." },
    { tag: "Word family", explain: "「式|しき」, ceremony. 「卒業式」, graduation. 「結婚式」, wedding. 「入学式|にゅうがくしき」, entrance ceremony. 「成人式」, coming of age. Life's ceremonies." }
  ],
  "けっこんしき|結婚式": [
    { tag: "Culture corner", explain: "Japanese weddings often have a ceremony and a reception, 「披露宴|ひろうえん」. Guests give money in special envelopes and get a gift back, 「引き出物|ひきでもの」. And speeches, lots of speeches." },
    { tag: "Real-life Japanese", explain: "「結婚式に招待された」. I was invited to a wedding. And never wear white as a guest. And money gifts avoid even numbers, which can be split, like a couple." }
  ],
  "うる|売る": [
    { tag: "Real-life Japanese", explain: "「売っていますか」. Do you sell it? Shop question. And 「売り切れ|うりきれ」, sold out. 「売り場|うりば」, sales floor. 「くつ売り場はどこですか」. Where's the shoe section?" },
    { tag: "Don't mix it up", explain: "「売る」, sell. 「買う」, buy. Opposites. And 「売れる|うれる」, sell well. 「この本はよく売れる」. And 「売店|ばいてん」, a kiosk." }
  ],
  "おろす|下ろす": [
    { tag: "Real-life Japanese", explain: "「お金をおろす」, withdraw money. From an ATM. And 「荷物を下ろす」, put down luggage. And 「降ろす」, let someone off. 「駅で降ろしてください」. Drop me off at the station." },
    { tag: "Word family", explain: "「下|お」, down. 「下ろす」, lower, take down. 「下りる」, go down. 「下|した」, below. And 「下さい|ください」, please give me, giving down." }
  ],
  "かく|描く": [
    { tag: "Don't mix it up", explain: "「描く」, draw, paint. 「書く」, write. Both 「かく」. 「絵を描く」, draw a picture. 「字を書く」, write characters. And 「描く」 also reads 「えがく」, to depict, in writing." },
    { tag: "Real-life Japanese", explain: "「絵を描くのが好きです」. I like drawing. And 「漫画を描く」, draw manga. And 「似顔絵を描く」, draw a portrait. Street artists do it at tourist spots." }
  ],
  "さがす|探す": [
    { tag: "Real-life Japanese", explain: "「何を探していますか」. What are you looking for? Shop staff ask. And 「アパートを探している」, looking for an apartment. And 「仕事を探す」, job hunting." },
    { tag: "Don't mix it up", explain: "「探す」, look for something you want. 「捜す」, search for something lost. Both 「さがす」. And 「見つける」, find. 「探したけど、見つからなかった」. I looked but couldn't find it." }
  ],
  "さそう|誘う": [
    { tag: "Real-life Japanese", explain: "「映画に誘う」, invite to a movie. And 「誘ってくれてありがとう」. Thanks for inviting me. And casual invitations, 「〜ない？」, like 「行かない？」, wanna go?" },
    { tag: "Word family", explain: "「誘|ゆう」 in 「誘惑|ゆうわく」, temptation. 「誘拐|ゆうかい」, kidnapping. Darker! But 「誘う」 itself is friendly. Inviting, tempting." }
  ],
  "しゃべる|": [
    { tag: "Don't mix it up", explain: "「しゃべる」, chat, casual talk. 「話す」, speak, general. 「おしゃべり」, a chatterbox, or chatting. 「おしゃべりな人」, a talkative person. And 「しゃべらないで」, quiet please." },
    { tag: "Real-life Japanese", explain: "「友だちとしゃべるのが好き」. I like chatting with friends. And 「日本語しゃべれる？」, can you speak Japanese? Casual. Friends ask this a lot." }
  ],
  "つきあう|付き合う": [
    { tag: "Real-life Japanese", explain: "「付き合ってください」. Please go out with me. The classic confession, after 「好きです」. And 「付き合っている」, dating. And 「買い物に付き合って」, keep me company shopping." },
    { tag: "Culture corner", explain: "In Japan, dating usually officially starts with a 「告白|こくはく」, a confession, and a clear yes. Then you're 「付き合っている」. Less gray area than Western dating." }
  ],
  "つく|着く": [
    { tag: "Real-life Japanese", explain: "「駅に着いた」. I arrived at the station. And 「何時に着きますか」, what time will you arrive? And 「着いたら連絡して」. Text me when you get there." },
    { tag: "Don't mix it up", explain: "「着く」, arrive. 「着る」, wear. Same kanji! And 「つく」, turn on, lesson eighteen. And 「付く」, be attached. Many 「つく」." }
  ],
  "ほけんにはいる|保険に入る": [
    { tag: "Real-life Japanese", explain: "「旅行保険に入った」. I got travel insurance. Lesson fifteen, 「〜ておく」, do in advance. 「保険に入っておいたほうがいい」. You'd better get insurance beforehand." },
    { tag: "Word family", explain: "「入る」 for joining. 「保険に入る」, insurance. 「クラブに入る」, join a club. 「大学に入る」, enter college. 「お風呂に入る」, take a bath. Entering groups and things." }
  ],
  "きをつける|気をつける": [
    { tag: "Real-life Japanese", explain: "「気をつけて」, take care, be careful. A warm goodbye. And 「車に気をつけて」, watch out for cars. 「に」 for what. And 「気をつけます」, I'll be careful." },
    { tag: "Word family", explain: "「気」 idioms. 「気をつける」, careful. 「気にする」, worry about. 「気に入る」, like. 「気がつく」, notice. 「気が強い」, strong-willed. 「気」 is spirit, mind, everywhere." }
  ],
  "しらべる|調べる": [
    { tag: "Real-life Japanese", explain: "「ネットで調べる」, look it up online. And 「辞書で調べる」, look it up in the dictionary. And 「調べておきます」, I'll look into it. Lesson fifteen's 「ておく」." },
    { tag: "Word family", explain: "「調|ちょう」, investigate, tune. 「調査|ちょうさ」, survey. 「調子|ちょうし」, condition. 「調子はどう？」, how are you doing? And 「調味料|ちょうみりょう」, seasonings." }
  ],
  "みえる|見える": [
    { tag: "Real-life Japanese", explain: "「富士山が見える」. You can see Mount Fuji. 「が」 for what's visible. And 「見えない」, can't see. And 「若く見える」, look young. Appearance." },
    { tag: "Don't mix it up", explain: "「見える」, be visible, naturally. 「見られる」, can see, ability or chance. 「ここから海が見える」, you can see the sea from here. 「映画が見られる」, you can watch movies. Subtle." }
  ],
  "かんこうする|観光する": [
    { tag: "Real-life Japanese", explain: "「京都を観光する」, sightsee in Kyoto. And 「観光客|かんこうきゃく」, tourists. 「観光地|かんこうち」, tourist spot. And 「観光案内所」, tourist info center." },
    { tag: "Word family", explain: "「観|かん」, view, and 「光|こう」, light, scenery. Viewing the light. 「観光」. And 「光|ひかり」, light. 「観客|かんきゃく」, audience. 「観察|かんさつ」, observation." }
  ],
  "よやくする|予約する": [
    { tag: "Real-life Japanese", explain: "「レストランを予約する」, make a restaurant reservation. And 「予約しておいた」, I reserved in advance. Lesson fifteen's 「ておく」. Popular places book up fast." },
    { tag: "Culture corner", explain: "Some Japanese restaurants, especially high-end sushi, accept reservations only through hotels or Japanese phone numbers. And no-shows are a big problem, so some charge cancellation fees." }
  ],
  "さんかする|参加する": [
    { tag: "Real-life Japanese", explain: "「パーティーに参加する」, join a party. 「に」 for what. And 「参加者|さんかしゃ」, participants. And 「参加費|さんかひ」, participation fee." },
    { tag: "Word family", explain: "「参|さん」, join, visit. 「参加」, take part. 「参考|さんこう」, reference. 「参考書」, study guide. And 「お参り|おまいり」, visiting a shrine or grave." }
  ],
  "そつぎょうする|卒業する": [
    { tag: "Real-life Japanese", explain: "「大学を卒業する」, graduate from college. 「を」 for what you graduate from. And 「卒業したら」, after I graduate. And slang, 「〜を卒業する」, to move past something, like a hobby." },
    { tag: "Culture corner", explain: "When idol singers leave their group, it's called 「卒業」, graduating. Not quitting. A gentle way to say goodbye. And schools in Japan graduate in March." }
  ],
  "はっぴょうする|発表する": [
    { tag: "Real-life Japanese", explain: "「クラスで発表する」, present in class. And 「発表会|はっぴょうかい」, a recital or presentation event. And 「合格発表|ごうかくはっぴょう」, exam results announcement. Tense moment." },
    { tag: "Word family", explain: "「発|はっ」, emit, start, and 「表|ぴょう」, show, surface. Showing out. 「発音|はつおん」, pronunciation. 「出発」, departure. And 「表」, a chart or table." }
  ],
  "〜けど|": [
    { tag: "Real-life Japanese", explain: "「行きたいけど、時間がない」. I want to go, but I don't have time. And trailing off softly, 「ちょっと聞きたいんですけど…」. I'd like to ask something... Super natural." },
    { tag: "Don't mix it up", explain: "「けど」, casual but. 「けれども」, more formal. 「が」, polite written. And 「でも」, at the start of a sentence. All mean but, different levels of formality." }
  ],
  "〜め|〜目": [
    { tag: "Real-life Japanese", explain: "「目」 makes ordinals. 「一つ目」, the first. 「二人目」, the second person. 「三回目」, the third time. And 「二つ目の角を右」, turn right at the second corner. Directions!" },
    { tag: "Word family", explain: "「目」, eye, also order, ranking. 「一番目」, number one. 「何番目」, which number. And 「目」 in 「目的|もくてき」, purpose. And 「目次」, table of contents." }
  ],
  "いちにちめ|一日目": [
    { tag: "Real-life Japanese", explain: "「旅行の一日目は東京でした」. Day one of the trip was Tokyo. And 「二日目」, day two. Perfect for itineraries. And 「最終日|さいしゅうび」, the last day." },
    { tag: "Don't mix it up", explain: "「一日目|いちにちめ」, the first day of something. 「一日|ついたち」, the first of the month. 「一日|いちにち」, one day long. Three meanings for 「一日」. Context!" }
  ],
  "いちにちじゅう|一日中": [
    { tag: "Real-life Japanese", explain: "「一日中寝ていた」. I slept all day. And 「一日中雨だった」, it rained all day. And 「一日中勉強した」, studied all day. Exam week life." },
    { tag: "Word family", explain: "「中|じゅう」, throughout. 「一日中」, all day. 「一年中」, all year. 「世界中」, worldwide. 「夏休み中」, during summer break. Throughout." }
  ],
  "さいきん|最近": [
    { tag: "Real-life Japanese", explain: "「最近どう？」. How have you been lately? Casual check-in. And 「最近、忙しい」, I've been busy lately. And 「最近の若者」, young people these days." },
    { tag: "Word family", explain: "「最|さい」, most, and 「近|きん」, near. The most recent. 「最初」, first. 「最後」, last. 「最高」, best. 「最低」, worst. Superlatives with 「最」." }
  ],
  "もういちど|もう一度": [
    { tag: "Real-life Japanese", explain: "「もう一度お願いします」. One more time, please. The phrase every learner uses daily. And 「もう一度言ってください」. Please say it again. Teachers love it." },
    { tag: "Word family", explain: "「もう」, more. 「もう一度」, once more. 「もう一つ」, one more. 「もう少し」, a bit more. And 「一度」, once. 「一度行ったことがある」, I've been once." }
  ],
  "たのしみです|楽しみです": [
    { tag: "Real-life Japanese", explain: "「楽しみです」. I'm looking forward to it! And 「旅行が楽しみ」. I can't wait for the trip. And 「楽しみにしています」, I'm looking forward to it, polite, in emails." },
    { tag: "Word family", explain: "「楽しい」, fun, and 「楽しみ」, something to look forward to. And 「楽|らく」, easy, comfortable. 「楽な仕事」, an easy job. And 「音楽」, music. One kanji, joy and ease." }
  ]
});
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
/* Lesson 18 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "カーテン|": [
    { tag: "Real-life Japanese", explain: "Lesson eighteen is all about open and close, on and off. 「カーテンを開ける|カーテンをあける」, to open the curtains. 「カーテンを閉める|カーテンをしめる」, to close them. And the state, 「カーテンが開いている」, the curtains are open. Notice 「を」 when you do it, 「が」 when it just is." },
    { tag: "Culture corner", explain: "Japanese homes often have two layers on each window. Thick curtains for night, and thin lace ones, 「レースのカーテン」, for daytime privacy. And there's the old-style divider, 「のれん」, a short split curtain hung in shop doorways. When the 「のれん」 is out, the restaurant is open." }
  ],
  "ソファ|": [
    { tag: "Sound it out", explain: "You'll see it spelled two ways, 「ソファ」 and 「ソファー」, with a long mark. Both are fine. Loanwords that end in an er or a sound in English often get that long 「ー」 or lose it, depending on who's writing. Like 「コンピュータ」 and 「コンピューター」. Same word." },
    { tag: "Real-life Japanese", explain: "Pair it with lesson eighteen's 「〜ておく」, doing something in advance. 「お客さんが来るから、ソファを片付けておきます」. Guests are coming, so I'll tidy the sofa ahead of time. And the relaxing sentence, 「ソファで寝てしまった」. I fell asleep on the sofa." }
  ],
  "れいぞうこ|冷蔵庫": [
    { tag: "Word family", explain: "「庫|こ」, storehouse, ends lots of storage words. 「車庫|しゃこ」, garage, a car storehouse. 「金庫|きんこ」, a safe, money storehouse. 「倉庫|そうこ」, a warehouse. And the freezer is 「冷凍庫|れいとうこ」, frozen storehouse. Just one kanji different from the fridge." },
    { tag: "Real-life Japanese", explain: "Lesson eighteen's 「〜てある」, something done and left that way. 「ビールが冷蔵庫に入れてあります」. The beer has been put in the fridge, ready for you. And the sad version, 「冷蔵庫に何もない」. There's nothing in the fridge. And 「冷たい|つめたい」, cold to the touch, shares the first kanji." }
  ],
  "スイッチ|": [
    { tag: "Real-life Japanese", explain: "This lesson's key pair. 「つける」, to turn on, and 「つく」, it comes on. 「スイッチを押すと、電気がつきます」. When you press the switch, the light comes on. Notice the 「と」, whenever, and 「押す|おす」, to press, also from this lesson." },
    { tag: "Word family", explain: "Japanese also uses 「スイッチ」 for a mental switch. 「スイッチが入る」, a switch gets flipped, means someone suddenly gets serious or excited. A gamer might say 「スイッチ」 for the Nintendo console too. And the ON and OFF on devices are just read as 「オン」 and 「オフ」. 「オフの日」 is a day off." }
  ],
  "しょうゆ|しょう油": [
    { tag: "Culture corner", explain: "Soy sauce is the 「せ」 in the cooking order さしすせそ, from the old spelling 「せうゆ」. Japan has many kinds. 「濃口|こいくち」, the standard dark one, and 「薄口|うすくち」, a lighter one from western Japan that's actually saltier. Etiquette tip, don't drown your rice in it." },
    { tag: "Real-life Japanese", explain: "Ask for it with 「しょうゆを取ってください|しょうゆをとってください」. Please pass the soy sauce. And a lesson eighteen accident, 「しょうゆをこぼしてしまった」. I spilled the soy sauce. Then 「シャツが汚れた|シャツがよごれた」, my shirt got dirty. Two verbs from this lesson in one mess." }
  ],
  "スープ|": [
    { tag: "Don't mix it up", explain: "Japanese has its own soups too. 「みそしる」 is miso soup, the everyday one served with meals. 「スープ」 usually means Western-style soup, or the broth in ramen. And Japanese people drink soup straight from the bowl, no spoon, for miso soup. With Western 「スープ」, use a spoon." },
    { tag: "Real-life Japanese", explain: "Japanese says you drink soup, 「スープを飲む|スープをのむ」, not eat it. And 「スープが冷めた|スープがさめた」, the soup got cold. A ramen fan might say 「スープまで全部飲んだ」. I drank the whole thing, even the soup. That's a compliment to the chef." }
  ],
  "バナナ|": [
    { tag: "Culture corner", explain: "Japan has a cute school rule debate. Is a banana a snack for the school trip? Snacks have a spending limit, so kids ask the teacher, 「バナナはおやつに入りますか」. Does a banana count as a snack? It's such a classic question that it's become a joke. And bananas used to be a luxury in Japan, long ago." },
    { tag: "Sound it out", explain: "Easy word, but listen to the rhythm. Japanese gives every syllable the same length. 「バ」, 「ナ」, 「ナ」. English stresses the middle, ba-NA-na. Try saying it flat and even. That even rhythm is a big part of sounding natural in Japanese, and this is the easiest word to practice it on." }
  ],
  "ポップコーン|": [
    { tag: "Real-life Japanese", explain: "At Japanese movie theaters, popcorn often comes in flavors like 「しお」, salt, and 「キャラメル」, caramel, and sometimes soy sauce butter. And Tokyo Disney is famous for popcorn buckets in dozens of flavors, curry and black pepper among them. People line up just for a new flavor." },
    { tag: "Sound it out", explain: "Two small details. The small 「ッ」 in 「ポップ」 is the quick stop of pop. And corn becomes 「コーン」, where the long 「ー」 replaces the English r. Same in 「コーヒー」, coffee, and 「カーテン」, curtain. When English has a vowel plus r, Japanese often just stretches the vowel." }
  ],
  "シャンプー|": [
    { tag: "Real-life Japanese", explain: "In a Japanese bath, you wash and rinse outside the tub first, then soak. So 「シャンプーしてから、お風呂に入ります|シャンプーしてから、おふろにはいります」. After shampooing, I get in the bath. And 「シャンプーする」 works as a verb by itself. Its partner is 「リンス」, conditioner." },
    { tag: "Word family", explain: "Japanese turns lots of English nouns into verbs with 「する」. 「シャンプーする」, to shampoo. 「コピーする」, to copy. 「メールする」, to email. 「ジョギングする」, to jog. It's an easy way to make a verb when you don't know the Japanese one. Just add 「する」 and hope." }
  ],
  "ろうそく|": [
    { tag: "Real-life Japanese", explain: "Lesson eighteen's verb pair. 「ろうそくをつける」, to light a candle. 「ろうそくを消す|ろうそくをけす」, to blow it out. And 「ろうそくが消えた|ろうそくがきえた」, the candle went out by itself. On a birthday cake, 「ろうそくを吹き消す|ろうそくをふきけす」, to blow out the candles." },
    { tag: "Memory hook", explain: "「ろう」 means wax, and 「そく」 is related to a word for a torch or light. So a wax light. A memory trick, 「ろうそく」 sounds like low socks. Picture a candle wearing short little socks, its wax dripping down like slouchy socks." }
  ],
  "タオル|": [
    { tag: "Culture corner", explain: "Japan loves small towels. People carry a hand towel, 「ハンカチ」 or 「ハンドタオル」, because many public restrooms have no paper towels. At hot springs, you bring a small towel into the bath area but never put it in the water. Japanese people often fold it and set it on their heads." },
    { tag: "Real-life Japanese", explain: "「タオルを貸してくれる？|タオルをかしてくれる？」 Can you lend me a towel? That's lesson sixteen's 「貸す」. And a lesson eighteen 「〜ておく」, 「タオルを用意しておきました|タオルをよういしておきました」. I got a towel ready for you in advance. Good host." }
  ],
  "スカート|": [
    { tag: "Real-life Japanese", explain: "Remember the wearing verbs. Skirts are lower body, so 「スカートをはく」. Take it off with 「脱ぐ|ぬぐ」. A lesson eighteen sentence, 「スカートが汚れてしまった|スカートがよごれてしまった」. My skirt got dirty. And the long mark, 「ー」, stands for the ir in English skirt." },
    { tag: "Culture corner", explain: "Japanese school uniforms are iconic. Girls traditionally wear pleated skirts with a sailor-style top, called 「セーラー服|セーラーふく」, sailor outfit, or a blazer. Many schools now let students choose pants or skirts. And uniform fashion shows up everywhere in anime." }
  ],
  "にっき|日記": [
    { tag: "Word family", explain: "「記|き」 means to write down or record. 「記者|きしゃ」, a reporter, a recording person. 「記録|きろく」, a record, like a world record. 「暗記|あんき」, memorization, recording in the dark, by heart. And 「日記|にっき」, a day record. Notice 「にち」 shrinks to 「にっ」 before 「き」." },
    { tag: "Real-life Japanese", explain: "「日記をつける」 is to keep a diary. Not 「書く」, though that works too. Japanese kids often write a summer vacation diary, 「絵日記|えにっき」, a picture diary, as homework. A great study tip, try keeping a simple 「日本語の日記」, three sentences a day." }
  ],
  "けいたい|携帯": [
    { tag: "Real-life Japanese", explain: "These days people mostly say 「スマホ」, short for smartphone. But 「携帯|けいたい」 is still common, and older flip phones are called 「ガラケー」, Galápagos phone, because Japan's phones evolved separately, like animals on the Galápagos Islands. And 「携帯の電源を切ってください」, please turn off your phone." },
    { tag: "Culture corner", explain: "On Japanese trains, talking on the phone is considered rude. Signs say to set phones to 「マナーモード」, manner mode, which means silent mode. So you'll see a packed train where everyone is on their phones, but almost nobody is talking. And near priority seats, some trains ask you to turn them off." }
  ],
  "さくら|桜": [
    { tag: "Culture corner", explain: "Cherry blossom viewing is 「お花見|おはなみ」. Friends and coworkers spread blue tarps under the trees, eat, drink, and sing. Newer employees are sometimes sent early to save a spot. The news even reports the 「桜前線|さくらぜんせん」, the cherry blossom front, moving north up the country like a weather system." },
    { tag: "Real-life Japanese", explain: "This lesson's verb, 「咲く|さく」, to bloom. 「桜が咲きました」. The cherry blossoms have bloomed. And the state, 「桜が咲いている」. And since they fall so quickly, 「散る|ちる」, to scatter, is the other big cherry word. They bloom and fall within about a week, which is why people treasure them." }
  ],
  "むし|虫": [
    { tag: "Word family", explain: "Japanese uses 「虫」 for more than bugs. A 「泣き虫|なきむし」 is a crybaby, a crying bug. A 「弱虫|よわむし」 is a coward. And bookworm is 「本の虫|ほんのむし」, just like English. And 「虫歯|むしば」, bug tooth, is a cavity. Kids are told bugs eat their teeth." },
    { tag: "Culture corner", explain: "Japanese kids love catching bugs. In summer, they go out with nets and cages for beetles, 「カブトムシ」, rhinoceros beetles, which are sold as pets in stores. And autumn insects like crickets are enjoyed for their singing. People say Japanese hear insect sounds almost like music." }
  ],
  "やちん|家賃": [
    { tag: "Culture corner", explain: "Renting in Japan has some surprising costs. Besides 「家賃|やちん」, there's 「敷金|しききん」, a deposit, and sometimes 「礼金|れいきん」, key money, literally thank-you money, a gift to the landlord you never get back. It's 「お礼|おれい」 in money form. So moving in can cost several months' rent." },
    { tag: "Word family", explain: "「賃|ちん」 means a fee or wage, and it has the shell, money, at the bottom. 「電車賃|でんしゃちん」 is train fare. 「運賃|うんちん」 is a fare or freight charge. And 「家|や」 is a reading of house you'll also see in 「大家さん|おおやさん」, the landlord, the big house person." }
  ],
  "そと|外": [
    { tag: "Word family", explain: "You know 「外国|がいこく」, foreign country, and 「外国人|がいこくじん」, foreigner. And the short form, 「外人|がいじん」, which some people find a bit rude. And 「以外|いがい」, other than. Its partner is 「中|なか」, inside. 「外は寒い」, it's cold outside, and 「中に入って」, come inside." },
    { tag: "Real-life Japanese", explain: "Japanese has an important idea, 「うち」 and 「そと」, inside and outside groups. Your family and company are 「うち」. Everyone else is 「そと」. It shapes how people talk, especially in this lesson's next stop, honorific language. You speak humbly about the inside, and respectfully to the outside." }
  ],
  "あと|後": [
    { tag: "Real-life Japanese", explain: "「あと」 has several handy jobs. The rest, 「あとは明日やります」, I'll do the rest tomorrow. Remaining, 「あと五分|あとごふん」, five more minutes. And after, 「授業の後で|じゅぎょうのあとで」, after class. And as a casual and also, 「あと、牛乳も買って」. And also, buy milk." },
    { tag: "Word family", explain: "This kanji has other readings. 「後ろ|うしろ」, behind. 「午後|ごご」, afternoon, after noon. 「最後|さいご」, the last. And 「後で|あとで」, later. Its opposite, 「前|まえ」, before or in front. So 「前」 and 「後」 are a pair for both space and time." }
  ],
  "ゆうがた|夕方": [
    { tag: "Don't mix it up", explain: "Japanese splits the end of day more finely. 「夕方|ゆうがた」 is late afternoon to dusk, roughly when the sun sets. 「晩|ばん」 and 「夜|よる」 are evening and night after dark. So 「夕方」 is sunset time. And 「夕ご飯|ゆうごはん」 is dinner, the evening meal, same as 「晩ご飯」." },
    { tag: "Culture corner", explain: "Many Japanese towns play a chime or song through loudspeakers in the 「夕方」, often around five. It tells kids it's time to go home. One common tune is 「夕焼け小焼け|ゆうやけこやけ」, about the sunset. 「夕焼け」 is the red sky at sunset, a beautiful word." }
  ],
  "あかるい|明るい": [
    { tag: "Word family", explain: "「明るい」 is used for people too. 「明るい人|あかるいひと」 is a cheerful, upbeat person. A big compliment. And 「明るい色|あかるいいろ」, a bright color. The kanji also shows up as 「明日|あした」, tomorrow, and 「説明|せつめい」, explanation. Brightness everywhere." },
    { tag: "Real-life Japanese", explain: "Lesson eighteen's 「〜ば」, if. 「カーテンを開ければ、明るくなりますよ」. If you open the curtains, it'll get brighter. Notice 「明るくなる」, to become bright, with the い dropped and 「く」 added. And the opposite, 「暗い|くらい」, is also in this lesson." }
  ],
  "くらい|暗い": [
    { tag: "Don't mix it up", explain: "Careful! 「暗い|くらい」, dark, sounds like 「ぐらい」 or 「くらい」, about, approximately. 「三時間くらい」, about three hours. Context tells them apart. And just like 「明るい」, 「暗い人|くらいひと」 is a gloomy person. So bright and dark work for moods in both languages." },
    { tag: "Real-life Japanese", explain: "「暗くなる前に帰りましょう|くらくなるまえにかえりましょう」. Let's go home before it gets dark. That's lesson seventeen's 「前に」 with dictionary form. And 「部屋が暗いから、電気をつけて」. The room is dark, turn on the light. That's this lesson's 「つける」." }
  ],
  "はずかしい|恥ずかしい": [
    { tag: "Real-life Japanese", explain: "This one is used constantly. Someone compliments you, 「はずかしい」, oh, stop it, I'm embarrassed. You trip in public, 「はずかしい！」 So embarrassing! And for shy feelings too. Japanese people say it in situations English speakers might not. It's a very natural, cute reaction." },
    { tag: "Word family", explain: "「恥|はじ」 alone means shame. Add 「〜がる」 to show someone else's feeling. 「はずかしがる」, to act shy. Then 「はずかしがり屋|はずかしがりや」, a shy person, which is in the next lesson. So learn one, get three. Ear plus heart, the ears burning red with shame." }
  ],
  "たいせつ|大切": [
    { tag: "Don't mix it up", explain: "Two words for important. 「大切|たいせつ」 is precious, something to treasure and take care of. 「大事|だいじ」 is very similar and interchangeable most of the time. 「重要|じゅうよう」 is more formal and logical, important as in significant. A friendship is 「大切」. A report deadline is 「重要」." },
    { tag: "Real-life Japanese", explain: "「大切にする」 means to take good care of, to cherish. 「この本を大切にします」. I'll treasure this book. And a lovely phrase when someone is sick, 「お大事に|おだいじに」, take care. That uses the cousin word. And 「大切な人」, someone precious to you." }
  ],
  "ふあん|不安": [
    { tag: "Word family", explain: "「不|ふ」 is the not prefix. Learn it, get many words. 「不便|ふべん」, inconvenient. 「不安|ふあん」, uneasy, not calm. 「不親切|ふしんせつ」, unkind. 「不可能|ふかのう」, impossible. And 「安|あん」 here means calm and safe, as in 「安心|あんしん」, relief. 「安心」 is the opposite of 「不安」." },
    { tag: "Real-life Japanese", explain: "「試験のことが不安です|しけんのことがふあんです」. I'm worried about the exam. And to reassure someone, 「大丈夫、心配しないで|だいじょうぶ、しんぱいしないで」. It's okay, don't worry. Note that 「心配|しんぱい」 is worrying about something, while 「不安」 is more a general uneasy feeling." }
  ],
  "むり|無理": [
    { tag: "Real-life Japanese", explain: "「無理|むり」 is a soft no in daily life. 「ちょっと無理です」. That's a bit impossible for me. And 「無理しないで」, don't push yourself, don't overdo it. That's a kind thing to say to a tired friend. Young people shout 「むりむり！」, no way! when something's too scary or gross." },
    { tag: "Word family", explain: "「無|む」 means nothing or without. 「無料|むりょう」, free of charge, no fee. You'll see it everywhere in shops. 「無駄|むだ」, waste, useless. 「無口|むくち」, quiet, no mouth. And 「理|り」 means reason or logic, as in 「料理|りょうり」. So impossible is literally without reason." }
  ],
  "あく|開く": [
    { tag: "Don't mix it up", explain: "Lesson eighteen's big idea. 「開ける|あける」, I open it, uses 「を」. 「開く|あく」, it opens, uses 「が」. 「ドアを開ける」, I open the door. 「ドアが開く」, the door opens. On the train you'll hear, 「ドアが開きます」, the doors will open. Nobody's opening them, they just open." },
    { tag: "Real-life Japanese", explain: "With 「〜ている」, it describes a state. 「窓が開いている|まどがあいている」. The window is open. And shops, 「店は十時に開きます」. The store opens at ten. Also, 「席が空いている|せきがあいている」, the seat is free, uses a different kanji but the same sound. Empty or open." }
  ],
  "しまる|閉まる": [
    { tag: "Real-life Japanese", explain: "Train announcement you'll hear a thousand times. 「ドアが閉まります。ご注意ください|ドアがしまります。ごちゅういください」. The doors are closing. Please be careful. And shops, 「この店は八時に閉まります」. This store closes at eight. 「を」 with 「閉める」, 「が」 with 「閉まる」." },
    { tag: "Memory hook", explain: "The kanji 「閉」 is a gate, 「門|もん」, with a bar inside, locking it shut. Its partner 「開」 is a gate with hands pushing it open. And the sound 「しまる」 is like the English shut. Shimaru, shut, closed. Same feel." }
  ],
  "あやまる|謝る": [
    { tag: "Real-life Japanese", explain: "「謝る|あやまる」 is the action of apologizing. 「友だちに謝りました」. I apologized to my friend. Notice 「に」. And with lesson eighteen's 「〜ばよかった」, I should have. 「早く謝ればよかった」. I should have apologized sooner. The words you actually say are 「ごめんなさい」 or 「すみません」." },
    { tag: "Word family", explain: "The kanji 「謝|しゃ」 also means thanks. 「感謝|かんしゃ」 is gratitude. 「感謝しています」, I'm grateful. So apology and thanks share a kanji. In Japanese culture they're close cousins. 「すみません」 itself is used both to apologize and to thank someone. Words that settle what you owe." }
  ],
  "おす|押す": [
    { tag: "Real-life Japanese", explain: "You'll see 「押」 on doors. 「押す|おす」, push. Its opposite is 「引く|ひく」, pull. Many Japanese doors say 「押」 or 「引」. And elevators, 「ボタンを押してください」, please press the button. And 「おしてもだめなら引いてみな」, if pushing doesn't work, try pulling. A saying about love and life." },
    { tag: "Culture corner", explain: "Rush hour in Tokyo is famous for 「押し屋|おしや」, station staff who used to push people into packed trains so the doors could close. It still happens on a few lines. And in English we say pushy. Japanese has 「押しが強い|おしがつよい」, strong push, for someone assertive." }
  ],
  "おとす|落とす": [
    { tag: "Don't mix it up", explain: "Partners again. 「落とす|おとす」, I drop it, with 「を」. 「落ちる|おちる」, it falls, with 「が」. 「財布を落としました|さいふをおとしました」. I dropped my wallet. Then, 「財布が落ちていました」. A wallet was lying on the ground. In Japan, someone usually takes it to the police box, the 「交番|こうばん」." },
    { tag: "Real-life Japanese", explain: "A useful phrase, 「落とし物|おとしもの」, a lost item. Lost and found offices at stations handle thousands of them. And 「化粧を落とす|けしょうをおとす」, to remove makeup. And 「スピードを落とす」, to slow down. Drop the speed. Many things can be dropped." }
  ],
  "おゆがわく|お湯が沸く": [
    { tag: "Don't mix it up", explain: "Last lesson, 「お湯を沸かす|おゆをわかす」, to boil water, you do it. This lesson, 「お湯が沸く|おゆがわく」, water boils, it happens. The kettle whistles, 「お湯が沸いた！」 The water's boiling! The same pair as 「落とす」 and 「落ちる」. Lesson eighteen is full of them." },
    { tag: "Word family", explain: "「沸く|わく」 also means to get excited. 「会場が沸いた|かいじょうがわいた」. The crowd went wild, the venue boiled. Just like English, the crowd heated up. And 「沸騰|ふっとう」 is the formal word for boiling, in science class." }
  ],
  "ころぶ|転ぶ": [
    { tag: "Real-life Japanese", explain: "「転ぶ|ころぶ」 is falling over, tripping, while walking or running. 「雪の上で転んだ|ゆきのうえでころんだ」. I fell on the snow. A Boulder winter sentence. And caring, 「転ばないように気をつけて」. Be careful not to fall. And a famous saying, 「転ばぬ先の杖|ころばぬさきのつえ」. A cane before you fall, better safe than sorry." },
    { tag: "Word family", explain: "With its Chinese reading 「てん」, this kanji means to turn or roll. 「自転車|じてんしゃ」, bicycle, self-turning vehicle. 「運転|うんてん」, driving. 「転勤|てんきん」, being transferred to another office. And 「ころころ」 is the sound of something rolling. Cute and easy." }
  ],
  "こわす|壊す": [
    { tag: "Don't mix it up", explain: "Partner time. 「壊す|こわす」, I break it, with 「を」. 「壊れる|こわれる」, it breaks, with 「が」. Japanese often prefers the second one, even when you broke it. 「パソコンが壊れちゃった」. My computer broke. Sounds less like it's your fault. Very handy." },
    { tag: "Real-life Japanese", explain: "「おなかを壊す」 means to get an upset stomach, literally break your stomach. 「冷たいものを食べすぎて、おなかを壊した」. I ate too much cold stuff and upset my stomach. And 「体を壊す|からだをこわす」 means to ruin your health, from overwork." }
  ],
  "さく|咲く": [
    { tag: "Real-life Japanese", explain: "Flowers 「咲く」, bloom. 「花が咲いている」, flowers are blooming. And a nice set phrase, 「話に花が咲く|はなしにはながさく」, a conversation blooms, meaning people get really into talking. And for exam results, students say 「サクラサク」, the cherry blossoms bloomed, meaning I passed!" },
    { tag: "Memory hook", explain: "The kanji has 「口|くち」, mouth, on the left. In old Chinese, the character meant to laugh or smile. A flower opening is like a smiling mouth. So when you see 「咲」, picture a flower laughing open. And 「さく」 sounds like 「さくら」. Cherry blossoms bloom." }
  ],
  "たすかる|助かる": [
    { tag: "Real-life Japanese", explain: "The phrase to know is 「助かります」 or 「助かった」. It means that really helps, you saved me. When someone does you a favor, 「本当に助かりました」. Thank you, that was a big help. It's often more natural than just thank you. And 「助けて！」 means help me!" },
    { tag: "Don't mix it up", explain: "Pair it with 「助ける|たすける」, to help or save someone. 「友だちを助ける」, to help a friend. 「助かる」, to be saved, to be helped. So 「彼が助けてくれたので、助かりました」. He helped me, so I was saved. One you do, one that happens to you." }
  ],
  "たのむ|頼む": [
    { tag: "Real-life Japanese", explain: "「頼む|たのむ」 has two common uses. To ask a favor, 「友だちに頼みました」. And to order food, 「何を頼む？」, what are you going to order? And men often say 「頼む！」 alone to mean please, I'm begging you! And 「お願い|おねがい」 is the softer version." },
    { tag: "Word family", explain: "「頼る|たよる」 means to rely on. 「頼りになる|たよりになる」, reliable, someone you can count on. A great compliment. And 「頼もしい|たのもしい」, dependable. So 「頼む」 is to ask someone you rely on. Ask, rely, and dependable, all one kanji." }
  ],
  "つく|": [
    { tag: "Don't mix it up", explain: "「つける」, to turn on, with 「を」. 「つく」, it comes on, with 「が」. 「電気がついている」, the light is on. And there are many other 「つく」 verbs. 「着く|つく」, to arrive. 「付く|つく」, to be attached. And 「つく」 for a lie, 「うそをつく」, to tell a lie. Context is key." },
    { tag: "Real-life Japanese", explain: "Lesson eighteen's 「〜ている」 for states, with 「つく」. 「電気がついたままです」. The light has been left on. Or a scary one, 「誰もいないのに、テレビがついている」. Nobody's here, but the TV is on. Perfect for a ghost story." }
  ],
  "よごす|汚す": [
    { tag: "Don't mix it up", explain: "The kanji 「汚」 has several readings. 「きたない」, dirty, an adjective. 「よごす」, to make dirty. 「よごれる」, to get dirty. Same kanji, three words. 「服を汚さないで|ふくをよごさないで」. Don't get your clothes dirty. Moms everywhere say that." },
    { tag: "Real-life Japanese", explain: "Lesson eighteen's 「〜てしまう」. 「借りた本を汚してしまった|かりたほんをよごしてしまった」. I accidentally got the book I borrowed dirty. Then you need 「謝る|あやまる」 from this lesson. The whole lesson is basically a story of accidents." }
  ],
  "おちる|落ちる": [
    { tag: "Real-life Japanese", explain: "「落ちる」 isn't only for falling objects. 「試験に落ちる」 is to fail an exam. 「大学に落ちる」, to not get into a college. Students are careful not to say 「落ちる」 near people taking exams. It's bad luck. And 「恋に落ちる|こいにおちる」, to fall in love. Same as English." },
    { tag: "Word family", explain: "「落ち着く|おちつく」 means to calm down, to settle. 「落ち着いて」, calm down. And 「落ち込む|おちこむ」 from lesson sixteen, to feel down. And 「落とす」 from this lesson. So falling, failing, settling down, and feeling down, all with one kanji." }
  ],
  "かたづける|片付ける": [
    { tag: "Real-life Japanese", explain: "Lesson eighteen's 「〜ておく」, in advance. 「友だちが来る前に、部屋を片付けておきます」. Before my friends come, I'll tidy my room. And 「片付けなさい」, tidy up, a parent's command. The noun is 「片付け|かたづけ」, tidying, as in 「片付けが苦手|かたづけがにがて」, bad at tidying." },
    { tag: "Culture corner", explain: "Japan's most famous tidier, Marie Kondo, wrote about 「片付け|かたづけ」, and her method spread worldwide. The idea, keep only what sparks joy, 「ときめく」. In Japan, people also do a big year-end cleaning, 「大掃除|おおそうじ」, in late December, to start the New Year fresh." }
  ],
  "かんがえる|考える": [
    { tag: "Real-life Japanese", explain: "The polite way to not answer right away, 「ちょっと考えておきます」. I'll think about it. Using this lesson's 「〜ておく」. Careful, in Japan it often means no. And 「考えすぎ|かんがえすぎ」, overthinking. 「考えすぎだよ」, you're overthinking it." },
    { tag: "Don't mix it up", explain: "Japanese has 「思う|おもう」 and 「考える|かんがえる」. 「思う」 is a feeling or opinion, more instant. 「わたしもそう思う」, I think so too. 「考える」 is thinking it through, considering, using your brain. 「よく考えてください」, please think it over carefully. Feel versus think." }
  ],
  "きえる|消える": [
    { tag: "Don't mix it up", explain: "「消す|けす」, I turn it off, I erase it, with 「を」. 「消える|きえる」, it goes off, it disappears, with 「が」. 「電気が消えた」. The lights went out. 「消しゴム|けしゴム」, eraser, is a rubber that makes things disappear. Notice the readings, 「け」 and 「き」." },
    { tag: "Real-life Japanese", explain: "「消える」 also means to vanish. 「財布が消えた」. My wallet vanished. And a dramatic line, 「消えろ！」, get lost! disappear! Rough, you'll hear it in anime. And 「雪が消える」, the snow melts away. Spring in Boulder." }
  ],
  "こわれる|壊れる": [
    { tag: "Real-life Japanese", explain: "The everyday sentence, 「エアコンが壊れている|エアコンがこわれている」. The AC is broken. With 「〜ている」 for a state. And at a hotel, 「すみません、テレビが壊れているみたいです」. Excuse me, the TV seems to be broken. Very polite, nobody's blamed." },
    { tag: "Memory hook", explain: "The word 「こわい」, scary, sounds a lot like 「こわれる」. Picture your phone screen cracking. 「こわい！こわれた！」 Scary, it broke! The kanji 「壊」 has the earth part on the left. Picture a wall of earth crumbling, breaking down." }
  ],
  "よごれる|汚れる": [
    { tag: "Real-life Japanese", explain: "「よごれる」, to get dirty, by itself. 「シャツが汚れた|シャツがよごれた」, my shirt got dirty. And the noun 「汚れ|よごれ」, a stain. 「この汚れが落ちない」, this stain won't come out. Notice stains fall out, 「落ちる」, in Japanese." },
    { tag: "Word family", explain: "The full dirty family. 「汚い|きたない」, dirty. 「汚す|よごす」, to make dirty. 「汚れる|よごれる」, to become dirty. 「汚れ|よごれ」, a stain. And 「汚染|おせん」, pollution, the formal word in the news. One kanji, a whole cleaning closet." }
  ],
  "ちゅうもんする|注文する": [
    { tag: "Real-life Japanese", explain: "At restaurants, the server asks, 「ご注文はお決まりですか|ごちゅうもんはおきまりですか」. Have you decided on your order? Answer, 「はい、〜をお願いします」. And online shopping, 「ネットで注文しました」, I ordered it online. And 「注文の多い料理店|ちゅうもんのおおいりょうりてん」 is a famous Japanese children's story. The restaurant of many orders." },
    { tag: "Word family", explain: "「注|ちゅう」 means to pour or focus. 「注意|ちゅうい」, caution, pouring your attention. 「注射|ちゅうしゃ」, an injection, pouring in. And 「注文|ちゅうもん」, an order, focused writing. Now when the train says 「ご注意ください」, you'll know it's be careful." }
  ],
  "いますぐ|今すぐ": [
    { tag: "Real-life Japanese", explain: "「今すぐ来て！」 Come right now! And in ads, 「今すぐ申し込み|いますぐもうしこみ」, apply now! And the classic exchange. Parent, 「今すぐ片付けなさい」. Tidy up right now. Kid, 「あとで」. Later. You know both words now." },
    { tag: "Word family", explain: "「すぐ」 alone means immediately or soon. 「すぐ行きます」, I'll go right away. And for distance, 「駅のすぐ近く」, very close to the station. And 「すぐに」 works too. So 「今すぐ」 is now, immediately, the strongest version." }
  ],
  "〜までに|": [
    { tag: "Don't mix it up", explain: "This trips up everyone. 「まで」 is until, a continuous action. 「五時まで勉強する」. I'll study until five. 「までに」 is by, a deadline. 「五時までに帰る」. I'll be home by five. The tiny 「に」 changes everything. Until five, keep going. By five, finish." },
    { tag: "Real-life Japanese", explain: "Teachers say it all the time. 「金曜日までに宿題を出してください」. Please hand in your homework by Friday. And lesson sixteen's 「今日中に|きょうじゅうに」, by the end of today, is a close cousin. Deadlines, Japanese style." }
  ],
  "ほんとうに|本当に": [
    { tag: "Real-life Japanese", explain: "「本当に」 boosts thanks and apologies. 「本当にありがとうございました」. Thank you so much. 「本当にすみません」. I'm really sorry. And 「ほんと？」, really?, is the casual reaction. Young people even say 「マジ？」, which is slang for the same thing." },
    { tag: "Word family", explain: "「本|ほん」 here means origin or true. 「本物|ほんもの」, the real thing, genuine. 「本気|ほんき」, serious, for real, as in 「本気で言ってる？」, are you serious? And 「本当は|ほんとうは」, actually, in reality, is in the next lesson. And 「うそ」, lie, is the opposite." }
  ],
  "まず|": [
    { tag: "Real-life Japanese", explain: "「まず」 starts a list of steps. 「まず、お湯を沸かします。それから、お茶をいれます」. First, boil water. Then make the tea. And a list goes 「まず」, 「次に|つぎに」, 「それから」, and 「最後に|さいごに」. First, next, then, finally. Perfect for explaining anything." },
    { tag: "Don't mix it up", explain: "Don't confuse 「まず」, first of all, with 「まずい」, bad tasting, gross. 「まずい！」 means this tastes awful, or uh oh, we're in trouble. One letter makes a big difference. 「まず、食べてみて」, first, try it. Then hopefully not 「まずい」." }
  ],
  "おかげで|": [
    { tag: "Real-life Japanese", explain: "The famous phrase, 「おかげさまで」. Thanks to you. When someone asks how you're doing, 「おかげさまで、元気です」. I'm fine, thanks to you. Even if they did nothing. It's a polite habit. And 「先生のおかげで、合格しました」. Thanks to you, teacher, I passed." },
    { tag: "Don't mix it up", explain: "「おかげで」 is for good results. For bad results, use 「せいで」. 「雨のせいで、試合が中止になった」. Because of the rain, the game was canceled. So 「おかげ」 thanks someone, 「せい」 blames them. Use 「おかげ」 sarcastically and it bites." }
  ],
  "どうしよう|": [
    { tag: "Real-life Japanese", explain: "This is the panic phrase. You lost your wallet, missed the last train, broke a friend's camera. 「どうしよう…」 What do I do? And polite, 「どうしましょうか」, what shall we do? When planning. And 「どうしようかな」, I wonder what I should do. Thinking out loud with 「かな」." },
    { tag: "Word family", explain: "It's 「どう」 plus 「しよう」, the let's form of 「する」. So literally, how shall I do? You'll also hear 「どうしようもない」, it can't be helped, hopeless. And 「しょうがない」, it can't be helped, which is a very Japanese way to accept bad luck." }
  ],
  "〜だろう|": [
    { tag: "Real-life Japanese", explain: "「だろう」 is mostly in casual guy speech or in writing. 「あしたは雨だろう」. It'll probably rain tomorrow. And with rising tone, 「だろう？」 means right? isn't it? Often shortened to 「だろ？」. Women and polite speakers usually say 「でしょう」 or 「でしょ」." },
    { tag: "Word family", explain: "Lesson eighteen pairs it with 「〜かな」, wondering. And the polite form 「でしょう」. And in writing, novels and news use 「だろう」 for guesses. 「この問題はむずかしいだろう」. This problem is probably hard. So you'll see it a lot in reading, even if you don't say it." }
  ],
  "おさきにしつれいします|お先に失礼します": [
    { tag: "Culture corner", explain: "In Japanese workplaces, leaving before others feels a little rude, so you say 「お先に失礼します」. Excuse me for leaving first. The others answer 「お疲れさまでした|おつかれさまでした」. You must be tired, good work. That's the classic office exchange, every single day." },
    { tag: "Real-life Japanese", explain: "Among friends, shorten it to 「お先に|おさきに」. And people also say 「お先にどうぞ」, please go ahead of me, at doors and elevators. So 「先|さき」 is ahead. You go ahead, I'll go ahead. Very handy little word." }
  ],
  "おつかれさま|お疲れ様": [
    { tag: "Real-life Japanese", explain: "This is the all-purpose work greeting. At the end of the day, 「お疲れさまでした」. In the hallway, 「お疲れさまです」, as a hello. After class, after a game, after any effort. Even messages often start with it. Friends shorten it to 「おつかれ」 or even 「おつ」." },
    { tag: "Don't mix it up", explain: "There's a similar phrase, 「ご苦労さま|ごくろうさま」, thanks for your hard work. But careful, that one is said from a superior to someone lower. So don't say it to your boss or teacher. 「お疲れさま」 is safe for everyone, which is why it's everywhere." }
  ]
});
/* Lesson 19 — extra mini-lessons */
Object.assign(window.VOCAB_LESSONS, {
  "おくさま|奥様": [
    { tag: "Culture corner", explain: "The kanji 「奥|おく」 means the deep inside of a house. In old times, the wife of a samurai household lived in the inner rooms, so she was the one in the back. Today, many people find that idea old-fashioned, and some prefer 「パートナー」 or 「つれあい」. But 「奥様|おくさま」 is still the polite word in business and shops." },
    { tag: "Don't mix it up", explain: "The wife ladder. 「奥様|おくさま」, someone's wife, very polite. 「奥さん|おくさん」, someone's wife, normal polite. 「妻|つま」, my wife, humble and neutral. 「家内|かない」, my wife, older style. And casual, 「うちの嫁|うちのよめ」, my wife. Never use 「奥様」 for your own wife." }
  ],
  "おこさん|お子さん": [
    { tag: "Don't mix it up", explain: "Like most family words, there's a humble set and a polite set. Your own child is 「子ども|こども」 or 「息子|むすこ」, son, and 「娘|むすめ」, daughter. Someone else's child is 「お子さん|おこさん」, or 「息子さん」 and 「娘さん」. Add 「さん」 for other people, drop it for your own." },
    { tag: "Real-life Japanese", explain: "A natural polite question. 「お子さんはいらっしゃいますか」. Do you have children? Notice 「いらっしゃる」, the honorific for 「いる」, from this lesson. And 「お子さんはおいくつですか」, how old is your child? Two keigo words working together." }
  ],
  "ちゅうがくせい|中学生": [
    { tag: "Word family", explain: "Japanese school levels. 「小学生|しょうがくせい」, elementary student, small learning. 「中学生|ちゅうがくせい」, junior high, middle learning. 「高校生|こうこうせい」, high schooler. 「大学生|だいがくせい」, college student. And the schools are 「小学校」, 「中学校」, 「高校」, 「大学」. Small, middle, high, big." },
    { tag: "Culture corner", explain: "Japanese junior high is grades seven to nine, and it's the last level of compulsory education. Students wear uniforms, join after-school clubs, called 「部活|ぶかつ」, and study hard for the high school entrance exam, 「高校受験|こうこうじゅけん」. Club life is a huge part of growing up in Japan." }
  ],
  "ぶちょう|部長": [
    { tag: "Word family", explain: "「長|ちょう」 means the head or chief. 「社長|しゃちょう」, company president. 「部長|ぶちょう」, department head. 「課長|かちょう」, section chief, one level down. 「校長|こうちょう」, school principal. And 「市長|しちょう」, mayor. Everyone with 「長」 is the boss of something." },
    { tag: "Culture corner", explain: "In Japan you often call people by their title instead of their name. 「部長、お疲れさまです」. Good work, manager. Not 「部長さん」 inside your own company, since the title itself is respectful. And in a school club, the club captain is also called 「部長|ぶちょう」, so it's in every anime about clubs." }
  ],
  "しゅっちょう|出張": [
    { tag: "Real-life Japanese", explain: "「出張に行く|しゅっちょうにいく」, to go on a business trip. And keigo, 「部長は大阪に出張していらっしゃいます」. The manager is on a business trip to Osaka. And the classic souvenir rule, after a business trip, you bring back snacks for the office, 「おみやげ」. Everyone expects them." },
    { tag: "Memory hook", explain: "「出|しゅつ」 is to go out, and 「張|ちょう」 is to stretch. So stretching out from the office. And notice 「しゅつ」 shrinks to 「しゅっ」, the small 「ッ」, before 「ちょう」. That's the same trick as 「出発|しゅっぱつ」, departure. Hear it, shoo! You're shooed off on a trip." }
  ],
  "けいご|敬語": [
    { tag: "Word family", explain: "There are three kinds of 「敬語|けいご」. 「尊敬語|そんけいご」, respectful language, raises the other person. That's this lesson. 「謙譲語|けんじょうご」, humble language, lowers yourself. That's next lesson. And 「丁寧語|ていねいご」, polite language, the 「です」 and 「ます」 you already use." },
    { tag: "Culture corner", explain: "Even native speakers struggle with 「敬語」. New employees in Japan often get training on it, and there are best-selling books about using it correctly. A common mistake is using too much, called double keigo. So don't worry if it feels hard. Japanese people feel it too." }
  ],
  "こちら|": [
    { tag: "Real-life Japanese", explain: "「こちら」 does many polite jobs. This way, 「こちらへどうぞ」, this way, please. This person, 「こちらは田中さんです」, this is Mr. Tanaka. This thing, 「こちらでよろしいですか」, will this one be all right? And me or my side, 「こちらこそ」, the pleasure is mine." },
    { tag: "Word family", explain: "The polite こそあど set. 「こちら」, this way. 「そちら」, that way, near you. 「あちら」, over there. 「どちら」, which way, where. Casual versions are 「こっち」, 「そっち」, 「あっち」, 「どっち」. Shops and hotels use the long ones, friends use the short ones." }
  ],
  "どちら|": [
    { tag: "Real-life Japanese", explain: "The polite way to ask where. 「お国はどちらですか|おくにはどちらですか」. Where are you from? Much softer than 「どこ」. And on the phone, 「どちら様ですか|どちらさまですか」, who is calling, please? Literally, which honored person. Very common." },
    { tag: "Don't mix it up", explain: "「どちら」 has two meanings. Which of two, 「コーヒーと紅茶、どちらがいいですか」, coffee or tea, which do you prefer? And polite where, 「どちらにお住まいですか」, where do you live? The context tells you if it's choosing or locating." }
  ],
  "おれい|お礼": [
    { tag: "Real-life Japanese", explain: "「お礼を言う|おれいをいう」, to say thank you. And 「お礼に」, as thanks. 「お礼にケーキを持ってきました」. I brought a cake as thanks. In Japan, a small gift is a common way to show thanks. And in letters, 「お礼のメール」 is a thank-you email." },
    { tag: "Word family", explain: "「礼|れい」 is courtesy, and it's everywhere. 「失礼|しつれい」, rude, losing courtesy. 「礼金|れいきん」, key money from lesson eighteen. 「朝礼|ちょうれい」, a morning assembly at schools and offices. And 「起立、礼|きりつ、れい」. Stand, bow. What students do at the start of class." }
  ],
  "しゅるい|種類": [
    { tag: "Real-life Japanese", explain: "Ask how many kinds. 「何種類ありますか|なんしゅるいありますか」. How many kinds are there? It works as a counter, 「三種類|さんしゅるい」, three kinds. And at a shop, 「いろいろな種類があります」. There are all sorts. Japanese convenience stores have endless 「種類」 of onigiri." },
    { tag: "Word family", explain: "「種|しゅ」 means seed, and with its native reading, 「種|たね」, it's an actual seed. So kinds are like seeds of different plants. 「人種|じんしゅ」, race. And 「類|るい」 means group, as in 「人類|じんるい」, humankind, and 「書類|しょるい」, documents, a group of papers." }
  ],
  "はなし|話": [
    { tag: "Real-life Japanese", explain: "「話|はなし」 is a talk, a story, or a topic. 「おもしろい話」, a funny story. 「話がある」, I need to talk to you, which sounds serious. And 「昔話|むかしばなし」, folk tales, like Momotaro. Notice 「はなし」 becomes 「ばなし」 there, rendaku again." },
    { tag: "Word family", explain: "「電話|でんわ」, telephone, electric talk. 「会話|かいわ」, conversation. 「話題|わだい」, a topic. 「世話|せわ」, care, as in 「お世話になります」, thank you for looking after me. And the honorific to say is 「おっしゃる」, also in this lesson. So lots of ways to talk." }
  ],
  "なやみ|悩み": [
    { tag: "Real-life Japanese", explain: "Lesson nineteen has a classic advice-column theme. 「悩みがあるんですが…」. I have something on my mind. And 「何か悩みがあったら、相談してね」. If anything's bothering you, talk to me. 「相談|そうだん」 is consulting or talking it over. Japanese magazines have pages called 「悩み相談」." },
    { tag: "Memory hook", explain: "The kanji 「悩」 has the heart part on the left, and on the right, a picture of a brain, hair on top of a head. Heart and brain tangled up together. That's worrying. You'll see the same right side in 「脳|のう」, the brain. Worry is heart plus brain." }
  ],
  "まちがい|間違い": [
    { tag: "Real-life Japanese", explain: "「間違い電話|まちがいでんわ」 is a wrong-number call. 「すみません、間違えました」. Sorry, wrong number. And class, 「間違いを直してください」, please correct the mistakes. That's lesson sixteen's 「直す|なおす」. And 「間違いない」, no doubt about it, for sure." },
    { tag: "Don't mix it up", explain: "Two verbs. 「間違える|まちがえる」, to make a mistake, you did it. 「間違う|まちがう」, to be wrong. Both fine in most cases. And the noun is 「間違い」. A common learner trap, 「ちがう」 is different or wrong, while 「まちがい」 is specifically an error. So 「答えが違う」, the answer is wrong." }
  ],
  "せいかく|性格": [
    { tag: "Real-life Japanese", explain: "Lesson nineteen talks about personalities. 「どんな性格ですか」. What kind of personality do they have? 「性格がいい」, good-natured. 「明るい性格」, a cheerful personality, using lesson eighteen's 「明るい」. And 「性格が合う」, our personalities fit, we get along." },
    { tag: "Don't mix it up", explain: "Careful, 「せいかく」 has a sound-alike, 「正確|せいかく」, accurate or exact. 「正確な時間|せいかくなじかん」, the exact time. And 「性格」 is personality. Same sound, different kanji. And Japanese blood-type personality talk is popular. People ask 「血液型は？|けつえきがたは？」 to guess your 「性格」." }
  ],
  "なまけもの|怠け者": [
    { tag: "Memory hook", explain: "Here's a great one. The sloth, the animal, is also called 「ナマケモノ」 in Japanese. Literally lazy one. So picture a sloth hanging from a tree, refusing to do homework. That's a 「なまけもの」. One word, two meanings, perfect picture." },
    { tag: "Word family", explain: "The ending 「者|もの」 means person. 「怠け者|なまけもの」, a lazy person. 「若者|わかもの」, young people. 「人気者|にんきもの」, a popular person. And with its Chinese reading 「しゃ」, 「学者|がくしゃ」, a scholar, and 「医者|いしゃ」, a doctor." }
  ],
  "はずかしがりや|恥ずかしがり屋": [
    { tag: "Word family", explain: "The ending 「屋|や」 usually means a shop. 「本屋|ほんや」, bookstore. 「花屋|はなや」, florist. But it also means a person with a certain habit. 「はずかしがり屋」, a shy person. 「寂しがり屋|さびしがりや」, someone who gets lonely easily. 「がんばり屋」, a hard worker. A person who's a shop of that feeling." },
    { tag: "Real-life Japanese", explain: "「うちの子ははずかしがり屋で…」. My kid is shy, so... Parents say that when the child hides behind them. And it's often said kindly, not as a flaw. Pair it with lesson nineteen's 「お子さん」. 「お子さんははずかしがり屋ですね」. Your child is a bit shy, isn't he?" }
  ],
  "なかがいい|仲がいい": [
    { tag: "Real-life Japanese", explain: "「AとBは仲がいい」. A and B get along well. 「わたしたちは仲がいいです」. We're close. And the opposite, 「仲が悪い|なかがわるい」, they don't get along. And 「仲良し|なかよし」 is a close pair, a best buddy. Kids say 「仲良くしてね」, play nicely together." },
    { tag: "Word family", explain: "「仲|なか」 is relationship. 「仲間|なかま」, companions, friends on a team. That's a huge word in anime, the crew, the gang. 「仲直り|なかなおり」, making up after a fight, using 「直る」, to be fixed. So you fix the relationship." }
  ],
  "まじめ|": [
    { tag: "Real-life Japanese", explain: "「まじめ」 is mostly a compliment, hardworking and serious. 「まじめな学生」, a diligent student. But it can also mean boring or uptight, depending on tone. And the slang 「マジ」, seriously?, comes from 「まじめ」. 「マジで？」. For real? Young people say it constantly." },
    { tag: "Don't mix it up", explain: "「まじめ」 is a な adjective. 「まじめな人」. Not 「まじめい」. And it's different from 「深刻|しんこく」, serious as in grave, a serious problem. 「まじめ」 is about people's attitude. So a 「まじめな人」 is diligent, while a 「深刻な問題」 is a serious problem." }
  ],
  "いらっしゃる|": [
    { tag: "Real-life Japanese", explain: "You already know its most famous form, 「いらっしゃいませ」, welcome, from every shop. That's this verb! And 「いらっしゃい」 at home, come in. And questions, 「先生は研究室にいらっしゃいますか」. Is the professor in the office? Very useful for visiting offices." },
    { tag: "Don't mix it up", explain: "「いらっしゃる」 is a u-verb, but its masu form is irregular. It becomes 「いらっしゃいます」, not 「いらっしゃります」. The same quirk happens with 「くださる」, 「なさる」, and 「おっしゃる」. All four go 「〜います」. Learn them as a group and you'll never slip." }
  ],
  "めしあがる|召し上がる": [
    { tag: "Real-life Japanese", explain: "The most useful sentence, offering food. 「どうぞ、召し上がってください」. Please, go ahead and eat. Hosts say it all the time. And asking, 「何を召し上がりますか」, what will you have? Your answer uses the humble form, 「いただきます」. Respect them, humble yourself." },
    { tag: "Word family", explain: "「召す|めす」 is an old honorific verb, for things a noble person does, like wearing or eating. And 「上がる|あがる」 means to go up. So their eating is lifted up. You'll also see 「お気に召す|おきにめす」, to be pleased with, in fancy shops. 「お気に召しましたか」. Was it to your liking?" }
  ],
  "くださる|下さる": [
    { tag: "Real-life Japanese", explain: "You use this all the time without knowing. 「ください」, please give me, comes from 「くださる」. So every 「〜てください」 is already honorific. And with lesson nineteen, 「先生が本をくださいました」. The teacher gave me a book. Much more respectful than 「くれました」." },
    { tag: "Memory hook", explain: "The kanji 「下|くだ」 means down. Someone above you hands something down to you. That's why it's honorific. The giver is up high. And its humble partner, 「いただく」, receiving, is like lifting something up above your head to accept it gratefully." }
  ],
  "なさる|": [
    { tag: "Real-life Japanese", explain: "「なさる」 replaces 「する」 for respected people. 「何になさいますか」. What would you like? Literally, what will you make it? Restaurants say it. And 「ゴルフをなさいますか」, do you play golf? And of course, every 「〜する」 verb works. 「部長が説明なさいました」. The manager explained." },
    { tag: "Word family", explain: "Like its friends, the masu form is 「なさいます」. And a polite command, 「なさい」. Wait, that's familiar! 「勉強しなさい」, study! That parental 「〜なさい」 comes from this very verb. So when your mom says 「早く寝なさい」, she's technically using honorific grammar." }
  ],
  "おやすみになる|お休みになる": [
    { tag: "Real-life Japanese", explain: "You know 「おやすみなさい」, good night. That's the same 「お休み」. And this honorific, 「先生はもうお休みになりました」. The teacher has already gone to bed. In a hotel, staff might say 「ごゆっくりお休みください」, please rest well. Very polite." },
    { tag: "Word family", explain: "Lesson nineteen's pattern. 「お」 plus a verb stem plus 「になる」 makes most verbs honorific. 「お読みになる|およみになる」, to read. 「お待ちになる|おまちになる」, to wait. 「お休みになる」, to sleep or rest. Learn the pattern, and you can make honorifics for almost any verb." }
  ],
  "ごらんになる|ご覧になる": [
    { tag: "Real-life Japanese", explain: "Hear this at museums and on TV. 「こちらをご覧ください」. Please look at this. A tour guide favorite. And 「その映画をご覧になりましたか」. Have you seen the movie? And TV, 「ご覧のスポンサーの提供でお送りしました」. Brought to you by the sponsors you see. On every show." },
    { tag: "Word family", explain: "「覧|らん」 has 「見|み」, see, at the bottom. You'll see it in 「展覧会|てんらんかい」, an exhibition, and 「観覧車|かんらんしゃ」, a Ferris wheel. A wheel for viewing! Great memory picture. And 「回覧板|かいらんばん」, a neighborhood notice board that gets passed house to house." }
  ],
  "おっしゃる|": [
    { tag: "Real-life Japanese", explain: "「先生がおっしゃったように…」. As the teacher said. And useful in class, 「もう一度おっしゃってください」. Could you say that once more? And 「おっしゃる通りです|おっしゃるとおりです」. You're absolutely right. Business people say that a lot." },
    { tag: "Don't mix it up", explain: "Watch out for 「いう」 forms. 「言う|いう」, plain. 「おっしゃる」, honorific, for others. 「申す|もうす」, humble, for yourself. 「田中と申します」. I'm called Tanaka. That's next lesson. So never 「わたしはおっしゃいました」. Never raise yourself." }
  ],
  "〜ていらっしゃる|": [
    { tag: "Real-life Japanese", explain: "Replace 「〜ている」 with 「〜ていらっしゃる」 for respected people. 「先生は今、何をしていらっしゃいますか」. What is the teacher doing now? And 「結婚していらっしゃいますか」. Are you married? Or 「どこに住んでいらっしゃいますか」. Where do you live?" },
    { tag: "Word family", explain: "You'll hear it shortened to 「〜てらっしゃる」 in speech. 「何してらっしゃるんですか」. And remember, since 「いらっしゃる」 means 「いる」, 「〜ていらっしゃる」 is just the honorific 「いる」 after the te form. One rule, many verbs. Even the boss's 「疲れていらっしゃる」, seems tired." }
  ],
  "おくる|送る": [
    { tag: "Real-life Japanese", explain: "This lesson's meaning, to walk or drive someone. 「駅まで送りましょうか」. Shall I take you to the station? And the reverse of lesson sixteen's 「迎えに行く」, to go pick up. 「送り迎え|おくりむかえ」, drop off and pick up, is what parents do every day." },
    { tag: "Word family", explain: "「送る」 also means to send. 「メールを送る」, to send an email. 「荷物を送る|にもつをおくる」, to ship a package. And 「見送る|みおくる」, to see someone off at the airport. 「放送|ほうそう」, broadcast, sending out. And 「送別会|そうべつかい」, a farewell party." }
  ],
  "おこる|怒る": [
    { tag: "Don't mix it up", explain: "Careful, 「おこる」 also sounds like 「起こる|おこる」, to happen. 「事故が起こった|じこがおこった」, an accident happened. And 「怒る」, to get angry. The kanji 「怒」 has a heart at the bottom. And in Japanese, 「怒る」 also means to scold. 「先生に怒られた」. I got scolded by my teacher." },
    { tag: "Real-life Japanese", explain: "「怒らないで」. Don't be angry. And the passive, which you'll learn soon, 「母に怒られた」, I got scolded by my mom. A super common sentence. And 「怒っている」 for the state, someone is angry. 「彼女、怒ってる？」 Is she mad? A very important question." }
  ],
  "きまる|決まる": [
    { tag: "Don't mix it up", explain: "Another pair. 「決める|きめる」, to decide, I do it, with 「を」. 「決まる|きまる」, it gets decided, with 「が」. 「旅行の日が決まった」. The trip date has been decided. Japanese often prefers 「決まる」, because it sounds like a group decision, less about who chose." },
    { tag: "Real-life Japanese", explain: "A great phrase, 「決まり|きまり」, a rule. 「それがこの寮の決まりです」. That's the rule of this dorm. And 「決まってる」, it's obvious, of course. 「好きに決まってるじゃん」. Of course I like it! And at a restaurant, 「お決まりですか」, have you decided?" }
  ],
  "しりあう|知り合う": [
    { tag: "Real-life Japanese", explain: "「どこで知り合ったんですか」. Where did you two meet? A classic question for couples. And 「大学で知り合いました」. We met at college. And the noun, 「知り合い|しりあい」, an acquaintance. Less close than a 「友だち」. 「ちょっとした知り合いです」. Just an acquaintance." },
    { tag: "Word family", explain: "「〜合う|〜あう」 after a verb stem means doing it to each other. 「知り合う」, to know each other. 「話し合う|はなしあう」, to discuss. 「助け合う|たすけあう」, to help each other. 「付き合う|つきあう」, to go out with, to date. One ending, lots of mutual verbs." }
  ],
  "よぶ|呼ぶ": [
    { tag: "Real-life Japanese", explain: "「呼ぶ」 has several uses. Call a name, 「名前を呼ぶ」. Invite, 「パーティーに友だちを呼ぶ」. And call for, 「タクシーを呼んでください」. Please call a taxi. And an emergency, 「救急車を呼んで！|きゅうきゅうしゃをよんで！」 Call an ambulance! Good to know." },
    { tag: "Memory hook", explain: "The left side is 「口|くち」, mouth. You call with your mouth. And 「よぶ」, imagine shouting yo! Boo! to call your friend across the street. And 「呼び捨て|よびすて」, calling someone by their name without 「さん」. That's only okay with close friends." }
  ],
  "ひっこす|引っ越す": [
    { tag: "Culture corner", explain: "When you move in Japan, it's polite to visit your new neighbors with a small gift, often towels or snacks, and say 「よろしくお願いします」. Some people give 「引っ越しそば|ひっこしそば」, moving soba noodles. And spring, March and April, is moving season, when school and work years start." },
    { tag: "Word family", explain: "The noun is 「引っ越し|ひっこし」, moving. 「引っ越しの準備|ひっこしのじゅんび」, moving preparations. 「引く|ひく」 is to pull, and 「越す|こす」 is to cross over. So you pull your life across. And 「引っ越し屋|ひっこしや」, a moving company, with that 「屋」 again." }
  ],
  "よる|寄る": [
    { tag: "Real-life Japanese", explain: "「帰りにコンビニに寄る」. I'll stop by the convenience store on my way home. Notice 「に」, you stop by into a place. And inviting, 「ちょっと寄っていきませんか」. Won't you stop by for a bit? And it shows up in 「お年寄り|おとしより」, the elderly, people who have gathered years." },
    { tag: "Don't mix it up", explain: "Three 「よる」 words! 「夜|よる」, night. 「寄る|よる」, to stop by. And 「〜による」, depending on, according to, from lesson seventeen. Context tells you which. 「夜、友だちの家に寄った」. At night, I stopped by my friend's house. Two in one sentence." }
  ],
  "おくれる|遅れる": [
    { tag: "Real-life Japanese", explain: "「遅れてすみません」. Sorry I'm late. The most useful apology. And 「電車が遅れている」, the train is running late. In Japan, if a train is late, stations hand out 「遅延証明書|ちえんしょうめいしょ」, a delay certificate, to prove to your boss or school it wasn't your fault." },
    { tag: "Don't mix it up", explain: "「遅れる|おくれる」, to be late for something. 「遅い|おそい」, slow or late, an adjective. 「遅刻|ちこく」, being late to school or work, a noun. 「遅刻する」 is very common for school. 「また遅刻？」 Late again? And lesson sixteen's 「乗り遅れる」, to miss a ride." }
  ],
  "かける|": [
    { tag: "Real-life Japanese", explain: "Polite invitation to sit, 「どうぞ、おかけください」. Please have a seat. Very common at offices and interviews. Much more polite than 「すわってください」. And this is the same 「かける」 as glasses, calls, and locks. Sitting is hanging yourself on a chair." },
    { tag: "Word family", explain: "Your full 「かける」 collection now. 「めがねをかける」, glasses. 「電話をかける」, a call. 「かぎをかける」, lock. 「アイロンをかける」, iron. 「迷惑をかける」, cause trouble. 「おかけください」, sit. And 「しょうゆをかける」, pour soy sauce on. A true Swiss army verb." }
  ],
  "もてる|": [
    { tag: "Real-life Japanese", explain: "「彼はもてる」. He's popular with the ladies. And 「もてたい」, I want to be popular. And the noun, 「モテ」, used in magazines. 「モテる男」, a guy who gets attention. And 「モテ期|モテき」, a period in your life when you're suddenly popular. Everyone hopes theirs is coming." },
    { tag: "Memory hook", explain: "「もてる」 comes from 「持てる|もてる」, can hold. So people hold you up, they can't let go. Picture someone carried on shoulders by admirers. And it's often written in katakana, 「モテる」, for a flashy look. Use it casually, not with your boss." }
  ],
  "はれる|晴れる": [
    { tag: "Real-life Japanese", explain: "「あした晴れるといいですね」. I hope it's sunny tomorrow. Lesson sixteen's 「〜といい」. And 「晴れの日|はれのひ」, a sunny day, also means a big special day, like a wedding. And 「気が晴れる|きがはれる」, to feel refreshed, your mood clears up. Same as English, clear skies inside." },
    { tag: "Culture corner", explain: "Japanese kids make 「てるてる坊主|てるてるぼうず」, little white cloth dolls, and hang them in windows to wish for sunny weather. Hang one before a school trip or sports day. Turn it upside down, and it supposedly brings rain. And 「晴れ男|はれおとこ」 is a guy who always brings good weather." }
  ],
  "ごちそうする|": [
    { tag: "Real-life Japanese", explain: "「きょうはわたしがごちそうします」. Today it's my treat. Politer than lesson sixteen's casual 「おごる」. And keigo, 「部長がごちそうしてくださいました」. The manager treated us. Then the next day, say 「昨日はごちそうさまでした」. Thanks for yesterday's meal." },
    { tag: "Memory hook", explain: "「ちそう」 originally meant running around. 「馳走|ちそう」. The host ran here and there to gather good food for guests. So 「ごちそう」 is a feast someone worked hard for. And that's why you say 「ごちそうさまでした」. Thank you for all that running around." }
  ],
  "えんりょする|遠慮する": [
    { tag: "Culture corner", explain: "「遠慮|えんりょ」 is a key Japanese value, holding back out of consideration for others. Guests often decline the first offer of food. Hosts say 「遠慮しないでください」, please don't hold back. And on signs, 「おたばこはご遠慮ください」 means please refrain from smoking. A very polite no." },
    { tag: "Real-life Japanese", explain: "「遠慮しておきます」. I'll pass, thanks. A soft way to decline. And 「遠慮なく|えんりょなく」, without holding back. 「では、遠慮なくいただきます」. Well then, I'll help myself. That's what you say after the host insists twice. The dance of politeness." }
  ],
  "しょうたいする|招待する": [
    { tag: "Real-life Japanese", explain: "「パーティーに招待してくれてありがとう」. Thanks for inviting me to the party. And keigo, 「先生を結婚式に招待しました」. We invited our teacher to the wedding. And 「招待状|しょうたいじょう」, invitation letter, with lesson sixteen's 「状」." },
    { tag: "Don't mix it up", explain: "Two invite words. 「招待する|しょうたいする」 is formal, an official invitation. 「誘う|さそう」 is casual, asking someone to come along. 「映画に誘う|えいがにさそう」, to ask someone to a movie. And 「呼ぶ|よぶ」, also from this lesson, can mean to invite over. 「友だちを家に呼ぶ」." }
  ],
  "はなしをする|話をする": [
    { tag: "Real-life Japanese", explain: "「話をする」 is to have a talk, a little more serious than 「話す」. 「部長と話をしました」. I had a talk with the manager. And 「ちょっと話をしてもいいですか」. May I talk with you for a moment? That's how you start a serious conversation." },
    { tag: "Don't mix it up", explain: "「話す」 is to speak, the act. 「日本語を話す」, to speak Japanese. 「話をする」 is to have a conversation or tell a story. 「おもしろい話をした」, told a funny story. And notice the particle, 「と」 for with whom. 「友だちと話をした」, I talked with a friend." }
  ],
  "おととい|": [
    { tag: "Word family", explain: "Here's the day timeline. 「おととい」, the day before yesterday. 「きのう」, yesterday. 「きょう」, today. 「あした」, tomorrow. 「あさって」, the day after tomorrow. And years too, 「おととし」, the year before last. Notice 「おととい」 and 「おととし」, day and year." },
    { tag: "Memory hook", explain: "「おととい」 comes from 「おと」, meaning far, and 「ひ」, day. A day further back. A sound hook, picture 「おとうと」, your little brother, being late. He was supposed to come yesterday, but no, he came the day before yesterday." }
  ],
  "まいあさ|毎朝": [
    { tag: "Word family", explain: "「毎|まい」 means every. 「毎日|まいにち」, every day. 「毎朝|まいあさ」, every morning. 「毎晩|まいばん」, every night. 「毎週|まいしゅう」, every week. 「毎月|まいつき」, every month. 「毎年|まいとし」, every year. And notice no particle is needed after them. 「毎朝走ります」. I run every morning." },
    { tag: "Real-life Japanese", explain: "Lesson nineteen's honorific practice. 「先生は毎朝、何を召し上がりますか」. What do you eat every morning, teacher? And a casual version, 「毎朝、コーヒーを飲む」. I drink coffee every morning. And notice 「朝|あさ」 here is native, while in 「朝食|ちょうしょく」, breakfast, it's 「ちょう」." }
  ],
  "それで|": [
    { tag: "Real-life Japanese", explain: "「それで」 is how you keep a story going. 「それで？」, and then? Tell me more! It shows you're listening. And as a cause, 「雨が降った。それで、試合が中止になった」. It rained. So the game was canceled. You'll hear 「で？」 as a casual short form." },
    { tag: "Don't mix it up", explain: "Connector family. 「それで」, and so, as a result. 「それから」, and then, after that. 「だから」, therefore, so, stronger. 「でも」, but. 「それに」, besides, on top of that. Knowing these makes your speech flow. Try 「それで」 to ask 「and then?」 in your next conversation." }
  ],
  "なぜ|": [
    { tag: "Don't mix it up", explain: "Three whys. 「なぜ」, a bit formal or written. 「どうして」, standard, also softer and more emotional. 「なんで」, casual, very common in speech. So in a paper, 「なぜ」. Asking a friend, 「なんで？」. And a child whining, 「どうして？」 Why?" },
    { tag: "Real-life Japanese", explain: "「なぜかというと〜」, the reason is. 「日本が好きです。なぜかというと、食べ物がおいしいからです」. I like Japan. The reason is, the food is delicious. Great for essays. And 「なぜか」, for some reason. 「なぜか眠い」. For some reason, I'm sleepy." }
  ],
  "ほんとうは|本当は": [
    { tag: "Real-life Japanese", explain: "「本当は」 reveals the truth behind something. 「本当は行きたくなかった」. To be honest, I didn't want to go. And 「本当はね…」, actually, you know... before a confession. Compare 「実は|じつは」 from lesson sixteen. 「実は」 introduces news. 「本当は」 contrasts with what seemed true." },
    { tag: "Word family", explain: "You now have a truth family. 「本当|ほんとう」, true. 「本当に」, really. 「本当は」, actually, in truth. 「ほんと？」, really? casual. And 「本物|ほんもの」, the real thing. And the opposite, 「うそ」, a lie, which Japanese people also say as 「うそ！」, no way!" }
  ],
  "まだ|": [
    { tag: "Real-life Japanese", explain: "「まだ」 with a negative, not yet. 「まだ食べていません」. I haven't eaten yet. Notice the 「〜ていない」. Not 「食べませんでした」. And the answer to have you finished? 「まだです」. Not yet. And the modest reply to praise, 「まだまだです」, I've still got a long way to go." },
    { tag: "Don't mix it up", explain: "「まだ」 is still or not yet. 「もう」 is already or anymore. 「もう食べた？」 Did you eat already? 「ううん、まだ」. Nope, not yet. And 「まだ雨が降っている」, it's still raining. 「もう雨はやんだ」, the rain already stopped. A matched pair." }
  ],
  "しょうしょう|少々": [
    { tag: "Real-life Japanese", explain: "The phrase you'll hear on every phone call to a company. 「少々お待ちください|しょうしょうおまちください」. Please wait a moment. It's the polite version of 「ちょっと待ってください」. And in recipes, 「塩少々|しおしょうしょう」, a pinch of salt. A little bit." },
    { tag: "Memory hook", explain: "The second mark, 「々」, isn't a kanji. It's a repeat mark. It means say the last kanji again. 「少々」 is 「少少」. Same in 「人々|ひとびと」, people, 「時々|ときどき」, sometimes, and 「色々|いろいろ」, various. So when you see 「々」, double it." }
  ],
  "〜めいさま|〜名様": [
    { tag: "Real-life Japanese", explain: "Restaurant staff greet you with 「何名様ですか|なんめいさまですか」. How many in your party? Answer with a number and 「です」. 「二人です|ふたりです」, two. You don't use 「名様」 for yourself, that's for the staff. Then, 「二名様ご案内します」, party of two, please follow me." },
    { tag: "Word family", explain: "「名|めい」 counts people in a formal way. 「名前|なまえ」, name, uses the same kanji. And 「様|さま」 is the very polite 「さん」. So 「三名様」 is three honored people. You'll also see 「〜名」 alone in documents, like 「定員三十名|ていいんさんじゅうめい」, capacity thirty people." }
  ],
  "ようこそ|": [
    { tag: "Real-life Japanese", explain: "「ようこそ」 welcomes someone to a place. 「日本へようこそ」. Welcome to Japan. Or 「ようこそいらっしゃいました」, very polite, you have come! Using this lesson's 「いらっしゃる」. Compare shops' 「いらっしゃいませ」, used for customers, every time anyone walks in." },
    { tag: "Memory hook", explain: "It comes from 「よく」, well, plus 「こそ」, an emphasis word. So, you have come so well! And a sound hook. Yo! Come so! Picture a host waving you in, yo, come so far! Welcome. Plus you already know 「こそ」 from 「こちらこそ」, the pleasure is mine." }
  ],
  "よろしくおつたえください|よろしくお伝えください": [
    { tag: "Real-life Japanese", explain: "Put the person first with 「に」. 「ご家族によろしくお伝えください」. Please give my regards to your family. And casually, 「お母さんによろしく」. Say hi to your mom. And the reply, 「はい、伝えます」. Yes, I'll pass it on." },
    { tag: "Word family", explain: "「伝える|つたえる」 means to pass on a message or tell. 「伝言|でんごん」, a message left for someone. And 「手伝う|てつだう」, to help, hand passing. And 「伝統|でんとう」, tradition, something passed down. So regards, help, and tradition all travel with one kanji." }
  ]
});
