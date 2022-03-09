import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Header = styled.div``;

export const Footer = styled.div``;

export const Content = styled.div`
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
    font-size: 4rem;
    font-weight: 400;
    line-height: 2;
  }

  svg {
    max-height: 39px;
    width: 100%;
  }

  path {
    fill: #54301930;
  }
`;
