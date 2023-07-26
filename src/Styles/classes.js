import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";
// import background from "../Images/Home.jpg";
import background from "../Images/Home1.jpg";
import backgroundBlur from "../Images/HomeBlurred.JPG";

const landingHeroStandard = {
  zIndex: -1,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundImage: `url(${background})`,
  backgroundPosition: "center" /* Center the image */,
  backgroundRepeat: "no-repeat" /* Do not repeat the image */,
  backgroundSize:
    "cover" /* Resize the background image to cover the entire container */,
};

const landingHeroPhone = {
  backgroundPosition: "right" /* Center the image */,
};

export default makeStyles((theme) => ({
  articleCard: {
    textDecoration: "none",
    padding: "0px !important;",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  articleTitle: {
    background: `linear-gradient(${theme.palette.background.default},${theme.palette.background.default} 70%, ${theme.palette.primary.highlight} 70%, ${theme.palette.primary.highlight} 90%,${theme.palette.background.default} 90%)`,
  },
  articleTitleWrapper: {
    paddingBottom: 40,
    position: "relative",
  },
  contentPadding: {
    padding: "40px 0px 50px 0px",
  },
  darkModeSwitch: {
    paddingLeft: 100,
    color: theme.palette.text.secondary,
    // letterSpacing: "5px",
  },
  footerNavigation: {
    color: "inherit",
    cursor: "pointer",
    textDecoration: "inherit",
    // letterSpacing: "5px",
  },
  landingBackground: {
    height: process.env.REACT_APP_SIMPLE ? "100%" : "calc(100% - 40px);",
    ...landingHeroStandard,
  },
  landingBackgroundPhone: {
    height: process.env.REACT_APP_SIMPLE ? "100%" : "calc(100% - 40px);",
    ...landingHeroStandard,
    ...landingHeroPhone,
  },
  landingBackgroundComingSoon: {
    height: "100%",
    ...landingHeroStandard,
  },
  landingInfoBox: {
    textAlign: "right",
    paddingBottom: 40,
  },
  landingTitleMain: {
    color: "#5BB3C9",
  },
  landingTitleMainSecondary: {
    // color: "#3A3F43",
    color: "#495257",
  },
  // marginAuto: {
  //   margin: "auto",
  // },
  navBar: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    backgroundColor: "white",
    opacity: "90%",
    zIndex: 99,
    // height: "20px",
  },
  navBarItemWrapper: {
    display: "flex",
    cursor: "pointer",
    textDecoration: "inherit",
    color: theme.palette.text.secondary,
    letterSpacing: "5px",
  },
  noteFromJosh: {
    paddingTop: 40,
    textAlign: "center",
  },
  ourTips: {
    textAlign: "right",
    fontStyle: "italic",
    borderLeft: `solid ${theme.palette.primary.highlight} 5px`,
    float: "right",
    // lineHeight: 2,
    // fontSize: 16,
    paddingLeft: 10,
  },
  ourTipsWrapper: {
    // backgroundColor: "blue",
    marginBottom: 40,
    padding: 10,
  },
  workoutSelectGridMiddle: {
    borderLeft: `solid gray 1px`,
    borderRight: `solid ${theme.palette.text.secondary} 1px`,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
}));
