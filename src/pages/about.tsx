import React from "react";
import styled from "styled-components";

import TitleText from "../components/common/TitleText";
import BodyText from "../components/common/BodyText";
import Row from "../components/layout/Row";
import Column from "../components/layout/Column";
import Image from "../components/common/Image";

import MobileAbout from "./mobile/about";

const About: React.FC = () => {
  //default width of columns
  const colWidth: string = "40%";

  //default image height and width
  const imgHeight: string = "300px";
  const imgWidth: string = "85%";

  return window.screen.width < 740 ? (
    <MobileAbout />
  ) : (
    <Wrapper>
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <TitleText text="Our story" />
          <BodyText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          />
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
          <TitleText text="Why Great Minds Challenge" />
          <BodyText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <TitleText text="Meet our team" />
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
            </div>
          </Row>
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
            </div>
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
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="inspiration"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/inspirationboard_VrM4zAP9l.png"
            height={imgHeight}
            width={imgWidth}
          />
        </Column>
        <Column maxWidth="55%" minWidth="55%">
          <TitleText text="Board of inspiration" />
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/ruthie_rono_FnRnN5DxX.jpeg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/eddie_sarroukh_jTBfCXFzT.jpeg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/wahu_kagwi_FjZBA0YlR.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Row>
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/vimal_shah_NB82_BJcx.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/inspiration_board/jane_ngige_TWpF1BE5M.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div></div>

            <div></div>
          </Row>
        </Column>
      </Row>
      <br />
      <br />
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <TitleText text="Coaches & experts" />
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/decimar_ogutu_JPJW0MxSL.jpeg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/david_bernard-stevens_odas_jGE8.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/aart_bos_Z9QDWFTi5.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Row>
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/mart-veeken_6fk15WB7d.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/susan-wamae_YsLgO55kh.png"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/dennis_de_weed_nFkBwobYl.png"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Row>
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/irene_nchama_nDWrkoF0d.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/derek_bbanga_WZ26WVBpR.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/sheetal_shah_O2Cu1LH7w.jpeg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Row>
          <Row isDefault={true}>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/coaches/madelon_barens_tqHXxjgI1.jpg"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
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
      <Row isDefault={true}>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <Image
            id="mission"
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/mission_gkvuHTB94.png"
            height="420px"
            width="75%"
          />
        </Column>
        <Column maxWidth={colWidth} minWidth={colWidth}>
          <TitleText text="Mission" />
          <BodyText text="Become the epicenter of inspiration, imapct-challenge & transformative innovation." />
          <br />
          <br />
          <TitleText text="Vision" />
          <BodyText text="Nurture a new generation of leaders with new mind sets, who will be agents of transformation in businesses & society through innovation, sustainability & future proof breakthoughs for people, planet & prosperity." />
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

  .person_avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
