import styled from "styled-components";

type Props = {
  isDefault: boolean;
  flexDirection?: any;
  justifyContent?: any;
  padding?: any;
  backgroundColor?: any;
  alignItems?: any;
  verticalAlign?: any;
  textAlign?: any;
};

const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${p => p.flexDirection};
  justify-content: ${p => (p.isDefault ? "space-around;" : p.justifyContent)};
  align-items: ${p => p.alignItems};
  vertical-align: ${p => p.verticalAlign};
  padding: ${p => (p.isDefault ? "40px 120px;" : p.padding)};
  background-color: ${p => (p.isDefault ? "white;" : p.backgroundColor)};
  text-align: ${p => p.textAlign};
  * {
    background-color: transparent;
  }
`;

export default Container;