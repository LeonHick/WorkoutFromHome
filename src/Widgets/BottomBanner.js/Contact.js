import React from "react";
import { Email, Twitter, Facebook } from "@material-ui/icons";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import config from "../../config";

function sendEmail() {
  document.location = "mailto:" + config.emailAddress;
}

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}

export default function ContactDetails({ classes }) {
  return (
    <div style={{ padding: "35px 0px 45px 0px" }}>
      {/* <Typography variant="body2" align="center">
        Contact Us
      </Typography> */}
      <div style={{ textAlign: "center" }}>
        <Tooltip title={"email"}>
          <IconButton onClick={sendEmail}>
            <Email className={classes.logoIconEmail} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"facebook"}>
          <IconButton onClick={() => openInNewTab(config.facebookAddress)}>
            <Facebook className={classes.logoIconFacebook} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"twitter"}>
          <IconButton onClick={() => openInNewTab(config.twitterAddress)}>
            <Twitter className={classes.logoIconTwitter} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
