import styled from "styled-components";

export const Main = styled.nav`
  background: #cf5f33;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  div + div {
    margin-top: 0.325rem;
  }

  &.closed div {
    background: #cf5f33;
  }

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const Logo = styled.span`
  font-family: "Schoolbell", serif;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    & {
      display: block;
      font-size: 2rem;
      margin: 8px 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  height: 120px;
  margin: 0 auto;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      height: 100%;
    }

    &.closed {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  list-style: none;
  max-width: 600px;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      justify-content: space-evenly;
    }

    li {
      margin-bottom: 16px;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

export const Button = styled.a`
  background: #fff;

  span {
    color: #000;
  }

  font-size: 1rem;
  font-weight: 400;

  border-radius: 100px;
  padding: 16px 32px;

  transition: all 0.2s linear;

  &:hover {
    background: #000;
    span {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    & {
      display: block;
      margin-bottom: 8px;
      transition: none;
    }
  }
`;
