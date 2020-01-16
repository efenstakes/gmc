import React from "react";
import styled from "styled-components";

import Image from "../components/common/Image";
import TitleText from "../components/common/TitleText";

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Image
        src="https://ik.imagekit.io/sgmianze96/assets/illustrations/under-construction_7iivCQv6r.svg"
        height="350px"
        width="90%"
      />
      <br />
      <br />
      <br />
      <TitleText
        style={{ textAlign: "center" }}
        text="This website is currently under development. Check back soon!"
      />
      <br />

      <SocialLinksWrapper>
        <a
          href="https://www.facebook.com/GMCNairobi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Facebook"
            src="https://ik.imagekit.io/sgmianze96/assets/social_icons/facebook_hwKdAopIi.svg"
          />
        </a>
        <a
          href="https://www.linkedin.com/school/greatmindsnairobi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="linkedin"
            src="https://ik.imagekit.io/sgmianze96/assets/social_icons/linkedin_7bxeG15wZQ.svg"
          />
        </a>
        <a
          href="mailto:info@greatmindsnairobi.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="email"
            src="https://ik.imagekit.io/sgmianze96/assets/social_icons/google-gmail_gRFMGKEW09.svg"
          />
        </a>
      </SocialLinksWrapper>
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
