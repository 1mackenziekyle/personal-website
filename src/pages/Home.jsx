import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
  SvgIcon,
  Stack,
} from "@mui/material";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import ResumePDF from "../assets/Resume.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function handleResumeClick() {
  window.open(ResumePDF);
}

const alphabet = new String("pkjui9;[");

function Home() {
  return (
    <>
      <Box mb={3} height={112}>
        <Typography
          variant="h1"
          align="center"
          fontWeight="600"
          style={{
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 20%, #ffc042 90%)",
            webkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Typist avgTypingDelay={100} cursor={{ show: false }}>
            <Typist.Delay ms={750} />
            {"Hell" + alphabet.charAt(Math.floor(Math.random() * 7)) + "."}
            <Typist.Delay ms={500} />
            <Typist.Backspace delay={200} count={2} />
            <Typist.Delay ms={500} />
            o
            <Typist.Delay ms={200} />.
          </Typist>
        </Typography>
      </Box>
      <Fade top cascade duration={700} distance="30px">
        <div>
          <Typography variant="h4" fontWeight="400" align="center" mb={3}>
            My name is Kyle.
          </Typography>
          <Box px="10%" mb={3}>
            <Typography variant="h6" fontWeight="400" align="center">
              Welcome to my personal website. I will be showcasing things I do,
              and allow you to contact me here.
            </Typography>
          </Box>
          <Box width="50" mt="2.5%" mx="25%" alignItems="center">
            <Button
              href="/personal-website/#/contact"
              variant="outlined"
              color="secondary"
              sx={{ width: "100%" }}
            >
              Contact
            </Button>
          </Box>

          <Box width="50%" mt="2.5%" mx="25%" mb={6}>
            <Button
              onClick={handleResumeClick}
              fontWeight={600}
              color="secondary"
              variant="contained"
              sx={{ width: "100%", color: "white" }}
            >
              View My Resume
            </Button>
          </Box>
          <Box px="10%" mb={3}>
            <Typography variant="h4" fontWeight="600" align="center">
              Look at my stuff:
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              href="https://github.com/1mackenziekyle"
              color="secondary"
            >
              <GitHubIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://ca.linkedin.com/in/kyle-mackenzie-url"
              color="secondary"
            >
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              color="secondary"
              href="https://open.spotify.com/user/1mackenziekyle?si=b667776a6e76427e"
            >
              <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 40 }}>
                <svg>
                  <path d="M32 0a32 32 0 1 0 32 32A31.966 31.966 0 0 0 32 0zm12.3 47.2a2.654 2.654 0 0 1-1.4-.5 32.041 32.041 0 0 0-16.6-4.3 48.082 48.082 0 0 0-10.1 1.1 11.045 11.045 0 0 1-1.6.3 2 2 0 0 1-2-2 2.11 2.11 0 0 1 1.7-2.2 53.9 53.9 0 0 1 12-1.4A35.787 35.787 0 0 1 44.9 43a2.131 2.131 0 0 1 1.3 2.1 1.846 1.846 0 0 1-1.9 2.1zm3.5-8.5a2.834 2.834 0 0 1-1.6-.6A41.422 41.422 0 0 0 25.9 33a43.3 43.3 0 0 0-10.4 1.3 4.707 4.707 0 0 1-1.6.4 2.476 2.476 0 0 1-2.5-2.5 2.6 2.6 0 0 1 2-2.7A43.762 43.762 0 0 1 26 27.7a44.707 44.707 0 0 1 22.8 5.9 2.583 2.583 0 0 1 1.5 2.5 2.5 2.5 0 0 1-2.5 2.6zm4-9.8a3.022 3.022 0 0 1-1.6-.5C44.3 24.9 35.3 23 26.7 23a49.826 49.826 0 0 0-12.8 1.5 9.005 9.005 0 0 1-1.6.3 3.031 3.031 0 0 1-3-3.1 3.213 3.213 0 0 1 2.2-3.1 55.906 55.906 0 0 1 15.2-2c9.4 0 19.3 1.9 26.5 6.2a3.025 3.025 0 0 1 1.6 2.9 3.058 3.058 0 0 1-3 3.2z" />
                </svg>
              </SvgIcon>
            </IconButton>
          </Stack>
        </div>
      </Fade>
    </>
  );
}

export default Home;
