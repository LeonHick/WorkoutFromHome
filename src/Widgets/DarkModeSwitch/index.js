import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import { useStyles } from "../../Styles";

export default function DarkModeSwitch({ darkState, handleThemeChange }) {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.darkModeSwitch}
      control={
        <Switch
          checked={darkState}
          color="primary"
          onChange={handleThemeChange}
        />
      }
      label={`${darkState ? "Dark" : "Light"} Mode`}
      labelPlacement="start"
    />
  );
}
