import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";

export default function CardTitle({ children }) {
  const classes = useStyles();
  return (
    <Typography variant="h5" className={classes.cardTitle}>
      {children}
    </Typography>
  );
}
