// Images
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
import gcca from './assets/images/gcca.jpg';
import data7 from './assets/images/data7.jpg';
import portfolio from './assets/images/portfolio.jpg';
import taproot from './assets/images/taproot.png';
import urantiabookvideo from './assets/videos/urantiabook-video-720.mp4';
import sogvideo from './assets/videos/seaofglass-video-720.mp4';
import kvanvideo from './assets/videos/kvan-video-720.mp4';
import campavalonvideo from './assets/videos/campav.mp4';
import mlrvideo from './assets/videos/mlr.mp4';
import semavideo from './assets/videos/sema.mp4';
import gcmbuildervideo from './assets/videos/gcmbuilder.mp4';

const projects = [
    {
        name:'KVAN FM',
        description:'An adapted single-page web app designed to live-stream the client\'s radio programming, display their information and artists to their listeners and funnel users to their custom mobile app.',
        skills:[],
        url:'https://kvan.fm',
        media:kvanvideo,
        git:'',
        position:6
    },
    {
        name:'The Sea of Glass Rental Venue',
        description:'A full featured site including information on rentals, applications, programs, and much more. Customers can apply to rent ',
        skills:[],
        url:'http://theseaofglass.org/',
        media:sogvideo,
        git:'',
        position:5
    },
    {
        name:'Urantia Book Web Application',
        description:'This is one of the many freelance projects I\'ve done in my long term contract position. This web application allows users to search through, read, link to, and study The Urantia Book. There is no other version of the book presented in this functional and easy to use way. Entirely mobile responsive and implemented with best coding practices.',
        skills:[],
        url:'http://urantiabook.uaspr.org',
        media:urantiabookvideo,
        git:'',
        position:0
    },
    {
        name:'Development & Operations Intern\nAudivity',
        description:"Also over the summer of 2018, I was an intern and contractor with the podcasting start-up Audivity. Audivity converts written content into professional podcasts using technology, and while there, I learned a ton about web development and audio production. I did a range of things from audio engineering episodes, handling the client production journey, meeting with mentors, and executing on the entire process of product development." ,
        skills:['Manage Client/Content Relationship', 'Audio Engineering', 'Product Development', 'React', 'AWS Sys Admin & DNS Management', 'Mail Chimp', 'Backend Development & Frontend Form Creation'],
        url:null,
        media:audivity,
        git:'',
        position:null
    },
    {
        name:'Student Software Engineer\nUniversity of Arizona Data 7 Institute',
        description:'Over the summer of 2018 at the UA Data7 Institute, I collaborated in a team setting to build upon existing websites used by the biosciences division at the university. Together, we contributed to a greater user experience and functionality on a range of different sites.',
        skills:['Angular', 'Django', 'Python', 'CSS', 'HTML', 'JavaScript'],
        url:null,
        media:data7,
        git:'',
        position:null
    },
    {
        name:'Web Development Intern\nTrees Please Community Garden',
        description:'I have recently been putting together a brand new site for Trees Please, a non-profit environmental organization here in Tucson. Currently I am adding the entire back-end with user authentication to what was originally a static site that I made with React JS and github pages. The site is scheduled to be launched in August 2018.',
        skills:['React', 'AWS EC2', 'NGINX', 'CSS', 'HTML'],
        url:'https://treesplease.space',
        media:treesplease,
        git:'https://github.com/stevenhorkey/aztreesplease',
        position:null
    },
    {
        name:'Freelance Web Developer',
        description:'As of now, I am in a long-term contract position with a media and property non-profit here in Southern Arizona. I am working on multiple sites with a heavy focus on PHP and MySQL.',
        skills:['React', 'PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
        url: 'http://theseaofglass.org/rentals',
        media: gcca,
        git: '',
        position:null
    },
    {
        name: "goalPost",
        media:gpImg,
        description: "A goal-based social media platform where users can post, read, edit, and delete goals. Sign up or sign in, follow other members, view their progress, and make positive connections! ",
        url:'https://obscure-escarpment-15577.herokuapp.com/auth',
        git:'https://github.com/stevenhorkey/project-two',
        skills:['MySQL','Node.js','Express','MVC', 'Passport.js','JavaScript','Sequelize','Handlebars','Heroku','Bootstrap','RESTful API','JQuery'],
        position:null
    },
    {
        name:"stevenhorkey.com",
        media:portfolio,
        description: "This website is also an ongoing project of mine. What started out as a homework assignment using basic html and css has turned into one of my favorite pieces utilizing many different technologies.",
        url: null,
        git: null,
        skills:['React', 'AWS EC2', 'NGINX', 'Drift', 'AOS Scroll Library', 'Bootstrap 4'],
        position:null
    },
    {
        name:"Mongo DB Scraper",
        media:mongoScraperImg,
        description:"A thought.co article scraper integrated with Mongo DB. Users can scrape the site and save articles for later, or delete them when they are finished. ",
        url:'https://shrouded-sea-11223.herokuapp.com/',
        git:'https://github.com/stevenhorkey/mongo-scraper',
        skills:['Mongo DB','Node.js','Express', 'JQuery','Mongoose JS','Cheerio JS','RESTful API','Bootstrap 4'],
        position:null
    },
    {
        name:"Burgerish!",
        media:burgerImg,
        description:"Burgerish is a full-stack logging app utilizing a RESTful API MySQL on the back end handlebars on the front end and Node.js mediating between the two.",
        url:'https://github.com/stevenhorkey/burger',
        git:'https://github.com/stevenhorkey/burger',
        skills:['Handlebars','Heroku','Bootstrap','RESTful API','MySQL','Node.js','Express','MVC'],
        position:null
    },
    {
        name:"Friend Finder App",
        media:ffImg,
        description:"A fully deployed full-stack app that allows users to answer and submit a survey to find like-minded friends.",
        url:'https://quiet-forest-18242.herokuapp.com/',
        git:'https://github.com/stevenhorkey/friend-finder',
        skills:['Heroku','Node.js','Bootstrap 4','Express.js','HTML','JQuery'],
        position: null
    },
    {
        name:"Bamazon Store Front",
        media:bamazonImg,
        description:"A functional example of a command line e-commerce store. It allows managers to add items to inventory check items with low inventory add new products and view current products. It allows supervisors to view product sales by department and allows customers to buy products in the database.",
        url:'https://github.com/stevenhorkey/Amazon-Store-Front-w-Node.js-MySql',
        skills:['MySQL','Node.js','JavaScript','npm inquirer'],
        position:null
    },
    {
        name:"Node.js 'Liri' App",
        media:liriImg,
        description:"A command line node.js app which takes in parameters and gives you back data. There are options with twitter spotify and OMDB movies. It also writes all commands and results to a text file and has the ability to read commands from other files instead of the command line.",
        url:'https://github.com/stevenhorkey/liri-node-app',
        skills:['Node.js','npm','Twitter API','Spotify API','OMDB Movies API'],
        position: null
    },
    {
        name:"Verse",
        media:verseImg,
        description:"A fully functional two-player rap battle game that integrates a slick repsonsive design social sharing multiple api's and numerous libraries",
        url:'http://verse.games/',
        git:'https://github.com/stevenhorkey/Verse',
        skills:['AddThis','Words & Giphy APIs','AOS Scroll','Collaborative Effort in Team setting','Bootstrap 4 & CSS','Firebase','HTML','JQuery & JS'],
        position:null
    },
    {
        name:"GifTastic",
        media:gifImg,
        description:'GifTastic is a JQuery based web application which utilizes the Giphy API. The user is able to enter a topic and the amount of gifs they want generated. A button is then dynamically created and once it is clicked...Presto! The gifs are displayed. ',
        url:'https://stevenhorkey.github.io/GifTastic/',
        git:'https://github.com/stevenhorkey/GifTastic',
        skills:['HTML','Bootstrap','Javascript','Giphy API','JQuery','CSS'],
        position:null
    },
    {
        name:"TapRoot",
        media:taproot,
        description:'One of the hurdles keeping average people from visiting farmers markets is the fact that they simply don\'t know what\'s there. TapRoot solves that. It is an online network of vendors and market organizers who post their information, products, and passion online so that users like you and I can view it before we go to the market so that we can shop with confidence as we connect to the source of our food.',
        url:'https://taproot-market.herokuapp.com/',
        git:'https://github.com/stevenhorkey/farmers-market-app',
        skills:['Deployed on AWS EC2','Bootstrap 4','Node','Express','MySQL','React', 'Project Management', 'Passport JS'],
        position: null
    },
    {
        name:'Camp Avalon Website & Reservation System',
        description:'For Camp Avalon Spiritual Nature Retreat, I built a new site to showcase their fresh branding, and manage client reservations with payment integration through paypal and credit card processing. The site also features an admin dashboard to manage reservations, site notifications, legally binding signed waivers, and more.',
        skills:[],
        url:'https://campavalon.org',
        media:campavalonvideo,
        git:'',
        position:1
    },
    {
        name:'Media Agency CMS & Content Builder',
        description:'Imagine, you are a media agency with a plethora of sites, content to add to all of them, and no way for a non-coder to do so. For this client, I built a site to create, view, edit, and delete content pages across all of their sites, all with minimal configuration. TL;DR: A full fledged Content Management System.',
        skills:[],
        url:null,
        media:gcmbuildervideo,
        git:'',
        position:2
    },
    {
        name:'Magic Land Realty',
        description:'For Magic Land Realty & Investments, I built a modern and sleek website that integrates with a third party MLS solution to allow clients to search and view thousands of properties across the state of Arizona. Optimized for conversion to connect client to realtor for a personal touch.',
        skills:[],
        url:'https://magiclandrealty.com',
        media:mlrvideo,
        git:'',
        position:4
    },
    {
        name:'SEMA Research Lab',
        description:'For the SEMA Neuroscience Research Lab at the University of Arizona, I built a simple, custom wordpress website to showcase their visionary work, research, and team.',
        skills:[],
        url:'https://semalab.arizona.edu/',
        media:semavideo,
        git:'',
        position:3
    }
]

export default projects;


// urantia book
// sea of glass rental page
// tap root
// GCCA Dev Site


// audivity
// u of a