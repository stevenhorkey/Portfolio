import React, { Component } from 'react';
import './Header.css';
import $ from 'jquery';
import HeadShot from '../../assets/images/small.png';

// import resume from '../../assets/resume/steven-horkey-resume.pdf';

const style = {
    name: {
        fontSize: '60px'
    },
    label: {
        fontSize: '24px'
    }
}

class Header extends Component{

    componentDidMount(){
        $('.head-content').hide();
        $('.head-content').fadeIn(2200);
    }
    render(){
        return(
            <header className="head vh-102 text-white">
                <div className="row vh-102 justify-content-center align-items-center">
                    <div className="head-content text-center mx-auto col">
                        <img alt='Steven Horkey' src={HeadShot} className="steven-headshot"/>
                        <h1 style={style.name} className="font-ezcar">Steven Horkey</h1>
                        <p style={style.label} className="font-ezcar">Full Stack Web Developer</p>
                        <a href="mailto:code@stevenhorkey.com" className="link font-monospace my-4">code@stevenhorkey.com</a>
                        <br/>
                        <div className="font-ubuntu page-links">
                            <a href="#about">About</a> | <a href="#portfolio">Portfolio</a> | <a href="#contact">Contact</a> 
                            {/* <a href="#about">About</a> | <a href="#portfolio">Portfolio</a> | <a href={resume} download>Resume</a> | <a href="#contact">Contact</a>  */}
                        </div>
                        <div>
                            <a href="https://github.com/stevenhorkey"><i className="fab fa-github"></i></a>
                            {/* <a href="https://stackoverflow.com/users/9443856/stevedevtech"><i className="fab fa-stack-overflow"></i></a> */}
                            <a href="https://www.linkedin.com/in/steven-horkey/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </header>
            // <header className="head vh-102 text-white">
            //     <div className="row vh-102 justify-content-center align-items-center">
            //         <div className="head-content text-center mx-auto col">
            //             <img alt='Steven Horkey' src={HeadShot} className="steven-headshot"/>
            //             <h1 style={style.name} className="font-ezcar">Steven Horkey</h1>
            //             <p style={style.label} className="font-ezcar">Full Stack Web Developer</p>
            //             <a href="mailto:code@stevenhorkey.com" className="link font-monospace my-4 mx-2">stevenhorkey.com</a>
            //             <a href="mailto:code@stevenhorkey.com" className="link font-monospace my-4 mx-2">code@stevenhorkey.com</a>
            //             <a href="mailto:code@stevenhorkey.com" className="link font-monospace my-4 mx-2">520-612-9381</a>
            //             <br/>
            //             <br/>
            //             <p style={style.label} className="font-ezcar">Cognitive & Computer Science Student at the University of Arizona</p>
                        
            //             <br/>
            //             {/* <div className="font-ubuntu page-links">
            //                 <a href="#about">520-612-9381</a> | <a href="#portfolio">stevenhorkey.com</a>
            //                  {/* | <a href={resume} download>Resume</a> | <a href="#contact">Contact</a>  */}
            //             {/* </div>} */}
            //             {/* <div>
            //                 <a href="https://github.com/stevenhorkey"><i className="fab fa-github"></i></a>
            //                 <a href="https://stackoverflow.com/users/9443856/stevedevtech"><i className="fab fa-stack-overflow"></i></a>
            //                 <a href="https://www.linkedin.com/in/steven-horkey/"><i className="fab fa-linkedin"></i></a>
            //             </div> */}
            //         </div>
            //     </div>
            // </header>
        )
    }
}

export default Header;