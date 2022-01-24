import React from "react";
import "./rooms.css";

function Rooms() {
  return (
    <>
      <div className={"rooms"}>
        <div className={"room_type"}>
          <div>Proc1</div>
          <div>Proc2</div>
          <div>Proc3</div>
          <div>Proc4</div>
        </div>
        <div className={"room_type"}>
          <div>Clinic1</div>
          <div>Clinic2</div>
          <div>Clinic3</div>
          <div>Clinic4</div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
