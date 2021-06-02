import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../Styles";

export default function NoteFromJosh() {
  const classes = useStyles();
  return (
    <p className={classes.noteFromJosh}>
      <Typography variant="body2" paragraph>
        May all your fitness needs be met.
      </Typography>
      <Typography variant="caption" paragraph>
        Article by Joshua Hubbard
      </Typography>
      <Typography variant="caption" paragraph>
        Edited by Leon Hickingbotham
      </Typography>
    </p>
  );
}
