import React, { Component } from 'react';
import './ProjectRight.css';

class ProjectRight extends Component{
    render(){

        return(
            <section className='clearfix py-5 text-center bg-dark slant' id={this.props.name}>
                <div className="container">
                    <div data-aos="fade-left" data-aos-offset="200">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className='col-md-6 float-left my-4' src={this.props.image}/>
                            <div className="col-md-6 float-right">
                                <h2>{this.props.name}</h2>
                                <p className="text-justify">{this.props.description}</p>
                                <div className="row text-center mb-4 skills">
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
                                <a className='link' href={this.props.url} target="_blank">Check it out here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectRight;