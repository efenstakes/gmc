import styled from "styled-components";

type Props = {
  maxWidth?: any;
  minWidth?: any;
};

const Column = styled.div<Props>`
  max-width: ${p => p.maxWidth};
  min-width: ${p => p.minWidth};
  display: flex;
  flex-direction: column;
`;

export default Column;
