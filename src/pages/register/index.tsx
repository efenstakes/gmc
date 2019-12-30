import React from "react";

import { Page } from "../../components/styled_components";
import Row from "../../components/layout/Row";
import Button from "../../components/common/Button";
import TitleText from "../../components/common/TitleText";

import MobileRegisterIndex from "../mobile/register/index";

export default class RegisterIndex extends React.Component {
  private buttonStyle = {
    width: "35vw",
    height: "80px"
  };
  render() {
    return window.screen.width < 740 ? (
      <MobileRegisterIndex />
    ) : (
      <Page>
        <TitleText
          style={{ textAlign: "center" }}
          text="Who are we looking for?"
        />
        <br />
        <h3>
          Are you a go-getter, a dreamer or a believer? or maybe even a square
          peg in a round hole? <span>Then we are looking for you!</span>
        </h3>
        <br />
        <br />
        <br />
        <Row>
          <Button text="Company application" style={this.buttonStyle} />
          <Button text="Wildcard application" style={this.buttonStyle} />
        </Row>
      </Page>
    );
  }
}
