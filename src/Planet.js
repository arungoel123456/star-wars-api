import React from "react";
import Button from "@atlaskit/button";

export default class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allPlanets: null,
      pageNumber: 1,
      nextUrl: null,
      prevUrl: null,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  async componentDidMount() {
    const url = "https://swapi.dev/api/planets/?page=1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      allPlanets: data.results,
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
      allPlanets: data.results,
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
      allPlanets: data.results,
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
              <h1 className="list-heading">Planets List</h1>
              <ul className="filmList">
                {this.state.allPlanets.map((planet, id) => (
                  <li
                    key={id}
                    onClick={() => {
                      this.props.history.push({
                        pathname: "planetDetail",
                        state: { planet: planet.url },
                      });
                    }}
                  >
                    <div className="filmCard">
                      <h3>Name: {planet.name} </h3>
                      <h3>Rotation Period: {planet.rotation_period} </h3>
                      <h3>Climate: {planet.climate} </h3>
                      <h3>Terrain: {planet.terrain} </h3>
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
