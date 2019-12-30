import styled from "styled-components";


export const BlueContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-flow: row wrap;
  vertical-align: middle;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: #4f7cbd;
  div {
    background-color: transparent;
  }
`;

export const GreyContainer = styled.div`
  font-family: "Nunito", sans-serif;
  padding: 50px 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fdfdfd;
  div {
    background-color: transparent;
  }
  @media (max-width: 769px) {
    padding: 50px 80px;
  }
`;

export const WhiteContainer = styled.div`
  padding: 40px 120px;
  display: flex;
  flex-direction: column;
`;