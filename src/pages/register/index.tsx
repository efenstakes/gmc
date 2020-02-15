import React from "react";
import styled from "styled-components";

import Page from "../../components/layout/Page";
import Row from "../../components/layout/Row";
import Text from "../../components/common/Text";
import Button from "../../components/common/Button";

import MobileRegisterIndex from "../mobile/register/index";

export default class RegisterIndex extends React.Component {
  // button style
  buttonStyle = {
    height: "85px",
    width: "35vw"
  };
  render() {
    return window.screen.width < 740 ? (
      <MobileRegisterIndex />
    ) : (
      <Page>
        <ContentWrap>
          <Text isTitle textAlign="center !important">
            Who are we looking for?
          </Text>
          <br />
          <h3>
            Are you a go-getter, a dreamer or a believer? or maybe even a square
            peg in a round hole? <span>Then we are looking for you!</span>
          </h3>
          <br />
          <br />
          <br />
          <Row isDefault>
            <Button
              text="Company application"
              style={this.buttonStyle}
              route="/company"
            />
            <Button
              text="Wilcard application"
              style={this.buttonStyle}
              route="/wildcard"
            />
          </Row>
        </ContentWrap>
      </Page>
    );
  }
}

const ContentWrap = styled.div`
  padding: 50px 5%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    color: grey;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.5px;
    background-color: transparent;
    line-height: 2;
    font-family: "Open Sans", sans-serif;
  }
  h3 span {
    color: #4f7cbd;
    font-weight: 600;
  }
  @media (max-width: 321px) {
    h3 {
      font-size: 14px;
    }
  }
`;
