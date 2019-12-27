import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

export default class TitleText extends React.PureComponent<Props> {
  render() {
    return <Wrapper>{this.props.text}</Wrapper>;
  }
}

const Wrapper = styled.h1`
  color: #4f7cbd;
  letter-spacing: 1.5px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 2px;
  line-height: 2;
  background-color: transparent;
  text-align: left;
  font-size: 28px;
`;
