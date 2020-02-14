import styled from "styled-components";

//section with reasons to join
export const ReasonsToJoin = styled.div`
  font-family: "Nunito", sans-serif;
  padding: 50px 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fdfdfd;
  div,
  p,
  img {
    background-color: transparent;
  }
  .isometric-and-text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  img {
    height: 120px;
    width: 180px;
  }
  #creativity {
    height: 140px;
    width: 150px;
  }
  #network {
    height: 120px;
    width: 170px;
  }
  #knowledge {
    height: 120px;
    width: 160px;
  }
  p {
    font-size: 24px;
    color: #4f7cbd;
  }
  h2 {
    color: #4f7cbd;
    letter-spacing: 1.5px;
    background-color: transparent;
  }
  .img-row {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    justify-content: space-around;
    vertical-align: middle;
    text-align: center;
    padding: 60px 0;
    img {
      height: 175px;
      width: 175px;
      border-radius: 50%;
    }
    p {
      margin-top: 10px;
    }
  }
`;

//page wrapper
export const Page = styled.div`
  padding-top: 100px;
  max-width: 80%;
  margin: auto auto;
  font-family: "Nunito", sans-serif;
  text-align: center;
  h2 {
    color: #4f7cbd;
    letter-spacing: 1.5px;
    background-color: transparent;
  }
  h3 {
    color: grey;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 1.5px;
    background-color: transparent;
    line-height: 2;
  }
  h3 span {
    color: #4f7cbd;
    font-weight: 600;
  }
  .popup-content {
    border-radius: 20px;
  }
`;
