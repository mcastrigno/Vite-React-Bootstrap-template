import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RComm_layout from "./RComm_layout";
import Vertical_test from "./Vertical_test";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ height: "1000px" }}>
      <RComm_layout />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
