import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class MobileDrawer extends React.Component {
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  openNav: any = () => {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.getElementById("main")!.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  closeNav: any = () => {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  };

  render() {
    return (
      <Wrapper>
        <Link to="/">
          <img
            className="logo"
            src="https://ik.imagekit.io/sgmianze96/gmc/logo_SYBSgDHHV.svg"
            alt="Logo"
          />
        </Link>

        <div id="mySidenav" className="sidenav">
          <button className="closebtn" onClick={this.closeNav()}>
            &times;
          </button>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <span onClick={this.openNav()} >open</span>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  box-shadow: 0 2px 10px grey;
`;
