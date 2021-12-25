import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Chat from "./screen/chat";
import SignIn from "./screen/signin";

const App = () => {
  const [state, setState] = useState({
    username: "",
    loggedIn: false,
    room: "",
    messages: [],
  });

  const handleSignInForm = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (state.username.length > 0 && state.room.length > 0) {
      setState({ ...state, loggedIn: true });
    }
  };

  return (
    <Container maxWidth="sm" component="main">
      <CssBaseline />
      <Box
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {state.loggedIn ? (
          <Chat state={state} setState={setState} />
        ) : (
          <SignIn
            handleSignIn={handleSignIn}
            handleSignInForm={handleSignInForm}
            state={state}
          />
        )}
        <Typography variant="caption" style={{ marginTop: 20 }}>
          Developed By Sandip Sadhukhan. &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
