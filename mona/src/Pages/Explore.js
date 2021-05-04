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
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  const minimalSelectClasses = useMinimalSelectStyles();

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
            <Scroll showBelow={200} />
            <Box position={"absolute"} left={'42.2%'}>
            <h1 style={{marginTop: '10vh'}}></h1>
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
            <Switch>
              <Route path="/Explore/Louvre" exact component={Louvre}/>
              <Route path="/Explore/Smithsonian" component={Smithsonian} />
            </Switch>
        </Router>
      </div>
  );
}

export default Explore;
