/* =======================================================================
   story_1.js — Story time, story 1: ポチの一週間 (Pochi's Week)
   Goal: use at least 85% of the vocab from lessons 2–8.
   Sentence markup (see stories/README.md):
     [かばん]  [自転車|じてんしゃ]  [食べました|たべました|たべる]  {駅前|えきまえ}
   Check it with:  node stories/check-story.js stories/story_1.js
   ======================================================================= */
window.GENKI_STORIES = window.GENKI_STORIES || {};
window.GENKI_STORIES[1] = {
  title: "ポチの一週間",
  titleEn: "Pochi's Week",
  lessons: [2,8],
  goal: 85,
  chapters: [
    { title: "月曜日　さがしものと買い物", titleEn: "Monday: Lost Things and Shopping",
      paragraphs: [
        [
          ["ケンは[大学生|だいがくせい]です。", "Ken is a college student."],
          ["ケンは[小さい|ちいさい]アパートに[犬|いぬ]と[住んでいます|すんでいます|住む]。", "Ken lives in a small apartment with his dog."],
          ["[犬|いぬ]の[なまえ]はポチです。", "The dog's name is Pochi."],
          ["ポチはとてもまじめな[犬|いぬ]で、[にほんご]を[話します|はなします|話す]。", "Pochi is a very serious dog, and he speaks Japanese."],
          ["ポチは[毎日|まいにち][朝|あさ]に[新聞|しんぶん]を[読みます|よみます|読む]。", "Pochi reads the newspaper every morning."],
          ["そして、[いつも][小さい|ちいさい][帽子|ぼうし]を[かぶっています|かぶっています|かぶる]。", "And he always wears a small hat."],
          ["ケンは[やさしい]です[が|が|〜が]、[よく][寝ます|ねます|寝る]。", "Ken is kind, but he sleeps a lot."]
        ],
        [
          ["[月曜日|げつようび]の[朝|あさ]です。", "It is Monday morning."],
          ["「ポチ、[僕|ぼく]の[財布|さいふ]は[どこ]ですか。」とケンが[言いました|いいました|言う]。", "\"Pochi, where's my wallet?\" Ken said."],
          ["ポチは[新聞|しんぶん]を[読んでいました|よんでいました|読む]。", "Pochi was reading the newspaper."],
          ["「[財布|さいふ]は[机|つくえ]のうえです。」", "\"Your wallet is on the desk.\""],
          ["「ありがとう。じゃあ、[僕|ぼく]の[傘|かさ]は？」", "\"Thanks. Then what about my umbrella?\""],
          ["「[傘|かさ]は[ドア]のよこです。[靴|くつ]も[あそこ]ですよ。」", "\"The umbrella is next to the door. Your shoes are over there too.\""],
          ["「[帽子|ぼうし]は？」", "\"And my hat?\""],
          ["ケンの[帽子|ぼうし]は[いす]のしたに[ありました|ありました|ある]。", "Ken's hat was under the chair."]
        ],
        [
          ["ケンは[ジーンズ]を[はいて|はいて|はく]、[トレーナー]を[着ました|きました|着る]。", "Ken put on his jeans and a sweatshirt."],
          ["「ポチ、[僕|ぼく]の[かばん]は？」", "\"Pochi, where's my bag?\""],
          ["「[カーテン]のうしろです。」", "\"Behind the curtain.\""],
          ["ポチは[かばん]のなかを[見ました|みました|見る]。", "Pochi looked inside the bag."],
          ["「[ノート][と|と|〜と][ペン]、[えんぴつ]、[けしゴム]。[じしょ]もありますね。」", "\"A notebook and a pen, a pencil, an eraser. And there's your dictionary too.\""],
          ["「ポチは[すごく][頭がいい|あたまがいい]ですね。」とケンは[言いました|いいました|言う]。", "\"Pochi, you're really smart,\" Ken said."],
          ["「ケンさんが[何も|なにも]しませんから。」", "\"That's because you don't do anything.\""]
        ],
        [
          ["ケンの[部屋|へや]には[小さい|ちいさい][こくばん]があります。", "There is a small blackboard in Ken's room."],
          ["ポチは[毎日|まいにち]、[こくばん]にケンのスケジュールを[書きます|かきます|書く]。", "Every day, Pochi writes Ken's schedule on the blackboard."],
          ["[今日|きょう]のスケジュールは「[買い物|かいもの]」でした。", "Today's schedule said \"shopping.\""],
          ["「ポチ、[今日|きょう]は[うち]で[ビデオ]を[見ませんか|みませんか|見る]。」", "\"Pochi, why don't we watch a video at home today?\""],
          ["「だめです。[ビデオ]も[テープ]も[古い|ふるい]ですから。」", "\"No. The video player and the tapes are both old.\""],
          ["「[買い物|かいもの]に[行きましょう|いきましょう|行く]。」とポチは[言いました|いいました|言う]。", "\"Let's go shopping,\" Pochi said."]
        ],
        [
          ["ケンは[自転車|じてんしゃ]に[乗りました|のりました|乗る]。", "Ken got on his bicycle."],
          ["ポチは[自転車|じてんしゃ]のかごに[座りました|すわりました|座る]。", "Pochi sat in the bicycle's basket."],
          ["いちばはとても[にぎやか]でした。", "The market was very lively."],
          ["[野菜|やさい]や[にく]や[魚|さかな]が[たくさん]ありました。", "There were lots of vegetables, meat, and fish."],
          ["「あ、ケンさん！ポチ！」", "\"Oh, Ken! Pochi!\""],
          ["[あそこ]に[女の人|おんなのひと]が[いました|いました|いる]。", "There was a woman over there."],
          ["「あれは[だれ]ですか。」とケンは[聞きました|ききました|聞く]。", "\"Who is that?\" Ken asked."],
          ["「ミホさんですよ。ケンさんの[クラス]の[友だち|ともだち]です。」", "\"That's Miho. She's your friend from class.\""]
        ],
        [
          ["ミホは[毎日|まいにち][図書館|としょかん]で[勉強します|べんきょうします|勉強する]。", "Miho studies at the library every day."],
          ["ちょっときびしいです[が|が|〜が]、ポチが[大好き|だいすき]です。", "She's a little strict, but she loves Pochi."],
          ["「ポチ、[かわいい][帽子|ぼうし]ですね！」とミホは[言いました|いいました|言う]。", "\"Pochi, what a cute hat!\" Miho said."],
          ["ミホはケンを[あまり][見ませんでした|みませんでした|見る]。", "Miho didn't really look at Ken."]
        ],
        [
          ["ケンはおみせの[魚|さかな]を[見ました|みました|見る]。", "Ken looked at the fish in a shop."],
          ["「[これ]はいくらですか。」", "\"How much is this one?\""],
          ["「[それ]は{二千円|にせんえん}です。」とおみせのひとが[言いました|いいました|言う]。", "\"That one is two thousand yen,\" said the shopkeeper."],
          ["「[たかい]ですね！じゃあ、[あれ]は？」", "\"That's expensive! Then what about that one over there?\""],
          ["「[あれ]は{三千円|さんぜんえん}です。」", "\"That one is three thousand yen.\""],
          ["「ケンさん、[どれ]も[たかい]ですよ。」とポチは[言いました|いいました|言う]。", "\"Ken, every one of them is expensive,\" Pochi said."],
          ["ポチは[小さい|ちいさい][魚|さかな]と[野菜|やさい]を[買いました|かいました|買う]。", "Pochi bought a small fish and some vegetables."],
          ["ケンは[野菜|やさい]が[嫌い|きらい]ですから、[ちょっと]かなしかったです。", "Ken hates vegetables, so he was a little sad."]
        ],
        [
          ["そのとき、[猫|ねこ]が[来ました|きました|来る]。", "Just then, a cat came along."],
          ["となりの[猫|ねこ]のタマです。", "It was Tama, the neighbor's cat."],
          ["タマはケンの[魚|さかな]を[持って|もって|持つ]、[すぐ][帰りました|かえりました|帰る]。", "Tama grabbed Ken's fish and went right home."],
          ["「ありがとう。[おいしい][魚|さかな]ですね。」とタマは[言いました|いいました|言う]。", "\"Thanks. Looks like a tasty fish,\" Tama said."],
          ["「[僕|ぼく]の[魚|さかな]！」", "\"My fish!\""],
          ["「[大丈夫|だいじょうぶ]です。[僕|ぼく]の[かばん]にも[魚|さかな]がありますよ。」とポチは[言いました|いいました|言う]。", "\"Don't worry. There's another fish in my bag too,\" Pochi said."]
        ],
        [
          ["[昼ご飯|ひるごはん]は[二人|ふたり]で[レストラン]で[食べました|たべました|食べる]。", "The two of them ate lunch at a restaurant."],
          ["ケンは[おてあらい]に[行きました|いきました|行く]。", "Ken went to the restroom."],
          ["ポチは[メニュー]を[見て|みて|見る]、「すみません、[とんかつ]を{二つ|ふたつ}ください。」と[言いました|いいました|言う]。", "Pochi looked at the menu and said, \"Excuse me, two pork cutlets, please.\""],
          ["ケンが[おてあらい]から[来ました|きました|来る]。", "Ken came back from the restroom."],
          ["「あれ？[僕|ぼく]の[ハンバーガー]は？」", "\"Huh? Where's my hamburger?\""],
          ["「[メニュー]に[ハンバーガー]はありません。[とんかつ]は[おいしい]ですよ。」", "\"There are no hamburgers on the menu. The pork cutlet is delicious, though.\""],
          ["[とんかつ]はとても[おいしかったです|おいしかったです|おいしい]。", "The pork cutlet was very delicious."]
        ],
        [
          ["[うち]に[帰って|かえって|帰る]から、ケンは[すぐ][寝ました|ねました|寝る]。", "After they got home, Ken went straight to bed."],
          ["「ケンさん、まだ{八時|はちじ}ですよ。」とポチは[言いました|いいました|言う]。", "\"Ken, it's only eight o'clock,\" Pochi said."],
          ["「[明日|あした]は[忙しい|いそがしい|忙しい]ひですから。」", "\"Because tomorrow is a busy day.\""],
          ["ポチは[こくばん]の[明日|あした]のスケジュールを[見ました|みました|見る]。", "Pochi looked at tomorrow's schedule on the blackboard."],
          ["「ケンさんは[明日|あした]も[何も|なにも][しません|しません|する]よ。」とポチは[思いました|おもいました|思う]。", "\"Ken won't be doing anything tomorrow either,\" Pochi thought."],
          ["ポチは[カーテン]を[閉めて|しめて|閉める]、[電気|でんき]を[消しました|けしました|消す]。", "Pochi closed the curtains and turned off the light."]
        ]
      ] },
    { title: "かようび：ポチのいちにち", titleEn: "Tuesday: Pochi's Day",
      paragraphs: [
        [
          ["[昨日|きのう]、ケンさんは「[明日|あした]は[忙しい|いそがしい|忙しい]{日|ひ}です」と[言って|いって|言う]、[早く|はやく|早い][寝ました|ねました|寝る]。", "Yesterday, Ken said, \"Tomorrow is a busy day,\" and went to bed early."],
          ["[でも]、[今日|きょう]、ケンさんは[起きませんでした|おきませんでした|起きる]。", "But today, Ken didn't get up."],
          ["ポチは[毎日|まいにち][六時ごろ|ろくじごろ|〜ごろ][起きます|おきます|起きる]。", "Pochi gets up at about six every day."],
          ["[今日|きょう]も[早く|はやく|早い][起きて|おきて|起きる]、[小さい|ちいさい][帽子|ぼうし]をかぶりました。", "Today too, he got up early and put on his little hat."],
          ["それから、[コーヒー]を[作りました|つくりました|作る]。", "Then he made coffee."],
          ["ポチは[たいてい][朝|あさ][新聞|しんぶん]を[読みます|よみます|読む][が|が|〜が]、[今日|きょう]は[雑誌|ざっし]を[読みました|よみました|読む]。", "Pochi usually reads the newspaper in the morning, but today he read a magazine."],
          ["[スポーツ][と|と|〜と][音楽|おんがく]の[雑誌|ざっし]でした。", "It was a magazine about sports and music."],
          ["そして、[コーヒー]を[飲んで|のんで|飲む]、しずかに[音楽|おんがく]を[聞きました|ききました|聞く]。", "Then he drank his coffee and quietly listened to music."]
        ],
        [
          ["{八時|はちじ}に、ポチは「ケンさん、[朝|あさ]ですよ。[朝ご飯|あさごはん]を[食べませんか|たべませんか|食べる]」と[言いました|いいました|言う]。", "At eight, Pochi said, \"Ken, it's morning. Won't you eat breakfast?\""],
          ["ケンさんは「[ちょっと][待って|まって|待つ]ください……」と[言って|いって|言う]、また[寝ました|ねました|寝る]。", "Ken said, \"Wait a little...\" and went back to sleep."],
          ["{十時|じゅうじ}にも、ポチは「[起きて|おきて|起きる]ください」と[言いました|いいました|言う]。", "At ten, too, Pochi said, \"Please get up.\""],
          ["ケンさんは[全然|ぜんぜん][起きませんでした|おきませんでした|起きる]。", "Ken didn't get up at all."],
          ["ケンさんは[十二時ごろ|じゅうにじごろ|〜ごろ]、やっと[起きました|おきました|起きる]。", "Ken finally got up at about twelve."],
          ["「ポチ、[朝ご飯|あさごはん]は？」", "\"Pochi, where's breakfast?\""],
          ["「ケンさん、もう[昼ご飯|ひるごはん]のじかんですよ。」", "\"Ken, it's already lunchtime.\""],
          ["ケンさんは[ハンバーガー]を[食べて|たべて|食べる]、[水|みず]を[飲みました|のみました|飲む]。", "Ken ate a hamburger and drank water."],
          ["ポチは[おちゃ]を[飲みました|のみました|飲む]。", "Pochi drank green tea."]
        ],
        [
          ["[ごご]{一時|いちじ}に、ケンさんとポチは[図書館|としょかん]に[行きました|いきました|行く]。", "At one in the afternoon, Ken and Pochi went to the library."],
          ["[図書館|としょかん]にミホさんが[いました|いました|いる]。", "Miho was at the library."],
          ["ミホさんは[毎日|まいにち][図書館|としょかん]で[勉強します|べんきょうします|勉強する]。", "Miho studies at the library every day."],
          ["「ケンさんは[よく][図書館|としょかん]に[来ますか|きますか|来る]。」", "\"Ken, do you come to the library often?\""],
          ["「[ええ]、[時々|ときどき]……」", "\"Yes, sometimes...\""],
          ["「いいえ。ケンさんは[あまり][来ません|きません|来る]。」とポチが[言いました|いいました|言う]。", "\"No. Ken doesn't come very often,\" said Pochi."],
          ["ミホさんは「ポチさんは[いい][犬|いぬ]ですね」と[言いました|いいました|言う]。", "Miho said, \"Pochi, you're a good dog.\""],
          ["ポチとミホさんは[本|ほん]を[読みました|よみました|読む]。", "Pochi and Miho read books."],
          ["ケンさんは[机|つくえ]で[寝ました|ねました|寝る]。", "Ken slept at the desk."]
        ],
        [
          ["{三時|さんじ}ごろ、[三人|さんにん|〜にん]は[カフェ]に[行きました|いきました|行く]。", "At around three, the three of them went to a cafe."],
          ["ケンさんは[アイスクリーム]を[食べました|たべました|食べる]。", "Ken ate ice cream."],
          ["ミホさんは[コーヒー]、ポチは[おちゃ]を[飲みました|のみました|飲む]。", "Miho drank coffee, and Pochi drank green tea."],
          ["「ケンさん、[週末|しゅうまつ]はなにを[しますか|しますか|する]。」とミホさんが[聞きました|ききました|聞く]。", "\"Ken, what are you doing this weekend?\" Miho asked."],
          ["「[そうですね]……[土曜日|どようび]は[うち]で[テレビ]を[見ます|みます|見る]。」", "\"Let me see... On Saturday I'll watch TV at home.\""],
          ["「[日曜日|にちようび]は？」", "\"And Sunday?\""],
          ["「[日曜日|にちようび]も[テレビ]です。」", "\"Sunday is TV too.\""],
          ["「[デート]は[しませんか|しませんか|する]。」", "\"Don't you go on dates?\""],
          ["「ケンさんの[デート]は[ハンバーガー]と[テレビ]です」とポチが[言いました|いいました|言う]。", "\"Ken's dates are with hamburgers and TV,\" said Pochi."],
          ["ミホさんは[ちょっと]わらいました。", "Miho laughed a little."],
          ["「じゃあ、[日曜日|にちようび]に[一緒に|いっしょに][学校|がっこう]で[勉強しませんか|べんきょうしませんか|勉強する]。」", "\"Well then, why don't we study together at school on Sunday?\""],
          ["「[いつ]ですか。」「{九時|くじ}です。」", "\"What time?\" \"Nine o'clock.\""],
          ["「{九時|くじ}？ ケンさんは[日曜日|にちようび]、{十二時|じゅうにじ}まで[寝ます|ねます|寝る]よ」とポチが[言いました|いいました|言う]。", "\"Nine? On Sundays Ken sleeps until twelve,\" said Pochi."]
        ],
        [
          ["{四時|よじ}に、[三人|さんにん|〜にん]は[学校|がっこう]で[テニス]を[しました|しました|する]。", "At four, the three of them played tennis at school."],
          ["ケンさんは[スポーツ]が[あまり][好き|すき]じゃありません。", "Ken doesn't like sports very much."],
          ["ポチは[テニス]がとても[上手|じょうず]でした。", "Pochi was very good at tennis."],
          ["ケンさんは「ポチ、[いつ][帰りますか|かえりますか|帰る]。」と[聞きました|ききました|聞く]。", "Ken asked, \"Pochi, when are we going home?\""],
          ["ポチは「[テニス]は[どうですか]。[いい]{運動|うんどう}ですよ」と[言いました|いいました|言う]。", "Pochi said, \"How's the tennis? It's good exercise.\""],
          ["ケンさんは[何も|なにも|何も][言いませんでした|いいませんでした|言う]。", "Ken didn't say anything."]
        ],
        [
          ["[七時ごろ|しちじごろ|〜ごろ]、ケンさんとポチは[家|いえ]に[帰りました|かえりました|帰る]。", "At about seven, Ken and Pochi went home."],
          ["ポチが[晩ご飯|ばんごはん]を[作りました|つくりました|作る]。", "Pochi made dinner."],
          ["ミホさんも[来て|きて|来る]、[三人|さんにん|〜にん]で[晩ご飯|ばんごはん]を[食べました|たべました|食べる]。", "Miho came too, and the three of them ate dinner together."],
          ["ミホさんは「ポチさん、[お酒|おさけ]を[飲みますか|のみますか|飲む]。」と[聞きました|ききました|聞く]。", "Miho asked, \"Pochi, do you drink alcohol?\""],
          ["「いいえ。わたしは[犬|いぬ]ですから。」", "\"No. Because I'm a dog.\""],
          ["[三人|さんにん|〜にん]はたくさん[話しました|はなしました|話す]。", "The three of them talked a lot."],
          ["それから、ポチは「[今晩|こんばん]は[映画|えいが]を[見ましょう|みましょう|見る]」と[言いました|いいました|言う]。", "Then Pochi said, \"Let's watch a movie tonight.\""]
        ],
        [
          ["[映画|えいが]はとても[面白かったです|おもしろかったです|面白い]。", "The movie was very interesting."],
          ["[でも]、ケンさんは[映画|えいが]を[見ていませんでした|みていませんでした|見る]。", "But Ken wasn't watching the movie."],
          ["ケンさんはソファで[寝ていました|ねていました|寝る]。", "Ken was sleeping on the sofa."],
          ["「ケンさんは[毎晩|まいばん]こうですか。」とミホさんが[聞きました|ききました|聞く]。", "\"Is Ken like this every night?\" Miho asked."],
          ["「[ええ]、[毎晩|まいばん]です」とポチが[言いました|いいました|言う]。", "\"Yes, every night,\" said Pochi."],
          ["{十時|じゅうじ}に、ミホさんは[帰りました|かえりました|帰る]。", "At ten, Miho went home."],
          ["ポチはケンさんを{起こして|おこして}、「ケンさん、[明日|あした]、わたしは[アルバイト]があります」と[言いました|いいました|言う]。", "Pochi woke Ken up and said, \"Ken, tomorrow I have a part-time job.\""]
        ]
      ] },
    { title: "すいようび：ポチのアルバイト", titleEn: "Wednesday: Pochi's Part-Time Job",
      paragraphs: [
        [
          ["[今日|きょう]は[水曜日|すいようび]です。", "Today is Wednesday."],
          ["[昨日|きのう]の[夜|よる]、ポチは「[明日|あした]は[アルバイト]があります」と[言いました|いいました|言う]。", "Last night, Pochi said, \"Tomorrow I have a part-time job.\""],
          ["[朝|あさ]、ポチはぼうしを[かぶって|かぶって|かぶる]、ケンさんを{起こしました|おこしました}。", "In the morning, Pochi put on his hat and woke Ken up."],
          ["「ケンさん、[起きて|おきて|起きる]ください。[一緒に|いっしょに][町|まち]へ[行きましょう|いきましょう|行く]。」", "\"Ken, please get up. Let's go into town together.\""],
          ["「[どうして]？[アルバイト]はポチの[アルバイト]ですよ。」", "\"Why? The part-time job is your job, Pochi, right?\""],
          ["「はい。[でも]、ケンさんは[一人で|ひとりで][家|いえ]に[いて|いて|いる]、{一日|いちにち}じゅう[ゲーム]をしますから。」", "\"Yes. But if you stay home alone, you'll play games all day.\""],
          ["ケンさんは[何も|なにも|何も][言いませんでした|いいませんでした|言う]。", "Ken didn't say anything."]
        ],
        [
          ["[二人|ふたり]は[バス停|バスてい]へ[行きました|いきました|行く]。", "The two of them went to the bus stop."],
          ["[バス]はなかなか[来ませんでした|きませんでした|来る]。", "The bus just wouldn't come."],
          ["[二人|ふたり]は{二十分|にじゅっぷん}[ぐらい|ぐらい|〜ぐらい][待ちました|まちました|待つ]。", "They waited about twenty minutes."],
          ["ポチは[新聞|しんぶん]を[読んで|よんで|読む]、ケンさんは[パン]を[食べました|たべました|食べる]。", "Pochi read the newspaper, and Ken ate some bread."],
          ["「それはわたしの[パン]ですよ」とポチが[言いました|いいました|言う]。", "\"That's my bread, you know,\" said Pochi."],
          ["「[ごめんなさい]。」", "\"Sorry.\""]
        ],
        [
          ["[町|まち]にはいろいろなところが[あります|あります|ある]。", "There are all kinds of places in town."],
          ["[銀行|ぎんこう]のとなりに[郵便局|ゆうびんきょく]が[あって|あって|ある]、[郵便局|ゆうびんきょく]のまえに[喫茶店|きっさてん]が[あります|あります|ある]。", "Next to the bank there is a post office, and in front of the post office there is a cafe."],
          ["ポチの[アルバイト]は[本屋|ほんや]です。", "Pochi's part-time job is at a bookstore."],
          ["[本屋|ほんや]はおおきい[デパート]の{中|なか}に[あります|あります|ある]。", "The bookstore is inside a big department store."],
          ["「ケンさんは[公園|こうえん]で[待って|まって|待つ]ください。[三時間|さんじかん|〜じかん][ぐらい|ぐらい|〜ぐらい]です。」", "\"Please wait in the park, Ken. It'll be about three hours.\""],
          ["「[三時間|さんじかん|〜じかん]！？」", "\"Three hours!?\""]
        ],
        [
          ["ケンさんは[一人で|ひとりで][公園|こうえん]のベンチに[座りました|すわりました|座る]。", "Ken sat down alone on a bench in the park."],
          ["[公園|こうえん]には[花|はな]がたくさん[あります|あります|ある]。", "There are lots of flowers in the park."],
          ["[子供|こども]もたくさん[います|います|いる]。", "There are lots of children, too."],
          ["ケンさんは[花|はな]の[写真|しゃしん]を[撮りました|とりました|撮る]。", "Ken took pictures of the flowers."],
          ["[それから]、[公園|こうえん]のとなりの[お寺|おてら]の[写真|しゃしん]も[撮りました|とりました|撮る]。", "And then he also took pictures of the temple next to the park."],
          ["[一時間|いちじかん]たちました。", "An hour passed."],
          ["ケンさんはまだ[待っていました|まっていました|待つ]。", "Ken was still waiting."]
        ],
        [
          ["ケンさんは[本屋|ほんや]へ[行きました|いきました|行く]。", "Ken went to the bookstore."],
          ["ポチは[本屋|ほんや]で[はたらいていました|はたらいていました|働く]。", "Pochi was working at the bookstore."],
          ["ポチはおきゃくさんに「この[本|ほん]はいいですよ」と[話していました|はなしていました|話す]。", "Pochi was telling a customer, \"This book is good.\""],
          ["[子供|こども]たちが「[犬|いぬ]の[本屋|ほんや]さんだ！」と[言って|いって|言う]、ポチの[写真|しゃしん]を[撮っていました|とっていました|撮る]。", "Kids were saying, \"It's a dog bookseller!\" and taking photos of Pochi."],
          ["[本屋|ほんや]の[人|ひと]は「ポチさんは[先週|せんしゅう]からここで[はたらいています|はたらいています|働く]。とてもいい[人|ひと]です」と[言いました|いいました|言う]。", "The bookstore clerk said, \"Pochi has been working here since last week. He's a very good person.\""],
          ["「[人|ひと]？[犬|いぬ]ですよ」とケンさんは[思いました|おもいました|思う]。", "\"Person? He's a dog,\" Ken thought."]
        ],
        [
          ["そのとき、ケンさんの[電話|でんわ]が{鳴りました|なりました}。", "Just then, Ken's phone rang."],
          ["「[もしもし]。」", "\"Hello?\""],
          ["「[もしもし]、ケンさん？ミホです。[今|いま]、[どこ]に[いますか|いますか|いる]。」", "\"Hello, Ken? It's Miho. Where are you right now?\""],
          ["「[町|まち]です。ポチの[アルバイト]を[見ています|みています|見る]。」", "\"I'm in town. I'm watching Pochi at his part-time job.\""],
          ["「[今日|きょう]の[クラス]は？[レポート]は？」", "\"What about today's class? And the paper?\""],
          ["「[レポート]…？」", "\"The paper…?\""],
          ["「[レポート]は[金曜日|きんようび]までですよ。[月曜日|げつようび]にも[火曜日|かようび]にも[言いました|いいました|言う]よ。」", "\"The paper is due by Friday. I told you on Monday and on Tuesday too.\""],
          ["「[ごめんなさい]…[わかりました|わかりました|わかる]。」", "\"Sorry… I understand.\""]
        ],
        [
          ["[三時ごろ|さんじごろ|〜ごろ]、ポチの[アルバイト]が{終わりました|おわりました}。", "Around three, Pochi's shift ended."],
          ["[二人|ふたり]は[スーパー]へ[買い物|かいもの]に[行きました|いきました|行く]。", "The two of them went shopping at the supermarket."],
          ["ポチは[晩ご飯|ばんごはん]の[ご飯|ごはん]と[野菜|やさい]と[肉|にく]を[買いました|かいました|買う]。", "Pochi bought rice, vegetables, and meat for dinner."],
          ["[魚|さかな]のところに[猫|ねこ]が[いました|いました|いる]。", "There was a cat in the fish section."],
          ["タマです！", "It was Tama!"],
          ["タマは[魚|さかな]を[口|くち]に[持って|もって|持つ]、「[あなた]は[犬|いぬ]ですよ。[どうして][アルバイト]をしますか。[犬|いぬ]は[毎日|まいにち][寝ます|ねます|寝る]」と[言いました|いいました|言う]。", "Tama, holding a fish in her mouth, said, \"You're a dog. Why do you have a part-time job? Dogs sleep every day.\""],
          ["「タマさん、その[魚|さかな]の[お金|おかね]は？」とポチが[聞きました|ききました|聞く]。", "\"Tama, what about paying for that fish?\" Pochi asked."],
          ["タマはすぐ{逃げました|にげました}。", "Tama ran away right away."]
        ],
        [
          ["[それから]、ポチは[銀行|ぎんこう]に[行って|いって|行く]、[郵便局|ゆうびんきょく]で[手紙|てがみ]を{出しました|だしました}。", "After that, Pochi went to the bank and mailed a letter at the post office."],
          ["さいごに、[病院|びょういん]のまえの[ホテル]に[入りました|はいりました|入る]。", "Last, he went into the hotel in front of the hospital."],
          ["ホテルの[レストラン]で、ポチはなにか[書いていました|かいていました|書く]。", "In the hotel restaurant, Pochi was writing something."],
          ["「ポチ、なにを[書いていますか|かいていますか|書く]。」", "\"Pochi, what are you writing?\""],
          ["「ひみつです。」", "\"It's a secret.\""]
        ],
        [
          ["[夜|よる]、[二人|ふたり]は[家|いえ]で[晩ご飯|ばんごはん]を[食べました|たべました|食べる]。", "At night, the two of them ate dinner at home."],
          ["ケンさんはカレンダーを[見て|みて|見る]、「あっ」と[言いました|いいました|言う]。", "Ken looked at the calendar and said, \"Ah!\""],
          ["「[明日|あした]は[木曜日|もくようび]…ぼくの[誕生日|たんじょうび]です！」", "\"Tomorrow is Thursday… it's my birthday!\""],
          ["「はい、[知っています|しっています|知る]」とポチは[言いました|いいました|言う]。", "\"Yes, I know,\" said Pochi."],
          ["「[だから]、[先週|せんしゅう]から[アルバイト]をしていました。[明日|あした]は[一緒に|いっしょに][海|うみ]へ[行きましょう|いきましょう|行く]。」", "\"That's why I've been working part-time since last week. Tomorrow, let's go to the sea together.\""],
          ["ケンさんはとてもうれしかったです。", "Ken was very happy."]
        ]
      ] },
    { title: "もくようび：うみとたんじょうび", titleEn: "Thursday: The Sea and a Birthday",
      paragraphs: [
        [
          ["[昨日|きのう]の[夜|よる]、ケンさんは「[明日|あした]は[僕|ぼく]の[誕生日|たんじょうび]です！」と[言いました|いいました|言う]。", "Last night, Ken said, \"Tomorrow is my birthday!\""],
          ["[でも]、ポチはもう[知っていました|しっていました|知る]。", "But Pochi already knew."],
          ["[木曜日|もくようび]の[朝|あさ]、ポチはケンさんの[部屋|へや]に[来ました|きました|来る]。", "On Thursday morning, Pochi came to Ken's room."],
          ["ポチは[小さい|ちいさい][手紙|てがみ]を[持っていました|もっていました|持つ]。", "Pochi was holding a small letter."],
          ["「ケンさん、お[誕生日|たんじょうび]おめでとうございます。」", "\"Ken, happy birthday.\""],
          ["ケンさんは[手紙|てがみ]を[読みました|よみました|読む]。", "Ken read the letter."],
          ["「[今日|きょう]は[一緒に|いっしょに][海|うみ]へ[旅行|りょこう]に[行きましょう|いきましょう|行く]。ポチより」", "\"Let's go on a trip to the sea together today. From Pochi.\""]
        ],
        [
          ["ケンさんは「[でも]、[今日|きょう]は[クラス]が[あります|あります|ある]……」と[言いました|いいました|言う]。", "Ken said, \"But I have class today...\""],
          ["「[大丈夫|だいじょうぶ]です。[今日|きょう]は[休み|やすみ]ですよ。」", "\"It's okay. Today is a day off.\""],
          ["「[宿題|しゅくだい]は？」", "\"What about my homework?\""],
          ["「[宿題|しゅくだい]は[昨日|きのう]の[夜|よる]、わたしが[やりました|やりました|やる]。」", "\"I did your homework last night.\""],
          ["「[テスト]は？」", "\"And the test?\""],
          ["「[テスト]は[来週|らいしゅう]です。」", "\"The test is next week.\""],
          ["[だから]、ケンさんは[今日|きょう][とても][暇|ひま]でした。", "So Ken was very free today."],
          ["「じゃあ、[出かけましょう|でかけましょう|出かける]！」", "\"Well then, let's go out!\""]
        ],
        [
          ["[バス停|バスてい]にミホさんが[いました|いました|いる]。", "Miho was at the bus stop."],
          ["ミホさんは「[今日|きょう]は[忙しい|いそがしい|忙しい]です[が|が|〜が]、ポチの[旅行|りょこう]ですから、[来ました|きました|来る]」と[言いました|いいました|言う]。", "Miho said, \"I'm busy today, but since it's Pochi's trip, I came.\""],
          ["「[僕|ぼく]の[誕生日|たんじょうび]ですよ……」とケンさんは[言いました|いいました|言う]。", "\"It's MY birthday...\" said Ken."],
          ["みんなは[バス]に[乗りました|のりました|乗る]。", "Everyone got on the bus."],
          ["ケンさんは「[バス]は[つまらない]ですね」と[言って|いって|言う]、すぐ[寝ました|ねました|寝る]。", "Ken said, \"The bus is boring, isn't it,\" and fell asleep right away."],
          ["ミホさんはバスのなかでも[勉強しました|べんきょうしました|勉強する]。", "Miho studied even on the bus."]
        ],
        [
          ["[海|うみ]は[とても][きれい]でした。", "The sea was very beautiful."],
          ["[天気|てんき]は[よかったです|よかったです|いい][が|が|〜が]、[すごく][暑かったです|あつかったです|暑い]。", "The weather was good, but it was extremely hot."],
          ["[海|うみ]には[人|ひと]が[たくさん][いて|いて|いる]、[にぎやか]でした。", "There were lots of people at the sea, and it was lively."],
          ["ケンさんは「[僕|ぼく]は[海|うみ]が[大好き|だいすき]です！」と[言いました|いいました|言う]。", "Ken said, \"I love the sea!\""],
          ["ミホさんは「ケンさんは{勉強|べんきょう}が[大嫌い|だいきらい]ですね」と[言いました|いいました|言う]。", "Miho said, \"And you hate studying, Ken.\""]
        ],
        [
          ["「ケンさん、[サーフィン]を[やりませんか|やりませんか|やる]。」とポチが[聞きました|ききました|聞く]。", "\"Ken, won't you go surfing?\" Pochi asked."],
          ["ケンさんのボードは[大きくて|おおきくて|大きい]、[古かったです|ふるかったです|古い]。", "Ken's board was big and old."],
          ["ポチのボードは[小さくて|ちいさくて|小さい]、[新しかったです|あたらしかったです|新しい]。", "Pochi's board was small and new."],
          ["[サーフィン]は[難しかったです|むずかしかったです|難しい]。", "Surfing was difficult."],
          ["ケンさんは[すぐ][海|うみ]におちました。", "Ken fell into the sea right away."],
          ["[でも]、ポチは[すごく][上手|じょうず]でした。", "But Pochi was extremely good."],
          ["ポチは[帽子|ぼうし]を[かぶって|かぶって|かぶる]、[大きい|おおきい]なみに[乗りました|のりました|乗る]。", "Wearing his hat, Pochi rode a big wave."],
          ["ミホさんは「ポチ、[かっこいい]！」と[言いました|いいました|言う]。", "Miho said, \"Pochi, you look so cool!\""],
          ["ケンさんは「[サーフィン]は[嫌い|きらい]です」と[言って|いって|言う]、[泳ぎました|およぎました|泳ぐ]。", "Ken said, \"I don't like surfing,\" and went swimming."]
        ],
        [
          ["[それから]、ミホさんが「あっ！[大きい|おおきい][魚|さかな]！」と[言いました|いいました|言う]。", "Then Miho cried, \"Oh! A big fish!\""],
          ["くろいものが、ケンさんのほうに[来ました|きました|来る]。", "Something black came toward Ken."],
          ["「[怖い|こわい]！ポチ！ポチ！」", "\"It's scary! Pochi! Pochi!\""],
          ["[でも]、それは[魚|さかな]ではありませんでした。", "But it wasn't a fish."],
          ["タマでした。", "It was Tama."],
          ["タマは[古い|ふるい]ボードに[乗って|のって|乗る]、[魚|さかな]を[食べていました|たべていました|食べる]。", "Tama was riding an old board and eating a fish."],
          ["「ケンさんは[泳ぐ|およぐ]のが[下手|へた]ですね」とタマは[言いました|いいました|言う]。", "\"You're bad at swimming, Ken,\" said Tama."],
          ["ケンさんは「[大丈夫|だいじょうぶ]です。[全然|ぜんぜん][怖くなかったです|こわくなかったです|怖い]」と[言いました|いいました|言う]。", "Ken said, \"I'm fine. It wasn't scary at all.\""]
        ],
        [
          ["[昼ご飯|ひるごはん]に、みんなは[海|うみ]のちかくの[レストラン]に[行きました|いきました|行く]。", "For lunch, everyone went to a restaurant near the sea."],
          ["[食べ物|たべもの]も[飲み物|のみもの]も[とても][おいしかったです|おいしかったです|おいしい]。", "The food and the drinks were both very delicious."],
          ["ケンさんは[大きい|おおきい][ハンバーガー]を[食べました|たべました|食べる]。", "Ken ate a big hamburger."],
          ["ミホさんは[果物|くだもの]が[好き|すき]ですから、[果物|くだもの]の[アイスクリーム]を[食べました|たべました|食べる]。", "Miho likes fruit, so she ate fruit ice cream."],
          ["ポチは[暑い|あつい]{日|ひ}にも[熱い|あつい][コーヒー]を[飲みました|のみました|飲む]。", "Even on a hot day, Pochi drank hot coffee."],
          ["ミホさんは「ポチは[面白い|おもしろい][犬|いぬ]ですね」と[言いました|いいました|言う]。", "Miho said, \"Pochi, you're a funny dog.\""]
        ],
        [
          ["[それから]、みんなは[お土産|おみやげ]を[買いに|かいに|買う][行きました|いきました|行く]。", "After that, everyone went to buy souvenirs."],
          ["ポチはティーシャツを[三枚|さんまい|〜まい][買いました|かいました|買う]。", "Pochi bought three T-shirts."],
          ["ケンさんは「[どんな]ティーシャツですか」と[聞きました|ききました|聞く]。", "Ken asked, \"What kind of T-shirts are they?\""],
          ["「ミホさんのと、わたしのと、ケンさんのです。ケンさんのは[エルサイズ]です。」", "\"One for Miho, one for me, and one for you. Yours is size L.\""],
          ["ケンさんのティーシャツには[ハンバーガー]の[写真|しゃしん]が[ありました|ありました|ある]。", "Ken's T-shirt had a picture of a hamburger on it."],
          ["ケンさんは「ポチは[やさしい]ですね」と[言いました|いいました|言う]。", "Ken said, \"Pochi, you're so kind.\""]
        ],
        [
          ["[夜|よる]、[海|うみ]は[静か|しずか]でした。", "At night, the sea was quiet."],
          ["ケンさんは「ちょっと[寒い|さむい]です」と[言って|いって|言う]、[新しい|あたらしい]ティーシャツを[着ました|きました|着る]。", "Ken said, \"It's a little cold,\" and put on his new T-shirt."],
          ["ミホさんは「[今日|きょう]は[面白かったです|おもしろかったです|面白い]ね」と[言いました|いいました|言う]。", "Miho said, \"Today was fun, wasn't it.\""],
          ["「ポチ、ありがとう。[いい][誕生日|たんじょうび]でした。」", "\"Pochi, thank you. It was a good birthday.\""],
          ["ケンさんとミホさんは[あまり][元気|げんき]じゃありませんでした[が|が|〜が]、ポチは[とても][元気|げんき]でした。", "Ken and Miho were worn out, but Pochi was still full of energy."],
          ["そして、みんなは[電車|でんしゃ]に[乗りました|のりました|乗る]。", "And then, everyone boarded the train."]
        ]
      ] },
    { title: "きんようび：でんしゃとアパートのルール", titleEn: "Friday: The Train and the Apartment Rules",
      paragraphs: [
        [
          ["[今日|きょう]は[金曜日|きんようび]です。", "Today is Friday."],
          ["[三人|さんにん|〜にん]は[海|うみ]から[電車|でんしゃ]で[帰ります|かえります|帰る]。", "The three of them are going home from the sea by train."],
          ["[電車|でんしゃ]のなかは[すごく][暑かったです|あつかったです|暑い]。", "It was extremely hot inside the train."],
          ["「ポチ、[窓|まど]を[開けても|あけても|開ける]いいですか。」", "\"Pochi, is it okay if I open the window?\""],
          ["「[エアコン]を[つけます|つけます|つける]から、[窓|まど]を[開けないで|あけないで|開ける]ください。」", "\"I'm going to turn on the air conditioner, so please don't open the window.\""],
          ["[でも]、ケンさんは[窓|まど]を[開けました|あけました|開ける]。", "But Ken opened the window anyway."],
          ["つよい{風|かぜ}が[入って|はいって|入る]、ポチの[帽子|ぼうし]がとびました。", "A strong wind came in, and Pochi's hat flew off."],
          ["ミホさんが[帽子|ぼうし]をつかまえました。", "Miho caught the hat."],
          ["ポチは[すぐ][窓|まど]を[閉めて|しめて|閉める]、[エアコン]を[つけました|つけました|つける]。", "Pochi closed the window right away and turned on the air conditioner."]
        ],
        [
          ["[電車|でんしゃ]には[人|ひと]が[たくさん][いました|いました|いる]。", "There were a lot of people on the train."],
          ["ミホさんとポチは[座りました|すわりました|座る]。", "Miho and Pochi sat down."],
          ["[でも]、ケンさんの[いす]は[ありませんでした|ありませんでした|ある]から、ケンさんは[立っていました|たっていました|立つ]。", "But there was no seat for Ken, so Ken was standing."],
          ["ちかくで、[男の人|おとこのひと]が[たばこを吸っていました|たばこをすっていました|たばこをすう]。", "Nearby, a man was smoking."],
          ["ポチは[立って|たって|立つ]、[男の人|おとこのひと]に[言いました|いいました|言う]。", "Pochi stood up and spoke to the man."],
          ["「すみません。[電車|でんしゃ]で[たばこを吸っては|たばこをすっては|たばこをすう]いけませんよ。」", "\"Excuse me. You must not smoke on the train.\""],
          ["[男の人|おとこのひと]は[犬|いぬ]を[見て|みて|見る]、びっくりしました。", "The man looked at the dog and was startled."],
          ["「[犬|いぬ]が[話しました|はなしました|話す]……！」", "\"The dog talked...!\""],
          ["[男の人|おとこのひと]は[すぐ]たばこを[消して|けして|消す]、[次|つぎ]のえきで[降りました|おりました|降りる]。", "The man put out his cigarette right away and got off at the next station."],
          ["ケンさんはその[人|ひと]の[いす]に[座りました|すわりました|座る]。", "Ken sat down in that man's seat."]
        ],
        [
          ["「ああ、[大変|たいへん]でした。[一時間|いちじかん][立っていました|たっていました|立つ]よ。[死にます|しにます|死ぬ]よ。」", "\"Phew, that was rough. I was standing for an hour. I'm going to die.\""],
          ["「{十分|じゅっぷん}でしたよ、ケンさん。[人|ひと]は{十分|じゅっぷん}で[死にません|しにません|死ぬ]。」", "\"It was ten minutes, Ken. People don't die in ten minutes.\""],
          ["ミホさんは[ちょっと]わらいました。", "Miho laughed a little."]
        ],
        [
          ["ポチはかばんから[教科書|きょうかしょ]をだしました。", "Pochi took a textbook out of his bag."],
          ["「ケンさん、[来週|らいしゅう]の[月曜日|げつようび]は[漢字|かんじ]の[テスト]ですよ。」", "\"Ken, next Monday is the kanji test, you know.\""],
          ["「[本当ですか|ほんとうですか]？」", "\"Really?\""],
          ["「はい。[今週|こんしゅう]は[たくさん][遊びました|あそびました|遊ぶ]から、[今日|きょう]は[勉強しましょう|べんきょうしましょう|勉強する]。」", "\"Yes. You played a lot this week, so let's study today.\""],
          ["「{三十二|さんじゅうに}[ページ]を[開けて|あけて|開ける]ください。」", "\"Please open to page thirty-two.\""],
          ["ポチはケンさんに[漢字|かんじ]を[教えました|おしえました|教える]。", "Pochi taught Ken kanji."],
          ["「この[漢字|かんじ]は『でん』です。[電車|でんしゃ]の『でん』と、[電気|でんき]の『でん』ですね。」", "\"This kanji is 'den.' It's the 'den' in 'densha' (train) and the 'den' in 'denki' (electricity).\""],
          ["ケンさんは[ノート]に[漢字|かんじ]を[書きました|かきました|書く][が|が|〜が]、とても[大きかったです|おおきかったです|大きい]。", "Ken wrote the kanji in his notebook, but it was very big."]
        ],
        [
          ["「ポチ、[パソコン]を[使っても|つかっても|使う]いいですか。[パソコン]は[漢字|かんじ]が[わかります|わかります|わかる]から。」", "\"Pochi, can I use my computer? The computer knows kanji.\""],
          ["「だめです。[テスト]では[パソコン]を[使いません|つかいません|使う]よ。」", "\"No. You don't use a computer on the test.\""],
          ["「ポチさん、[大変|たいへん]ですね。わたしも[手伝いましょうか|てつだいましょうか|手伝う]。」とミホさんが[言いました|いいました|言う]。", "\"Pochi, that sounds tough. Shall I help too?\" said Miho."],
          ["「ありがとうございます。[次|つぎ]の[ページ]をおねがいします。」", "\"Thank you. Please take the next page.\""],
          ["ミホさんはとてもきびしいせんせいでした。", "Miho was a very strict teacher."],
          ["「ちょっと[休んでも|やすんでも|休む]いいですか」とケンさんが[聞きました|ききました|聞く]。", "\"Can I rest a little?\" Ken asked."],
          ["「[後で|あとで][休んで|やすんで|休む]ください」とミホさんが[言いました|いいました|言う]。", "\"Please rest later,\" said Miho."],
          ["「ポチの[国|くに]では、[犬|いぬ]も[漢字|かんじ]を[勉強します|べんきょうします|勉強する]か。」", "\"In your country, Pochi, do dogs study kanji too?\""],
          ["「わたしの[国|くに]は、ケンさんの[国|くに]とおなじですよ。」", "\"My country is the same as yours, Ken.\""]
        ],
        [
          ["[電車|でんしゃ]がケンさんの[町|まち]のえきにつきました。", "The train arrived at the station in Ken's town."],
          ["「[急いで|いそいで|急ぐ]ください！[降りましょう|おりましょう|降りる]！」とポチが[言いました|いいました|言う]。", "\"Please hurry! Let's get off!\" said Pochi."],
          ["[三人|さんにん|〜にん]は[急いで|いそいで|急ぐ][電車|でんしゃ]を[降りました|おりました|降りる]。", "The three of them hurried off the train."],
          ["「あっ！わたしの[荷物|にもつ]！[電車|でんしゃ]に[忘れました|わすれました|忘れる]！」", "\"Oh no! My bags! I left them on the train!\""],
          ["「[大丈夫|だいじょうぶ]です。ケンさんの[荷物|にもつ]は、わたしが[持っています|もっています|持つ]。」", "\"It's okay. I'm carrying your bags, Ken.\""],
          ["ポチは[小さい|ちいさい][犬|いぬ]です[が|が|〜が]、[大きい|おおきい]かばんをみっつも[持っていました|もっていました|持つ]。", "Pochi is a small dog, but he was carrying three big bags."],
          ["「ポチさんはすごいですね」とミホさんが[言いました|いいました|言う]。", "\"Pochi, you're amazing,\" said Miho."]
        ],
        [
          ["えきのまえに[ハンバーガー]の[レストラン]が[ありました|ありました|ある]。", "There was a hamburger restaurant in front of the station."],
          ["「ポチ、[お金|おかね]を[借りても|かりても|借りる]いいですか。」", "\"Pochi, can I borrow some money?\""],
          ["「またですか……いいですよ。[でも]、[来週|らいしゅう][返して|かえして|返す]ください。」", "\"Again? ...All right. But please pay it back next week.\""],
          ["「[来年|らいねん][返します|かえします|返す]。」", "\"I'll pay it back next year.\""],
          ["「[来週|らいしゅう]です。」", "\"Next week.\""],
          ["ケンさんはポチの[お金|おかね]で[ハンバーガー]を[買って|かって|買う]、{五分|ごふん}で[食べました|たべました|食べる]。", "Ken bought a hamburger with Pochi's money and ate it in five minutes."],
          ["「ミホさん、[来週|らいしゅう]、ともだちを[連れてきて|つれてきて|連れてくる]ください。[みんなで][遊びましょう|あそびましょう|遊ぶ]。」", "\"Miho, bring some friends next week. Let's all hang out together.\""],
          ["「[みんなで][勉強しましょう|べんきょうしましょう|勉強する]、ケンさん。わたしの[漢字|かんじ]の[ノート]を[持ってきます|もってきます|持ってくる]ね。」", "\"Let's all study together, Ken. I'll bring my kanji notebook.\""],
          ["ミホさんはポチに「さようなら」と[言って|いって|言う]、[うち]へ[帰りました|かえりました|帰る]。", "Miho said goodbye to Pochi and went home."]
        ],
        [
          ["[夜|よる]、[二人|ふたり]は[家|いえ]に[帰りました|かえりました|帰る]。", "That night, the two of them got home."],
          ["[部屋|へや]はくらかったです。", "The room was dark."],
          ["ポチは[部屋|へや]に[入って|はいって|入る]、[電気|でんき]を[つけました|つけました|つける]。", "Pochi went into the room and turned on the light."],
          ["ケンさんは[すぐ]ゆかで[寝ました|ねました|寝る]。", "Ken immediately lay down on the floor and went to sleep."],
          ["「ケンさん、[寝ないで|ねないで|寝る]ください。[お風呂|おふろ]に[入って|はいって|入る]ください。」", "\"Ken, please don't sleep. Please take a bath.\""],
          ["「[お風呂|おふろ]は[結構です|けっこうです]。[明日|あした][シャワーを浴びます|シャワーをあびます|シャワーをあびる]。」", "\"No bath for me, thanks. I'll take a shower tomorrow.\""],
          ["「だめです。[今日|きょう]は[海|うみ]で[泳ぎました|およぎました|泳ぐ]から。」", "\"No. You swam in the sea today.\""],
          ["ケンさんは{三分|さんぷん}だけ[シャワーを浴びました|シャワーをあびました|シャワーをあびる]。", "Ken took a shower for just three minutes."],
          ["「[シャワー]は{三分|さんぷん}ですか……」とポチが[言いました|いいました|言う]。", "\"A three-minute shower...?\" said Pochi."]
        ],
        [
          ["ポチは[お風呂|おふろ]に[入って|はいって|入る]、[ゆっくり][新聞|しんぶん]を[読みました|よみました|読む]。", "Pochi got into the bath and read the newspaper at a leisurely pace."],
          ["ケンさんは[パソコン]で[ゲーム]を[しました|しました|する]。", "Ken played games on his computer."],
          ["{十一時|じゅういちじ}に、ポチは「ケンさん、[電気|でんき]と[エアコン]を[消して|けして|消す]ください」と[言いました|いいました|言う]。", "At eleven o'clock, Pochi said, \"Ken, please turn off the lights and the air conditioner.\""],
          ["「[後で|あとで]……」", "\"Later...\""],
          ["そのとき、でんわがなりました。", "Just then, the phone rang."],
          ["ケンさんのおかあさんが[電話しました|でんわしました|電話する]。", "Ken's mother was calling."],
          ["「[もしもし]、ケン？[明日|あした]、[家族|かぞく][みんなで]そっちへ[行きます|いきます|行く]よ。」", "\"Hello, Ken? Tomorrow the whole family is coming over to your place.\""],
          ["「[明日|あした]ですか？！」", "\"Tomorrow?!\""]
        ],
        [
          ["ケンさんは[部屋|へや]を[見ました|みました|見る]。", "Ken looked around his room."],
          ["[部屋|へや]はとてもきたなかったです。", "The room was very messy."],
          ["「ポチ……[手伝って|てつだって|手伝う]ください。」", "\"Pochi... please help me.\""],
          ["ポチは[新聞|しんぶん]をおいて、しずかに[帽子|ぼうし]を[かぶりました|かぶりました|かぶる]。", "Pochi put down his newspaper and quietly put on his hat."]
        ]
      ] },
    { title: "どようび：ケンさんのかぞく", titleEn: "Saturday: Ken's Family",
      paragraphs: [
        [
          ["[昨日|きのう]の[夜|よる]の[電話|でんわ]は、ケンさんの[お母さん|おかあさん]からでした。", "Last night's phone call was from Ken's mother."],
          ["[今日|きょう]、ケンさんの[家族|かぞく]がアパートに[来ます|きます|来る]。", "Today, Ken's family is coming to the apartment."],
          ["ポチは[朝|あさ]{六時|ろくじ}に[起きて|おきて|起きる]、[部屋|へや]を[掃除しました|そうじしました|掃除する]。", "Pochi got up at six in the morning and cleaned the room."],
          ["ケンさんは[まだ][寝ていました|ねていました|寝る]。", "Ken was still asleep."],
          ["「ケンさん、[起きてください|おきてください|起きる]。{十時|じゅうじ}にみなさんが[来ます|きます|来る]よ。」", "\"Ken, please get up. Everyone is coming at ten.\""],
          ["「うーん……[別に|べつに]いいよ。」", "\"Mmm... it's fine, whatever.\""],
          ["「よくありません。」", "\"It is not fine.\""]
        ],
        [
          ["ポチはケンさんの[ジーンズ]を[持ってきました|もってきました|持ってくる]。", "Pochi brought Ken's jeans."],
          ["ケンさんは[ジーンズ]を[はいて|はいて|はく]、セーターを[着ました|きました|着る]。", "Ken put on his jeans and put on a sweater."],
          ["ポチも[小さい|ちいさい]セーターを[着て|きて|着る]、[新しい|あたらしい][帽子|ぼうし]を[かぶりました|かぶりました|かぶる]。", "Pochi put on a little sweater too and a new hat."],
          ["「ポチ、そのセーター、だれのですか。」", "\"Pochi, whose sweater is that?\""],
          ["「ケンさんの[おばあさん]が[作りました|つくりました|作る]。{去年|きょねん}のプレゼントです。」", "\"Your grandmother made it. It was a present last year.\""],
          ["「[僕|ぼく]は[何も|なにも][ありませんでした|ありませんでした|ある]よ……。」", "\"I didn't get anything...\""]
        ],
        [
          ["{十時|じゅうじ}に、[大きい|おおきい][車|くるま]が[来ました|きました|来る]。", "At ten, a big car arrived."],
          ["ケンさんの[お父さん|おとうさん]の[車|くるま]は[とても][速い|はやい|速い]です。", "Ken's father's car is very fast."],
          ["[車|くるま]から[六人|ろくにん|〜にん][降りました|おりました|降りる]。", "Six people got out of the car."],
          ["[男の人|おとこのひと]は[二人|ふたり]、[女の人|おんなのひと]は[四人|よにん|〜にん]でした。", "Two were men, and four were women."],
          ["ちょうどミホさんも[来ました|きました|来る]。", "Just then, Miho came too."],
          ["[昨日|きのう]、ポチがミホさんに[手紙|てがみ]を[書きました|かきました|書く]から。", "Because Pochi had written Miho a letter yesterday."]
        ],
        [
          ["「ミホさん、[僕|ぼく]の[家族|かぞく]だよ。」", "\"Miho, this is my family.\""],
          ["「こちらは[父|ちち]です。[父|ちち]は[車|くるま]の[会社|かいしゃ]で[働いています|はたらいています|働く]。」", "\"This is my father. My father works at a car company.\""],
          ["[お父さん|おとうさん]は[めがね]を[かけていました|かけていました|かける]。", "His father was wearing glasses."],
          ["「こちらは[母|はは]です。[母|はは]は[僕|ぼく]の[大学|だいがく]の[食堂|しょくどう]で[ハンバーガー]を[作っています|つくっています|作る]。」", "\"This is my mother. My mother makes hamburgers in my university's cafeteria.\""],
          ["「だから、ケンさんは[毎日|まいにち][ハンバーガー]を[食べます|たべます|食べる]ね。」とミホさんは[言いました|いいました|言う]。", "\"So that's why you eat hamburgers every day,\" said Miho."],
          ["「[姉|あね]は[背が高くて|せがたかくて|背が高い]、[髪|かみ]が[長い|ながい|長い]です。[姉|あね]は[結婚していて|けっこんしていて|結婚する]、{東京|とうきょう}に[住んでいます|すんでいます|住む]。」", "\"My older sister is tall and has long hair. She's married and lives in Tokyo.\""],
          ["「[弟|おとうと]は[背が低い|せがひくい|背が低い]です[が|が|〜が]、[元気|げんき]です。[髪|かみ]が[短い|みじかい|短い]です。」", "\"My younger brother is short, but he's full of energy. His hair is short.\""],
          ["「[妹|いもうと]は[まだ][子供|こども]です。」", "\"My little sister is still a child.\""]
        ],
        [
          ["「ケンさん、[兄弟|きょうだい]は[何人|なんにん|〜にん]ですか。」とミホさんは[聞きました|ききました|聞く]。", "\"Ken, how many brothers and sisters do you have?\" Miho asked."],
          ["「[兄|あに]も[一人|ひとり][います|います|いる]。だから、[四人|よにん|〜にん]だよ。」", "\"I also have one older brother. So, four.\""],
          ["「[お兄さん|おにいさん]は[今日|きょう][来ませんでした|きませんでした|来る]ね。」", "\"Your older brother didn't come today, did he?\""],
          ["「[兄|あに]は[今|いま]、[アメリカ]で[働いています|はたらいています|働く]。[おじいさん]は[家|いえ]で[猫|ねこ]と[待っています|まっています|待つ]。」", "\"My brother is working in America now. My grandfather is waiting at home with the cat.\""],
          ["「[お姉さん|おねえさん]、[とても][きれい]ですね。」", "\"Your older sister is very pretty.\""],
          ["「ありがとう。ミホさんも[かわいい]ね。」と[お姉さん|おねえさん]は[言いました|いいました|言う]。", "\"Thank you. You're cute too, Miho,\" said his sister."]
        ],
        [
          ["[おばあさん]は[とても][親切|しんせつ]な[人|ひと]です。", "Grandmother is a very kind person."],
          ["[おばあさん]は[魚|さかな]を[たくさん][持ってきました|もってきました|持ってくる]。", "Grandmother brought a lot of fish."],
          ["「ポチちゃんは[やせています|やせています|やせる]ね。[魚|さかな]を[食べて|たべて|食べる]。」", "\"Pochi, dear, you're thin. Eat some fish.\""],
          ["「いいえ、わたしは[大丈夫|だいじょうぶ]です。」", "\"No, I am fine.\""],
          ["[でも]、[窓|まど]の{外|そと}にタマが[いました|いました|いる]。", "But Tama was outside the window."],
          ["タマの[目|め]は[魚|さかな]を[見ていました|みていました|見る]。", "Tama's eyes were on the fish."],
          ["{五分|ごふん}あと、タマの[口|くち]に[魚|さかな]が[ありました|ありました|ある]。", "Five minutes later, there was a fish in Tama's mouth."],
          ["タマは{一日|いちにち}で[魚|さかな]を[七枚|ななまい|〜まい][食べて|たべて|食べる]、[太りました|ふとりました|太る]。", "In one day Tama ate seven fish and got fat."]
        ],
        [
          ["[昼ご飯|ひるごはん]のあと、[弟|おとうと]が「ポチ、[一緒に|いっしょに][歌|うた]を[歌いましょう|うたいましょう|歌う]！」と[言いました|いいました|言う]。", "After lunch, the younger brother said, \"Pochi, let's sing a song together!\""],
          ["[弟|おとうと]は[大学|だいがく]の[サークル]で[歌|うた]を[歌っています|うたっています|歌う]。", "The younger brother sings in a club at his university."],
          ["「[もちろん]です。」", "\"Of course.\""],
          ["ポチは[帽子|ぼうし]を[かぶって|かぶって|かぶる]、[二人|ふたり]で[歌いました|うたいました|歌う]。", "Pochi put on his hat, and the two of them sang."],
          ["ポチの[歌|うた]は[とても][上手|じょうず]でした。", "Pochi's singing was very good."],
          ["[妹|いもうと]は「ポチの[目|め]、[かわいい]！」と[言いました|いいました|言う]。", "The little sister said, \"Pochi's eyes are so cute!\""],
          ["ケンさんは[何も|なにも][歌いませんでした|うたいませんでした|歌う]。ソファで[寝ていました|ねていました|寝る]。", "Ken didn't sing anything. He was sleeping on the sofa."]
        ],
        [
          ["[お母さん|おかあさん]はポチに「ケンの[テスト]は[どう]？」と[聞きました|ききました|聞く]。", "His mother asked Pochi, \"How are Ken's tests?\""],
          ["「[来週|らいしゅう]、[日本語|にほんご]の[テスト]が[あります|あります|ある]。わたしが[教えています|おしえています|教える]。」", "\"There's a Japanese test next week. I am teaching him.\""],
          ["「ケン、[知っている|しっている|知る]？」", "\"Ken, do you know about it?\""],
          ["「[知らない|しらない|知る]……。」", "\"I don't know...\""],
          ["[お父さん|おとうさん]は「ポチは[頭がいい|あたまがいい|頭がいい]ね。ケンは……。」と[言いました|いいました|言う]。", "His father said, \"Pochi is smart. Ken, though...\""],
          ["[家族|かぞく]はみんな、ポチは[頭がいい|あたまがいい|頭がいい]と[思っています|おもっています|思う]。", "Everyone in the family thinks Pochi is smart."],
          ["「ポチは[便利|べんり]な[犬|いぬ]だね。」と[お父さん|おとうさん]は[言いました|いいました|言う]。", "\"Pochi is a handy dog,\" said his father."],
          ["「わたしは[便利|べんり]じゃありません。[家族|かぞく]です。」とポチは[言いました|いいました|言う]。", "\"I am not handy. I am family,\" said Pochi."]
        ],
        [
          ["[夜|よる]、[お父さん|おとうさん]は「[明日|あした]、[みんなで][バーベキュー][パーティー]をしましょう！」と[言いました|いいました|言う]。", "That night, his father said, \"Tomorrow, let's all have a barbecue party!\""],
          ["[お母さん|おかあさん]は「ミホさん、[よかったら]、[明日|あした]も[来てください|きてください|来る]。」と[言いました|いいました|言う]。", "His mother said, \"Miho, if you like, please come tomorrow too.\""],
          ["「はい、ぜひ！」", "\"Yes, I'd love to!\""],
          ["ポチは[テレビ]で[天気予報|てんきよほう]を[見ました|みました|見る]。", "Pochi watched the weather forecast on TV."],
          ["「[明日|あした]は[雨|あめ]が[降ります|ふります|降る]……。」", "\"Tomorrow it's going to rain...\""],
          ["ケンさんは[目|め]を[開けて|あけて|開ける]、「えっ、[パーティー]は？」と[言いました|いいました|言う]。", "Ken opened his eyes and said, \"What? What about the party?\""]
        ]
      ] },
    { title: "にちようび：バーベキューパーティー", titleEn: "Sunday: The Barbecue Party",
      paragraphs: [
        [
          ["[今朝|けさ]、[雨|あめ]が[降っていました|ふっていました|降る]。", "This morning, it was raining."],
          ["ケンさんは「[パーティー]は[残念|ざんねん]だね……。」と[言って|いって|言う]、また[寝ました|ねました|寝る]。", "Ken said, \"Too bad about the party...\" and went back to sleep."],
          ["でも、ポチは[テレビ]の[天気予報|てんきよほう]を[見ていました|みていました|見る]。", "But Pochi was watching the weather forecast on TV."],
          ["「ケンさん、[起きて|おきて|起きる]ください。[いま]は[曇り|くもり]です。」", "\"Ken, please get up. It's cloudy now.\""],
          ["「[天気予報|てんきよほう]は、[ごご]は[晴れ|はれ]だって[言っていました|いっていました|言う]。[気温|きおん]は[二十五度|にじゅうごど|〜ど]です。」", "\"The weather forecast said it will be sunny in the afternoon. The temperature is twenty-five degrees.\""],
          ["「[ほんとうですか|ほんとうですか|本当ですか]？[雪|ゆき]も[降る|ふる|降る]？」", "\"Really? Is it going to snow too?\""],
          ["「いまは[夏|なつ]です。[雪|ゆき]は[冬|ふゆ]です。」", "\"It is summer now. Snow is for winter.\""]
        ],
        [
          ["「みんなが[来ます|きます|来る]から、[部屋|へや]を[掃除して|そうじして|掃除する]ください。」", "\"Everyone is coming, so please clean your room.\""],
          ["「[ううん]、[後で|あとで]……。」", "\"Nah, later...\""],
          ["「[後で|あとで]じゃありません。いまです。」", "\"Not later. Now.\""],
          ["ケンさんは[ゆっくり][起きて|おきて|起きる]、[部屋|へや]を[掃除しました|そうじしました|掃除する]。", "Ken slowly got up and cleaned his room."],
          ["[古い|ふるい|古い][雑誌|ざっし]と[新聞|しんぶん]をたくさん[捨てました|すてました|捨てる]。", "He threw away lots of old magazines and newspapers."],
          ["ポチは[洗濯しました|せんたくしました|洗濯する]。", "Pochi did the laundry."],
          ["ケンさんの[ジーンズ]と[トレーナー]も[洗いました|あらいました|洗う]。", "He washed Ken's jeans and sweatshirt too."],
          ["「ケンさん、[毎週|まいしゅう][掃除して|そうじして|掃除する]ください。」", "\"Ken, please clean every week.\""],
          ["「[うん]、[うん]。」", "\"Uh-huh, uh-huh.\""]
        ],
        [
          ["{十一時|じゅういちじ}に、[お父さん|おとうさん]が[車|くるま]を[運転して|うんてんして|運転する]、[家族|かぞく]が[来ました|きました|来る]。", "At eleven, Ken's father drove the car, and the family arrived."],
          ["ミホさんも[自転車|じてんしゃ]で[来ました|きました|来る]。", "Miho came too, by bicycle."],
          ["[雨|あめ]はもう[降っていませんでした|ふっていませんでした|降る]。", "It was no longer raining."],
          ["[お母さん|おかあさん]と[お姉さん|おねえさん]は{台所|だいどころ}で[料理しました|りょうりしました|料理する]。", "Ken's mother and older sister cooked in the kitchen."],
          ["[お母さん|おかあさん]は[ハンバーガー]を[作りました|つくりました|作る]。", "His mother made hamburgers."],
          ["ケンさんは「やった！」と[言いました|いいました|言う]。", "Ken said, \"Yes!\""],
          ["ポチは[トマト]を[切りました|きりました|切る]。とても[上手|じょうず]です。", "Pochi cut the tomatoes. He was very good at it."],
          ["ケンさんも[トマト]を[切りました|きりました|切る][が|が|〜が]、とても[下手|へた]でした。", "Ken cut tomatoes too, but he was very bad at it."],
          ["「ケンは[下手|へた]だね。ポチは[上手|じょうず]だね。」とミホさんは[言いました|いいました|言う]。", "\"Ken is clumsy. Pochi is skillful,\" said Miho."],
          ["[おばあさん]は、また[魚|さかな]をたくさん[持ってきました|もってきました|持ってくる]。", "Grandmother brought a lot of fish again."]
        ],
        [
          ["[お父さん|おとうさん]は「[何か|なにか][いる|いる|いる]？」と[聞きました|ききました|聞く]。", "His father asked, \"Do we need anything?\""],
          ["「[はし]が[いります|いります|いる]。それから、[カメラ]も。」とポチは[言いました|いいました|言う]。", "\"We need chopsticks. And a camera, too,\" said Pochi."],
          ["「じゃあ、[はし]と[カメラ]を[持っていきましょう|もっていきましょう|持っていく]。」", "\"Then let's take chopsticks and a camera.\""],
          ["[ごご]は[晴れ|はれ]でしたから、みんなで[公園|こうえん]に[行きました|いきました|行く]。", "The afternoon was sunny, so they all went to the park together."],
          ["「ここは[いい][所|ところ]ですね。」とミホさんは[言いました|いいました|言う]。", "\"This is a nice place,\" said Miho."]
        ],
        [
          ["[公園|こうえん]で、[町|まち]の[人|ひと]が「ポチさん、こんにちは！」と[言いました|いいました|言う]。", "At the park, people from town said, \"Hello, Mr. Pochi!\""],
          ["[スーパー]の[人|ひと]も、[本屋|ほんや]の[人|ひと]も、ポチを[知っています|しっています|知る]。", "The people from the supermarket and the bookstore all know Pochi."],
          ["ポチは[町|まち]で[有名|ゆうめい]です。", "Pochi is famous in town."],
          ["「ポチは[有名|ゆうめい]だね。ケンは？」と[お母さん|おかあさん]は[聞きました|ききました|聞く]。", "\"Pochi is famous, isn't he? What about Ken?\" his mother asked."],
          ["「ケンさんは[いつも][寝ています|ねています|寝る]から、[だれ]も[知りません|しりません|知る]。」とミホさんは[言いました|いいました|言う]。", "\"Ken is always sleeping, so nobody knows him,\" said Miho."],
          ["そこに、タマも[来ました|きました|来る]。", "Just then, Tama came too."],
          ["タマといっしょに、[背が高い|せがたかい|背が高い][男の人|おとこのひと]も[来ました|きました|来る]。", "A tall man came along with Tama."],
          ["「こんにちは。カルロスです。[スペイン]の[留学生|りゅうがくせい]です。」", "\"Hello. I'm Carlos. I'm an international student from Spain.\""],
          ["「タマの[家|いえ]で[ホームステイ]をしています。」", "\"I'm doing a homestay at Tama's house.\""],
          ["「ポチさん、[スペイン]の[新聞|しんぶん]にポチさんの[写真|しゃしん]がありましたよ！」", "\"Mr. Pochi, there was a picture of you in a Spanish newspaper!\""],
          ["「そうですか。ありがとうございます。」とポチは[言いました|いいました|言う]。", "\"Is that so? Thank you,\" said Pochi."],
          ["タマは「ふん。」と[言いました|いいました|言う]。タマの[目|め]は[魚|さかな]を[見ていました|みていました|見る]。", "Tama said, \"Hmph.\" Tama's eyes were on the fish."]
        ],
        [
          ["[お父さん|おとうさん]が[バーベキュー]を[始めました|はじめました|始める]。", "His father started the barbecue."],
          ["[にく]と[野菜|やさい]と[魚|さかな]をやきました。", "They grilled meat, vegetables, and fish."],
          ["ポチは[はし]がとても[上手|じょうず]です。", "Pochi is very good with chopsticks."],
          ["[弟|おとうと]さんは[カメラ]で[写真|しゃしん]をたくさん[撮りました|とりました|撮る]。", "Ken's younger brother took lots of photos with the camera."],
          ["[お父さん|おとうさん]は「みんな、[乾杯|かんぱい]！」と[言いました|いいました|言う]。", "His father said, \"Everyone, cheers!\""],
          ["「[乾杯|かんぱい]！」", "\"Cheers!\""],
          ["ケンさんはジュースを、ポチは[水|みず]を[飲みました|のみました|飲む]。", "Ken drank juice, and Pochi drank water."],
          ["[お父さん|おとうさん]は[会社員|かいしゃいん]です。[毎日|まいにち][遅く|おそく]まで[働いています|はたらいています|働く]。", "His father is an office worker. He works until late every day."],
          ["「ケン、[来年|らいねん]の[仕事|しごと][について|について|〜について]、[どう][思う|おもう|思う]？」", "\"Ken, what do you think about work next year?\""],
          ["「[うん]……ポチは[アルバイト]が[上手|じょうず]だから……。」", "\"Well... Pochi is good at part-time jobs, so...\""],
          ["みんなはわらいました。でも、[お父さん|おとうさん]はわらいませんでした。", "Everyone laughed. But his father didn't laugh."]
        ],
        [
          ["ミホさんは「ケンさん、[日本語|にほんご]の[テスト]は[あさって]ですよ。」と[言いました|いいました|言う]。", "Miho said, \"Ken, the Japanese test is the day after tomorrow.\""],
          ["「えっ、[まだ][勉強していません|べんきょうしていません|勉強する]……。」", "\"What? I haven't studied yet...\""],
          ["「[今月|こんげつ]、ケンさんは[ぜんぜん][勉強しませんでした|べんきょうしませんでした|勉強する]ね。」", "\"This month, you didn't study at all, did you?\""],
          ["タマはしずかに[魚|さかな]を[持っていきました|もっていきました|持っていく]。だれも[見ていませんでした|みていませんでした|見る]。", "Tama quietly took a fish away. Nobody was watching."],
          ["[夜|よる]、みんなで[カラオケ]に[行きました|いきました|行く]。", "In the evening, they all went to karaoke together."],
          ["ポチと[弟|おとうと]さんはまた[歌|うた]を[歌いました|うたいました|歌う]。", "Pochi and the younger brother sang songs again."],
          ["「もう[遅くなりました|おそくなりました|遅くなる]から、[帰りましょう|かえりましょう|帰る]。」と[お母さん|おかあさん]は[言いました|いいました|言う]。", "\"It's gotten late, so let's go home,\" said his mother."]
        ],
        [
          ["[家|いえ]で、ケンさんは「[お風呂に入って|おふろにはいって|お風呂に入る]から、[寝る|ねる|寝る]。」と[言いました|いいました|言う]。", "At home, Ken said, \"I'm going to take a bath and then go to bed.\""],
          ["「ケンさん、[はし]を[洗って|あらって|洗う]ください。」", "\"Ken, please wash the chopsticks.\""],
          ["「ポチ、ごめんなさい。[今週|こんしゅう]はありがとう。」", "\"Pochi, I'm sorry. Thank you for this week.\""],
          ["「[来週|らいしゅう]から、ぼくが[掃除して|そうじして|掃除する]、[洗濯して|せんたくして|洗濯する]、[料理します|りょうりします|料理する]！」", "\"Starting next week, I'll do the cleaning, the laundry, and the cooking!\""],
          ["「[来月|らいげつ]からじゃないよ。[来週|らいしゅう]からだよ！」", "\"Not starting next month. Starting next week!\""],
          ["ポチはケンさんの[目|め]を[見て|みて|見る]、[言いました|いいました|言う]。", "Pochi looked Ken in the eye and said,"],
          ["「ケンさん、それは[先週|せんしゅう]も[言いました|いいました|言う]よ。」", "\"Ken, you said that last week, too.\""],
          ["[来週|らいしゅう]も、ポチは[忙しい|いそがしい|忙しい]と[思います|おもいます|思う]。", "I think Pochi will be busy next week, too."]
        ]
      ] }
  ]
};
