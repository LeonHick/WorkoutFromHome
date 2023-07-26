import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  articleCard: {
    textDecoration: "none",
    padding: "0px !important;",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    // height: 445,
  },
  articleCardImage: {
    width: "100%",
  },
  cardTextPadding: {
    padding: "10px 30px 10px 30px",
  },
  cardTitle: {
    // height: 70,
    textTransform: "capitalize",
    color: "black",
    fontWeight: 700,
    letterSpacing: 1.5,
  },
  subtitleText: {
    fontWeight: 500,
    padding: 0,
    margin: 0,
    color: "#838383",
    letterSpacing: 1.5,
    fontSize: 18,
  },
}));
