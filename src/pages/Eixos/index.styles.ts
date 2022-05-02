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
      height: 25rem;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      height: 10rem;
    }

    .seta {
      margin-top: 2rem;
      width: 15rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column-reverse;

    .right {
      .seta {
        display: none;
      }
    }

    .left {
      svg {
        height: 20rem;
      }
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

  /* min-height: 400px; */
  background: #92bf98;

  svg {
    max-height: 39px;
    width: 100%;
  }

  path {
    fill: #2a472d30;
  }

  .inverted {
    transform: rotate(180deg);
  }
`;

export const Footer = styled.div``;
