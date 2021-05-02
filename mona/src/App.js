import React from "react";
import Nav from "./components/Pages/Nav";
import Home from "./components/Pages/Home";
import Map from "./components/Pages/Map";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppBar, Tabs, Tab, Grid, Typography, Box } from "@material-ui/core";

function App() {
  const routes = ["/", "/components/Pages/Map"];
  
  return (
    <div>
      <BrowserRouter>
        <Route 
          path="/" 
          render={(history) => (
            <AppBar>
              <Grid container spacing={1} direction="column">
                <Grid item xs={12} container>
                  <Grid item xs={1}>
                    <Box pl={2}>
                      <Typography variant="h3">MONA</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={8} />
                  <Grid item xs={3}>
                    <Tabs 
                      value={history.location.pathname}
                    >
                    <Tab
                      label="Home" 
                      value={routes[0]} 
                      component={Link}
                      to={routes[0]}
                    />
                    <Tab 
                      label="Map" 
                      value={routes[1]} 
                      component={Link}
                      to={routes[1]}
                    />
                    </Tabs>
                  </Grid>
                </Grid>
              </Grid>
            </AppBar>
         )}
        />
        

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components/Pages/Map" component={Map} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;