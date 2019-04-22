import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer id="contact" className='py-4'>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h2 className='text-center'>Contact</h2>
                                <p className='text-justify mb-4'>Have a project you need help on? Feel free to contact me and we'll see if we can work something out. Thanks!</p>
                                <div className='text-center'>
                                    <a href="mailto:code@stevenhorkey.com" className="mx-auto link">code@stevenhorkey.com</a>
                                    <div className="">
                                        <a href="https://github.com/stevenhorkey"><i className="fab fa-github"></i></a>
                                        {/* <a href="https://stackoverflow.com/users/9443856/stevedevtech"><i className="fab fa-stack-overflow"></i></a> */}
                                        <a href="https://www.linkedin.com/in/steven-horkey/"><i className="fab fa-linkedin"></i></a>
                
                                    </div> 
                                </div>    
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h2 className='text-center'>More About Me</h2>
                                <p className='text-justify'>My interests are wide ranging and I like to think I take a holistic approach to life. I am particularly interested in fields like philosophy, meditation, and psychology as well as anything related to music and health. When I'm not coding or doing school work, I am either reading, creating music, or out on a trail. I am also a radical animal lover :)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;