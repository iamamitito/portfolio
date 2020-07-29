import React from 'react';
import data from '../../Data/projects.json';
import Project from '../Project/Project';

import './Projects.css';

const Projects = ({ history }) => {
    const projectSelectedHandler = (id) => {
        history.push({ pathname: `/portfolio/${id}` });
        window.scrollTo(0, 125);
    }
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
                        clicked={() => projectSelectedHandler(project.id)}
                    />
                })
            }
        </div>

    </div>);

}
export default Projects;