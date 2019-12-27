import React from "react";
import {
  BlueContainer,
  ReasonsToJoin,
  Page,
  Partners
} from "../components/styled_components";
import TitleText from "../components/common/TitleText";
import BodyText from "../components/common/BodyText";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import Image from "../components/common/Image";
import Button from "../components/common/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <Page>
        {/* top image + welcome text */}
        <Row>
          <Column>
            <TitleText text="THE FUTUTRE IS NOW!" />
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
              src="https://ik.imagekit.io/sgmianze96/gmc/photos/gmc_home_main_yF8sJ5rVY.png"
              height="350px"
              width="600px"
            />
          </Column>
        </Row>
      </Page>

      {/* container with highlighted text */}
      <BlueContainer>
        <div>
          <h3>45</h3>
          <p>Participants to date</p>
        </div>
        <div>
          <h3>15</h3>
          <p>Participating companies</p>
        </div>
        <div>
          <h3>10</h3>
          <p>Social impact wildcards</p>
        </div>
      </BlueContainer>

      {/* container with reasons to join gmc */}
      <ReasonsToJoin>
        <Row>
          <Column>
            <img
              id="personal_dev"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/personal_development_JjUGqd8Ly.png"
              alt=""
            />
          </Column>
          <Column>
            <p>Personal development, systems thinking and coaching.</p>
          </Column>
        </Row>

        <Row>
          <Column>
            <img
              id="creativity"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/creativity_XDNpxlBT01.png"
              alt=""
            />
          </Column>
          <Column>
            <p>
              Experience creativity techniques and how to continuously innovate.
            </p>
          </Column>
        </Row>

        <Row>
          <Column>
            <img
              id="knowledge"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/knowledge_jdFMbHhOT.png"
              alt=""
            />
          </Column>
          <Column>
            <p>Gain knowledge from inspirational & influential leaders.</p>
          </Column>
        </Row>

        <Row>
          <Column>
            <img
              id="network"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/network_v_2x0AEVI.png"
              alt=""
            />
          </Column>
          <Column>
            <p>
              Network, co-create and acquire new mind sets with new generation
              leaders.
            </p>
          </Column>
        </Row>
      </ReasonsToJoin>

      {/* partners section */}
      <Partners>
        <h2>Partners</h2>
        <br />
        <div className="partners-row">
          <div>
            <img
              id="bidco"
              src="https://ik.imagekit.io/sgmianze96/gmc/partners/bidco_aFGJES6hj.png"
              alt=""
            />
          </div>
          <div>
            <img
              id="klm"
              src="https://ik.imagekit.io/sgmianze96/gmc/partners/klm_lzJ-GslBP.svg"
              alt=""
            />
          </div>
          <div>
            <img
              id="clarity"
              src="https://ik.imagekit.io/sgmianze96/gmc/partners/clarity_LetuwhYTsW.png"
              alt=""
            />
          </div>
          <div>
            <img
              id="incentro"
              src="https://ik.imagekit.io/sgmianze96/gmc/partners/incenro_Z-BNqzyGA.png"
              alt=""
            />
          </div>

          <Button text="View all" />
        </div>
      </Partners>
    </div>
  );
};

export default Landing;
