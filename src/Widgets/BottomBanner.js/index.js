import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ContactDetails from "./Contact";
import Branding from "./Branding";
import FooterNavigation from "./Navigation";
import { footerStyles } from "../../Styles";

const theme = "light"; //"dark" "logoColor"
const includeColoredLogo = true;

export default function BottomBanner() {
  const classes = footerStyles({ theme, includeColoredLogo });
  console.log({ classes });
  return (
    <Grid
      className={classes.mainFooter}
      container
      direction="column"
      justify="center"
    >
      <Grid
        item
        xs={12} //style={{ backgroundColor: "green" }}
      >
        <Branding classes={classes} />
      </Grid>
      <Grid
        container
        item
        xs={12} //style={{ backgroundColor: "blue" }}
      >
        <FooterNavigation classes={classes} />
      </Grid>
      <Grid
        item
        xs={12} //style={{ backgroundColor: "yellow" }}
      >
        <ContactDetails classes={classes} />
      </Grid>
    </Grid>
  );
}
