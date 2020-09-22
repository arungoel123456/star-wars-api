import React from "react";
import { withRouter } from "react-router-dom";
import FilmShortDetail from "./FilmShortDetail";

class StarshipDetail extends React.Component {
  constructor(props) {
    super(props);
    // const filmId = props.match.filmId;
    this.state = {
      loading: true,
      starshipDetail: null,
      starship: null,
    };
  }

  async componentDidMount() {
    const url = this.props.location.state.starship;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loading: false, starshipDetail: data });
  }

  render() {
    console.log("props");
    console.log(this.props);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h3>Title : {this.state.starshipDetail.name} </h3>
            <h3>Model : {this.state.starshipDetail.model} </h3>
            <h3>Manufacturer : {this.state.starshipDetail.manufacturer} </h3>
            <h3>
              Cost in Credits : {this.state.starshipDetail.cost_in_credits}{" "}
            </h3>
            <h3>length : {this.state.starshipDetail.length} </h3>
            <h3>Crew : {this.state.starshipDetail.crew} </h3>
            <h3>Passengers : {this.state.starshipDetail.passengers} </h3>
            <h3>
              Cargo Capacity : {this.state.starshipDetail.cargo_capacity}{" "}
            </h3>
            <h3>MGLT : {this.state.starshipDetail.MGLT} </h3>
            <h3>
              Starship class : {this.state.starshipDetail.starship_class}{" "}
            </h3>

            <h3 className="list-heading">Film List:</h3>
            <ul className="filmList">
              {this.state.starshipDetail.films.map((film, id) => (
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

export default withRouter(StarshipDetail);
