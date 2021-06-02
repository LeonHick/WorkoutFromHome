import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { RoutineTable } from "../Components";

const headers = ["exercise", "sets", "reps"];

const Day1 = [
  { exercise: "Rear Delt Flyes", sets: 4, reps: 10 },
  { exercise: "Dumbbell Rows", sets: 4, reps: 10 },
  { exercise: "Inverted Rows", sets: 4, reps: 10 },
  {
    exercise: "Bicep Curls",
    sets: 4,
    reps: 10,
  },
  { exercise: "Hammer Curls", sets: 4, reps: 10 },
];

const Day2 = [
  { exercise: "Dumbbell Bench Press", sets: 4, reps: 10 },
  {
    exercise: "Dumbbell Flyes",
    sets: 4,
    reps: "10",
  },
  { exercise: "Tricep Extensions", sets: 4, reps: 10 },
  {
    exercise: "Tricep Dips",
    sets: 3,
    reps: "As Many Reps as Possible",
  },
  { exercise: "Side Raises", sets: 4, reps: 10 },
];

const Day3 = [
  { exercise: "Dumbbell Squat", sets: 4, reps: 10 },
  { exercise: "Dumbbell Lunge", sets: 4, reps: 10 },
  {
    exercise: "Dumbbell Romanian Deadlift",
    sets: 4,
    reps: "10",
  },
  {
    exercise: "Calf Raises",
    sets: 4,
    reps: 10,
  },
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
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Days 1 & 4 - Pull</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day1} {...{ headers }} />
        </Grid>
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Days 2 & 5 - Push</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day2} {...{ headers }} />
        </Grid>
        <Grid item xs={2} direction="column" container justify="center">
          <Typography>Days 3 & 6 - Legs</Typography>
        </Grid>
        <Grid item xs={10}>
          <RoutineTable rows={Day3} {...{ headers }} />
        </Grid>
      </Grid>
    </div>
  );
}
