import React from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Louvre from "./Louvre"

function Explore() {
  return (
      <div>
          <h1 style={{marginTop: '10vh'}}> Explore</h1>
          <Router>
      <div>
        <ul>
          <li>
            <Link to="/Pages/Louvre">Home</Link>
          </li>
        </ul>

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