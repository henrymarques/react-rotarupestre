import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./globalStyle";

import Eixos from "./pages/Eixos";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Eixos />
  </React.StrictMode>,
  document.getElementById("root")
);
