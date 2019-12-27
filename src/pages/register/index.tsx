import React from "react";
import { Page } from "../../components/styled_components";
import Row from "../../components/layout/Row"; 

export default class RegisterIndex extends React.Component {
  render() {
    return (
      <Page>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Who are we looking for?</h2>
        <br />
        <h3>
          Are you a go-getter, a dreamer or a believer? or maybe even a square
          peg in a round hole? <span>Then we are looking for you!</span>
        </h3>
        <br />
        <br />
        <br />
        <Row>
          <button style={{ width: "40%", height: "80px" }}>
            Company application
          </button>

          <button style={{ width: "40%", height: "80px" }}>
            Wildcard application
          </button>
        </Row>
      </Page>
    );
  }
}
