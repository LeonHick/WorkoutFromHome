import { Grid, Typography } from "@material-ui/core";
import React from "react";
import LandingTitle from "../LandingTitle";

export default function LandingHeroPhone({ classes, comingsoon, width }) {
  return (
    <>
      <div className={classes && classes.landingBackgroundPhone}></div>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Grid
          container
          justify={
            window.innerHeight < 600 && width !== "xs" ? "left" : "center"
          }
          style={{
            position: "absolute",
            // backgroundColor: "pink",
            height: "100%",
          }}
        >
          <Grid
            container
            direction="column"
            // align={alignment === "center" ? "flex-end" : alignment}
            // alignContent={alignment === "center" ? "flex-end" : alignment}
            // justify={alignment === "center" ? "flex-end" : alignment}
            align={"flex-end"}
            alignContent={"center"}
            justify={"center"}
            item
            xs={6}
            // style={"center"}
            // xs={0}
            // md={6}
            // style={{ padding: -10 }}
          >
            {comingsoon && (
              <Typography
                style={{
                  backgroundColor: "white",
                  padding: 25,
                  opacity: 0.8,
                }}
                align="center"
                variant={["xs", "sm"].includes(width) ? "h4" : "h2"}
              >
                COMING SOON
              </Typography>
            )}
          </Grid>
        </Grid>
        <LandingTitle />
      </div>
    </>
  );
}
