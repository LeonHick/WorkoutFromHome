import React from "react";
import { Hidden } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import LandingHeroComputer from "./Computer";
import LandingHeroPhone from "./Phone";

function LandingHero(props) {
  return (
    <>
      <Hidden smDown>
        <LandingHeroComputer {...props} />
      </Hidden>
      <Hidden mdUp>
        <LandingHeroPhone {...props} />
      </Hidden>
    </>
  );
}

export default withWidth()(LandingHero);
