import React from "react";
import "./Film.css";

export default class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allFilms: null,
    };
  }
  async componentDidMount() {
    const url = "https://swapi.dev/api/films/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ allFilms: data.results, loading: false });
  }

  render() {
    return (
      <>
        <div>
          {this.state.loading ? (
            <div> Loading </div>
          ) : (
            <div>
              <ul className="filmList">
                {this.state.allFilms.map((currFilm, id) => (
                  <li
                    key={id}
                    onClick={() => {
                      this.props.history.push(`filmDetail/${id + 1}`);
                    }}
                  >
                    <div className="filmCard">
                      <h4> Title : {currFilm.title} </h4>
                      <h4>Producer: {currFilm.producer} </h4>
                      <h4>Director: {currFilm.director} </h4>
                      <h4>Created at: {currFilm.created} </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="c-content">
          <h3>This is our Film Detail Page.</h3>

          {/* <Route path="/film/filmDetail/:id" component={FilmDetail} /> */}
        </div>
      </>
    );
  }
}
