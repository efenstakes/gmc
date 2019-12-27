import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  id?: any;
  route?: any;
  style?: any;
  text: string;
};

export default class Button extends React.Component<Props> {
  render() {
    return (
      <Link to={this.props.route}>
        <Wrapper style={this.props.style} id={this.props.id}>
          {this.props.text}
        </Wrapper>
      </Link>
    );
  }
}

const Wrapper = styled.button`
  font-family: "Nunito", sans-serif;
  border: 2px solid black;
  background-color: white;
  border-radius: 10px;
  color: black;
  padding: 10px 25px;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  border-color: #4f7cbd;
  color: #4f7cbd;

  :hover {
    background: #4f7cbd;
    color: white;
  }
`;
