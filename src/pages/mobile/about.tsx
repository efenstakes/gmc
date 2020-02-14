import React from "react";
import styled from "styled-components";

import Text from "../../components/common/Text";
import Image from "../../components/common/Image";
import Row from "../../components/layout/Row";

const MobileAbout: React.FC = () => {
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
        <Row isDefault={true}>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
        </Row>
        <Row isDefault={true}>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
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
        <Row isDefault={true}>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
        </Row>
        <Row isDefault={true}>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
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
        <Row isDefault={true}>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
        </Row>
        <Row isDefault={true}>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
          <div className="person_avatar">
            <Image
              src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
              height="35px"
              width="35px"
            />
          </div>
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
