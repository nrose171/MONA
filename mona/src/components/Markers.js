import React, {useState, useRef, useEffect} from "react";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { GreenIcon, BlueIcon } from "./MarkerIcons.js";

function changeColor(IconType, setIcon) {
  setIcon(IconType);
}

export default function ArtworkMarker(props) {

    const [Icon, setIcon] = useState(GreenIcon);

    //Declare Hooks
    const markRef = useRef(null);

    const handleClick = e => {
      changeColor(GreenIcon, setIcon);
    };

    React.useEffect( () => {
      // add when mounted
      document.addEventListener("mousedown", handleClick);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);

    return(
        <Marker
          position={props.location}
          icon={Icon}
          eventHandlers={{
            click: () => {
              if(Icon == GreenIcon)
                changeColor(BlueIcon, setIcon);
              else
                changeColor(GreenIcon, setIcon);
            },
          }}
        >
          <Popup
            position={props.location}
          >
            <center>{props.name}</center>
            <img
                src={props.imageSrc}
                height="100px"
                width="100px"/>
          </Popup>
        </Marker>
    );
}
