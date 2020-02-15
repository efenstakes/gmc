import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import Text from "../../components/common/Text";
import Image from "../../components/common/Image";
import Row from "../../components/layout/Row";

const MobileAbout: React.FC = () => {
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
        <Text isTitle>Our story</Text>
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/story_fIice7cdvs.png"
          height="180px"
          width="70%"
        />
        <br />
        <Text isBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
      </ContentWrap>

      <ContentWrap>
        <Text isTitle>Why Great Minds Challenge</Text>
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/whyus_PwCNnry6H.png"
          height="180px"
          width="70%"
        />
        <br />
        <Text isBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
      </ContentWrap>

      <ContentWrap>
        <Text isTitle>Meet our team</Text>
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/team_oBOy6foBN.png"
          height="180px"
          width="70%"
        />
        <br />
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
      </ContentWrap>

      <ContentWrap>
        <Text isTitle>Board of inspiration</Text>
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/inspirationboard_VrM4zAP9l.png"
          height="180px"
          width="70%"
        />
        <br />
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
            height="50px"
            width="50px"
            style={{ borderRadius: "50%" }}
          />
        </Row>
      </ContentWrap>

      <ContentWrap>
        <Text isTitle>Coaches & Experts</Text>
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/coaches_ccjejDNkO.png"
          height="200px"
          width="60%"
        />
        <br />
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
      </ContentWrap>

      <ContentWrap>
        <Text isTitle>Mission & Vision</Text>
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/mission_gkvuHTB94.png"
          height="200px"
          width="50%"
        />
        <br />
        <Text isBody>
          Become the epicenter of inspiration, imapct-challenge & transformative
          innovation.
        </Text>
        <br />
        <Text isBody>
          Nurture a new generation of leaders with new mind sets, who will be
          agents of transformation in businesses & society through innovation,
          sustainability & future proof breakthoughs for people, planet &
          prosperity.
        </Text>
      </ContentWrap>
      <br />
      <br />
      <br />
      <br />
    </PageWrapper>
  );
};

export default MobileAbout;

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
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  padding: 0 5px;
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
  padding: 10px 10px;
`;
