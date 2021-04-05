import "./App.css";
import MovieList from "./components/MovieList";

import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourites from "./components/AddToFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

export default class App extends Component {
  state = { movies: [], favourites: [], searchValue: "" };

  componentDidMount() {
    this.getMovies();
  }

  handleSearch = (value) => {
    this.setState({ searchValue: value });
    this.getMovies();
  };

  handleAddToFavourite = (movie) => {
    const newFavouriteList = [...this.state.favourites, movie];
    this.setState({ favourites: newFavouriteList });
    this.saveToLocalStorage(newFavouriteList);
  };

  handleRemoveFromFavourite = (movie) => {
    const newFavouriteList = this.state.favourites.filter(
      (f) => f.id != movie.id
    );
    this.setState({ favourites: newFavouriteList });
    this.saveToLocalStorage(newFavouriteList);
  };

  getMovies = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d8f623a52b128c8a36cc1d19986b4033&query=${this.state.searchValue}&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      this.setState({ movies: responseJson.results });
    }

    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      this.setState({ favourites: movieFavourites });
    }
  };

  saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  render() {
    return (
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox
            onSearch={this.handleSearch}
            searchValue={this.state.searchValue}
          />
        </div>
        <div className="row">
          <MovieList
            movies={this.state.movies}
            favouriteComponent={AddFavourites}
            onFavouriteClick={this.handleAddToFavourite}
          />
        </div>

        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Favourites" />
        </div>
        <div className="row">
          <MovieList
            movies={this.state.favourites}
            favouriteComponent={RemoveFavourites}
            onFavouriteClick={this.handleRemoveFromFavourite}
          />
        </div>
      </div>
    );
  }
}
