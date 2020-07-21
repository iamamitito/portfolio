import React from 'react';
import './Footer.css';

const footer = () => {
    return (<footer className="Footer">
        <div>
            <h3>Contact info</h3>
            <ul>
                <li><i className="far fa-envelope"></i> hespinoza@uchile.cl</li>
                <li><i className="fas fa-mobile-alt"></i> +56984704161</li>
            </ul>
        </div>
        <div className="Footer-bottom">
            <p>&copy;iamamitito</p>
        </div>
    </footer>)
}

export default footer;