import { ListItem, Typography, List } from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";

export default function CardSubtitles({ content, minimize }) {
  const classes = useStyles();
  return (
    <List dense>
      {content.map((text, i) => (
        <ListItem
          style={{
            padding: 0,
            margin: 0,
            // backgroundColor: i === 0 ? "yellow" : "orange"
          }}
        >
          <Typography className={classes.subtitleText}>{text}</Typography>
        </ListItem>
      ))}
    </List>
  );
}
