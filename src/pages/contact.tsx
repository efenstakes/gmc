import React from "react";
import { Page, Row, Column } from "../components/styled_components";

const Contact: React.FC = () => {
  return (
    <Page>
      <br /><br/><br/><br/><br/><br/>
      <Row>
        <Column>
          <h2>SEND US A MESSAGE</h2>
          <form className="contact">

              <label>Your name</label>
              <input className="gmc-input" type="text"/>
              <br/>

              <label>E-mail address</label>
              <input className="gmc-input" type="text"/><br/>

              <label>Your name</label>
              <textarea className="gmc-input-message" rows={12}></textarea>
              <br/><br/>

              <button style={{width: "70%"}}>SEND</button>


          </form>
        </Column>
        <Column>
          <img
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/contact_rqzHjtxf_.png"
            alt=""
          />
        </Column>
      </Row>
    </Page>
  );
};

export default Contact;
