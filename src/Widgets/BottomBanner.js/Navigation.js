import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import { useStyles } from "../../Styles";

function returnGridItems(classes) {
  let toReturn = [];

  config.navBarItems.forEach(function ({ label, link }, i) {
    // i !== 0 && toReturn.push(<Grid item>•</Grid>);
    toReturn.push(
      <Grid
        item
        className={classes.footerNavigation}
        component={Link}
        to={link}
      >
        <Typography variant="caption">{label}</Typography>
      </Grid>
    );
  });

  return toReturn;
}

export default function FooterNavigation() {
  const classes = useStyles();
  return process.env.REACT_APP_SIMPLE ? null : (
    <Grid container>
      <Grid item xs={3} />
      <Grid container item xs={6} justify="space-around">
        {returnGridItems(classes)}
      </Grid>
    </Grid>
  );
}
