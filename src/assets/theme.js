import { createTheme } from "@mui/material";
import {
  indigo,
  blue,
  white,
  yellow,
  deepOrange,
  grey,
} from "@mui/material/colors";

const primary = grey[50];
const secondary = indigo[300];
const warning = deepOrange[400];

const customTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    warning: {
      main: warning,
    },
  },
});

export default customTheme;
