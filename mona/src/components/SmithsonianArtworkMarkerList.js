import React from "react";
import ArtworkMarker from "./Markers.js";

import './components.css';

const ArtworkMarkerList = props => {

  var center = props.center;

  return (
    <div>
      <ArtworkMarker
        location={[center[0]-0.02, center[1]-0.06]}
        name={"Electronic Superhighway"}
        imageSrc={"https://i.imgur.com/j4Uesox.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.28, center[1]-0.28]}
        name={"A Visit from the Old Mistress"}
        imageSrc={"https://i.imgur.com/2eOJm2x.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.02, center[1]-0.27]}
        name={"Initiation, Liberia"}
        imageSrc={"https://i.imgur.com/uwDLzAh.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.16, center[1]-0.02]}
        name={"Washington Sea Eagle"}
        imageSrc={"https://i.imgur.com/vDbfESJ.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.28, center[1]-0.06]}
        name={"Can Fire in the Park"}
        imageSrc={"https://i.imgur.com/t6glCdt.jpg"}
      />
    </div>
  );
}

export default ArtworkMarkerList;
