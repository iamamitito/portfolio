import React, { Fragment } from 'react';
import './Sidebar.css';
import Me from '../../images/me.png';
import Backdrop from '../Backdrop/Backdrop';

const sidebar = ({ show, clicked }) => {

    return (
        <Fragment>
            <Backdrop show={show} clicked={clicked} />
            <nav className={show ? 'Sidebar open' : 'Sidebar'}>
                <div className="logo">
                    <img src={Me} alt="profile" />
                </div>
                <div className="description">
                    <p>My name is Héctor and I’m a BA in English linguistics and literature. I worked as an English teacher for about 4 years but fell in love with web development in the end. </p><p>Some of my favourite tools that I have learnt are:</p>

                    <ul className="tools">
                        <li><i className="fab fa-html5"></i><span>Html</span></li>
                        <li><i className="fab fa-css3-alt"></i><span>Css</span></li>
                        <li><i className="fab fa-js"></i><span>JavaScript</span></li>
                        <li><i className="fab fa-bootstrap"></i><span>Bootstrap</span></li>
                        <li><i className="fab fa-sass"></i><span>Sass</span></li>
                        <li><i className="fab fa-git-alt"></i><span>Git</span></li>
                        <li><i className="fab fa-react"></i><span>React</span></li>
                        <li><i className="fab fa-vuejs"></i><span>Vue</span></li>

                    </ul>
                </div>
                <p className="mt-4">Find me on</p>
                <ul className="media">
                    <li><a rel="noopener noreferrer" href="https://github.com/iamamitito" target="_blank"><i className="fab fa-github fa-2x"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/hespinoza" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.instagram.com/iamamitito" target="_blank"><i className="fab fa-instagram fa-2x"></i></a></li>
                </ul>
                <button id="toggle" className="toggle" onClick={clicked}>
                    <i className={show ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i> </button>
            </nav>
        </Fragment>
    )
}
export default sidebar;