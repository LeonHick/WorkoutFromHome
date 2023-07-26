import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../Styles";

export default function LandingText() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.contentPadding}
      >
        <Grid spacing={10} container item xs={12} sm={8}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", paddingBottom: 30 }}
            >
              {/* Why workout from home? */}
              How can we help?
            </Typography>
            <Typography paragraph>
              Getting <span style={{ fontWeight: "bold" }}>fitter</span>,{" "}
              <span style={{ fontWeight: "bold" }}>stronger</span> and{" "}
              <span style={{ fontWeight: "bold" }}>healthier</span> often comes
              with restrictive memberships, steep costs and tough mental
              barriers. Not anymore! Here you can find{" "}
              <span style={{ fontWeight: "bold" }}>free</span>,{" "}
              <span style={{ fontWeight: "bold" }}>detailed</span> work out
              plans for you to do in your own time, from the comfort of your own{" "}
              <span style={{ fontWeight: "bold" }}>home</span>.
              {/* Whether your trying to save{" "}
              <span style={{ fontWeight: "bold" }}>time</span>,{" "}
              <span style={{ fontWeight: "bold" }}>money</span> or get that
              extra bit of{" "}
              <span style={{ fontWeight: "bold" }}>motivation</span>, working
              out from home is a great way to get in shape while saving on the
              gym membership! */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", paddingBottom: 30 }}
            >
              What equipment do I need?
            </Typography>
            <Typography paragraph>
              Building up an arsenal of home gym equipment can be fun, but all
              you'll need for one of our workouts is a set of{" "}
              <span style={{ fontWeight: "bold" }}>dumbbells</span> and a bit of{" "}
              <span style={{ fontWeight: "bold" }}>space</span>.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
