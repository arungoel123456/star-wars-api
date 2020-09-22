import React from "react";

export default class PlanetShortDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetDetail: null,
      loading: true,
      planet: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(this.props.url);
    const data = await response.json();
    this.setState({ loading: false, planetDetail: data });
  }

  render() {
    return (
      <>
        <div className="box">
          {this.state.loading ? (
            <div>Loading.</div>
          ) : (
            <div>
              <div className="box-content">
                <h3>Name: {this.state.planetDetail.name} </h3>
                <h3>
                  Rotation Period: {this.state.planetDetail.rotation_period}{" "}
                </h3>
                <h3>Climate: {this.state.planetDetail.climate} </h3>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
