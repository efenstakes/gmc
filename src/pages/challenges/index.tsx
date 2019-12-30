import React from "react";
import { Page } from "../../components/styled_components";
import Row from "../../components/layout/Row";
import { GreyContainer } from "../../components/common/Container";
import { ReasonsToJoin } from "../../components/styled_components";
import TitleText from "../../components/common/TitleText";
import BodyText from "../../components/common/BodyText";
import Column from "../../components/layout/Column";
import Image from "../../components/common/Image";

import MobileChallengesIndex from '../mobile/challenges/index'

const Challenges: React.FC = () => {
  return window.screen.width < 740 ? <MobileChallengesIndex/> : (
    <div>
      <Page>
        <Row>
          <Column>
            <TitleText text="Challenges" />
            <BodyText
              text="The Great Minds Challenge is a two-months program
            which will culminate with a three-day high-powered
            challenge. The most innovative global thinkers,
            entrepreneurs and scholars will be brought together
            under one program to enable the formation of the new
            generation leaders."
            />
          </Column>
          <Column>
            <Image
              height="350px"
              width="450px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/challenges_bJA18M2uJ.png"
            />
          </Column>
        </Row>
      </Page>

      {/* container with reasons to join gmc */}
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
    </div>
  );
};

export default Challenges;
