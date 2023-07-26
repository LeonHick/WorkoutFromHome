import { Typography, Grid, withWidth } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../Styles";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router";

export default withWidth()(
  ({ title, children, imgSrc, ourTip, to, id, width }) => {
    const classes = useStyles();
    const history = useHistory();
    const { pathname, search } = history.location;
    return (
      <div style={{ paddingTop: 40 }}>
        <Typography
          id={id}
          {...(to && { component: Link, to: pathname + search + to })}
          // component={Link}
          // to={pathname + search + to}
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
                  key={`exercise-item-${title}-image-${i}`}
                  src={src}
                  alt={`${title} ${i + 1}`}
                  style={{
                    width: width === "xs" ? "100%" : `${100 / imgSrc.length}%`,
                  }}
                />
              ))}
            {ourTip && (
              <Grid container direction="row-reverse">
                <Grid item xs={12} sm={8} className={classes.ourTipsWrapper}>
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
);
