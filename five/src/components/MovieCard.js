import React, { useState } from "react";

function MovieCard({ title, description, posterURL, rating }) {
  const [isHovered, setIsHovered] = useState(false);

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
      //  hover effect
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
            backgroundColor: "#f9bc60",
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
          visibility: isHovered ? "visible" : "hidden", // visibility
          transition: "visibility 0.3s ease-in",
        }}
      >
        <h3>Overview</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
