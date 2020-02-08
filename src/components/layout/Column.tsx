import styled from "styled-components";

type Props = {
  maxWidth?: any;
};

const Column = styled.div<Props>`
  max-width: ${p => p.maxWidth};
  display: flex;
  flex-direction: column;
`;

export default Column;
