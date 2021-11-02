import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { RoutineTable } from "../Components";

const headers = ["exercise", "sets", "reps"];

const Day1 = [
  { exercise: "Dumbbell Bench Press", sets: 4, reps: 10 },
  { exercise: "Dumbbell Flyes", sets: 4, reps: 10 },
  { exercise: "Press Ups", sets: 4, reps: 10 },
  {
    exercise: "Plate Squeeze",
    sets: 3,
    reps: "As Many Reps As Possible",
  },
  { exercise: "Single-Arm Hammer Fly", sets: 3, reps: 8 },
];

const Day2 = [
  { exercise: "Dumbbell Squats ", sets: 4, reps: 10 },
  {
    exercise: "Dumbbell Lunges",
    sets: 4,
    reps: "10",
  },
  { exercise: "Dumbbell Calf-Raises", sets: 4, reps: 10 },
  { exercise: "Straight Leg Deadlifts", sets: 4, reps: "10" },
  {
    exercise: "Prone Leg Raise",
    sets: 3,
    reps: "12",
  },
];

const Day3 = [
  { exercise: "Bicep Curls", sets: 4, reps: 10 },
  { exercise: "Tricep Overhead Press", sets: 4, reps: 10 },
  {
    exercise: "Side Raises",
    sets: 4,
    reps: "10",
  },
  {
    exercise: "Dumbbell Hammer Curls",
    sets: 4,
    reps: 10,
  },
  { exercise: "Tricep Kickback", sets: 4, reps: 10 },
  { exercise: "Tricep Dips", sets: 3, reps: "As Many Reps As Possible" },
];

const Day4 = [
  { exercise: "Front Raises", sets: 4, reps: 10 },
  {
    exercise: "Side Raises",
    sets: 4,
    reps: "10",
    other: "or gauntlet - explained below",
    includeOr: true,
  },
  { exercise: "Rear Delt Flyes", sets: 4, reps: 10 },
];
const Day5 = [
  { exercise: "Dumbbell Rows", sets: 4, reps: 10 },
  { exercise: "Pullovers", sets: 4, reps: 10 },
  {
    exercise: "Shrug",
    sets: 4,
    reps: "10",
  },
  {
    exercise: "Pull Ups",
    sets: 3,
    reps: "As Many Reps As Possible",
  },
  { exercise: "Inverted Dumbbell Row", sets: 4, reps: 10 },
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
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Day 1 -Chest</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day1} {...{ headers }} />
        </Grid>
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Day 2 - Legs</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day2} {...{ headers }} />
        </Grid>
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Day 3 - Arms</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day3} {...{ headers }} />
        </Grid>
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Day 4 - Shoulders</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day4} {...{ headers }} />
        </Grid>
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Day 5 - Back</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day5} {...{ headers }} />
        </Grid>
      </Grid>
    </div>
  );
}
