import React from "react";
import { Grid } from "@material-ui/core";
import { ArticleCard } from "../Widgets";
import fullBody from "../Images/squat2.jpg";
import timesaver from "../Images/timesaver.jpg";
import side_raises from "../Images/side_raises.jpg";
import Pressups_down_2 from "../Images/Pressups_down_2.jpg";
import curls from "../Images/curls5.jpg";
import dumbbell_lunge from "../Images/dumbbell_lunge.jpg";
// import pplppl from "../Images/misc.jpg";
import pplppl from "../Images/pressups_up_2.jpg";

const CardConfig = (pathname) => [
  {
    to: `${pathname}/show?routine=fullbody`,
    src: fullBody,
    cardTitle: "Total Full Body Home Workout",
    cardSubtitles: ["3 sessions", "60 mins", "All levels"],
    backgroundColor: "yellow",
  },
  {
    to: `${pathname}/3dayppl`,
    src: timesaver,
    cardTitle: "3 day a week time saver",
    cardSubtitles: ["3 sessions", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/show?routine=bodypartsplit`,
    src: side_raises,
    cardTitle: "the Classic body part Split",
    cardSubtitles: ["5 sessions", "60 mins", "All levels"],
    backgroundColor: "orange",
  },
  {
    to: `${pathname}/show?routine=ppllong`,
    src: pplppl,
    cardTitle: "Intensive Six Day Home Workout",
    cardSubtitles: ["6 sessions", "60 mins", "Advanced"],
    backgroundColor: "orange",
  },
  {
    to: `${pathname}/arms`,
    src: curls,
    cardTitle: "Biceps, Triceps, and Forearms",
    cardSubtitles: ["1 session", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/legs`,
    src: dumbbell_lunge,
    cardTitle: "feel the burn - leg workout",
    cardSubtitles: ["1 session", "60 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/chest`,
    src: dumbbell_lunge,
    cardTitle: "chest",
    cardSubtitles: ["1 session", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/shoulders`,
    src: dumbbell_lunge,
    cardTitle: "shoulders",
    cardSubtitles: ["1 session", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/back`,
    src: dumbbell_lunge,
    cardTitle: "back",
    cardSubtitles: ["1 sessions", "45 mins", "All levels"],
    backgroundColor: "red",
  },
];

export default function WorkoutPage({ location: { pathname }, history }) {
  return (
    <>
      <div style={{ padding: 20 }}>
        <span style={{ backgroundColor: "red", padding: 10 }}>No Text</span>
        <span style={{ backgroundColor: "orange", padding: 10 }}>
          Started Editing Text + Photos
        </span>
        <span style={{ backgroundColor: "yellow", padding: 10 }}>
          Photos and Text Nearly Finished
        </span>
        <span style={{ backgroundColor: "green", padding: 10 }}>Complete</span>
      </div>
      <Grid
        container
        direction="row"
        // justify="center"
        // alignItems="center"
        spacing={4}
      >
        {CardConfig(pathname).map((cardProps) => (
          <ArticleCard {...{ history }} {...cardProps} />
        ))}
      </Grid>
    </>
  );
}
