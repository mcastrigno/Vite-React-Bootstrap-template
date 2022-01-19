import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Split from "react-split";
import Rooms from "./Rooms";
import Staff from "./Staff";
import Events from "./Events";
import "./Split.css";

function RComm_layout() {
  return (
    <>
      <Split
        sizes={[75, 25]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        className="split-flex-row"
      >
        <Rooms />
        <Split
          sizes={[60, 40]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="vertical"
          cursor="row-resize"
          className="split-flex-col"
        >
          <Staff />
          <Events />
        </Split>
      </Split>
    </>
  );
}
export default RComm_layout;
