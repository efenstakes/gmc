import React from "react";
import { Page } from "../components/styled_components";
import Row from "../components/layout/Row";
import Column from "../components/layout/Column";
import Image from "../components/common/Image";
import TitleText from "../components/common/TitleText";
import Button from "../components/common/Button";
import TextField from "../components/common/TextField";
import TextArea from "../components/common/TextArea";

const Contact: React.FC = () => {
  return (
    <Page>
      <Row>
        <Column>
          <TitleText text="Send us a message" />
          <br /><br />
          <form className="contact">
            <TextField label="Your name" />
            <br />
            <TextField label="E-mail address" />
            <br />
            <TextArea label="Your message " />
            <br />
            <br />

            <Button style={{width: "100%"}} text="Send" />
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
