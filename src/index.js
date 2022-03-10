import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";
import ThemeWrapper from "./components/styled/ThemeWrapper";

ReactDOM.render(
  <React.StrictMode>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
