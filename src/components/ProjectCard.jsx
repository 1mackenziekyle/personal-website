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
        </CardContent>
      </Card>
    </Box>
  );
}
