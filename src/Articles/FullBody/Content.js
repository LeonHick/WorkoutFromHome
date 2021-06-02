import React from "react";
import { Typography } from "@material-ui/core";
import pressups_down from "../../Images/pressups_down_1.jpg";
import pressups_up from "../../Images/pressups_up_1.jpg";
import dumbbell_row from "../../Images/dumbbell_row.jpg";
import goblet_squat from "../../Images/goblet_squat_front_woman.jpg";
import dumbbell_flyes from "../../Images/dumbbell_flyes.jpg";
import dumbbell_flyes2 from "../../Images/dumbbell_flyes2.jpg";
import side_raises from "../../Images/side_raises.jpg";
import dumbbell_shoulder_press from "../../Images/dumbell_shoulder_press_landscape.jpg";
import overhead_press from "../../Images/overhead_press.jpg";
import shrugs1 from "../../Images/shrugs1.jpg";
import shrugs2 from "../../Images/shrugs2.jpg";
import curls from "../../Images/curls.jpg";
import dumbbell_lunge from "../../Images/dumbbell_lunge.jpg";
import hammer_curl1 from "../../Images/hammer_curl1.jpg";
import hammer_curl2 from "../../Images/hammer_curl2.jpg";
import SLDeadlift1 from "../../Images/SLDeadlift.jpg";
import SLDeadlift2 from "../../Images/SLDeadlift2.jpg";
import { useStyles } from "../../Styles";
import {
  ArticleTitle,
  DayTitle,
  ExerciseItem,
  NoteFromJosh,
  RoutineTable,
} from "../Components";
import Intro from "./Intro";
import Equipment from "./Equipment";
import WorkoutStructure from "./Structure";
import ArticleMargin from "../Components/ArticleMargin.js";

export default function Content() {
  const classes = useStyles();
  return (
    <>
      <ArticleTitle>Total Full Body Home Workout</ArticleTitle>
      <ArticleMargin>
        <Intro />
        <Equipment />
        <WorkoutStructure />
        <DayTitle>DAY 1</DayTitle>
        <ExerciseItem
          title="Press Ups 4x10"
          imgSrc={[pressups_down, pressups_up]}
          ourTip="Make sure to keep
          your head in a neutral position and your core tight to avoid strain on
          your neck and back."
        >
          <Typography paragraph>
            Press-ups are your go-to compound movement for a home workout.
            Nothing else works your upper body as much without equipment.
            Press-ups predominantly use your pectorals and your triceps.
          </Typography>
          <Typography paragraph>
            Keep your elbows tucked in to your sides to work your triceps more,
            or flare them out wide to focus on your chest. Secondary muscles
            such as front delts are also used but in a much smaller capacity. It
            is okay to go on your knees if your chest gets too tired to do a
            press up in the normal position as it will help you get a few more
            reps in.
          </Typography>
          <Typography paragraph>
            To increase difficulty, put your feet on a raised surface.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Overhead Shoulder Press 4x10"
          imgSrc={[dumbbell_shoulder_press]}
          ourTip="You don't need to touch the weights together at the top of this movement, doing so just takes the tension off your muscles."
        >
          <Typography paragraph>
            On to the first shoulder exercise. Shoulders are not to be neglected
            by anyone serious about fitness, as they are used whenever you pick
            something up, and as such are a secondary muscle group in
            practically every upper body exercise. One side-effect of this
            however is that lots of people tend to have really overdeveloped
            front delts in comparison to the rest of their shoulder, if this is
            an issue for you, please consider swapping in another side raise
            exercise instead of this.
          </Typography>
          <Typography paragraph>
            To perform this exercise hold both weights above your shoulders with
            your palms facing forward. Push the weight up until your arms are
            nearly straight, and then let the weight back down making sure it is
            always under control.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Rows 4x10"
          imgSrc={[dumbbell_row]}
          ourTip="Keep your core tight to avoid strain on your lower back.
        Avoid rounding your back."
        >
          <Typography paragraph>
            The back is probably the hardest muscle group to train at home. Pull
            ups are the ideal movement, however, on the assumption that not
            everybody has a pull-up bar in their house, we would recommend
            dumbbell rows.
          </Typography>
          <Typography paragraph>
            Lean with one side left or right of the bench and pull the weight
            towards where your stomach joins your hip. If you have a proper
            gym-style bench, this can be done lying with both arms at once,
            lying face down on the bench to work both sides of your back at the
            same time.
          </Typography>
          <Typography paragraph>
            This exercise can be done with heavier weight, but make sure that
            it’s not out of control and jerky. A big benefit of rows is that
            they will also work the commonly neglected muscles at the back of
            your shoulder as a secondary muscle group.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Goblet Squats 4x10"
          imgSrc={[goblet_squat]}
          ourTip="While doing this exercise make sure that your weight doesn't shift
          on to your toes. Always keep your core tight!"
        >
          <Typography paragraph>
            Squats are the staple movement for all of leg days! So this is no
            exception. Squats are a great all round leg exercise, working your
            quads, glutes, and hamstrings. They are also excellent for overall
            mobility and flexibility.{" "}
          </Typography>
          <Typography paragraph>
            To do this exercise stand up straight and hold the weight close to
            your chest, then imagine your hips moving backwards as if you were
            sitting down on a chair. Squat down as low as you comfortably can
            without your back rounding, and then pushing throught your heels,
            stand back up.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Triceps Overhead Press 4x10"
          imgSrc={[overhead_press]}
          ourTip="If you are working one arm at a time, use your free arm to
        hold your working-arm’s elbow in place. This reduces the pressure on your shoulder 
        joint and is especially important for people with a history of shoulder issues like 
        myself.

        (I dislocated my shoulder in a bike accident)."
        >
          <Typography paragraph>
            Whether you're looking for big arms like Arnold, or just a toned
            look, training your triceps is crucial. In fact, biceps only make up
            about a third of the upper arm muscle mass, with the other two
            thirds being made up by the triceps, so you hear that lads? If you
            want full arms, get training triceps more! They already get some
            secondary work in the press-ups so this should really finish them
            off.
          </Typography>
          <Typography paragraph>
            Your arm should be positioned above your head and the weight should
            be lowered just behind your head and back up. You can do this
            exercise either with both arms or one arm at a time.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAY 2</DayTitle>
        <ExerciseItem
          title="Dumbbell Flyes 4x10"
          imgSrc={[dumbbell_flyes, dumbbell_flyes2]}
          ourTip="The best way is to stop the movement before they touch and
        immediately start the next rep. This keeps the tension on your
        muscles."
        >
          <Typography paragraph>
            Another classic home workout exercise. In general, no other exercise
            will be as effective at isolating your chest muscles. If done right,
            no other muscle groups will work hard during this exercise. The
            exercise is most effective if you have a bench or you are suspended
            above the ground slightly as this will allow for greater range of
            motion.
          </Typography>
          <Typography paragraph>
            To do this exercise lower the weights out to your side, stop just
            before you feel a stretch in your shoulders, and then bring them
            back up to the middle.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Side Raises 4x10 or Gauntlet Set"
          imgSrc={[side_raises]}
          ourTip="If your side delts are very tired at the end of one of the sets and
        you know you will not be able to complete the exercise, then you do the
        movement with no weight to achieve sufficient burnout."
        >
          <Typography paragraph>
            An excellent exercise for strength and shoulder stability. Whether
            you're trying to tone up or build a set of impressive shoulders this
            exercise is a must do. The standard set variation is an option, but
            I love to do what I call a gauntlet set to really feel the burn.
          </Typography>
          <Typography paragraph>
            You start with a heavy weight where you can do about 5 reps of the
            exercise. You do as many reps as you can with that weight and then
            you drop the weight to about 75%. You do as many reps as you can,
            and then drop it down again. You do as many reps as you can with
            that weight and then you climb back up again.
          </Typography>
          <Typography paragraph>eg)</Typography>
          <RoutineTable
            headers={["weight", "reps"]}
            rows={[
              {
                weight: "10kg",
                reps: "as many as poossible",
              },
              {
                weight: "8kg",
                reps: "as many as poossible",
              },
              {
                weight: "4kg",
                reps: "as many as poossible",
              },
              {
                weight: "8kg",
                reps: "as many as poossible",
              },
              {
                weight: "10kg",
                reps: "as many as poossible",
              },
            ]}
          />
          <Typography paragraph style={{ paddingTop: 40 }}>
            You can stop hallway if this is too much initially, but trust me
            there is no other way to feel the burn more.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Shrugs 4x10"
          imgSrc={[shrugs1, shrugs2]}
          ourTip="Bend
        forwards slightly to maximise the
        activation of traps. As always make sure you don't round your back."
        >
          <Typography paragraph>
            Dumbbell shrugs are to target the traps on the top of the back. A
            lot of people assume shrugs must be a shoulder exercise, but
            actually it is a back exercise. Doing shrugs will grow your traps on
            the front of your shoulders/neck which is why people assume they are
            part of the shoulder grouping.
          </Typography>
          <Typography paragraph>
            Traps have functional value as they are used a lot in general life
            and the gym. Big compound lifts like Deadlift, Squat and Clean and
            Jerk all use the traps in various ways. Traps also support the
            shoulder joints by helping to hold your arms in their sockets.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Bicep Curls 4x10"
          imgSrc={[curls]}
          ourTip="You can work your biceps even harder by cheating a couple of reps with a bit of a swing once you can't do any more with strict form"
        >
          <Typography paragraph>
            Here we are, the one most of you were looking for. Asking how much
            you can curl is a staple in gyms worldwide, second only to "How much
            do you bench?" because of this many people make the mistake of
            curling too much weight.
          </Typography>
          <Typography paragraph>
            The bicep is a relatively small muscle, so focus on not letting your
            shoulders take over the movement just to get the weight up. Keep
            them relaxed and really focus on feeling your biceps flex.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Weighted Lunge 4x10"
          imgSrc={[dumbbell_lunge]}
          ourTip="Keep your back
        straight and lean into the movement, it should be smooth with your weight equally balanced between your feet."
        >
          <Typography paragraph>
            Now it is important not to be ashamed of the prospect of doing
            weighted lunges until you cry. This is why we do workouts from home.
            Seriously though, it is a very tough movement to do repeatedly as it
            really puts pressure on your hamstrings and quads. If you don’t want
            to brag about doing Dumbbell Weighted Lunges, that’s on you, but the
            exercise is legit and will fatigue your muscles to a great extent.
          </Typography>
          <Typography paragraph>
            Alternating legs and going until failure is an option for the
            sado-masichists amongst us but for normal people 4x10 will do, maybe
            even 3x10 if it’s your first time. Don’t dip too much lower than 90
            degrees unless you have the flexibility to do so. If you push legs
            hard enough after not training for a while, you will not be able to
            move properly the morning after. I have a friend who still tells
            people about his Mum having to put his socks on his feet for him the
            morning after his first leg day.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAY 3</DayTitle>
        <ExerciseItem
          title="Dumbbell Romanian Deadlift 4x10"
          imgSrc={[SLDeadlift1, SLDeadlift2]}
          ourTip="Stop the movement just before you fully stand up straight
        to use less of your lower back muscles and your traps, which are not the
        target groups here."
        >
          <Typography paragraph>
            The Romanian deadlift or “straight-leg” deadlift is the staple of
            hamstring training due to its intensity and focus on your hamstring
            muscles.
          </Typography>
          <Typography paragraph>
            Remember to only bend as far forward as possible, without straining
            or bending your back. You should feel a small tug on the hamstring,
            do not try and touch the floor if you do not have the flexibility.
            Your range of motion with this exercise should improve over time.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Hammer Curls 4x10"
          imgSrc={[hammer_curl1, hammer_curl2]}
          ourTip="Keep your back straight or you will
        start to move your shoulders forward and they will start supplementing
        the lift."
        >
          <Typography paragraph>
            The second most fun dumbbell exercise for growing biceps. The hammer
            curl targets the longer head of the two bicep heads and is excellent
            thickening exercise for those of us whose bodies resemble
            freshly-shaved sheep.
          </Typography>
          <Typography paragraph>
            This exercise is a lot like the standard bicep curl, but rather than
            twisting your wrist so that you finish the movement with your parms
            facing the ceiling, both of your palms should stay facing towards
            your side for the entire exercise.
          </Typography>
          <Typography paragraph>
            Hammer curls can usually be done with higher weights than their
            conventional cousin, purely because the wrist is twisted, so more
            weight can be loaded through it. People with wrist issues should
            consider only doing hammer curls and forgoing any kind of barbell
            work where the wrist is under more pressure.
          </Typography>
        </ExerciseItem>
        <Typography paragraph style={{ fontStyle: "italic", paddingTop: 40 }}>
          These last two exercises have already been explained earlier on in the
          routine so I'm not going to go into more detail about them.
        </Typography>
        <ExerciseItem title="Press Ups 4x10" />
        <ExerciseItem title="Dumbbell Side Raises 4x10 or Gauntlet Set" />
      </ArticleMargin>
    </>
  );
}
