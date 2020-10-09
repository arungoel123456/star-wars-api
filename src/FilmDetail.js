import React from "react";
import { withRouter } from "react-router-dom";
import CharacterShortDetail from "./CharacterShortDetail";
import "./FilmDetail.css";
import PlanetShortDetail from "./PlanetShortDetail";
import StarshipShortDetail from "./StarshipShortDetail";
import VehicleShortDetail from "./VehicleShortDetail";
import Button from "@atlaskit/button";

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
    // const filmId = props.match.filmId;
    this.state = {
      loading: true,
      filmDetail: null,
    };
  }

  async componentDidMount() {
    const url = this.props.location.state.film;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loading: false, filmDetail: data });
  }

  render() {
    console.log("Printing Props in film Detail ");
    console.log(this.props);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h3>Title : {this.state.filmDetail.title} </h3>
            <h4>Producer: {this.state.filmDetail.producer} </h4>
            <h4>Director: {this.state.filmDetail.director} </h4>
            <h4>Created at: {this.state.filmDetail.release_date} </h4>
            <Button
              onClick={() => {
                this.props.history.push({
                  pathname: "/openCrawl",
                  state: { filmDetail: this.state.filmDetail },
                });
              }}
              appearance="primary"
            >
              {" "}
              Checkout Open Crawl{" "}
            </Button>
            <h3 className="list-heading"> Characters </h3>

            <ul className="characterList">
              {this.state.filmDetail.characters.map((character, id) => (
                <li
                  key={id}
                  onClick={() => {
                    this.props.history.push({
                      pathname: "/characterFullDetail",
                      state: { character: character },
                    });
                  }}
                >
                  {" "}
                  <CharacterShortDetail url={character} />
                </li>
              ))}
            </ul>

            <h3 className="list-heading">Planets:</h3>
            <ul className="characterList">
              {this.state.filmDetail.planets.map((planet, id) => (
                <li
                  key={id}
                  onClick={() => {
                    this.props.history.push({
                      pathname: "/planetDetail",
                      state: { planet: planet },
                    });
                  }}
                >
                  <PlanetShortDetail url={planet} />
                </li>
              ))}
            </ul>

            <h3 className="list-heading">Starships:</h3>
            <ul className="characterList">
              {this.state.filmDetail.starships.map((starship, id) => (
                <li
                  key={id}
                  onClick={() => {
                    this.props.history.push({
                      pathname: "/starshipDetail",
                      state: { starship: starship },
                    });
                  }}
                >
                  <StarshipShortDetail url={starship} />
                </li>
              ))}
            </ul>

            <h3 className="list-heading">Vehicles:</h3>
            <ul className="characterList">
              {this.state.filmDetail.vehicles.map((vehicle, id) => (
                <li
                  key={id}
                  onClick={() => {
                    this.props.history.push({
                      pathname: "/vehicleDetail",
                      state: { vehicle: vehicle },
                    });
                  }}
                >
                  <VehicleShortDetail url={vehicle} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(FilmDetail);
