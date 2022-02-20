import React, { useState, useRef } from "react";
import { Typography, TextField, Button, Paper } from "@mui/material";
import emailjs from "@emailjs/browser";

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
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const form = useRef();

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

    // emailjs
    //   .sendForm(
    //     "gmail",
    //     "template_elyhsz7",
    //     form.current,
    //     "user_gLrvFEdtEwI5vqCJV5kF7"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    e.target.reset();
  };

  return (
    <>
      <Paper component="div" elevation={3} sx={{ m: "5%", p: "30px" }}>
        <Typography variant="h4" sx={{ mt: "10px" }}>
          Contact Me!
        </Typography>
        <form ref={form} noValidate autoComplete="off" onSubmit={sendEmail}>
          <TextField
            variant="standard"
            fullWidth
            label="Name"
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
            rows={4}
            label="Message"
            sx={{ mt: "30px", mb: "10px" }}
            //
            id="message"
            name="message"
            value={formContents.value}
            onChange={handleFormChange}
          />
          <Button type="submit" variant="contained" sx={{ my: "10px" }}>
            Send
          </Button>
        </form>
      </Paper>
    </>
  );
}
