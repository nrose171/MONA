import React from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Louvre from "./Louvre"
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
          <div>
            <FormControl className={classes.formControl}>
            <InputLabel>Museums</InputLabel>
            <Select
              value={value}
              onChange={handleChange}
            >
              <MenuItem 
                value={"/Pages/Louvre"}
                component={Link}
                to={"/Pages/Louvre"}
              >
                Louvre Museum
              </MenuItem>
            </Select>
          </FormControl>
            <hr />
            <Switch>
              <Route path="/Pages/Louvre" exact component={Louvre}/>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default Explore;