import React from "react";
import styled from "styled-components";

import Image from "../components/common/Image";
import Text from "../components/common/Text";
import Button from "../components/common/Button";

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Image
        src="https://ik.imagekit.io/sgmianze96/assets/illustrations/under-construction_7iivCQv6r.svg"
        height="350px"
        width="90%"
      />
      <br />
      <Text isTitle textAlign="center !important">
        Ooops. This page does not exist.
      </Text>

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
  margin: auto auto;
  padding: 2.5% 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 740px) {
    padding: 30% 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
      height: 30vh;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  vertical-align: middle;
  img {
    margin: 2rem;
    height: 36px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    :hover {
      visibility: visible;
    }
  }
  @media (max-width: 1024px) {
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    padding: 0 5rem;
  }
  @media (max-width: 450px) {
    padding: 0 2rem;
    img {
      height: 18px;
    }
  }
  @media (max-width: 320px) {
    padding: 0 0.5rem;
  }
`;
