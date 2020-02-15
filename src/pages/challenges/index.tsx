import React from "react";
import styled from "styled-components";

import { Page } from "../../components/styled_components";
import Row from "../../components/layout/Row";
import Text from "../../components/common/Text";
import Column from "../../components/layout/Column";
import Image from "../../components/common/Image";
import Container from "../../components/common/Container";

import MobileChallengesIndex from "../mobile/challenges/index";

const Challenges: React.FC = () => {
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
        <ImgRow>
          <ImgContainer>
            <Image src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
            <br />
            <Text isBlue>Induction</Text>
          </ImgContainer>

          <ImgContainer>
            <Image src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
            <br />
            <Text isBlue>3-day challenge</Text>
          </ImgContainer>

          <ImgContainer>
            <Image src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
            <br />
            <Text isBlue>Commencement</Text>
          </ImgContainer>
        </ImgRow>
        <br />
        <br />

        <Text isTitle>IN-HOUSE</Text>
        <ImgRow>
          <ImgContainer>
            <Image src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
            <br />
            <Text isBlue>Induction</Text>
          </ImgContainer>

          <ImgContainer>
            <Image src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
            <br />
            <Text isBlue>3-day challenge</Text>
          </ImgContainer>

          <ImgContainer>
            <Image src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg" />
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
  }
  @media (max-width: 769px) {
      img {
        height: 130px;
        width: 130px;
      }
    
`;
