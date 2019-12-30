import React from "react";
import styled from "styled-components";

type Props = {
  text: any;
};

export default class BodyText extends React.PureComponent<Props> {
  render() {
    return <Wrapper>{this.props.text}</Wrapper>;
  }
}

const Wrapper = styled.span`
  color: #6a6a6a;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 2px;
  line-height: 2;
  background-color: transparent;
  text-align: left;
  text-decoration: none !important;
  @media(max-width: 1025px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
