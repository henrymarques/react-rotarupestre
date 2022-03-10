import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Header = styled.div`
  background: linear-gradient(
      0deg,
      rgba(84, 48, 25, 0.78),
      rgba(84, 48, 25, 0.78)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  h1 {
    font-family: "Schoolbell", serif;
    font-size: 4rem;
    font-weight: 400;
    line-height: 2;
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
