import styled from "styled-components";

export const Content = styled.div`
  h2 {
    text-align: center;

    font-family: "Schoolbell", sans-serif;
    color: #c44135;
    font-size: 3rem;
    margin-top: 2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  p + p {
    margin-top: 1rem;
  }
`;
