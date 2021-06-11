import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 90vw;
  margin: 2em;
  border: 1px solid gray;
  padding: 1em;
`;

export const TitleContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SectionWrapper = ({ children, ...props }) => (
  <SectionContainer>
    <TitleContainer>{props.title}</TitleContainer>
    {children}
  </SectionContainer>
);
