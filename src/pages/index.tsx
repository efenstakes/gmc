import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import { Page } from "../components/styled_components";
import TitleText from "../components/common/TitleText";
import BodyText from "../components/common/BodyText";
import WhiteTitleText from "../components/common/WhiteTitleText";
import WhiteBodyText from "../components/common/WhiteBodyText";
import BlueText from "../components/common/BlueText";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import Image from "../components/common/Image";
import Container from "../components/common/Container";

import MobileIndex from "./mobile/index";

const Landing: React.FC = () => {
  //partners modal content
  const modalContent: any = (
    <ModalWrapper>
      <TitleText text="All our partners" style={{ textAlign: "center" }} />
      <PartnersRow>
        <Image
          id="bidco"
          height="50px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/bidco_aFGJES6hj.png"
        />
        <Image
          id="klm"
          height="60px"
          width="60px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/klm_lzJ-GslBP.svg"
        />
        <Image
          id="clarity"
          height="40px"
          width="120px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/clarity_LetuwhYTsW.png"
        />
      </PartnersRow>

      <PartnersRow>
        <Image
          id="mp"
          height="70px"
          width="120px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/mp_logo_cnJizAy-6.png"
        />
        <Image
          id="usiu"
          height="70px"
          width="120px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/usiu_logo_tN3QnOGc1.png"
        />
        <Image
          id="barens"
          height="50px"
          width="120px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/barens_h44fUSLxf.jpg"
        />
      </PartnersRow>

      <PartnersRow>
        <Image
          id="incentro"
          height="25px"
          width="120px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/incenro_Z-BNqzyGA.png"
        />
        <Image
          id="soulco"
          height="40px"
          width="120px"
          src="https://ik.imagekit.io/sgmianze96/gmc/partners/soulco_nAnhkBRxU.jpg"
        />
      </PartnersRow>
    </ModalWrapper>
  );

  return window.screen.width < 740 ? (
    <MobileIndex />
  ) : (
    <PageWrapper>
      <Page>
        {/* top image + welcome text */}
        <Row isDefault={true}>
          <Column maxWidth="48%">
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

          <Column maxWidth="48%">
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

      {/* blue container with highlighted text */}
      <Container
        isDefault={false}
        padding="20px 20px;"
        flexDirection="row;"
        verticalAlign="middle;"
        justifyContent="space-around;"
        backgroundColor="#4f7cbd;"
        textAlign="center;"
        alignItems="center;"
      >
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
      </Container>

      {/* grey container with reasons to join gmc */}
      <Container
        isDefault={false}
        padding="50px 120px;"
        flexDirection="column;"
        justifyContent="space-between;"
        backgroundColor="#fdfdfd;"
      >
        <Row isDefault={true}>
          <Column maxWidth="48%">
            <Image
              height="120px"
              width="170px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/personal_development_JjUGqd8Ly.png"
            />
          </Column>
          <Column maxWidth="48%">
            <BlueText text="Personal development, systems thinking and coaching." />
          </Column>
        </Row>

        <Row isDefault={true}>
          <Column maxWidth="48%">
            <Image
              height="120px"
              width="130px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/creativity_XDNpxlBT01.png"
            />
          </Column>
          <Column maxWidth="48%">
            <BlueText text="Experience creativity techniques and how to continuously innovate." />
          </Column>
        </Row>

        <Row isDefault={true}>
          <Column maxWidth="48%">
            <Image
              height="120px"
              width="170px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/knowledge_jdFMbHhOT.png"
            />
          </Column>
          <Column maxWidth="48%">
            <BlueText text="Gain knowledge from inspirational & influential leaders." />
          </Column>
        </Row>

        <Row isDefault={true}>
          <Column maxWidth="48%">
            <Image
              height="120px"
              width="170px"
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/network_v_2x0AEVI.png"
            />
          </Column>
          <Column maxWidth="48%">
            <BlueText
              text="Network, co-create and acquire new mind sets with new generation
              leaders."
            />
          </Column>
        </Row>
      </Container>

      {/* white container partners section */}
      <Container isDefault={true} flexDirection="column">
        <TitleText text="Partners" style={{ textAlign: "center" }} />

        <Row isDefault={true}>
          <Image
            id="bidco"
            src="https://ik.imagekit.io/sgmianze96/gmc/partners/bidco_aFGJES6hj.png"
          />
          <Image
            id="klm"
            height="60px"
            width="60px"
            src="https://ik.imagekit.io/sgmianze96/gmc/partners/klm_lzJ-GslBP.svg"
          />
          <Image
            id="clarity"
            height="40px"
            width="120px"
            src="https://ik.imagekit.io/sgmianze96/gmc/partners/clarity_LetuwhYTsW.png"
          />
          <Image
            id="incentro"
            height="25px"
            width="120px"
            src="https://ik.imagekit.io/sgmianze96/gmc/partners/incenro_Z-BNqzyGA.png"
          />
          <Popup modal trigger={<PopupBtn>View all</PopupBtn>}>
            {modalContent}
          </Popup>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
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
  @media (max-width: 769px) {
    #main_photo {
      width: 300px;
      height: 180px;
    }
    #bidco {
      height: 30px;
      width: 50px;
    }
    #klm {
      height: 30px;
      width: 40px;
    }
    #incentro {
      height: 20px;
      width: 80px;
    }
    #clarity {
      height: 30px;
      width: 80px;
    }
  }
  .popup-content {
    border-radius: 20px;
  }
`;

const PopupBtn = styled.button`
  font-family: "Nunito", sans-serif;
  border: 2px solid #4f7cbd;
  background-color: white;
  border-radius: 10px;
  padding: 10px 25px;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: #4f7cbd;
  :hover {
    background: #4f7cbd;
    color: white;
  }
  @media (max-width: 769px) {
    font-size: 14px;
    padding: 5px 15px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    padding: 3px 8px;
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

const PartnersRow = styled.div`
  background-color: white;
  * {
    background-color: transparent;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 40px;
  align-items: center;
`;
