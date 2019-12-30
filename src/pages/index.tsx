import React from "react";
import styled from "styled-components";

import { Page } from "../components/styled_components";
import TitleText from "../components/common/TitleText";
import BodyText from "../components/common/BodyText";
import WhiteTitleText from "../components/common/WhiteTitleText";
import WhiteBodyText from "../components/common/WhiteBodyText";
import BlueText from "../components/common/BlueText";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import Image from "../components/common/Image";
import Button from "../components/common/Button";
import {
  BlueContainer,
  GreyContainer,
  WhiteContainer
} from "../components/common/Container";

const Landing: React.FC = () => {
  return (
    <PageWrapper>
      <Page>
        {/* top image + welcome text */}
        <Row>
          <Column>
            <TitleText text="THE FUTURE IS NOW!" />
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
              id="main_photo"
              style={{ borderRadius: "10px" }}
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
          <WhiteTitleText text="45" />
          <WhiteBodyText text="Participants to date" />
        </div>
        <div>
          <WhiteTitleText text="15" />
          <WhiteBodyText text="Participating companies" />
        </div>
        <div>
          <WhiteTitleText text="10" />
          <WhiteBodyText text="Social impact wildcards" />
        </div>
      </BlueContainer>

      {/* container with reasons to join gmc */}
      <GreyContainer>
        <Row>
          <Column>
            <Image
              height="120px"
              width="170px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/personal_development_JjUGqd8Ly.png"
            />
          </Column>
          <Column>
            <BlueText text="Personal development, systems thinking and coaching." />
          </Column>
        </Row>

        <Row>
          <Column>
            <Image
              height="120px"
              width="130px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/creativity_XDNpxlBT01.png"
            />
          </Column>
          <Column>
            <BlueText text="Experience creativity techniques and how to continuously innovate." />
          </Column>
        </Row>

        <Row>
          <Column>
            <Image
              height="120px"
              width="170px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/knowledge_jdFMbHhOT.png"
            />
          </Column>
          <Column>
            <BlueText text="Gain knowledge from inspirational & influential leaders." />
          </Column>
        </Row>

        <Row>
          <Column>
            <Image
              height="120px"
              width="170px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/network_v_2x0AEVI.png"
            />
          </Column>
          <Column>
            <BlueText
              text="Network, co-create and acquire new mind sets with new generation
              leaders."
            />
          </Column>
        </Row>
      </GreyContainer>

      {/* partners section */}
      <WhiteContainer>
        <TitleText text="Partners" style={{ textAlign: "center" }} />

        <Row>
          <Image src="https://ik.imagekit.io/sgmianze96/gmc/partners/bidco_aFGJES6hj.png" />
          <Image
            height="60px"
            width="60px"
            src="https://ik.imagekit.io/sgmianze96/gmc/partners/klm_lzJ-GslBP.svg"
          />
          <Image
            height="40px"
            width="120px"
            src="https://ik.imagekit.io/sgmianze96/gmc/partners/clarity_LetuwhYTsW.png"
          />
          <Image
            height="25px"
            width="120px"
            src="https://ik.imagekit.io/sgmianze96/gmc/partners/incenro_Z-BNqzyGA.png"
          />
          <Button text="View all" />
        </Row>
      </WhiteContainer>
    </PageWrapper>
  );
};

export default Landing;

const PageWrapper = styled.div`
  @media (max-width: 1025px) {
    #main_photo {
      width: 400px;
      height: 250px;
    }
  }
`;
