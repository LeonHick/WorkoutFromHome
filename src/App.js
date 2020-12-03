import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { TopNavbar } from "./Widgets";
import { LandingPage } from "./Pages";
import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple,
} from "@material-ui/core/colors";

export default function Dashboard() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
      text: {
        primary: darkState ? "white" : "grey",
      },
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TopNavbar darkState={darkState} handleThemeChange={handleThemeChange} />
      <LandingPage />
    </ThemeProvider>
  );
}
