import React from 'react';
import Button from '../Button/Button';
import './Project.css';

const project = ({ clicked, image, name, icon, tools }) => {
    return (<div className="Project-column col-sm-12 col-md-6 col-xl-4">
        <div className="Project" onClick={clicked}>
            <div className="Project-img">
                <img src={image} alt={name} />
                <div className="Project-cover">
                    <span className="Project-name">{name.toUpperCase()}</span>
                    <div className="Project-icon">
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
            <div className="Project-info">
                <span>{name.toUpperCase()}</span>
                <p>{tools}</p>
                <Button>View</Button>
            </div>
        </div>
    </div>
    );
};

export default project;