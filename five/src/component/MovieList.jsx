import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const movieData = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      description={movie.description}
      posterURL={movie.posterURL}
      rating={movie.rating}
    />
  ));
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{movieData}</div>;
}

export default MovieList;
