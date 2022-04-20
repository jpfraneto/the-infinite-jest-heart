var mongoose = require("mongoose");
var Recommendation = require("./models/recommendation");

var dataRecs = [
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Mike Oldfield - Ommadawn Full Album",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=HlNi-zZF6wI",
        description:"I was lucky enough to meet Mike outside the Guildhall in Portsmouth on his 5 miles out tour. I asked a bouncer for his autograph and he said he will see what he can do. five minutes later, Mike appears so I ask him to sign my album cover with which he said, 'can you hold my guitar whilst I sign it for you ?' I put his guitar around my neck whilst he signed. he then said 'thank you for coming to see me' and gave me his plectrum before going back inside. I was stunned and I was the only person there as it was only around 5 o'clock.......A real gentleman and artist. Thank you mike and if you ever read this, i'm forever grateful that you took the time to say hello to me......",
        status: "future",
        youtubeID: "HlNi-zZF6wI",
        duration: 2194000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Side X",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=U74-u7Km-eY",
        description:"I’m only commenting so that I can be connected to this album in as many ways as possible",
        status: "future",
        youtubeID: "U74-u7Km-eY",
        duration: 1937000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "The Quintet' - The Complete Jazz at Massey Hall [FULL ALBUM]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=H8fnoVgNSvc",
        description:"This is considered the greatest jazz live album. How could we disagree?",
        status: "future",
        youtubeID: "H8fnoVgNSvc",
        duration: 4392000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "C̲a̲ravan - In T̲h̲e̲ L̲and of Grey̲ and P̲ink (Full Album) 1971",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=_Ums52IOFLg",
        description:"My dad had this LP in the 70s and I used to listen to it. My bedroom was decorated as The Land of Grey and Pink when I was about 6 in about 1980. No wonder I'm a prog fan!",
        status: "future",
        youtubeID: "_Ums52IOFLg",
        duration: 4488000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Estas Tonne - Internal Flight",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=WGTxqhSN8bE",
        description:"This masterpiece should be heard by everyone on this planet.",
        status: "future",
        youtubeID: "WGTxqhSN8bE",
        duration: 3878000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Weather Report - Live at Montreux (1976) [Remastered]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=LT0ICclq8sQ",
        description:"One of their best performances, thank you",
        status: "future",
        youtubeID: "LT0ICclq8sQ",
        duration: 5015000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Tim Hecker - Virgins full album HD",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=Cu-ihs4BkAs&t",
        description:"Yo, I just stared at a candle for 30 minutes and it wasn't even lit.",
        status: "future",
        youtubeID: "Cu-ihs4BkAs",
        duration: 2937000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Hypnagog - Thematic Mathematics | Full Album",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=GoXZrMFCNbw",
        description:"For me this is some of the best music that has been composed in the last decade, thank you Hypnagog, you have an amazing mind. I am deeply in love with this album.",
        status: "future",
        youtubeID: "GoXZrMFCNbw",
        duration: 4235000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Mahler: Symphony No. 9 (Bernstein, Koninklijk Concertgebouworkest)",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=ug1oh9JG_DQ",
        description:"This sounds the best (performance and audio quality) of Bernstein's several recordings of the Mahler Ninth. Another commenter praised the contrapuntal clarity of this performance. I agree! But, interpretively, I still favor the 1971 recording, with the Vienna Philharmonic. Luckily, one can own several Bernstein recordings (and others - it's good to compare one conductor's performance with those of other conductors) in order to decide, at a particular moment in time, which is best.",
        status: "future",
        youtubeID: "ug1oh9JG_DQ",
        duration: 5353000,
    }, {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "The Quintet' - The Complete Jazz at Massey Hall [FULL ALBUM]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=H8fnoVgNSvc",
        description:"This is considered the greatest jazz live album. How could we disagree?",
        status: "future",
        youtubeID: "H8fnoVgNSvc",
        duration: 4392000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "C̲a̲ravan - In T̲h̲e̲ L̲and of Grey̲ and P̲ink (Full Album) 1971",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=_Ums52IOFLg",
        description:"My dad had this LP in the 70s and I used to listen to it. My bedroom was decorated as The Land of Grey and Pink when I was about 6 in about 1980. No wonder I'm a prog fan!",
        status: "future",
        youtubeID: "_Ums52IOFLg",
        duration: 4488000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Estas Tonne - Internal Flight",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=WGTxqhSN8bE",
        description:"This masterpiece should be heard by everyone on this planet.",
        status: "future",
        youtubeID: "WGTxqhSN8bE",
        duration: 3878000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Weather Report - Live at Montreux (1976) [Remastered]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=LT0ICclq8sQ",
        description:"One of their best performances, thank you",
        status: "future",
        youtubeID: "LT0ICclq8sQ",
        duration: 5015000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Tim Hecker - Virgins full album HD",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=Cu-ihs4BkAs&t",
        description:"Yo, I just stared at a candle for 30 minutes and it wasn't even lit.",
        status: "future",
        youtubeID: "Cu-ihs4BkAs",
        duration: 2937000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Hypnagog - Thematic Mathematics | Full Album",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=GoXZrMFCNbw",
        description:"For me this is some of the best music that has been composed in the last decade, thank you Hypnagog, you have an amazing mind. I am deeply in love with this album.",
        status: "future",
        youtubeID: "GoXZrMFCNbw",
        duration: 4235000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Mahler: Symphony No. 9 (Bernstein, Koninklijk Concertgebouworkest)",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=ug1oh9JG_DQ",
        description:"This sounds the best (performance and audio quality) of Bernstein's several recordings of the Mahler Ninth. Another commenter praised the contrapuntal clarity of this performance. I agree! But, interpretively, I still favor the 1971 recording, with the Vienna Philharmonic. Luckily, one can own several Bernstein recordings (and others - it's good to compare one conductor's performance with those of other conductors) in order to decide, at a particular moment in time, which is best.",
        status: "future",
        youtubeID: "ug1oh9JG_DQ",
        duration: 5353000,
    }, 
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "The Quintet' - The Complete Jazz at Massey Hall [FULL ALBUM]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=H8fnoVgNSvc",
        description:"This is considered the greatest jazz live album. How could we disagree?",
        status: "future",
        youtubeID: "H8fnoVgNSvc",
        duration: 4392000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "C̲a̲ravan - In T̲h̲e̲ L̲and of Grey̲ and P̲ink (Full Album) 1971",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=_Ums52IOFLg",
        description:"My dad had this LP in the 70s and I used to listen to it. My bedroom was decorated as The Land of Grey and Pink when I was about 6 in about 1980. No wonder I'm a prog fan!",
        status: "future",
        youtubeID: "_Ums52IOFLg",
        duration: 4488000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Estas Tonne - Internal Flight",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=WGTxqhSN8bE",
        description:"This masterpiece should be heard by everyone on this planet.",
        status: "future",
        youtubeID: "WGTxqhSN8bE",
        duration: 3878000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Weather Report - Live at Montreux (1976) [Remastered]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=LT0ICclq8sQ",
        description:"One of their best performances, thank you",
        status: "future",
        youtubeID: "LT0ICclq8sQ",
        duration: 5015000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Tim Hecker - Virgins full album HD",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=Cu-ihs4BkAs&t",
        description:"Yo, I just stared at a candle for 30 minutes and it wasn't even lit.",
        status: "future",
        youtubeID: "Cu-ihs4BkAs",
        duration: 2937000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Hypnagog - Thematic Mathematics | Full Album",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=GoXZrMFCNbw",
        description:"For me this is some of the best music that has been composed in the last decade, thank you Hypnagog, you have an amazing mind. I am deeply in love with this album.",
        status: "future",
        youtubeID: "GoXZrMFCNbw",
        duration: 4235000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Mahler: Symphony No. 9 (Bernstein, Koninklijk Concertgebouworkest)",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=ug1oh9JG_DQ",
        description:"This sounds the best (performance and audio quality) of Bernstein's several recordings of the Mahler Ninth. Another commenter praised the contrapuntal clarity of this performance. I agree! But, interpretively, I still favor the 1971 recording, with the Vienna Philharmonic. Luckily, one can own several Bernstein recordings (and others - it's good to compare one conductor's performance with those of other conductors) in order to decide, at a particular moment in time, which is best.",
        status: "future",
        youtubeID: "ug1oh9JG_DQ",
        duration: 5353000,
    }, {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "The Quintet' - The Complete Jazz at Massey Hall [FULL ALBUM]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=H8fnoVgNSvc",
        description:"This is considered the greatest jazz live album. How could we disagree?",
        status: "future",
        youtubeID: "H8fnoVgNSvc",
        duration: 4392000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "C̲a̲ravan - In T̲h̲e̲ L̲and of Grey̲ and P̲ink (Full Album) 1971",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=_Ums52IOFLg",
        description:"My dad had this LP in the 70s and I used to listen to it. My bedroom was decorated as The Land of Grey and Pink when I was about 6 in about 1980. No wonder I'm a prog fan!",
        status: "future",
        youtubeID: "_Ums52IOFLg",
        duration: 4488000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Estas Tonne - Internal Flight",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=WGTxqhSN8bE",
        description:"This masterpiece should be heard by everyone on this planet.",
        status: "future",
        youtubeID: "WGTxqhSN8bE",
        duration: 3878000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Weather Report - Live at Montreux (1976) [Remastered]",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=LT0ICclq8sQ",
        description:"One of their best performances, thank you",
        status: "future",
        youtubeID: "LT0ICclq8sQ",
        duration: 5015000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Tim Hecker - Virgins full album HD",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=Cu-ihs4BkAs&t",
        description:"Yo, I just stared at a candle for 30 minutes and it wasn't even lit.",
        status: "future",
        youtubeID: "Cu-ihs4BkAs",
        duration: 2937000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Hypnagog - Thematic Mathematics | Full Album",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=GoXZrMFCNbw",
        description:"For me this is some of the best music that has been composed in the last decade, thank you Hypnagog, you have an amazing mind. I am deeply in love with this album.",
        status: "future",
        youtubeID: "GoXZrMFCNbw",
        duration: 4235000,
    },
    {
        author: { 
            username: "chocapec",
            country: "Chile",
            language: "Spanish"
        },
        type: "music",
        name: "Mahler: Symphony No. 9 (Bernstein, Koninklijk Concertgebouworkest)",
        recommendationDate: "042020IX",
        url: "https://www.youtube.com/watch?v=ug1oh9JG_DQ",
        description:"This sounds the best (performance and audio quality) of Bernstein's several recordings of the Mahler Ninth. Another commenter praised the contrapuntal clarity of this performance. I agree! But, interpretively, I still favor the 1971 recording, with the Vienna Philharmonic. Luckily, one can own several Bernstein recordings (and others - it's good to compare one conductor's performance with those of other conductors) in order to decide, at a particular moment in time, which is best.",
        status: "future",
        youtubeID: "ug1oh9JG_DQ",
        duration: 5353000,
    },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "Pink Floyd - Live In Venice - 1989 - Full Concert - HD 60 FPS",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=cZbns6cg4Mg",
    //     description:"My uncle was there, he came from marche region to veneto (where I live) I was 4 years old and I remember that he came back from the concert with a black eye! He died more than ten years ago...",
    //     status: "future",
    //     duration: 5386000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "present Parsons - Live In Madrid (2004) Complete Concert",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=ekO_9sm9pVA",
    //     description:"present Parsons Project is my favourite band since i was a child , this music has a paranormal touch.",
    //     status: "future",
    //     duration: 4680000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "Yes – Union (Live Concert, 1991) | Gonzo",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=-j81boILNI8",
    //     description:"And is Howe the one who doesn't want the re-union? His solo on 'Your is not disgrace' is pretty pitiful. Rabin in his solo (although exaggerated), in addition to playing with more consistency, he quotes Howe.",
    //     status: "future",
    //     duration: 7104000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "Jean-Michel Jarre - Live in Monaco (The whole concert)",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=xhrOkO3naaI",
    //     description:"So to all people that are stating that they can play better than Jarre. Go back in Time, go back to 1974 and get the same synths Jarre used for Oxygene and do the same. Its easy to jugde Jarres performance with todays technology. But you have to remember that he started in a time when there was no computer, no modern sequencer and no modern drum machine.",
    //     status: "future",
    //     duration: 7760000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "Klaus Schulze - Timewind (1975)",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=qBn0Jnf7_3M",
    //     description:"I am listening to this and reading “Behold the man” by Michael Moorcock. I expect a time portal to open presently.",
    //     status: "future",
    //     duration: 3531000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "ILL CONSIDERED - Live at Total Refreshment Centre",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=SZMb2cxN42o",
    //     description:"This band never ceases to blow my mind with every single release. 'On Another Level' is thrown around too often, but in this case it fits perfectly.",
    //     status: "future",
    //     duration: 3618000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "Grouch In Dub - Grouch In Dub (Full Album)",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=YHAaa0G_WbI",
    //     description:"I listen to this set once a week for sure. I feel like im traveling straight back to the festivals in NZ.",
    //     status: "future",
    //     duration: 4114000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "Chile",
    //         language: "Spanish"
    //     },
    //     type: "music",
    //     name: "Rafael Karlen - The Sweetness of Things Half Remembered (Full Album) [Jazz]",
    //     recommendationDate: "042020IX",
    //     url: "https://www.youtube.com/watch?v=Ahp1ETiXYl4",
    //     description:"What an amazing work, it's like a soundtrack for a beautiful strange day in the life!",
    //     status: "future",
    //     duration: 2816000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "JRAD at Brooklyn Bowl 10.2.15 - Atlantic City - I Know You Rider",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=ZS6TIwll--E",
    //     description:"Live For Live Music Presents: Night one of Joe Russo's Almost Dead's 3-night run at Brooklyn Bowl, October 2015",
    //     status: "future",
    //     duration: 1165000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "St.Stephen ~ The Eleven ~ Brown Eyed Women: Lockn, Arrington, VA 2016-08-25",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=ZOu3aJ8RDqw",
    //     description:"Absolutely incredible. Got to watch this live but this video is a nice little flashback. Man they're good!",
    //     status: "future",
    //     duration: 2658000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "EVERYONE ORCHESTRA FULL SET @ Salvage Station 3-9-2017",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=cfncVxZ7330",
    //     description:"Marching clearly into uncharted territory, The Everyone Orchestra bpresentces the challenges of live group improvisation with triumphant tension and release conduits of music which head deep into the soul. This unique collaborative of performance deeply encourages and requires audience interaction. The edge of your seat enthusiasm for what is next is the fuel behind the continuous musical experiment of The Everyone Orchestra.",
    //     status: "future",
    //     duration: 8358000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Everyone Orchestra w/ Steve Kimock & Marco Benevento - 4/19/13",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=o8YJ_6pMcdY",
    //     description:"Holy niceness!",
    //     status: "future",
    //     duration: 7708000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Everyone Orchestra 'C Sharp Minor le discofunk' 6/17/2012 Quixotes' Porch, Denver Colorado",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=T8wCRZ6u_5o",
    //     description:"Everyone Orchestra on the Quixotes' Porch Stage Denver, Colorado USA",
    //     status: "future",
    //     duration: 1339000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Everyone Orchestra - HD - Full Set - 11.12.16 - Ardmore Music Hall",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=-lvmd-bjnSY",
    //     description:"This show is just incredible. I need to get on this train and STAT.",
    //     status: "future",
    //     duration: 11112000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Lettuce + The Motet :: The Capitol Theatre :: 03/23/18 :: Full Show",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=XtWcAxnlMTQ",
    //     description:"Such an amazing combo of the nastiest fawnk around! I wish this was just an ALWAYS sort of thing... lettuce and motet!   All the time...  i would travel the world to be at every show with mi cheeljin and fam to show the ways of the fawnk...  its important",
    //     status: "future",
    //     duration: 13111000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "LETTUCE - 1.5hr. LIVE SET @ The Orange Peel - Asheville, NC - 10/28/16",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=on3sYZYqeSo",
    //     description:"I never heard of lettuce. I was alone in a forest (electric forest) 2015 and was just wandering about. My first time on acid. And i stumbled into a tent and these guys absolutely blew my mind i was hooked till the very end! :) love n peace!",
    //     status: "future",
    //     duration: 5751000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Lettuce - Mr. Yancey @ New Mountain Theatre - Asheville, NC 7/25/14",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=vblj5yOq6uY",
    //     description:"Thanks for posting. Great work as usual.",
    //     status: "future",
    //     duration: 607000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Trey Anastasio Band - Ghost - 7/6/18 - Central Park",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=yXqkBqqYpHA",
    //     description:"Awesome!",
    //     status: "future",
    //     duration: 554000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Trey Anastasio Band @ Hangout Fest 2013",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=skumFpNcJ1g",
    //     description:"Awesome!",
    //     status: "future",
    //     duration: 6344000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "SKB 7 20 02 Thing One pt1",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=n4mIBnmZWuU",
    //     description:"I can't believe this only has 885 views !  Incredible Groove !",
    //     status: "future",
    //     duration: 385000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Cole's Law - Steve Kimock Band",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=old2pFY9owc",
    //     description:"The best guitarist that not enough people know about. With instrumentation he expresses more beautiful words that most great lyyricists.",
    //     status: "future",
    //     duration: 654000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Steve Kimock Band - It's Up To You (Pt. 2)/A New Africa - Live at the Gothic Theatre",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=QW0Tj7yo1ao",
    //     description:"This is amazing, for you all.",
    //     status: "future",
    //     duration: 720000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Grateful Dead - That's It For The Other One",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=7ojrruaMYYg",
    //     description:"As long as I couldn't find a studio version, I decided to upload this great piece of music history. This is the first track called 'That's It For The Other One', from the second Grateful Dead LP 'Anthem Of The Sun'. ",
    //     status: "future",
    //     duration: 451000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Grateful Dead - Dark Star (Live/Dead) 1969",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=-Xic-CHInek",
    //     description:"This is the holy grail of Grateful Dead Songs",
    //     status: "future",
    //     duration: 1387000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Grateful Dead - St. Stephen - Live 1969 (HQ Audio)",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=7AtVtx6H738",
    //     description:"The Dead did not always do St. Stephen proper service. They do, however, in this classic recording. God, I love this version.",
    //     status: "future",
    //     duration: 392000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Grateful Dead - The Eleven - Live/Dead",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=NE5VdsuGWJg",
    //     description:"Best version ever recorded.  Sounds like a interstellar orchestra.  The Dead at this time in their careers were an improvisation band, meant to be seen live at excruciating volume levels.",
    //     status: "future",
    //     duration: 562000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Grateful Dead 03 28 1981 Not Fade Away",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=-Oym_LQCsPc",
    //     description:"I was 23 years old as I went to this incredible Rockpalast show. The Who and Grateful Dead at the same evening on stage! I am sure, this is proof that God loves us! I stood directly in front of Bob Weir and I will never forget as Pete Townshend came back on stage and performed 'Not Fade Away' and 'Around and Around' jointly with the Dead! Unforgetable! Therefore thanks for uploading!",
    //     status: "future",
    //     duration: 599000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Grateful Dead 3. 'Eyes of the World' Without a Net (Set 2)",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=SEE_R4VIkR4",
    //     description:"this particular recording of this song, has healed my soul time and time again",
    //     status: "future",
    //     duration: 974000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Grateful Dead 4-28-91 Sam Boyd Silver Bowl Las Vegas NV",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=OQxnkqscwIw",
    //     description:"The 'Bird Song' is outrageous. The Dead are playing so well it's almost like Carlos can't come up with anything to add. Hart is literally jumping into the drums. Intense! Phil was really taking no prisoners during this period.",
    //     status: "future",
    //     duration: 9809000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "The Grateful Dead - 1973-02-15 - Dane County Coliseum",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=6PAhw0P3CNA",
    //     description:"Outstanding barn burner of a show, when they opened with Loose Lucy, I knew this was gonna be a good one. Thank you much!",
    //     status: "future",
    //     duration: 12489000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Phish - 8/22/2015 'Tweezer - Prince Caspian'",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=jPrQYYlFPA4",
    //     description:"I've been alive for 57 years, seen over 1000 concerts - every major act of the future 4 decades, and hundreds of incredibly talented minor ones. 20+ Grateful Dead shows. Talking Heads in '79 at CBGB. I'm talking really good, even important shows. This is, by far, the most beautiful, awe-inspiring, soul-stirring, mind-blowing piece of music that I have ever been privileged to witness. To this day, I cannot hear it - and I've listened to it 100 times - without weeping, as I did when I was there.  The Caspian, from the 28 minute mark to the end, is MAJESTIC. It soars to the heavens, and took us all there too. It was the musical high point of my life.  Phish is not my favorite band, but I'll say without reservation, that they were the best I've ever seen.",
    //     status: "future",
    //     duration: 2072000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Phish - 'Loving Cup' from Phish 3D - In Theaters April 30th",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=yrbdtsLSy0Y",
    //     description:"Anybody that can't hear the awesomeness of this cover needs new ears.  A fine tribute to an often overlooked classic Stones masterpiece.",
    //     status: "future",
    //     duration: 449000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "1991-07-20 - Arrowhead Ranch, Parksville, NY",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=6gNnXfGd6WQ",
    //     description:"An epic weekend in my backyard. Owning the Arrow Head Ranch was a great time! Weekends like this just made it so special!",
    //     status: "future",
    //     duration: 6462000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Phish | 12.29.11 | Mike's Song → Chalk Dust Torture → I Am Hydrogen → Weekapaug Groove",
    //     recommendationDate: "102020IX",
    //     url: "https://www.youtube.com/watch?v=pbX9NER99cA",
    //     description:"Most underrated band in the univererse. Light show with music peaks are incredible .L8ke the Dead you gotta experience them at least once.",
    //     status: "future",
    //     duration: 1590000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Genesis (02.14.16 Columbia, SC)",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=xoevVsb2aEE",
    //     description:"Me and my wife were at this show for Valentine's. We made the trip with my mother and our year old son. It was the last trip that I took with my mother,she died a month and a half later from cancer. I will never forget that weekend and all the smiles we tossed around. I love you big momma. Thank you fellas for a good time.",
    //     status: "future",
    //     duration: 359000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "You Can't Always Get What You Want (10/19/14 Memphis, TN)",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=HFrfcSl93VU",
    //     description:"Spirit moves in all things",
    //     status: "future",
    //     duration: 853000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Cortez the Killer w/ Jerry Joseph (Bend, OR, 07.03.16)",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=p_l6ipYy53Q",
    //     description:"Heavy spiritual experience for me at that moment. My birth month, my birth place, and JJ. Jerry connects with the energy and we are all transported",
    //     status: "future",
    //     duration: 799000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Widespread Panic - Raleigh 2008 - w/ Ann Marie Calhoun",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=g_fwgkpghtM",
    //     description:"I've watched this 100 times. Chills have run up and down my spine 100 times.",
    //     status: "future",
    //     duration: 616000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Fela Kuti - Upside Down",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=wVfmU_tGGqY",
    //     description:"Another masterpiece from the great Fela Anikulapo Kuti . WAY back in 1970 . A top class all around talented full band in session . Grinding out an impulsive high tempo african funk jazz number . Full of soul, rock and vigour . I think this is another showcase of Fela's multi instrumental ability on both electric piano, organ and the deep alto 🎷 saxophone . Tony Allen shines a lot too with gut wrenching pounding to support the thick spellbinding tone laid down by the bassist . Rounded up by tender all female exotic chorus ensemble and the constant scintillating percussion . I just cannot stop or control my feet while my temperature rises and my heart is on full beat . Then enjoy the lyrical message too. Hell powerful !",
    //     status: "future",
    //     duration: 884000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "FEMI KUTI - Dem Bobo",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=u3bKS8dI-uA",
    //     description:"I could literally imagine fela smiling at the sound of this",
    //     status: "future",
    //     duration: 430000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Medeski, Martin and Wood - Austin, TX, 1996-04-13",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=YThprbDsbWM",
    //     description:"Only discovered this group over the last few years through Scofield - great stuff",
    //     status: "future",
    //     duration: 7209000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Blues Traveler - Full Concert - 09/03/95 - Shoreline Amphitheatre (OFFICIAL)",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=JQv66WUDEFw",
    //     description:"This is AMAZING musicianship - ALL FOUR of them...",
    //     status: "future",
    //     duration: 4138000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Blues Traveler - H.O.R.D.E 1993 - Bonner Springs, KS, Sandstone Amp. 07/05/93 - Slowchange",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=4PkUirTN0vM",
    //     description:"Thank you.  Blues Traveler is a Force to reckon with.",
    //     status: "future",
    //     duration: 510000,
    // },
    // {
    //     author: { 
    //         username: "Pete",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "09 20 1981 Max Creek Rainbow",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=lKnyKlMeXlc",
    //     description:"33 years later and we still get to dance like this to Max Creek. One of the best, and easily the most consistent of live bands, I have ever seen. This video is a gem. Thank you for posting it.",
    //     status: "future",
    //     duration: 382000,
    // },
    // {
    //     author: { 
    //         username: "chocapec",
    //         country: "USA",
    //         language: "English"
    //     },
    //     type: "music",
    //     name: "Gentle Giant - Sight an Sound in Concert (Full)",
    //     recommendationDate: "152020IX",
    //     url: "https://www.youtube.com/watch?v=UM-yGcpaY_4",
    //     description:"The second time I got to see Gentle Giant I was living In Atlanta GA. they played a relatively small club downtown called Alex Cooleys Electric Ballroom. I went there with a friend and was tripping on LSD. Got separated from my bud and was searching for him, I went upstairs and there was a section roped off with 5 people sitting at a table I was standing next to them and one of them turns to me and asks me if I was familiar with this music. I said oh hell yes and told them of my first time seeing GG. they invited me between the ropes and I sat down, these people are known as the band Kansas. I sit with them tripping and drinking on their dime for the whole concert. What a life for a poor boy from Indiana.",
    //     status: "future",
    //     duration: 3587000, 
    // },
];

function seedDB(){
    Recommendation.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } 
        console.log("removed recommendations");
        let i = 0;
        dataRecs.forEach(function(seed){
            Recommendation.create(seed, function(err, recommendation){
                if(err){
                    console.log(err);
                } 
            });
            i++
        }); 
        console.log("added "+ i + " recommendations to DB")
    });
}



module.exports = seedDB;