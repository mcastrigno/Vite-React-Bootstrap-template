import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RComm_layout from "./RComm_layout";

ReactDOM.render(
  <React.StrictMode>
    <RComm_layout />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
