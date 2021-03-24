import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import fullBody from "../Images/fullbody_preview.png";
import { Link } from "react-router-dom";
import { useStyles } from "../Styles";
import placeholder from "../Images/dumbell_squat_wider.jpg";

export default function ({ location: { pathname } }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <img src={fullBody} className={classes.workoutSelectImage} />
      </Grid>
      <Grid
        item
        xs={4}
        className={classes.workoutSelectGrid}
        component={Link}
        to={`${pathname}/show?routine=fullbody`}
      >
        Full Body
      </Grid>
      <Grid item xs={4} className={classes.workoutSelectGridMiddle}>
        <img src={placeholder} className={classes.workoutSelectImage} />
        Legs
      </Grid>
      <Grid item xs={4} className={classes.workoutSelectGrid}>
        <img src={placeholder} className={classes.workoutSelectImage} />
        Chest
      </Grid>
      <Grid item xs={4} className={classes.workoutSelectGrid}>
        <img src={placeholder} className={classes.workoutSelectImage} />
        Back
      </Grid>
      <Grid item xs={4} className={classes.workoutSelectGridMiddle}>
        <img src={placeholder} className={classes.workoutSelectImage} />
        Arms
      </Grid>
      <Grid item xs={4} className={classes.workoutSelectGrid}>
        <img src={placeholder} className={classes.workoutSelectImage} />
        Legs
      </Grid>
    </Grid>
  );
}
