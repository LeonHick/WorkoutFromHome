import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ArticleCard } from "../Widgets";
import fullBody from "../Images/squat2.jpg";
import threeday from "../Images/misc.jpg";
import side_raises from "../Images/side_raises.png";
import Pressups_down_2 from "../Images/Pressups_down_2.jpg";
import curls from "../Images/curls5.jpg";
import squat from "../Images/squat2.jpg";
import dumbbell_row from "../Images/dumbbell_row.png";
// import pplppl from "../Images/misc.jpg";
import pplppl from "../Images/pressups_up_2.jpg";
import timesaver from "../Images/timesaver_comingsoon.png";
import bench from "../Images/bench press.png";
import curlsother from "../Images/curls4.png";
import plank from "../Images/plank_small.jpg";

const CardConfig = (pathname) => [
  {
    //to: `${pathname}/show?routine=fullbody`,
    to: `show?routine=fullbody`,
    src: threeday,
    cardTitle: "The Adaptable 3 day routine",
    cardSubtitles: ["3 sessions", "45 mins", "All levels"],
    backgroundColor: "green",
  },
  {
    to: `show?routine=ppllong`,
    src: plank,
    cardTitle: "the mega 6 day routine",
    cardSubtitles: ["6 sessions", "30 mins", "Advanced"],
    backgroundColor: "orange",
  },
  {
    to: `show?routine=oneday`,
    src: timesaver,
    cardTitle: "the once a week time saver",
    cardSubtitles: ["1 session", "45 mins", "All Levels"],
    backgroundColor: "red",
    comingsoon: true,
  },
  {
    to: `arms`,
    src: curlsother, //curls,
    cardTitle: "Biceps, Triceps & Forearms",
    cardSubtitles: ["1 session", "30 mins", "All levels"],
    backgroundColor: "red",
    comingsoon: true,
  },
  {
    to: `show?routine=legs`,
    src: squat,
    cardTitle: "feel the burn - Leg workout",
    cardSubtitles: ["1 session", "45 mins", "All levels"],
    backgroundColor: "green",
  },
  {
    to: `chest`,
    src: bench,
    cardTitle: "best at home chest workout",
    cardSubtitles: ["1 session", "30 mins", "All levels"],
    backgroundColor: "red",
    comingsoon: true,
  },
  {
    to: `shoulders`,
    src: side_raises,
    cardTitle: "complete home shoulder workout",
    cardSubtitles: ["1 session", "30 mins", "All levels"],
    backgroundColor: "red",
    comingsoon: true,
  },
  {
    to: `back`,
    src: dumbbell_row,
    cardTitle: "Dumbbell back workout",
    cardSubtitles: ["1 sessions", "30 mins", "All levels"],
    backgroundColor: "red",
    comingsoon: true,
  },
  // {
  //   to: `show?routine=bodypartsplit`,
  //   src: side_raises,
  //   cardTitle: "the body part Split < split this into each body part",
  //   cardSubtitles: ["5 sessions", "45 mins", "All levels"],
  //   backgroundColor: "orange",
  // },
];

const showProgress = process.env.REACT_APP_SHOW_PROGRESS;

export default function WorkoutPage({ location: { pathname }, history }) {
  return (
    <>
      <Typography style={{ paddingBottom: 40 }} variant="h3">
        Workout Routines
      </Typography>
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
        {CardConfig(pathname)
          .filter(({ comingsoon }) => !comingsoon)
          .concat(CardConfig(pathname).filter(({ comingsoon }) => comingsoon))
          .map((cardProps) => (
            <ArticleCard {...{ history, showProgress }} {...cardProps} />
          ))}
      </Grid>
    </>
  );
}
