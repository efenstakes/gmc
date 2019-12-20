import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <Link to="/">
        <img
          className="logo"
          src="https://ik.imagekit.io/sgmianze96/gmc/logo_SYBSgDHHV.svg"
          alt="Logo"
        />
      </Link>

      <nav>
        <ul className="nav_links">
          <Link to="/">
            <li>
              <a>HOME</a>
            </li>
          </Link>
          <Link to="/challenges">
            <li>
              <a>CHALLENGES</a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a>ABOUT US</a>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <a>TALK TO US</a>
            </li>
          </Link>
        </ul>
      </nav>
      <Link to="/register">
        <a className="btn">
          <button>SIGN UP</button>
        </a>
      </Link>
    </div>
  );
};

export default Toolbar;
