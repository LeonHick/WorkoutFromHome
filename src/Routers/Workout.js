import React from "react";
import { FullBodyArticle } from "../Articles";
import { NoteFromJosh } from "../Articles/Components";

export default function WorkoutRouter({ location: { search } }) {
  var searchParams = new URLSearchParams(search);
  const routine = searchParams.get("routine");

  const Content = () => {
    switch (routine) {
      case "fullbody":
        return <FullBodyArticle />;
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
