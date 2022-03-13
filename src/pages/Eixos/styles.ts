import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  h1 {
    color: #c44135;

    font-family: "Schoolbell", serif;
    font-size: 4rem;
    font-weight: 400;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      height: 500px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      height: 200px;
    }

    .seta {
      margin-top: 32px;
      width: 300px;
    }
  }
`;

export const Main = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 400px;
  background: #faf2d0;

  svg {
    max-height: 39px;
    width: 100%;
  }

  path {
    fill: #54301930;
  }

  .inverted {
    transform: rotate(180deg);
  }
`;

export const Footer = styled.div``;
