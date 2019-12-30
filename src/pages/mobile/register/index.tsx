import React from "react";
import styled from "styled-components";

import Button from "../../../components/common/Button";
import TitleText from "../../../components/common/TitleText";

const MobileRegisterIndex: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrap>
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
        <Button text="Company application" />
        <br/>
        <Button text="Wildcard application" />
      </ContentWrap>
    </PageWrapper>
  );
};

export default MobileRegisterIndex;

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
  h3 {
    text-align: center;
    color: grey;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.5px;
    background-color: transparent;
    line-height: 2;
    font-family: "Open Sans", sans-serif;
  }
  h3 span {
    color: #4f7cbd;
    font-weight: 600;
  }
  button {
      width: 70vw;
      font-size: 14px;
      padding: 15px 15px;
  }

  @media(max-width: 321px) {
      h3 {
          font-size: 14px;
      }
  }
`;
