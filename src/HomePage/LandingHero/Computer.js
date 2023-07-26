import React from "react";
import { Grid, Container, Hidden, Typography } from "@material-ui/core";
import LandingTitle from "../LandingTitle";

export default function LandingHeroComputer({ classes, comingsoon, width }) {
  let alignment = ["xs", "sm", "md"].includes(width) ? "left" : "center";
  return (
    <>
      <div className={classes && classes.landingBackground}></div>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Grid
          container
          justify={alignment}
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
            justify={alignment === "center" ? "flex-end" : "center"}
            item
            xs={6}
            style={alignment !== "center" ? { padding: 20 } : {}}
            // xs={0}
            // md={6}
            // style={{ padding: -10 }}
          >
            {comingsoon && (
              <Typography
                style={{
                  marginBottom: alignment === "center" ? "30%" : 0,
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
        <Grid
          container
          style={{
            padding: 60,
          }}
        >
          <Grid item xs={6}></Grid>
          {/* <Grid
            container
            direction="row"
            align="center"
            alignContent="center"
            justify="center"
            item
            xs={0}
            md={6}
            // style={{ backgroundColor: "green" }}
          >
            {comingsoon && (
              <Typography
                style={{
                  margin: 0,
                  backgroundColor: "white",
                  padding: "25px 30px 25px 25px",
                  opacity: 0.8,
                }}
                align="center"
                variant={["xs", "sm"].includes(width) ? "h4" : "h2"}
              >
                COMING SOON
              </Typography>
            )}
          </Grid> */}
          <Grid
            item
            xs={12}
            md={6} //style={{ backgroundColor: "yellow" }}
          >
            <div className={classes && classes.landingInfoBox}>
              <LandingTitle />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
