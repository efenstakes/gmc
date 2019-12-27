import React from "react";
import { Page } from "../components/styled_components";
import Row from "../components/layout/Row";
import Column from "../components/layout/Column";
import Image from "../components/common/Image";
import TitleText from "../components/common/TitleText";
import BodyText from "../components/common/BodyText";
import Button from "../components/common/Button";

const Contact: React.FC = () => {
  return (
    <Page>
      <Row>
        <Column>
          <TitleText text="Send us a message" />
          <form className="contact">
            <label>Your name</label>
            <input className="gmc-input" type="text" />
            <br />

            <label>E-mail address</label>
            <input className="gmc-input" type="text" />
            <br />

            <label>Your name</label>
            <textarea className="gmc-input-message" rows={12}></textarea>
            <br />
            <br />

            <Button text="Send" />
          </form>
        </Column>
        <Column>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/contact_rqzHjtxf_.png"
            width="90%"
          />
        </Column>
      </Row>
    </Page>
  );
};

export default Contact;
