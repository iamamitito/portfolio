import React from 'react';
import './Button.css';

const button = ({ children, clicked }) => {
    return (<button className="Btn"
        onClick={clicked}>
        {children}
    </button>)
}
export default button;