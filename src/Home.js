import "./Home.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

function Home() {
  return (
    <>
      <Typography>Home</Typography>
      <Card>
        <CardMedia component="img" image="/assets/Resume.png" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Home;
