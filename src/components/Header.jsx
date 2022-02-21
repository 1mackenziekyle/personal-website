import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  Grid,
  Container,
  Box,
  MenuItem,
  makeStyles,
  ButtonBase,
  Link,
} from "@mui/material";
import Fade from "react-reveal/Fade";
import { CreateTheme } from "@mui/material/styles";

export default function Header() {
  const pages = ["Projects", "Blog", "Contact"];

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={4}>
          <Toolbar disableGutters>
            <Link
              href="/personal-website/#"
              color="inherit"
              underline="none"
              sx={{ ml: "5%" }}
            >
              <Typography variant="h4" component="div" fontWeight="600">
                Portfolio
              </Typography>
            </Link>
            <Grid container justifyContent="flex-start">
              {pages.map((page) => (
                <Box style={{ color: "white" }} sx={{ ml: "5%" }}>
                  <MenuItem key={page} sx={{ borderRadius: 2 }}>
                    <Link
                      underline="none"
                      focusVisible
                      color="inherit"
                      href={"/personal-website/#/" + page.toLowerCase()}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        fontWeight="600"
                        sx={{
                          flexGrow: 1,
                          fontSize: 16,
                        }}
                      >
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                </Box>
              ))}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
