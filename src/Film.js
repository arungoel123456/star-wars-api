import React from "react";
import "./Film.css";
import ls from "local-storage";

export default class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allFilms: null,
    };
  }
  async componentDidMount() {
    if (ls.get("film-list") === null) {
      const url = "https://swapi.dev/api/films/";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ allFilms: data.results, loading: false });
      ls.set("film-list", data.results);
      console.log("from Api");
    } else {
      this.setState({ allFilms: ls.get("film-list"), loading: false });
      console.log("From Local Storage");
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div>
          {this.state.loading ? (
            <div> Loading </div>
          ) : (
            <div>
              <h1 className="list-heading">Films List</h1>
              <ul className="filmList">
                {this.state.allFilms.map((currFilm, id) => (
                  <li
                    key={id}
                    onClick={() => {
                      this.props.history.push({
                        pathname: "filmDetail",
                        state: { film: currFilm.url },
                      });
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
      </>
    );
  }
}
