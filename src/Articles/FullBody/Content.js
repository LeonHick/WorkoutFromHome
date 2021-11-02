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
          id="pressups"
          title="Press Ups 4x10"
          imgSrc={[pressups_down, pressups_up]}
          ourTip="Make sure to keep
          your head in a neutral position and your core tight to avoid strain on
          your neck and back."
        >
          <Typography paragraph>
            Press-ups should be your go-to chest movement for a home workout.
            Nothing else works your upper body as much without equipment. It
            focuses mainly on your chest and triceps but also recruits muscles
            in your core, shoulders, and back.
          </Typography>
          <Typography paragraph>
            Keep your elbows tucked in to your sides to work your triceps more,
            or flare them out wide to focus on your chest. It is okay to go on
            your knees at any point if you feel your back arching – good form is
            important to avoid injuries. If you haven't done so already, putting
            your knees down is also a great way to squeeze in an extra few reps
            at the end of your set.
          </Typography>
          <Typography paragraph>
            If you feel like increasing the difficulty put your feet on a raised
            surface like your sofa.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Overhead Shoulder Press 4x10"
          imgSrc={[dumbbell_shoulder_press]}
          ourTip="You don't need to touch the weights together at the top of this movement, doing so just takes the tension off your muscles."
        >
          <Typography paragraph>
            On to the first shoulder exercise. Shoulders are not to be neglected
            by anyone serious about fitness, as they are used in practically
            every upper body exercise and are an important part of a balanced
            physique and a healthy body.
          </Typography>
          <Typography paragraph>
            One thing to keep in mind however is that many people tend to be
            overdeveloped in the front of their shoulder in comparison to the
            side and back. If this is an issue for you, consider swapping in
            another exercise such as <a href="placeholder">side raises</a> or{" "}
            <a href="placeholder">rear delt flyes</a>.
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
          ourTip="Keep your core tight and avoid rounding your back to avoid strain on your lower back."
        >
          <Typography paragraph>
            The back is probably the hardest muscle group to train at home. Pull
            ups are the ideal movement, but given a pull up bar is not something
            that everyone has at home we recommend dumbbell rows.
          </Typography>
          <Typography paragraph>
            Stand to one side of a bench or chair. Put one hand on the surface
            and pull the weight towards where your stomach joins your hip. If
            you have a proper gym-style bench, you can do this with both arms at
            once, lying face down on the bench.
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
            Squats are the staple movement of all leg days and this is no
            exception. Squats are a great all round leg exercise, working the
            front and back of your legs as well as your glutes. They are also
            excellent for overall mobility and flexibility.
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
        hold the other elbow in place."
        >
          <Typography paragraph>
            Whether you're looking for big arms like Arnold Schwarzenegger, or
            just a toned look, training your triceps is crucial. In fact triceps
            make up about two thirds of your upper arm so they really shouldn't
            be neglected! They already get worked a bit in the press-ups so this
            should really finish them off.
          </Typography>
          <Typography paragraph>
            Start with the weight above your head with your arm straight. Lower
            the weight until you feel a stretch in your arm and then raise it
            again. You can do this exercise either with both arms or one arm at
            a time.
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
            This is another staple of a chest workout and is great for really
            focusing on the chest muscles. The exercise is most effective when
            done lying on a bench so that your rang of motion isn't limited but
            it can be done lying on the floor as well.
          </Typography>
          <Typography paragraph>
            To do this exercise start on your back with the weights above your
            chest. Lower the weights out to your side with a slight bend in your
            arms, stopping just before you feel a stretch in your shoulders.
            Then imagine you're giving someone a massive hug and bring the
            weights back up to the middle.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          id="sideraises"
          title="Dumbbell Side Raises 4x10 or Gauntlet Set"
          imgSrc={[side_raises]}
          ourTip="You can do extra reps of this movement with no weight at the end of the exercise to really tire out the muscles."
        >
          <Typography paragraph>
            An excellent exercise for strength and shoulder stability. Whether
            you're trying to tone up or build a set of impressive shoulders this
            exercise is a must.
          </Typography>

          <Typography paragraph>
            This is a nice simple movement, start with your arms by your side,
            then with a slight bend in your arms bring the weights out to the
            side and back down again.
          </Typography>
          <Typography paragraph>
            The standard set variation is an option, but I love to do what I
            call a gauntlet set to really feel the burn.
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
                reps: "as many as possible",
              },
              {
                weight: "8kg",
                reps: "as many as possible",
              },
              {
                weight: "4kg",
                reps: "as many as possible",
              },
              {
                weight: "8kg",
                reps: "as many as possible",
              },
              {
                weight: "10kg",
                reps: "as many as possible",
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
          ourTip="Keep your arms straight to make sure your biceps aren't taking over some of the work."
        >
          <Typography paragraph>
            We do dumbbell shrugs to work the upper trapezius muscles between
            your shoulder and neck. Strong traps are crucial for healthy stable
            shoulders and are an underrated part of a great physique.
          </Typography>
          <Typography paragraph>
            To do this exercise let your arms hang heavy while holding the
            weights. Bend forward slightly and shrug your shoulders up to your
            ears and back down again. Don't worry if you make a stupid face
            while doing these, it happens to us all.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Bicep Curls 4x10"
          imgSrc={[curls]}
          ourTip="You can work your biceps even harder by doing a couple of reps with a bit of a swing once you can't do any more with strict form"
        >
          <Typography paragraph>
            The bicep is a relatively small muscle, so make sure you're not
            letting your ego take over here and using too much weight. Focus on
            not letting your shoulders take over the movement just to get the
            weight up. Keep them relaxed and really focus on feeling your biceps
            flex.
          </Typography>
          <Typography paragraph>
            Start with the weight by your side, keep your elbows tucked in
            against your chest and lift the weight up as far as it can without
            your elbow moving forward. Squeeze for a second and then let the
            weight back down.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Weighted Lunge 4x10"
          imgSrc={[dumbbell_lunge]}
          ourTip="Your weight should be equally balanced between your feet."
        >
          <Typography paragraph>
            Dumbbell lunges are a deceptively difficult movement that requires a
            good amount of balance as well as strength, so don’t be disheartened
            if you have to start off with relatively light weights. This means
            that they’re great for at home workouts because you don’t need a lot
            of expensive equipment to work your legs hard.
          </Typography>
          <Typography paragraph>
            When you lunge down try to keep your weight spread evenly between
            your feet. The goal is to stop just before your knee touches the
            ground but if that does not feel comfortable for you then feel free
            to only go as low as you need.
          </Typography>
          <Typography paragraph>
            If you push legs hard enough especially if you are just getting
            started or are returning after not training for a while, you will
            not be able to move properly the morning after. I have a friend who
            still tells people about his Mum having to help him put his socks on
            the morning after his first leg day so take it easy as your learn
            your body’s limits.
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
            muscles. It's a perfect at home exercise to work your legs without
            much equiptment.
          </Typography>
          <Typography paragraph>
            To do this exercise hold the dumbbells with straight arms and have a
            slight bend in your knees to protect them. Bend as far forward as
            possible, without straining or bending your back, you should feel a
            small tug on the hamstring. Then imagine pushing the ground away
            from you and stand back up straight.
          </Typography>
          <Typography paragraph>
            Avoid putting your weight on your toes and do not try and touch the
            floor if you do not have the flexibility. Your range of motion with
            this exercise should improve over time.
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
            curl targets the longer head of the two bicep heads and is crucial
            for developing that full bicep shape.
          </Typography>
          <Typography paragraph>
            This exercise is a lot like the standard bicep curl but your palms
            should stay facing eachother for the entire exercise. Like with
            standard curls keep your shouders relaxed to ensure your biceps are
            doing all of the work.
          </Typography>
          <Typography paragraph>
            Hammer curls can usually be done with higher weights than their
            conventional cousin, and are a great exercise for people whose
            wrists hurt during standard barbell or dumbbell curls.
          </Typography>
        </ExerciseItem>
        <Typography paragraph style={{ fontStyle: "italic", paddingTop: 40 }}>
          These last two exercises have already been explained earlier on in the
          routine so I'm not going to go into more detail about them.
        </Typography>
        <ExerciseItem to="#pressups" title="Press Ups 4x10" />
        <ExerciseItem
          to="#sideraises"
          title="Dumbbell Side Raises 4x10 or Gauntlet Set"
        />
      </ArticleMargin>
    </>
  );
}
