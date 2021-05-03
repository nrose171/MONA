import React from "react";
import Typography from "@material-ui/core/Typography";
import { MapContainer, TileLayer, ImageOverlay, Popup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";
import { Button, Box, Grid, Paper, Card, CardHeader, CardMedia, CardContent, Container, Avatar, Accordion, AccordionSummary, AccordionDetails  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  custom_text: {
    fontSize:'30px',
    color:'Dark Grey'
  },
  painting_name: {
    fontSize:'40px',
  }
  
}));


function Louvre() {
  const classes = useStyles();
  return (
      <div>
          <h1 style={{marginTop: '0vh'}}> Louvre Museum</h1>

          <h1>start</h1>
            <Grid container 
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
              spacing={1}>
              <Grid container item xs={12} justify="space-evenly" spacing={3}>
                  <Paper className={classes.paper}>item</Paper>
              </Grid>
              <Grid container item xs={12} justify="space-evenly" spacing={3}>
              <Grid item xs={5}>
                  <Container maxWidth="sm" component="div" style={{ backgroundColor: '#cfe8fc', height: '30vh' }}>
                    <img src="https://i.imgur.com/lmJy0b5.jpg" height="660px" width="400px" justify="space-evenly" />
                  </Container>
              </Grid>
              <Grid item xs={5}>
                  <Card maxWidth="sm" component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>
                    <CardHeader avatar = {
                      <Avatar aria-label="Art" >
                        LD
                      </Avatar>
                    }
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                    />
                    <img src="https://i.imgur.com/lmJy0b5.jpg" height="90px" width="10px" align="center" />
                    <CardContent>
                      <Typography variant="body2" color="dark grey" component="p" >
                        Artist: Leonardo Da Vinci
                      </Typography>
                      <Typography variant="body1" color="dark grey" component="p">
                        Year:   1506
                      </Typography>
                      
                    </CardContent>  
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.heading}>Accordion 2</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          this is painting
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Card>
              </Grid>
              </Grid>
            </Grid>
            <h1>end</h1>

      </div>
  );
}

// Not currently used
function FormRow() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={5}>
          <Container maxWidth="sm" component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>
            <img src="https://i.imgur.com/lmJy0b5.jpg" height="660px" width="400px" justify="space-evenly" />
          </Container>
      </Grid>
      <Grid item xs={5}>
          <Card maxWidth="sm" component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>
            <img src="https://i.imgur.com/lmJy0b5.jpg" height="660px" width="400px" justify="space-evenly" />
          </Card>
          </Grid>
    </React.Fragment>
  );
}


export default Louvre;