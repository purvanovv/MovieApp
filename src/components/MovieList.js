import React, { Component } from "react";
import Paddle from "./Paddle";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
  }

  handleScroll = (direction) => {
    if (direction === "left") {
      this.navRef.current.scrollLeft -= 700;
    } else {
      this.navRef.current.scrollLeft += 700;
    }
  };

  render() {
    const FavouriteComponent = this.props.favouriteComponent;
    return (
      <div className="list-movies-wrapper">
        <div class="row list-movies" ref={this.navRef}>
          {this.props.movies.map((movie) => (
            <div
              key={movie.id}
              className="image-container d-flex justify-content-start m-3"
            >
              <img
                src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                alt="movie"
              ></img>
              <div
                onClick={() => this.props.onFavouriteClick(movie)}
                className="overlay d-flex align-items-center justify-content-center"
              >
                <FavouriteComponent />
              </div>
            </div>
          ))}
        </div>
        <div className="paddles">
          <button
            onClick={() => this.handleScroll("left")}
            className="left-paddle paddle"
          >
            <Paddle position="left" />
          </button>
          <button
            onClick={() => this.handleScroll("right")}
            className="right-paddle paddle"
          >
            <Paddle position="right" />
          </button>
        </div>
      </div>
    );
  }
}
