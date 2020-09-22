import React from "react";

export default class VehicleShortDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleDetail: null,
      loading: true,
      vehicle: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(this.props.url);
    const data = await response.json();
    this.setState({ loading: false, vehicleDetail: data });
  }

  render() {
    return (
      <>
        <div className="box">
          {this.state.loading ? (
            <div>Loading.</div>
          ) : (
            <div className="box-content">
              <h3>Title : {this.state.vehicleDetail.name} </h3>
              <h3>Model : {this.state.vehicleDetail.model} </h3>
              <h3>Manufacturer : {this.state.vehicleDetail.manufacturer} </h3>
            </div>
          )}
        </div>
      </>
    );
  }
}
