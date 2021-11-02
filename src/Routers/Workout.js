import React, { useEffect, useState } from "react";
import {
  FullBodyArticle,
  PPLLong,
  BodyPartSplit,
  LegWorkout,
} from "../Articles";
import { NoteFromJosh } from "../Articles/Components";

export default function WorkoutRouter(history) {
  const [routine, setRoutine] = useState("");

  useEffect(() => {
    const {
      location: { search },
    } = history;
    var searchParams = new URLSearchParams(search);
    setRoutine(searchParams.get("routine"));
  }, [history]);

  const Content = () => {
    switch (routine) {
      case "fullbody":
        return <FullBodyArticle />;
      case "ppllong":
        return <PPLLong />;
      case "bodypartsplit":
        return <BodyPartSplit />;
      case "legs":
        return <LegWorkout />;
      default:
        return "no workout found";
    }
  };
  return (
    <>
      <Content />
      <NoteFromJosh />
    </>
  );
}
