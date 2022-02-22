import React from "react";
import {
  ThemeProvider,
  Card,
  CardContent,
  CardMedia,
  Box,
  createTheme,
} from "@mui/material";

const theme = createTheme({});

export default function CustomCard() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <p>Coming soon...</p>
      </ThemeProvider>
    </>
  );
}
