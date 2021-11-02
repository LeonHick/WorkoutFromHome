import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {
  MenuItem,
  Typography,
  Badge,
  Toolbar,
  IconButton,
  Grid,
  Menu,
} from "@material-ui/core";
import { Notifications, AccountCircle, Mail } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import DarkModeSwitch from "../DarkModeSwitch";
import config from "../../config";
import { Link, useLocation } from "react-router-dom";
import { useStyles } from "../../Styles";
import { useSpring, animated } from "react-spring";

// const useStyles2 = makeStyles({
//   menuButton: {
//     // marginRight: theme.spacing(2),
//   },
//   sectionDesktop: {
//     // display: "none",
//     // [theme.breakpoints.up("md")]: {
//     //   display: "flex",
//     // },
//   },
//   sectionMobile: {
//     display: "flex",
//     // [theme.breakpoints.up("md")]: {
//     //   display: "none",
//     // },
//   },
// });

export default function PrimarySearchAppBar({ darkState, handleThemeChange }) {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  const springProps = useSpring({
    config: { duration: !scrolled ? 0 : 150 },
    height: scrolled ? "45px" : "60px",
    boxShadow: scrolled ? "0 8px 6px -6px black" : "0 0px 0px 0px black",
  });

  // const defaultClasses = useStyles2();

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 5 && scrolled) {
        return setScrolled(false);
      } else if (window.scrollY >= 5 && !scrolled) {
        return setScrolled(true);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [scrolled]);

  return (
    <div style={{ paddingBottom: 40 }}>
      <animated.div className={classes.navBar} style={springProps}>
        <Grid style={{ height: "100%" }} container alignItems="center">
          <Grid item xs={2} />
          <Grid
            name="navbar-button-container"
            container
            item
            xs={8}
            justify="space-around"
          >
            {config.navBarItems.map(({ label, link }) => (
              <Grid
                name={`nav-bar-link-to-${label.toLowerCase()}`}
                item
                className={classes.navBarItemWrapper}
                component={Link}
                to={link}
              >
                <Grid>
                  <span className={classes.marginAuto}>
                    <Typography variant="subtitle1">{label}</Typography>
                  </span>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={2}>
            <span style={{ float: "right" }}>
              {/* <DarkModeSwitch
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          /> */}
            </span>
          </Grid>
        </Grid>
      </animated.div>

      {/* {renderMobileMenu}
        {renderMenu} */}
    </div>
  );
}
