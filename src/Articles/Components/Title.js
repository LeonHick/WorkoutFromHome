import { Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "../../Styles";

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
      <Typography
        display="inline"
        variant="h2"
        style={{ paddingBottom: "100px" }}
      >
        <span className={classes.articleTitle}>{children}</span>
      </Typography>
    </div>
  );
}
