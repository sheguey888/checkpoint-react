import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title, description, posterURL, rating }) {
  const [isHovered, setIsHovered] = useState(false);

  const ratingColor = (rating) => {
    if (rating >= 8) {
      return "green";
    } else if (rating >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#063d3a",
        borderRadius: "3px",
        boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        margin: "1rem 20px",
        width: "280px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={posterURL} alt={title} style={{ width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 17px",
        }}
      >
        <h2>{title}</h2>
        <p
          style={{
            backgroundColor: ratingColor(rating),
            height: "25px",
            borderRadius: "3px",
            fontWeight: "bold",
            padding: "0.25rem 0.5rem",
            marginLeft: "8px",
          }}
        >
          {rating}
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "2rem",
          position: "absolute",
          maxHeight: "100%",
          overflow: "auto",
          left: 0,
          bottom: 0,
          right: 0,
          visibility: isHovered ? "visible" : "hidden",
          transition: "visibility 0.3s ease-in",
        }}
      >
        <h3>Overview</h3>
        <p>{description}</p>
        {/* Utilisez le composant Link pour rediriger vers la page de la bande-annonce */}
        <Link
          to={`/movie/${id}`} // Utilisez l'ID du film pour construire le chemin de l'URL
          style={{
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
