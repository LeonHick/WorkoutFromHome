import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { RoutineTable } from "../Components";

const headers = ["exercise", "sets", "reps"];

const Push1 = [
  { exercise: "Pressups", sets: 3, reps: "As many as possible" },
  { exercise: "Shoulder Press", sets: 4, reps: 10 },
  { exercise: "Dumbbell Flys", sets: 4, reps: 10 },
  {
    exercise: "Tricep overhead Press",
    sets: 4,
    reps: 10,
  },
];

const Pull1 = [
  { exercise: "Dumbbell Curls", sets: 4, reps: 10 },
  {
    exercise: "Dumbbell Rows",
    sets: 4,
    reps: 8,
  },
  { exercise: "Upright Rows", sets: 3, reps: 8 },
  {
    exercise: "Side Raises",
    sets: 4,
    reps: "10",
    other: "or gauntlet - explained below",
  },
];

const Legs1 = [
  { exercise: "Dumbbell Goblet Squat", sets: 4, reps: 10 },
  { exercise: "Dumbbell Calf Raises", sets: 3, reps: "As many as possible" },
  {
    exercise: "Single Leg Romanian Deadlift",
    sets: 3,
    reps: "8",
  },
];

const Push2 = [
  { exercise: "Dumbbell Bench Press", sets: 4, reps: 10 },
  { exercise: "Narrow Arm Pressups", sets: 3, reps: "As many as possible" },
  { exercise: "Tricep Dips", sets: 4, reps: 10 },
];

const Pull2 = [
  {
    exercise: "Underhand Rows",
    sets: 4,
    reps: "10",
  },
  { exercise: "Hammer Curls", sets: 4, reps: 10 },
  { exercise: "Superman Holds", sets: 4, reps: "As long as possible" },
  { exercise: "Rear Delt Flys", sets: 4, reps: 12 },
];

const Legs2 = [
  { exercise: "Piston Squat", sets: 3, reps: "As many as possible" },
  { exercise: "Dumbbell Lunge", sets: 4, reps: 10 },
  { exercise: "Prone Leg Raise", sets: 4, reps: 10 },
];

export default function WorkoutStructure() {
  return (
    <div style={{ padding: "40px 0px 40px 0px" }}>
      <Typography paragraph variant="body1">
        The workout will go like this:
      </Typography>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 1 - Push</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Push1} {...{ headers }} />
        </Grid>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 2 - Pull</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Pull1} {...{ headers }} />
        </Grid>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 3 - Legs</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Legs1} {...{ headers }} />
        </Grid>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 4 - Push</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Push2} {...{ headers }} />
        </Grid>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 5 - Pull</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Pull2} {...{ headers }} />
        </Grid>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 6 - Legs</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Legs2} {...{ headers }} />
        </Grid>
      </Grid>
    </div>
  );
}
