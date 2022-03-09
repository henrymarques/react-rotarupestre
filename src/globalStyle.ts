import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
