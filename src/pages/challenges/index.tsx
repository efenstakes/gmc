import React from "react";
import styled from "styled-components";

import { Page } from "../../components/styled_components";
import Row from "../../components/layout/Row";
import { ReasonsToJoin } from "../../components/styled_components";
import Text from "../../components/common/Text";
import Column from "../../components/layout/Column";
import Image from "../../components/common/Image";

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
      <ReasonsToJoin>
        <h2>ANNUAL CHALLENGES</h2>
        <div className="img-row">
          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <p>Induction</p>
          </div>

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <p>3-day challenge</p>
          </div>

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <p>commencement</p>
          </div>
        </div>

        <h2>IN-HOUSE</h2>
        <div className="img-row">
          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <p>Induction</p>
          </div>

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <p>3-day challenge</p>
          </div>

          <div className="img-container">
            <img
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/challenges_induction_qXJKFz8AI.jpg"
              alt=""
            />
            <p>commencement</p>
          </div>
        </div>
      </ReasonsToJoin>
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
    .img-container {
      img {
        height: 130px;
        width: 130px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;
