import React from "react";
import useStyles from "./useStyles";
import {
  createMuiTheme,
  ThemeProvider,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import CardTitle from "./CardTitle";
import CardSubtitles from "./CardSubtitles";
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Lato",
      "sans-serif",
      // "Roboto",
      // "sans-serif",
    ].join(","),
  },
  palette: {
    background: { default: "white" },
  },
});

export default function ArticleCard({
  history,
  src,
  gridProps,
  to,
  cardTitle,
  cardSubtitles,
  backgroundColor,
  showProgress,
  comingsoon,
}) {
  const classes = useStyles();

  return (
    <Grid item sm={12} md={6} lg={4}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className={classes.articleCard}
          style={{ ...(comingsoon && { cursor: "default" }) }}
          onClick={() => {
            console.log({ history, to });
            !comingsoon && history.push(to);
          }}
        >
          <img
            src={src}
            className={classes.articleCardImage}
            style={{
              height: 240,
              objectFit: "cover",
            }}
          />
          <div
            className={classes.cardTextPadding}
            style={
              backgroundColor && showProgress
                ? { border: `solid ${backgroundColor}` }
                : {}
            }
          >
            <CardTitle>{cardTitle}</CardTitle>

            <CardSubtitles
              minimize={window.innerWidth <= 350}
              content={cardSubtitles}
            />
          </div>
        </div>
      </ThemeProvider>
    </Grid>
  );
}
