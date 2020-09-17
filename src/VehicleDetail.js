import React from "react";
import { withRouter } from "react-router-dom";

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
    const url = this.props.location.state.vehicle.url;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ loading: false, vehicleDetail: data });
  }

  render() {
    // console.log("Printing Props");
    // console.log(this.props.match.params.id);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h1>Loaded....</h1>
            <h3>Title : {this.state.vehicleDetail.name} </h3>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(VehicleDetail);
