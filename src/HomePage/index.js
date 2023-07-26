import React from "react";
import { Grid, Container } from "@material-ui/core";
import { useStyles } from "../Styles";
import LandingHero from "./LandingHero";
import LandingText from "./LandingText";

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <LandingHero classes={classes} />
      <br />
      <br />
      <LandingText />
    </>
  );
}
