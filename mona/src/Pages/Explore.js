import React from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Louvre from "./Museums/Louvre";
import Smithsonian from "./Museums/Smithsonian";
import { makeStyles, FormControl, InputLabel, Select, MenuItem, Box } from "@material-ui/core";
import Scroll from "../components/Scroll"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
    marginTop: '10%'
  }
}));

function Explore() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0); //React hook that handles what museum to render onto page

  // Event handler that sets selected museum to render onto app
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  // Displays icon of the museum select dropdown
  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon}/>
    )};

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
  };


  return (
      <div>
        <Router >
          {/*Scroll component with parameter that tells how far needed to scroll down before showing*/}
          <Scroll showBelow={200} />

          {/*Pushes Element to middle*/}
          <Box position={"absolute"} left={'42.2%'}>
          <div style={{marginTop: '10vh'}}></div>
            
            {/*Museum dropdown menu*/}
            <FormControl className={classes.formControl}>
            <InputLabel><b>Museums</b></InputLabel>
            <Select
              value={value}
              onChange={handleChange}
              disableUnderline
              classes={{ root: minimalSelectClasses.select}}
              MenuProps={menuProps}
              IconComponent={iconComponent}
            >
              <MenuItem
                value={"/Explore/Louvre"}
                component={Link}
                to={"/Explore/Louvre"}
              >
                The Louvre
              </MenuItem>
              <MenuItem
                value={"/Explore/Smithsonian"}
                component={Link}
                to={"/Explore/Smithsonian"}
              >
                The Smithsonian
              </MenuItem>
            </Select>
            </FormControl>
          </Box>

          {/*Tells React Router to render different pages*/}
          <Switch>
            <Route path="/Explore/Louvre" exact component={Louvre}/>
            <Route path="/Explore/Smithsonian" component={Smithsonian} />
          </Switch>
        </Router>
      </div>
  );
}

export default Explore;
