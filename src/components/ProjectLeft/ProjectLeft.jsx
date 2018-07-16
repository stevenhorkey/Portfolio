import React, { Component } from 'react';
import './ProjectLeft.css';

class ProjectLeft extends Component{
    render(){

        return(
            <section className='clearfix py-5 text-center' key={this.props.id} id={this.props.name}>
                <div className="container">
                    <div data-aos="fade-right" data-aos-offset="200">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className="col-md-6 float-left">
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
                                    <a className='link' href={this.props.url} target="_blank">Check it out here</a>
                                    {(this.props.git !== '') ? 
                                        
                                        <a className='' href={this.props.git} target="_blank"><i class="fab fa-git-square"></i></a>
                                    :
                                        null
                                    }
                                </span>
                            </div>
                            <a href={this.props.url} className='d-contents'>
                                <img alt={this.props.name} className='col-md-6 float-right my-4 proj-img' src={this.props.image}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectLeft;