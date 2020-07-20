import React from 'react';
import data from '../Data/projects.json';
import './FullProject.css';


const fullProject = (props) => {
    let fullProject = data.map(project =>
        props.match.params.id === project.id ? (
            <div key={project.id}>
                <h1>{project.name}</h1>
                <img src={project.url} alt={project.name} />
                <p>{project.description}</p>
                <p><a href={project.projectUrl}>ver proyecto</a></p>
            </div>
        ) : null
    );
    return (
        <div className="FullProject">
            {fullProject}
        </div>
    );
}


export default fullProject;