import { Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "../../Styles";
import NoteToSelf from "../../Widgets/NoteToSelf";

export default function Title({ children }) {
  const classes = useStyles();
  const titleRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (titleRef && titleRef.current) {
      console.log(titleRef.current.clientWidth);
      setWidth(titleRef.current.clientWidth);
    }
  }, [titleRef]);
  return (
    <div className={classes.articleTitleWrapper}>
      <NoteToSelf>
        I've had a thought, it would be good to have a bit more life at the top
        of these articles. Maybe a picture or something. It just feels cold and
        they all look the same.
      </NoteToSelf>
      <Typography
        display="inline"
        variant="h2"
        style={{ paddingBottom: "100px" }}
      >
        <span className={classes.articleTitle}>{children.toUpperCase()}</span>
      </Typography>
    </div>
  );
}
