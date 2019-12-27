import React from "react";
import styled from "styled-components";

type Props = {
  text: any;
};

export default class WhiteTitleText extends React.PureComponent<Props> {
  render() {
    return <Wrapper>{this.props.text}</Wrapper>;
  }
}

const Wrapper = styled.span`
  font-size: 36px;
  color: white;
  font-family: "Nunito", sans-serif;
  letter-spacing: 2px;
  line-height: 2;
  background-color: transparent;
  text-align: left;
  text-decoration: none !important;
`;

