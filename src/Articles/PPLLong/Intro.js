import React from "react";
import { Typography } from "@material-ui/core";
import { fullbodyLinks } from "../Links";

export default function Intro() {
  return (
    <>
      <Typography paragraph variant="body1">
        In order to fit in as many workouts as we can into the week, for this
        routine we will split the exercises into three categories: push
        movements, pull movements, and leg exercises. We will repeat each
        category twice a week. In my opinion, Push-Pull-Legs is the most
        efficient method of training to see the most results. Especially if you
        are a keen lifter. This is only because PPL provides a good amount of
        rest coupled with a large amount of volume per week, per muscle group.
        Even though you are training six times a week, each muscle group is
        being worked a maximum of twice, with at least 48 hours rest between
        working days. This is enough time for your muscles to have properly
        recovered to the point of being receptive to training again.
      </Typography>
      <Typography paragraph variant="body1">
        Another good function of this training split is that, because everything
        is done multiple times, it is easy to focus on weak points or weak
        muscle groups for maximum progress. For example, if your legs are
        lagging behind the rest of your body, train legs twice a week instead of
        one of the other muscle groups. Because body parts are trained so
        frequently, even in busy weeks you will still manage to target each
        muscle group at least once.
      </Typography>
      <Typography paragraph variant="body1">
        Once again I reiterate that this is probably the most volume you can
        squeeze into this time period without your body suffering negative
        consequences.
      </Typography>
      <Typography paragraph variant="body1">
        As always it is important to make sure that your fitness expectations
        are challenging but sensible. Reasonable and attainable fitness goals
        are essential to your mental health so try not to compare yourself to
        people whose entire lives revolve around maintaining a certain physique.
      </Typography>
      <Typography paragraph variant="body1">
        This split is excellent for strength training and hypertrophy training
        alike, it depends on the rep ranges you choose. Our rep ranges support
        hypertrophy training more, if you want to gear it more towards strength
        training, half the reps per set and up the weight.
      </Typography>
    </>
  );
}
