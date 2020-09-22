import React from "react";
import { Power2, TimelineLite } from "gsap";
import "./OpenCrawl.css";
import starWarsLogo from "./starWarsLogo.png";

export default class OpenCrawl extends React.Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef();
    this.logo = React.createRef();
    this.content = React.createRef();
  }

  componentDidMount() {
    const tl = new TimelineLite();

    tl.to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, { opacity: 0 })
      .set(this.logo.current, { opacity: 1, scale: 2.75 })
      .to(this.logo.current, 8, {
        scale: 0.05,
        ease: Power2.easeOut,
      })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5")
      .to(this.content.current, 200, { top: "-170%" });
  }

  render() {
    console.log(this.props.location.state);
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <img src={starWarsLogo} alt="Code Wars logo" />
        </section>
        <section className="crawl">
          <div className="content" ref={this.content}>
            <h1 className="title">
              {" "}
              Episode
              {this.props.location.state.filmDetail.episode_id}{" "}
            </h1>
            <h2 className="subtitle">
              {" "}
              {this.props.location.state.filmDetail.title}{" "}
            </h2>
            <p>{this.props.location.state.filmDetail.opening_crawl}</p>
          </div>
        </section>
      </div>
    );
  }
}
