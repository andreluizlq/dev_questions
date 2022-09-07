import styled from "styled-components";

export const CountBlock = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  padding-bottom: 0.125rem;
  border-bottom: 3px solid var(--blue-200);

  button {
    border: none;
    background: none;
    font-size: 3rem;
    &:active {
      color: #d0d0d0;
    }
  }
`;

export const ButtonLess = styled.button`
  margin: 0 3.375rem 0 0.75rem;
`;

export const ButtonMore = styled.button`
  margin: 0 0.75rem 0 3.375rem;
`;
