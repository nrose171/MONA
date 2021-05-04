import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Box } from "@material-ui/core";

import ArtworkCard from "../../components/ArtworkCard.js";
import LouvreArtworkList from "../../components/LouvreArtworkList.js";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { Button } from "@material-ui/core";
import { borders } from "@material-ui/system";

import ArtworkMarkerList from "../../components/ArtworkMarkerList.js";
import RoomLabelList from "../../components/RoomLabelList.js";

import '../Pages.css';

var center = [-34.43537, 150.45502];

function Louvre() {

  const scrollToTarget = (id) => {
    const element = document.getElementById(id);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
  }

  const handleButton1 = () => {
    scrollToTarget("here");
  }

  return (
    <div className = {"museum-page"}>
      <div>
            <br/><br/><br/><br/><br/>
            <center>
            <Button
                  onClick={handleButton1}
                  variant={"contained"}
                  color="primary"
              >
                  Browse Featured Artwork
              </Button>
              <h1 className="museum-page-header" style={{
                margin: "20px 0px 0px 0px", width: "70vw", fontSize: "40px", backgroundColor: "black", border: "solid", borderColor: "black", color: "white"
              }}>The Louvre</h1>
            </center>

            <div
              style = {{
                display: "flex", justifyContent: "center", alignItems: "center"
              }}
            >

              <Box
                border={2}
                style = {{
                  display: "flex", justifyContent: "center", alignItems: "center", width: "70vw", height: "35vw"
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

        <br/><br/>
        <center>
          <h1 style={{marginTop: '0vh'}}>Featured Artwork</h1>
        </center>

        <div className={"card-grid"}>
          <Grid container spacing={0} direction="column" id="here">

              <LouvreArtworkList></LouvreArtworkList>

          </Grid>
        </div>

    </div>
  );
}

export default Louvre;
