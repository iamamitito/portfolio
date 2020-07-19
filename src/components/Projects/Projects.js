import React, { Component } from 'react';
import data from '../Data/projects.json';
import Project from '../Project/Project';

import './Projects.css';

class Projects extends Component {
    projectSelectedHandler = (name, id) => {
        this.props.history.push({ pathname: `/${name}/${id}` });
    }

    render() {

        return (<div className="Projects">
            <h1>Former English teacher who encountered web development along the way.</h1>
            <div className="Projects-intro">
                <p>Below are some of the projects I have created thanks to not only the courses I have taken throughout this experience but also my self-teaching. I hope you enjoy looking at them as much as I did creating them.</p>
            </div>

            <div className="row">
                {
                    data.map(project => {
                        return <Project
                            name={project.name}
                            image={project.url}
                            tools={project.tools}
                            icon={project.icon}
                            key={project.id}
                            clicked={() => this.projectSelectedHandler(project.name, project.id)}
                        />
                    })
                }
            </div>
        </div >);
    }
}
export default Projects;