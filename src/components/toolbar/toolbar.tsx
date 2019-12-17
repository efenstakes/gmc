import React from 'react';
import './styles.css';

const Toolbar: React.FC = () => {
    return (
        <div className="toolbar">
            <img className="logo" src="https://ik.imagekit.io/sgmianze96/gmc/logo_v4MjebzOw.svg" alt="Logo" />
            <nav>
                <ul className="nav_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Challenges</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Talk to us</a></li>
                </ul>
            </nav>
            <a className="btn" href="#"><button>Sign up</button></a>
        </div>
    )

}

export default Toolbar