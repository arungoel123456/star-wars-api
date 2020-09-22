import React from "react";

export default class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allVehicles: null,
      nextUrl: null,
      prevUrl: null,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  async componentDidMount() {
    const url = "https://swapi.dev/api/vehicles/?page=1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      allVehicles: data.results,
      loading: false,
      nextUrl: data.next,
      prevUrl: data.previous,
    });
  }

  async nextPage() {
    this.setState({ loading: true });
    const response = await fetch(this.state.nextUrl);
    const data = await response.json();
    this.setState({
      allVehicles: data.results,
      loading: false,
      nextUrl: data.next,
      prevUrl: data.previous,
    });
    console.log(this.state.nextUrl);
  }

  async prevPage() {
    this.setState({ loading: true });
    const response = await fetch(this.state.prevUrl);
    const data = await response.json();
    this.setState({
      allVehicles: data.results,
      loading: false,
      nextUrl: data.next,
      prevUrl: data.previous,
    });
  }

  render() {
    return (
      <>
        <div>
          {this.state.loading ? (
            <div> Loading... </div>
          ) : (
            <div>
              <h1 className="list-heading">Vehicles List</h1>
              <ul className="filmList">
                {this.state.allVehicles.map((vehicle, id) => (
                  <li
                    key={id}
                    onClick={() => {
                      this.props.history.push({
                        pathname: "vehicleDetail",
                        state: { vehicle: vehicle.url },
                      });
                    }}
                  >
                    <div className="filmCard">
                      <h4>Name: {vehicle.name} </h4>
                      <h4>Model : {vehicle.model} </h4>
                      <h4>Manufacturer : {vehicle.manufacturer} </h4>
                      <h4>Cargo Capacity : {vehicle.cargo_capacity} </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bottom-buttons">
            <button
              onClick={this.prevPage}
              disabled={this.state.prevUrl == null}
            >
              Prev
            </button>
            <button
              onClick={this.nextPage}
              disabled={this.state.nextUrl == null}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
