import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import moviesData from "./component/movies";
import AddMovieForm from "./component/AddMovies";
import MovieTrailer from "./component/MovieTrailer";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterTitleChange = (title) => {
    setFilterTitle(title);
  };

  const handleFilterRateChange = (rate) => {
    setFilterRate(rate);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (!filterRate || movie.rating >= parseFloat(filterRate))
    );
  });

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1
                  style={{
                    background: "#ddd",
                    padding: "20px 50px",
                    margin: "-0px",
                  }}
                >
                  My Movie List
                </h1>
                <AddMovieForm onAddMovie={handleAddMovie} />
                <Filter
                  filterTitle={filterTitle}
                  filterRate={filterRate}
                  onFilterTitleChange={handleFilterTitleChange}
                  onFilterRateChange={handleFilterRateChange}
                />
                <MovieList movies={filteredMovies} />
              </div>
            }
          />
          <Route path="/movie/:movieId" element={<MovieTrailer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
