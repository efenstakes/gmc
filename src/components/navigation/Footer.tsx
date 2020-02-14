import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="copyrights">
        <p>&#169; 2019 GMC, Nairobi. All rights reserved</p>
        <p>Powered by Meridiem.</p>
      </div>

      <div className="social_links">
        <p>FB</p>
        <p>IG</p>
        <p>TW</p>
        <p>IN</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Nunito", sans-serif;
  font-size: 14px;

  .copyrights,
  p {
    background-color: transparent;
    color: white;
  }
  .copyrights,
  .social_links {
    margin: 10px 80px;
  }

  .social_links,
  .social_links p {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .social_links p {
    margin-right: 40px;
  }
`;
