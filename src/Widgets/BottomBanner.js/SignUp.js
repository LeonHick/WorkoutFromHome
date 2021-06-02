import React from "react";
import { TextField, withStyles } from "@material-ui/core";

export default function SignUp() {
  return (
    <>
      Sign up for our mailing list:
      <TextField
        style={{ backgroundColor: "white" }}
        placeholder="Email"
        variant="outlined"
      />
    </>
  );
}
