import React, {useState, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { Button, Box } from "@material-ui/core";
import { borders } from "@material-ui/system";
import ArtworkMarker from "../components/Markers.js";

import './Pages.css';

var center = [-34.43537, 150.45502];

function Map() {

  //Defining Hooks

  return (
      <div>
            <h1>Map</h1>
            <Button variant="contained" color="primary"> Example button </Button>
            <div
              style = {{
                display: "flex", justifyContent: "center", alignItems: "center"
              }}
            >
              <Box
                border={2}
                style = {{
                  display: "flex", justifyContent: "center", alignItems: "center", width: "70vw"
                }}
              >
                <MapContainer center={center} zoom={10} scrollWheelZoom={true}>

                  <ImageOverlay
                    url="https://i.imgur.com/i7A6p9R.jpg"
                    bounds={[center, [center[0]-0.3, center[1]-0.3]]}
                  />

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

                </MapContainer>
              </Box>
            </div>
        </div>
  );
}

export default Map;
