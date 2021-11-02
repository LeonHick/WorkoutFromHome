import React from "react";
import { Grid } from "@material-ui/core";
import { ArticleCard } from "../Widgets";
import fullBody from "../Images/squat2.jpg";
import threeday from "../Images/timesaver.jpg";
import side_raises from "../Images/side_raises.jpg";
import Pressups_down_2 from "../Images/Pressups_down_2.jpg";
import curls from "../Images/curls5.jpg";
import squat from "../Images/squat2.jpg";
import dumbbell_row from "../Images/dumbbell_row.jpg";
// import pplppl from "../Images/misc.jpg";
import pplppl from "../Images/pressups_up_2.jpg";
import timesaver from "../Images/timesaver.png";
import bench from "../Images/bench press.jpg";
import curlsother from "../Images/curls4.jpg";
import plank from "../Images/plank.png";

const CardConfig = (pathname) => [
  {
    to: `${pathname}/show?routine=fullbody`,
    src: timesaver,
    cardTitle: "the 3 day a week time saver",
    cardSubtitles: ["3 sessions", "45 mins", "All levels"],
    backgroundColor: "green",
  },
  {
    to: `${pathname}/show?routine=ppllong`,
    src: plank,
    cardTitle: "the mega 6 day routine",
    cardSubtitles: ["6 sessions", "60 mins", "Advanced"],
    backgroundColor: "orange",
  },
  {
    to: `${pathname}/show?routine=oneday`,
    src: threeday,
    cardTitle: "The once a week full body routine",
    cardSubtitles: ["1 session", "60 mins", "All Levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/arms`,
    src: curlsother, //curls,
    cardTitle: "Biceps, Tricpes & Forearms",
    cardSubtitles: ["1 session", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/show?routine=legs`,
    src: squat,
    cardTitle: "feel the burn - Leg workout",
    cardSubtitles: ["1 session", "60 mins", "All levels"],
    backgroundColor: "green",
  },
  {
    to: `${pathname}/chest`,
    src: bench,
    cardTitle: "best at home chest workout",
    cardSubtitles: ["1 session", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/shoulders`,
    src: side_raises,
    cardTitle: "complete home shoulder workout",
    cardSubtitles: ["1 session", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  {
    to: `${pathname}/back`,
    src: dumbbell_row,
    cardTitle: "Dumbbell back workout",
    cardSubtitles: ["1 sessions", "45 mins", "All levels"],
    backgroundColor: "red",
  },
  // {
  //   to: `${pathname}/show?routine=bodypartsplit`,
  //   src: side_raises,
  //   cardTitle: "the body part Split < split this into each body part",
  //   cardSubtitles: ["5 sessions", "60 mins", "All levels"],
  //   backgroundColor: "orange",
  // },
];

const showProgress = true;

export default function WorkoutPage({ location: { pathname }, history }) {
  return (
    <>
      {showProgress && (
        <div style={{ padding: 20 }}>
          <span style={{ backgroundColor: "red", padding: 10 }}>No Text</span>
          <span style={{ backgroundColor: "orange", padding: 10 }}>
            Started Editing Text + Photos
          </span>
          <span style={{ backgroundColor: "yellow", padding: 10 }}>
            Photos and Text Nearly Finished
          </span>
          <span style={{ backgroundColor: "green", padding: 10 }}>
            Complete
          </span>
        </div>
      )}
      <Grid container direction="row" spacing={4}>
        {CardConfig(pathname).map((cardProps) => (
          <ArticleCard {...{ history, showProgress }} {...cardProps} />
        ))}
      </Grid>
    </>
  );
}
