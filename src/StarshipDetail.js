import React from "react";
import { withRouter } from "react-router-dom";

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
    const url = this.props.location.state.starship.url;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ loading: false, starshipDetail: data });
  }

  render() {
    console.log(this.state.starship);
    console.log(this.props);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h1>Loaded....</h1>
            <h3>Title : {this.state.starshipDetail.name} </h3>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(StarshipDetail);
