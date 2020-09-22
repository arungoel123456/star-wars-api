import React from "react";

export default class Starship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allStarships: null,
      nextUrl: null,
      prevUrl: null,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  async componentDidMount() {
    const url = "https://swapi.dev/api/starships/?page=1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      allStarships: data.results,
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
      allStarships: data.results,
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
      allStarships: data.results,
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
              <h1 className="list-heading">Starships List</h1>
              <ul className="filmList">
                {this.state.allStarships.map((starship, id) => (
                  <li
                    key={id}
                    onClick={() => {
                      this.props.history.push({
                        pathname: "starshipDetail",
                        state: { starship: starship.url },
                      });
                    }}
                  >
                    <div className="filmCard">
                      <h4>Name: {starship.name} </h4>
                      <h4>Model : {starship.model} </h4>
                      <h4>Manufacturer : {starship.manufacturer} </h4>
                      <h4>Length : {starship.length} </h4>
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
