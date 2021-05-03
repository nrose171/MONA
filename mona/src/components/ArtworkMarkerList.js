import React from "react";
import ArtworkMarker from "./Markers.js";

import './components.css';

const ArtworkMarkerList = props => {

  var center = props.center;

  return (
    <div>
      <ArtworkMarker
        location={[center[0]-0.02, center[1]-0.06]}
        name={"Mona Lisa"}
        imageSrc={"https://i.imgur.com/lmJy0b5.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.28, center[1]-0.28]}
        name={"The Raft of Medusa"}
        imageSrc={"https://imgur.com/whuhdZM.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.02, center[1]-0.27]}
        name={"Liberty Leading \nthe People"}
        imageSrc={"https://imgur.com/FyNiO3m.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.16, center[1]-0.02]}
        name={"Venus de Milo"}
        imageSrc={"https://imgur.com/yL3L1LG.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.28, center[1]-0.06]}
        name={"Winged Victory of Samothrace"}
        imageSrc={"https://imgur.com/FIONP1i.jpg"}
      />
    </div>
  );
}

export default ArtworkMarkerList;
