import React from "react";
import styled from "styled-components";
import Text from "./Text";

type Props = {
  label?: any;
  className?: any;
  id?: any;
  name?: any;
  onKeyUp?: any;
  onBlur?: any;
  onKeyDown?: any;
  onClick?: any;
  onChange?: any;
  onAbort?: any;
};

export default class PhotoUploadField extends React.Component<Props> {
  render() {
    return (
      <Wrapper className={this.props.className} id={this.props.id}>
        {/* <label>
          <Text isBody>{this.props.label}</Text>
        </label> */}
        <input
          className="custom-file-input"
          type="file"
          name={this.props.name}
          placeholder="Upload your picture"
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
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
    border: none;
  }
  .custom-file-input:active {
    border: none;
  }
  .custom-file-input::before {
    content: 'Upload your picture';
    display: inline-block;
    font-family: "Nunito", sans-serif;
    border: 3px solid #4f7cbd;
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
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;
