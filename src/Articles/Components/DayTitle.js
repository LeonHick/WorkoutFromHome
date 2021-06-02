import { Typography } from "@material-ui/core";
import React from "react";

export default function DayTitle({ children }) {
  return (
    <>
      <br />
      <br />
      <Typography variant="h3" style={{ textTransform: "uppercase" }}>
        {children}
      </Typography>
    </>
  );
}
