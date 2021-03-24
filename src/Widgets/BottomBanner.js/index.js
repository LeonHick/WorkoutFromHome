import React from "react";
import { useStyles } from "../../Styles";
import { Grid } from "@material-ui/core";
import ContactDetails from "./Contact";
import Branding from "./Branding";
import SignUp from "./SignUp";

export default function BottomBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bottomBannerWrapper}>
      <Grid container className={classes.bottomBannerTop} justify="center">
        <Grid container item xs={10}>
          <Grid item xs={4}>
            <Branding />
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <ContactDetails />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={10} className={classes.bottomBannerBottomInner}>
          <SignUp />
        </Grid>
      </Grid>
    </div>
  );
}
