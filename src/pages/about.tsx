import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import Text from "../components/common/Text";
import Row from "../components/layout/Row";
import Column from "../components/layout/Column";
import Image from "../components/common/Image";

import MobileAbout from "./mobile/about";

const About: React.FC = () => {
  //default width of columns
  const colWidth: string = "40%";

  //default image height and width
  const imgHeight: string = "280px";
  const imgWidth: string = "80%";

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
    <MobileAbout />
  ) : (
    <Wrapper>
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Text isTitle>Our story</Text>
          <Text isBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
        </Column>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="story"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/story_fIice7cdvs.png"
            height={imgHeight}
            width={imgWidth}
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="why_us"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/whyus_PwCNnry6H.png"
            height={imgHeight}
            width={imgWidth}
          />
        </Column>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Text isTitle>Why Great Minds Challenge</Text>
          <Text isBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
        </Column>
      </Row>
      <br />
      <br />
      <Row isDefault>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Text isTitle>Meet our team</Text>
          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg" />
              }
            >
              {modalContent}
            </Popup>

            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg" />
              }
            >
              {modalContent}
            </Popup>

            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg" />
              }
            >
              {modalContent}
            </Popup>
          </Row>
          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg" />
              }
            >
              {modalContent}
            </Popup>
          </Row>
        </Column>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="team"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/team_oBOy6foBN.png"
            height={imgHeight}
            width={imgWidth}
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row isDefault>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="inspiration"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/inspirationboard_VrM4zAP9l.png"
            height={imgHeight}
            width={imgWidth}
          />
        </Column>
        <Column maxWidth="55%" minWidth="55%">
          <Text isTitle>Board of inspiration</Text>
          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/ruthie_rono_FnRnN5DxX.jpeg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/eddie_sarroukh_jTBfCXFzT.jpeg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/wahu_kagwi_FjZBA0YlR.jpg" />
              }
            >
              {modalContent}
            </Popup>
          </Row>
          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/vimal_shah_NB82_BJcx.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/jane_ngige_TWpF1BE5M.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <Image
              src="http://www.ringling.edu/sites/default/files/Blank_Canvas_on_Transparent_Background_0.png"
              height="70px"
              width="70px"
              style={{ borderRadius: "50%" }}
            />
          </Row>
        </Column>
      </Row>
      <br />
      <br />
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Text isTitle>Coaches & Experts</Text>
          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/decimar_ogutu_JPJW0MxSL.jpeg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/david_bernard-stevens_odas_jGE8.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/aart_bos_Z9QDWFTi5.jpg" />
              }
            >
              {modalContent}
            </Popup>
          </Row>

          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/mart-veeken_6fk15WB7d.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/susan-wamae_YsLgO55kh.png" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/dennis_de_weed_nFkBwobYl.png" />
              }
            >
              {modalContent}
            </Popup>
          </Row>

          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/irene_nchama_nDWrkoF0d.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/derek_bbanga_WZ26WVBpR.jpg" />
              }
            >
              {modalContent}
            </Popup>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/sheetal_shah_O2Cu1LH7w.jpeg" />
              }
            >
              {modalContent}
            </Popup>
          </Row>

          <Row isDefault>
            <Popup
              modal
              trigger={
                <Avatar src="https://ik.imagekit.io/sgmianze96/gmc/coaches/madelon_barens_tqHXxjgI1.jpg" />
              }
            >
              {modalContent}
            </Popup>
          </Row>
        </Column>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="coaches"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/coaches_ccjejDNkO.png"
            height={imgHeight}
            width={imgWidth}
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row isDefault>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="mission"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/mission_gkvuHTB94.png"
            height="420px"
            width="75%"
          />
        </Column>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Text isTitle>Mission</Text>
          <Text isBody>
            Become the epicenter of inspiration, imapct-challenge &
            transformative innovation.
          </Text>
          <br />
          <br />
          <Text isTitle>Vision</Text>
          <Text isBody>
            Nurture a new generation of leaders with new mind sets, who will be
            agents of transformation in businesses & society through innovation,
            sustainability & future proof breakthoughs for people, planet &
            prosperity.
          </Text>
        </Column>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  padding-top: 100px;
  max-width: 80%;
  margin: auto auto;
  .popup-content {
    border-radius: 20px;
    min-width: 70vw;
  }
  @media (max-width: 1025px) {
    #story,
    #why_us,
    #team,
    #inspiration {
      height: 250px;
    }
    #coaches {
      height: 300px;
    }
    #mission {
      height: 350px;
    }
  }
  @media (max-width: 769px) {
    #story,
    #why_us,
    #team,
    #inspiration {
      height: 200px;
    }
    #coaches {
      height: 250px;
    }
    #mission {
      height: 320px;
    }
  }
`;

const Avatar = styled.img`
  height: 70px;
  width: 70px;
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
