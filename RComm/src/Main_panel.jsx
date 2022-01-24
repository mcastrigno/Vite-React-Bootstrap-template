import React from "react";
import Growler_bar from "./Growler_alerts";
import "./main_panel.css";
import Rooms from "./Rooms";
import Title_bar from "./Title_bar";

function Main_panel() {
  return (
    <div className={"main_panel"}>
      <Title_bar />
      <Rooms />
      <Growler_bar />
    </div>
  );
}
export default Main_panel;
