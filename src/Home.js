import React from "react";
import logo from "./logo.svg";
import "./Home.css";
import film from "./assets/film.jpg";
import planet from "./assets/planet.png";
import starship from "./assets/starship.png";
import vehicle from "./assets/vehicle.png";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-page-container">
          <div className="home-page-image">
            <img
              src={film}
              height="100%"
              width="100%"
              onClick={() => {
                this.props.history.push({
                  pathname: "/film",
                });
              }}
            />
          </div>
          <div className="home-page-image">
            <img
              src={planet}
              height="100%"
              width="100%"
              onClick={() => {
                this.props.history.push({
                  pathname: "/planet",
                });
              }}
            />
          </div>
          <div className="home-page-image">
            <img
              src={starship}
              height="100%"
              width="100%"
              onClick={() => {
                this.props.history.push({
                  pathname: "/starship",
                });
              }}
            />
          </div>
          <div className="home-page-image">
            <img
              src={vehicle}
              height="100%"
              width="100%"
              onClick={() => {
                this.props.history.push({
                  pathname: "/vehicle",
                });
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
