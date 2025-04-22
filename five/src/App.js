// App.js
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import moviesData from "./components/movies";
import AddMovieForm from "./components/AddMovies";

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
    <div className="App">
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
  );
};

export default App;
