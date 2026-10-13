/* =======================================================================
   story_2.js — Story time, story 2: ウメさん、大学生になる (Grandma Ume Goes to College)
   Goal: use at least 90% of the vocab from lessons 1–15.
   Sentence markup (see stories/README.md):
     [かばん]  [自転車|じてんしゃ]  [食べました|たべました|たべる]  {駅前|えきまえ}
   Check it with:  node stories/check-story.js stories/story_2.js
   ======================================================================= */
window.GENKI_STORIES = window.GENKI_STORIES || {};
window.GENKI_STORIES[2] = {
  title: "ウメさん、大学生になる",
  titleEn: "Grandma Ume Goes to College",
  lessons: [1,15],
  goal: 90,
  chapters: [
    { title: "はじめまして、ウメさん", titleEn: "Nice to Meet You, Ume",
      paragraphs: [
        [
          ["[今日|きょう]は[大学|だいがく]の[一日目|いちにちめ]だった。", "Today was the first day of college."],
          ["ダイキは[大学|だいがく]の{二年生|にねんせい}で、[専攻|せんこう]は[けいざい]だった。", "Daiki was a second-year college student, and his major was economics."],
          ["でも、[けいざい]は[あまり][わからなかった|わからなかった|わかる]。", "But he didn't really understand economics."],
          ["だから、{去年|きょねん}の[ぶんがく]の[授業|じゅぎょう]を[もう一度|もういちど][取っていた|とっていた|取る]。", "So he was taking last year's literature class one more time."],
          ["その[朝|あさ]も、ダイキは[遅く|おそく]まで[寝ていた|ねていた|寝る]。", "That morning, too, Daiki slept until late."],
          ["[時計|とけい]を[見た|みた|見る]。", "He looked at the clock."],
          ["[ごぜん]{九時|くじ}[はん]だった。", "It was nine-thirty a.m."],
          ["ダイキは[急いで|いそいで|急ぐ][自転車|じてんしゃ][で|で|〜で][大学|だいがく]に[行った|いった|行く]。", "Daiki hurried to the university by bicycle."]
        ],
        [
          ["ダイキは[教室|きょうしつ]の[ドア]を[開けた|あけた|開ける]。", "Daiki opened the classroom door."],
          ["[教室|きょうしつ]には[学生|がくせい]が[二十人|にじゅうにん|〜にん][ぐらい|ぐらい|〜ぐらい][いた|いた|いる]。", "There were about twenty students in the classroom."],
          ["[こくばん]の{前|まえ}に、[小さい|ちいさい][おばあさん]が[立っていた|たっていた|立つ]。", "A small old woman was standing in front of the blackboard."],
          ["[おばあさん]は[こくばん]に[大きく|おおきく|大きい]「ウメ」と[書いた|かいた|書く]。", "The old woman wrote \"Ume\" in big letters on the blackboard."],
          ["[学生|がくせい][たち|たち|〜たち]は「あの[人|ひと]は[先生|せんせい]だ」と[思った|おもった|思う]。", "The students thought, \"That person is the teacher.\""],
          ["でも、ダイキは「えっ……」と[言った|いった|言う]。", "But Daiki said, \"Huh...?\""],
          ["その[人|ひと]は、ダイキの[おばあさん]だった。", "That person was Daiki's grandmother."]
        ],
        [
          ["ウメさんは{八十歳|はちじゅっさい}で、{去年|きょねん}まで[宇宙飛行士|うちゅうひこうし]だった。", "Ume was eighty years old, and until last year she had been an astronaut."],
          ["[先週|せんしゅう]、{宇宙|うちゅう}から[帰ってきた|かえってきた|帰る]。", "She came back from space just last week."],
          ["[一人|ひとり]の[学生|がくせい]が[聞いた|きいた|聞く]。", "One student asked a question."],
          ["「すみません、[先生|せんせい]の[なまえ]は[なん]ですか。」", "\"Excuse me, what is your name, teacher?\""],
          ["「ウメです。でも、[わたし]は[先生|せんせい]じゃありません。[学生|がくせい]です。」", "\"I'm Ume. But I'm not the teacher. I'm a student.\""],
          ["「ええっ！」", "\"Whaaat?!\""],
          ["[教室|きょうしつ]が[静かに|しずかに|静か][なった|なった|なる]。", "The classroom went quiet."],
          ["その[とき]、ほんとうの[先生|せんせい]が[入ってきた|はいってきた|入る]。", "Just then, the real teacher came in."]
        ],
        [
          ["[先生|せんせい]は[言った|いった|言う]。「じゃあ、[一人|ひとり]ずつ、[なまえ]と[国|くに]と[専攻|せんこう]を[話して|はなして|話す]ください。」", "The teacher said, \"All right, one at a time, please tell us your name, your country, and your major.\""],
          ["はじめに、[留学生|りゅうがくせい]の[女の人|おんなのひと]が[立った|たった|立つ]。", "First, a young woman who was an international student stood up."],
          ["「はじめまして。リサです。[アメリカ]から[来ました|きました|来る]。」", "\"Nice to meet you. I'm Lisa. I came from America.\""],
          ["「{一年生|いちねんせい}で、[専攻|せんこう]は[にほんご]です。[将来|しょうらい]、[ジャーナリスト]に[なりたい|なりたい|なる]です。よろしくおねがいします。」", "\"I'm a first-year, and my major is Japanese. In the future, I want to become a journalist. Nice to meet you all.\""],
          ["[次|つぎ]の[学生|がくせい]は[イギリス]から[来た|きた|来る][留学生|りゅうがくせい]で、[専攻|せんこう]は[れきし]だった。", "The next student was an international student from Britain, and his major was history."],
          ["[オーストラリア]の[学生|がくせい]は[かがく]、[かんこく]の[学生|がくせい]は[コンピューター]、[ちゅうごく]の[学生|がくせい]は[ビジネス]だった。", "The student from Australia studied science, the one from Korea studied computers, and the one from China studied business."],
          ["[だいがくいんせい]も[一人|ひとり][いた|いた|いる]。[専攻|せんこう]は[せいじ]だった。", "There was also one graduate student. Her major was politics."],
          ["ダイキの[友だち|ともだち]のタロウも[立った|たった|立つ]。", "Daiki's friend Taro stood up too."],
          ["「タロウです。[専攻|せんこう]は[けいざい]です。ダイキと[同じ|おなじ]で、この[クラス]は{二回目|にかいめ}です。」", "\"I'm Taro. My major is economics. Same as Daiki, this is my second time taking this class.\""]
        ],
        [
          ["{最後|さいご}に、ウメさんが[立った|たった|立つ]。", "Last of all, Ume stood up."],
          ["「ウメです。[にほんじん]です。[日本|にほん]から[来ました|きました|来る]。……いいえ、{宇宙|うちゅう}から[来ました|きました|来る]。」", "\"I'm Ume. I'm Japanese. I came from Japan... no, I came from space.\""],
          ["「[こうこう]は{六十年前|ろくじゅうねんまえ}に[卒業しました|そつぎょうしました|卒業する]。[専攻|せんこう]は[ぶんがく]です。」", "\"I graduated from high school sixty years ago. My major is literature.\""],
          ["「[五十年|ごじゅうねん|〜ねん]、{宇宙|うちゅう}で[えいご]を[話していました|はなしていました|話す]から、[にほんご]は[ちょっと][下手|へた]です。」", "\"I spoke English in space for fifty years, so my Japanese is a little rusty.\""],
          ["「[しごと]は[宇宙飛行士|うちゅうひこうし]でした。[いま]は[大学生|だいがくせい]です。」", "\"My job was astronaut. Now I'm a college student.\""],
          ["「[電話|でんわ][ばんごう]は、ゼロきゅうゼロの、いちにさんよんの、ごろくななはちです。」", "\"My phone number is 090-1234-5678.\""],
          ["「それから、[あそこ]にいるのは[わたし]の{孫|まご}のダイキです。」", "\"Also, the one sitting over there is my grandson, Daiki.\""],
          ["[学生|がくせい][たち|たち|〜たち]はダイキを[見た|みた|見る]。", "The students all looked at Daiki."],
          ["ダイキは[ノート]を[顔|かお]の{前|まえ}に[持った|もった|持つ]。", "Daiki held his notebook up in front of his face."]
        ],
        [
          ["[授業|じゅぎょう]の[後|あと]で、ウメさんは[大きい|おおきい][かばん]を[机|つくえ]の{上|うえ}においた。", "After class, Ume put a big bag on the desk."],
          ["リサが[聞いた|きいた|聞く]。「ウメさん、[それ]は[なん]ですか。」", "Lisa asked, \"Ume, what is that?\""],
          ["「[これ]ですか。{宇宙|うちゅう}の[ペン]です。さかさまでも[書けます|かけます|書く]よ。」", "\"This? It's a space pen. It can write even upside down.\""],
          ["「[これ]は{宇宙|うちゅう}の[けしゴム]です。[えんぴつ]も[ペン]も[消せます|けせます|消す]。」", "\"This is a space eraser. It can erase both pencil and pen.\""],
          ["[かばん]の{中|なか}には、[古い|ふるい][ビデオ]の[テープ]も[あった|あった|ある]。", "In the bag there was also an old video tape."],
          ["「[それ]は{月|つき}で[撮りました|とりました|撮る]。」", "\"I filmed that on the moon.\""],
          ["[本|ほん]も[一冊|いっさつ|〜さつ][あった|あった|ある]。{宇宙人|うちゅうじん}の[言葉|ことば]の[じしょ]だった。", "There was also a book. It was a dictionary of the aliens' language."],
          ["リサは「[すごい]！」と[言った|いった|言う]。", "Lisa said, \"Amazing!\""]
        ],
        [
          ["それから、ウメさんは{窓|まど}の{外|そと}を[見て|みて|見る]、「[あれ]も[わたし]のです。」と[言った|いった|言う]。", "Then Ume looked out the window and said, \"That over there is mine too.\""],
          ["[あそこ]に、ぎんいろの{宇宙|うちゅう}の[自転車|じてんしゃ]が[あった|あった|ある]。", "Over there was a silver space bicycle."],
          ["「[おばあさん]、[日本|にほん]のものは[ない|ない|ある]の？」とダイキが[聞いた|きいた|聞く]。", "\"Grandma, don't you have anything from Japan?\" Daiki asked."],
          ["「[ありません|ありません|ある]。だから、[今日|きょう][買い物|かいもの]に[行きます|いきます|行く]。」", "\"No. So I'm going shopping today.\""]
        ],
        [
          ["[三人|さんにん|〜にん]は[大学|だいがく]の[店|みせ]に[行った|いった|行く]。", "The three of them went to the university store."],
          ["ウメさんは[傘|かさ]を[持って|もって|持つ]、「[これ]はいくらですか。」と[聞いた|きいた|聞く]。", "Ume picked up an umbrella and asked, \"How much is this?\""],
          ["[店|みせ]の[人|ひと]は「{三千円|さんぜんえん}です。」と[言った|いった|言う]。", "The clerk said, \"It's three thousand yen.\""],
          ["「[たかい]ですね。{宇宙|うちゅう}では[雨|あめ]が[降りません|ふりません|降る]から、[傘|かさ]は[いりませんでした|いりませんでした|いる]。」", "\"That's expensive. In space it doesn't rain, so I never needed an umbrella.\""],
          ["でも、ウメさんは[傘|かさ]と[靴|くつ]を[買った|かった|買う]。", "But Ume bought the umbrella and some shoes anyway."],
          ["[帽子|ぼうし]も{三つ|みっつ}[かぶって|かぶって|かぶる]、「[どれ]がいいですか。」と[聞いた|きいた|聞く]。", "She also tried on three hats and asked, \"Which one is good?\""],
          ["リサは「[それ]が[素敵|すてき]です！」と[言った|いった|言う]。", "Lisa said, \"That one is lovely!\""],
          ["ウメさんは[ジーンズ]と、[大学|だいがく]の[なまえ]がある[トレーナー]も[買った|かった|買う]。", "Ume also bought jeans and a sweatshirt with the university's name on it."]
        ],
        [
          ["{最後|さいご}に、ウメさんは[カーテン]を[持ってきた|もってきた|持ってくる]。", "Finally, Ume brought over a curtain."],
          ["「[部屋|へや]は[まだ][ない|ない|ある][けど|けど|〜けど]、[カーテン]は[いります|いります|いる]。」", "\"I don't have a room yet, but I need a curtain.\""],
          ["ウメさんは{宇宙|うちゅう}の[財布|さいふ]をだした。", "Ume took out her space wallet."],
          ["でも、[財布|さいふ]の{中|なか}の[お金|おかね]は、[全部|ぜんぶ]{月|つき}の[お金|おかね]だった。", "But the money in the wallet was all moon money."],
          ["だから、ダイキが[払った|はらった|払う]。", "So Daiki paid."],
          ["ダイキの[財布|さいふ]は[すぐ]{空|から}に[なった|なった|なる]。", "Daiki's wallet was empty in no time."]
        ],
        [
          ["[ごご]{十二時|じゅうにじ}[はん]に、[三人|さんにん|〜にん]は[食堂|しょくどう]に[入った|はいった|入る]。", "At twelve-thirty p.m., the three of them went into the cafeteria."],
          ["ウメさんは[メニュー]を[見て|みて|見る]、「[とんかつ]を{三つ|みっつ}ください。」と[言った|いった|言う]。", "Ume looked at the menu and said, \"Three pork cutlets, please.\""],
          ["「[一人|ひとり][で|で|〜で]{三つ|みっつ}？」とダイキが[聞いた|きいた|聞く]。", "\"Three, all by yourself?\" Daiki asked."],
          ["「{宇宙|うちゅう}の[ご飯|ごはん]は[全然|ぜんぜん][おいしくなかった|おいしくなかった|おいしい]から。」", "\"Because the food in space wasn't tasty at all.\""],
          ["リサは[魚|さかな]と[野菜|やさい]を、ダイキは[にく]の[カレー]を[食べた|たべた|食べる]。", "Lisa ate fish and vegetables, and Daiki ate meat curry."],
          ["ウメさんは[とんかつ]を[全部|ぜんぶ][食べて|たべて|食べる]、[新聞|しんぶん]を[読んだ|よんだ|読む]。", "Ume ate every one of her pork cutlets, then read the newspaper."]
        ],
        [
          ["[新聞|しんぶん]には[大きい|おおきい][写真|しゃしん]が[あった|あった|ある]。", "There was a big photo in the newspaper."],
          ["「あれ？[これ]は[だれ]ですか。」とリサが[聞いた|きいた|聞く]。", "\"Huh? Who is this?\" Lisa asked."],
          ["「[わたし]です。」とウメさんは[静かに|しずかに|静か][言った|いった|言う]。", "\"That's me,\" Ume said calmly."],
          ["「ウメさんは[有名|ゆうめい]なんですね！[わたし]の[おにいさん]も[いもうと]も、[アメリカ]でウメさんの[ビデオ]を[見ました|みました|見る]。」", "\"You're famous, Ume! My older brother and my younger sister both watched your videos in America.\""],
          ["「[いもうと]さんは[こうこうせい]ですか。」", "\"Is your younger sister a high school student?\""],
          ["「はい。[おにいさん]は[べんごし]です。」", "\"Yes. And my older brother is a lawyer.\""],
          ["ウメさんは「[わたし]の[おとうと]は{七十八歳|ななじゅうはっさい}ですが、[いま]も[元気|げんき]に[しごと]をしています。」と[言った|いった|言う]。", "Ume said, \"My younger brother is seventy-eight, but he's still working hard.\""],
          ["ダイキは[小さい|ちいさい]こえで[言った|いった|言う]。「[僕|ぼく]の[おとうさん]は[かいしゃいん]で、[おかあさん]は[しゅふ]で、[おねえさん]は[銀行|ぎんこう]で[働いている|はたらいている|働く]。[家族|かぞく]はみんなふつうだよ……。」", "Daiki said quietly, \"My dad's an office worker, my mom's a housewife, and my older sister works at a bank. My family is totally normal...\""]
        ],
        [
          ["[食べた|たべた|食べる][後|あと]で、ウメさんは[立った|たった|立つ]。", "After eating, Ume stood up."],
          ["「すみません、[おてあらい]は[どこ]ですか。」", "\"Excuse me, where is the restroom?\""],
          ["「[あそこ]だよ。」とダイキが[言った|いった|言う]。", "\"Over there,\" Daiki said."],
          ["[帰ってきた|かえってきた|帰る]ウメさんは「[日本|にほん]の[おてあらい]は[便利|べんり]ですね。{宇宙|うちゅう}のは[大変|たいへん]でした。」と[言った|いった|言う]。", "When she came back, Ume said, \"Japanese restrooms are so convenient. The ones in space were a real pain.\""]
        ],
        [
          ["でも、リサは[ちょっと][元気がなかった|げんきがなかった|元気がない]。", "But Lisa looked a little down."],
          ["「どうしたの？」とウメさんが[聞いた|きいた|聞く]。", "\"What's wrong?\" Ume asked."],
          ["「[わたし]は[小さい|ちいさい][アパート]に[住んでいます|すんでいます|住む]。でも、[ルームメイト]が[いません|いません|いる]。」", "\"I live in a small apartment. But I don't have a roommate.\""],
          ["「[部屋|へや]がひとつあいていて、[一人|ひとり][で|で|〜で]は[ちょっと]さびしいです。」", "\"One room is empty, and it's a little lonely by myself.\""],
          ["ウメさんは[今日|きょう][買った|かった|買う][カーテン]を[持って|もって|持つ]、[言った|いった|言う]。", "Ume picked up the curtain she had bought that day and spoke."],
          ["「じゃあ、[わたし]が[ルームメイト]に[なります|なります|なる]。[カーテン]も[あります|あります|ある]よ。」", "\"Then I'll be your roommate. I even have a curtain.\""],
          ["「[机|つくえ]と[いす]は{宇宙|うちゅう}から[持ってきます|もってきます|持ってくる]。」", "\"I'll bring a desk and a chair from space.\""],
          ["リサは「[うれしい]！」と[言った|いった|言う]。", "Lisa said, \"I'm so happy!\""],
          ["ダイキは「[本当ですか|ほんとうですか|本当ですか]……」と[言って|いって|言う]、{頭|あたま}をかかえた。", "Daiki said, \"Seriously...?\" and held his head in his hands."]
        ],
        [
          ["こうして、ウメさんはリサの[ルームメイト]に[なった|なった|なる]。", "And so, Ume became Lisa's roommate."],
          ["「[明日|あした]は[ごぜん]{五時|ごじ}に[起きます|おきます|起きる]よ。」とウメさんが[言った|いった|言う]。", "\"Tomorrow we get up at five a.m.,\" Ume said."],
          ["「{五時|ごじ}？」とリサは[聞いた|きいた|聞く]。", "\"Five?\" Lisa asked."],
          ["ウメさんは[元気|げんき]に「はい！」と[言った|いった|言う]。", "Ume cheerfully said, \"Yes!\""]
        ]
      ] },
    { title: "ウメさんのまいにちとまち", titleEn: "Ume's Days and the Town",
      paragraphs: [
        [
          ["こうして、ウメさんはリサさんのルームメートになった。", "And so, Ume became Lisa's roommate."],
          ["[小さい|ちいさい]アパートで、ふたりの[毎日|まいにち]が{始まった|はじまった}。", "In the small apartment, the two of them began their everyday life."],
          ["ウメさんは[毎日|まいにち][五時ごろ|ごじごろ|〜ごろ][起きる|おきる|起きる]。", "Ume gets up at about five every day."],
          ["[朝|あさ]、まず[一時間|いちじかん][走って|はしって|走る]、[それから][コーヒー]を[飲む|のむ|飲む]。", "In the morning, she first runs for an hour, and then she drinks coffee."],
          ["[コーヒー]を[飲みながら|のみながら|飲む]、[新聞|しんぶん]を[読む|よむ|読む]。", "She reads the newspaper while drinking her coffee."],
          ["[朝ご飯|あさごはん]は[いつも][ご飯|ごはん][と|と|〜と][魚|さかな][と|と|〜と][おちゃ]だ。", "Breakfast is always rice, fish and green tea."]
        ],
        [
          ["リサさんは[たいてい][八時ごろ|はちじごろ|〜ごろ][起きる|おきる|起きる]。", "Lisa usually gets up at about eight."],
          ["リサさんの[朝ご飯|あさごはん]は[パン][と|と|〜と][水|みず]だけだった。", "Lisa's breakfast was just bread and water."],
          ["「リサさん、[あなた]も[ちょっと][食べて|たべて|食べる]。[おいしい]わよ」", "\"Lisa, you eat a little too. It's delicious.\""],
          ["「ありがとうございます。[でも]、{五時|ごじ}は[早すぎます|はやすぎます|早い]よ」", "\"Thank you. But five o'clock is way too early.\""],
          ["「[そうですね]。[でも]、うちゅうでは[毎日|まいにち]{四時|よじ}に[起きた|おきた|起きる]のよ」と、ウメさんは[静か|しずか|静か]に[言った|いった|言う]。", "\"That's true. But in space, I got up at four every day,\" Ume said calmly."]
        ],
        [
          ["ダイキさんはぜんぜんちがった。", "Daiki was completely different."],
          ["ダイキさんは[毎晩|まいばん][一人で|ひとりで][部屋|へや]に[いて|いて|いる]、{三時|さんじ}まで[ゲーム]を[する|する|する]。", "Every night Daiki stays alone in his room and plays games until three."],
          ["[だから]、[朝|あさ]は[全然|ぜんぜん][起きない|おきない|起きる]。", "So in the morning, he doesn't get up at all."],
          ["[月曜日|げつようび]の[朝|あさ]、ウメさんはダイキさんに[電話した|でんわした|電話する]。", "On Monday morning, Ume called Daiki."],
          ["「[もしもし]、ダイキ？[今日|きょう]は[クラス]が[ある|ある|ある]でしょう？」", "\"Hello, Daiki? You have class today, don't you?\""],
          ["「……おばあちゃん？[いま]、{何時|なんじ}？」", "\"...Grandma? What time is it?\""],
          ["「{五時|ごじ}よ。[早く|はやく|早い][起きて|おきて|起きる]」", "\"It's five. Get up early.\""],
          ["「[ごめんなさい]……もう[ちょっと][寝ます|ねます|寝る]……」", "\"Sorry... I'll sleep a little more...\""],
          ["ダイキさんは{昼|ひる}まで[寝た|ねた|寝る]。", "Daiki slept until noon."]
        ],
        [
          ["ウメさんは[学校|がっこう]で[よく][勉強した|べんきょうした|勉強する]。", "Ume studied hard at school."],
          ["[クラス]のあと、[図書館|としょかん]で[二時間|にじかん|〜じかん][ぶんがく]の[レポート]を[書いた|かいた|書く]。", "After class, she spent two hours at the library writing a literature paper."],
          ["[時々|ときどき]、[音楽|おんがく]を[聞きながら|ききながら|聞く][雑誌|ざっし]も[読んだ|よんだ|読む]。", "Sometimes she also read magazines while listening to music."],
          ["[スポーツ]の[雑誌|ざっし]が[大好き|だいすき]だった。", "She loved sports magazines."],
          ["[昼ご飯|ひるごはん]は[学校|がっこう]の[カフェ]で、[ハンバーガー]を[たくさん][食べた|たべた|食べる]。", "For lunch, she ate a lot of hamburgers at the school cafe."],
          ["[水曜日|すいようび]と[金曜日|きんようび]には、[学生|がくせい]たちと[テニス]を[した|した|する]。", "On Wednesdays and Fridays, she played tennis with the students."],
          ["わかい[学生|がくせい]たちはすぐ[疲れた|つかれた|疲れる]が、ウメさんは[全然|ぜんぜん][疲れなかった|つかれなかった|疲れる]。", "The young students got tired quickly, but Ume didn't get tired at all."]
        ],
        [
          ["[木曜日|もくようび]、ダイキさんは[図書館|としょかん]でウメさんに[会った|あった|会う]。", "On Thursday, Daiki ran into Ume at the library."],
          ["「ダイキ、[昨日|きのう]は[どうして][学校|がっこう]に[来なかった|こなかった|来る]の？」", "\"Daiki, why didn't you come to school yesterday?\""],
          ["「えっと……[ちょっと][忙しかった|いそがしかった|忙しい]んだ」", "\"Um... I was a little busy.\""],
          ["「[ゲーム]で？」と、ウメさんは[静か|しずか|静か]に[聞いた|きいた|聞く]。", "\"With games?\" Ume asked quietly."],
          ["ダイキさんは[何も|なにも][言わなかった|いわなかった|言う]。", "Daiki didn't say anything."]
        ],
        [
          ["その{晩|ばん}、リサさんが[聞いた|きいた|聞く]。", "That night, Lisa asked a question."],
          ["「ウメさん、[週末|しゅうまつ]は[いつも]{何|なに}を[します|します|する]か」", "\"Ume, what do you usually do on weekends?\""],
          ["「[そうですね]……[土曜日|どようび]は[町|まち]に[行きます|いきます|行く]。リサさんも[どうですか]」", "\"Let me see... On Saturday I'm going into town. How about you come too, Lisa?\""],
          ["「[ええ]、[いい]ですね！」", "\"Yes, that sounds great!\""],
          ["「[今晩|こんばん]、ダイキにも[電話する|でんわする|電話する]わ」", "\"I'll call Daiki tonight too.\""],
          ["[電話|でんわ]で、ダイキさんは「[土曜日|どようび]は[デート]が[ある|ある|ある]から……」と[言った|いった|言う]。", "On the phone, Daiki said, \"I have a date on Saturday, so...\""],
          ["[でも]、ほんとうは[デート]はなかった。", "But actually, there was no date."],
          ["「じゃあ、{十時|じゅうじ}に[バス停|バスてい]で[会いましょう|あいましょう|会う]」と、ウメさんは[言った|いった|言う]。", "\"Well then, let's meet at the bus stop at ten,\" Ume said."]
        ],
        [
          ["[土曜日|どようび]の[朝|あさ]、ウメさんとリサさんは[バス停|バスてい]で[待った|まった|待つ]。", "On Saturday morning, Ume and Lisa waited at the bus stop."],
          ["ダイキさんはなかなか[来なかった|こなかった|来る]。", "Daiki just didn't come."],
          ["ふたりは[一時間|いちじかん][ぐらい|ぐらい|〜ぐらい][待った|まった|待つ]。", "The two of them waited for about an hour."],
          ["やっと、ダイキさんが[走って|はしって|走る][来た|きた|来る]。", "Finally, Daiki came running."],
          ["「[ごめんなさい]！」", "\"I'm sorry!\""],
          ["「[いい]のよ。うちゅうでは、[よく][三日|みっか]ぐらい[待った|まった|待つ]わ」", "\"It's fine. In space, I often waited about three days.\""]
        ],
        [
          ["[町|まち]には[店|みせ]が[たくさん][あった|あった|ある]。", "There were lots of shops in town."],
          ["まず、{三人|さんにん}は[公園|こうえん]に[行った|いった|行く]。", "First, the three of them went to the park."],
          ["[公園|こうえん]には[きれい]な[花|はな]が[たくさん][あった|あった|ある]。", "There were lots of beautiful flowers in the park."],
          ["[子供|こども]たちが[犬|いぬ][と|と|〜と][遊んで|あそんで|遊ぶ]いた。", "Some children were playing with a dog."],
          ["その[時|とき]、[大きい|おおきい][猫|ねこ]が[来た|きた|来る]。", "Just then, a big cat came along."],
          ["[犬|いぬ]は[猫|ねこ]を[見て|みて|見る]、ワンワンとほえた。", "The dog saw the cat and barked, \"Woof woof!\""],
          ["ウメさんは[静か|しずか|静か]に「[座って|すわって|座る]」と[言った|いった|言う]。", "Ume calmly said, \"Sit.\""],
          ["[犬|いぬ]も[猫|ねこ]も、[すぐ][座った|すわった|座る]。", "Both the dog and the cat sat down right away."],
          ["[子供|こども]たちは「[すごい]！」と[言った|いった|言う]。", "The children said, \"Awesome!\""],
          ["ダイキさんははずかしかったが、[写真|しゃしん]を[撮った|とった|撮る]。", "Daiki was embarrassed, but he took a photo."]
        ],
        [
          ["[それから]、[古い|ふるい][お寺|おてら]に[行った|いった|行く]。", "After that, they went to an old temple."],
          ["リサさんは[お寺|おてら]の[写真|しゃしん]を[たくさん][撮った|とった|撮る]。", "Lisa took lots of photos of the temple."],
          ["[お寺|おてら]のとなりに、[小さい|ちいさい][喫茶店|きっさてん]が[あった|あった|ある]。", "Next to the temple there was a small coffee shop."],
          ["{三人|さんにん}はそこで[おちゃ]を[飲んで|のんで|飲む]、[ちょっと][休んだ|やすんだ|休む]。", "The three of them drank green tea there and rested a little."]
        ],
        [
          ["つぎに、ウメさんは[銀行|ぎんこう]で[お金|おかね]を{出して|だして}、[郵便局|ゆうびんきょく]に[行った|いった|行く]。", "Next, Ume took out money at the bank and went to the post office."],
          ["「うちゅうの[友だち|ともだち]に[手紙|てがみ]を[書いた|かいた|書く]の」", "\"I wrote a letter to my friends in space.\""],
          ["「えっ、うちゅうに？[郵便局|ゆうびんきょく]から？」と、ダイキさんは[聞いた|きいた|聞く]。", "\"What, to space? From the post office?\" Daiki asked."],
          ["[郵便局|ゆうびんきょく]の[人|ひと]も、[全然|ぜんぜん][わからなかった|わからなかった|わかる]。", "The person at the post office didn't understand at all either."]
        ],
        [
          ["[本屋|ほんや]で、ウメさんは[日本|にほん]のぶんがくの[本|ほん]を[五冊|ごさつ|〜さつ][買った|かった|買う]。", "At the bookstore, Ume bought five books of Japanese literature."],
          ["[デパート]では、リサさんと[買い物|かいもの]を[した|した|する]。", "At the department store, she went shopping with Lisa."],
          ["ダイキさんは[アイスクリーム]を[食べて|たべて|食べる]、ベンチに[座って|すわって|座る]いた。", "Daiki ate ice cream and sat on a bench."],
          ["「つぎは[どこ]に[行く|いく|行く]？[スーパー]？[レストラン]？」と、ウメさんが[聞いた|きいた|聞く]。", "\"Where should we go next? The supermarket? A restaurant?\" Ume asked."],
          ["「[病院|びょういん]……」と、ダイキさんは[言った|いった|言う]。", "\"The hospital...\" Daiki said."],
          ["「それか、あの[ホテル]で[寝たい|ねたい|寝る]……」", "\"Or I want to sleep at that hotel...\""]
        ],
        [
          ["そのとき、ウメさんは[カフェ]の[窓|まど]を[見た|みた|見る]。", "Just then, Ume looked at the window of a cafe."],
          ["[窓|まど]に「[アルバイト][募集|ぼしゅう]」と[書いて|かいて|書く][あった|あった|ある]。", "On the window was written, \"Part-time help wanted.\""],
          ["ウメさんはすぐ[カフェ]に[入って|はいって|入る]、「わたし、ここで[働きます|はたらきます|働く]」と[言った|いった|言う]。", "Ume immediately went into the cafe and said, \"I'll work here.\""],
          ["[店|みせ]の[人|ひと]はびっくりした。「えっ、[あなた]が？」", "The shop owner was surprised. \"What, you?\""],
          ["「[ええ]。[いつ]から[始めましょう|はじめましょう|始める]か」", "\"Yes. When shall I start?\""],
          ["[日曜日|にちようび]、ウメさんはその[カフェ]で[働いた|はたらいた|働く]。", "On Sunday, Ume worked at that cafe."],
          ["[コーヒー]を[十個|じゅっこ|〜こ]も[持って|もって|持つ]、[速く|はやく|はやく][歩いた|あるいた|歩く]。", "She carried as many as ten coffees and walked fast."],
          ["{お客さん|おきゃくさん}とよく[話して|はなして|話す]、みんな[うれしそう|うれしそう|うれしい]だった。", "She chatted a lot with the customers and everyone looked happy."],
          ["[店|みせ]の[人|ひと]は「[来週|らいしゅう]も[来て|きて|来る]ください！」と[言った|いった|言う]。", "The owner said, \"Please come next week too!\""]
        ],
        [
          ["その{晩|ばん}、ウメさんは[うち]に[帰った|かえった|帰る]。", "That night, Ume went back home."],
          ["リサさんと[家|いえ]で[晩ご飯|ばんごはん]を[食べて|たべて|食べる]、[テレビ]で[映画|えいが]を[見た|みた|見る]。", "She ate dinner at home with Lisa and watched a movie on TV."],
          ["「ウメさん、[お酒|おさけ]を[飲みませんか|のみませんか|飲む]」", "\"Ume, would you like a drink?\""],
          ["「[お酒|おさけ]は[あまり][飲まない|のまない|飲む]の。[明日|あした]も{五時|ごじ}に[起きる|おきる|起きる]から」", "\"I don't drink much. I'm getting up at five tomorrow too.\""],
          ["リサさんはカレンダーを[見て|みて|見る]、「あっ」と[言った|いった|言う]。", "Lisa looked at the calendar and said, \"Oh!\""],
          ["「[来週|らいしゅう]の[火曜日|かようび]は、わたしの[誕生日|たんじょうび]です！」", "\"Next Tuesday is my birthday!\""],
          ["「[どうして][先週|せんしゅう][言わなかった|いわなかった|言う]の？」と、ウメさんは[聞いた|きいた|聞く]。", "\"Why didn't you say so last week?\" Ume asked."],
          ["そして、ウメさんの[目|め]がきらりとひかった。", "And then, Ume's eyes sparkled."]
        ]
      ] },
    { title: "リサの誕生日と海", titleEn: "Lisa's Birthday at the Sea",
      paragraphs: [
        [
          ["[来週|らいしゅう]はリサの[誕生日|たんじょうび]だった。", "Next week was Lisa's birthday."],
          ["ウメさんとダイキは、ウメさんの[部屋|へや]で[静か|しずか]に[話した|はなした|話す]。", "Ume and Daiki talked quietly in Ume's room."],
          ["「リサさんは[どんな][プレゼント]が[好き|すき]かな。」とダイキが[言った|いった|言う]。", "\"I wonder what kind of present Lisa likes,\" Daiki said."],
          ["「リサさんは[海|うみ]が[大好き|だいすき]だよ。みんなで[海|うみ]に[旅行|りょこう]しよう。」とウメさんが[言った|いった|言う]。", "\"Lisa loves the sea. Let's all take a trip to the sea,\" Ume said."],
          ["「でも、[僕|ぼく]は[今週|こんしゅう]、[テスト]と[宿題|しゅくだい]で[すごく][忙しい|いそがしい]んだ。」", "\"But I'm extremely busy this week with tests and homework.\""],
          ["「[大丈夫|だいじょうぶ]。[土曜日|どようび]は[休み|やすみ]でしょう？[暇|ひま]だよね。」", "\"It's fine. Saturday is a day off, right? You're free.\""],
          ["ダイキはなにも[言えなかった|いえなかった|言う]。", "Daiki couldn't say anything."]
        ],
        [
          ["[土曜日|どようび]は[いい][天気|てんき]だった。", "Saturday had good weather."],
          ["[朝|あさ]から[とても][暑かった|あつかった|暑い]。", "It was very hot from the morning."],
          ["[三人|さんにん|〜にん]は[早く|はやく|早い][出かけた|でかけた|出かける]。", "The three of them went out early."],
          ["ダイキは[大きい|おおきい][荷物|にもつ]を[持っていた|もっていた|持つ]。", "Daiki was carrying big luggage."],
          ["ウメさんの[荷物|にもつ]は、とても[小さかった|ちいさかった|小さい]。", "Ume's luggage was very small."],
          ["「おばあちゃん、それ[だけ|だけ|〜だけ]？」", "\"Grandma, is that all?\""],
          ["「うちゅうでは、[荷物|にもつ]はいつも[小さい|ちいさい]よ。」とウメさんは[言った|いった|言う]。", "\"In space, luggage is always small,\" Ume said."],
          ["[三人|さんにん|〜にん]は[バス]に[乗って|のって|乗る]、[駅|えき]に[行った|いった|行く]。", "The three of them got on a bus and went to the station."]
        ],
        [
          ["[電車|でんしゃ]のなかは[にぎやか]だった。", "It was lively inside the train."],
          ["ウメさんは[座らないで|すわらないで|座る]、ずっと[立っていた|たっていた|立つ]。", "Ume didn't sit down; she stood the whole time."],
          ["「おばあちゃん、[座って|すわって|座る]もいいよ。」", "\"Grandma, you can sit down.\""],
          ["「[結構です|けっこうです]。[立つ|たつ]のは[体|からだ]にいいからね。」", "\"No, thank you. Standing is good for your body.\""],
          ["リサは「[窓|まど]を[開けて|あけて|開ける]もいいですか。」と[聞いた|きいた|聞く]。", "Lisa asked, \"May I open the window?\""],
          ["「[エアコン]があるから、[開けないで|あけないで|開ける]ください。」とまえの[女の人|おんなのひと]が[言った|いった|言う]。", "\"There's an air conditioner, so please don't open it,\" said the woman in front."],
          ["ダイキは[すぐ][窓|まど]を[閉めた|しめた|閉める]。", "Daiki closed the window right away."],
          ["そのとき、[おじいさん]がたばこをだした。", "Just then, an old man took out a cigarette."],
          ["ウメさんは[静か|しずか]に「[電車|でんしゃ]で[たばこを吸って|たばこをすって|たばこをすう]はいけませんよ。」と[言った|いった|言う]。", "Ume said quietly, \"You mustn't smoke on the train.\""],
          ["「うちゅうで[たばこを吸う|たばこをすう|たばこをすう][人|ひと]は、みんな[死にます|しにます|死ぬ]よ。」", "\"People who smoke in space all die, you know.\""],
          ["[おじいさん]は[怖く|こわく|怖い]なって、[すぐ]たばこをかばんにいれた。", "The old man got scared and put the cigarette in his bag right away."]
        ],
        [
          ["[電車|でんしゃ]を[降りた|おりた|降りる]とき、ダイキは「あっ！」と[言った|いった|言う]。", "When they got off the train, Daiki said, \"Ah!\""],
          ["[荷物|にもつ]を[電車|でんしゃ]に[忘れた|わすれた|忘れる]のだ。", "He had left his luggage on the train."],
          ["「[大変|たいへん]だ！[お金|おかね]も[パソコン]も、あのなかだ！」", "\"This is bad! My money and my computer are both in there!\""],
          ["「どうして[海|うみ]に[パソコン]を[持ってきた|もってきた|持ってくる]の？」とリサが[聞いた|きいた|聞く]。", "\"Why did you bring a computer to the sea?\" Lisa asked."],
          ["「[海|うみ]で[宿題|しゅくだい]をするつもりだった。」", "\"I was planning to do homework at the sea.\""],
          ["「[大丈夫|だいじょうぶ]。[後で|あとで][駅|えき]に[電話する|でんわする|電話する]よ。」とウメさんは[言った|いった|言う]。", "\"Don't worry. I'll call the station later,\" Ume said."],
          ["ダイキはウメさんに[お金|おかね]を[借りた|かりた|借りる]。", "Daiki borrowed money from Ume."],
          ["「[来年|らいねん][返す|かえす|返す]ね。」", "\"I'll pay you back next year.\""],
          ["「[来年|らいねん]？」とウメさんとリサが[一緒に|いっしょに][言った|いった|言う]。", "\"Next year?\" Ume and Lisa said together."]
        ],
        [
          ["[海|うみ]は[とても][きれい]だった。", "The sea was very beautiful."],
          ["すなは[熱かった|あつかった|熱い]。", "The sand was hot."],
          ["ウメさんは[すぐ][海|うみ]に[入って|はいって|入る]、[速く|はやく|速い][泳いだ|およいだ|泳ぐ]。", "Ume went into the sea right away and swam fast."],
          ["それから、[店|みせ]で[古い|ふるい]サーフボードを[借りて|かりて|借りる]、[サーフィン]を[やった|やった|やる]。", "Then she borrowed an old surfboard at a shop and went surfing."],
          ["ウメさんの[サーフィン]は[すごく][かっこよかった|かっこよかった|かっこいい]。", "Ume's surfing was extremely cool."],
          ["「[本当ですか|ほんとうですか]！？ウメさん、[サーフィン]も[できる|できる|できる]んですか。」とリサが[言った|いった|言う]。", "\"Really?! Ume, you can surf too?\" Lisa said."],
          ["「うちゅうより[やさしい|やさしい]よ。」", "\"It's easier than space.\""],
          ["ダイキは[サーフィン]が[大嫌い|だいきらい]だった。", "Daiki hated surfing."],
          ["[大きい|おおきい]なみが[来て|きて|来る]、ダイキは「[死ぬ|しぬ]！」と[言った|いった|言う]。", "A big wave came, and Daiki said, \"I'm going to die!\""],
          ["でも、[水|みず]はダイキのひざまで[だけ|だけ|〜だけ]だった。", "But the water only came up to Daiki's knees."],
          ["リサはわらって、「ダイキさんは[面白い|おもしろい]ね。」と[言った|いった|言う]。", "Lisa laughed and said, \"Daiki, you're funny.\""],
          ["「[海|うみ]は[つまらない]。[僕|ぼく]は[暑い|あつい|暑い]のが[嫌い|きらい]なんだ。」", "\"The sea is boring. I don't like hot weather.\""]
        ],
        [
          ["[昼ご飯|ひるごはん]は[海|うみ]のまえの[店|みせ]で[食べた|たべた|食べる]。", "They ate lunch at a shop in front of the sea."],
          ["[食べ物|たべもの]も[飲み物|のみもの]も[おいしかった|おいしかった|おいしい]。", "Both the food and the drinks were delicious."],
          ["リサは[果物|くだもの]が[大好き|だいすき]で、すいかをみっつ[食べた|たべた|食べる]。", "Lisa loves fruit, so she ate three pieces of watermelon."],
          ["ウメさんは、こんなに[暑い|あつい|暑い]ひに、[熱い|あつい|熱い][おちゃ]を[飲んだ|のんだ|飲む]。", "On such a hot day, Ume drank hot green tea."],
          ["それから、みんなで[お土産|おみやげ]を[買った|かった|買う]。", "After that, everyone bought souvenirs."],
          ["ウメさんは[エルサイズ]の[新しい|あたらしい]ティーシャツを[三枚|さんまい|〜まい][買った|かった|買う]。", "Ume bought three new size-L T-shirts."],
          ["「どうして[三枚|さんまい|〜まい]？」とダイキが[聞いた|きいた|聞く]。", "\"Why three?\" Daiki asked."],
          ["「[一枚|いちまい|〜まい]はつきの[友だち|ともだち]の[お土産|おみやげ]だよ。」", "\"One is a souvenir for my friend on the moon.\""]
        ],
        [
          ["ゆうがた、ウメさんはリサに[手紙|てがみ]を[あげた|あげた|あげる]。", "In the evening, Ume gave Lisa a letter."],
          ["[手紙|てがみ]には[漢字|かんじ]が[たくさん][あった|あった|ある]。", "The letter had a lot of kanji."],
          ["「[漢字|かんじ]は[難しい|むずかしい]です。」とリサが[言った|いった|言う]。", "\"Kanji is difficult,\" Lisa said."],
          ["ウメさんは[かばん]から[教科書|きょうかしょ]をだして、[漢字|かんじ]を[教えた|おしえた|教える]。", "Ume took a textbook out of her bag and taught her the kanji."],
          ["「この[漢字|かんじ]は、[教科書|きょうかしょ]のごじゅう[ページ]にあるよ。」", "\"This kanji is on page fifty of the textbook.\""],
          ["「[次|つぎ]の[漢字|かんじ]は？」", "\"And the next kanji?\""],
          ["「それは「[誕生日|たんじょうび]」だよ。」", "\"That's 'birthday.'\""],
          ["リサは[手紙|てがみ]を[ゆっくり][読んで|よんで|読む]、「[一番|いちばん]の[誕生日|たんじょうび]です。」と[言った|いった|言う]。", "Lisa read the letter slowly and said, \"This is the best birthday ever.\""]
        ],
        [
          ["[夜|よる]になって、すこし[寒く|さむく|寒い]なった。", "Night came, and it got a little cold."],
          ["ウメさんが[駅|えき]に[電話した|でんわした|電話する]から、ダイキの[荷物|にもつ]は[駅|えき]にあった。", "Because Ume had called the station, Daiki's luggage was waiting there."],
          ["かえりの[電車|でんしゃ]で、ダイキはリサの[荷物|にもつ]も[持って|もって|持つ]、[手伝った|てつだった|手伝う]。", "On the train home, Daiki helped by carrying Lisa's luggage too."],
          ["「ダイキさんは[やさしい|やさしい]ですね。」とリサが[言った|いった|言う]。", "\"Daiki, you're kind,\" Lisa said."],
          ["「[来年|らいねん]は、[国|くに]の[友だち|ともだち]も[連れてきます|つれてきます|連れてくる]。」", "\"Next year I'll bring my friends from my country too.\""],
          ["ダイキは「[来年|らいねん]も[海|うみ]…？」と[思った|おもった|思う]。", "Daiki thought, \"The sea again next year…?\""]
        ],
        [
          ["[家|いえ]に[帰った|かえった|帰る]とき、リサとダイキは[すごく][疲れていた|つかれていた|疲れる]。", "When they got home, Lisa and Daiki were extremely tired."],
          ["リサは[電気|でんき]と[エアコン]を[つけて|つけて|つける]、[シャワーを浴びて|シャワーをあびて|シャワーをあびる]、[すぐ][寝た|ねた|寝る]。", "Lisa turned on the light and the air conditioner, took a shower, and went to sleep right away."],
          ["ダイキは[部屋|へや]のまえで[座って|すわって|座る]、[寝て|ねて|寝る]いた。", "Daiki sat down in front of the room and fell asleep there."],
          ["でも、ウメさんは[まだ][元気|げんき]だった。", "But Ume was still full of energy."],
          ["[お風呂|おふろ]に[入って|はいって|入る]、ダイキの[パソコン]を[使って|つかって|使う]、[今日|きょう]の[写真|しゃしん]を[見た|みた|見る]。", "She took a bath, used Daiki's computer, and looked at the day's photos."],
          ["それから、ダイキの[宿題|しゅくだい]も[やった|やった|やる]。", "Then she did Daiki's homework too."],
          ["「たのしかった。みんなと[遊ぶ|あそぶ|遊ぶ]のは[一番|いちばん]だね。」", "\"That was fun. Spending time with everyone is the best.\""],
          ["ウメさんは[電気|でんき]を[消して|けして|消す]、「[明日|あした]も{五時|ごじ}に[起きよう|おきよう|起きる]。」と[言った|いった|言う]。", "Ume turned off the light and said, \"Let's get up at five tomorrow too.\""],
          ["[次|つぎ]のひ、ダイキは[授業|じゅぎょう]を[休んだ|やすんだ|休む]。", "The next day, Daiki skipped class."],
          ["ウメさんは[ごぜん]{五時|ごじ}に、もう[走っていた|はしっていた|走る]。", "At five a.m., Ume was already out running."]
        ]
      ] },
    { title: "ダイキさんのかぞくとパーティー", titleEn: "Daiki's Family and a Party",
      paragraphs: [
        [
          ["[海|うみ]から[帰った|かえった|帰る][次|つぎ]の{日|ひ}、ダイキさんとリサさんはまだ[疲れて|つかれて|疲れる]いた。", "The day after they came back from the sea, Daiki and Lisa were still tired."],
          ["[でも]、ウメさんは[今朝|けさ]も{五時|ごじ}に[起きて|おきて|起きる]、[一時間|いちじかん|〜じかん][走った|はしった|走る]。", "But Ume got up at five this morning too and ran for an hour."],
          ["{昼|ひる}ごろ、ダイキさんの[電話|でんわ]が{鳴った|なった}。", "Around noon, Daiki's phone rang."],
          ["ダイキさんの[お母さん|おかあさん]からだった。", "It was from Daiki's mother."],
          ["「ダイキ？[あさって]、[家族|かぞく][みんなで]そっちに[行く|いく|行く]わよ」", "\"Daiki? The day after tomorrow, the whole family is coming over there.\""],
          ["「えっ、[あさって]！？」", "\"What, the day after tomorrow?!\""]
        ],
        [
          ["その{晩|ばん}、リサさんが[聞いた|きいた|聞く]。", "That night, Lisa asked."],
          ["「ダイキさんの[家族|かぞく]は{何人|なんにん}ですか」", "\"How many people are in your family, Daiki?\""],
          ["「[父|ちち][と|と|〜と][母|はは][と|と|〜と][兄|あに][と|と|〜と][姉|あね][と|と|〜と][妹|いもうと]と、[僕|ぼく]です。[六人|ろくにん|〜にん]です」", "\"My father, my mother, my older brother, my older sister, my younger sister, and me. Six people.\""],
          ["「わたしは？」と、ウメさんが[静か|しずか|静か]に[言った|いった|言う]。", "\"And me?\" Ume said calmly."],
          ["「あっ……[七人|しちにん|〜にん]です」", "\"Oh... seven people.\""]
        ],
        [
          ["「[父|ちち]は[背が高くて|せがたかくて|背が高い]、[めがね]を[かけて|かけて|かける]います。」", "\"My father is tall and wears glasses.\""],
          ["「[車|くるま]の[会社|かいしゃ]で[働いて|はたらいて|働く]います。[会社員|かいしゃいん]です」", "\"He works at a car company. He's an office worker.\""],
          ["「[母|はは]は[背が低くて|せがひくくて|背が低い]、[髪|かみ]が[短い|みじかい|短い]です。[料理|りょうり]が[とても][上手|じょうず]です」", "\"My mother is short and has short hair. She's a very good cook.\""],
          ["「[兄|あに]は{東京|とうきょう}に[住んで|すんで|住む]います。[仕事|しごと]が[忙しい|いそがしい|忙しい]から、[来ません|きません|来る]」", "\"My older brother lives in Tokyo. His work is busy, so he isn't coming.\""],
          ["「[姉|あね]は[髪|かみ]が[長くて|ながくて|長い]、[頭がよくて|あたまがよくて|頭がいい]、[とても][親切|しんせつ]です」", "\"My older sister has long hair, is smart, and is very kind.\""],
          ["「[スペイン]で[ホームステイ]を[して|して|する]、[スペイン]の[男の人|おとこのひと]と[結婚しました|けっこんしました|結婚する]」", "\"She did a homestay in Spain and married a Spanish man.\""],
          ["「[妹|いもうと]は[高校生|こうこうせい]で、[とても][かわいい]です」", "\"My younger sister is a high school student and very cute.\""]
        ],
        [
          ["「[お兄さん|おにいさん]と[お姉さん|おねえさん]は[来ません|きません|来る]か」と、リサさんが[聞いた|きいた|聞く]。", "\"Your older brother and older sister aren't coming?\" Lisa asked."],
          ["「[うん]、[兄|あに]も[姉|あね]も[来ない|こない|来る]んだ」", "\"Right, neither my brother nor my sister is coming.\""],
          ["「[残念|ざんねん]ですね。わたしは[兄弟|きょうだい]がいないんです。[一人|ひとり]です」", "\"That's too bad. I don't have any brothers or sisters. I'm an only child.\""],
          ["「[弟|おとうと]が[欲しかった|ほしかった|欲しい]です」", "\"I wanted a little brother.\""],
          ["「[よかったら]、ダイキをあげるわよ」と、ウメさんが[言った|いった|言う]。", "\"If you like, I'll give you Daiki,\" Ume said."],
          ["「[いりません|いりません|いる]」と、[二人|ふたり]は[同じ|おなじ][時|とき]に[言った|いった|言う]。", "\"No thanks,\" the two of them said at the same time."]
        ],
        [
          ["[それから]、ウメさんは[テレビ]の[天気予報|てんきよほう]を[見た|みた|見る]。", "After that, Ume watched the weather forecast on TV."],
          ["「[あさって]は[晴れ|はれ]でしょう。[気温|きおん]は[二十二度|にじゅうにど|〜ど]です」", "\"The day after tomorrow will be sunny. The temperature will be twenty-two degrees.\""],
          ["「[いい][天気|てんき]ね。[日曜日|にちようび]は[みんなで][バーベキュー]の[パーティー]を[しましょう|しましょう|する]」", "\"Nice weather. On Sunday, let's all have a barbecue party.\""],
          ["ウメさんはもう[バーベキュー]について{考えて|かんがえて}いた。", "Ume was already thinking about the barbecue."]
        ],
        [
          ["[金曜日|きんようび]、[三人|さんにん|〜にん]は[アパート]を[掃除した|そうじした|掃除する]。", "On Friday, the three of them cleaned the apartment."],
          ["ウメさんは[速くて|はやくて|速い]、{十分|じゅっぷん}で[部屋|へや]を[全部|ぜんぶ][きれい]に[した|した|する]。", "Ume was fast and cleaned the whole room in ten minutes."],
          ["リサさんは[シャツ]やタオルを[洗濯した|せんたくした|洗濯する]。", "Lisa did the laundry, shirts, towels and so on."],
          ["ダイキさんは{掃除|そうじ}が[下手|へた]だった。", "Daiki was bad at cleaning."],
          ["[古い|ふるい][ゲーム]の[雑誌|ざっし]を[捨てなかった|すてなかった|捨てる]。", "He didn't throw away his old game magazines."],
          ["「ダイキ、[雑誌|ざっし]を[捨てて|すてて|捨てる]」", "\"Daiki, throw away the magazines.\""],
          ["「[ううん]、これは{大切|たいせつ}な[雑誌|ざっし]なんだ……」", "\"No, these are important magazines...\""],
          ["ウメさんは[何も|なにも][言わないで|いわないで|言う]、[雑誌|ざっし]を[全部|ぜんぶ][持っていった|もっていった|持っていく]。", "Without saying anything, Ume took all the magazines away."]
        ],
        [
          ["[土曜日|どようび]の[朝|あさ]、[大きい|おおきい][車|くるま]が[アパート]の{前|まえ}に{止まった|とまった}。", "On Saturday morning, a big car stopped in front of the apartment."],
          ["[運転した|うんてんした|運転する]のは、ダイキさんの[おじいさん]だった。", "The one who drove was Daiki's grandfather."],
          ["[おじいさん]は{八十五|はちじゅうご}さいだ[が|が|〜が]、{運転|うんてん}が[とても][上手|じょうず]で、[いつも][速い|はやい|速い]。", "Grandpa is eighty-five, but he is a great driver and always fast."],
          ["「[車|くるま]は[便利|べんり]だよ。うちゅうのロケットより[遅い|おそい|遅い]けどね」と、[おじいさん]は{笑った|わらった}。", "\"A car is convenient. Though it's slower than a space rocket,\" Grandpa laughed."],
          ["ウメさんと[おじいさん]は、[六十年|ろくじゅうねん|〜ねん]まえに[結婚した|けっこんした|結婚する]。", "Ume and Grandpa got married sixty years ago."]
        ],
        [
          ["ダイキさんの[お父さん|おとうさん]は{本当|ほんとう}に[背が高かった|せがたかかった|背が高い]。", "Daiki's father really was tall."],
          ["[大きい|おおきい][めがね]を[かけて|かけて|かける]いた。", "He was wearing big glasses."],
          ["[妹|いもうと]のハナさんは[目|め]が[大きくて|おおきくて|大きい]、[かわいい][帽子|ぼうし]を[かぶって|かぶって|かぶる]いた。", "His little sister Hana had big eyes and wore a cute hat."],
          ["[お母さん|おかあさん]はダイキさんを[見て|みて|見る]、「ダイキ、[ちょっと][太った|ふとった|太る]？」と[聞いた|きいた|聞く]。", "His mother looked at Daiki and asked, \"Daiki, did you gain a little weight?\""],
          ["「[ううん]、[やせた|やせた|やせる]よ」", "\"No, I lost weight.\""],
          ["「[それ]に、その[服|ふく]は{何|なに}？」", "\"And what are those clothes?\""],
          ["ダイキさんはまだパジャマを[着て|きて|着る]いた。", "Daiki was still wearing his pajamas."],
          ["「[早く|はやく|早い][シャツ]を[着て|きて|着る]、[ジーンズ]を[はいて|はいて|はく]！」", "\"Hurry up, put on a shirt and put on some jeans!\""]
        ],
        [
          ["[お母さん|おかあさん]はリサさんに[聞いた|きいた|聞く]。「リサさん、ウメさんのことを[知って|しって|知る]いましたか」", "His mother asked Lisa, \"Lisa, did you know about Ume?\""],
          ["「[もちろん]！ウメさんは[アメリカ]でも[有名|ゆうめい]です」", "\"Of course! Ume is famous in America too.\""],
          ["[お父さん|おとうさん]はダイキさんに[聞いた|きいた|聞く]。「[大学|だいがく]はどう？[サークル]に[入って|はいって|入る]いるのか」", "His father asked Daiki, \"How's college? Are you in a club?\""],
          ["「[別に|べつに]……」", "\"Not really...\""],
          ["「ダイキさんは[ゲーム]の[サークル]に[入って|はいって|入る]います」と、リサさんが[言った|いった|言う]。", "\"Daiki is in the game club,\" Lisa said."],
          ["「ウメさんは？」「わたしは[毎週|まいしゅう]、[食堂|しょくどう]で[とんかつ]を[五枚|ごまい|〜まい][食べる|たべる|食べる]の」", "\"And you, Ume?\" \"Every week, I eat five pork cutlets at the cafeteria.\""],
          ["「[それ]は[サークル]じゃない」と、リサさんは[思った|おもった|思う]。", "\"That's not a club,\" Lisa thought."]
        ],
        [
          ["[日曜日|にちようび]の[朝|あさ]は[曇り|くもり]だった。", "Sunday morning was cloudy."],
          ["みんなは[公園|こうえん]で[バーベキュー]を[始めた|はじめた|始める]。", "Everyone started the barbecue in the park."],
          ["[お母さん|おかあさん]は[肉|にく]と[野菜|やさい]を[料理した|りょうりした|料理する]。", "His mother cooked meat and vegetables."],
          ["ダイキさんは[トマト]を[切った|きった|切る]が、[とても][下手|へた]だった。", "Daiki cut the tomatoes, but he was terrible at it."],
          ["[トマト]は[全部|ぜんぶ]{大きさ|おおきさ}がちがった。", "Every tomato piece was a different size."],
          ["ウメさんはうちゅうの[料理|りょうり]を[作った|つくった|作る]。", "Ume made a space dish."],
          ["[何か|なにか]{青い|あおい}もので、だれも{何|なに}か[わからなかった|わからなかった|わかる]。", "It was something blue, and nobody knew what it was."]
        ],
        [
          ["その[時|とき]、[雨|あめ]が[降り|ふり|降る]はじめた。", "Just then, it started to rain."],
          ["「[天気予報|てんきよほう]は[晴れ|はれ]と[言って|いって|言う]いたのに……」と、ダイキさんは[言った|いった|言う]。", "\"The weather forecast said it would be sunny...\" Daiki said."],
          ["「[大丈夫|だいじょうぶ]よ。うちゅうでは[雨|あめ]は[降らない|ふらない|降る]から、[雨|あめ]の[バーベキュー]は{楽しい|たのしい}わ」", "\"It's fine. It never rains in space, so a barbecue in the rain is fun.\""],
          ["みんなは[傘|かさ]を[持って|もって|持つ]、[雨|あめ]の{中|なか}で[食べた|たべた|食べる]。", "Everyone held umbrellas and ate in the rain."],
          ["「ダイキ、ハナに[はし]を[持っていって|もっていって|持っていく]」", "\"Daiki, take the chopsticks to Hana.\""],
          ["リサさんは[はし]が[とても][上手|じょうず]で、[お父さん|おとうさん]はびっくりした。", "Lisa was very good with chopsticks, and his father was surprised."],
          ["[お父さん|おとうさん]は[カメラ]で[写真|しゃしん]を[たくさん][撮った|とった|撮る]。", "His father took lots of photos with his camera."],
          ["{最後|さいご}に、[おじいさん]が[ジュース]を[持って|もって|持つ]、「[乾杯|かんぱい]！」と[言った|いった|言う]。", "Finally, Grandpa raised his juice and said, \"Cheers!\""]
        ],
        [
          ["[パーティー]のあと、ダイキさんとリサさんは[お皿|おさら]を[洗った|あらった|洗う]。", "After the party, Daiki and Lisa washed the dishes."],
          ["それから、[みんなで][カラオケ]に[行った|いった|行く]。", "Then they all went to karaoke together."],
          ["ウメさんはうちゅう[について|について|〜について]の[歌|うた]を[歌った|うたった|歌う]。", "Ume sang a song about space."],
          ["[おじいさん]は[古い|ふるい][歌|うた]を[静か|しずか]に[歌った|うたった|歌う]。", "Grandpa quietly sang an old song."],
          ["ダイキさんは[口|くち]を[大きく|おおきく|大きい][開けて|あけて|開ける][歌った|うたった|歌う]が、[すごく][下手|へた]だった。", "Daiki opened his mouth wide and sang, but he was terribly bad."],
          ["ハナさんは{笑って|わらって}、[何も|なにも][言えなかった|いえなかった|言う]。", "Hana laughed so much she couldn't say anything."]
        ],
        [
          ["「もう[遅くなった|おそくなった|遅くなる]から、[帰りましょう|かえりましょう|帰る]」と、[お母さん|おかあさん]が[言った|いった|言う]。", "\"It's gotten late, so let's go home,\" his mother said."],
          ["「リサさん、[よかったら]、[お正月|おしょうがつ]にうちに[来て|きて|来る]ね」", "\"Lisa, if you like, come to our house for New Year's.\""],
          ["[おじいさん]は[車|くるま]を[速く|はやく|速い][運転して|うんてんして|運転する]、[帰って|かえって|帰る]いった。", "Grandpa drove the car fast and went home."],
          ["その{夜|よる}、みんなは[遅く|おそく]まで[起きて|おきて|起きる]いた。", "That night, everyone stayed up late."],
          ["ダイキさんは{帰り|かえり}の[電車|でんしゃ]が[遅くなって|おそくなって|遅くなる]、[家|いえ]に[着いた|ついた|着く]のは{一時|いちじ}だった。", "Daiki's train home was late, and it was one o'clock when he got home."],
          ["ウメさんは[お風呂に入って|おふろにはいって|お風呂に入る]、[天気予報|てんきよほう]を[見た|みた|見る]。", "Ume took a bath and watched the weather forecast."]
        ],
        [
          ["「[今月|こんげつ]は[気温|きおん]がどんどん{下がります|さがります}。[来月|らいげつ]は[雪|ゆき]が[降る|ふる|降る]でしょう」", "\"The temperature will keep dropping this month. Next month, it will probably snow.\""],
          ["「[夏|なつ]はもうおわりですね」と、リサさんが[言った|いった|言う]。", "\"Summer is already over, isn't it,\" Lisa said."],
          ["「[いい][家族|かぞく]だと[思います|おもいます|思う]。みんな[親切|しんせつ]でした」", "\"I think it's a good family. Everyone was kind.\""],
          ["「ありがとう。わたしは[冬|ふゆ]が[大好き|だいすき]よ」と、ウメさんは[言った|いった|言う]。", "\"Thank you. I love winter,\" Ume said."],
          ["[同じ|おなじ][時|とき]、ダイキさんの[部屋|へや]で、ダイキさんは[大きい|おおきい]くしゃみを[した|した|する]。", "At the same moment, in his room, Daiki let out a big sneeze."],
          ["[冬|ふゆ]は[もうすぐ]だった。", "Winter was just around the corner."]
        ]
      ] },
    { title: "寒い冬", titleEn: "A Cold Winter",
      paragraphs: [
        [
          ["そして、ほんとうに[冬|ふゆ]が[来た|きた|来る]。", "And then winter really came."],
          ["[毎日|まいにち]、[とても][寒かった|さむかった|寒い]。", "It was very cold every day."],
          ["ダイキは[風邪をひいた|かぜをひいた|風邪をひく]。", "Daiki caught a cold."],
          ["[朝|あさ]、ダイキの[顔|かお]はあかかった。", "In the morning, Daiki's face was red."],
          ["「[眠い|ねむい]…。[今日|きょう]は[一日|いちにち]、[うち]で[ごろごろする|ごろごろする|ごろごろする]。」とダイキは[言った|いった|言う]。", "\"I'm sleepy... Today I'm going to lie around at home all day,\" Daiki said."],
          ["ウメさんは[冷たい|つめたい][牛乳|ぎゅうにゅう]と[りんご]を[持って|もって|持つ][来た|きた|来る]。", "Ume brought cold milk and an apple."],
          ["「[薬を飲んだ|くすりをのんだ|薬を飲む]？」とウメさんは[聞いた|きいた|聞く]。", "\"Did you take your medicine?\" Ume asked."],
          ["「まだ…。」", "\"Not yet...\""],
          ["「[早く|はやく|はやく][薬を飲んで|くすりをのんで|薬を飲む]。それから、[部屋|へや]を[暖かく|あたたかく|暖かい]して[寝て|ねて|寝る]。」", "\"Take your medicine, quickly. Then make the room warm and sleep.\""],
          ["ダイキは[薬を飲んで|くすりをのんで|薬を飲む]、[すぐ][寝た|ねた|寝る]。", "Daiki took the medicine and went to sleep right away."]
        ],
        [
          ["でも、ウメさんは[静か|しずか]じゃなかった。", "But Ume was not quiet."],
          ["ダイキが[寝ている|ねている|寝る]とき、ウメさんはとなりの[部屋|へや]で[ピアノを弾いた|ピアノをひいた|ピアノを弾く]。", "While Daiki was sleeping, Ume played the piano in the next room."],
          ["[それから]、[ギター]もひいた。", "Then she played the guitar too."],
          ["さいごに、[歌|うた]を[歌って|うたって|歌う]、[踊った|おどった|踊る]。", "Finally, she sang a song and danced."],
          ["「おばあちゃん…。[僕|ぼく]は[病気|びょうき]だよ…。」", "\"Grandma... I'm sick...\""],
          ["「だから[踊る|おどる|踊る]の。[踊る|おどる|踊る]のは[風邪|かぜ]に[いい]よ。」とウメさんは[言った|いった|言う]。", "\"That's why I'm dancing. Dancing is good for colds,\" Ume said."],
          ["「うちゅうでは、[毎晩|まいばん][鳥|とり]になって[踊った|おどった|踊る]よ。」", "\"In space, I became a bird and danced every night.\""],
          ["ダイキはなにも[言わないで|いわないで|言う]、また[寝た|ねた|寝る]。", "Daiki went back to sleep without saying anything."]
        ],
        [
          ["[土曜日|どようび]、ダイキの[風邪|かぜ]は[よく][なった|なった|なる]。", "On Saturday, Daiki's cold got better."],
          ["リサは[歌舞伎|かぶき]のチケットを[三枚|さんまい|〜まい][持っていた|もっていた|持つ]。", "Lisa had three tickets to kabuki."],
          ["「[日本|にほん]のぶんかについて[レポート]を[書く|かく|書く]つもりです。」とリサは[言った|いった|言う]。", "\"I'm planning to write a report on Japanese culture,\" Lisa said."],
          ["[歌舞伎|かぶき]は[長かった|ながかった|長い]が、[とても][おもしろかった|おもしろかった|おもしろい]。", "The kabuki was long, but very interesting."],
          ["ウメさんは、{役者|やくしゃ}の[言葉|ことば]を[一回|いっかい|〜かい]で[全部|ぜんぶ][覚えた|おぼえた|覚える]。", "Ume memorized all of the actors' lines after hearing them just once."],
          ["かえりの[地下鉄|ちかてつ]で、ウメさんは[大きい|おおきい]こえでその[言葉|ことば]を[言った|いった|言う]。", "On the subway home, Ume said those lines in a loud voice."],
          ["[電車|でんしゃ]の[人|ひと]はみんな、ウメさんの[顔|かお]を[見た|みた|見る]。", "Everyone on the train looked at Ume's face."],
          ["ダイキははずかしかった。", "Daiki was embarrassed."],
          ["「ウメさんは[すぐ][有名人|ゆうめいじん]になりますね。」とリサはわらった。", "\"Ume, you're going to be a celebrity soon,\" Lisa said, laughing."]
        ],
        [
          ["[日曜日|にちようび]、[三人|さんにん|〜にん]は[動物園|どうぶつえん]に[行った|いった|行く]。", "On Sunday, the three of them went to the zoo."],
          ["[動物園|どうぶつえん]は[駅|えき]から[歩いて|あるいて|歩いて]{十分|じゅっぷん}だった。", "The zoo was ten minutes on foot from the station."],
          ["ダイキは[手袋|てぶくろ]を[忘れた|わすれた|忘れる]。", "Daiki forgot his gloves."],
          ["[風|かぜ]が[冷たくて|つめたくて|冷たい]、てが[痛かった|いたかった|痛い]。", "The wind was cold and his hands hurt."],
          ["ウメさんも[手袋|てぶくろ]をしていなかったが、[元気|げんき]だった。", "Ume wasn't wearing gloves either, but she was fine."],
          ["「うちゅうは、ここよりずっと[寒い|さむい]よ。」", "\"Space is much colder than here.\""],
          ["ウメさんは[大きい|おおきい][鳥|とり]のまえで、また[踊った|おどった|踊る]。", "Ume danced again in front of a big bird."],
          ["[鳥|とり]も[踊った|おどった|踊る]。", "The bird danced too."],
          ["[子供|こども]たちが[たくさん][写真|しゃしん]を[撮った|とった|撮る]。", "Lots of children took photos."]
        ],
        [
          ["その[夜|よる]、[三人|さんにん|〜にん]はウメさんとリサの[アパート]で[晩ご飯|ばんごはん]を[食べた|たべた|食べる]。", "That night, the three of them ate dinner at Ume and Lisa's apartment."],
          ["テーブルには[すし]と[天ぷら|てんぷら]と[ケーキ]が[あった|あった|ある]。", "On the table there was sushi, tempura and cake."],
          ["[天ぷら|てんぷら]はウメさんの[料理|りょうり]だった。", "The tempura was Ume's cooking."],
          ["「[季節|きせつ]のなかで、いつが[一番|いちばん][好き|すき]？」とリサが[聞いた|きいた|聞く]。", "\"Of all the seasons, when do you like best?\" Lisa asked."],
          ["「[僕|ぼく]は[春|はる]が[一番|いちばん][好き|すき]。[暖かい|あたたかい|暖かい]から。」とダイキが[言った|いった|言う]。", "\"I like spring best. Because it's warm,\" Daiki said."],
          ["「[私|わたし]は[秋|あき]。[涼しくて|すずしくて|涼しい]、[食べ物|たべもの]が[おいしい]から。」", "\"Me, fall. It's cool and the food is delicious.\""],
          ["「[私|わたし]は[冬|ふゆ]が[一番|いちばん][好き|すき]。うちゅうより[暖かい|あたたかい|暖かい]から。」とウメさんは[静か|しずか]に[言った|いった|言う]。", "\"I like winter best. Because it's warmer than space,\" Ume said calmly."],
          ["「ウメさんは[私|わたし]より[六十年|ろくじゅうねん|〜ねん][年上|としうえ]だけど、[私|わたし]より[速く|はやく|はやく][走ります|はしります|走る]ね。」とリサが[言った|いった|言う]。", "\"Ume, you're sixty years older than me, but you run faster than me,\" Lisa said."],
          ["「うちゅうから[世界|せかい]を[見た|みた|見る]とき、[季節|きせつ]は[見えなかった|みえなかった|見える]よ。[世界|せかい]は[いつも]あおかった。」", "\"When I looked at the world from space, I couldn't see the seasons. The world was always blue.\""]
        ],
        [
          ["「リサさんは、[サッカー]と[野球|やきゅう]と[どちら]が[好き|すき]？」とダイキが[聞いた|きいた|聞く]。", "\"Lisa, which do you like better, soccer or baseball?\" Daiki asked."],
          ["「[野球|やきゅう]のほうが[好き|すき]。アメリカでは、[野球|やきゅう]の{選手|せんしゅ}は[お金持ち|おかねもち]だよ。」", "\"I like baseball better. In America, baseball players are rich.\""],
          ["「じゃあ、[僕|ぼく]は[野球|やきゅう]の{選手|せんしゅ}[か|か|〜か〜][医者|いしゃ]になる。」", "\"Then I'll become a baseball player or a doctor.\""],
          ["「[医者|いしゃ]はまいあさ[早く|はやく|はやく][起きる|おきる|起きる]よ。」とウメさんが[言った|いった|言う]。", "\"Doctors get up early every morning,\" Ume said."],
          ["「ダイキは[このごろ]、まいあさ[遅い|おそい]ね。」とリサも[言った|いった|言う]。", "\"Daiki, you've been late every morning these days,\" Lisa said too."],
          ["ダイキは[ちょっと]かんがえた。", "Daiki thought for a moment."],
          ["「…じゃあ、[お金持ち|おかねもち]だけになる。」", "\"...Then I'll just become rich.\""],
          ["「[日本|にほん]の[生活|せいかつ]はたのしいです。[今年|ことし]はほんとうにたのしかった。」とリサはわらった。", "\"Life in Japan is fun. This year was really fun,\" Lisa said with a laugh."]
        ],
        [
          ["「[冬|ふゆ]の[休み|やすみ]に、みんなで[旅行しよう|りょこうしよう|旅行する]。」とウメさんが[言った|いった|言う]。", "\"Let's all take a trip over winter vacation,\" Ume said."],
          ["「どこに[行く|いく|行く]？」", "\"Where should we go?\""],
          ["「{北海道|ほっかいどう}の[山|やま]の[温泉|おんせん]は[どう]？」", "\"How about a hot spring in the mountains of Hokkaido?\""],
          ["「[どうやって][行く|いく|行く]？」とダイキが[聞いた|きいた|聞く]。", "\"How would we get there?\" Daiki asked."],
          ["リサは[パソコン]で[調べた|しらべた|調べる]。", "Lisa looked it up on her computer."],
          ["「[新幹線|しんかんせん][で|で|〜で]{八時間|はちじかん}ぐらい[かかる]。[飛行機|ひこうき]は[新幹線|しんかんせん]より[速くて|はやくて|速い]、[二時間|にじかん|〜じかん]しか[かからない|かからない|かかる]。」", "\"By Shinkansen it takes about eight hours. The plane is faster than the Shinkansen and only takes two hours.\""],
          ["「でも、[飛行機|ひこうき]は[一番|いちばん][高い|たかい]よ。」とリサは[言った|いった|言う]。", "\"But the plane is the most expensive,\" Lisa said."],
          ["「[船|ふね]は？」とウメさんが[聞いた|きいた|聞く]。", "\"What about a ship?\" Ume asked."],
          ["「[船|ふね]は[一番|いちばん][遅い|おそい]。[二日|ふつか]ぐらい[かかる]よ。」", "\"The ship is the slowest. It takes about two days.\""],
          ["「じゃあ、[歩いて|あるいて|歩いて][行こう|いこう|行く]。」とウメさんは[静か|しずか]に[言った|いった|言う]。", "\"Then let's go on foot,\" Ume said calmly."],
          ["「[歩いて|あるいて|歩いて]？[一か月|いっかげつ|〜かげつ]ぐらい[かかる]よ！」とダイキは[大きい|おおきい]こえで[言った|いった|言う]。", "\"On foot?! That would take about a month!\" Daiki shouted."]
        ],
        [
          ["「[どのぐらい][泊まる|とまる|泊まる]？」とリサが[聞いた|きいた|聞く]。", "\"How long will we stay?\" Lisa asked."],
          ["「[僕|ぼく]は[二週間|にしゅうかん|〜しゅうかん]、[ホテル]で[ごろごろする|ごろごろする|ごろごろする]つもり。」とダイキが[言った|いった|言う]。", "\"I'm planning to lie around at the hotel for two weeks,\" Daiki said."],
          ["「この[ツアー]は[どう]？[新幹線|しんかんせん]と[ホテル]で、やすいよ。」", "\"How about this tour? It's the Shinkansen plus a hotel, and it's cheap.\""],
          ["「[新幹線|しんかんせん]は[窓|まど]から[山|やま]が[見える|みえる|見える]。[簡単|かんたん]だし、いいね。」とウメさんも[言った|いった|言う]。", "\"From the Shinkansen you can see the mountains out the window. It's easy, too. Good,\" Ume said as well."],
          ["[三人|さんにん|〜にん]は[新幹線|しんかんせん]の[ツアー]に[決めた|きめた|決める]。", "The three of them decided on the Shinkansen tour."],
          ["リサが[すぐ][予約|よやく]した。", "Lisa made the reservation right away."],
          ["しゅっぱつは[一週間後|いっしゅうかんご|〜ご]だった。", "They would leave in one week."],
          ["「[時間|じかん]がない！[明日|あした]、[美容院|びよういん]に[行く|いく|行く]。」とウメさんは[言った|いった|言う]。", "\"There's no time! Tomorrow I'm going to the beauty parlor,\" Ume said."],
          ["「それから、ダイキに[新しい|あたらしい][手袋|てぶくろ]を[買う|かう|買う]よ。」", "\"And I'll buy you new gloves, Daiki.\""],
          ["ダイキはわらった。「[冬|ふゆ]の[旅行|りょこう]、[ちょっと][楽しみです|たのしみです|楽しみです]。」", "Daiki smiled. \"I'm kind of looking forward to the winter trip.\""]
        ]
      ] },
    { title: "休みと夢", titleEn: "Vacation and Dreams",
      paragraphs: [
        [
          ["そして、[旅行|りょこう]のひが[来た|きた|来る]。", "And then the day of the trip came."],
          ["ダイキはまた[遅刻した|ちこくした|遅刻する]。", "Daiki was late again."],
          ["ダイキは[駅|えき]まで[走って|はしって|走る][来た|きた|来る]。", "Daiki came running to the station."],
          ["ウメさんの[髪|かみ]は[短くて|みじかくて|短い]、[とても][かっこよかった|かっこよかった|かっこいい]。", "Ume's hair was short and very cool."],
          ["「[新幹線|しんかんせん]が[来た|きた|来る]よ！[急いで|いそいで|急ぐ]！」とリサが[言った|いった|言う]。", "\"The Shinkansen is here! Hurry!\" Lisa said."]
        ],
        [
          ["しんかんせんのなかで、リサは[お菓子|おかし]を[たくさん][食べた|たべた|食べる]。", "On the Shinkansen, Lisa ate lots of snacks."],
          ["「[僕|ぼく]は[今日|きょう]から[ダイエットする|ダイエットする|ダイエットする]。[お菓子|おかし]は[食べない|たべない|食べる]。」とダイキは[言った|いった|言う]。", "\"I'm going on a diet starting today. I won't eat snacks,\" Daiki said."],
          ["でも、[昼ご飯|ひるごはん]の[時間|じかん]に、ダイキは[おなかがすいた|おなかがすいた|おなかがすく]。", "But at lunchtime, Daiki got hungry."],
          ["リサがトイレから[帰って|かえって|帰る][来た|きた|来る]とき、リサの[お菓子|おかし]がなくなっていた。", "When Lisa came back from the restroom, her snacks were gone."],
          ["「ダイキ、わたしの[お菓子|おかし]を[食べた|たべた|食べる]？」", "\"Daiki, did you eat my snacks?\""],
          ["「[食べなかった|たべなかった|食べる]よ。」とダイキは[言った|いった|言う]。", "\"I didn't eat them,\" Daiki said."],
          ["でも、ダイキの[口|くち]に[チョコレート]がついていた。", "But there was chocolate on Daiki's mouth."],
          ["「[うそをつかないで|うそをつかないで|うそをつく]！」とリサは[言った|いった|言う]。", "\"Don't lie!\" Lisa said."],
          ["[二人|ふたり]は[ちょっと][けんかした|けんかした|けんかする]。", "The two of them had a little fight."],
          ["ウメさんは[窓|まど]から[山|やま]を[見て|みて|見る]、「[きれい]だね。」と[静か|しずか]に[言った|いった|言う]。", "Ume looked at the mountains out the window and said calmly, \"How pretty.\""]
        ],
        [
          ["[三人|さんにん|〜にん]は[山|やま]の[ホテル]に[着いた|ついた|着く]。", "The three of them arrived at a hotel in the mountains."],
          ["ホテルのまえに、[女の人|おんなのひと]が[立って|たって|立つ]いた。", "A woman was standing in front of the hotel."],
          ["「リサちゃん！[久しぶり|ひさしぶり]！」", "\"Lisa! It's been so long!\""],
          ["「ハナさん！」リサは[とても][うれしかった|うれしかった|うれしい]。", "\"Hana!\" Lisa was very happy."],
          ["リサは[こうこう]のとき、[日本|にほん]に[留学した|りゅうがくした|留学する]。", "When she was in high school, Lisa studied abroad in Japan."],
          ["ハナさんは、そのときのリサの[ホストファミリー]の[おかあさん]だった。", "Hana was the mother of Lisa's host family back then."],
          ["リサは[二人|ふたり]をハナさんに[紹介した|しょうかいした|紹介する]。", "Lisa introduced the two of them to Hana."],
          ["「[こちら]は、わたしの[ルームメイト]のウメさんです。[こちら]は、ウメさんのまごのダイキさんです。」", "\"This is my roommate, Ume. And this is Ume's grandson, Daiki.\""],
          ["「ハナさんは、この[ホテル]の[社長|しゃちょう]です。」", "\"Hana is the president of this hotel.\""],
          ["「わたしはこの[町|まち]の[出身|しゅっしん]です。どうぞ、[ゆっくり]してください。」とハナさんは[言った|いった|言う]。", "\"I'm from this town. Please make yourselves at home,\" Hana said."],
          ["ハナさんは[大きい|おおきい][犬|いぬ]を[飼って|かって|飼う]いた。", "Hana had a big dog."],
          ["[犬|いぬ]の[なまえ]は「[大統領|だいとうりょう]」だった。", "The dog's name was \"President.\""]
        ],
        [
          ["[晩ご飯|ばんごはん]の[後|あと]で、[三人|さんにん|〜にん]は[温泉|おんせん]に[入った|はいった|入る]。", "After dinner, the three of them got into the hot spring."],
          ["そとは[雪|ゆき]が[降って|ふって|降る]いた[が|が|〜が]、[温泉|おんせん]は[暖かかった|あたたかかった|暖かい]。", "Snow was falling outside, but the hot spring was warm."],
          ["ウメさんは[温泉|おんせん]で[ビール]を[飲んだ|のんだ|飲む]。", "Ume drank a beer in the hot spring."],
          ["「{宇宙|うちゅう}には[温泉|おんせん]も[ビール]もない。{地球|ちきゅう}は[いい]ね。」", "\"There are no hot springs or beer in space. Earth is nice.\""],
          ["「ダイキ、[温泉|おんせん]は[どう]？」とリサが[聞いた|きいた|聞く]。", "\"Daiki, how's the hot spring?\" Lisa asked."],
          ["「[まあまあ]。でも、[もっと][入りたい|はいりたい|入る]。」とダイキは[言った|いった|言う]。", "\"It's okay. But I want to stay in longer,\" Daiki said."]
        ],
        [
          ["[次|つぎ]のひ、ハナさんが[車|くるま]を[運転して|うんてんして|運転する]、[みんなで][ドライブ]した。", "The next day, Hana drove, and they all went for a drive."],
          ["[犬|いぬ]の[大統領|だいとうりょう]も[一緒に|いっしょに][来た|きた|来る]。", "President the dog came along too."],
          ["[車|くるま]の[窓|まど]から、[きれい]な[川|かわ]が[見えた|みえた|見える]。", "From the car window, they could see a pretty river."],
          ["それから、[三人|さんにん|〜にん]は[山|やま]に[登った|のぼった|登る]。", "After that, the three of them climbed a mountain."],
          ["ウメさんは[速く|はやく|速い][走って|はしって|走る][登った|のぼった|登る]。", "Ume ran up quickly."],
          ["ダイキは[すぐ][疲れた|つかれた|疲れる]。", "Daiki got tired right away."],
          ["「もう[やめたい|やめたい|やめる]…。」", "\"I want to quit already...\""],
          ["「ダイキ、[頑張って|がんばって|頑張る]！」とリサが[言った|いった|言う]。", "\"Daiki, hang in there!\" Lisa said."],
          ["[山|やま]のうえから、[大きい|おおきい][湖|みずうみ]が[見えた|みえた|見える]。", "From the top of the mountain, they could see a big lake."],
          ["[三人|さんにん|〜にん]は[写真を撮った|しゃしんをとった|写真を撮る]。", "The three of them took pictures."]
        ],
        [
          ["[ごご]は[湖|みずうみ]で[釣り|つり]をした。", "In the afternoon, they went fishing at the lake."],
          ["[湖|みずうみ]はこおりだった。", "The lake was frozen."],
          ["ウメさんは[大きい|おおきい][魚|さかな]を[五匹|ごひき|〜ひき]つった。", "Ume caught five big fish."],
          ["リサは[二匹|にひき|〜ひき]つった。", "Lisa caught two."],
          ["ダイキは[三時間|さんじかん|〜じかん][待った|まった|待つ]。", "Daiki waited for three hours."],
          ["そして、ダイキは[魚|さかな]の[おもちゃ][だけ|だけ|〜だけ]つった。", "And then all Daiki caught was a toy fish."],
          ["「あっ、これは[大統領|だいとうりょう]の[おもちゃ]！[先週|せんしゅう]、ここで[なくした|なくした|なくす]の。」とハナさんがわらった。", "\"Oh, that's President's toy! He lost it here last week,\" Hana said, laughing."],
          ["「ワン！」[大統領|だいとうりょう]は[とても][うれしかった|うれしかった|うれしい]。", "\"Woof!\" President was very happy."]
        ],
        [
          ["[夜|よる]は[湖|みずうみ]で[キャンプ]をした。", "That night, they went camping at the lake."],
          ["「[寒い|さむい]！[ホテル]に[帰りたい|かえりたい|帰る]！」とダイキが[言った|いった|言う]。", "\"It's cold! I want to go back to the hotel!\" Daiki said."],
          ["「{宇宙|うちゅう}は[もっと][寒い|さむい]よ。」とウメさんは[静か|しずか]に[言った|いった|言う]。", "\"Space is even colder,\" Ume said calmly."],
          ["ダイキはウメさんの[魚|さかな]を[料理した|りょうりした|料理する]。", "Daiki cooked Ume's fish."],
          ["ダイキの[料理|りょうり]は[すごく][おいしかった|おいしかった|おいしい]。", "Daiki's cooking was really delicious."],
          ["みんなはびっくりした。", "Everyone was surprised."]
        ],
        [
          ["[次|つぎ]のひ、[町|まち]で[雪|ゆき]の[お祭り|おまつり]があった。", "The next day, there was a snow festival in town."],
          ["[三人|さんにん|〜にん]は[神社|じんじゃ]に[行ったり|いったり|行く]、[美術館|びじゅつかん]で[絵|え]を[見たり|みたり|見る]した。", "The three of them did things like visiting a shrine and looking at paintings at the art museum."],
          ["「[お正月|おしょうがつ]に、ハナさんとこの[神社|じんじゃ]に[来た|きた|来る]ことがある。」とリサが[言った|いった|言う]。", "\"I've come to this shrine with Hana at New Year's,\" Lisa said."],
          ["[神社|じんじゃ]で、ハナさんが[聞いた|きいた|聞く]。「みんなの[将来|しょうらい]の[夢|ゆめ]はなに？」", "At the shrine, Hana asked, \"What are everyone's dreams for the future?\""]
        ],
        [
          ["「わたしは[ジャーナリスト]になりたい。[外国|がいこく]のニュースを[書きたい|かきたい|書く]。」とリサが[言った|いった|言う]。", "\"I want to be a journalist. I want to write news about foreign countries,\" Lisa said."],
          ["「[子供|こども]のときは[歌手|かしゅ]になりたかった[けど|けど|〜けど]、[歌|うた]が[下手|へた]だった。」", "\"When I was a kid I wanted to be a singer, but I was bad at singing.\""],
          ["「[僕|ぼく]は…[わからない|わからない|わかる]。」とダイキが[言った|いった|言う]。", "\"Me... I don't know,\" Daiki said."],
          ["「[子供|こども]のとき、[警察官|けいさつかん]や[消防士|しょうぼうし]や[スポーツ選手|スポーツせんしゅ]になりたかった。」", "\"When I was a kid, I wanted to be a police officer, a firefighter, an athlete...\""],
          ["「でも、[走る|はしる]のは[嫌い|きらい]だし…。」", "\"But I hate running, so...\""],
          ["「ダイキの[料理|りょうり]、[おいしかった|おいしかった|おいしい]よ。[シェフ]は[どう]？」とリサが[言った|いった|言う]。", "\"Your cooking was delicious, Daiki. How about a chef?\" Lisa said."],
          ["「うちの[ホテル]の[シェフ]にならない？」とハナさんも[言った|いった|言う]。", "\"Why not become a chef at my hotel?\" Hana said too."],
          ["「[シェフ]…。[いい]ね。」ダイキは[ちょっと]わらった。", "\"A chef... That sounds good.\" Daiki smiled a little."]
        ],
        [
          ["「ウメさんの[夢|ゆめ]は？」とリサが[聞いた|きいた|聞く]。", "\"What's your dream, Ume?\" Lisa asked."],
          ["「わたしは[子供|こども]のとき、[教師|きょうし]や[看護師|かんごし]や[研究者|けんきゅうしゃ]になりたかった。」", "\"When I was a child, I wanted to be a schoolteacher, a nurse, a researcher...\""],
          ["「[作家|さっか]や[漫画家|まんがか]や[俳優|はいゆう]にもなりたかった。」", "\"I also wanted to be a writer, a cartoonist, an actress...\""],
          ["「でも、[宇宙飛行士|うちゅうひこうし]に[なった|なった|なる]。」", "\"But I became an astronaut.\""],
          ["「[将来|しょうらい]の[夢|ゆめ]は、[もう一度|もういちど]{宇宙|うちゅう}に[行く|いく|行く]ことです。」", "\"My dream for the future is to go to space one more time.\""],
          ["「[大統領|だいとうりょう]は？」とダイキが[聞いた|きいた|聞く]。", "\"What about president?\" Daiki asked."],
          ["「[大統領|だいとうりょう]には[会った|あった|会う]ことがある。[つまらなかった|つまらなかった|つまらない]よ。」とウメさんは[静か|しずか]に[言った|いった|言う]。", "\"I've met a president. He was boring,\" Ume said calmly."],
          ["「ワン！」と[犬|いぬ]の[大統領|だいとうりょう]が[言った|いった|言う]。", "\"Woof!\" said President the dog."],
          ["「この[大統領|だいとうりょう]は[面白い|おもしろい]ね。」とウメさんはわらった。", "\"This president is fun, though,\" Ume said with a laugh."]
        ],
        [
          ["[旅行|りょこう]の[後|あと]、[三人|さんにん|〜にん]は[うち]に[帰った|かえった|帰る]。", "After the trip, the three of them went home."],
          ["そして、[大学|だいがく]の[授業|じゅぎょう]がまたはじまった。", "And then university classes started again."],
          ["ダイキは[今学期|こんがっき]、[授業|じゅぎょう]を[よく][サボった|サボった|サボる]。", "Daiki had cut class a lot this semester."],
          ["[先週|せんしゅう]の[テスト]は[二十点|にじゅってん|〜てん]だった。", "He got twenty points on last week's test."],
          ["「[来学期|らいがっき]は、[もっと][勉強する|べんきょうする|勉強する]よ。」とダイキは[言った|いった|言う]。", "\"Next semester, I'll study more,\" Daiki said."],
          ["「わたしは[来学期|らいがっき]、[けいざい]の[授業|じゅぎょう]も[取りたい|とりたい|取る]。ダイキにも[教える|おしえる|教える]よ。」とウメさんが[言った|いった|言う]。", "\"Next semester I want to take an economics class too. I'll teach it to you too, Daiki,\" Ume said."],
          ["「[僕|ぼく]は[料理|りょうり]を[習いたい|ならいたい|習う]。」とダイキが[言った|いった|言う]。", "\"I want to learn cooking,\" Daiki said."],
          ["そのとき、[先生|せんせい]が[教室|きょうしつ]に[入って|はいって|入る][来た|きた|来る]。", "Just then, the teacher came into the classroom."],
          ["「みなさん、[来週|らいしゅう]は[試験|しけん]ですよ。」", "\"Everyone, the exam is next week.\""],
          ["ダイキの[顔|かお]はあおく[なった|なった|なる]。", "Daiki's face turned pale."]
        ]
      ] },
    { title: "試験の前の病気", titleEn: "Sick Before the Exam",
      paragraphs: [
        [
          ["[旅行|りょこう]から[帰って|かえって|帰る]、また[学校|がっこう]が{始まった|はじまった}。", "After coming back from the trip, school started again."],
          ["[もうすぐ][試験|しけん]だった。", "Exams were very soon."],
          ["でも、ある[朝|あさ]、ダイキは[元気がなかった|げんきがなかった|元気がない]。", "But one morning, Daiki didn't look well."],
          ["「[おなか]が[痛い|いたい|痛い]…。[のど]も[痛い|いたい|痛い]…。」とダイキは[言った|いった|言う]。", "\"My stomach hurts... My throat hurts too...\" Daiki said."],
          ["[それに]、[せきが出た|せきがでた|せきが出る]。", "On top of that, he was coughing."],
          ["ウメさんはダイキの{頭|あたま}をさわった。", "Ume touched Daiki's head."],
          ["「[熱がある|ねつがある|熱がある]ね。[昨日|きのう]、おさけを[飲みすぎた|のみすぎた|飲む]の？[二日酔い|ふつかよい]？」", "\"You have a fever. Did you drink too much last night? Is it a hangover?\""],
          ["「{違う|ちがう}よ！[多分|たぶん][インフルエンザ]だよ。[僕|ぼく]は[死ぬ|しぬ|死ぬ]かもしれない…。」", "\"No! It's probably the flu. I might die...\""],
          ["「[大丈夫|だいじょうぶ]。[病院|びょういん]に[行こう|いこう|行く]。」とウメさんは[静か|しずか]に[言った|いった|言う]。", "\"You'll be fine. Let's go to the hospital,\" Ume said calmly."]
        ],
        [
          ["[病院|びょういん]は[近かった|ちかかった|近い]ので、[二人|ふたり]は[歩いて|あるいて|歩く][行った|いった|行く]。", "The hospital was close, so the two of them walked there."],
          ["でも、ウメさんは[歩く|あるく|歩く]のが[とても][速い|はやい|速い]。", "But Ume walks very fast."],
          ["ダイキは[走らなければならなかった|はしらなければならなかった|走る]。", "Daiki had to run."],
          ["「おばあちゃん、[待って|まって|待つ]…。[足|あし]も[痛く|いたく|痛い]なってきた…。」", "\"Grandma, wait... Now my feet are starting to hurt too...\""],
          ["「[病気|びょうき]の[人|ひと]は[早く|はやく|はやく][医者|いしゃ]に[会った|あった|会う]ほうがいいよ。」", "\"Sick people should see a doctor quickly.\""]
        ],
        [
          ["[医者|いしゃ]はダイキの[のど]を[見て|みて|見る]、「[インフルエンザ]じゃありません。[風邪|かぜ]ですね。」と[言った|いった|言う]。", "The doctor looked at Daiki's throat and said, \"It's not the flu. It's a cold.\""],
          ["「[アレルギー]はありますか。」", "\"Do you have any allergies?\""],
          ["「[卵|たまご]の[アレルギー]があります。」とダイキは{答えた|こたえた}。", "\"I'm allergic to eggs,\" Daiki answered."],
          ["「じゃあ、この[薬を飲んで|くすりをのんで|薬を飲む]ください。[二三日|にさんにち][寝た|ねた|寝る]ほうがいいですよ。[お大事に|おだいじに]。」", "\"Then please take this medicine. You should rest for two or three days. Get well soon.\""],
          ["それから、ウメさんは[医者|いしゃ]に「[私|わたし]の[歯|は]も[見て|みて|見る]ください。」と[言った|いった|言う]。", "Then Ume said to the doctor, \"Please look at my teeth too.\""],
          ["[医者|いしゃ]はびっくりした。", "The doctor was amazed."],
          ["「{八十歳|はちじゅっさい}ですか？[歯|は]が[ぜんぶ|ぜんぶ|全部]あります！すばらしい！」", "\"You're eighty? You have all your teeth! Wonderful!\""],
          ["「{宇宙|うちゅう}では[甘い|あまい|甘い][物|もの]を[食べなかった|たべなかった|食べる]んです。」とウメさんは[言った|いった|言う]。", "\"In space, I didn't eat sweet things,\" Ume said."]
        ],
        [
          ["[帰る|かえる|帰る]{前|まえ}に、[病院|びょういん]の[お金|おかね]を[払わなければならなかった|はらわなければならなかった|払う]。", "Before going home, they had to pay the hospital."],
          ["でも、ダイキはさいふを[なくした|なくした|なくす]。", "But Daiki had lost his wallet."],
          ["「あれ？ない…。[病院|びょういん]の{前|まえ}で{落とした|おとした}のかな…。」", "\"Huh? It's not here... Maybe I dropped it in front of the hospital...\""],
          ["しかたがないので、ウメさんが{薬|くすり}[代|だい|〜代]と[病院|びょういん][代|だい|〜代]を[払った|はらった|払う]。", "There was no choice, so Ume paid for the medicine and the hospital bill."],
          ["「ごめん、おばあちゃん。あとで[返す|かえす|返す]よ。」", "\"Sorry, Grandma. I'll pay you back later.\""]
        ],
        [
          ["アパートに[帰る|かえる|帰る]と、リサも[元気がなかった|げんきがなかった|元気がない]。", "When they got back to the apartment, Lisa didn't look well either."],
          ["リサの[机|つくえ]の{上|うえ}に、[大きい|おおきい|大きい]はこがあった。", "There was a big box on Lisa's desk."],
          ["アメリカのお{母さん|かあさん}からの[プレゼント]だった。", "It was a present from her mother in America."],
          ["{中|なか}に[服|ふく]と[お菓子|おかし]と[手紙|てがみ]があった。", "Inside were clothes, sweets, and a letter."],
          ["リサは[手紙|てがみ]を[読んで|よんで|読む]、[泣いて|ないて|泣く]いた。", "Lisa had read the letter and was crying."],
          ["「どうしたんですか。」とウメさんは[聞いた|きいた|聞く]。", "\"What's wrong?\" Ume asked."],
          ["「[ホームシック]なんです。[家族|かぞく]に[会いたい|あいたい|会う]んです…。」", "\"I'm homesick. I want to see my family...\""]
        ],
        [
          ["ウメさんはリサのとなりに[座った|すわった|座る]。", "Ume sat down next to Lisa."],
          ["「[私|わたし]も[初めて|はじめて]{宇宙|うちゅう}に[行った|いった|行く]とき、[ホームシック]になったよ。」", "\"When I went to space for the first time, I got homesick too.\""],
          ["「ウメさんも？」", "\"You too, Ume?\""],
          ["「うん。{宇宙|うちゅう}は[広い|ひろい|広い]けど、{宇宙船|うちゅうせん}の[部屋|へや]は[とても][狭い|せまい|狭い]の。[毎晩|まいばん]、{地球|ちきゅう}を[見て|みて|見る][泣いた|ないた|泣く]よ。」", "\"Yes. Space is wide, but the rooms on a spaceship are very cramped. Every night I looked at the Earth and cried.\""],
          ["「[同じ|おなじ]ですね。」とリサは{少し|すこし}{笑った|わらった}。", "\"It's the same, then,\" Lisa said with a little smile."],
          ["「{寂しい|さびしい}ときは、[できるだけ][友だち|ともだち]と[話した|はなした|話す]ほうがいいよ。」", "\"When you're lonely, you should talk with friends as much as possible.\""]
        ],
        [
          ["リサはジャーナリストになりたいので、[政治|せいじ]に[興味がある|きょうみがある|興味がある]。", "Lisa wants to be a journalist, so she is interested in politics."],
          ["[試験|しけん]のために、[日本|にほん]の[政治|せいじ]の[新聞|しんぶん]を[読んで|よんで|読む]いた。", "For the exam, she had been reading newspaper articles on Japanese politics."],
          ["でも、[漢字|かんじ]が[多くて|おおくて|多い]、[意味|いみ]が[わからなかった|わからなかった|わかる]。", "But there were so many kanji that she didn't understand the meaning."],
          ["「この[言葉|ことば]の[意味|いみ]は[何|なん]ですか。」", "\"What does this word mean?\""],
          ["ウメさんは[ぜんぶ|ぜんぶ|全部]{説明した|せつめいした}。", "Ume explained all of it."],
          ["「ウメさんは[何|なん]でも[知って|しって|知る]いますね。」", "\"You know everything, Ume.\""],
          ["「{八十年|はちじゅうねん}{生きて|いきて}いるからね。」", "\"That's because I've been alive for eighty years.\""]
        ],
        [
          ["その[夜|よる]、ダイキの[電話|でんわ]が{鳴った|なった}。", "That night, Daiki's phone rang."],
          ["ダイキの[彼女|かのじょ]のミキからだった。", "It was from Daiki's girlfriend, Miki."],
          ["「ダイキ、[今日|きょう]、[私|わたし]のテニスの[試合|しあい]に[来なかった|こなかった|来る]ね。」", "\"Daiki, you didn't come to my tennis match today.\""],
          ["「ごめん。[病気|びょうき]だったんだ。[試合|しあい]の[切符|きっぷ]も[買って|かって|買う]いたんだけど…。」", "\"Sorry. I was sick. I even bought a ticket for the match, but...\""],
          ["「[先週|せんしゅう]も[用事|ようじ]があるって[言って|いって|言う]、[来なかった|こなかった|来る]でしょう。」", "\"Last week you also said you had something to do, and didn't come, right?\""],
          ["「それは…。」", "\"That was...\""],
          ["「[私|わたし]はもっとやさしい[彼氏|かれし]がほしいの。[別れましょう|わかれましょう|別れる]。」", "\"I want a kinder boyfriend. Let's break up.\""],
          ["そして、[電話|でんわ]は{切れた|きれた}。", "And then the call ended."]
        ],
        [
          ["ダイキはベッドの{上|うえ}で[泣いた|ないた|泣く]。", "Daiki cried on his bed."],
          ["「[彼女|かのじょ]と[別れた|わかれた|別れる]…。[僕|ぼく]は[悪い|わるい|悪い][彼氏|かれし]だった…。」", "\"I broke up with my girlfriend... I was a bad boyfriend...\""],
          ["「[彼|かれ]はいい[子|こ]だよ。ちょっと[遅い|おそい|遅い]だけ。」とウメさんはリサに[言った|いった|言う]。", "\"He's a good kid. He's just a little slow,\" Ume said to Lisa."],
          ["「{聞こえて|きこえて}いるよ…。」", "\"I can hear you...\""]
        ],
        [
          ["それから[三日|みっか]、ウメさんは[二人|ふたり]の{世話|せわ}をした。", "For the next three days, Ume took care of the two of them."],
          ["[朝|あさ]、{五時|ごじ}に[起きて|おきて|起きる]、おかゆを[作った|つくった|作る]。", "In the morning she got up at five and made rice porridge."],
          ["ダイキのおかゆには[卵|たまご]を{入れなかった|いれなかった}。", "She didn't put egg in Daiki's."],
          ["ダイキはよく[のどがかわいた|のどがかわいた|喉が渇く]ので、ウメさんは[甘い|あまい|甘い]りんごの[ジュース]を[持って|もって|持つ][来た|きた|来る]。", "Daiki got thirsty often, so Ume brought him sweet apple juice."],
          ["ダイキは[ジュース]を[飲みすぎて|のみすぎて|飲む]、[一時間|いちじかん|〜じかん]に[三回|さんかい|〜かい][お手洗い|おてあらい]に[行った|いった|行く]。", "Daiki drank too much juice and went to the restroom three times an hour."],
          ["リサには[毎晩|まいばん]、[アメリカ]の[歌|うた]を[歌って|うたって|歌う]あげた。", "And every night she sang American songs for Lisa."],
          ["{少しずつ|すこしずつ}、[二人|ふたり]は[元気|げんき]になった。", "Little by little, the two of them got better."]
        ],
        [
          ["{四日目|よっかめ}の[朝|あさ]、ダイキは[机|つくえ]の{前|まえ}に[座った|すわった|座る]。", "On the morning of the fourth day, Daiki sat down at his desk."],
          ["「[試験|しけん]は[来週|らいしゅう]だ…。[緊張する|きんちょうする|緊張する]…。」", "\"The exam is next week... I'm so nervous...\""],
          ["「[心配しない|しんぱいしない|心配する]で。[できるだけ][勉強すれば|べんきょうすれば|勉強する][大丈夫|だいじょうぶ]。」とウメさんは[言った|いった|言う]。", "\"Don't worry. If you study as much as you can, you'll be fine,\" Ume said."],
          ["「でも、[僕|ぼく]の[成績|せいせき]は[いつも][悪い|わるい|悪い]んだよ。」", "\"But my grades are always bad.\""],
          ["「おばあちゃんも[心配して|しんぱいして|心配する]いるよ。[お金|おかね]のことを。」", "\"I'm worried too. About money.\""]
        ],
        [
          ["ダイキは[机|つくえ]の{上|うえ}の[紙|かみ]を[見た|みた|見る]。", "Daiki looked at the papers on his desk."],
          ["[病院|びょういん][代|だい|〜代]、{薬|くすり}[代|だい|〜代]、[電話|でんわ][代|だい|〜代]…。", "The hospital bill, the medicine bill, the phone bill..."],
          ["それに、[使わなかった|つかわなかった|使う][試合|しあい]の[切符|きっぷ]。", "And on top of that, the unused ticket for the match."],
          ["さいふは[まだ]ない。", "And his wallet was still missing."],
          ["「おばあちゃんに[お金|おかね]を[返さなければならない|かえさなければならない|返す]し、[新しい|あたらしい|新しい]さいふも[買わなきゃ|かわなきゃ|買う]…。」", "\"I have to pay Grandma back, and I have to buy a new wallet too...\""],
          ["ダイキは[立って|たって|立つ]、[大きい|おおきい|大きい]{声|こえ}で[言った|いった|言う]。", "Daiki stood up and said in a loud voice,"],
          ["「[決めた|きめた|決める]！[僕|ぼく]は[アルバイト]を[する]！」", "\"I've decided! I'm getting a part-time job!\""]
        ]
      ] },
    { title: "仕事さがし", titleEn: "The Job Hunt",
      paragraphs: [
        [
          ["[次|つぎ]の{日|ひ}から、ダイキの[仕事|しごと]さがしが{始まった|はじまった}。", "The next day, Daiki's job hunt began."],
          ["ダイキは[アプリ]で[アルバイト]の[広告|こうこく]を[見た|みた|見る]。", "Daiki looked at part-time job ads on an app on his smartphone."],
          ["[いろいろ]な[募集|ぼしゅう]があった。", "There were all kinds of job openings."],
          ["「[空港|くうこう]のレストラン、[一週間|いっしゅうかん|〜しゅうかん]に[二日|ふつか]…。{遠い|とおい}から[だめ]だ。」", "\"A restaurant at the airport, two days a week... It's too far, so no good.\""],
          ["「[弁護士|べんごし]の{事務所|じむしょ}…。[大人|おとな]の[人|ひと][だけ|だけ|〜だけ]…。[僕|ぼく]は[まだ][子供|こども]みたいだし、[だめ]だ。」", "\"A lawyer's office... adults only... I still act like a kid, so no good.\""],
          ["そのとき、{一つ|ひとつ}の[広告|こうこく]が[目|め]に{入った|はいった}。", "Just then, one ad caught his eye."],
          ["「[辛い|からい|辛い][カレー]の[店|みせ]、{店員|てんいん}[募集|ぼしゅう]！[アパート]から[近い|ちかい|近い]！」", "\"Spicy curry shop, now hiring staff! Close to the apartment!\""],
          ["ダイキはもう[六日|むいか]も[仕事|しごと]を[探して|さがして|探す]いたので、とても[うれしかった|うれしかった|うれしい]。", "Daiki had already been looking for a job for six days, so he was very glad."]
        ],
        [
          ["ダイキは[店|みせ]に[電話して|でんわして|電話する]、{面接|めんせつ}の[約束|やくそく]をした。", "Daiki called the shop and made an appointment for an interview."],
          ["それを[聞いて|きいて|聞く]、ウメさんは[静か|しずか]に[言った|いった|言う]。", "Hearing this, Ume said calmly,"],
          ["「おばあちゃんも[行く|いく|行く]わ。[私|わたし]も[アルバイト]を[探して|さがして|探す]いるの。」", "\"I'm going too. I'm looking for a part-time job as well.\""],
          ["「え？[カフェ]の[アルバイト]は？」", "\"Huh? What about your job at the cafe?\""],
          ["「[カフェ]は[一週間|いっしゅうかん|〜しゅうかん]に[三日|みっか][だけ|だけ|〜だけ]なの。[ひま]なのよ。」", "\"The cafe is only three days a week. I have free time.\""],
          ["ダイキは{頭|あたま}が[痛く|いたく|痛い]なりそうだった。", "Daiki looked like he was about to get a headache."]
        ],
        [
          ["その[夜|よる]、リサが[紅茶|こうちゃ]を[飲みながら|のみながら|飲む][言った|いった|言う]。", "That night, Lisa said while drinking black tea,"],
          ["「{東京|とうきょう}は[物価|ぶっか]が[たかい]よね。」", "\"Prices in Tokyo are high, aren't they.\""],
          ["「[アメリカ]から[来た|きた|来る]とき、[三日|みっか]で[お金|おかね]を[全部|ぜんぶ][使って|つかって|使う]しまったよ。」", "\"When I came from America, I used up all my money in three days.\""],
          ["「[僕|ぼく]も[お金|おかね]がほしい。[将来|しょうらい]は[大きい|おおきい|大きい][マンション]に[住みたい|すみたい|住む]。」とダイキは[言った|いった|言う]。", "\"I want money too. In the future I want to live in a big condo,\" Daiki said."],
          ["「じゃあ、まず[アパート]の[部屋|へや]を[掃除したら|そうじしたら|掃除する]？」", "\"Then how about cleaning your room in the apartment first?\""],
          ["リサは{笑った|わらった}。", "Lisa laughed."]
        ],
        [
          ["{面接|めんせつ}の{日|ひ}、ウメさんは[朝|あさ]{五時|ごじ}に[起きた|おきた|起きる]。", "On the day of the interview, Ume got up at five in the morning."],
          ["[一日|いちにち]に[三回|さんかい|〜かい][歯|は]を[磨く|みがく|磨く]が、その{日|ひ}は[五回|ごかい|〜かい][磨いた|みがいた|磨く]。", "She brushes her teeth three times a day, but that day she brushed them five times."],
          ["それから、[きれい]な[着物|きもの]を[着て|きて|着る]、[十キロ|じゅっキロ|〜キロ][走って|はしって|走る][店|みせ]に[行った|いった|行く]。", "Then she put on a beautiful kimono and ran ten kilometers to the shop."],
          ["[着物|きもの]で[走れる|はしれる|走る][人|ひと]は、あまりいない。", "Not many people can run in a kimono."],
          ["ダイキはまた[遅刻した|ちこくした|遅刻する]。", "Daiki was late again."]
        ],
        [
          ["{店長|てんちょう}は[背が高くて|せがたかくて|背が高い]、[怖そう|こわそう|怖い]な[男の人|おとこのひと]だった。", "The manager was a tall, scary-looking man."],
          ["「[私|わたし]は[厳しい|きびしい|厳しい]ですよ。」と{店長|てんちょう}は[言った|いった|言う]。", "\"I'm strict, you know,\" the manager said."],
          ["ウメさんは[きれい]に{頭|あたま}を{下げた|さげた}。", "Ume bowed beautifully."],
          ["「[私|わたくし]はウメ[と申します|ともうします|〜ともうします]。[大学|だいがく]の{一年生|いちねんせい}で、{八十|はちじゅう}{歳|さい}です。」", "\"My name is Ume. I'm a first-year university student, and I'm eighty years old.\""],
          ["{店長|てんちょう}は{何|なに}も[言えなかった|いえなかった|言う]。", "The manager couldn't say anything."],
          ["「{何|なに}ができますか。」とやっと[聞いた|きいた|聞く]。", "\"What can you do?\" he finally asked."]
        ],
        [
          ["「[空手|からて]ができます。[セーター]も[編めます|あめます|編む]。[五日|いつか]で[一枚|いちまい|〜まい][編めます|あめます|編む]。」", "\"I can do karate. I can also knit sweaters. I can knit one in five days.\""],
          ["「[バイク]にも[乗れます|のれます|乗る]。{若い|わかい}とき、[バイク]で[七日|なのか]、[アメリカ]を[旅行しました|りょこうしました|旅行する]。」", "\"I can also ride a motorcycle. When I was young, I traveled across America by motorcycle for seven days.\""],
          ["「[ゴルフ]もできますし、[楽器|がっき]も[いろいろ]{弾けます|ひけます}。」", "\"I can play golf, and I can play various musical instruments.\""],
          ["「[象|ぞう]にも[乗れます|のれます|乗る]。インドで[八日|ようか]、[象|ぞう]に[乗って|のって|乗る][旅行しました|りょこうしました|旅行する]。」", "\"I can ride elephants too. I traveled on an elephant in India for eight days.\""],
          ["「それから、[外国語|がいこくご]が{七つ|ななつ}[話せます|はなせます|話す]。」", "\"And I can speak seven foreign languages.\""],
          ["「{宇宙|うちゅう}でロシアの[人|ひと]に[ロシア語|ロシアご|〜ご]を[習いました|ならいました|習う]。[文法|ぶんぽう]は[難しかった|むずかしかった|難しい]ですが、[四日|よっか]で[わかりました|わかりました|わかる]。」", "\"I learned Russian from a Russian person in space. The grammar was hard, but I understood it in four days.\""],
          ["{店長|てんちょう}は[口|くち]を[開けて|あけて|開ける]、[聞いて|きいて|聞く]いた。", "The manager listened with his mouth open."]
        ],
        [
          ["「[すごい]…。あなたは？」", "\"Incredible... And you?\""],
          ["{店長|てんちょう}はダイキを[見た|みた|見る]。", "The manager looked at Daiki."],
          ["「[僕|ぼく]は…ダイキです。えっと…[寝る|ねる|寝る]のが[上手|じょうず]です。」", "\"I'm... Daiki. Um... I'm good at sleeping.\""],
          ["「…じゃあ、[二人|ふたり]とも、この[カレー]を[食べて|たべて|食べる]みてください。」", "\"...Well then, both of you, please try eating this curry.\""],
          ["{店長|てんちょう}は[特に|とくに][辛い|からい|辛い][カレー]を[持って|もって|持つ][来た|きた|来る]。", "The manager brought out an especially spicy curry."],
          ["ウメさんは[全部|ぜんぶ][食べて|たべて|食べる]、「[おいしい]わ。」と[言った|いった|言う]。", "Ume ate all of it and said, \"Delicious.\""],
          ["ダイキは{一口|ひとくち}[食べて|たべて|食べる]、[気分が悪くなった|きぶんがわるくなった|気分が悪い]。", "Daiki took one bite and felt sick."],
          ["[体|からだ]が[熱く|あつく|熱い]なって、[顔|かお]が{赤く|あかく}なった。", "His body got hot and his face turned red."],
          ["[水|みず]を{九杯|きゅうはい}[飲んで|のんで|飲む]、[泣いた|ないた|泣く]。", "He drank nine glasses of water and cried."]
        ],
        [
          ["{店長|てんちょう}は{少し|すこし}{考えて|かんがえて}から、[言った|いった|言う]。", "The manager thought for a moment, then said,"],
          ["「ウメさんはキッチンで[働いて|はたらいて|働く]ください。」", "\"Ume, please work in the kitchen.\""],
          ["「ダイキさんは…[お皿|おさら]を[洗って|あらって|洗う]、[磨いて|みがいて|磨く]ください。[一週間|いっしゅうかん|〜しゅうかん]に[四回|よんかい|〜かい]です。」", "\"Daiki... please wash and polish the dishes. Four times a week.\""],
          ["「え！[僕|ぼく]も[働けます|はたらけます|働く]か！」", "\"What! I can work here too?!\""],
          ["ダイキは[うれしくて|うれしくて|うれしい]、また[泣いた|ないた|泣く]。", "Daiki was so glad that he cried again."],
          ["「でも、[約束|やくそく]してください。[遅刻しない|ちこくしない|遅刻する]で。」と{店長|てんちょう}は[言った|いった|言う]。", "\"But promise me. Don't be late,\" said the manager."],
          ["「はい！[約束|やくそく]します！[がんばります|がんばります|頑張る]！」", "\"Yes! I promise! I'll do my best!\""]
        ],
        [
          ["{帰り|かえり}に、ダイキは[言った|いった|言う]。", "On the way home, Daiki said,"],
          ["「おばあちゃん、ありがとう。[お金|おかね]は[全部|ぜんぶ][返す|かえす|返す]よ。[約束|やくそく]する。」", "\"Grandma, thank you. I'll pay you back all the money. I promise.\""],
          ["「ダイキが[約束を守る|やくそくをまもる]なら、[私|わたし]はとても[幸せ|しあわせ]よ。」", "\"If you keep your promise, I'll be very happy.\""],
          ["ウメさんは[やさしく|やさしく|やさしい]{笑った|わらった}。", "Ume smiled kindly."],
          ["ダイキはおばあちゃんの[言葉|ことば]に[感動した|かんどうした|感動する]。", "Daiki was moved by his grandmother's words."],
          ["でも、{少し|すこし}[悲しかった|かなしかった|悲しい]。{八十|はちじゅう}{歳|さい}のおばあちゃんのほうが、[仕事|しごと]が[上手|じょうず]だから。", "But he was also a little sad, because his eighty-year-old grandmother was better at working than he was."]
        ],
        [
          ["[アパート]に[帰る|かえる|帰る]と、リサがカレンダーを[見て|みて|見る]いた。", "When they got back to the apartment, Lisa was looking at the calendar."],
          ["「[あと][十日|とおか]で[バレンタインデー]だよ！」", "\"Valentine's Day is in ten days!\""],
          ["ダイキは[九日|ここのか]も[待てない|まてない|待つ][顔|かお]をした。", "Daiki made a face like he couldn't even wait nine days."],
          ["でも、すぐに{思い出した|おもいだした}。", "But then he quickly remembered something."],
          ["ダイキには、もう[彼女|かのじょ]がいない。", "Daiki didn't have a girlfriend anymore."]
        ]
      ] },
    { title: "プレゼントの季節", titleEn: "The Season of Presents",
      paragraphs: [
        [
          ["「[もうすぐ][バレンタインデー]だね。」とリサが[言った|いった|言う]。", "\"Valentine's Day is coming soon, huh,\" Lisa said."],
          ["ダイキは[新しい|あたらしい|新しい][アルバイト]を{始めた|はじめた}。", "Daiki had started a new part-time job."],
          ["でも、[お金|おかね]を[全然|ぜんぜん][使わなかった|つかわなかった|使う]。", "But he didn't spend any money at all."],
          ["「[僕|ぼく]は[誰|だれ]にも[プレゼント]を[あげない|あげない|あげる]よ。[お金|おかね]は{大切|たいせつ}だから。」", "\"I'm not giving presents to anyone. Money is important.\""],
          ["「ダイキ[君|くん|〜くん]は{本当|ほんとう}に[けち]だね。」とリサは{笑った|わらった}。", "\"Daiki, you're really stingy,\" Lisa laughed."],
          ["ウメさんは{何|なに}も[言わなかった|いわなかった|言う]。", "Ume didn't say anything."],
          ["その[夜|よる]、ウメさんは[静か|しずか]に[セーター]を[編みはじめた|あみはじめた|編む]。", "That night, Ume quietly started knitting a sweater."]
        ],
        [
          ["「[皆さん|みなさん]に[あげる|あげる|あげる]の。」とウメさんは[言った|いった|言う]。", "\"They're for everyone,\" Ume said."],
          ["ウメさんの{手|て}は[とても][速かった|はやかった|速い]。", "Ume's hands were very fast."],
          ["[一日|いちにち]で[セーター]が[三枚|さんまい|〜まい][できた|できた|できる]。", "In one day, three sweaters were finished."],
          ["[次|つぎ]の{日|ひ}は[マフラー]が[十本|じゅっぽん|〜ほん][できた|できた|できる]。", "The next day, ten scarves were finished."],
          ["ウメさんは[セーター]をダイキの[両親|りょうしん]と[おじさん]と[おばさん]に[送った|おくった|送る]。", "Ume sent sweaters to Daiki's parents, his uncle and his aunt."],
          ["[アパート]の[大家さん|おおやさん]にも[マフラー]を[あげた|あげた|あげる]。", "She also gave a scarf to the landlady of their apartment."],
          ["[大家さん|おおやさん]は[猫|ねこ]を[二匹|にひき|〜ひき][飼って|かって|飼う]いた。", "The landlady had two cats."],
          ["ウメさんは[猫|ねこ]にも[小さい|ちいさい|小さい][セーター]を[編んだ|あんだ|編む]。", "Ume knitted small sweaters for the cats, too."],
          ["「まあ、[こんな|こんな|こんな〜][素敵|すてき]な[セーター]は[初めて|はじめて][見た|みた|見る]わ！」と[大家さん|おおやさん]は[言った|いった|言う]。", "\"Oh my, I've never seen such a lovely sweater!\" the landlady said."],
          ["[猫|ねこ][たち|たち|〜たち]も[セーター]が[よく][似合って|にあって|似合う]いた。", "The sweaters looked good on the cats, too."]
        ],
        [
          ["[バレンタインデー]の{日|ひ}、リサは[チョコレート]を[たくさん][作った|つくった|作る]。", "On Valentine's Day, Lisa made lots of chocolate."],
          ["ダイキに[三個|さんこ|〜こ]、タロウに[五個|ごこ|〜こ][あげた|あげた|あげる]。", "She gave three pieces to Daiki and five to Taro."],
          ["「ありがとう。[ちょうど][チョコレート]が[欲しかった|ほしかった|欲しい]んだ。」とダイキは[言った|いった|言う]。", "\"Thanks. I was just wanting some chocolate,\" Daiki said."],
          ["タロウは[とても][うれしかった|うれしかった|うれしい]。", "Taro was very happy."],
          ["「[五個|ごこ|〜こ]！ダイキより[多い|おおい|多い]！」", "\"Five! That's more than Daiki got!\""],
          ["[次|つぎ]の{日|ひ}、タロウはダイキに[相談した|そうだんした|相談する]。", "The next day, Taro asked Daiki for advice."],
          ["「リサさんは[僕|ぼく]が[好き|すき]かもしれない。[どうしたらいい|どうしたらいい|どうしたらいい]？」", "\"Lisa might like me. What should I do?\""],
          ["「[さあ]…。」とダイキは[言った|いった|言う]。", "\"Hmm, I'm not sure...\" said Daiki."],
          ["「[ホワイトデー]に[すごい][お返し|おかえし]を[あげたら|あげたら|あげる]どう？」", "\"Why don't you give her an amazing return gift on White Day?\""],
          ["タロウは[急に|きゅうに][大きい|おおきい|大きい]{声|こえ}で[言った|いった|言う]。", "Suddenly Taro spoke in a loud voice."],
          ["「そうだ！[プロポーズしよう|プロポーズしよう|プロポーズする]！」", "\"That's it! I'll propose!\""],
          ["「え？[ちょっと][待って|まって|待つ]…。」", "\"Huh? Wait a minute...\""]
        ],
        [
          ["[ホワイトデー]の{前|まえ}の{日|ひ}、ウメさんはリサとダイキとタロウに[セーター]を[あげた|あげた|あげる]。", "The day before White Day, Ume gave sweaters to Lisa, Daiki and Taro."],
          ["リサは[すぐ][着て|きて|着る]みた。", "Lisa tried hers on right away."],
          ["「[似合う|にあう|似合う]？」", "\"Does it look good on me?\""],
          ["「うん、[とても][おしゃれ]だよ。」とダイキが[言った|いった|言う]。", "\"Yeah, it's really stylish,\" Daiki said."],
          ["「ウメさんが[くれた|くれた|くれる][セーター]、[暖かい|あたたかい|暖かい]！[私たち|わたしたち]は[幸せ|しあわせ]だね。」", "\"The sweater Ume gave me is so warm! We're lucky, aren't we.\""],
          ["「{去年|きょねん}の[クリスマス]は{宇宙|うちゅう}にいたから、[誰|だれ]にも[プレゼント]を[あげられなかった|あげられなかった|あげる]の。」とウメさんは[言った|いった|言う]。", "\"Last Christmas I was in space, so I couldn't give anyone presents,\" Ume said."],
          ["「ウメさんの[ご主人|ごしゅじん]は{何|なに}を[くれた|くれた|くれる]んですか。」とリサが[聞いた|きいた|聞く]。", "\"What did your husband give you?\" Lisa asked."],
          ["「[ネクタイ]と[シャツ]を[送って|おくって|送る]くれた。{宇宙|うちゅう}で[着た|きた|着る]よ。」", "\"He sent me a necktie and a shirt. I wore them in space.\""],
          ["「{宇宙|うちゅう}で[ネクタイ]？」みんなは{笑った|わらった}。", "\"A necktie in space?\" Everyone laughed."]
        ],
        [
          ["[ホワイトデー]が[来た|きた|来る]。", "White Day came."],
          ["ダイキはリサに[お返し|おかえし]を[あげた|あげた|あげる]。", "Daiki gave Lisa a return gift."],
          ["[鉛筆|えんぴつ][一本|いっぽん|〜ほん][だけ|だけ|〜だけ]だった。", "It was just one pencil."],
          ["「[鉛筆|えんぴつ]？」", "\"A pencil?\""],
          ["「[履歴書|りれきしょ]を[書く|かく|書く]とき、[便利|べんり]だよ。」", "\"It's handy when you write a résumé.\""],
          ["ウメさんはダイキに[注意した|ちゅういした|注意する]。", "Ume warned Daiki."],
          ["「ダイキ、[けち]は[だめ]よ。」", "\"Daiki, being stingy is no good.\""],
          ["ダイキはウメさんにも[お返し|おかえし]を[あげた|あげた|あげる]。", "Daiki gave Ume a return gift, too."],
          ["[みかん][一個|いっこ|〜こ]だった。", "It was one mandarin orange."],
          ["「ありがとう。[ちょうど][みかん]が[欲しかった|ほしかった|欲しい]の。」とウメさんは[静か|しずか]に[言った|いった|言う]。", "\"Thank you. I was wanting exactly a mandarin orange,\" Ume said calmly."]
        ],
        [
          ["そのとき、タロウが[大きい|おおきい|大きい][かばん]を[持って|もって|持つ][来た|きた|来る]。", "Just then, Taro came in carrying a big bag."],
          ["「リサさん、[ホワイトデー]の[お返し|おかえし]です！」", "\"Lisa, here's your White Day return gift!\""],
          ["[かばん]から[いろいろ]なものが{出て|でて}きた。", "All kinds of things came out of the bag."],
          ["[ぬいぐるみ]の[犬|いぬ]が[三匹|さんびき|〜ひき]。", "Three stuffed dogs."],
          ["[漫画|まんが]が[五冊|ごさつ|〜さつ]。", "Five comic books."],
          ["[化粧品|けしょうひん]と[お皿|おさら]と、[ラジオ]も[一台|いちだい|〜だい]あった。", "There were also cosmetics, plates, and a radio."],
          ["「こんなにたくさん…？」とリサは[言った|いった|言う]。", "\"This much...?\" said Lisa."],
          ["「[私|わたし]、[化粧品|けしょうひん]は[あまり][使わない|つかわない|使う]けど…ありがとう。」", "\"I don't really use cosmetics, but... thank you.\""]
        ],
        [
          ["タロウは[急に|きゅうに][小さい|ちいさい|小さい]はこを{出した|だした}。", "Suddenly Taro took out a small box."],
          ["はこには[指輪|ゆびわ]が[入って|はいって|入る]いた。", "Inside the box was a ring."],
          ["「リサさん、[僕|ぼく]と[結婚して|けっこんして|結婚する]ください！」", "\"Lisa, please marry me!\""],
          ["タロウはリサに[プロポーズした|プロポーズした|プロポーズする]。", "Taro had proposed to Lisa."],
          ["リサはちょっと{困った|こまった}かおをした。", "Lisa looked a little troubled."],
          ["「タロウ[君|くん|〜くん]、ありがとう。[とても][うれしい|うれしい|うれしい]。」", "\"Taro, thank you. I'm really happy.\""],
          ["「でも、[私|わたし]は[ジャーナリスト]になりたいの。[今|いま]は[誰|だれ]の[奥さん|おくさん]にもならないよ。」", "\"But I want to be a journalist. Right now I'm not going to be anybody's wife.\""],
          ["「それに、タロウ[君|くん|〜くん]は[いい][友だち|ともだち]でしょ？[私たち|わたしたち]は[カラオケ]のライバルだよ。」", "\"Besides, you're a good friend, right? We're karaoke rivals.\""],
          ["タロウはちょっと[泣いた|ないた|泣く]。", "Taro cried a little."],
          ["「わかった…。[あきらめる|あきらめる|あきらめる]よ。でも、[カラオケ]では{負けない|まけない}！」", "\"All right... I give up. But I won't lose at karaoke!\""],
          ["ウメさんはタロウに[やさしく|やさしく|やさしい][言った|いった|言う]。", "Ume spoke kindly to Taro."],
          ["「タロウ[君|くん|〜くん]、いつかいい[パートナー]に[会える|あえる|会う]よ。」", "\"Taro, someday you'll meet a good partner.\""]
        ],
        [
          ["ダイキはタロウに[小さい|ちいさい|小さい]{声|こえ}で[聞いた|きいた|聞く]。", "Daiki asked Taro in a small voice."],
          ["「[こんな|こんな|こんな〜][プレゼント]を[買う|かう|買う][お金|おかね]は、どうしたの？」", "\"Where did you get the money to buy presents like these?\""],
          ["「[アルバイト]の[お金|おかね]、[全部|ぜんぶ][使った|つかった|使う]…。」", "\"I spent all of my part-time job money...\""],
          ["ダイキは[思った|おもった|思う]。", "Daiki thought to himself."],
          ["[僕|ぼく]は[けち]でよかった。", "Good thing I'm stingy."]
        ],
        [
          ["{外|そと}は[まだ][寒かった|さむかった|寒い]。", "It was still cold outside."],
          ["でも、みんなはウメさんの[マフラー]をして[学校|がっこう]に[行った|いった|行く]。", "But everyone wore Ume's scarves to school."],
          ["「[もうすぐ]{一年|いちねん}が{終わる|おわる}ね。」とリサが[言った|いった|言う]。", "\"The year is almost over, huh,\" Lisa said."],
          ["ウメさんはにっこりした。", "Ume smiled."],
          ["「{一年生|いちねんせい}は{楽しかった|たのしかった}ね。」", "\"First year was fun, wasn't it.\""]
        ]
      ] },
    { title: "さいごの旅行", titleEn: "The Last Trip",
      paragraphs: [
        [
          ["[もうすぐ][春|はる][休み|やすみ]だった。", "Spring break was coming very soon."],
          ["タロウは{四年生|よねんせい}で、[今年|ことし][大学|だいがく]を[卒業する|そつぎょうする|卒業する]。", "Taro was a fourth-year student, and he would graduate from college this year."],
          ["「[卒業式|そつぎょうしき]の{前|まえ}に、みんなで[旅行|りょこう]に[行こう|いこう|行く]！」とタロウが[言った|いった|言う]。", "\"Let's all go on a trip together before the graduation ceremony!\" said Taro."],
          ["タロウはまずリサを[誘った|さそった|誘う]。", "Taro invited Lisa first."],
          ["もう[友だち|ともだち]としてだけど、[ちょっと][うれしそう|うれしそう|うれしい]だった。", "Only as a friend now, but he looked a little happy."],
          ["[それから]、ダイキとウメさんも[誘った|さそった|誘う]。", "Then he invited Daiki and Ume too."],
          ["「[もう一度|もういちど]、みんなで[旅行|りょこう]ですね。[楽しみです|たのしみです]。」とウメさんは[しずか]に[言った|いった|言う]。", "\"A trip with everyone, one more time. I can't wait,\" Ume said calmly."]
        ],
        [
          ["リサは[最近|さいきん]、[毎晩|まいばん][インターネット]で[旅館|りょかん]を[探して|さがして|探す]いた。", "Lately, Lisa had been looking for a Japanese inn on the internet every night."],
          ["「この[旅館|りょかん]は[庭|にわ]が[きれい]で、[プール]もあるよ。", "\"This inn has a beautiful garden, and there's a pool too."],
          ["[割引券|わりびきけん]も[使える|つかえる|使う]！", "We can use a discount coupon, too!"],
          ["でも、[予約|よやく]の[締め切り|しめきり]は[明日|あした]なんだ[けど|けど|〜けど]…。」", "But the deadline for reservations is tomorrow..."],
          ["ダイキは[財布|さいふ]を[見て|みて|見る]、[心配した|しんぱいした|心配する]。", "Daiki looked at his wallet and got worried."],
          ["[お金|おかね]が[あまり]なかったからだ。", "That was because he didn't have much money."],
          ["ウメさんはダイキと[銀行|ぎんこう]に[行って|いって|行く]、[お金|おかね]を[下ろした|おろした|下ろす]。", "Ume went to the bank with Daiki and withdrew some money."],
          ["[そして]、リサはその{日|ひ}のうちに[旅館|りょかん]を[予約した|よやくした|予約する]。", "And then Lisa reserved the inn that same day."]
        ],
        [
          ["タロウは[地図|ちず]で[旅館|りょかん]までの{道|みち}を[調べた|しらべた|調べる]。", "Taro looked up the route to the inn on a map."],
          ["ウメさんは「[旅行|りょこう]の[保険|ほけん]にも[入って|はいって|入る]おきましょう」と[言った|いった|言う]。", "Ume said, \"Let's buy travel insurance, too.\""],
          ["「[保険に入る|ほけんにはいる|保険に入る]の？おばあちゃん、[ちょっと][心配しすぎ|しんぱいしすぎ|心配する]だよ。」", "\"Buy insurance? Grandma, you worry a bit too much.\""],
          ["「[宇宙飛行士|うちゅうひこうし]の[経験|けいけん]ですよ。いつも[気をつける|きをつける|気をつける]のが[一番|いちばん]です。」", "\"That's my experience as an astronaut. Always being careful is best.\""],
          ["ウメさんは[かばん]に[電池|でんち]とライトと[辞書|じしょ]も{入れて|いれて}おいた。", "Ume also packed batteries, a flashlight, and a dictionary into her bag ahead of time."]
        ],
        [
          ["[一日目|いちにちめ]、みんなは[新幹線|しんかんせん]に[乗った|のった|乗る]。", "On the first day, everyone got on the bullet train."],
          ["[窓|まど]から[大きい|おおきい|大きい][山|やま]が[見えた|みえた|見える]。", "A big mountain was visible from the window."],
          ["[三時ごろ|さんじごろ|〜ごろ]、[旅館|りょかん]に[着いた|ついた|着く]。", "They arrived at the inn around three o'clock."],
          ["[旅館|りょかん]の[建物|たてもの]は[古かった|ふるかった|古い]が、[庭|にわ]は[とても][広かった|ひろかった|広い]。", "The inn's building was old, but the garden was very big."],
          ["[庭|にわ]には[大きい|おおきい|大きい][犬|いぬ]がいた。[旅館|りょかん]の[ペット]だった。", "There was a big dog in the garden. It was the inn's pet."],
          ["リサはその[犬|いぬ]と[庭|にわ]の[絵|え]を[描いた|かいた|描く]。", "Lisa drew a picture of the dog and the garden."],
          ["ダイキは[プール]に[入った|はいった|入る]が、[水|みず]が[冷たくて|つめたくて|冷たい]、すぐに{出た|でた}。", "Daiki got into the pool, but the water was cold, so he got right out."],
          ["ウメさんは[一日中|いちにちじゅう][泳いで|およいで|泳ぐ]いた。", "Ume swam all day long."]
        ],
        [
          ["[二日目|ふつかめ|〜目]、みんなは[町|まち]を[観光した|かんこうした|観光する]。", "On the second day, everyone went sightseeing around town."],
          ["[町|まち]には[外国人|がいこくじん]が[多かった|おおかった|多い]。", "There were a lot of foreigners in town."],
          ["アメリカから[来た|きた|来る][人|ひと]が、リサに[日本語|にほんご]で{道|みち}を[聞いた|きいた|聞く]。", "A person from America asked Lisa for directions in Japanese."],
          ["リサは[辞書|じしょ]を[見ないで|みないで|見る]、[日本語|にほんご]で[たくさん][しゃべった|しゃべった|しゃべる]。", "Without looking at a dictionary, Lisa chatted a lot in Japanese."],
          ["[昼ご飯|ひるごはん]に、みんなは[そば]を[食べた|たべた|食べる]。", "For lunch, everyone ate soba."],
          ["[店|みせ]の[人|ひと]が「この[町|まち]では、[そば]を[食べる|たべる|食べる]{前|まえ}に{手|て}を[三回|さんかい|〜かい]たたく[習慣|しゅうかん]があります」と[言った|いった|言う]。", "The shop's owner said, \"In this town, there's a custom of clapping your hands three times before you eat soba.\""],
          ["ウメさんは[三十回|さんじゅっかい|〜かい]たたいた。", "Ume clapped thirty times."]
        ],
        [
          ["[午後|ごご]、[古い|ふるい|古い][家具|かぐ]を[売って|うって|売る]いる[店|みせ]があった。", "In the afternoon, they came across a shop that sold old furniture."],
          ["ウメさんは[大きい|おおきい|大きい]いすが[ほしくなった|ほしくなった|ほしい]。", "Ume started wanting a big chair."],
          ["「おばあちゃん、[税金|ぜいきん]を{入れる|いれる}と[たかい]よ。それに、[新幹線|しんかんせん]で[持って|もって|持つ][帰れない|かえれない|帰る]よ！」", "\"Grandma, with tax it's expensive. And you can't carry it home on the bullet train!\""],
          ["「じゃあ、[走って|はしって|走る][帰ります|かえります|帰る]。」", "\"Then I'll run home.\""],
          ["ダイキは[何も|なにも][言えなかった|いえなかった|言う]。", "Daiki couldn't say anything."],
          ["[夜|よる]は、[古い|ふるい|古い][映画館|えいがかん]で{宇宙|うちゅう}の[映画|えいが]を[見た|みた|見る]。", "In the evening, they watched a space movie at an old movie theater."],
          ["ウメさんは「{本当|ほんとう}の{宇宙|うちゅう}は、もっと[静か|しずか]ですよ」と[小さい|ちいさい|小さい]{声|こえ}で[言った|いった|言う]。", "Ume said in a small voice, \"Real space is much quieter.\""]
        ],
        [
          ["その[夜|よる]、[旅館|りょかん]で[地震|じしん]があった。", "That night, there was an earthquake at the inn."],
          ["[部屋|へや]が{ゆれて|ゆれて}、[電気|でんき]が{消えた|きえた}。", "The room shook and the lights went out."],
          ["ダイキは[こわくて|こわくて|こわい]、[ジャケット]を{頭|あたま}に[かぶった|かぶった|かぶる]。", "Daiki was scared, so he put his jacket over his head."],
          ["ウメさんはすぐライトをつけた。", "Ume turned on her flashlight right away."],
          ["「[大丈夫|だいじょうぶ]。[小さい|ちいさい|小さい][地震|じしん]です。ロケットのほうが、もっと{ゆれます|ゆれます}よ。」", "\"It's all right. It's a small earthquake. A rocket shakes much more.\""],
          ["「[電池|でんち]を[持って|もって|持つ][来て|きて|来る]、よかったね。」とリサが[言った|いった|言う]。", "\"Good thing you brought batteries,\" said Lisa."],
          ["「[地震|じしん]は[初めて|はじめて]だった。いい[経験|けいけん]になったよ。[ジャーナリスト]になったら、この{話|はなし}を[書こう|かこう|書く]。」", "\"That was my first earthquake. It turned into a good experience. When I become a journalist, I'll write about this.\""],
          ["ダイキは[ジャケット]の{中|なか}から「[保険|ほけん]に[入って|はいって|入る]おいて、よかった…」と[言った|いった|言う]。", "From inside his jacket, Daiki said, \"Good thing we bought insurance...\""]
        ],
        [
          ["[旅行|りょこう]から[帰って|かえって|帰る]、[一週間後|いっしゅうかんご|〜ご]、[卒業式|そつぎょうしき]の{日|ひ}が[来た|きた|来る]。", "One week after they got back from the trip, the day of the graduation ceremony came."],
          ["ウメさんとリサとダイキは、[ボランティア]として[参加した|さんかした|参加する]。", "Ume, Lisa, and Daiki took part as volunteers."],
          ["ダイキはその{日|ひ}だけ[遅刻しなかった|ちこくしなかった|遅刻する]。", "On that day alone, Daiki wasn't late."],
          ["タロウは[着物|きもの]を[着て|きて|着る]、[大学|だいがく]を[卒業した|そつぎょうした|卒業する]。", "Taro wore a kimono and graduated from college."],
          ["{式|しき}のあと、みんなは[教室|きょうしつ]に{集まった|あつまった}。", "After the ceremony, everyone gathered in a classroom."],
          ["[先生|せんせい]が「ウメさんから、{大切|たいせつ}な{お知らせ|おしらせ}があります」と[言った|いった|言う]。", "The teacher said, \"Ume has an important announcement.\""]
        ],
        [
          ["ウメさんは[立って|たって|立つ]、[発表した|はっぴょうした|発表する]。", "Ume stood up and made the announcement."],
          ["「[私|わたし]は[大学|だいがく]を[卒業したら|そつぎょうしたら|卒業する]、[もう一度|もういちど]{宇宙|うちゅう}に[行く|いく|行く][予定|よてい]です。」", "\"After I graduate from college, I'm scheduled to go to space one more time.\""],
          ["[教室|きょうしつ]が[静か|しずか]になった。", "The classroom went quiet."],
          ["「でも、おばあちゃんは[まだ]{一年生|いちねんせい}だよ。[卒業する|そつぎょうする|卒業する]のは[三年後|さんねんご|〜ご]だよ！」とダイキが[言った|いった|言う]。", "\"But Grandma, you're still a first-year student. You graduate in three years!\" said Daiki."],
          ["「[大丈夫|だいじょうぶ]。{宇宙|うちゅう}は[待って|まって|待つ]くれます。", "\"It's all right. Space will wait for me."],
          ["[それに]、{三年間|さんねんかん}で[日本|にほん]の[文学|ぶんがく]を[もっと][勉強したい|べんきょうしたい|勉強する]んです。」", "\"Besides, I want to study more Japanese literature over the next three years.\""]
        ],
        [
          ["タロウが{手|て}を{上げた|あげた}。", "Taro raised his hand."],
          ["「ウメさん、{宇宙|うちゅう}に[行く|いく|行く]{前|まえ}に、[僕|ぼく]の[結婚式|けっこんしき]に[来て|きて|来る]ください！」", "\"Ume, please come to my wedding before you go to space!\""],
          ["リサは{笑った|わらった}。「タロウ、[今|いま]、[付き合って|つきあって|付き合う]いる[人|ひと]いないでしょう？」", "Lisa laughed. \"Taro, you're not dating anyone right now, are you?\""],
          ["「[三年|さんねん|〜ねん]あるから、[大丈夫|だいじょうぶ]！」", "\"I've got three years, so it's fine!\""],
          ["みんな[大きい|おおきい|大きい]{声|こえ}で{笑った|わらった}。", "Everyone laughed out loud."]
        ],
        [
          ["{帰り|かえり}の{道|みち}で、ダイキは{空|そら}を[見た|みた|見る]。", "On the way home, Daiki looked up at the sky."],
          ["「おばあちゃんが{宇宙|うちゅう}に[行ったら|いったら|行く]、[ちょっと]さびしいなあ。」", "\"When Grandma goes to space, I'll be a little lonely.\""],
          ["「[毎日|まいにち]メールを[送ります|おくります|送る]よ。{宇宙|うちゅう}から、ダイキの[アパート]も[見える|みえる|見える]かもしれません。」", "\"I'll send you an email every day. From space, I might even be able to see your apartment.\""],
          ["「じゃあ、[部屋|へや]を[そうじして|そうじして|そうじする]おかないと…。」", "\"Then I'd better clean my room...\""],
          ["リサは[ノート]に[次|つぎ]の[旅行|りょこう]の[予定|よてい]を[書いた|かいた|書く]。「{行き先|いきさき}、{宇宙|うちゅう}。」", "Lisa wrote the next trip's plan in her notebook: \"Destination: space.\""],
          ["ウメさんとリサとダイキとタロウは、[顔|かお]を[見て|みて|見る]、[一緒に|いっしょに][言った|いった|言う]。", "Ume, Lisa, Daiki, and Taro looked at each other and said together:"],
          ["「[楽しみです|たのしみです]！」", "\"We can't wait!\""]
        ]
      ] }
  ]
};
