import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from 'react-leaflet'
import './Pages.css';


var center = [-34.43537, 150.45502];

function Map() {
  return (
      <div>
            <h1>Map</h1>
            <MapContainer center={[-34.43537, 150.45502]} zoom={10} scrollWheelZoom={true}>

              <ImageOverlay
                url="https://i.imgur.com/Lha3Pz4.png"
                bounds={[[-34.43537, 150.45502], [-34.67063, 150.21057]]}
              />

              <Marker position={[-34.43537, 150.45502]}>
                <Popup position={[-34.43537, 150.45502]}>
                  <center>Mona Lisa</center>
                  <img src="https://i.imgur.com/lmJy0b5.jpg" height="100px" width="100px"/>
                </Popup>
              </Marker>

            </MapContainer>
        </div>
  );
}

export default Map;
