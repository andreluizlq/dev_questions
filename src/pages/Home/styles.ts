import styled from "styled-components";

export const HomeBlock = styled.section`
  #report {
    color: var(--white);
    text-decoration: none;
    padding: 1rem 0.938rem;
    margin: 0.75rem 1.25rem;
    border-radius: 8px;
    border: 1px solid var(--white);
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.4s;

    &:hover {
      background-color: var(--white);
      color: var(--blue-1000);
    }
  }
`;

export const HomeContent = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

export const ImagesBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: 62rem;
  margin-left: 2.5rem;

  @media (max-width: 1630px) {
    width: 47.5rem;
  }
  @media (max-height: 870px) {
    width: 47.5rem;
  }
`;

export const ImageBackground = styled.img`
  width: 66.875rem;
  z-index: 0;

  @media (max-width: 1630px) {
    width: 52.375rem;
  }
  @media (max-height: 870px) {
    width: 52.375rem;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3.75rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--white);
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3.125rem;

  a {
    margin-left: 5.25rem;
  }
`;

export const ButtonStart = styled.button`
  background-color: var(--orange-800);
  border-radius: 8px;
  height: 3.75rem;
  width: 12.5rem;
  font-size: 1.25rem;
  transition: 0.4s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--white);
  margin-left: 2rem;
  &:hover {
    background-color: var(--orange-1000);
  }
`;
