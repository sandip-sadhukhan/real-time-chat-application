import { Avatar, Typography } from "@mui/material";
import React from "react";

const Message = ({ username, message }) => {
  return (
    <div style={{ display: "flex", marginBottom: 10 }}>
      <Avatar style={{ marginTop: 5 }}>{username && username[0]}</Avatar>
      <div style={{ marginLeft: 10 }}>
        <Typography variant="subtitle1" style={{ fontWeight: 800 }}>
          {username}
        </Typography>
        <Typography variant="caption">{message}</Typography>
      </div>
    </div>
  );
};

export default Message;
