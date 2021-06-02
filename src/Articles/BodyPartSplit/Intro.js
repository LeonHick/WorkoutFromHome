import React from "react";
import { Typography } from "@material-ui/core";
import { fullbodyLinks } from "../Links";
import { NoteToSelf } from "../../Widgets";

export default function Intro() {
  return (
    <>
      <NoteToSelf>
        This is going to have to be rewritten to be for gender neutral
      </NoteToSelf>
      <Typography paragraph variant="body1">
        This is simply the most fun split for training, simple to keep track of
        and easy to overload the muscles on the respective days. Not to mention
        that this is the unofficial pump-chasers workout, purely for the
        one-muscle-group per day and the freedom that provides to pile on one
        muscle and push your pump to the extreme. Pump-chasing has a bad
        reputation in the fitness bubble, but there are far worse ways to train,
        and you will thoroughly enjoy your split, as well as making very decent
        gains.
      </Typography>
      <NoteToSelf>
        Probs here just say something like it's highly customizable and
        adaptable to focus more on a specific body part. You can essentially
        tailor your workout to emphasise your goals
      </NoteToSelf>
      <Typography>
        Another thing to note is that bro split is perfect for lads who do not
        care about their legs. We all have that friend who does not care about
        their legs. Take out legs and add another arms day if you wish, fitness
        is about what you enjoy doing as well as gains. Bro split is brilliant
        for building back and shoulders I have found, those two muscle groups
        respond well to a day of their own training. Something to mind when
        doing the bro split is that weak muscle-groups need more work that
        once-a-week. My arms are my weakest body part in terms of how easily
        they build size, and they were noticeably lagging behind my
        shoulders/chest i.e., the body parts that respond well to the
        once-a-week format.
      </Typography>

      <Typography paragraph variant="body1">
        I built my base using a bro split between the ages of 16 and 21, it
        served me very well in building that initial foundation of muscle that
        you keep for the rest of your life.
      </Typography>
    </>
  );
}
