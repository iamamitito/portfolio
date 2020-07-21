import React from 'react';
import './Sidebar.css';
import Me from '../../images/me.png';
import Backdrop from '../Backdrop/Backdrop';

const sidebar = (props) => {

    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.clicked} />
            <nav className={props.show ? 'Sidebar open' : 'Sidebar'}>
                <div className="logo">
                    <img src={Me} alt="user" />
                </div>
                <p>My name is Héctor and I’m a BA in English linguistics and literature. I worked as an English teacher for about 4 years but fell in love with web development in the end. Some of the tools I have learnt up until this point are HTML, CSS, JavaScript, Ruby, Ruby on Rails, PostgreSQL, Bootstrap, Sass, Git, and React among others. <br /> I'm currently taking a Front-end Development course focused on VueJS at Douc UC.</p>

                <ul>
                    <li><a rel="noopener noreferrer" href="https://github.com/iamamitito" target="_blank"><i className="fab fa-github fa-2x"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/hespinoza" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.instagram.com/iamamitito" target="_blank"><i className="fab fa-instagram fa-2x"></i></a></li>
                </ul>
                <button id="toggle" className="toggle" onClick={props.clicked}>
                    <i className={props.show ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i> </button>
            </nav>
        </React.Fragment>
    )
}
export default sidebar;