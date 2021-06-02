import React from "react";
import { Email, Twitter, Facebook } from "@material-ui/icons";
import { IconButton, Tooltip, Typography } from "@material-ui/core";

export default function ContactDetails({ classes }) {
  return (
    <div style={{ padding: "35px 0px 45px 0px" }}>
      {/* <Typography variant="body2" align="center">
        Contact Us
      </Typography> */}
      <div style={{ textAlign: "center" }}>
        <Tooltip title={"email"}>
          <IconButton>
            <Email className={classes.logoIconEmail} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"facebook"}>
          <IconButton>
            <Facebook className={classes.logoIconFacebook} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"twitter"}>
          <IconButton>
            <Twitter className={classes.logoIconTwitter} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
