import React from "react";

export function Post({ title, body }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "8px", borderRadius: "4px" }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}