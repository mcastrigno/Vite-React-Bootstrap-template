import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Split from "react-split";
import Rooms from "./Rooms";
import Staff from "./Staff";
import Events from "./Events";
import "./Split.css";

function Vertical_test() {
  return (
    <div style={{ height: "400px" }}>
      <Split
        sizes={[60, 40]}
        minSize={200}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="vertical"
        cursor="row-resize"
        className="split-flex-column"
      >
        <Staff />
        <Events />
      </Split>
    </div>
  );
}
export default Vertical_test;
