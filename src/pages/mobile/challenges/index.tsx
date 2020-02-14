import React from "react";
import styled from "styled-components";

import Text from "../../../components/common/Text";
import Image from "../../../components/common/Image";

const MobileChallengesIndex: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrap>
        <Text isTitle>Challenges</Text>
        <br />
        <Image
          height="250px"
          width="80%"
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/challenges_bJA18M2uJ.png"
        />
        <br />
        <br />
        <Text isBody>
          The Great Minds Challenge is a two-months program which will culminate
          with a three-day high-powered challenge. The most innovative global
          thinkers, entrepreneurs and scholars will be brought together under
          one program to enable the formation of the new generation leaders.
        </Text>
      </ContentWrap>
      <GreyContainer>
        <Text isTitle>Annual challenges</Text>
        <br />
        <div className="img-col">
          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <Text isBlue>Induction</Text>
          </div>
          <br />

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <Text isBlue>3-day challenge</Text>
          </div>
          <br />

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <Text isBlue>Commencement</Text>
          </div>
          <br />
        </div>

        <Text isTitle>In-house</Text>
        <div className="img-col">
          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <Text isBlue>Induction</Text>
          </div>
          <br />

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <Text isBlue>3-day challenge</Text>
          </div>
          <br />

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <Text isBlue>Commencement</Text>
          </div>
          <br />
        </div>
      </GreyContainer>
      <br />
      <br />
      <br />
      <br />
    </PageWrapper>
  );
};

export default MobileChallengesIndex;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;

const ContentWrap = styled.div`
  padding: 50px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GreyContainer = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  * {
    background-color: transparent;
    text-align: center;
  }
  .img-col {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 20px;
    img {
      height: 175px;
      width: 175px;
      border-radius: 50%;
    }
  }
`;
