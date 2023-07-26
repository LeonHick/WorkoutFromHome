import { Grid, Typography, withWidth } from "@material-ui/core";
import React from "react";
import { footerStyles } from "../../Styles";

export default withWidth()(({ width }) => {
  const classes = footerStyles();
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={window.innerHeight < 600 && width !== "xs" ? 6 : 0}
        ></Grid>
        <Grid item xs={window.innerHeight < 600 && width !== "xs" ? 6 : 12}>
          <Grid style={{ paddingTop: 20 }} item xs={12}>
            <Typography
              variant="h3"
              align={"center"}
              className={classes.brandNameTop}
            >
              Workout
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              From Home
            </Typography>
          </Grid>
          <Typography
            align="center"
            style={{ paddingTop: 40 }}
            variant="h6" // className={classes.landingTitleMainSecondary}
          >
            No Gym? No Problem.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
});
