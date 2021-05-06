import React from "react";
import ArtworkMarker from "./Markers.js";

import './components.css';

const ArtworkMarkerList = props => {

  var center = props.center;

  return (
    // List of markers with paintings' images, names, and appropriate coordiantes
    // Used by the Leaflet Map
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
        name={"The Wedding Feast at Cana"}
        imageSrc={"https://i.imgur.com/iVRyl3M.jpg"}
      />

      <ArtworkMarker
        location={[center[0]-0.28, center[1]-0.06]}
        name={"A Calm Sea"}
        imageSrc={"https://i.imgur.com/mT4mnpB.jpg"}
      />
    </div>
  );
}

export default ArtworkMarkerList;
