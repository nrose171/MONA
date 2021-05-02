import React from "react";
import "./Pages.css";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Nav() {
    
    return (
        <nav>
            <Button component={ Link } to="/" variant="contained" color="primary">
                Home
            </Button>
            <Button component={ Link } to="/components/Pages/Map" variant="contained" color="primary">
                Map
            </Button>
        </nav>
    );
}

export default Nav;