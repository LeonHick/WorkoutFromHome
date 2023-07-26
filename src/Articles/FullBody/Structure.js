import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { RoutineTable } from "../Components";

const headers = ["exercise", "sets", "reps"];

const Day1 = [
  { exercise: "Press-Ups", sets: 4, reps: 10 },
  { exercise: "Dumbbell Shoulder Press", sets: 4, reps: 10 },
  { exercise: "Dumbbell Rows", sets: 4, reps: 10 },
  {
    exercise: "Tricep Overhead Press",
    sets: 4,
    reps: 10,
  },
  { exercise: "Dumbbell Squats", sets: 4, reps: 10 },
];

const Day2 = [
  { exercise: "Dumbbell Flyes", sets: 4, reps: 10 },
  {
    exercise: "Side Raises",
    sets: 4,
    reps: "10",
    other: "or gauntlet - explained below",
  },
  { exercise: "Dumbbell Shrugs", sets: 4, reps: 10 },
  {
    exercise: "Dumbbell Bicep Curls",
    sets: 4,
    reps: "10",
  },
  { exercise: "Dumbbell Lunges", sets: 4, reps: "10" },
];

const Day3 = [
  { exercise: "Dumbbell Romanian Deadlift", sets: 4, reps: 10 },
  {
    exercise: "Dumbbell Hammer Curls",
    sets: 4,
    reps: 10,
  },
  { exercise: "Press-Ups", sets: 4, reps: 10 },
  {
    exercise: "Side Raises",
    sets: 4,
    reps: "10",
    other: "or gauntlet - explained below",
    includeOr: true,
  },

  { exercise: "Dumbbell Rows", sets: 4, reps: 10 },
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
          <Typography>Day 1</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Day1} {...{ headers }} />
        </Grid>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 2</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Day2} {...{ headers }} />
        </Grid>
        <Grid item xs={12} sm={2} direction="column" container justify="center">
          <Typography>Day 3</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <RoutineTable rows={Day3} {...{ headers }} />
        </Grid>
      </Grid>
    </div>
  );
}
