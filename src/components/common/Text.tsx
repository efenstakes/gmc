import styled from "styled-components";

//pass props to change text
type Props = {
  isTitle?: boolean;
  isBody?: boolean;
  isWhiteTitle?: boolean;
  isWhiteBody?: boolean;
  isBlue?: boolean;
  textAlign?: any;
};

//render different text depending on boolean prop selected
const Text = styled.span<Props>`
  color: ${p =>
    p.isTitle
      ? "#4f7cbd; "
      : p.isBody
      ? "#6a6a6a;"
      : p.isWhiteTitle
      ? "white;"
      : p.isWhiteBody
      ? "white;"
      : p.isBlue
      ? "#4f7cbd;"
      : "black;"};
  font-size: ${p =>
    p.isTitle || p.isWhiteTitle
      ? "28px;"
      : p.isBlue
      ? "24px;"
      : p.isWhiteBody
      ? "16px;"
      : p.isBody
      ? "14px"
      : "12px;"};
  text-align: ${p => p.textAlign};
  font-weight: ${p => (p.isTitle ? "600;" : "400;")};
  font-family: "Nunito", sans-serif;
  letter-spacing: 2px;
  padding: 2px 2px;
  line-height: 2;
  background-color: transparent;
  text-align: left;
  text-decoration: none !important;
  @media (max-width: 1025px) {
    font-size: ${p =>
      p.isTitle || p.isWhiteTitle
        ? "24px;"
        : p.isBlue
        ? "20px;"
        : p.isWhiteBody
        ? "14px;"
        : p.isBody
        ? "12px"
        : "12px;"};
  }
  @media (max-width: 768px) {
    font-size: ${p =>
      p.isTitle || p.isWhiteTitle
        ? "22px;"
        : p.isBlue
        ? "16px;"
        : p.isWhiteBody
        ? "14px;"
        : p.isBody
        ? "10px"
        : "10px;"};
  }
  @media (max-width: 500px) {
    text-align: ${p => (p.isBody || p.isTitle ? "center;" : "left;")};
  }
`;

export default Text;
