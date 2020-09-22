import React from "react";
import FilmShortDetail from "./FilmShortDetail";
import StarshipShortDetail from "./StarshipShortDetail";
import VehicleShortDetail from "./VehicleShortDetail";

export default class CharacterFullDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      characterDetail: null,
    };
  }

  async componentDidMount() {
    const url = this.props.location.state.character;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loading: false, characterDetail: data });
  }

  render() {
    console.log("props");
    console.log(this.props.location);
    return (
      <>
        <div>
          {this.state.loading ? (
            <div> Loading... </div>
          ) : (
            <div>
              <h3>Name: {this.state.characterDetail.name}</h3>
              <h3>Height: {this.state.characterDetail.height}</h3>
              <h3>Hair Colour: {this.state.characterDetail.hair_color}</h3>
              <h3>Skin Colour: {this.state.characterDetail.skin_color}</h3>
              <h3>Eye Colour: {this.state.characterDetail.eye_color}</h3>

              <h3 className="list-heading">Film List:</h3>
              <ul className="filmList">
                {this.state.characterDetail.films.map((film, id) => (
                  <li
                    key={id}
                    onClick={() => {
                      this.props.history.push({
                        pathname: "/filmDetail",
                        state: { film: film },
                      });
                    }}
                  >
                    <FilmShortDetail url={film} />
                  </li>
                ))}
              </ul>

              <h3 className="list-heading">Starships:</h3>
              <ul className="characterList">
                {this.state.characterDetail.starships.map((starship, id) => (
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
                {this.state.characterDetail.vehicles.map((vehicle, id) => (
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
      </>
    );
  }
}
