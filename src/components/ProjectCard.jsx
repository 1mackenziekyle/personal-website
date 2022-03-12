import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  CardHeader,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function GithubButton(props) {
  if (props.isDisplayed) {
    return (
      <IconButton color="secondary" href={props.ghLink}>
        <GitHubIcon />
      </IconButton>
    );
  } else {
    return null;
  }
}

function YouTubeButton(props) {
  if (props.isDisplayed) {
    return (
      <IconButton color="secondary" href={props.ytLink}>
        <YouTubeIcon style={{ fontSize: "2rem" }} />
      </IconButton>
    );
  } else {
    return null;
  }
}

export default function ProjectCard(props) {
  return (
    <Box width="100%">
      <Card variant="outlined">
        <CardHeader title={props.title} subheader={props.subheader} />
        {/* <CardMedia
          component="img"
          height={props.imgHeight}
          image={props.imgSrc}
        /> */}

        <CardContent>
          <Typography variant="body2">{props.caption}</Typography>
          <GithubButton
            isDisplayed={props.displayGithub}
            ghLink={props.ghLink}
          />
          <YouTubeButton
            isDisplayed={props.displayYouTube}
            ytLink={props.ytLink}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
