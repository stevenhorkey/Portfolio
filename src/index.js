import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ProjectLeft from './components/ProjectLeft/ProjectLeft';
import ProjectRight from './components/ProjectRight/ProjectRight';

// Images
import mmImg from './components/assets/images/mmsite.jpg';
import gpImg from './components/assets/images/goalPost.jpg';
import mongoScraperImg from './components/assets/images/mongo-scraper.png';
import burgerImg from './components/assets/images/burgerish.jpg';
import ffImg from './components/assets/images/friend-finder.jpg';
import bamazonImg from './components/assets/images/bamazon.jpg';
import liriImg from './components/assets/images/liri.jpg';
import verseImg from './components/assets/images/verse.jpg';
import gifImg from './components/assets/images/gifapp.jpg';

class Portfolio extends Component {

    componentDidMount(){
        AOS.init({
            delay: 100,
            duration: 500
        });
    }

    render(){

        return(
            <Fragment>
                <Header/>
                <About/>

                <div id='portfolio'>
                    <ProjectLeft
                    name='Meme and Meaning'
                    description='A blog, podcast, and YouTube project of mine where I investigate what it takes to live life well and become a better human being. Expresses my interests in personal development, philosophy, science, and psychology.'
                    skills={['Jekyll', 'Bootstrap', 'JQuery', 'Adobe Photoshop', 'Content Creation', 'Mail Chimp', 'CSS', 'HTML']}
                    url='https://memeandmeaning.com'
                    image={mmImg}
                    git=''
                    />
                    <ProjectRight
                    name= "goalPost"
                    image={gpImg}
                    description= "A goal-based social media platform where users can post, read, edit, and delete goals. Sign up or sign in, follow other members, view their progress, and make positive connections! "
                    url='https://obscure-escarpment-15577.herokuapp.com/auth'
                    git='https://github.com/stevenhorkey/project-two'
                    skills={['MySQL','Node.js','Express','MVC', 'Passport.js','JavaScript','Sequelize','Handlebars','Heroku','Bootstrap','RESTful API','JQuery']}
                    />
                    <ProjectLeft
                    name="Mongo DB Scraper"
                    image={mongoScraperImg}
                    description="A thought.co article scraper integrated with Mongo DB. Users can scrape the site and save articles for later, or delete them when they are finished. "
                    url='https=//shrouded-sea-11223.herokuapp.com/'
                    git='https=//github.com/stevenhorkey/mongo-scraper'
                    skills={['Mongo DB','Node.js','Express', 'JQuery','Mongoose JS','Cheerio JS','RESTful API','Bootstrap 4']}
                    />
                    <ProjectRight
                    name="Burgerish!"
                    image={burgerImg}
                    description="Burgerish is a full-stack logging app utilizing a RESTful API MySQL on the back end handlebars on the front end and Node.js mediating between the two."
                    url='https=//github.com/stevenhorkey/burger'
                    git='https=//github.com/stevenhorkey/burger'
                    skills={['Handlebars','Heroku','Bootstrap','RESTful API','MySQL','Node.js','Express','MVC']}
                    />
                    <ProjectLeft
                    name="Friend Finder App"
                    image={ffImg}
                    description="A fully deployed full-stack app that allows users to answer and submit a survey to find like-minded friends."
                    url='https=//quiet-forest-18242.herokuapp.com/'
                    git='https=//github.com/stevenhorkey/friend-finder'
                    skills={['Heroku','Node.js','Bootstrap 4','Express.js','HTML','JQuery']}
                    />
                    <ProjectRight
                    name="Bamazon Store Front"
                    image={bamazonImg}
                    description="A functional example of a command line e-commerce store. It allows managers to add items to inventory check items with low inventory add new products and view current products. It allows supervisors to view product sales by department and allows customers to buy products in the database."
                    url='https=//github.com/stevenhorkey/Amazon-Store-Front-w-Node.js-MySql'
                    skills={['MySQL','Node.js','JavaScript','npm inquirer']}
                    />
                    <ProjectLeft
                    name="Node.js 'Liri' App"
                    image={liriImg}
                    description="A command line node.js app which takes in parameters and gives you back data. There are options with twitter spotify and OMDB movies. It also writes all commands and results to a text file and has the ability to read commands from other files instead of the command line."
                    url='https=//github.com/stevenhorkey/liri-node-app'
                    skills={['Node.js','npm','Twitter API','Spotify API','OMDB Movies API']}
                    />
                    <ProjectRight
                    name="Verse"
                    image={verseImg}
                    description="A fully functional two-player rap battle game that integrates a slick repsonsive design social sharing multiple api's and numerous libraries"
                    url='http=//verse.games/'
                    git='https=//github.com/stevenhorkey/Verse'
                    skills={['AddThis','Words & Giphy APIs','AOS Scroll','Collaborative Effort in Team setting','Bootstrap 4 & CSS','Firebase','HTML','JQuery & JS']}
                    />
                    <ProjectLeft
                    name="GifTastic"
                    image={gifImg}
                    description='GifTastic is a JQuery based web application which utilizes the Giphy API. The user is able to enter a topic and the amount of gifs they want generated. A button is then dynamically created and once it is clicked...Presto! The gifs are displayed. '
                    url='https=//stevenhorkey.github.io/GifTastic/'
                    git='https=//github.com/stevenhorkey/GifTastic'
                    skills={['HTML','Bootstrap','Javascript','Giphy API','JQuery','CSS']}
                    />
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();
