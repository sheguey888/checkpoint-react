import React from "react";
import { Link, useParams } from "react-router-dom";
import movies from "./movies";

function MovieTrailer() {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(movieId));

  if (!movie) {
    return (
      <div>
        <Link to="/" style={{ backgroundColor: "#f9bc60" }}>
          Homepage
        </Link>
        <p>{movieId}</p>
        <h2>Movie not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "12px 45px" }}>
      <Link
        to="/"
        style={{
          border: "none",
          textDecoration: "none",
          color: "#001e1d",
          fontWeight: "bold",
          padding: "5px 50px ",
          backgroundColor: "#f9bc60",
          borderRadius: "3px",
        }}
      >
        Homepage
      </Link>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <video
        controls
        width="560"
        height="315"
        src="{movie.trailerLink}"
        type="video/mp4"
        style={{ margin: "10px 0" }}
      ></video>
    </div>
  );
}

export default MovieTrailer;
