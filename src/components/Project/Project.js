import React from 'react';
import './Project.css';

const project = (props) => {
    return (<div className="Project-column col-sm-12 col-md-6 col-xl-4">
        <div className="Project">
            <div className="Project-img">
                <img src={props.image} alt={props.name} />
                <div className="Project-cover">
                    <span className="Project-name">{props.name.toUpperCase()}</span>
                    <div className="Project-icon">
                        <i className={props.icon}></i>
                    </div>
                </div>
            </div>
            <div className="Project-info">
                <span>{props.name}</span>
                <p>{props.tools}</p>
                <button onClick={props.clicked}>View</button>
            </div>

        </div>
    </div>
    );
};

export default project;