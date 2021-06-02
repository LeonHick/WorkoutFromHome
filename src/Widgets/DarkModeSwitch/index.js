import React, { useState } from "react";
import { Switch, FormControlLabel, Typography } from "@material-ui/core";
import { useStyles } from "../../Styles";
import { Settings } from "@material-ui/icons";

export default function DarkModeSwitch({ darkState, handleThemeChange }) {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <FormControlLabel
          className={classes.darkModeSwitch}
          control={
            <Switch
              checked={darkState}
              color="primary"
              onChange={handleThemeChange}
            />
          }
          label={
            <Typography noWrap>{`${
              darkState ? "dark" : "light"
            } mode`}</Typography>
          }
          labelPlacement="start"
        />
      ) : (
        <Settings />
      )}
    </div>
  );
}
