import styled from "styled-components";

export const Button = styled.a`
  text-decoration: none;
  color: inherit;

  & + a {
    margin-left: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 120px;

  @media (max-width: 640px) {
    padding: 1rem 0;
    flex-direction: column;
  }
`;

export const FooterTag = styled.footer`
  background: #333740;
  color: #fff;
`;
