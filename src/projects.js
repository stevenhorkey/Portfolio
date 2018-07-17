// Images
import mmImg from './assets/images/mmsite.jpg';
import gpImg from './assets/images/goalPost.jpg';
import mongoScraperImg from './assets/images/mongo-scraper.png';
import burgerImg from './assets/images/burgerish.jpg';
import ffImg from './assets/images/friend-finder.jpg';
import bamazonImg from './assets/images/bamazon.jpg';
import liriImg from './assets/images/liri.jpg';
import verseImg from './assets/images/verse.jpg';
import gifImg from './assets/images/gifapp.jpg';
import audivity from './assets/images/audivity.jpg';
import treesplease from './assets/images/treesplease.jpg';
import data7 from './assets/images/data7.jpg';
import portfolio from './assets/images/portfolio.jpg';
import taproot from './assets/images/taproot.png';

const projects = [
    {
        name:'Meme and Meaning',
        description:'A blog, podcast, and YouTube project of mine where I investigate what it takes to live life well and become a better human being. Expresses my interests in personal development, philosophy, science, spirituality, and psychology.',
        skills:['Jekyll', 'Bootstrap', 'JQuery', 'Adobe Photoshop', 'Content Creation', 'Mail Chimp', 'CSS', 'HTML'],
        url:'https://memeandmeaning.com',
        image:mmImg,
        git:'',
        position:4
    },
    {
        name:'Development & Operations Intern\nAudivity',
        description:'I am a current intern and contractor with the tech start-up Audivity here in Tucson. We convert written content into professional podcasts using technology and since being there, I have learned a ton. I do a range of things with the company including audio production and editing, reinforcing and managing the client relationship, meeting with mentors, and executing on the entire process of product development.',
        skills:['Manage Client/Content Relationship', 'Audio Engineering and Production', 'Product Development', 'React', 'JavaScript', 'Mail Chimp', 'CSS'],
        url:'https://beta.audivity.com',
        image:audivity,
        git:'',
        position:2
    },
    {
        name:'Student Software Engineer\nUniversity of Arizona Data 7 Institute',
        description:'At the UA Data7 Institute, I collaborate in a team setting to build upon existing websites used by the biosciences division at the university. Together, we contribute to a greater user experience and functionality on a range of different sites.',
        skills:['Angular', 'Django', 'Python', 'CSS', 'HTML', 'JavaScript'],
        url:'https://datascience.arizona.edu/',
        image:data7,
        git:'',
        position:1
    },
    {
        name:'Web Development Intern\nTrees Please Community Garden',
        description:'I have recently been putting together a brand new site for Trees Please, a non-profit environmental organization here in Tucson. Currently I am adding the entire back-end with user authentication to what was originally a static site that I made with React JS and github pages. The site is scheduled to be launched in August 2018.',
        skills:['React', 'AWS EC2', 'NGINX', 'CSS', 'HTML'],
        url:'https://treesplease.space',
        image:treesplease,
        git:'https://github.com/stevenhorkey/aztreesplease',
        position:5
    },
    {
        name: "goalPost",
        image:gpImg,
        description: "A goal-based social media platform where users can post, read, edit, and delete goals. Sign up or sign in, follow other members, view their progress, and make positive connections! ",
        url:'https://obscure-escarpment-15577.herokuapp.com/auth',
        git:'https://github.com/stevenhorkey/project-two',
        skills:['MySQL','Node.js','Express','MVC', 'Passport.js','JavaScript','Sequelize','Handlebars','Heroku','Bootstrap','RESTful API','JQuery'],
        position:6
    },
    {
        name:"stevenhorkey.com",
        image:portfolio,
        description: "This website is also an ongoing project of mine. What started out as a homework assignment using basic html and css has turned into one of my favorite pieces utilizing many different technologies.",
        url:'https://stevenhorkey.com',
        git:'https://github.com/stevenhorkey/Portfolio',
        skills:['React', 'AWS EC2', 'NGINX', 'Drift', 'AOS Scroll Library', 'Bootstrap 4'],
        position:7
    },
    {
        name:"Mongo DB Scraper",
        image:mongoScraperImg,
        description:"A thought.co article scraper integrated with Mongo DB. Users can scrape the site and save articles for later, or delete them when they are finished. ",
        url:'https://shrouded-sea-11223.herokuapp.com/',
        git:'https://github.com/stevenhorkey/mongo-scraper',
        skills:['Mongo DB','Node.js','Express', 'JQuery','Mongoose JS','Cheerio JS','RESTful API','Bootstrap 4'],
        position:8
    },
    {
        name:"Burgerish!",
        image:burgerImg,
        description:"Burgerish is a full-stack logging app utilizing a RESTful API MySQL on the back end handlebars on the front end and Node.js mediating between the two.",
        url:'https://github.com/stevenhorkey/burger',
        git:'https://github.com/stevenhorkey/burger',
        skills:['Handlebars','Heroku','Bootstrap','RESTful API','MySQL','Node.js','Express','MVC'],
        position:null
    },
    {
        name:"Friend Finder App",
        image:ffImg,
        description:"A fully deployed full-stack app that allows users to answer and submit a survey to find like-minded friends.",
        url:'https://quiet-forest-18242.herokuapp.com/',
        git:'https://github.com/stevenhorkey/friend-finder',
        skills:['Heroku','Node.js','Bootstrap 4','Express.js','HTML','JQuery'],
        position:9
    },
    {
        name:"Bamazon Store Front",
        image:bamazonImg,
        description:"A functional example of a command line e-commerce store. It allows managers to add items to inventory check items with low inventory add new products and view current products. It allows supervisors to view product sales by department and allows customers to buy products in the database.",
        url:'https://github.com/stevenhorkey/Amazon-Store-Front-w-Node.js-MySql',
        skills:['MySQL','Node.js','JavaScript','npm inquirer'],
        position:10
    },
    {
        name:"Node.js 'Liri' App",
        image:liriImg,
        description:"A command line node.js app which takes in parameters and gives you back data. There are options with twitter spotify and OMDB movies. It also writes all commands and results to a text file and has the ability to read commands from other files instead of the command line.",
        url:'https://github.com/stevenhorkey/liri-node-app',
        skills:['Node.js','npm','Twitter API','Spotify API','OMDB Movies API'],
        position:11
    },
    {
        name:"Verse",
        image:verseImg,
        description:"A fully functional two-player rap battle game that integrates a slick repsonsive design social sharing multiple api's and numerous libraries",
        url:'http://verse.games/',
        git:'https://github.com/stevenhorkey/Verse',
        skills:['AddThis','Words & Giphy APIs','AOS Scroll','Collaborative Effort in Team setting','Bootstrap 4 & CSS','Firebase','HTML','JQuery & JS'],
        position:null
    },
    {
        name:"GifTastic",
        image:gifImg,
        description:'GifTastic is a JQuery based web application which utilizes the Giphy API. The user is able to enter a topic and the amount of gifs they want generated. A button is then dynamically created and once it is clicked...Presto! The gifs are displayed. ',
        url:'https://stevenhorkey.github.io/GifTastic/',
        git:'https://github.com/stevenhorkey/GifTastic',
        skills:['HTML','Bootstrap','Javascript','Giphy API','JQuery','CSS'],
        position:null
    },
    {
        name:"TapRoot",
        image:taproot,
        description:'One of the problems that keeps average people from visiting farmers markets is the fact that they simply don\'t know what is there. TapRoot solves that. It is an online network of vendors and market organizers who post their information, products, and passion online so that users like you and I can view it before we go to the market so that we can shop with confidence as we connect to the source of our food. ',
        url:'https://taproot.market',
        git:'https://github.com/stevenhorkey/GifTastic',
        skills:['Deployed on AWS EC2','Bootstrap 4','Node','Express','MySQL','React', 'React Reveal', 'Passport JS'],
        position: 3
    }
]

export default projects;