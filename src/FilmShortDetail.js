import React from "react";

export default class FilmShortDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmDetail: null,
      loading: true,
      film: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(this.props.url);
    const data = await response.json();
    this.setState({ loading: false, filmDetail: data });
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div className="box">
          {this.state.loading ? (
            <div>Loading.</div>
          ) : (
            <div>
              <div className="box-content">
                <h4> Title : {this.state.filmDetail.title} </h4>
                <h4>Producer: {this.state.filmDetail.producer} </h4>
                <h4>Director: {this.state.filmDetail.director} </h4>
                <h4>Created at: {this.state.filmDetail.created} </h4>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
