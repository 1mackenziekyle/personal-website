import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Box,
} from "@mui/material";
import Typist from "react-typist";

export default function Projects() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3, xl: 4 }}
        columns={{ xs: 3, sm: 7, md: 11 }}
      >
        <Box width={250} minHeight={250}>
          <Card variant="outlined">
            <CardHeader title="Collision Map" subheader="React App" />
            <CardMedia component="img" height={80} image="../assets/map.png" />
            <CardContent>
              <Typography variant="body2">
                First React App built for a demo of a potential project for
                ICBC's Innovation Team.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
}
