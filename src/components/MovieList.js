import React, { Component } from "react";

export default class MovieList extends Component {
  render() {
    const FavouriteComponent = this.props.favouriteComponent;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
