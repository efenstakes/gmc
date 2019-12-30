import React from "react";
import styled from "styled-components";

import TitleText from "../../components/common/TitleText";
import Button from "../../components/common/Button";
import TextField from "../../components/common/TextField";
import TextArea from "../../components/common/TextArea";

const MobileContact: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrap>
        <TitleText text="Send us a message" />
        <br />
        <br />
        <form className="contact">
          <TextField label="Your name" />
          <br />
          <TextField label="E-mail address" />
          <br />
          <TextArea label="Your message " />
          <br />
          <br />

          <Button style={{ width: "100%" }} text="Send" />
        </form>
      </ContentWrap>
    </PageWrapper>
  );
};

export default MobileContact;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0;
`;

const ContentWrap = styled.div`
  padding: 50px 5%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
