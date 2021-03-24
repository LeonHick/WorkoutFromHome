import React from "react";
import { Grid, Container } from "@material-ui/core";
import { useStyles } from "../Styles";
import { LandingTitle } from "../Widgets";

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.landingBackground}></div>
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
            <div className={classes.landingInfoBox}>
              <LandingTitle />
              {/* <div>description</div>
              <div>other fillery bits, maybe some link squares</div> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
