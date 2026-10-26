import React from "react";

export function FilterForm({ filterText, onFilterChange }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Filter posts by title..."
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ padding: "8px", width: "100%", maxWidth: "400px" }}
      />
    </div>
  );
}