import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  id?: any;
  route?: any;
  style?: any;
  className?: any;
  text: string;
};

export default class Button extends React.Component<Props> {
  render() {
    return (
      <Link to={this.props.route}>
        <Wrapper
          className={this.props.className}
          style={this.props.style}
          id={this.props.id}
        >
          {this.props.text}
        </Wrapper>
      </Link>
    );
  }
}

const Wrapper = styled.button`
  font-family: "Nunito", sans-serif;
  border: 2px solid #4f7cbd;
  background-color: white;
  border-radius: 10px;
  padding: 10px 25px;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: #4f7cbd;
  :hover {
    background: #4f7cbd;
    color: white;
  }
  @media (max-width: 769px) {
    font-size: 14px;
    padding: 5px 15px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    padding: 3px 8px;
  }
`;
