import React from "react";
import styled from "styled-components";

import TitleText from "../components/common/TitleText";
import BodyText from "../components/common/BodyText";
import Row from "../components/layout/Row";
import Column from "../components/layout/Column";
import Image from "../components/common/Image";

const About: React.FC = () => {
  return (
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
          <BodyText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          />
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
          <TitleText text="Coaches & experts" />
          <BodyText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          />
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
          <br /><br/>
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
`;
