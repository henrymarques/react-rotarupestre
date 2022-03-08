import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./globalStyle";
import Index from "./pages/Index";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
