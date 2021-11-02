import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { RoutineTable } from "../Components";

const headers = ["exercise", "sets", "reps"];

const structure = [
  { exercise: "Dumbbell Goblet Squats", sets: 4, reps: 10 },
  { exercise: "Dumbbell Lunges", sets: 4, reps: 10 },
  { exercise: "Dumbbell Calf-Raises", sets: 4, reps: 10 },
  {
    exercise: "Single Leg Romanian Deadlift",
    sets: 4,
    reps: 10,
  },
  { exercise: "Prone Leg Raises", sets: 3, reps: 12 },
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
        <RoutineTable rows={structure} {...{ headers }} />
      </Grid>
    </div>
  );
}
