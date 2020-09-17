import React from "react";
import { withRouter } from "react-router-dom";

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
    const url =
      "https://swapi.dev/api/planets/" + this.props.match.params.id + "/";
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ loading: false, planetDetail: data });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h1>Loaded....</h1>
            <h3>Title : {this.state.planetDetail.name} </h3>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(PlanetDetail);
