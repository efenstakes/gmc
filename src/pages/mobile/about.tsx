import React from "react";
import styled from "styled-components";

import TitleText from "../../components/common/TitleText";
import BodyText from "../../components/common/BodyText";
import Image from "../../components/common/Image";
import Row from "../../components/layout/Row";

const MobileAbout: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrap>
        <TitleText text="Our story" />
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/story_fIice7cdvs.png"
          height="180px"
          width="70%"
        />
        <br />
        <BodyText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
      </ContentWrap>

      <ContentWrap>
        <TitleText text="Why Great Minds Challenge" />
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/whyus_PwCNnry6H.png"
          height="180px"
          width="70%"
        />
        <br />
        <BodyText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
      </ContentWrap>

      <ContentWrap>
        <TitleText text="Meet our team" />
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/team_oBOy6foBN.png"
          height="180px"
          width="70%"
        />
        <br />
        <Row>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
        </Row>
        <Row>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
        </Row>
      </ContentWrap>

      <ContentWrap>
        <TitleText text="Board of inspiration" />
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/inspirationboard_VrM4zAP9l.png"
          height="180px"
          width="70%"
        />
        <br />
        <Row>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
        </Row>
        <Row>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
        </Row>
      </ContentWrap>

      <ContentWrap>
        <TitleText text="Coaches & experts" />
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/coaches_ccjejDNkO.png"
          height="200px"
          width="60%"
        />
        <br />
        <Row>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
        </Row>
        <Row>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
            <h4>Name</h4>
            <h6>Position</h6>
          </div>
        </Row>
      </ContentWrap>

      <ContentWrap>
        <TitleText text="Mission & Vision" />
        <br />
        <Image
          src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/mission_gkvuHTB94.png"
          height="200px"
          width="50%"
        />
        <br />
        <BodyText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
        <br />
        <BodyText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
      </ContentWrap>
    </PageWrapper>
  );
};

export default MobileAbout;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0;
`;

const ContentWrap = styled.div`
  padding: 50px 5%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .person_avatar {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h4 {
      font-family: "Nunito", sans-serif;
      letter-spacing: 1px;
      line-height: 1.8;
      font-size: 14px;
    }
    h6 {
      font-family: "Open Sans", sans-serif;
      letter-spacing: 1px;
      line-height: 1.8;
      font-weight: 600;
      color: grey;
      font-size: 11px;
    }
  }
`;
