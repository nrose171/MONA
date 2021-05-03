import React, {useState} from "react";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { GreenIcon, BlueIcon } from "../components/MarkerIcons.js";

export default function ArtworkMarker(props) {

    //Declare Hooks
    const [Icon, setIcon] = useState(GreenIcon);

    return(
      <Marker
        position={props.location}
        eventHandlers={{
          click: () => {
            if(Icon == GreenIcon)
              setIcon(BlueIcon);
            else
              setIcon(GreenIcon);
          },
        }}
        icon={Icon}
      >
        <Popup position={props.location}>
          <center>{props.name}</center>
          <img src={props.imageSrc} height="100px" width="100px"/>
        </Popup>
      </Marker>
    );
}
