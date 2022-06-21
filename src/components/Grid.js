import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col || 2}, 1fr);
  ${({ alignItems }) => alignItems && `align-items: center;`}
  > * {
    margin-bottom: ${({ gapY }) => gapY || 0}px;
    :not(:nth-child(${({ col }) => col || 2}n)) {
      margin-right: ${({ gapX }) => gapX || 0}px;
    }
  }
  @media (max-width: 768px) {
    ${({ col }) =>
      col &&
      `
    grid-template-columns: repeat(${col / 2}, 1fr);
    > * {
      :not(:nth-child(${col}n)) {
        margin-right: 0;
      }
    }
    `}
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
