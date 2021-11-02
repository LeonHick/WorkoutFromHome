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
        the same thing over and over?{" "}
      </Typography>
      <Typography paragraph>
        Have you ever wanted to target each body part more than once a week
        without spending hours at the gym every day?
      </Typography>
      <Typography paragraph>
        If any of those sound like you read on! With this three day a week full
        body workout routine you will be training each of your muscle groups in
        every session while still keeping the workouts short and sweet.{" "}
      </Typography>
      <Typography paragraph>
        There are three sessions to make sure that you are doing enough volume
        to get better and stronger while leaving enough time between workouts to
        fully recover. You should have at least one day off between workouts to
        allow your muscles to rest and grow.{" "}
      </Typography>
      <Typography paragraph>
        Because every workout hits all of your muscle groups it’s ok if you need
        to miss one out or move the days around – this workout can fit around
        you guilt free!{" "}
      </Typography>
      <Typography paragraph variant="body1">
        As always it is important to make sure that your fitness expectations
        are challenging but sensible. Reasonable and attainable fitness goals
        are essential to your mental health so try not to compare yourself to
        people whose entire lives revolve around maintaining a certain physique.
      </Typography>
    </>
  );
}
