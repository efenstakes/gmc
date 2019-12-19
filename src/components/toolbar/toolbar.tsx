import React from 'react';
import './styles.css';

const Toolbar: React.FC = () => {
    return (
        <div className="toolbar">
            <img className="logo" src="https://ik.imagekit.io/sgmianze96/gmc/logo_SYBSgDHHV.svg" alt="Logo" />
            <nav>
                <ul className="nav_links">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">CHALLENGES</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">TALK TO US</a></li>
                </ul>
            </nav>
            <a className="btn" href="#"><button>SIGN UP</button></a>
        </div>
    )

}

export default Toolbar