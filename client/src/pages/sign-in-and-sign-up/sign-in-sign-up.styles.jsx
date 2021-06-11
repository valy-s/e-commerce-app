import styled from "styled-components";

export const SignInUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 320px;
    flex-direction: column;
    align-items: center;
  }
`;
