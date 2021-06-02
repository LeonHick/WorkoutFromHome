import React from "react";
import {
  Typography,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import { fullbodyLinks } from "../Links";

export default function Equipment() {
  return (
    <>
      <List>
        <Typography>For this workout you will need:</Typography>
        <ListItem>
          <ListItemIcon>•</ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
            }}
            primary={
              <a
                href={fullbodyLinks.toAmazonDumbbells}
                target="_blank"
                style={{ fontWeight: "bold" }}
              >
                Dumbbells
              </a>
            }
          />
        </ListItem>
        <Typography>Other useful pieces of equipment:</Typography>
        <ListItem>
          <ListItemIcon>•</ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
            }}
            primary={
              <>
                <a
                  href={fullbodyLinks.toAmazonDumbbells}
                  style={{ fontWeight: "bold" }}
                  target="_blank"
                >
                  Yoga Mat
                </a>{" "}
                for a comfortable place to exercise.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>•</ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
            }}
            primary={
              <>
                <a
                  target="_blank"
                  href={fullbodyLinks.toAmazonDumbbells}
                  style={{ fontWeight: "bold" }}
                >
                  Barbell
                </a>{" "}
                to add variety to the workout. It also allows you to add more
                weight if you can't get your hands on heavy enough dumbbells.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>•</ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
            }}
            primary={
              <>
                <a
                  target="_blank"
                  href={fullbodyLinks.toAmazonDumbbells}
                  style={{ fontWeight: "bold" }}
                >
                  Kettlebells
                </a>{" "}
                these are great to change the way a movement feels if your
                workouts are becoming stale.
              </>
            }
          />
        </ListItem>
      </List>
      <Typography paragraph variant="body1">
        If you're looking to really jumpstart your home workouts check out our
        review of the{" "}
        <a href={fullbodyLinks.toEssentialEquipmentReview}>
          Top 10 most essential bits of equipment to workout from home.
        </a>{" "}
        Or if you want to workout without any equipment check out this{" "}
        <a href={fullbodyLinks.toBodyweightRoutine}>
          Awesome Bodyweight Workout
        </a>
      </Typography>
    </>
  );
}
