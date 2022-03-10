import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
