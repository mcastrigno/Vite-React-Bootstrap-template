import React from "react";
import Split from "react-split";
import Staff from "./Staff";
import Statuses from "./Statuses";
import Main_panel from "./Main_panel";
import "./Split.css";

function RComm_layout() {
  return (
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
      <Main_panel />
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
        className="split-flex-column"
      >
        <Staff />
        <Statuses />
      </Split>
    </Split>
  );
}
export default RComm_layout;
