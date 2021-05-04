import React, { useState, useRef } from 'react';
import Container from '@material-ui/core/Container';
import { Grid, Box, Typography, IconButton, Collapse, CardActions, CardContent, CardMedia, CardHeader, Card, makeStyles, Button, ButtonBase } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 4),
  },
  cardGrid: {
  },
  card: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid', 
    borderColor: "#668cff",
  },
  cardMedia: {
    width: 500,
    height: 250
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
      <div style={{backgroundColor: "#e6ebff"}}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography style={{marginTop: '5vh'}} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to MONA
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The purpose of MONA is to improve the overall experience of any visitor of a historical museum. 
              MONA is able to show an interactive map where different pieces of artwork are located inside 
              of the museum as well as descriptions of featured art.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <Box boxShadow={3}>
                <ButtonBase onClick={handleClickOpen}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/1NTtRmM.jpg"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        The Louvre
                      </Typography>
                      <Typography>
                        The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France, 
                        and is best known for being the home of the Mona Lisa. 
                        A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement.
                      </Typography>
                    </CardContent>
                  </Card>
                </ButtonBase>
                <Dialog
                  open={open}
                  onClose={handleClose}
                >
                  <DialogTitle>{"Want to learn more about The Louvre?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Go to the <b>EXPLORE</b> tab to see what The Louvre has to offer!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                      Okay!
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Grid>
            
            <Grid item xs={2}/>

            <Grid item xs={5}>
              <Box boxShadow={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/N0QWfnd.jpg"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    The National Museum of Natural History
                    </Typography>
                    <Typography>
                      The National Museum of Natural History is a natural history museum administered by the Smithsonian Institution, 
                      located on the National Mall in Washington, D.C., United States. 
                      The museum's collections contain over 145 million specimens and artifacts, the largest natural history collection in the world.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>   
          
        </Container>
      </div>
  )
}

export default Home;