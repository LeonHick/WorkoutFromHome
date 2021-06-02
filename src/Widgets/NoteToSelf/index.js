import React from "react";

export default function NoteToSelf({ children }) {
  return (
    <div style={{ padding: `20px 20px 20px 0px` }}>
      <span
        style={{
          padding: 1,
          backgroundColor: "green",
          color: "white",
          borderRadius: "0px 10px 10px 0px",
        }}
      >
        {children}
      </span>
    </div>
  );
}
