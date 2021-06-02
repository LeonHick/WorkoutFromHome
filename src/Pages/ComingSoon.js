import React from "react";
import { Typography, withWidth } from "@material-ui/core";
import { useStyles } from "../Styles";
import LandingHero from "../HomePage/LandingHero";

function LandingPage({ width }) {
  const classes = useStyles();
  console.log({ width });
  return (
    <>
      <LandingHero
        classes={{
          ...classes,
          landingBackground: classes.landingBackgroundComingSoon,
        }}
      />
      <div
        style={{
          height: "100vh",
          padding: 60,
          //color: "white"
        }}
      >
        <Typography
          style={{
            margin: 0,
            position: "absolute",
            top: width === "lg" ? "66%" : "50%",
            left: "50%",
            transform: `translate(-50%, -${width === "lg" ? "66" : "50"}%)`,
            backgroundColor: "white",
            padding: "25px 30px 25px 25px",
            opacity: 0.8,
          }}
          align="center"
          variant={["xs", "sm"].includes(width) ? "h4" : "h2"}
        >
          COMING SOON
        </Typography>
      </div>
    </>
  );
}

export default withWidth()(LandingPage);
