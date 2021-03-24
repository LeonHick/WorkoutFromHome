import React from "react";
import { Grid } from "@material-ui/core";

export default function ArticleMargin({ children }) {
  return (
    <Grid container>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  );
}
