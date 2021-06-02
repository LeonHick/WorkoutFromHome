import React from "react";
import { Typography } from "@material-ui/core";
import { fullbodyLinks } from "../Links";

export default function Intro() {
  return (
    <>
      <Typography paragraph variant="body1">
        A full body workout is an excellent way to avoid neglecting muscle
        groups on your fitness journey. In my opinion, a home full body workout
        is an ideal way to get the satisfaction of a targeted workout a few
        times a week without feeling like you are sacrificing some muscle groups
        for the sake of time.
      </Typography>
      <Typography paragraph variant="body1">
        This easy-to-follow workout is perfect for maintaining general health
        and fitness without any of those guilty feelings. This workout would be
        a 3 session a week split. If you want to see more 3 day a week workouts
        check out this{" "}
        <a href={fullbodyLinks.toPPLRoutine}>Push Pull Legs Workout</a>
      </Typography>
      <Typography paragraph variant="body1">
        The point of the full body workout is that it targets every muscle
        group, (i.e., Arms, Shoulders, Back, Legs and Chest), on every day you
        workout. This gives you a perfect chance to recover between workouts,
        using the 48hr recovery window to its maximum potential.
      </Typography>
      <Typography paragraph variant="body1">
        As always it is important to make sure that your fitness expectations
        are challenging but sensible. Reasonable and attainable fitness goals
        are essential to your mental health so try not to compare yourself to
        people whose entire lives revolve around maintaining a certain physique.
      </Typography>
      <Typography paragraph variant="body1">
        This workout is for people who want to maintain most of what they have
        built already or for people who are looking to build a solid foundation
        in lifting and are looking to familiarise themselves with a routine and
        build a stable fitness regime.
      </Typography>
    </>
  );
}
