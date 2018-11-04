import React, { Component } from 'react';
import './About.css';

// import jekyll from '../assets/images/jekyll.png';

class About extends Component{
    render(){
        return(
            <section className="font-ubuntu py-4 bg-dark" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h2 className='text-center'>Education</h2>
                                <ul>
                                    <li>University of Arizona &bull; 2016 - 2020 &bull; Cognitive & Computer Science &bull; 3.4 GPA</li>
                                    <br/>
                                    <li>University of Arizona Full Stack Flex Program &bull; Present - July 2018</li>
                                    <br/>                            
                                    <li>Sahuaro High School &bull; 2016 &bull; Top 5% of my className &bull; 4.0 GPA</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h2 className="text-center">About Me</h2>
                                <p className='text-justify'>
                                    I am an ambitious full stack developer with a passion and keen eye for responsive, dynamic, and aesthetic design. Currently, I am a full-time cognitive and computer science student at the University of Arizona in Tucson. In addition to this, I am a graduate of their Full Stack Flex program where over I honed my skills as a developer. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <p className="font-italic">I pride myself on being a lifelong learner, self-directed, detail oriented, and an excellent communicator who brings passion and vision to the projects I work on.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mx-auto my-3 text-center" data-aos="flip-down">
                            {/* <a href="https://github.com/stevenhorkey"><i className="devicon-github-plain-wordmark devicons"></i></a> */}
                            <i className="devicon-html5-plain-wordmark colored devicons"></i>
                            <i className="devicon-css3-plain-wordmark colored devicons"></i>
                            <i className="devicon-bootstrap-plain-wordmark colored devicons"></i>
                            <i className="devicon-javascript-plain colored devicons"></i>
                            <i className="devicon-jquery-plain-wordmark colored devicons"></i>
                            <i className="devicon-amazonwebservices-plain-wordmark devicons"></i> 
                            <i className="devicon-python-plain-wordmark colored devicons"></i>
                            <i className="devicon-express-original-wordmark devicons"></i>
                            {/* <!-- <i className="devicon-heroku-plain-wordmark colored"></i> --> */}
                            <i className="devicon-wordpress-plain-wordmark devicons"></i>
                            <i className="devicon-react-original-wordmark colored devicons"></i>
                            <i className="devicon-mongodb-plain-wordmark devicons"></i>
                            <i className="devicon-nodejs-plain-wordmark colored devicons"></i>
                            <i className="devicon-mysql-plain-wordmark devicons"></i>
                            {/* <img src="assets/images/jekyll.png" className="firebase-icon devicons"/> */}
                        </div>
                    </div>
                    <br/>
                    <div data-aos="flip-right">
                        <div className="row">
                            <li className="col-md-2 col-xs-6 languages">HTML</li>
                            <li className="col-md-2 col-xs-6 languages">CSS</li>
                            <li className="col-md-2 col-xs-6 languages">Bootstrap</li>
                            <li className="col-md-2 col-xs-6 languages">Javascript</li>
                            <li className="col-md-2 col-xs-6 languages">JQuery</li>
                            <li className="col-md-2 col-xs-6 languages">MySQL</li>
                            <li className="col-md-2 col-xs-6 languages">Node.js</li>
                            <li className="col-md-2 col-xs-6 languages">RESTful APIs</li>
                            <li className="col-md-2 col-xs-6 languages">Jekyll</li>
                            <li className="col-md-2 col-xs-6 languages">Python</li>
                            <li className="col-md-2 col-xs-6 languages">React</li>
                            <li className="col-md-2 col-xs-6 languages">AWS</li>
                            <li className="col-md-2 col-xs-6 languages">MongoDB</li>
                            {/* <!-- <li className="col-md-2 col-xs-6 languages list-none"></li> -->
                            <!-- <li className="col-md-2 col-xs-6 languages list-none"></li> --> */}
                            <li className="col-md-2 col-xs-6 languages">Express</li>
                            <li className="col-md-2 col-xs-6 languages">WordPress</li>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
        )
    }
}

export default About;