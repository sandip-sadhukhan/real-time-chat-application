import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SignIn = ({ handleSignIn, handleSignInForm, state }) => {
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        style={{ marginBottom: 20, marginTop: 100 }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSignIn}
        noValidate
        style={{ marginTop: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Your Name"
          type="text"
          name="username"
          onChange={handleSignInForm}
          value={state.username}
          autoComplete="off"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="room"
          label="Room Name"
          type="text"
          id="room"
          onChange={handleSignInForm}
          autoComplete="off"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ marginTop: 15, marginBottom: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default SignIn;
