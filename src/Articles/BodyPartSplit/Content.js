import React from "react";
import { Typography } from "@material-ui/core";
import placeholder from "../../Images/Home.jpg";
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
  RoutineTable,
} from "../Components";
import Intro from "./Intro";
import Equipment from "./Equipment";
import WorkoutStructure from "./Structure";
import ArticleMargin from "../Components/ArticleMargin.js";
import { NoteToSelf } from "../../Widgets";

export default function Content() {
  const classes = useStyles();
  return (
    <>
      <ArticleTitle>The Classic Body Part Split</ArticleTitle>
      <ArticleMargin>
        <Intro />
        <Equipment />
        <WorkoutStructure />
        <DayTitle>DAY 1 - Chest</DayTitle>
        <ExerciseItem
          title="Dumbbell Bench Press 4x10"
          imgSrc={[placeholder]}
          ourTip="The best way is to stop the movement before they touch and immediately start the next rep."
        >
          <Typography paragraph>
            The best isolation exercise for chest, no matter if you have
            dumbbells or cables, or are inside a gym or outside a gym, this is
            the best… well outside the gym will be colder… I could not resist.
          </Typography>
          <Typography paragraph>
            Okay, back to the description… YOU DO NOT NEED TO TOUCH THE WEIGHTS
            TOGETHER AT THE TOP OF THE MOVEMENT. This is noisy and pointless.
            The exercise if functionally most effective if you have a bench or
            you are suspended above the ground slightly as this will allow for
            greater range of movement, you will then pull your arms towards the
            middle of your body in a smooth fashion.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Press Ups 4x10"
          imgSrc={[placeholder]}
          ourTip="Make sure to keep your head in a neutral position and your core tight to avoid strain on your neck and back. "
        >
          <Typography paragraph>
            The king of bodyweight exercises. The press up is perfect for
            general fitness and as part of an intense program alike. Some people
            prefer to keep the press ups for the end of the workout to use as a
            burnout or finisher exercise
          </Typography>
          <Typography paragraph>
            Feet shoulder-width apart, arms on the floor. Lower yourself towards
            the ground and push back up. Remember to keep your backside in-line
            with the rest of your body and not to bounce between press ups,
            otherwise they do not count.
          </Typography>
          <Typography paragraph>
            Good form is very important with pressups so if you're starting to
            notice your back bending it's much better to do the exercise with
            your knees on the floor. To increase difficulty, put your feet on a
            raised surface.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Plate Pinch 3 x As Long as Possible"
          imgSrc={[placeholder]}
          ourTip="The range of motion of this movement will be very small, so do not worry if it feels like you're not moving the weight very far."
        >
          <Typography paragraph>
            The plate pinch is very much about the contraction on the repetition
            as a means to tire the muscle out. Lying with your back flat, squash
            a plate/weighted object between your hands and push upwards, keeping
            the squeeze.
          </Typography>
          <Typography paragraph>
            This is very intense, and some people prefer to keep it for a
            finisher, but every exercise cannot be a finisher.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Single-Arm Hammer Fly 3x5/8"
          imgSrc={[placeholder]}
          ourTip="Do not go too heavy in weight or your shoulder will start to ache because the strain is too much, like the last exercise this is about contracting the pectoral more than the weight you are lifting."
        >
          <Typography paragraph>
            This is a more broken-down and intense movement than the dumbbell
            fly we have already done
          </Typography>
          <Typography paragraph>
            These are one arm, so they target one pectoral at a time, they are
            also done in the plane of movement of the bench press in terms of
            hand position. An overhand grip, but the movement is classic fly,
            out to the side and back to the middle, it is just done in a hammer
            grip.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAY 2 - Legs</DayTitle>
        <ExerciseItem
          title="Dumbbell Squats 4x10"
          imgSrc={[placeholder]}
          ourTip="Keep your back straight and core tight to avoid any lower back pain."
        >
          <Typography paragraph>
            Squats are famously the most reliable leg day movement. They are so
            intense as a compound exercise that they actually raise your
            testosterone levels if done regularly.
          </Typography>
          <Typography paragraph>
            Legs should be shoulder-width apart and you should lower yourself
            towards the ground, stopping when you are parallel to the ground.
            Remember to hold dumbbells in each hand.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Lunges 4x10"
          imgSrc={[placeholder]}
          ourTip="Keep your back straight and lean into the movement, it should be smooth."
        >
          <Typography paragraph>
            This is the most humbling exercise in terms of, you can never get as
            low as doing dumbbell lunges until you cry and then your housemate
            brings their attractive course mate over just in time to see you in
            a puddle of your own tears and shame…. Moving on from how
            suspiciously specific that was to tell you not to dip too far below
            parallel.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Calf-Raises 4x10"
          imgSrc={[placeholder]}
          ourTip="A step is a great place for calf raises because you have space to really stretch your calves."
        >
          <Typography paragraph>
            This is the easiest exercise to do ever besides no exercise. You use
            your calves every day to move anywhere, so they are good at
            movements. You simply stand and extend your legs up to your tip
            toes, then back down.
          </Typography>
          <Typography paragraph>
            Here is where I have to acknowledge that some people struggle to
            grow their calves and are cursed to have small calves. I must
            confess that I have always been blessed with big calves, however, do
            not worry, having big calves is not everything everybody says it is…
            It is everything they say it is and more!
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Prone Leg-Raise 4x10"
          imgSrc={[placeholder]}
          ourTip="Do not lift your head up when doing this exercise, this puts unnecessary strain on your spine."
        >
          <Typography paragraph>
            This one is straight out of the bums n tums guidebook. An exercise
            that looks more comfortable in a yoga retreat than in a gym, but it
            is legitimate. You lie face down on a mat and raise your legs in an
            alternating fashion up and out behind you. This is a glute and
            hamstring exercise, and it is very tough.
          </Typography>
          <Typography paragraph>
            Doing this exercise one leg at a time is a great variation if it's
            too hard to do both legs at once.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Box Squats 4x10"
          imgSrc={[placeholder]}
          ourTip="Your box should be tall enough so that your thighs are roughly parallel to the floor as you sit on it."
        >
          <Typography paragraph>
            This exercise probably needs to be weightless, because by this point
            if you can hold weights and still make your sets of 10 comfortably
            then you are a beast.
          </Typography>
          <Typography paragraph>
            The exercise is how it sounds, you put a box down and squat until
            your bottom touches the box and then rise back up. A rest on the box
            is sometimes needed. Do not injure yourself with too much overload,
            if you reach this point and your legs are not stable, then just
            stop. DON’T INJURE YOURSELF FOR EGO.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAY 3 - arms</DayTitle>
        <ExerciseItem
          title="Bicep Curl 4x10"
          imgSrc={[placeholder]}
          ourTip="Flare your wrists at the end of the movement slightly to work the outer bicep head more and focus on the separation."
        >
          <Typography paragraph>
            Staple one of the workout world, except maybe bench press. However,
            as I have elaborated on in a previous article, the hype around the
            bicep curl is more than the reality.
          </Typography>
          <Typography paragraph>
            A bicep curl is to isolate the biceps from the rest of your working
            muscles, it is excellent for this. I also mentioned previously that
            biceps only make up one third of the upper arm mass, with the other
            two thirds coming from triceps, which you also get to train today,
            so do not skip on them.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Overhead Triceps Press 4x10"
          imgSrc={[placeholder]}
          ourTip="Use your free arm to hold your working-arm’s elbow in place. This increases the isometric contraction and also reduces the pressure on your shoulder joint. This is especially important for people with a history of shoulder issues like me (I dislocated my shoulder in a bike accident)."
        >
          <Typography paragraph>
            Here we are adding to the bicep pump to fill your arm with blood.
            Triceps get work on chest days, but absolutely need their own
            accessory work, whether for strength training for aesthetics. Your
            arm should be positioned above your head and the weight should be
            lowered just behind your head and then back up.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Hammer Curls 4x10"
          imgSrc={[placeholder]}
          ourTip="Keep your back straight or you will start to move your shoulders forward and they will start supplementing the lift."
        >
          <Typography paragraph>
            The thickening exercise for biceps. Your standard curl provides more
            shape to your bicep, more peak. The hammer curl is mostly just
            thickness, shape comes second
          </Typography>
          <Typography paragraph>
            The starting position as normal curls, just the wrist is not flared,
            your palms are facing inwards and pull the weight up towards you.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Tricep Kickbacks 4x10"
          imgSrc={[placeholder]}
          ourTip="Try and keep your back straight or you will be seriously risking injury. Keep the movement small and focused."
        >
          <Typography paragraph>
            Another triceps exercise to make it two for two with biceps and
            triceps now. You should lean forward on something (e.g., a bench)
            and use your free hand to support you.
          </Typography>
          <Typography paragraph>
            Kick back the arm holding the weight behind you. Do not go too
            heavy, gravity helps with this movement. Again, I feel the need to
            say that your shoulders are under a lot of pressure in this movement
            so do not overextend at the top.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Tricep Dips 3 x As Many Reps As Possible"
          imgSrc={[placeholder]}
          ourTip="If your shoulders are hurting, you are suspended too low down for a successful movement."
        >
          <Typography paragraph>
            This is the perfect finisher, the pump after these is insane. You
            set up in a reverse press up position over a bench and put your feet
            up if you only have a bench.
          </Typography>
          <Typography paragraph>
            If you have a convenient dip station, then by all means use that but
            most people will not have a convenient dip station. I had one in my
            family home between the kitchen worktops, they were just far apart
            enough for me to use them for dips. Lower yourself down and then
            push back up, simple right?
          </Typography>
          <Typography paragraph>
            A good way to make this exercise easier is to bend your legs and
            plant your feet flat on the floor. This should take some of the
            weight off of your triceps.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAY 4 - shoulders</DayTitle>
        <ExerciseItem
          title="Front Raise 4x10"
          imgSrc={[placeholder]}
          ourTip="Do not touch the weights at the top… Please?"
        >
          <Typography paragraph>
            A classic shoulder exercise, so naturally it makes the cut. I see so
            many people overtraining their front delts compared to their
            side/rear delts to the point where it looks silly, because there is
            only front delt to be seen.
          </Typography>
          <Typography paragraph>
            This exercise is done with a dumbbell either side of your head in a
            seated or standing position, then push them both up and lower them
            down keeping the stop point at your ear height.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Side Raise 3x10 or Gauntlet Set"
          imgSrc={[placeholder]}
          ourTip="If your side delts are very tired at the end of one of the sets and you know you will not be able to complete the exercise, then you can substitute in flapping your arms in the correct plane of movement to achieve sufficient burnout. "
        >
          <Typography paragraph>
            The sickest exercise for adding width to your shoulders, side delts
            should dominate your shoulder days, not front delt work. This is my
            favourite thing to train, and the gauntlet set is my baby that I
            created with my friend Leon around 2015. Those of you concerned
            about the lower volume on shoulder day should not be, the gauntlet
            set will be enough to fatigue you sufficiently, I promise.
          </Typography>
          <NoteToSelf>Gauntlet stuff</NoteToSelf>
        </ExerciseItem>
        <ExerciseItem
          title="Rear Delt Flyes 4x10"
          imgSrc={[placeholder]}
          ourTip="Keep the range of motion very small and focus on the contraction."
        >
          <Typography paragraph>
            Your rear delts get some decent work on back day, as you are pulling
            everything towards you. Therefore, they are one of the most used
            muscles in the body. They also tend to be one of the most imbalanced
            muscle groups because of the tendency to overtrain front delt.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAY 5 - back</DayTitle>
        <ExerciseItem
          title="Dumbbell Rows 4x10"
          imgSrc={[placeholder]}
          ourTip="Keep your core tight to avoid strain on your lower back."
        >
          <Typography paragraph>
            Make sure to lean to one side, left or right of the bench and pull
            the weight up to your side, just under your working lat.
          </Typography>
          <Typography paragraph>
            <Typography paragraph>
              Make sure to lean to one side, left or right of the bench and pull
              the weight up to your side, just under your working lat.
            </Typography>
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Pullovers 4x10"
          imgSrc={[placeholder]}
          ourTip="Keep a slight arch in your back, but do not overextend."
        >
          <Typography paragraph>
            The exercise that first and foremost makes me think of Arnold. Some
            of you will be wondering how this is a back exercise, but I assure
            you it is. You lie flat backed on a bench and hold the weight above
            you before lowering it behind your head to about parallel and then
            bringing it back to centre.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Inverted Dumbbell Row 4x10"
          imgSrc={[placeholder]}
          ourTip="Keep your back straight and in-line with the rest if your body for stability."
        >
          <Typography paragraph>
            This exercise is very similar to the dumbbell rows, but this is an
            altered version. Both arms have a dumbbell, but it is important that
            you supinate your wrist inwards, sort of like a bicep curl. This is
            an underhand grip and will force a lower part of the lat to engage
            in the movement.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Shrugs 4x10"
          imgSrc={[placeholder]}
          ourTip="Lean forwards slightly whilst keeping your back straight."
        >
          <Typography paragraph>
            The trapezius muscles on the upper back do a lot for the size of
            your upper back. Especially for thickness and aesthetics. As we have
            discussed previously, traps are also one of the most used muscles in
            compound lifts like deadlift and clean & jerk, so they are
            beneficial to train. Shrugs are best done with a slow raise up and a
            drop down and catch as the second part of the movement.
          </Typography>
        </ExerciseItem>
      </ArticleMargin>
    </>
  );
}
