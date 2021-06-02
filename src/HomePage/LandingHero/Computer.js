import React from "react";
import { Grid, Container, Hidden } from "@material-ui/core";
import LandingTitle from "../LandingTitle";

export default function LandingHeroComputer({ classes }) {
  return (
    <>
      <div className={classes && classes.landingBackground}></div>
      <div
        style={{
          height: "100vh",
          padding: 60,
          //color: "white"
        }}
      >
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <div className={classes && classes.landingInfoBox}>
              <LandingTitle />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
