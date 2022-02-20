import React from "react";
import { Typography, CssBaseline, Grid, Link } from "@mui/material";

export default function Footer() {
  const pages = ["Projects", "Blog", "Contact"];

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight={80}
        sx={{ bgcolor: "LightGrey" }}
      >
        <Typography variant="p" color="Grey" fontSize={14}>
          Kyle Mackenzie
        </Typography>
        <Link
          href="https://github.com/1mackenziekyle/personal-website"
          color="inherit"
          underline="none"
        >
          <Typography
            variant="p"
            component="div"
            fontSize={13}
            color="Grey"
            sx={{ textDecoration: "underline" }}
          >
            See GitHub
          </Typography>
        </Link>
        <Typography variant="p" component="div" fontSize={13} color="Grey" d>
          v1.6
        </Typography>
      </Grid>
    </React.Fragment>
  );
}