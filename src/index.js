import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import _ from 'underscore';
import $ from 'jquery';

import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ProjectLeft from './components/ProjectLeft/ProjectLeft';
import ProjectRight from './components/ProjectRight/ProjectRight';

import projects from './projects';

let sortedProjects = _.sortBy(projects, 'position');

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
                    {sortedProjects.map((element, id) => {
                        if(element.position === null){
                            return(null);
                        }
                        if(element.position % 2 === 0){
                            return(
                                <ProjectRight
                                name={element.name}
                                description={element.description}
                                skills={element.skills}
                                url={element.url}
                                image={element.image}
                                git={element.git}
                                key={id}
                                id={id}
                                />
                            )
                        } else {
                            return (
                                <ProjectLeft
                                name={element.name}
                                description={element.description}
                                skills={element.skills}
                                url={element.url}
                                image={element.image}
                                git={element.git}
                                key={id}
                                id={id}
                                />
                            )
                        }
                    })}
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();
