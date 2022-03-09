import styled from "styled-components";

export const Main = styled.div`
  background: #cf5f33;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  height: 120px;
  margin: 0 auto;
`;

export const Menu = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  max-width: 500px;
`;

export const Button = styled.a`
  background: #fff;
  span {
    color: #000;
  }

  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;

  border-radius: 100px;
  padding: 16px 32px;

  &:hover {
    background: #000;
    span {
      color: #fff;
    }
  }

  transition: all 0.2s linear;
`;
