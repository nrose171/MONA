import React from "react";
import RoomLabel from "./RoomLabels.js";

import './components.css';

const RoomLabelList = props => {

  var center = props.center;

  return (
    <div>
      <RoomLabel
        location={[center[0]-0.21, center[1]-0.21]}
        label={"1"}
        popup={"Main Gallery"}
      />

      <RoomLabel
        location={[center[0]-0.21, center[1]-0.06]}
        label={"2"}
        popup={"2nd Gallery"}
      />

      <RoomLabel
        location={[center[0]-0.07, center[1]-0.06]}
        label={"3"}
        popup={"Mona Lisa Room"}
      />
    </div>
  );
}

export default RoomLabelList;
