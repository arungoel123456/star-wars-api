import React from "react";
import { withRouter } from "react-router-dom";
import FilmShortDetail from "./FilmShortDetail";

class VehicleDetail extends React.Component {
  constructor(props) {
    super(props);
    // const filmId = props.match.filmId;
    this.state = {
      loading: true,
      vehicleDetail: null,
      vehicle: null,
    };
  }

  async componentDidMount() {
    const url = this.props.location.state.vehicle;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ loading: false, vehicleDetail: data });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h3>Name : {this.state.vehicleDetail.name} </h3>
            <h3>Model : {this.state.vehicleDetail.model} </h3>
            <h3>Manufacturer : {this.state.vehicleDetail.manufacturer} </h3>
            <h3>Length : {this.state.vehicleDetail.length} </h3>
            <h3>Crew : {this.state.vehicleDetail.crew} </h3>
            <h3>Passsengers : {this.state.vehicleDetail.passengers} </h3>
            <h3>Cargo Capacity : {this.state.vehicleDetail.cargo_capacity} </h3>
            <h3>Consumables : {this.state.vehicleDetail.consumables} </h3>
            <h3>Vehicle Class : {this.state.vehicleDetail.vehicle_class} </h3>
            <h3 className="list-heading">Film List:</h3>
            <ul className="filmList">
              {this.state.vehicleDetail.films.map((film, id) => (
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

export default withRouter(VehicleDetail);
