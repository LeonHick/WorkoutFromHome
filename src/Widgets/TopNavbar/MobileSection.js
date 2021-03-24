import React from "react";
import { IconButton } from "@material-ui/core";
import { MenuIcon } from "@material-ui/icons/Menu";
import { More } from "@material-ui/icons";

export default function MobileSection({ defaultClasses }) {
  return (
    <div className={defaultClasses.sectionMobile}>
      <IconButton
        aria-label="show more"
        aria-controls={"mobileMenuId"}
        aria-haspopup="true"
        //   onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <IconButton
          edge="start"
          className={defaultClasses.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <More />
      </IconButton>
    </div>
  );
}
