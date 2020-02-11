import React from "react";
import styled from "styled-components";

import Image from "../components/common/Image";
import TitleText from "../components/common/TitleText";
import Button from "../components/common/Button";

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Image
        src="https://ik.imagekit.io/sgmianze96/portfolio/Isometrics/404_H6rAC8Kwc.svg"
        height="350px"
        width="90%"
      />
      <br />
      <TitleText
        style={{ textAlign: "center" }}
        text="Ooops. This page does not exist"
      />
      
      <Button text="Go back" route="/" />
      <br />
      <br />
      <br />
      <br />
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  padding: 10% 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 40px;
    width: 60vw;
  }

  @media (max-width: 740px) {
    padding: 30% 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
      height: 20vh;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;
