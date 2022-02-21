import React, { useState, useRef } from "react";
import { Typography, TextField, Button, Paper, Box } from "@mui/material";
import ForwardToInbox from "@mui/icons-material/ForwardToInbox";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";

export default function Contact() {
  // function for form contents
  const [formContents, setFormContents] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    // set form contents to update the target element to new value
    setFormContents((prevState) => ({
      // set to previous state
      ...prevState,
      // set new value ('itemName' : 'newItemValue')
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_cbbb2js", // SERVICE_ID
        "template_elyhsz7", // TEMPLATE_ID
        formContents,
        "user_gLrvFEdtEwI5vqCJV5kF7" // USER_ID
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    // empty form
    setFormContents({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Paper component="div" elevation={3} sx={{ px: "5%", py: "3%" }}>
        <Fade top cascade duration={1000} distance="10px">
          <Typography variant="h4" sx={{ mt: "10px" }}>
            contact me!
          </Typography>
          <form autoComplete="off" onSubmit={sendEmail}>
            <TextField
              variant="standard"
              fullWidth
              required
              label="name"
              sx={{ my: "10px" }}
              //
              id="name"
              name="name"
              value={formContents.name}
              onChange={handleFormChange}
            />
            <TextField
              variant="standard"
              fullWidth
              required
              label="email"
              sx={{ my: "10px" }}
              //
              id="email"
              name="email"
              value={formContents.email}
              onChange={handleFormChange}
            />
            <TextField
              fullWidth
              multiline
              required
              rows={4}
              label="message"
              sx={{ mt: "30px", mb: "10px" }}
              //
              id="message"
              name="message"
              value={formContents.message}
              onChange={handleFormChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ my: "10px", px: "10px" }}
            >
              deliver
              <ForwardToInbox sx={{ height: "20px", ml: "5px" }} />
            </Button>
          </form>
        </Fade>
      </Paper>
    </>
  );
}
