import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer id="contact" className='py-4 bg-dark'>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h2 className='text-center'>Contact</h2>
                                <p className='text-justify mb-4'>Have a project you need help on? Feel free to contact me and we'll see if we can work something out. Thanks!</p>
                                <div className='text-center'>
                                <a href="mailto:stevedevtech@gmail.com" className="link font-monospace my-4">stevedevtech@gmail.com</a>
                                <a  href="https://www.linkedin.com/in/steven-horkey/"><i style={{
                                    fontSize: '33px',
                                    margin: '30px',
                                    position: 'relative',
                                    top: '7px'
                                }} className="fab fa-linkedin"></i></a>
                                    {/* <div className="">
                                        <a href="https://github.com/stevenhorkey"><i className="fab fa-github"></i></a> */}
                                        {/* <a href="https://stackoverflow.com/users/9443856/stevedevtech"><i className="fab fa-stack-overflow"></i></a> */}
                                    {/* </div>  */}
                                </div>    
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h2 className='text-center'>More About Me :)</h2>
                                <p className='text-justify'>My interests are wide ranging and I like to think I take a holistic approach to life. I am particularly interested in fields like philosophy, meditation, and psychology as well as anything related to music and health. In addition to software development, I am also a session musician and music producer both personally and professionally. I graduated from the University of Arizona in 2020 with a B.S. in Neuroscience & Cognitive Science along with a certificate in Full Stack Web Development back in 2018. I'm a big fan of road trips, comedy and of course coffee. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;