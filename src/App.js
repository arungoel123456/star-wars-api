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
import CharacterFullDetail from "./CharacterFullDetail";
import OpenCrawl from "./OpenCrawl";
import Home from "./Home";

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
          <div className="header">
            <h1> Star Wars </h1>
            <div className="navLinks">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
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
            </div>
          </div>
          <hr />

          <div>
            <div className="main-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/film" component={Film} />
                <Route path="/planet" component={Planet} />
                <Route path="/starship" component={Starship} />
                <Route path="/vehicle" component={Vehicle} />
                <Route path="/filmDetail" component={FilmDetail} />
                <Route path="/planetDetail" component={PlanetDetail} />
                <Route path="/starshipDetail" component={StarshipDetail} />
                <Route path="/vehicleDetail" component={VehicleDetail} />
                <Route
                  path="/characterFullDetail"
                  component={CharacterFullDetail}
                />
                <Route path="/openCrawl" component={OpenCrawl} />

                {/* <Route component={Notfound} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
