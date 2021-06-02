import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { footerStyles } from "../../Styles";

export default function LandingTitlePhone() {
  const classes = footerStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          className={classes.brandNameTop}
        >
          Workout
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          From Home
        </Typography>
      </Grid>
    </>
  );
}
