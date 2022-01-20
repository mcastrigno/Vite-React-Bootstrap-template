import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RComm_layout from "./RComm_layout";
import Vertical_test from "./Vertical_test";

ReactDOM.render(
  <React.StrictMode>
    <RComm_layout />
    <Vertical_test />
  </React.StrictMode>,
  document.getElementById("root")
);
