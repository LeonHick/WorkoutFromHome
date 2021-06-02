import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Line = ({ classes }) => <div className={classes.logoLine} />;

const BrandName = ({ classes }) => (
  <>
    <Grid item xs={12}>
      <Typography variant="h3" align="center" className={classes.brandNameTop}>
        Workout
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" align="center">
        From Home
      </Typography>
    </Grid>
  </>
);

export default function Branding({ classes }) {
  return (
    <div style={{ paddingTop: 45 }}>
      <Grid container>
        <Grid item xs={4} style={{ position: "relative" }}>
          <Line {...{ classes }} />
        </Grid>
        <Grid item xs={4} container>
          <BrandName {...{ classes }} />
        </Grid>
        <Grid item xs={4} style={{ position: "relative" }}>
          <Line {...{ classes }} />
        </Grid>
      </Grid>
    </div>
  );
}
