import React, { Component } from 'react';
import './Project.css';

class Project extends Component{
    render(){

        return(
            <section className={(this.props.id % 2 !== 0) ? 'bg-dark slant clearfix py-5 text-center' : 'clearfix py-5 text-center'} key={this.props.id} id={this.props.name}>
                <div className="container">
                    <div data-aos="fade-right" data-aos-offset="200">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className={(this.props.id % 2 === 0) ? 'col-md-6 float-left order-first' : 'col-md-6 float-left order-last'}>
                                <h2>{this.props.name}</h2>
                                <p className="text-justify">{this.props.description}</p>
                                <div className="row text-center skills mb-4">
                                    <div className="col-md-6 float-left mb-0">
                                        {this.props.skills.slice(0,this.props.skills.length/2).map((element, key) => {
                                            return (<li key={key}>{element}</li>)
                                        })}
                                    </div>
                                    <div className="col-md-6 float-right mb-0">
                                        {this.props.skills.slice(this.props.skills.length/2,this.props.skills.length).map((element, key) => {
                                            return (<li key={key}>{element}</li>)
                                        })}
                                    </div>
                                </div>
                                <span className=''>
                                    {(this.props.url) ? 
                                        
                                        <a className='link' href={this.props.url} target="_blank">See the Site Here</a>
                                    :
                                        null
                                    }
                                    
                                    {(this.props.git !== '') ? 
                                        
                                        <a className='' href={this.props.git} target="_blank"><i className="fab fa-git-square"></i></a>
                                    :
                                        null
                                    }
                                </span>
                            </div>
                            <a href={this.props.url} className='d-contents'>

                                <div className="col-md-6 float-right my-4 proj-img">
                                    {(!this.props.media.endsWith('.mp4')) ? 
                                        <img alt={this.props.name} className='' src={this.props.media}/>
                                    :
                                        <video width="100%" height="100%" muted="true" autoPlay="true" loop="true" className="">
                                            <source src={this.props.media} type="video/mp4"/>
                                            <source src="movie.ogg" type="video/ogg"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    }
                                </div>
                            </a>
                        </div>
                        {(this.props.name === 'Development & Operations Intern\nAudivity') ?
                        <div className="row pt-5">
                            <div className="col-12">
                                <em><p>"Steven has been instrumental for the growth of Audivity at early stages. We've been grateful to have him because he performed customer support, operations, and product development on an on-going basis. Safe to say he is a strong team player who can wear many hats. Most of the time he was autonomous and very quick at learning new skills. On the product side, he's very reliable at running technical analysis. He has learned how to write user-driven tech specifications and deploy using scrum methodology. He has a very promising future as a full stack developer, and I highly recommend working with him."</p></em>
                                <p>~ Ed Gomberg, Founder of Audivity</p>
                            </div>
                        </div>
                        : null
                        }
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Project;