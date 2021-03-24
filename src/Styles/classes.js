import { makeStyles } from "@material-ui/core/styles";
// import background from "../Images/Home.jpg";
import background from "../Images/Home1.jpg";

export default makeStyles((theme) => ({
  articleTitle: {
    background: `linear-gradient(${theme.palette.background.default},${theme.palette.background.default} 70%, ${theme.palette.primary.highlight} 70%, ${theme.palette.primary.highlight} 90%,${theme.palette.background.default} 90%)`,
  },
  articleTitleWrapper: {
    paddingBottom: 40,
    position: "relative",
  },
  bottomBannerWrapper: {
    backgroundColor: "#002642", //"#3A3F43", , //#001B2E
    color: "white",
  },
  bottomBannerTop: {
    padding: 40,
  },
  bottomBannerBottomInner: {
    borderTop: "solid white 1px",
    padding: 20,
  },
  bottomBannerMiddleBorders: {
    borderLeft: `solid white 1px`,
    borderRight: `solid white 1px`,
  },
  contentPadding: {
    padding: "40px 0px 50px 0px",
  },
  darkModeSwitch: {
    paddingLeft: 100,
    color: theme.palette.text.secondary,
    // letterSpacing: "5px",
  },
  landingBackground: {
    zIndex: -1,
    height: "calc(100% - 40px);",
    width: "100%",
    position: "absolute",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize:
      "cover" /* Resize the background image to cover the entire container */,
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
    // backgroundColor: "red",
    paddingLeft: 10,
  },
  ourTipsWrapper: {
    // backgroundColor: "blue",
    marginBottom: 40,
    padding: 10,
  },
  workoutSelectGrid: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
  workoutSelectGridMiddle: {
    borderLeft: `solid gray 1px`,
    borderRight: `solid ${theme.palette.text.secondary} 1px`,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
  workoutSelectImage: {
    width: "100%",
    borderRadius: 5,
  },
}));
