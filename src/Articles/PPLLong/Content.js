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
  NoteFromJosh,
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
      <ArticleTitle>INTENSIVE SIX DAY HOME WORKOUT</ArticleTitle>
      <NoteToSelf>
        THIS PROBABLY NEEDS A ONCE OVER SO IT'S NOT JUT ONE WORKOUT REPEATED
      </NoteToSelf>
      <ArticleMargin>
        <Intro />
        <Equipment />
        <WorkoutStructure />
        <DayTitle>DAYS 1 & 4 - PULL</DayTitle>
        <ExerciseItem
          title="Rear Delt Flyes 4x10"
          imgSrc={[placeholder]}
          ourTip="Make sure to keep
          your head in a neutral position and your core tight to avoid strain on
          your neck and back."
        >
          <Typography paragraph>
            The first area of the shoulder to be targeted in this workout. All
            three delt heads will be targeted, with only side delts being
            trained twice, as they get the least work in compound movements.
            Rear delts are used to pull anything towards you, therefore they get
            a lot of use, not least in back movements. Lean forward with
            dumbbells out to the front, then pull out to each side, but only
            move something like 45 degrees out to the side then repeat the
            movement.
          </Typography>
          <Typography paragraph>
            Increase the difficulty of this exercise by removing the balancing
            aid. Lean forward, keeping your back straight and mimic the same
            movement as the isolation, just with both arms at the same time.
            This dramatically increased the compound nature of the exercise.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Row 4x10"
          imgSrc={[placeholder]}
          ourTip="When you get to the top of the movement, supinate your wrist a small amount as the movement ends to  force more of a contraction from the lat."
        >
          <Typography paragraph>
            This is the best home workout movement for back after pullups.
            Because more people have dumbbells than a pull up bar, we have gone
            with this. Try and use as heavy a weight as you can whilst not
            sacrificing form. Make sure to lean to one side, left or right of
            the bench with your arm extended out in front of you, then pull the
            weight up to just under your working lat. Squeeze the muscle here,
            this will help you learn how to flex your lats.
          </Typography>
          <Typography paragraph>
            Increase the difficulty of this exercise by removing the bench. You
            will want to lean forward, whilst keeping your back straight. Then
            pull the weight towards you in a smooth fashion in the same manner
            as above.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Inverted Row 4x10"
          imgSrc={[placeholder]}
          ourTip="Lean against something raised for the best support. If not, place a knee and an arm on something and pull with one arm at a time. A proper bench allows for both sides to be utilised at the same time, making the exercise more compound in nature."
        >
          <Typography paragraph>
            The back is probably the hardest muscle group to train at home. Pull
            ups are the ideal movement, however, on the assumption that not
            everybody has a pull-up bar in their house, we would recommend
            dumbbell rows.
          </Typography>
          <Typography paragraph>
            An exercise from the same neck of the woods as Dumbbell Rows, with
            the exception being the grip that is used, this changed the
            contraction slightly, as well as the plane of movement. Basically,
            we are using the same muscles in a different way. Extend both arms
            out but twist your wrists around so it is underhand (as if doing a
            bicep curl), then pull up towards yourself and squeeze at the top of
            the movement.
          </Typography>
          <Typography paragraph>
            Further make this exercise tougher and more dynamic by starting in
            the normal dumbbell row grip position and whilst pulling towards
            you, rotate your wrists so you finish in the inverted grip position.
            In the reverse of the movement, rotate your wrists back to the start
            position.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Bicep Curl 4x10"
          imgSrc={[placeholder]}
          ourTip="Full Range of motion is not required with bicep exercises like it is with basically every other exercise. Not using the full range of motion is not the same as using bad form. Keep your back straight etc. just reduce the distance that your bicep is flexing."
        >
          <Typography paragraph>
            This is the exercise that most people were looking for in the pull
            section, and here it is. Keep your arms by your sides, holding the
            weights. Turn your wrists outwards slightly, then curl the weight
            back towards you. Try to go straight into the next exercise (hammer
            curls) quickly to maximise fatigue in your biceps. People with high
            bicep insertions will want to heed the warning to stop at 90
            degrees, otherwise the development of your biceps will be hindered.
          </Typography>
          <Typography paragraph>
            To push this exercise up to the next level, it can be turned into
            Zottman curls. This is done by rotating the wrists inwards as you
            perform the bicep curl, meaning your hands will be fully rotated at
            the top of the curl. This will incorporate much more of your
            forearms, as well as your biceps.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Hammer Curl 4x10"
          imgSrc={[hammer_curl1, hammer_curl2]}
          ourTip="With Hammer curls, it can be hard for your muscle to understand when to contract naturally, gripping the weight as hard as you can makes this point in the movement more obvious to you as you feel it pinch at the right time."
        >
          <Typography paragraph>
            Going straight into these after your bicep curls will maximise your
            pump and the strain you are putting your biceps under. Make sure to
            hold the weights by your sides in the hammer grip, then pull up to
            your sides and stop. You can keep stopping the movement at 90
            degrees for people with high bicep insertions, but it is not the end
            of the world if you go a bit higher. Squeeze at the top of the
            movement to maximise contraction.
          </Typography>
          <Typography paragraph>
            Make this exercise harder by changing the rep cycle, so make every
            other rep a half-rep, pull it half the distance of a normal curl.
            This will force more blood into the muscle at the expense of range
            of movement. It will fatigue your muscles quicker than a normal rep
            cycle.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAYS 2 & 5 - PUSH</DayTitle>
        <ExerciseItem
          title="Dumbbell Bench Press 4x10"
          imgSrc={[placeholder]}
          ourTip="Dumbbell bench is excellent for targeting imbalances between your pecs. To work on the imbalance, only match the reps of your weaker side with your strong side. Otherwise, your weak side will never improve, and you are doomed to a lop-sided bench press."
        >
          <Typography paragraph>
            Barbell bench press is the best compound exercise for chest
            workouts. By choosing dumbbell bench we are getting as close as we
            can in the home workout setting. You lie flat on your back on a
            bench or raised surface, extend both dumbbells upwards in the double
            overhand grip (as if holding a barbell), then lower the weights
            until they are just above your chest, then squeeze and push back up
            to the top. Do not touch the weights at the top.
          </Typography>
          <Typography paragraph>
            If you want to make this movement harder, you can finish sets with
            close grip dumbbell bench press. You will want to press the
            dumbbells together and lower them right down to your chest until
            they touch it, then, whilst keeping the dumbbells pressed together,
            perform five extra reps after your set is complete. This will force
            your inner pectorals to do a lot more work than they are used to,
            and it targets a different part of the chest.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Flyes 4x10"
          imgSrc={[dumbbell_flyes]}
          ourTip="Do not touch the dumbbells together at the top. The best technique for activating the muscles is to go straight into the next rep with little or no pause."
        >
          <Typography paragraph>
            As a general rule, no other exercise is going to be as useful at
            isolating your pectorals. You should not use any secondary muscles
            in this movement, at least once you get competent with it. The
            exercise is best done if you have a bench, or are raised off the
            floor, but it can be done on the floor. Lie flat with weights
            suspended above your chest. Lower your weight down to your chest,
            flaring your elbows outwards and then press back upwards.
          </Typography>
          <Typography paragraph>
            Make this exercise harder by incorporating Hammer flyes. You would
            adopt a Hammer grip i.e., as if holding a barbell, and perform your
            reps in that plane of movement. This just forces your pectorals to
            move under tension in a different way to the one that you are used
            to, this variation will initially be harder.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Triceps Extension 4x10"
          imgSrc={[placeholder]}
          ourTip=" Try not to bounce the weight between reps. Try and keep the movement smooth and consistent otherwise you will start to grind your joints and that is not healthy."
        >
          <Typography paragraph>
            Arms are used in every compound exercise and about 90% of all gym
            related activities. Therefore, having strong arms is very useful for
            any athlete or fitness enthusiast and should be a focus of your
            training. Your arm should be positioned above your head and the
            weight should be lowered just behind your head and back up. Feel
            free to use your free arm to support your working arm, this will
            ease some pressure on your shoulder.
          </Typography>
          <Typography paragraph>
            If you are interested in making this exercise harder, you can change
            the way it is performed. Lie on your back, hold your arm and
            dumbbell out above you, like in DB bench press, then lower the
            dumbbell down towards your opposite pectoral and then back to the
            upright position. You must keep your elbow still throughout this
            movement. Make sure to squeeze at the top.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Tricep Dips 3 x As Many Reps as Possible"
          imgSrc={[dumbbell_lunge]}
          ourTip="Anywhere can be a dip station. It could be some stairs, or using a sofa. It could even be a garden wall."
        >
          <Typography paragraph>
            Dips are a great exercise to end the workout on because they really
            push your pump to new levels, just because of the tension you are
            under. You set up leaning on the edge of a surface in a reverse
            press up position. Best to lean on the palms of your hands and then
            lower your body down towards the ground and then back up to lockout
            position. This is quite a compound movement, but the most targeted
            muscle group is the triceps brachii.
          </Typography>
          <Typography paragraph>
            Make this exercise harder by elevating your feet off the ground.
            This increases the weight you have to move with each dip and will be
            much more difficult than the feet-on-the-ground version.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Side Raises 4x10 or Gauntlet Set."
          imgSrc={[placeholder]}
          ourTip="Incorporate a set of just flapping your arms in the proper plane of motion just after you finish the exercise, as a means of tiring your muscles out just a bit more."
        >
          <Typography paragraph>
            This is my favourite exercise. Side delts are the least important
            delt to work out in terms of strength and also the most important in
            terms of shape. Side raises are also a movement that you do not do a
            lot naturally outside of the gym environment, so start with low
            weights because your shoulders will not be very strong moving
            weights out to the side. You start in a standing position, dumbbells
            by your sides. Then raise your arms up at almost full extension, but
            with a bend in your elbow, stop the movement at roughly parallel to
            your shoulders and lower the weights.
          </Typography>
          <Typography paragraph>
            If you want to push this exercise up to eleven, use the gauntlet set
            variation. You start with two 10kg dumbbells for example and do max
            reps, then drop the weight to 8kg and do max reps, then drop the
            weight to 4kg and do max reps, the second half of the gauntlet would
            include doing 8kg and 10kg respectively for max reps, ending the set
            on 10kg for max. You can stop halfway if this is too much initially.
          </Typography>
        </ExerciseItem>
        <DayTitle>DAYS 3 & 6 - LEGS</DayTitle>
        <ExerciseItem
          title="Dumbbell Squats 4x10"
          imgSrc={[placeholder]}
          ourTip="Be careful of how deep you squat; too shallow andd you're not getting the full benefit of the ecercise, but too deep and you risk putting excess strain on your lower back. You could also fall over!"
        >
          <Typography paragraph>
            Squats are the original leg movement and are very useful for
            strength gains in your legs and just overall strength gains. Squats
            also can be used to build a very strong foundation in your legs that
            will serve you well as your sports career goes on. You want to stand
            up, feet shoulder-width apart. Hold your dumbbells by your sides and
            squat down until you reach parallel with the ground. Remember to
            increase your weights as you will gain strength in this movement
            quite quickly.
          </Typography>
          <Typography paragraph>
            If you wish to make this exercise harder for yourself, you can turn
            it into a box squat. This requires a box, or an object that is flat
            and roughly the same height off the ground as you would be when you
            hit parallel on your squat. You would squat down same as normal,
            just this time onto the box. This forces more activation from your
            glutes, quads and hamstrings as the movement is more sudden and less
            comfortable.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Romanian Deadlift 4x10"
          imgSrc={[placeholder]}
          ourTip="Do not lockout on this movement. It will damage your knees and is totally unnecessary for the muscle engagement."
        >
          <Typography paragraph>
            The straight-leg deadlift is probably the most effective hamstring
            exercise, at least in terms of isolation. If you keep the rep
            sequence from breaking, it can be very intense to the point of
            cramping, but if that is not your goal, then stop before that point.
            Remember to only bend forward as far as you can, you should have
            feet shoulder-width apart and then lean forward holding the weight
            in front of you.
          </Typography>
          <Typography paragraph>
            If you want to make this exercise harder for yourself, like I
            alluded to earlier, do not break the rep range between reps and push
            for the whole 10 in one smooth sequence. This will fatigue your
            hamstrings very quickly.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Calf Raises 3 x As Many Reps as Possible"
          imgSrc={[placeholder]}
          ourTip="Try to fully extend all the way to your tip toes, this is the full range of motion that lots of people neglect. Going halfway will not stretch your calf muscles far enough."
        >
          <Typography paragraph>
            This is the often neglected side of leg training. Calf training is
            an excellent way to build a strong foundation for your overall leg
            strength and balance. Calves support any leg movement, so then
            surely it seems foolish to ignore them. People who play lots of
            sports would really benefit from the extra training of their calves,
            it helps things like changing direction and the power of your sprint
            off the line.
          </Typography>
          <Typography paragraph>
            To push this exercise up another level, do it with one leg at a
            time. For this you will need something to lean on and help with your
            balance unless you are an acrobat. Then push off with one leg whilst
            holding the other off the ground. This puts more intense focus on
            one muscle-grouping at a time.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Lunges 4x10"
          imgSrc={[placeholder]}
          ourTip="Try to fully extend all the way to your tip toes, this is the full range of motion that lots of people neglect. Going halfway will not stretch your calf muscles far enough."
        >
          <Typography paragraph>
            This is one of the more difficult exercises you will try, purely
            because of how much work muscles your supporting muscles will do.
            You start in an upright position, dumbbells by your side. Place one
            foot in front of the other, then lean into the lunge until you hit
            parallel, then start again. Try not to lean too far forward when
            performing this movement because this will throw-off your balance.
          </Typography>
          <Typography paragraph>
            If you want to make this exercise harder, you are a maniac, but here
            it is. You change the rep structure to alternating lunges. Instead
            of doing ten on one leg and then ten on the other leg, alternate
            legs between reps. This keeps the muscles working constantly and
            keeps both legs around the same level of fatigue.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Prone Leg Raise 4x10"
          imgSrc={[placeholder]}
          ourTip="Raise your hips off the floor a tiny bit if you feel too much pressure on your lower back. Lower back spasms are to be avoided if possible as they put you out for a few weeks."
        >
          <Typography paragraph>
            This is one of your Yoga inspired exercises, shamelessly admitted.
            You have to lie face down on the floor or mat with your arms
            supporting your body, then extend your working leg upwards and out
            behind you until you reach your comfort limit. This is useful for
            working on flexibility, as well as being a tough exercise in its own
            right, this should help your hip-flexors get more flexible, even if
            that just means less stiff. This exercise is included in our warmup
            guide as a great means of warming up.
          </Typography>
          <Typography paragraph>
            To make this exercise tougher, you will want to adopt a position on
            all fours in a crawl position, you will then extend your leg
            backwards from this position.
          </Typography>
        </ExerciseItem>
      </ArticleMargin>
    </>
  );
}
