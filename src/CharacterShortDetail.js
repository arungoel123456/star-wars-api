import React from "react";
import "./CharacterShortDetail.css";
import Button from "@atlaskit/button";

export default class CharacterShortDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterDetail: null,
      loading: true,
      character: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(this.props.url);
    const data = await response.json();
    this.setState({ loading: false, characterDetail: data });
  }

  render() {
    return (
      <>
        <div className="box">
          {this.state.loading ? (
            <div>
              {" "}
              <Button appearance="primary" isLoading>
                Loading button
              </Button>
            </div>
          ) : (
            <div>
              <div className="box-content">
                <h3>Name: {this.state.characterDetail.name}</h3>
                <h3>Height: {this.state.characterDetail.height}</h3>
                <h3>Hair Colour: {this.state.characterDetail.hair_color}</h3>
                <h3>Skin Colour: {this.state.characterDetail.skin_color}</h3>
                <h3>Eye Colour: {this.state.characterDetail.eye_color}</h3>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
