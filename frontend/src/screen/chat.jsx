import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Message from "../components/message";
import { w3cwebsocket as W3CWebsocket } from "websocket";

const Chat = ({ state, setState }) => {
  const [message, setMessage] = useState("");

  const client = W3CWebsocket(
    "ws://127.0.0.1:8000/ws/chat/" + state.room + "/"
  );

  useEffect(() => {
    client.onopen = () => {
      console.log("Websocket Connected");
      client.send(
        JSON.stringify({
          command: 'fetch_messages'
        })
      )
    };
    client.onmessage = (_message) => {
      let dataFromServer = JSON.parse(_message.data);
      if (dataFromServer) {
        if(dataFromServer['command'] === 'new_message'){
          setState((state) => ({
            ...state,
            messages: [
              ...state.messages,
              {
                username: dataFromServer.message.username,
                message: dataFromServer.message.message,
              },
            ]
          }));
        }else {
          let messages = dataFromServer.messages;
          let messagesFormat = []
          messages.forEach(message => {
            messagesFormat.push({
              username: message.username,
              message: message.message
            })
          })
          setState((state) => ({
            ...state,
            messages: messagesFormat
          }))
        }
      }
    };
  }, []);

  const handleSendMsg = (e) => {
    e.preventDefault();
    client.send(
      JSON.stringify({
        message: message,
        username: state.username,
        command: 'new_message'
      })
    );
    setMessage("");
  };


  return (
    <>
      <Typography
        component="h1"
        variant="subtitle1"
        style={{ marginBottom: 20 }}
      >
        Room Name: <strong>{state.room}</strong>
      </Typography>
      <Paper
        elevation={3}
        component="form"
        onSubmit={handleSendMsg}
        noValidate
        style={{ marginTop: 1, padding: 20, width: "100%" }}
      >
        <div style={{ height: "60vh", overflowY: "auto" }}>
          {state.messages.map((msg, index) => (
            <Message
              key={index}
              username={msg.username}
              message={msg.message}
            />
          ))}
        </div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="msg"
          label="Message"
          type="text"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          autoComplete="off"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ marginTop: 15, marginBottom: 2 }}
        >
          Send
        </Button>
      </Paper>
    </>
  );
};

export default Chat;
