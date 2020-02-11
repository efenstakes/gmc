import React from "react";
import styled from "styled-components";

import TitleText from "../../../components/common/TitleText";
import BodyText from "../../../components/common/BodyText";
import Image from "../../../components/common/Image";
import TextField from "../../../components/common/TextField";
import Button from "../../../components/common/Button";
import Container from "../../../components/common/Container";
import Row from "../../../components/layout/Row";

const MobileCompanyApplication: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrap>
        <TitleText text="Company application" />
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/company_HVk3lf4WdG.png"
          height="180px"
          width="70%"
        />
        <br />
        <BodyText
          text="The Great Minds Challenge is a two-months program
             which will culminate with a three-day high-powered
             challenge. The most innovative global thinkers,
             entrepreneurs and scholars will be brought together
             under one program to enable the formation of the new
             generation leaders."
        />
        <br />
        <br />
        <TextField className="textfield" label="Company name" />
        <br />
        <TextField className="textfield" label="Job title" />
        <br />
        <TextField className="textfield" label="Full name" />
        <br />
        <TextField className="textfield" label="Date of birth" />
        <br />
        <TextField className="textfield" label="E-mail address" />
        <br />
        <TextField className="textfield" label="Phone number" />
      </ContentWrap>
      <br />
      <br />
      <Container
        isDefault={false}
        padding="50px 120px;"
        flexDirection="column;"
        justifyContent="space-between;"
        backgroundColor="#fdfdfd;"
      >
        <Row isDefault={true}>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/picture_TDcyD9g7o.png"
            height="100px"
            width="50px"
          />
          <Button text="Upload your picture" />
        </Row>
        <br />
        <Row isDefault={true}>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/cv_o_IH3BSf9.png"
            height="100px"
            width="50px"
          />
          <Button text="Upload your CV" />
        </Row>
      </Container>

      <ContentWrap>
        <TextFieldCol>
          <TitleText
            style={{ textAlign: "center" }}
            text="Accountabiliy partner details (should be your current employer)"
          />
          <br />
          <br />
          <TextField className="textfield" label="E-mail address" />
          <br />
          <TextField className="textfield" label="Phone number" />
          <br />
          <TextField
            className="textfield"
            label="What do you expect of the Great Minds Challenge?"
          />
          <br />
          <br />
          <Button id="apply" className="final-btns" text="Apply" />
          <br />
          <Button
            route="/register"
            id="cancel"
            className="final-btns"
            text="Cancel"
          />
        </TextFieldCol>
      </ContentWrap>
      <br />
      <br />
      <br />
      <br />
    </PageWrapper>
  );
};

export default MobileCompanyApplication;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
  .textfield {
    width: 80vw;
  }
  .final-btns {
    height: 50px;
    width: 60vw;
  }
  #apply,
  #cancel {
    font-size: 17px;
  }
  #apply {
    border: 2px solid green;
    color: green;
    :hover {
      background: green;
      color: white;
    }
    }
    #cancel {
        border: 2px solid red;
    color: red;
    :hover {
      background: red;
      color: white;
  }
`;

const ContentWrap = styled.div`
  padding: 50px 5%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextFieldCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
