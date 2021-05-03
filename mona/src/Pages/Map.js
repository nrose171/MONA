import React, {useState, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { Button, Box } from "@material-ui/core";
import { borders } from "@material-ui/system";

import ArtworkMarkerList from "../components/ArtworkMarkerList.js"
import RoomLabelList from "../components/RoomLabelList.js"

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
                <MapContainer
                  center={center}
                  zoom={10}
                  scrollWheelZoom={true}
                  zoomDelta={0.8}
                  maxZoom={12}
                  minZoom={9}
                >

                  <ImageOverlay
                    url="https://i.imgur.com/i7A6p9R.jpg"
                    bounds={[center, [center[0]-0.3, center[1]-0.3]]}
                  />

                  <ArtworkMarkerList center={center}></ArtworkMarkerList>

                  <RoomLabelList center={center}></RoomLabelList>

                </MapContainer>
              </Box>
            </div>
        </div>
  );
}

export default Map;
