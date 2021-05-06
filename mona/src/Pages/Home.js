import React, {  } from 'react';
import Container from '@material-ui/core/Container';
import { Grid, Box, Typography, CardContent, CardMedia, Card, makeStyles, Button, ButtonBase } from "@material-ui/core";
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
  mona: {
    fontFamily: `"Palatino Linotype", "Book Antiqua", "Palatino", serif`,
  }
}));

function Home() {
  const classes = useStyles();

  const [openLouvre, setOpenLouvre] = React.useState(false); // React Hook to open the Louvre Card Alert
  const [openSmith, setOpenSmith] = React.useState(false); // React Hook to open the Smithsonian Card Alert

  // Handles the closing of Alerts
  const handleClose = () => {
    setOpenLouvre(false);
    setOpenSmith(false);
  };
  
  return (
      <div style={{backgroundColor: "#e6ebff"}}>
        <div className={classes.heroContent}>

          {/*Louve Card Component*/}
          <Container maxWidth="sm">
            <div style={{display: "flex"}}>
              <Typography style={{marginTop: '5vh'}} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Welcome to
              </Typography>
              <Typography className={classes.mona} style={{marginLeft: 15, marginTop: '5vh'}} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                MONA
              </Typography>
            </div>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The purpose of MONA (Map of Nice Artwork) is to improve the overall experience of any visitor of a historical museum. 
              MONA is able to show an interactive map where different pieces of artwork are located inside 
              of the museum as well as descriptions of featured art.
            </Typography>
          </Container>
        </div>

        {/*Smithsonian Card Component*/}
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <Box boxShadow={3}>
                <ButtonBase onClick={() => {setOpenLouvre(true)}}>
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

                {/*Dialouge/Alert Component*/}
                <Dialog
                  open={openLouvre}
                  onClose={handleClose}
                >
                  <DialogTitle id="louvre">{"Want to learn more about The Louvre?"}</DialogTitle>
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
                <ButtonBase onClick={() => {setOpenSmith(true)}}>
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
                </ButtonBase>
                <Dialog
                  open={openSmith}
                  onClose={handleClose}
                >
                  <DialogTitle id={"smith"}>{"Want to learn more about The Museum of Natural History?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Go to the <b>EXPLORE</b> tab to see what The Museum of Natural History has to offer!
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
          </Grid>   
          
        </Container>
      </div>
  )
}

export default Home;