import React from "react";
import { withRouter } from "react-router-dom";
import FilmShortDetail from "./FilmShortDetail";

class PlanetDetail extends React.Component {
  constructor(props) {
    super(props);
    // const filmId = props.match.filmId;
    this.state = {
      loading: true,
      planetDetail: null,
    };
  }

  async componentDidMount() {
    const url = this.props.location.state.planet;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ loading: false, planetDetail: data });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h3>Name : {this.state.planetDetail.name} </h3>
            <h3>
              Rotation Period : {this.state.planetDetail.rotation_period}{" "}
            </h3>
            <h3>Orbital Period : {this.state.planetDetail.orbital_period} </h3>
            <h3>Diameter : {this.state.planetDetail.diameter} </h3>
            <h3>Climate : {this.state.planetDetail.climate} </h3>
            <h3>Gravity : {this.state.planetDetail.gravity} </h3>
            <h3>Terrain : {this.state.planetDetail.terrain} </h3>
            <h3 className="list-heading">Film List:</h3>
            <ul className="filmList">
              {this.state.planetDetail.films.map((film, id) => (
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
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(PlanetDetail);
