import React from "react";
import { CircleMarker, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

import './components.css';

//Room label class that displays a circle with a number in the middle of it on top of the map//
const RoomLabel = props => {

    //Create icon with set text label for center of circle marker//
    const text = L.divIcon({
        className: 'my-div-icon circle-div-icon',
        html: props.label,
        iconSize: [12,30]
      });

    return(
        <CircleMarker
          center={props.location}
          radius={15}
          color={"Black"}
          weight={3}
          stroke={true}
          fill={true}
          fillColor={"White"}
          fillOpacity={1.0}
        >
          <Popup>
            <center>{props.popup}</center>
          </Popup>
          <Marker position={props.location} icon={text} interactive={false} />
        </CircleMarker>
    );
}

export default RoomLabel;
