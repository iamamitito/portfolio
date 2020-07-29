import React from 'react';
import './Backdrop.css';

const backdrop = ({ clicked, show }) => (
    show ?
        <div className="Backdrop"
            onClick={clicked}>
        </div> : null
);

export default backdrop;