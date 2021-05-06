import React, { useState } from "react";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import SignIn from "./Pages/SignIn";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppBar, Tabs, Tab, Grid, Typography, Box, makeStyles } from "@material-ui/core";

function App() {
  const classes = useStyles();

  const routes = ["/", "/Explore", "/SignIn"]; //Different Pages to route to 

  const [value, setValue] = useState("/"); //React hook that handles what page to render

  // Event handler that sets value of selected menu tab 
  const handleChange = (e, newVal)=>{
    setValue(newVal)
  }


  return (
    <div style={{height: '100vh', minHeight: '100vh', backgroundColor: '#e6ebff'}}>
      <BrowserRouter>
        <Route
          path="/"
          render={() => (
            <AppBar style={{ background: '#a3baff' }}>
              <Grid container spacing={1} direction="column">
                {/*Start of Grid container inside AppBar size of 12*/}
                <Grid item xs={12} container>
                  {/*Logo*/}
                  <Grid item xs={1}>
                    <Box m={1} pl={2}>
                      <img src="https://i.imgur.com/OKjUUmT.png" width="70" height="70"/>
                    </Box>
                  </Grid>

                  {/*MONA Title*/}
                  <Grid item xs={1}>
                    <Box pl={2} pt={1}>
                      <Typography className={classes.h3} variant="h1">MONA</Typography>
                    </Box>
                  </Grid>

                  {/*Empty Space to push Tabs on right side of AppBar*/}
                  <Grid item xs={6} />

                  {/*Tabs Component*/}
                  <Grid item xs={4}>
                    <Box pt={2}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        classes={{indicator: classes.customStyleOnActiveTab}}
                        TabIndicatorProps={{style: {backgroundColor: "white"}}}
                      >
                      <Tab
                        label={<span className={ value === "/" ? classes.activeTab : classes.customStyleOnTab}>Home</span>}
                        value={routes[0]}
                        component={Link}
                        to={routes[0]}
                      />
                      <Tab
                        label={<span className={ value === "/Explore" ? classes.activeTab : classes.customStyleOnTab}>Explore</span>}
                        value={routes[1]}
                        component={Link}
                        to={routes[1]}
                      />
                      <Tab
                        label={<span className={ value === "/Sign In" ? classes.activeTab : classes.customStyleOnTab}>Sign In</span>}
                        value={routes[2]}
                        component={Link}
                        to={routes[2]}
                      />
                      </Tabs>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </AppBar>
         )}
        />
      {/*Tells React Router to render different pages*/}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Explore" component={Explore} />
        <Route path="/SignIn" component={SignIn} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

const useStyles = makeStyles({
  customStyleOnTab:{
    fontSize:'28px',
    color:'white'
  },
  customStyleOnActiveTab:{
    color:'red'
  },
  activeTab:{
    fontSize:'28px',
    fontWeight:'600',
    color:'#668cff'
  },
  h3:{
    fontSize:'60px',
    fontFamily: `"Palatino Linotype", "Book Antiqua", "Palatino", serif`,
  }
})

export default App;
