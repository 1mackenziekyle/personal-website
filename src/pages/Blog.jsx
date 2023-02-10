import React, { useState, useRef } from "react";
import { Typography, TextField, Button, Paper, Box } from "@mui/material";
import ForwardToInbox from "@mui/icons-material/ForwardToInbox";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";

export default function Blog() {
  const blogposts = [
    {
      title: "My First Blog Post Ever",
      date: "2023-02-10",
      content: "Starting this blog today! I'm excited to see where it goes. This post was generated mostly by GitHub Copilot. Lol."
    }
  ];

  return (
    <>
      <Fade top cascade duration={1000} distance="10px">
        <Typography variant="h4" sx={{ mt: "10px" }}>
          blog!
        </Typography>
        {blogposts.map((blogpost) => (
          <Box sx={{ px: "0%", my: "5%" }}>
            <Paper
              component="div"
              elevation={3}
              sx={{ gutterY: 5, px: "5%", py: "3%" }}
            >
              <Typography variant="h5" sx={{ mt: "10px" }}>
                {blogpost.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: "10px" }}>
                {blogpost.date}
              </Typography>
              <Typography variant="body1" sx={{ mt: "10px" }}>
                {blogpost.content}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Fade>
    </>
  );
}
