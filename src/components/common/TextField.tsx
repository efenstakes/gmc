import React from "react";
import styled from "styled-components";
import BodyText from "./BodyText";

type Props = {
  label?: any;
  className?: any;
};

export default class TextField extends React.Component<Props> {
  render() {
    return (
      <Wrapper className={this.props.className}>
        <label>
          <BodyText text={this.props.label} />
        </label>
        <input type="text" />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  input {
    display: block;
    border-top-width: initial;
    border-right-width: initial;
    border-left-width: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    width: 100%;
    padding: 8px;
    border-style: none none solid;
    border-image: initial;
    border-bottom: 1px solid rgb(204, 204, 204);
  }
`;
