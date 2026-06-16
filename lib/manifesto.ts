/**
 * Manifesto / values content for the Who We Are page — taken verbatim from the
 * live gulfcoastunderground.org WordPress source (em dashes converted to
 * commas to match the site's no-em-dash style). Scripture references are kept
 * as the original lists.
 */

export interface ValueItem {
  group: "Christ-Centered" | "Worship" | "Community" | "Mission";
  title: string;
  body: string;
  refs?: string;
}

export const focusItems: { title: string; body: string; refs?: string }[] = [
  {
    title: "Christology",
    body: "Christ is God who came to earth in the flesh to die on the cross after living a sinless life to take the punishment that every human being deserved in order that God the Father's justice may be kept perfect. We now have God the Holy Spirit dwelling with us to guide us in His wonderful plan of salvation, which comes through following Christ. Jesus is the Word of God became flesh and dwelt among mankind to demonstrate God's will for man (i.e. how God wants us to live in pursuit of holiness). All of Scripture points to Christ and is our sole and absolute authority for life. As we consider Jesus' incarnate life, we see two key focuses we relentlessly center on: first, Christ came to shift the focus off of the kingdoms of this world onto the Kingdom of Heaven; and second, Jesus simplifies all rules and instruction for life down to two commandments, to love the Lord your God with all that you are and to love your neighbor as yourself. Both commandments focus on relationship, and at the hub we focus heavily on relationships, both with the Lord and with people.",
  },
  {
    title: "Missiology & Ecclesiology",
    body: "When looking at Jesus' incarnate life, it boils down to living life on Mission (Kingdom Discipleship) with a circle of followers (the Church) with the goal of multiplication of the Kingdom through building relationships with both God and the people in our everyday path. As we interpret Scripture around missiology and ecclesiology, we filter all interpretations through the lens of healthy Christology to avoid getting to a point where mission and gathering become mutually exclusive. The gathering of believers is not the exclusive focus. Mission is not the exclusive focus. Discipleship is the focus, which yields healthy rhythms of both gathering and mission. This is why you will hear us say things like “church is not something we go to; we are the Church.” In order to be the Church in the healthiest sense, rhythms of gathering and mission are BOTH vital in the life of every Christ follower. One of the best charts we have come across to understand healthy missiology and ecclesiology is the Engel Scale.",
  },
];

export const values: ValueItem[] = [
  {
    group: "Christ-Centered",
    title: "Christ-Centered",
    body: "We believe that the gospel is the answer to all of life regardless of the issue or circumstance. All authority has been given by the Father to Jesus, and every follower learning to submit to His authority in his or her own life personally is fundamentally essential. God never intended His people to be ruled like other nations. His intention has always been for His people to be ruled by Him. There was only one authority between God and man B.C., the priest. And of course, we know Jesus' death, burial and resurrection fulfilled the role of the priest once and for all, and now every believer is a part of the royal priesthood under Him as our Great High Priest. In Him alone is the power for all necessary transformation, which is why we practice the discipline of applying the gospel to every issue and circumstance of life.",
    refs: "Ish 53; Jn 1:1-14; Jn 3:16-21; Jn 6:35-51; Jn 5:18-29; Mt 28:18; Acts 15:10; II Cor 6:3; II Tim 1:8-10; I Jn 2:4-6; I Jn 3:19-24; Acts 4:19; Acts 5:29; I Cor 1:10-17; I Cor 2:15-16; I Cor 4:1-2; II Cor 1:24; II Cor 4:2-5; II Cor 10:13-18; Eph 4:13; Col 2:16-23; I Thes 2:6-9; II Thes 1:11-12; I Tim 1:3-4; Ex 12; Ex 28-29; Lv 6:8-8:36; Lv 16; I Sam 8:1-9; I Pet 2:4-10",
  },
  {
    group: "Worship",
    title: "The Bible",
    body: "We believe the Scripture, as given to us by God through the work of the Holy Spirit in the form of our Holy Bible from Genesis to Revelation, is the infallible Word of God. It is Christ and, from start to finish, points to Christ. In humility, we acknowledge that we do not fully understand God and the world that he has made, but we do trust that His Word is fully authoritative, reliable and truth. Full devotion to seeking obedience through the Scripture is how the gospel transforms our lives and brings glory to God. And, it is important to understand that we do not seek such obedience to obtain our salvation but because of what He did to accomplish our salvation.",
    refs: "Deut 4:5-10; I Sam 15:22-23; Neh 8; Ps 18:30; Ps 119; Prv 30:5; Ish 40:8; Jer 15:16; Mt 4:4; Lk 8:21; Lk 11:28; Jn 1:1-17; Jn 5:24; Jn 5:39-47; Jn 8:51; Acts 18:11; Col 1:25; Col 3:16; I Thes 2:13; I Tim 4:13; II Tim 3:16-4:2; Heb 4:12-13; II Pet 3:14-18; I Jn 2:4-5; Rev 19:9",
  },
  {
    group: "Worship",
    title: "Prayer & Dependence on God",
    body: "Full devotion to seeking obedience starts with developing a life-style of prayer and dependence on God. Without prayer and dependence on God, anything we accomplish will be in our own strength bringing glory only to ourselves rather than bringing glory to His name. Plus, we cannot truly build His Kingdom without the power of the Holy Spirit, Who is only accessed by healthy rhythms of prayer and intercession focused on Him and the world around us. As we pray for the Lord of the harvest to send us and other workers out into the harvest we believe it stirs the Spirit of God and helps us to walk in step with Him.",
    refs: "Gen 32:22-32; II Chron 7:14; Ezra 8:21-23; Ps 17:6; Ps 37:4-5; Ish 26:8-9; Jer 29:12-14; Mt 6:9-13; Mt 6:33; Mt 9:38; Mk 1:35; Lk 11:9-13; Jn 6:35; Jn 7:37; Jn 15:4-5; Acts 2:42; Acts 6:4; II Cor 3:5-6; Eph 6:18; Phil 4:6-7; Col 4:2-3; I Thes 5:17; I Tim 2:1-3; Heb 5:7; Jam 5:13-16; Jude 20; Rev 4-5",
  },
  {
    group: "Worship",
    title: "Zeal & Contemplation",
    body: "We value BOTH sides of this very important coin. Living out exuberance and zeal in worship, community life and mission can accomplish great things in revealing the majesty and glory of our God. They can also go a long way to create confusion if not balanced with rhythms of silence and solitude for personal contemplation and rest. We value each and both together, and we strive for a fusion of the two by living out a life that is both ablaze and unashamed for God as well as contemplative and aware of a quiet appreciation for God and His omnipresence.",
    refs: "(Zeal) II Sam 6:13-15; Ps 37:7; Neh 5:6-13; Ish 42:13; Mt 5:13-16; Mt 21:12-13; Mk 11:15-17; Lk 19:45-46; Rom 12:11; Tit 2:14  (Contemplation) Gen 37:11; Ps 46:10; Ps 48:9; Mk 6:31; II Cor 3:16-18; Phil 4:8; Col 3:2; I Pet 1:13",
  },
  {
    group: "Worship",
    title: "Passion & Humility",
    body: "Passion and humility represent another very important two-side coin. Christ modeled the type of passion we seek to live with in His incarnate life. We can develop a similar passion in the way we live out our life for His Kingdom and His glory by being willing to lay all of our own worldly pursuits and ambitions down to focus on Him. However, if not lived out in balance with humility, passion can create a pharisaical culture through things like spiritual pride and unhealthy comparison. We focus on the fact that “the greatest among us will be the servant of all” and that “He came to serve and not to be served.”",
    refs: "(Passion) Josh 6:15-21; I Sam 17:45-47; Ps 63:1; Dan 6:6-10; Mt 16:24-25; Mt 26:38-39; Acts 6:8-7:60; Rom 8:18; Rom 12:1-2; II Cor 1:5; Eph 4:1-3; Col 1:24-25; II Tim 3:12-15; I Jn 3:16  (Humility) Ps 25:9; Ps 51:17; Pr 11:2; Pr 22:4; Ish 57:15; Mt 5:3; Mt 18:4; Jn 13:5-15; Rom 12:3; I Cor 10:12; Phil 2:3-11; Jam 4:6; I Pet 5:5-7",
  },
  {
    group: "Community",
    title: "One Another",
    body: "We believe in and highly value the biblical principle of covenant relationship, first, with God through Christ by the Holy Spirit; second, in biblical marriage and the home; and third, as the body of Christ which is our extended spiritual family of fellow believers who we live life out with in our routine context. There are certain things that God wants to do in and through us for His glory that simply cannot be accomplished without entering into these covenant relationships. Ultimately, the outside world will know Christ by the way we treat one another as the body of Christ.",
    refs: "Prov 11:14; Prov 15:22; Ecc 4:9-12; Mt 18:15-20; Jn 13:14,34-35; Jn 15:13; Acts 2:44; Acts 4:32-35; Rom 12:4-8,10; Rom 15:5-6; I Cor 5; I Cor 12:24-27; I Cor 13; Gal 6:2; Eph 5:21; Phil 2:3-4; I Tim 5:19-21; Jam 5:9; Heb 6:10; Heb 10:24-25; I Pet 3:8; I Pet 4:8-11; I Jn 3:7-12,16",
  },
  {
    group: "Community",
    title: "Sharing & Giving",
    body: "Sharing and giving as a value focuses on Christ followers in our community learning to live in rhythms of generosity and meeting needs that arise in their routine context. These rhythms promote relationship and sever the ties of possessiveness and materialism over our hearts. We encourage relentless sharing, generosity and Kingdom stewardship, and we aim to live this value out in the way we approach and exemplify our corporate budget as well.",
    refs: "Gen 14:18-24; Gen 32:10-11; Ex 25:1-2; Ezra 2:68-69; Neh 7:70-72; Mal 3:10; Mt 25:14-30; Lk 3:11; Lk 21:1-4; Acts 2:45-46; Acts 4:32; Acts 20:35; II Cor 9:10-15; Eph 4:28; I Thes 2:8; I Tim 6:18; I Jn 3:17",
  },
  {
    group: "Community",
    title: "Equipping & Empowerment",
    body: "We affirm the priesthood of all believers. While we do not waiver on the objective truth of the gospel, we strongly believe in God's subjective calling based on the unique giftings, passions and story of every individual who has surrendered to Christ. Our goal is to help individuals develop spiritual habits and rhythms to the point where they learn to sit at the feet of Jesus and hear the voice of the Holy Spirit for themselves. We do not believe in any hierarchal spiritual authority outside of The Father, Jesus Christ, believer. Our biblically appointed elders merely seek, based on life demonstrative influence (not title), to help people learn to follow Christ for themselves.",
    refs: "I Pet 2:5,9-10; Rev 5:9-10; Mt 4:18-19; Mt 16:24-25; Jn 3:3-8; Jn 14:6-12; Jn 15:1-8; Rom 10:9-10; I Cor 11:1; Eph 2:8-9; Jam 1:22; Jam 2:14-19; Rom 12:3-8; I Cor 12; Eph 4:8-16; Col 1:28; I Pet 5:1-11; Acts 14:23; I Tim 3:1-7; Tit 1:5,6-9; II Pet 1:5-15",
  },
  {
    group: "Community",
    title: "Culture & Ethnicity",
    body: "We believe that every culture and ethnicity collectively reflects the mosaic of God's own image and together we better glorify and serve the God of creation. We value every people, language and culture on the Gulf Coast and around the world. We believe that the Church of Jesus Christ was meant to demonstrate the power of the gospel through reconciliation, unity, and the beauty of a multi-ethnic community. For that reason we do not just admire multi-ethnic community, but purpose to become one. We do not believe in being color blind, but rather, we hope to accept and include the beauty and wisdom of every culture on the Gulf Coast and in our communities.",
    refs: "Gen 1:27; Ps 67:2-3; Ish 42:6; Ish 49:6; Ish 52:10; Ish 56:7; Dan 7:13-14; Joel 2:28; Hag 2:7; Mal 1:11; Lk 24:46-47; Jn 8:12; Acts 1:8; Acts 2:17; Acts 10:34-35; Acts 17:26-27; Rom 14:11; I Cor 12:12-14; Eph 2:14-22; Phil 2:10-11; Rev 5:9-10; Rev 7:9; Rev 14:6",
  },
  {
    group: "Community",
    title: "Simplicity",
    body: "We affirm and adopt the simplicity Christ exemplified during His incarnate life into the Underground. At the time Christ walked the earth, the religious leaders led one of the most complex religious systems of manmade standards in history. Christ sought to boil those systems down by simplifying all of their rules and laws into two simple commandments. Rather than worrying about how many steps one could walk on Shabbat, Christ told his disciples “follow me.” We aim to avoid complex budgets strained by property maintenance and large salaries, and large corporate systems that require heavy burdens on volunteers. We focus an overwhelming portion of our budget on mission.",
    refs: "Mt 5-7; Mt 15:1-20; Mt 19:16-22; Mt 22:34-40; Mt 25:14-30; Mt 4:19; Mt 9:9; Mt 16:24; Mk 12:28-34; Lk 9:23; Lk 10:25-28; Jn 6:28-35; Jn 14:5-6; Acts 2:44-45,46-47; Mt 6:24; I Cor 9:11-18; Col 3:17; I Thes 4:11; I Tim 2:2; I Tim 6:8-10; Jam 4:13-15; I Pet 4:10; II Pet 3:16-18",
  },
  {
    group: "Mission",
    title: "The Kingdom",
    body: "We affirm the Kingdom of Heaven as the real eternal presence of our Creator. The Kingdom of Heaven can and should be our focus starting immediately after we come to a saving knowledge of Christ and surrender our lives to Him. Christ is the King and the only mediator between mankind and the Kingdom, and He came to earth incarnate to be crucified as the only sinless man to ever live, after which He resurrected and ascended through the doors of the Kingdom alive to permanently overcome sin and death for all who believe and follow Him. This is the good news that we seek to permeate the world around us with. His eternal Kingdom is our greatest commodity!",
    refs: "Mt 3:1-2; Mt 4:17; Mt 6:10; Mt 6:19-21; Mt 6:33; Mt 16:28; Jn 18:33-37; Ps 51:10-13; Ish 53:1-5; Mt 9:35-38; Mt 13:44-52; Mt 24:14; Mt 28:18-20; Lk 9:1-6; Lk 10:1-12; Lk 4:18-21; Jn 4:34-35; Jn 6:27; Jn 9:4; Jn 14:12; Jn 17:18; Acts 1:8; Rom 15:20; I Cor 15:58; II Cor 5:18-19; Eph 2:10; I Thes 5:6-11; Tit 3:4-8; I Jn 3:16-19",
  },
  {
    group: "Mission",
    title: "Every Nation & Tribe",
    body: "God is not a respecter of persons or people groups. Christ endured the sacrifice of atonement for all mankind, for every nation and tribe. Despite common sentiment that America (or any other worldly nation) is God's nation and His light unto the world, we affirm the Church as the only Nation under God, and we believe that it is made up by people from all people groups around the world. We also aim to support getting the gospel of the Kingdom to any and all people groups around the world who have not been exposed to it. The Kingdom is about EVERY nation and tribe!",
    refs: "Gen 1:27; Ps 67:2-3; Ish 42:6; Ish 49:6; Ish 52:10; Ish 56:7; Dan 7:13-14; Joel 2:28; Hag 2:7; Mal 1:11; Mt 12:18; Mt 24:14; Lk 24:46-47; Jn 8:12; Acts 1:8; Acts 2:17; Acts 10:34-35; Acts 17:26-27; Rom 14:11; I Cor 12:12-14; Eph 2:14-22; Phil 2:10-11; Rev 5:9-10; Rev 7:9; Rev 14:6",
  },
  {
    group: "Mission",
    title: "Righteousness & Justice",
    body: "God's perfect righteousness and justice were lost for mankind with the fall of Adam and the onset of sin. From the story of Cain and Abel until today, sin has created much injustice resulting in pain and suffering. We believe that making efforts to identify areas of injustice experienced by people, taking the time to lament with people, and making efforts to restore righteousness and justice in their lives are fundamental action steps in advancing the gospel of the Kingdom of Heaven. Jesus demonstrated this in the way that He walked out His life incarnate, and the Psalmist affirmed it by declaring “righteousness and justice are the foundation of throne.”",
    refs: "Gen 3; Gen 18:22-33,19:23-29; Ex 6:1; I Kings 3:16-28; Ps 9:8; Ps 89:14; Ps 96:10; Prov 31:9; Ish 1:15-17; Ish 56:1; Jer 29:7; Ez 34:16; Hos 12:6; Am 5:15,24; Mic 6:8; Mt 5:2-12; Mt 6:33; Mt 12:18; Mt 25:41-46; Lk 11:42; Lk 18:7-8; Lk 19:8-10; Jn 2:14-17; Acts 6:1-6; I Cor 10:24; Jam 1:26-27; I Jn 3:17-18",
  },
  {
    group: "Mission",
    title: "The Lost & The Poor in Spirit",
    body: "Mission is all about seeking out the lost (those who are unchurched and/or far from God) and the poor in spirit (those who have suffered great levels of injustice and pain that result from sin, i.e., the homeless, orphans, widows, addicts) with the good news of the Kingdom. Though God's subjective call for some may involve traveling overseas to reach people groups who have never heard of Jesus, we believe that for most, God's call will entail reaching the lost and poor in spirit who exist in their everyday path. The lost and the poor in spirit are the ones that need the good news we have, and we believe it is our mission to find them and share it with them.",
    refs: "Gen 3:9; Gen 22:17-18; Ish 52:7-9; Mt 4:23; Mt 5:2-6; Mt 10:5-8; Mt 18:14; Lk 15:3-7; Lk 19:10; Rom 10:14-21; Rom 15:20-21; Gal 2:10; Jam 1:27; Deut 15:7-8; I Kings 17:8-24; II Kings 4:1-7; Ps 82:3; Ps 140:12; Prov 14:31; Ish 61:1; Mt 11:4-5; Mt 25:40; Mk 2:17; Lk 4:18; Lk 6:20-21; Lk 7:22; Lk 14:23",
  },
  {
    group: "Mission",
    title: "Contextualization",
    body: "Every individual and people group comes from different backgrounds with different experiences that cause them to approach God from different vantage points. While we stand on all Scripture as authoritative truth, we understand that different passages will be relevant starting points for different people. For those who do not know Christ, we seek first to get them to a point where they understand who He is and what He came to do. Based on Christ's example, we believe it is very important to know our audience, and in order to know your audience you have to spend time with people, break bread and live life with them. Our motto is being relational and relevant when it comes to where we start with people while standing on truth and grace when it comes to the desired finish line.",
    refs: "I Cor 5:12; I Cor 9:15-27; I Cor 10:32; Acts 16:3; Acts 17:22-34; Acts 21:40-22:21; Mt 5:1-7:28; Mt 10:1-42; Mt 13:10-52; Mk 4:35-41; Jn 4:1-26; Lk 7:36-50; Mt 12:1-14; Mt 15:1-20; Mt 21:23-22:46",
  },
];
