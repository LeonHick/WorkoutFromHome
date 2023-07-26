import React from "react";
import { Typography } from "@material-ui/core";
import { ArticleTitle, ExerciseItem } from "../Components";
import Intro from "./Intro";
import Equipment from "./Equipment";
import WorkoutStructure from "./Structure";
import ArticleMargin from "../Components/ArticleMargin.js";
import goblet_squat from "../../Images/goblet_squat.jpg";
import lunge from "../../Images/lunge_2.jpg";
import calf_raise from "../../Images/calf_raises_1.jpg";
import prone_leg_raises from "../../Images/prone_leg_raises.jpg";
import SLDeadlift from "../../Images/single_leg_deadlift.jpg";
import squat from "../../Images/squat2.jpg";
import ArticleImage from "../Components/Image";

export default function Content() {
  return (
    <>
      <ArticleTitle>Feel the burn - leg workout</ArticleTitle>
      <ArticleImage src={squat} />
      <ArticleMargin>
        <Intro />
        {/* <Equipment /> */}
        <WorkoutStructure />
        <ExerciseItem
          title="Dumbbell Goblet Squats 4x10"
          imgSrc={[goblet_squat]}
          ourTip="Imagine spreading the floor apart with your feet."
        >
          <Typography paragraph>
            Squats are the boss of all leg exercises so you bet they’re first on
            this list. They are such an intense exercise that they can boost
            your hormone levels to make building strength and muscle in all
            areas of your body easier. It’ll even get your heart working!
          </Typography>
          <Typography paragraph>
            Place your legs roughly shoulder-width apart, but they can be wider
            if that feels more comfortable for you. Sit backwards as if you’re
            sitting down into a chair. Go as low as you can without your back
            bending and then pushing through your heels stand back up.
          </Typography>
          <Typography paragraph>
            It is important with squats to maintain excellent form to avoid
            injury. If you feel your back start to bend, your knees or your feet
            start to cave inwards, or you feel any twinges of discomfort then it
            is ok to not go as low. Flexibility will come with time.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Lunges 4x8"
          imgSrc={[lunge]}
          ourTip="The angle of your knees in your lunge should be about 90 degrees."
        >
          <Typography paragraph>
            Like squats, lunges are a great compound leg exercise, they work
            many of your leg muscles at once. Because it is a difficult movement
            that requires a lot of balance, you don’t need to use a huge amount
            of weight. This makes it the perfect leg exercise to use at home.
          </Typography>
          <Typography paragraph>
            You can choose to do this exercise by alternating your legs, or
            doing a full set on one leg and then swapping to the other. Either
            way the goal is to lunge down so that your knee nearly touches the
            floor, to then push back up.
          </Typography>
          <Typography paragraph>
            With this exercise keep your weight spread evenly between your two
            feet and try not to let your knee travel over your front foot.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Calf-Raises 4x10"
          imgSrc={[calf_raise]}
          ourTip="A step is a great place for calf raises because you can stretch out your calves."
        >
          <Typography paragraph>
            This might just be the simplest exercise ever but don't let that
            fool you into thinking it's not important. Strong calves are
            essential for stability, power and a well rounded physique so don't
            be tempted to skip this exercise. You simply stand up to your tip
            toes, then back down.
          </Typography>
          <Typography paragraph>
            This is a great time to work on your balance and your core stability
            while standing on your tiptoes. Look straight ahead and think of
            lightly pulling your belly button into your spine.
          </Typography>
          {/* <Typography paragraph>
            Here is where I have to acknowledge that some people struggle to
            grow their calves and are cursed to have small calves. I must
            confess that I have always been blessed with big calves, however, do
            not worry, having big calves is not everything everybody says it is…
            It is everything they say it is and more!
          </Typography> */}
        </ExerciseItem>
        <ExerciseItem
          title="Single Leg Romanian Deadlift 4x8"
          imgSrc={[SLDeadlift]}
          ourTip="Squeeze your glutes together as you stand up straight!"
        >
          <Typography paragraph>
            The back of your body is just as important to train as the front.
            This great variation of the Romanian deadlift is great for working
            out your hamstrings, lower back, and glutes. It is also great for
            working on your balance.
          </Typography>
          <Typography paragraph>
            To do this exercise keep your legs relatively straight with a very
            slight bend in the knee. Lean forward at the waist letting the leg
            that isn't on the floor rise up behind you. Bend until you feel a
            slight pull in the hamstring, then stand back up straight. You can
            do this exercise with or without weights depending on your level.
          </Typography>
          <Typography paragraph>
            Remember to keep your core engaged by lightly pulling your belly
            button towards your spine. This helps to protect your back.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Prone Leg-Raise 3x12"
          imgSrc={[prone_leg_raises]}
          ourTip="Keep your head in a neutral position to avoid uneccessary tension on the neck and spine."
        >
          <Typography paragraph>
            This exercise may look deceptively easy but it's all about
            contracting the right muscles. Lie down flat on your front, and with
            straight legs raise up one leg at a time up behind you. Really try
            and focus on feeling the muscle squeeze!
          </Typography>
          <Typography paragraph>
            You can even do this exercise on your elbows in a plank position to
            work your abs as well as your glutes and hamstrings.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To increase the difficulty:
            </Typography>
            Add ankle weights or hold your leg up for a few seconds each time.
            <Typography style={{ fontWeight: "bold" }}>
              To decrease the difficulty:
            </Typography>
            Do the exercise standing up, kicking your leg out behind you.
          </Typography>
        </ExerciseItem>
      </ArticleMargin>
    </>
  );
}
