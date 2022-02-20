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
import { CreateTheme } from "@mui/material/styles";

export default function Header() {
  const pages = ["Projects", "Blog", "Contact"];

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={2}>
          <Toolbar disableGutters>
            <Link
              href="/personal-website/#"
              color="inherit"
              underline="none"
              sx={{ ml: "5%" }}
            >
              <Typography variant="h4" component="div">
                Portfolio
              </Typography>
            </Link>
            <Grid container justifyContent="flex-start">
              {pages.map((page) => (
                <Box
                  style={{ color: "lightgrey" }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "lightgrey")}
                  sx={{ ml: "5%" }}
                >
                  <MenuItem key={page} sx={{ borderRadius: 2 }}>
                    <Link
                      underline="none"
                      color="inherit"
                      href={"/personal-website/#/" + page.toLowerCase()}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        color="grey"
                        sx={{
                          flexGrow: 1,
                          fontSize: 16,
                          fontStyle: "semi-bold",
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
