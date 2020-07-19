import React from 'react';
import './Button.css';

const button = (props) => {
    return (<button className="Btn"
        onClick={props.clicked}>
        {props.children}
    </button>)
}
export default button;