import React, {useState, useRef, useEffect} from "react";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { GreenIcon, BlueIcon } from "./MarkerIcons.js";

import L from 'leaflet';

function changeColor(IconType, setIcon) {
  setIcon(IconType);
}

export default function ArtworkMarker(props) {

    const [Icon, setIcon] = useState(GreenIcon);
    const [IsReset, setIsReset] = useState(false);

    //Declare Hooks
    const markRef = useRef(null);

    const handleClick = (e) => {
        if(e.target.src != undefined)
        {
          if( e.target.src == 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png')
          {
            setIsReset(false);
          }
          else if( e.target.src == 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png')
          {
            setIsReset(true);
          }
        }
        else {
          setIsReset(true);
        }
        setIcon(GreenIcon);
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
            click: (e) => {
              if(IsReset)
                setIcon(GreenIcon);
              else
                setIcon(BlueIcon);
            },
          }}
        >
          <Popup
            position={props.location}
          >
            <center>{props.name}</center>
            <center>
              <img
                  src={props.imageSrc}
                  height="100px"
                  width="100px"
              />
            </center>
          </Popup>
        </Marker>
    );
}
