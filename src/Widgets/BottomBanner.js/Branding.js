import { Grid, Typography, withWidth } from "@material-ui/core";
import React from "react";

const Line = ({ classes }) => <div className={classes.logoLine} />;

const BrandName = ({ classes, width }) => (
  <>
    <Grid item xs={12}>
      <Typography
        variant={width === "xs" ? "h5" : "h3"}
        align="center"
        className={classes.brandNameTop}
        style={{
          ...(width === "xs" && {
            fontWeight: "bold", // backgroundColor: "red"
          }),
        }}
      >
        Workout
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography
        variant={width === "xs" ? "h6" : "h4"}
        style={{
          ...(width === "xs" && {
            fontWeight: "normal",
            // backgroundColor: "red",
          }),
        }}
        align="center"
      >
        From Home
      </Typography>
    </Grid>
  </>
);

export default withWidth()(({ classes, width }) => {
  return (
    <div style={{ paddingTop: 45 }}>
      <Grid container>
        <Grid item xs={4} style={{ position: "relative" }}>
          <Line {...{ classes }} />
        </Grid>
        <Grid item xs={4} container>
          <BrandName {...{ classes, width }} />
        </Grid>
        <Grid item xs={4} style={{ position: "relative" }}>
          <Line {...{ classes }} />
        </Grid>
      </Grid>
    </div>
  );
});
