import React from "react";

import { Page } from "../../components/styled_components";
import Row from "../../components/layout/Row";
import TitleText from "../../components/common/TitleText";
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
        <Row isDefault={true}>
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
      </Page>
    );
  }
}
