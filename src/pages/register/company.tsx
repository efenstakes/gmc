import React from "react";
import styled from "styled-components";

import TitleText from "../../components/common/TitleText";
import BodyText from "../../components/common/BodyText";
import Row from "../../components/layout/Row";
import Column from "../../components/layout/Column";
import Image from "../../components/common/Image";
import TextField from "../../components/common/TextField";
import { GreyContainer } from "../../components/common/Container";
import Button from "../../components/common/Button";
import TextArea from "../../components/common/TextArea";
import MyForm from "../../components/form"

export default class CompanyApplication extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Wrapper>
          <Row>
            <Column>
              <TitleText text="Company application" />
              <br />
              <BodyText
                text="The Great Minds Challenge is a two-months program
             which will culminate with a three-day high-powered
             challenge. The most innovative global thinkers,
             entrepreneurs and scholars will be brought together
             under one program to enable the formation of the new
             generation leaders."
              />
            </Column>
            <Column>
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/company_HVk3lf4WdG.png"
                height="350px"
                width="80%"
              />
            </Column>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <TextFieldRow>
            <TextField className="textfield" label="Company name" />
            <TextField className="textfield" label="Job title" />
          </TextFieldRow>
          <br />
          <TextFieldRow>
            <TextField className="textfield" label="Full name" />
            <TextField className="textfield" label="Date of birth" />
          </TextFieldRow>
          <br />
          <TextFieldRow>
            <TextField className="textfield" label="E-mail address" />
            <TextField className="textfield" label="Phone number" />
          </TextFieldRow>
        </Wrapper>
        <br />
        <br />
        <br />
        <GreyContainer>
          <UploadRow>
            <Column>
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/picture_TDcyD9g7o.png"
                height="230px"
                width="120px"
              />
              <br />
              <br />
              <Button text="Upload your picture" />
            </Column>

            <Column>
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/cv_o_IH3BSf9.png"
                height="230px"
                width="150px"
              />
              <br />
              <br />
              <Button text="Upload your CV" />
            </Column>
          </UploadRow>
        </GreyContainer>
        <br />
        <br />
        <Wrapper>
          <TitleText
            style={{ textAlign: "center" }}
            text="Accountabiliy partner details (should be your current employer)"
          />
          <br />
          <br />
          <br />
          <TextFieldRow>
            <TextField
              className="accountability-partner"
              label="E-mail address"
            />
            <TextField
              className="accountability-partner"
              label="Phone number"
            />
          </TextFieldRow>
          <br />
          <br />
          <br />
          <br />
          <TextArea label="What are your experctations of the Great Minds Challenge?" />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Button id="apply" className="final-btns" text="Apply" />
            <Button id="cancel" className="final-btns" text="Cancel" />
          </Row>
          {/* <MyForm /> */}
        </Wrapper>
      </PageWrapper>
    );
  }
}

const PageWrapper = styled.div`
  padding-top: 100px;
  .final-btns {
    height: 85px;
    width: 35vw;
  }
  #apply,
  #cancel {
    font-size: 28px;
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

const Wrapper = styled.div`
  max-width: 80%;
  margin: auto auto;
`;

const TextFieldRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .textfield,
  .accountability-partner {
    width: 38vw;
  }
`;

const UploadRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  * {
    align-items: center;
  }
`;
