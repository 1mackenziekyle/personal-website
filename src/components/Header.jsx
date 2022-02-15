import React from "react";
import { Toolbar, AppBar, Typography, CssBaseline } from "@mui/material";

export default function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4">Portfolio</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
