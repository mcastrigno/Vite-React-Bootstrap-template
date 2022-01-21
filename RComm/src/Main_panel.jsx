import React from "react";
import "./main_panel.css";
import Rooms from "./Rooms";
import Title_bar from "./Title_bar";

function Main_panel() {
  return (
    <div className={"main_panel"}>
      <Title_bar />
      <Rooms />
    </div>
  );
}
export default Main_panel;
