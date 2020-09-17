import React from "react";
import { withRouter } from "react-router-dom";

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
    // const filmId = props.match.filmId;
    this.state = {
      loading: true,
      filmDetail: null,
    };
  }

  async componentDidMount() {
    const url =
      "https://swapi.dev/api/films/" + this.props.match.params.id + "/";
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ loading: false, filmDetail: data });
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
            <h3>Title : {this.state.filmDetail.title} </h3>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(FilmDetail);
