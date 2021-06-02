import { Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../Styles";
import LandingTitleComputer from "./Computer";
import LandingTitlePhone from "./Phone";

export default function LandingTitle() {
  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        <LandingTitleComputer />
      </Hidden>
      <Hidden mdUp>
        <LandingTitlePhone />
      </Hidden>
    </>
  );
}
