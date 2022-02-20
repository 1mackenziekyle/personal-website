import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <>
      <Fade top cascade duration={1000} distance="50px">
        <div>
          <Typography
            variant="h1"
            align="center"
            fontWeight="600"
            mb={3}
            style={{
              background:
                "-webkit-linear-gradient(45deg, #FE6B8B 20%, #ffc042 90%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hello.
          </Typography>

          <Typography variant="h4" fontWeight="400" align="center" mb={3}>
            My name is Kyle.
          </Typography>
          <Box px="10%" mb={3}>
            <Typography variant="h6" fontWeight="400" align="center">
              Welcome to my personal website. I will be showcasing things I do,
              and allow you to contact me here.
            </Typography>
          </Box>
          <Box width="95%" m="2.5%">
            <Button
              href="/personal-website/#/contact"
              variant="outlined"
              sx={{ width: "100%" }}
            >
              Contact
            </Button>
          </Box>
        </div>
      </Fade>
    </>
  );
}

export default Home;
