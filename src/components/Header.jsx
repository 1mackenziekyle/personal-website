import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  Container,
  Box,
  MenuItem,
  makeStyles,
} from "@mui/material";
import { CreateTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Header() {
  const pages = ["Projects", "Blog", "Contact"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" elevation={2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters variant="rdense">
            <Typography variant="h4" component="div" mx={5} my={2}>
              Portfolio
            </Typography>
            {pages.map((page) => (
              <Box>
                <MenuItem key={page}>
                  <Typography variant="h6" component="div" mx={5}>
                    {page}
                  </Typography>
                </MenuItem>
              </Box>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
