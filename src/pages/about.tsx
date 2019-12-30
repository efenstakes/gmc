import React from "react";
import styled from "styled-components";

import TitleText from "../components/common/TitleText";
import BodyText from "../components/common/BodyText";
import Row from "../components/layout/Row";
import Column from "../components/layout/Column";
import Image from "../components/common/Image";

import MobileAbout from "./mobile/about";

const About: React.FC = () => {
  return window.screen.width < 740 ? (
    <MobileAbout />
  ) : (
    <Wrapper>
      <Row>
        <Column>
          <TitleText text="Our story" />
          <BodyText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          />
        </Column>
        <Column>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/story_fIice7cdvs.png"
            height="350px"
            width="85%"
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/whyus_PwCNnry6H.png"
            height="350px"
            width="85%"
          />
        </Column>
        <Column>
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
      <Row>
        <Column>
          <TitleText text="Meet our team" />
          <Row>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </Row>
          <Row>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </Row>
        </Column>
        <Column>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/team_oBOy6foBN.png"
            height="350px"
            width="85%"
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/inspirationboard_VrM4zAP9l.png"
            height="350px"
            width="85%"
          />
        </Column>
        <Column>
          <TitleText text="Board of inspiration" />
          <Row>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </Row>
          <Row>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </Row>
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column>
          <TitleText text="Coaches & experts" />
          <Row>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </Row>
          <Row>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
            <div className="person_avatar">
              <Image
                src="https://ik.imagekit.io/sgmianze96/p3l/avatar_yHHj_DT5a.svg"
                height="60px"
                width="60px"
              />
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </Row>
        </Column>
        <Column>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/coaches_ccjejDNkO.png"
            height="350px"
            width="85%"
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column>
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/mission_gkvuHTB94.png"
            height="450px"
            width="75%"
          />
        </Column>
        <Column>
          <TitleText text="Mission" />
          <BodyText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          />
          <br />
          <br />
          <TitleText text="Vision" />
          <BodyText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          />
        </Column>
      </Row>
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
    h4 {
      font-family: "Nunito", sans-serif;
      letter-spacing: 1.5px;
      line-height: 1.8;
    }
    h6 {
      font-family: "Open Sans", sans-serif;
      letter-spacing: 1.5px;
      line-height: 1.8;
      font-weight: 600;
      color: grey;
    }
  }
`;
