import React from "react";
import "./App.css";
import Film from "./Film";
import Planet from "./Planet";
import Starship from "./Starship";
import Vehicle from "./Vehicle";
import FilmDetail from "./FilmDetail";
import PlanetDetail from "./PlanetDetail";
import StarshipDetail from "./StarshipDetail";
import VehicleDetail from "./VehicleDetail";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1> Star Wars </h1>
          {/* <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink> */}

          <NavLink to="/film" exact activeClassName="active">
            Film
          </NavLink>
          <br />
          <NavLink to="/planet" activeClassName="active">
            Planet
          </NavLink>
          <br />
          <NavLink to="/starship" activeClassName="active">
            Starship
          </NavLink>
          <br />
          <NavLink to="/vehicle" activeClassName="active">
            Vehicle
          </NavLink>

          <hr />
          <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route path="/film" component={Film} />
            <Route path="/planet" component={Planet} />
            <Route path="/starship" component={Starship} />
            <Route path="/vehicle" component={Vehicle} />
            <Route path="/filmDetail/:id" component={FilmDetail} />
            <Route path="/planetDetail/:id" component={PlanetDetail} />
            <Route path="/starshipDetail" component={StarshipDetail} />
            <Route path="/vehicleDetail" component={VehicleDetail} />

            {/* <Route component={Notfound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
