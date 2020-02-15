import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import Page from "../../components/layout/Page";
import Row from "../../components/layout/Row";
import Text from "../../components/common/Text";
import Column from "../../components/layout/Column";
import Image from "../../components/common/Image";
import Container from "../../components/common/Container";

import MobileChallengesIndex from "../mobile/challenges/index";

const Challenges: React.FC = () => {
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

  return window.screen.width < 740 ? (
    <MobileChallengesIndex />
  ) : (
    <PageWrapper>
      <Page>
        <Row isDefault={true}>
          <Column maxWidth="48%">
            <Text isTitle>Challenges</Text>
            <Text isBody>
              The Great Minds Challenge is a two-months program which will
              culminate with a three-day high-powered challenge. The most
              innovative global thinkers, entrepreneurs and scholars will be
              brought together under one program to enable the formation of the
              new generation leaders.
            </Text>
          </Column>
          <Column maxWidth="48%">
            <Image
              id="challenges"
              height="350px"
              width="450px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/challenges_bJA18M2uJ.png"
            />
          </Column>
        </Row>
      </Page>
      <br />
      <br />
      <Container
        isDefault={false}
        padding="50px 120px;"
        flexDirection="column;"
        justifyContent="space-between;"
        backgroundColor="#fdfdfd;"
      >
        <Text isTitle>ANNUAL CHALLENGES</Text>
        <br />
        <ImgRow>
          <ImgContainer>
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
          </ImgContainer>

          <ImgContainer>
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
          </ImgContainer>

          <ImgContainer>
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
          </ImgContainer>
        </ImgRow>
        <br />
        <br />

        <Text isTitle>IN-HOUSE</Text>
        <br />
        <ImgRow>
          <ImgContainer>
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
          </ImgContainer>

          <ImgContainer>
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
          </ImgContainer>

          <ImgContainer>
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
          </ImgContainer>
        </ImgRow>
      </Container>
    </PageWrapper>
  );
};

export default Challenges;

const PageWrapper = styled.div`
  .popup-content {
    border-radius: 20px;
    min-width: 90vw;
  }
  @media (max-width: 769px) {
    #challenges {
      height: 270px;
      width: 90%;
    }
  }
`;

const ImgRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const ImgContainer = styled.div`
  align-items: center;
  vertical-align: middle;
  text-align: center;
  img {
    height: 175px;
    width: 175px;
    border-radius: 50% !important;
    :hover {
      box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 3px 15px 0 rgba(0,0,0,0.19);
      transition: all 0.3s ease 0s;
      cursor: pointer;
    }
  }
  @media (max-width: 769px) {
      img {
        height: 130px;
        width: 130px;
      }
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

const ModalWrapper = styled.div`
  background-color: white;
  * {
    background-color: transparent;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px;
`;
