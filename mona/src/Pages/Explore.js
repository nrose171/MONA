import React from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Louvre from "./Museums/Louvre";
import RandomMuseum from "./Museums/RandomMuseum";
import { makeStyles, FormControl, InputLabel, Select, MenuItem, Box } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  }
}));

function Explore() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <div>
        <h1 style={{marginTop: '10vh'}}> Explore</h1>
        <Router>
            <Box position={"absolute"} left={'40%'}>
              <FormControl className={classes.formControl}>
              <InputLabel>Museums</InputLabel>
              <Select
                value={value}
                onChange={handleChange}
              >
                <MenuItem
                  value={"/Explore/Louvre"}
                  component={Link}
                  to={"/Explore/Louvre"}
                >
                  Louvre Museum
                </MenuItem>
                <MenuItem
                  value={"/Explore/RandomMuseum"}
                  component={Link}
                  to={"/Explore/RandomMuseum"}
                >
                  Some Random Museum
                </MenuItem>
              </Select>
              </FormControl>
            </Box>
            <Switch>
              <Route path="/Explore/Louvre" exact component={Louvre}/>
              <Route path="/Explore/RandomMuseum" component={RandomMuseum} />
            </Switch>
        </Router>
      </div>
  );
}

export default Explore;
