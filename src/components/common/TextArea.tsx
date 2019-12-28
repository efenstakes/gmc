import React from "react";
import styled from "styled-components";
import BodyText from "./BodyText";

type Props = {
  label?: any;
};

export default class TextArea extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        <label>
          <BodyText text={this.props.label} />
        </label>
        <textarea rows={12}></textarea>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  textarea {
    display: block;
    width: 100%;
    padding: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-image: initial;
    border-radius: 20px;
  }
`;