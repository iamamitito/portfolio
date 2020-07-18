import React, { Component } from 'react';
import data from '../Data/projects.json';
import Project from '../Project/Project';

import './Projects.css';

class Projects extends Component {
    projectSelectedHandler = (name, id) => {
        this.props.history.push({ pathname: `/projects/${name}/${id}` });
    }

    render() {

        return (<div className="Projects container">
            <h1>Héctor Espinoza | @iamamitito</h1>
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