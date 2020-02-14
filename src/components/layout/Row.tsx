import styled from "styled-components";

//props to change some layouts
type Props = {
  isDefault: boolean;
  padding?: any;
  justifyContent?: any;
};

//pass props to styled component
const Row = styled.div<Props>`
  padding: ${p => (p.isDefault ? "20px 0;" : p.padding)};
  display: flex;
  flex-flow: row wrap;
  vertical-align: middle;
  justify-content: ${p => (p.isDefault ? "space-between;" : p.justifyContent)};
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export default Row;
