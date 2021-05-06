import React from "react";
import { Grid, Box } from "@material-ui/core";
import SmithsonianArtworkList from "../../components/SmithsonianArtworkList.js";
import { MapContainer, ImageOverlay } from "react-leaflet";
import { Button } from "@material-ui/core";
import ArtworkMarkerList from "../../components/SmithsonianArtworkMarkerList.js";
import RoomLabelList from "../../components/RoomLabelList.js";
import '../Pages.css';

var center = [-34.43537, 150.45502]; //Center lattidue and longitude of the map component

function Smithsonian() {

  {/*Function that scrolls to certan element on page that also includes offset (AppBar)*/}
  const scrollToTarget = (id) => {
    const element = document.getElementById(id);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
  }
  {/*Event handler that runs scrollToTarget function*/}
  const handleButton1 = () => {
    scrollToTarget("here");
  }

  return (
    <div className = {"museum-page"}>
      <div>
            <br/><br/><br/><br/><br/>
            <center>
              {/*Button used to scroll down to Featured Artwork Cards*/}
              <Button
                  style={{marginTop: '10vh'}}
                  onClick={handleButton1}
                  variant={"contained"}
                  color="primary">
                  Browse Featured Artwork
              </Button>

              {/*Louvre Title overlaying the map component*/}
              <h1 className="museum-page-header" style={{
                margin: "20px 0px 0px 0px", width: "70vw", fontSize: "40px", backgroundColor: "black", border: "solid", borderColor: "black", color: "white", fontFamily: `"Palatino Linotype", "Book Antiqua", "Palatino", serif`
              }}>THE SMITHSONIAN</h1>
            </center>

            <div
              style = {{
                display: "flex", justifyContent: "center", alignItems: "center"
              }}
            >
              {/*Map Component*/}
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

        {/*Featured Artwork Title*/}
        <center>
          <h1 id="here" style={{marginTop: '0vh'}}>Featured Artwork</h1>
        </center>

        {/*Artowork Cards Component*/}
        <Grid container spacing={0} direction="column">

            <SmithsonianArtworkList></SmithsonianArtworkList>

        </Grid>

    </div>
  );
}

export default Smithsonian;
