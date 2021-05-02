import React from "react";
import Nav from "./components/Pages/Nav";
import Home from "./components/Pages/Home";
import Map from "./components/Pages/Map";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/components/Pages/Map" component={Map} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;