import React from "react";
import Content from "./Content.js";
import { Grid, makeStyles } from "@material-ui/core";
import ArticleMargin from "../Components/ArticleMargin.js";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    cursor: "pointer",
  },
  image: {
    width: "100%",
  },
}));

export default function FullBody() {
  return <Content />;
}
