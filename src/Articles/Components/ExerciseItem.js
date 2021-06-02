import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../Styles";

export default function ExerciseItem({ title, children, imgSrc, ourTip }) {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 40 }}>
      <Typography
        variant="h6"
        style={children && { textDecoration: "underline", paddingBottom: 20 }}
      >
        {title}
      </Typography>

      {children && (
        <>
          {imgSrc &&
            imgSrc.map((src, i) => (
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                style={{ width: `${100 / imgSrc.length}%` }}
              />
            ))}
          {ourTip && (
            <Grid container direction="row-reverse">
              <Grid item xs={8} className={classes.ourTipsWrapper}>
                <Typography variant="body2" className={classes.ourTips}>
                  {ourTip}
                </Typography>
              </Grid>
            </Grid>
            // <div className={classes.ourTipsWrapper}>
            // </div>
          )}
          <Typography paragraph variant="body1">
            {children}
          </Typography>
        </>
      )}
    </div>
  );
}
