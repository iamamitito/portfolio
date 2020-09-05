import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/projects.json';
import './FullProject.css';


const fullProject = (props) => {
    let fullProject = data.map(project =>
        props.match.params.id === project.id ? (
            <div key={project.id}>
                <div className="go-back"><Link to="/portfolio"><i className="fas fa-arrow-left"></i></Link></div>
                <h2>{project.name}</h2>
                <div className="row">
                    <div className="FullProject-img col-sm-12 col-lg-6">
                        <img src={project.url} alt={project.name} />
                    </div>
                    <div className="FullProject-description col-sm-12 col-lg-6">
                        <p>{project.description}</p>
                        <p><a rel="noopener noreferrer" href={project.projectUrl} target="_blank">Try me <i className="fas fa-external-link-alt"></i></a></p>
                        <p><a rel="noopener noreferrer" href={project.repository} target="_blank">See the code <i className="fas fa-code-branch"></i></a></p>
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