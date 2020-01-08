import React from "react";
import styled from "styled-components";

import TitleText from "../../../components/common/TitleText";
import BodyText from "../../../components/common/BodyText";
import Image from "../../../components/common/Image";
import TextField from "../../../components/common/TextField";

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
    </PageWrapper>
  );
};

export default MobileCompanyApplication;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  .textfield {
    width: 80vw;
  }
`;

const ContentWrap = styled.div`
  padding: 50px 5%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
