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
                    url="mona_map.png"
                    bounds={[[-34.43537, 150.45502], [-34.67063, 150.21057]]}
                />

                <Marker position={[-34.43537, 150.45502]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
  );
}

export default Map;