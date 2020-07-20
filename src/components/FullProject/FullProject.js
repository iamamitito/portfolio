import React from 'react';
import data from '../Data/projects.json';
import './FullProject.css';


const fullProject = (props) => {
    let fullProject = data.map(project =>
        props.match.params.id === project.id ? (
            <div key={project.id}>
                <h1>{project.name}</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                        <img src={project.url} alt={project.name} />
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <p>{project.description}</p>
                        <p><a rel="noopener noreferrer" href={project.projectUrl} target="_blank">Try me <i className="fas fa-external-link-alt"></i></a></p>
                    </div>

                </div>


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