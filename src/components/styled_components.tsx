import styled from "styled-components";

//section of the page with blue background
export const BlueContainer = styled.div`
  font-family: "Nunito", sans-serif;
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  vertical-align: middle;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: #4f7cbd;
  h3 {
    margin-bottom: 5px;
    font-size: 36px;
  }
  div,
  p,
  h3 {
    color: white;
    background-color: transparent;
  }
`;

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

//section with partners
export const Partners = styled.div`
  font-family: "Nunito", sans-serif;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #4f7cbd;
    letter-spacing: 1.5px;
  }
  .partners-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 0 70px;
    }
    #klm {
      height: 60px;
      width: 60px;
    }
    #clarity {
      height: 40px;
      width: 120px;
    }
    #incentro {
      height: 25px;
      width: 120px;
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

//full height page wrapper
export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-top: 50px;

  #content-wrap {
    padding-bottom: 60px;
  }
`;

