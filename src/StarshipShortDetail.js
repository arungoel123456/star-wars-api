import React from "react";

export default class StarshipShortDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starshipDetail: null,
      loading: true,
      starship: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(this.props.url);
    const data = await response.json();
    this.setState({ loading: false, starshipDetail: data });
  }

  render() {
    return (
      <>
        <div className="box">
          {this.state.loading ? (
            <div>Loading.</div>
          ) : (
            <div className="box-content">
              <h3>Name : {this.state.starshipDetail.name} </h3>
              <h3>Model: {this.state.starshipDetail.model} </h3>
              <h3>Manufacturer : {this.state.starshipDetail.manufacturer} </h3>
              <h3>Length : {this.state.starshipDetail.length} </h3>
            </div>
          )}
        </div>
      </>
    );
  }
}
