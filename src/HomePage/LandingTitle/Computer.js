import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../Styles";

export default function LandingTitleComputer() {
  const classes = useStyles();
  return (
    <Typography>
      <Typography
        variant="h1"
        className={classes.landingTitleMain}
        // style={{ color: "blue" }}
      >
        Workout
        <span className={classes.landingTitleMainSecondary}> From</span> Home
      </Typography>
      <br />
      <Typography variant="h3" className={classes.landingTitleMainSecondary}>
        No Gym? No Problem.
      </Typography>
      {/* </Typography> */}
      {/* <Typography variant="h3"> */}
      {/* No Problem.</Typography> */}
      {/* <Typography variant="h2">
        Helping you get in shape, out of the gym
      </Typography> */}
    </Typography>
  );
}
