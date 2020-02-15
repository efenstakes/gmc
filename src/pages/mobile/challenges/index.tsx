import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import Text from "../../../components/common/Text";
import Image from "../../../components/common/Image";

const MobileChallengesIndex: React.FC = () => {
  //content of modal
  const modalContent: any = (
    <ModalWrapper>
      <Text isBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </Text>
    </ModalWrapper>
  );

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
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <br />
            <Text isBlue>Induction</Text>
          </div>
          <br />
          <br />

          <div className="img-container">
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <br />
            <Text isBlue>3-day challenge</Text>
          </div>
          <br />
          <br />

          <div className="img-container">
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <br />
            <Text isBlue>Commencement</Text>
          </div>
          <br />
          <br />
        </div>

        <Text isTitle>In-house</Text>
        <br />
        <div className="img-col">
          <div className="img-container">
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <br />
            <Text isBlue>Induction</Text>
          </div>
          <br /> <br />
          <div className="img-container">
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <br />
            <Text isBlue>3-day challenge</Text>
          </div>
          <br /> <br />
          <div className="img-container">
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <br />
            <Text isBlue>Commencement</Text>
          </div>
          <br />
        </div>
      </GreyContainer>
    </PageWrapper>
  );
};

export default MobileChallengesIndex;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  .popup-content {
    border-radius: 10px;
    min-width: 90vw;
  }
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
  }
`;

const ModalWrapper = styled.div`
  background-color: white;
  * {
    background-color: transparent;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
`;

const Avatar = styled.img`
  height: 175px;
  width: 175px;
  border-radius: 50% !important;
  :hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 3px 15px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
`;
