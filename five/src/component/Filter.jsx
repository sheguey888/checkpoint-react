import React from "react";

function Filter({
  filterTitle,
  filterRate,
  onFilterTitleChange,
  onFilterRateChange,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: "0",
        padding: "20px",
        display: "flex",
      }}
    >
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => onFilterTitleChange(e.target.value)}
        style={{
          backgroundColor: "transparent",
          border: "2px solid #004643",
          borderRadius: "50px",
          color: "#fff",
          padding: "0.5rem 1rem",
          marginRight: "50px",
          outline: "none",
        }}
      />
      <label htmlFor="ratingRange" style={{ marginRight: "10px" }}>
        Filter by rate <span>[{filterRate}]</span>
      </label>
      {/* Inverse min and max values */}
      <input
        id="ratingRange"
        type="range"
        min="0"
        max="11"
        value={filterRate}
        onChange={(e) => onFilterRateChange(e.target.value)}
        style={{ marginTop: "-10px" }}
      />
    </div>
  );
}

export default Filter;
