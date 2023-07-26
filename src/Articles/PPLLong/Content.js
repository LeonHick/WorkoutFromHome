import React from "react";
import { Typography } from "@material-ui/core";
import overhead_tricep_press from "../../Images/overhead_tricep_press.jpg";
import pressups_knees from "../../Images/pressups_knees.jpg";
import dumbbell_row_4 from "../../Images/dumbbell_row_4.jpg";
import side_raises_2 from "../../Images/side_raises_2.jpg";
import goblet_squat_3 from "../../Images/goblet_squat_3.jpg";
import calf_raises_2 from "../../Images/calf_raises_2.jpg";
import dumbbell_flyes3 from "../../Images/dumbbell_flyes3.jpg";
import single_leg_deadlift_2 from "../../Images/single_leg_deadlift_2.jpg";
import dumbbell_shoulder_press from "../../Images/lady_overhead_press.jpg";
import Dumbbell_bench_floor from "../../Images/Dumbbell_bench_floor.jpg";
import narrow_arm_pressups from "../../Images/narrow_arm_pressups.jpg";
import hammer_curl1 from "../../Images/hammer_curl1.jpg";
import hammer_curl2 from "../../Images/hammer_curl2.jpg";
import curls_cute from "../../Images/curls_cute.jpg";
import upright_rows from "../../Images/upright_rows.jpg";
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
import ArticleImage from "../Components/Image";
import plank from "../../Images/plank_large.jpg";
import dips from "../../Images/tricep_dips.jpg";
import underhand_row from "../../Images/underhand_row.jpg";
import arch from "../../Images/arch.jpg";
import reverse_flys from "../../Images/reverse_flys.jpg";
import piston_squat from "../../Images/piston_squat.jpg";
import dumbbell_lunge_man from "../../Images/dumbbell_lunge_man.jpg";
import glute_bridges from "../../Images/glute_bridges.jpg";

export default function Content() {
  const classes = useStyles();
  return (
    <>
      <ArticleTitle>The Mega 6 Day Routine</ArticleTitle>
      <ArticleImage src={plank} />
      <ArticleMargin>
        <Intro />
        {/* <Equipment /> */}
        <WorkoutStructure />
        <DayTitle>Day 1 - PUSH</DayTitle>
        <ExerciseItem
          title="Pressups 3 x As many as possible"
          imgSrc={[pressups_knees]}
          ourTip="It's always ok to do pressups on your knees to maintain good form."
        >
          <Typography paragraph>
            Press-ups should be your go-to chest movement for a home workout.
            Nothing else works your upper body as much without equipment. With
            these pressups have your hands quite wide to work your chest more
            than your triceps.
          </Typography>
          <Typography paragraph>
            Imagine lightly pulling your belly button to your spine to keep your
            core engaged and keep your head in a neutral position to protect
            your neck.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To increase the difficulty:
            </Typography>
            Put your feet on a raised surface like your sofa.
          </Typography>

          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To decrease the difficulty:
            </Typography>
            Do the exercise on your knees.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Overhead Shoulder Press 4x10"
          imgSrc={[dumbbell_shoulder_press]}
          ourTip="You don't need to touch the weights together at the top of this movement, doing so just takes the tension off your muscles."
        >
          <Typography paragraph>
            On to the next push exercise for the day, your shoulders will have
            already been worked during pressups so don't be surprised if you
            need a lower weight for this exercise than you would if you did it
            at the start of the workout.
          </Typography>
          <Typography paragraph>
            Hold both weights above your shoulders with your palms facing
            forward. Push the weight up until your arms are nearly straight, and
            then let the weight back down making sure it is always under
            control.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Flys 4x10"
          imgSrc={[dumbbell_flyes3]}
          ourTip="Don't over stretch with this movement or you risk damaging your shoulders."
        >
          <Typography paragraph>
            This exercise is brilliant for isolating your chest muscles but it
            is easy to let your shoulders take over if you are not careful. Try
            and focus on feeling the stretch in your chest as you lower the
            weight.
          </Typography>
          <Typography paragraph>
            Hold both weights above you with your palms facing eachother. Lower
            the weights to the side keeping a slight bend in your arms until you
            feel a stretch in your chest. Push the weight up until the weights
            nearly touch, and then repeat, making sure it is always under
            control.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Tricep overhead press 4x10"
          imgSrc={[overhead_tricep_press]}
          ourTip=" Focus on keeping your upper arm steady as you raise the weight back
          up above your head"
        >
          <Typography paragraph>
            This exercise is a great way to get a good stretch in your triceps,
            working the muscle even better. Start sitting or standing with the
            weight above your head, then bending at the elbows lower the weight
            behind you until you can feel a stretch in the back of your arms,
            finally raise the weight back up above your head.
          </Typography>
          <Typography paragraph>
            Exercises like this show that the "push pull legs" grouping can be
            flexible as it can be helpful to think of yourself pulling the
            weight back above your head, but in general I find it practical to
            put tricep exercises in the push workout.
          </Typography>
        </ExerciseItem>
        <DayTitle>Day 2 - PULL</DayTitle>
        <ExerciseItem
          title="Bicep Curls 4x10"
          imgSrc={[curls_cute]}
          ourTip="Twist your forearms to bring your little fingers up at the top of the curl. This recruits more of the bicep muscle fibres."
        >
          <Typography paragraph>
            Biceps can be really fun to train but it's important not to let your
            ego take over. They're only a relatively small muscle so don't be
            afraid to use lighter weight in order to maintain good form.
          </Typography>
          <Typography paragraph>
            Start with your arms straight, then curl the weight up as high as
            you can while keeping your elbows and shoulders still. Keep the
            weight under control as you lower it back down again.
          </Typography>
          <Typography paragraph>
            If you want to make this exercise harder and work your forearms too,
            it can be turned into Zottman curls. This is done by rotating the
            wrists inwards as you perform the curl so that you end upo at the
            top of the movement with your palms facing the floor. Rotate your
            wrists back to their original position as you lower the weight.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Row 4x10"
          imgSrc={[dumbbell_row_4]}
          ourTip="Pull the weight towards the bottom section of your stomach."
        >
          <Typography paragraph>
            We feel that this is the best home workout movement for the back,
            barring pull - ups which not everyone has the equipment to do from
            home.
          </Typography>
          <Typography paragraph>
            Use a bench or chair for support. Hold the weight in one hand
            letting it hang down infront of you. Pull the weight up to your
            stomach and try and squeeze your shoulder blades together for a
            second before lowering the weight back down.
          </Typography>
          <Typography paragraph>
            This exercise can be done with relatively heavy weight but make sure
            the movement is smooth and controlled.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Upright Rows 3x8"
          imgSrc={[upright_rows]}
          ourTip="Only go as high as you can without any pain"
        >
          <Typography paragraph>
            Upright rows are great for working both your shoulder, and trapezius
            muscles. Traps are usually targeted with heavy shrugs which can be
            hard to recreate at home, but this exercise is great because it can
            be done with relatively light weight.
          </Typography>
          <Typography paragraph>
            Stand up straight with a dumbbell in each hand and. Keep your core
            engaged as you pull the weights up to your chest and then lower them
            back down. Try to avoid bouncing in your knees until you cannot do
            any more strict repetitions, then bouncing can be a useful way to
            push through a couple more.
          </Typography>
          <Typography paragraph>
            If you're looking for a change, this exercise can be done with a
            variety of equipment including resistance bands, kettlebells, and a
            barbell.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Side Raises 4x10"
          imgSrc={[side_raises_2]}
          ourTip="Try not to shrug your shoulders as your do this movement"
        >
          <Typography paragraph>
            I would say that side raises are one of the best shoulder exercises
            you can do to for a balanced, well rounded physique. Not to mention
            strengthening your shoulders is a great way to improve posture and
            reduce pain. This is a movement that you do not do a lot outside of
            the gym environment, so start with low weights as you gradually
            build strength.
          </Typography>
          <Typography paragraph>
            For this exercise you can start in a standing or seated position,
            dumbbells by your sides. Raise your arms up to the side with a
            slight bend in your elbow. Stop the movement when the weight is
            roughly parallel to your shoulders and lower back down.
          </Typography>
          <Typography paragraph>
            If you want to push this exercise up to eleven, use the{" "}
            <a href="show?routine=fullbody#gauntlet">gauntlet</a> set variation.
          </Typography>
        </ExerciseItem>
        <DayTitle>Day 3 - LEGS</DayTitle>
        <ExerciseItem
          title="Goblet Squats 4x10"
          imgSrc={[goblet_squat_3]}
          ourTip="Push through your heels throughout the exercise to engage your glutes and protect your knees."
        >
          <Typography paragraph>
            Squats are the ideal exercise for leg day whether at home or in the
            gym; they will build a strong foundation in your legs that will
            serve you well in any other sport or just daily life.
          </Typography>
          <Typography paragraph>
            Stand up with your feet shoulder-width apart. Hold your dumbbell up
            to your chest with your elbows underneath it for support. Squat down
            as low as you can without your back rounding or your knees caving
            inwards then stand back up. It is important to protect your spine
            and knees not to squat deeper than your flexibility allows. Depth
            will come with time.
          </Typography>
          <Typography paragraph>
            If you're looking to change up your routine and want variation of
            this exercise, you can turn it into a box squat. This requires a
            box, or an object that is flat and roughly the same height off the
            ground as the bottom of your squat. Squat down onto the box where
            you pause for a second before standing back up. This makes the
            movement more difficult as you have to start the upward movement
            from a complete standstill rather than using the energy stored up
            from your descent.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Calf Raises 3 x As Many Reps as Possible"
          imgSrc={[calf_raises_2]}
          ourTip="Try to fully extend all the way to your tip toes at the top and stretch your heels down at the bottom."
        >
          <Typography paragraph>
            Strengthening your calves is an excellent way to build a strong
            foundation for overall strength, balance and explosive power. This
            makes them an especially crucial movement for those looking to
            improve their athletic peformance.
          </Typography>
          <Typography paragraph>
            To do this exercise find a raised surface like a step. Stand on it
            with your heels off of the edge. Stretch your heels down at the
            bottom of the movement then stand up on your tiptoes as high as you
            can. You can hold a weight to make the exercise harder if you wish.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Single Leg Romanian Deadlift 3x8"
          imgSrc={[single_leg_deadlift_2]}
          ourTip="Keep your knees slightly bent in this movement to protect them."
        >
          <Typography paragraph>
            It can be hard to train hamstrings at home without the expensive
            machines you find at the gym. Thankfully we're here to help and
            Romanian Deadlifts are an excellent way to target your hamstrings,
            glutes, lower back, in fact your whole posterior chain with minimal
            equipment. Here we'll be doing them on one leg which also works all
            of your stabilising and supporting muscles.
          </Typography>
          <Typography paragraph>
            To do this exercise stand on one leg holding a dumbbell in one hand
            hand. Your legs should be relatively straight but with a slight bend
            in the knees. Keeping your back straight and your core engaged lean
            forward and lift your non-supporting leg out behind you for balance.
            Go as low as you can without rounding your back until you feel a
            gentle tug in your hamstring. Finally stand back up and repeat the
            movement.
          </Typography>
          <Typography paragraph>
            It's ok to do this with both feet on the ground if you are
            struggling at any point.
          </Typography>
        </ExerciseItem>
        <DayTitle>Day 4 - PUSH</DayTitle>
        <ExerciseItem
          title="Dumbbell Bench Press 4x10"
          imgSrc={[Dumbbell_bench_floor]}
          ourTip="Make sure the weights are always inline with eachother to avoid imbalances"
        >
          <Typography paragraph>
            It is ideal to do this exercise on some form of bench, but it is
            also possible to do it lying flat on the floor. Either way this is a
            great exercise for building a strong chest.
          </Typography>
          <Typography paragraph>
            Lie flat on your back and extend both dumbbells up above you. Lower
            the weights until they are just above your chest, and push back up
            to the top. Keep your forearms pointing straight up to keep the load
            off of your arms.
          </Typography>
          <Typography paragraph>
            If you want to push yourself even more, you can finish off with an
            extra set of close grip dumbbell bench press. Press the dumbbells
            together with your palms facing eachother and do five extra
            repetitions after your set is complete. This will work the chest
            further and in a different way to the standard bench press.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Narrow Arm Pressups 3 x As many as possible"
          imgSrc={[narrow_arm_pressups]}
          ourTip="Good form is always preferable to more weight, so don't be afraid to put your knees down to make this movement easier."
        >
          <Typography paragraph>
            Narrow arm pressups are going to be great here to finish off your
            chest while also working your triceps really hard. This underrated
            exercise is brilliant for targetting your triceps with no equipment
            as well as building all round upper body strength.
          </Typography>
          <Typography paragraph>
            Rather than letting your elbows flair out to the side as you lower
            your body, keep them tucked as close as your can to your body. This
            takes some of the load off of your chest muscles and puts it on to
            your triceps. This is already a harder variation than the standard
            pressup so don't worry if you need to do fewer reps, or make the
            movement easier.
          </Typography>

          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To increase the difficulty:
            </Typography>
            Put your feet on a raised surface.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To decrease the difficulty:
            </Typography>
            Do the exercise on your knees
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Tricep Dips 4x10"
          imgSrc={[dips]}
          ourTip="Do this exercise throughout the day if you work from home to keep active."
        >
          <Typography paragraph>
            Tricep dips are another excellent exercise for working out at home
            because all you need is a raised surface such as a chair.
          </Typography>
          <Typography paragraph>
            Sit on the surface with your hands placed either side of you and
            your fingers facing your toes. Shift your backside off of the chair
            so that your weight is on your hands and feet. Bending your arms and
            lower yourself down as low as you can comfortably go without
            excessively stretching your shoulders before pushing back up.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To increase the difficulty:
            </Typography>
            Put your feet on a raised surface, or balance a weight on your hips.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To decrease the difficulty:{" "}
            </Typography>
            Bend your legs to take some weight off of your arms.
          </Typography>
        </ExerciseItem>
        <DayTitle>Day 5 - Pull</DayTitle>
        <ExerciseItem
          title="Underhand Rows 4x10"
          imgSrc={[underhand_row]}
          ourTip=""
        >
          <Typography paragraph>
            You can use a barbell or dumbbells for this exercise which is
            similar to standard rows but using an "underhand" grip. This changes
            the way we use the muscle slightly and is a great variation to have
            in your workout as well as conventional dumbbell rows.
          </Typography>
          <Typography paragraph>
            Hold your weight so that your palms are facing forward. Pull the
            weight towards the lower part of your stomach. Squeeze your shoulder
            blades together for a secoond before lowering the weight back down.
          </Typography>
          <Typography paragraph>
            Using dumbbells you can make this exercise even tougher and more
            dynamic by starting in the normal dumbbell row grip position and
            rotating your wrists as you pull so you finish in the underhand grip
            position. Rotate your wrists back to the start position as you lower
            the weight.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Hammer Curl 4x10"
          imgSrc={[hammer_curl1, hammer_curl2]}
          ourTip="Grip the weight as hard as you can to help flex your biceps and also work your forearms."
        >
          <Typography paragraph>
            Many people don't know that the bicep muscle is actually split into
            two heads, the long head and the short head. Hammer curls target the
            long head of the bicep more than conventional curls so it's really
            important to include them in your workouts!
          </Typography>
          <Typography paragraph>
            {/* Make this exercise harder by changing the rep cycle, so make every
            other rep a half-rep, pull it half the distance of a normal curl.
            This will force more blood into the muscle at the expense of range
            of movement. It will fatigue your muscles quicker than a normal rep
            cycle. */}
            This exercise is done just like conventional bicep curls but with
            your palms turned inwards, facing towards eachother. Make sure to
            stretch out your arm fully at the bottom of the movement for full
            range of motion.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Superman holds 3 x As many as possible"
          imgSrc={[arch]}
          ourTip="Squeeze your arms by your ears and keep your feet together."
        >
          <Typography paragraph>
            This exercise while is good for working your glutes, your lower
            back, and the often overlooked lower trapezius muscles. Having
            developed strength and muscle in these areas not only makes you a
            better and more balanced athelete who is less prone to injury, but
            can really make you stand out aesthetically.
          </Typography>
          <Typography paragraph>
            For this exercise lie down flat on your stomach. Where you choose to
            hold your arms affects how difficult the exercise is. Lift your
            chest, head, arms, and legs off the ground. Hold for a second and
            lower.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To increase the difficulty:
            </Typography>
            Hold your arms above your head.
            <Typography style={{ fontWeight: "bold" }}>
              To decrease the difficulty:
            </Typography>
            Have your arms down by your side.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Rear Delt Flys 4x12"
          imgSrc={[reverse_flys]}
          ourTip="Try to relax your arms and focus on your shoulders."
        >
          <Typography paragraph>
            The back of your shoulers is such an overlooked muscle group but it
            is integral to both the health of the shoulder, and the visual
            balance between the front and back of your upper body.
          </Typography>
          <Typography paragraph>
            Choose a relatively light weight for this exercise, the rear delts
            are a small muscle head and so cannot lift much weight. Bend over
            and with a slight bend in your elbows lift the weights up and out
            behind you. Stop when the weights are roughly in line with your
            shoulders and lower them back down.
          </Typography>
          <Typography paragraph>
            You have a great opppertunity after you cannot do any more reps with
            weight to keep doing the movement with just the weight of your arms.
            It may feel silly but working your muscle beyond failure in this way
            is great way to force progress.
          </Typography>
        </ExerciseItem>
        <DayTitle>Day 6 - Legs</DayTitle>
        <ExerciseItem
          title="Piston Squat 3 x As many as possible"
          imgSrc={[piston_squat]}
          ourTip=""
        >
          <Typography paragraph>
            A problem that people can encounter while working out from home is
            making their routines challenging enough. This can be especially
            true on leg day as your legs contain large, strong muscles that can
            take a lot of work to sufficiently tire. Enter the piston squat.
            This alternative to squats is incredibly challenging for your
            muscles and your balance, but also highly adaptable to your strength
            and flexibility level.
          </Typography>
          <Typography paragraph>
            Stand on one leg with your other leg straight out in front of you.
            Keep your knees together and squat down as low as you can keeping
            your foot flat on the floor, then stand back up. It's ok if you
            can't go down very low to start off with, strength and flexibility
            will come with time.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To increase the difficulty:
            </Typography>
            Hold a dumbbell as you squat.
            <Typography style={{ fontWeight: "bold" }}>
              To decrease the difficulty:
            </Typography>
            Only go down so far that you can do at least 8 repetitions for the
            three sets
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Dumbbell Lunge 4x10"
          imgSrc={[dumbbell_lunge_man]}
          ourTip="Try to keep your weight spread evenly between your feet."
        >
          <Typography paragraph>
            Lunges are a great option when working out from home. They recruit
            many of your stabilising muscles while still working the large
            flashy muscles in the legs hard. This means that you don't require
            much weight to get a great workout.
          </Typography>
          <Typography paragraph>
            To do this exercise stand with your feet one in front of the other
            in a fairly wide stance. Hold the dumbbells and lunge down until
            just before your knee touches the floor, then stand back up. The
            ideal angle of your knees is 90 degrees.
          </Typography>
        </ExerciseItem>
        <ExerciseItem
          title="Glute bridges 4x10"
          imgSrc={[glute_bridges]}
          ourTip="Try and avoid over arching your lower back, both to protect it and to keep the tension on your glute muscles."
        >
          <Typography paragraph>
            Glutes are an under targeted muscle group for the vast majority of
            people. Working your glutes is beneficial for your posture and your
            athletic performance, not to mention the aesthetic advantages. This
            exercise can also help to increase the range of motion in your hip
            flexors which is vital for anyone who spends a lot of their daily
            life sat down.
          </Typography>
          <Typography paragraph>
            Lie down on your back With your feet on the floor, knees in the air.
            Push through your heels and raise your hips up. Squeeze your glutes
            together for a second then lower back down under control.
          </Typography>
          <Typography paragraph>
            <Typography style={{ fontWeight: "bold" }}>
              To increase the difficulty:
            </Typography>
            Balance a weight on your hips.
            <Typography style={{ fontWeight: "bold" }}>
              To decrease the difficulty:
            </Typography>
            Do one repetition but hold yourself up for as long as possible.
          </Typography>
        </ExerciseItem>
      </ArticleMargin>
    </>
  );
}
