const projects : {
    gifApp: {
        name: "GifTastic",
        img: 'assets/images/gifapp.jpg',
        discription: 'GifTastic is a JQuery based web application which utilizes the Giphy API. The user is able to enter a topic and the amount of gifs they want generated. A button is then dynamically created and once it is clicked...Presto! The gifs are displayed. ',
        url: 'https://stevenhorkey.github.io/GifTastic/',
        gitUrl: 'https://github.com/stevenhorkey/GifTastic',
        tech: ['Giphy API','JQuery','CSS'],
        skills: ['HTML','Bootstrap','Javascript'],
    },
    koanGame: {
        name: "Zen Koan Game",
        img: 'assets/images/zen.jpg',
        discription: 'What is the sound of one hand clapping? Koans are esoteric riddles that defy logical thinking and that is certainly the case in this JQuery based game. There are 15 questions, each with four possible answers. Think you get get em\' all right?',
        url: 'https://stevenhorkey.github.io/TriviaGame/',
        gitUrl: 'https://github.com/stevenhorkey/TriviaGame',
        tech: ['HTML','CSS','Javascript'],
        skills: ['Bootstrap','JQuery UI'],
    },
    lotrGame: {
        name: "Lord of the Rings PRG",
        img: 'assets/images/lotr.jpg',
        discription: 'Gandalf\'s dilema is a JQuery based Lord of the Rings RPG game where you play as either Smeagol, the Balrog, Sauron, or Gandalf himself. Each time you attack, you also endure some damage, but your power grows evermore. You may win, you may loose, or you all may die in the process. Which will it be?',
        url: 'https://stevenhorkey.github.io/lotr-rpg/',
        gitUrl: 'https://github.com/stevenhorkey/lotr-rpg',
        tech: ['HTML','CSS'],
        skills: ['Bootstrap','Javascript'],
    },
    hangmanGame: {
        name: "60's Hangin' Man",
        img: "assets/images/hangman.jpg",
        discription: "Play a sixties themed hangman game and guess some of the best bands of the era. Pink Floyd, Jimi Hendrix, and The Beatles are included among many others. The song played during the game is a cover by non other than your's truly.",
        url: 'https://stevenhorkey.github.io/Hangman-Game/',
        gitUrl: 'https://github.com/stevenhorkey/Hangman-Game',
        tech: ['HTML','CSS'],
        skills: ['Bootstrap','Javascript'],
    },
    rps: {
        name: "Rock Paper Scissors Multiplayer",
        img: "assets/images/rps.jpg",
        discription: "A multiplayer rock paper scissors game that uses firebase to store and update data across machines. Showcases an initial step toward developing appliactions on both the front and back end.",
        url: 'https://stevenhorkey.github.io/RPS-Multiplayer/',
        gitUrl: 'https://github.com/stevenhorkey/RPS-Multiplayer',
        tech: ['Giphy API','JQuery','CSS'],
        skills: ['HTML','Bootstrap','Javascript'],
    },
    verse: {
        name: "Verse",
        img: "assets/images/verse.jpg",
        discription: "A fully functional, two-player rap battle game that integrates a slick, repsonsive design, social sharing, multiple api's and numerous libraries",
        url: 'http://verse.games/',
        gitUrl: 'https://github.com/stevenhorkey/Verse',
        tech: ['AddThis','Words & Giphy APIs','AOS Scroll','Collaborative Effort in Team setting'],
        skills: ['Bootstrap 4 & CSS','Firebase','HTML','JQuery & JS'],
    },
    liri: {
        name: "Node.js 'Liri' App",
        img: 'assets/images/liri.jpg',
        discription: "A command line node.js app which takes in parameters and gives you back data. There are options with twitter, spotify, and OMDB movies. It also writes all commands and results to a text file and has the ability to read commands from other files instead of the command line.",
        url:'https://github.com/stevenhorkey/liri-node-app',
        tech:['Twitter API','Spotify API','OMDB Movies API'],
        skills:['Node.js','npm']
    },
    mm: {
        name: "Meme and Meaning",
        img: 'assets/images/mmsite.jpg',
        discription: "A blog, podcast, and YouTube project of mine where I investigate what it takes to live life well and become a better human being. Expresses my interests in personal development, philosophy, science, and psychology.",
        url:'https://memeandmeaning.com/',
        tech:['Jekyll','Bootstrap','JQuery','Photoshop'],
        skills:['Content Creation','Mail Chimp','CSS','HTML']
    },
    bamazon: {
        name: "Bamazon Store Front",
        img: 'assets/images/bamazon.jpg',
        discription: "A functional example of a command line e-commerce store. It allows managers to add items to inventory, check items with low inventory, add new products, and view current products. It allows supervisors to view product sales by department and allows customers to buy products in the database.",
        url:'https://github.com/stevenhorkey/Amazon-Store-Front-w-Node.js-MySql',
        tech:['MySQL','Node.js'],
        skills:['JavaScript','npm inquirer']
    },
    friendFinder: {
        name: "Friend Finder App",
        img: 'assets/images/friend-finder.jpg',
        discription: "A fully deployed, full-stack app that allows users to answer and submit a survey to find like-minded friends.",
        url:'https://quiet-forest-18242.herokuapp.com/',
        gitUrl: 'https://github.com/stevenhorkey/friend-finder',
        tech:['Heroku','Node.js','Bootstrap 4'],
        skills:['Express.js','HTML','JQuery']
    },
    pythonRPG:{
        name: "Python RPG Game",
        img: 'assets/images/python-rpg.jpg',
        discription: "A simple rpg game built using python. It enables the user to choose their fighter's name and their opponent's name before they duke it out in the command line.",
        gitUrl: 'https://github.com/stevenhorkey/python-rpg',
        tech:[],
        skills:[]
    },
    burgerish:{
        name: "Burgerish!",
        img: 'assets/images/burgerish.jpg',
        discription: "Burgerish is a full-stack logging app utilizing a RESTful API, MySQL on the back end, handlebars on the front end, and Node.js mediating between the two.",
        url:'https://github.com/stevenhorkey/burger',
        gitUrl: 'https://github.com/stevenhorkey/burger',
        tech:['MySQL','Node.js','Express','MVC'],
        skills:['Handlebars','Heroku','Bootstrap','RESTful API']
    },
    goalPost:{
        name: "goalPost",
        img: 'assets/images/goalPost.jpg',
        discription: "A goal-based social media platform where users can post, read, edit, and delete goals. Sign up or sign in, follow other members, view their progress, and make positive connections! ",
        url:'https://obscure-escarpment-15577.herokuapp.com/auth',
        gitUrl: 'https://github.com/stevenhorkey/project-two',
        tech:['MySQL','Node.js','Express','MVC', 'Passport.js','JavaScript'],
        skills:['Sequelize','Handlebars','Heroku','Bootstrap','RESTful API','JQuery']
    },
    mongoScraper:{
        name: "Mongo DB Scraper",
        img: 'assets/images/mongo-scraper.png',
        discription: "A thought.co article scraper integrated with Mongo DB. Users can scrape the site and save articles for later, or delete them when they are finished. ",
        url:'https://shrouded-sea-11223.herokuapp.com/',
        gitUrl: 'https://github.com/stevenhorkey/mongo-scraper',
        tech:['Mongo DB','Node.js','Express', 'JQuery'],
        skills:['Mongoose JS','Cheerio JS','RESTful API','Bootstrap 4']
    }

}