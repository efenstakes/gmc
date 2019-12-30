import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

const Toolbar: React.FC = () => {
  return (
    <Wrapper id="main_nav">
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
              <a>Home</a>
            </li>
          </Link>
          <Link to="/challenges">
            <li>
              <a>Challenges</a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a>About us</a>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <a>Talk to us</a>
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
    height: 40px;
    width: 50px;
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

  @media (max-width: 500px) {
    .nav_links li {
      display: inline-block;
      padding: 0px 5px;
    }
    li,
    a {
      font-size: 8px;
      letter-spacing: 1px;
    }
    .logo {
      cursor: pointer;
      height: 30px;
      width: 30px;
    }
    button {
      border: 1px solid #4f7cbd;
      font-size: 8px;
      padding: 2px 2px;
      border-radius: 5px;
    }
  }
`;
