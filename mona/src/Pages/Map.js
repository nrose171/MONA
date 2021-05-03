import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup, Icon } from "react-leaflet";
import { Button, Box } from "@material-ui/core";
import { borders } from "@material-ui/system";

import { GreenIcon, BlueIcon } from "../components/MarkerIcons.js"

import './Pages.css';

var center = [-34.43537, 150.45502];

function Map() {
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
                    url="https://i.imgur.com/Lha3Pz4.png"
                    bounds={[center, [-34.67063, 150.21057]]}
                  />

                  <Marker
                    position={center}
                    eventHandlers={{
                      click: () => {
                        this.icon = {}
                      },
                    }}
                    icon={GreenIcon}
                  >
                    <Popup position={center}>
                      <center>Mona Lisa</center>
                      <img src="https://i.imgur.com/lmJy0b5.jpg" height="100px" width="100px"/>
                    </Popup>
                  </Marker>

                </MapContainer>
              </Box>
            </div>
        </div>
  );
}

export default Map;
