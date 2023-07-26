import { Typography, withWidth } from "@material-ui/core";
import React from "react";

export default withWidth()(({ children, width }) => {
  return (
    <>
      <br />
      <br />
      <Typography
        variant={width === "xs" ? "h4" : "h3"}
        style={{
          textTransform: "uppercase",
          ...(width === "xs" && { fontWeight: "bold" }),
        }}
      >
        {children}
      </Typography>
    </>
  );
});
