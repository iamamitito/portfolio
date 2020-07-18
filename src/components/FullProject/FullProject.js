import React from 'react';
import data from '../Data/projects.json';
import './FullProject.css';


const fullProject = (props) => {
    let fullProject = data.map(project =>
        props.match.params.id === project.id ? (
            <div className="FullProject" key={project.id}>
                <p>{project.name}</p>
                <img src={project.url} alt={project.name} />
                <p>{project.description}</p>
                <p><a href={project.projectUrl}>ver proyecto</a></p>
            </div>
        ) : null
    );
    return (
        <div className="FullProject container">
            <h1>{props.match.params.name}</h1>
            {fullProject}
            <p>Github link</p>
        </div>
    );
}


export default fullProject;