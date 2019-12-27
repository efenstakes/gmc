import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

const Toolbar: React.FC = () => {
  return (
    <Wrapper>
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
      <Button text="Sign up" route="/register" />
    </Wrapper>
  );
};

export default Toolbar;

const Wrapper = styled.div`
  position: fixed;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  box-shadow: 0 2px 10px grey;

  li,
  a {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #4f7cbd;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .logo {
    cursor: pointer;
    height: 50px;
    width: 80px;
  }

  .nav_links {
    list-style: none;
  }

  .nav_links li {
    display: inline-block;
    padding: 0px 20px;
  }

  .nav_links li a {
    transition: all 0.3s ease 0s;
  }

  .nav_links li a:hover {
    color: #0088a9;
  }
`;
