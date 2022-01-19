import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Split from "react-split";
import Rooms from "./Rooms";
import Staff from "./Staff";
import Events from "./Events";

function RComm_layout() {
  return (
    <>
      <Split
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <Rooms />
        <Staff />
      </Split>
    </>
  );
}
export default RComm_layout;
