import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import TitleText from "../../components/common/TitleText";
import BodyText from "../../components/common/BodyText";
import WhiteTitleText from "../../components/common/WhiteTitleText";
import WhiteBodyText from "../../components/common/WhiteBodyText";
import BlueText from "../../components/common/BlueText";
import Image from "../../components/common/Image";

const MobileIndex: React.FC = () => {
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

  return (
    <PageWrapper>
      <ContentWrap>
        <TitleText text="THE FUTURE IS NOW!" />
        <br />
        <Image
          id="main_photo"
          style={{ borderRadius: "10px" }}
          src="https://ik.imagekit.io/sgmianze96/gmc/photos/gmc_home_main_yF8sJ5rVY.png"
          height="230px"
          width="80%"
        />
        <br />
        <BodyText
          text="The Great Minds Challenge is a two-months program
             which will culminate with a three-day high-powered
             challenge. The most innovative global thinkers,
             entrepreneurs and scholars will be brought together
             under one program to enable the formation of the new
             generation leaders."
        />
      </ContentWrap>

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

      <GreyContainer>
        <div>
          <Image
            height="120px"
            width="150px"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/personal_development_JjUGqd8Ly.png"
          />
          <BlueText text="Personal development, systems thinking and coaching." />
        </div>
        <br />
        <br />
        <div>
          <Image
            height="120px"
            width="120px"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/creativity_XDNpxlBT01.png"
          />
          <BlueText text="Experience creativity techniques and how to continuously innovate." />
        </div>
        <br />
        <br />
        <div>
          <Image
            height="120px"
            width="150px"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/knowledge_jdFMbHhOT.png"
          />
          <BlueText text="Gain knowledge from inspirational & influential leaders." />
        </div>
        <br />
        <br />
        <div>
          <Image
            height="120px"
            width="150px"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/network_v_2x0AEVI.png"
          />
          <BlueText
            text="Network, co-create and acquire new mind sets with new generation
              leaders."
          />
        </div>
      </GreyContainer>

      <br />
      <TitleText text="Partners" style={{ textAlign: "center" }} />
      <br />

      <PartnersRow>
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
      </PartnersRow>
    </PageWrapper>
  );
};

export default MobileIndex;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;

const PartnersRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  #bidco {
    height: 20px;
    width: 30px;
  }
  #klm {
    height: 30px;
    width: 30px;
  }
  #clarity {
    height: 25px;
    width: 70px;
  }
  #incentro {
    height: 15px;
    width: 70px;
  }
  @media (max-width: 321px) {
    #bidco {
      height: 20px;
      width: 30px;
    }
    #klm {
      height: 20px;
      width: 25px;
    }
    #clarity {
      height: 15px;
      width: 50px;
    }
    #incentro {
      height: 10px;
      width: 50px;
    }
    button {
      font-size: 9px;
    }
  }
`;

const ContentWrap = styled.div`
  padding: 50px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #main_photo {
    height: 220px;
  }
`;

const BlueContainer = styled.div`
  background-color: #4f7cbd;
  width: 100%;
  padding: 30px 20px;
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
`;

const PopupBtn = styled.button`
  font-family: "Nunito", sans-serif;
  border: 2px solid #4f7cbd;
  background-color: white;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: #4f7cbd;
  :hover {
    background: #4f7cbd;
    color: white;
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
  margin: auto auto;
`;