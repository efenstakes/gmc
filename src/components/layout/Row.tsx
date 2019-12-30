import styled from "styled-components";

const Row = styled.div`
  padding: 20px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export default Row;
