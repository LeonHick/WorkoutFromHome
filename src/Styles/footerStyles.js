import { makeStyles } from "@material-ui/core";

const footerStyles = makeStyles({
  brandNameTop: {
    color: ({ theme = "light", includeColoredLogo = true }) =>
      theme === "logoColor" || includeColoredLogo
        ? "#5BB3C9"
        : theme === "light"
        ? "black"
        : "white",
  },
  logoIconEmail: {
    color: ({ theme = "light" }) =>
      theme === "logoColor" ? "black" : theme === "light" ? "#EA4335" : "white",
  },
  logoIconFacebook: {
    color: ({ theme = "light" }) =>
      theme === "logoColor" ? "black" : theme === "light" ? "#3b5998" : "white",
  },
  logoIconTwitter: {
    color: ({ theme = "light" }) =>
      theme === "logoColor" ? "black" : theme === "light" ? "#1DA1F2" : "white",
  },
  logoLine: {
    height: "1px",
    width: "80%",
    backgroundColor: ({ theme = "light" }) =>
      theme === "dark" ? "white" : "black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  mainFooter: {
    backgroundColor: ({ theme = "light" }) =>
      theme === "dark" ? "#36454f" : "white",
    color: ({ theme = "light" }) => (theme === "dark" ? "white" : "black"),
  },
});
export default footerStyles;
