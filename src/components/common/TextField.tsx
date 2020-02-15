import React from "react";
import styled from "styled-components";
import Text from "./Text";

type Props = {
  label?: any;
  className?: any;
  id?: any;
  onKeyUp?: any;
  onBlur?: any;
  onKeyDown?: any;
  onClick?: any;
  onChange?: any;
  onAbort?: any;
};

export default class TextField extends React.Component<Props> {
  render() {
    return (
      <Wrapper className={this.props.className} id={this.props.id}>
        <label>
          <Text isBody>{this.props.label}</Text>
        </label>
        <input
          type="text"
          onKeyUp={this.props.onKeyUp}
          onBlur={this.props.onBlur}
          onKeyDown={this.props.onKeyDown}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
          onAbort={this.props.onAbort}
        />
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
