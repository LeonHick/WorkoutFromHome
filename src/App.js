import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { TopNavbar } from "./Widgets";
import { ComingSoon, WorkoutsPage } from "./Pages";
import LandingPage from "./HomePage";
import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple,
  yellow,
  purple,
  blueGrey,
} from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WorkoutRouter } from "./Routers";
import { useStyles } from "./Styles";
import BottomBanner from "./Widgets/BottomBanner.js";
import { ScrollToTop } from "./FunctionalComponents";

export default function Dashboard() {
  const classes = useStyles();

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const myTheme = createMuiTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      body1: {
        fontSize: "18px",
        lineHeight: "35px",
        fontWeight: 500,
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      body2: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      h1: {
        fontWeight: "bold",
      },
      h2: {
        fontWeight: "bold",
      },
      h3: {
        fontWeight: "bold",
      },
      h6: {
        fontWeight: "bold",
      },
    },
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        highlight: darkState ? purple[900] : yellow[500],
      },
      secondary: {
        main: mainSecondaryColor,
      },
      background: { default: darkState ? blueGrey[800] : "white" },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      {process.env.REACT_APP_COMMINGSOON ? (
        <div style={{ height: "100vh", overflow: "hidden" }}>
          <ComingSoon />
        </div>
      ) : (
        <>
          <Router>
            <ScrollToTop />

            <TopNavbar
              darkState={darkState}
              handleThemeChange={handleThemeChange}
            />
            <Switch>
              <Route exact path="/" render={() => <LandingPage />} />
            </Switch>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.contentPadding}
            >
              <Grid item xs={9}>
                <Switch>
                  <Route
                    exact
                    path="/workouts"
                    render={(props) => <WorkoutsPage {...props} />}
                  />
                  <Route
                    path="/workouts/show"
                    render={(props) => <WorkoutRouter {...props} />}
                  />
                </Switch>
              </Grid>
            </Grid>
            <BottomBanner />
          </Router>
        </>
      )}
    </ThemeProvider>
  );
}
