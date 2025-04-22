// AddMovieForm.js
import React, { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };
    onAddMovie(newMovie);

    // Clear form fields after adding the movie
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2
        style={{
          padding: "10px 30px",
        }}
      >
        Add New Movie
      </h2>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            outline: "none",
            border: "none",
            borderBottom: "2px solid black",
            backgroundColor: "transparent",
            borderRadius: "3px",
            boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            margin: "1rem",
            width: "300px",
            padding: "20px ",
            color: "#fff",
          }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            outline: "none",
            border: "none",
            borderBottom: "2px solid black",
            backgroundColor: "transparent",
            borderRadius: "3px",
            boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            margin: "1rem",
            width: "300px",
            padding: "20px ",
            color: "#fff",
          }}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          required
          style={{
            outline: "none",
            border: "none",
            borderBottom: "2px solid black",
            backgroundColor: "transparent",
            borderRadius: "3px",
            boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            margin: "1rem",
            width: "300px",
            padding: "20px ",
            color: "#fff",
          }}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          step="0.1"
          min="0"
          max="10"
          required
          style={{
            outline: "none",
            border: "none",
            borderBottom: "2px solid black",
            backgroundColor: "transparent",
            borderRadius: "3px",
            boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            margin: "1rem",
            width: "300px",
            padding: "20px ",
            color: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            border: "none",
            color: "#001e1d",
            fontWeight: "bold",
            margin: "15px",
            padding: "0 50px ",
            backgroundColor: "#f9bc60",
            borderRadius: "3px",
            transition: "0.5s",
          }}
          //  hover effect
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#abd1c6";
            e.target.style.letterSpacing = "2px";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f9bc60";
            e.target.style.letterSpacing = "0px";
          }}
        >
          Add Movie
        </button>
      </div>
    </form>
  );
}

export default AddMovieForm;
