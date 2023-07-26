import React from "react";
import { Typography } from "@material-ui/core";
import { fullbodyLinks } from "../Links";

export default function Intro() {
  return (
    <>
      <Typography paragraph variant="body1">
        Have you ever wanted a quick, flexible, but complete workout routine
        that can fit around your busy lifestyle?
      </Typography>
      {/* <Typography paragraph variant="body1">
        This easy-to-follow workout is perfect for maintaining general health
        and fitness without any of those guilty feelings. This workout would be
        a 3 session a week split. If you want to see more 3 day a week workouts
        check out this{" "}
        <a href={fullbodyLinks.toPPLRoutine}>Push Pull Legs Workout</a>
      </Typography> */}
      <Typography paragraph variant="body1">
        Do you ever get bored while working out and feel like you’re just doing
        the same exercise over and over?{" "}
      </Typography>
      <Typography paragraph>
        With this full body workout routine you will be training three days a
        week, targetting each of your muscle groups in every session while still
        keeping the workouts short and sweet. You should have at least one day
        off between workouts to allow your muscles to rest and grow.{" "}
      </Typography>
      <Typography paragraph>
        It’s ok if you need to miss a session out or move the days around – this
        workout can fit around you guilt free!{" "}
      </Typography>
      <Typography paragraph variant="body1">
        As always remember that avoiding setting unreasonable goals is essential
        for wellbeing.
      </Typography>
    </>
  );
}
