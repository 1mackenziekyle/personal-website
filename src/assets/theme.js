import { createTheme } from "@mui/material";
import { indigo, blue, yellow, deepOrange, grey } from "@mui/material/colors";

const primary = deepOrange[400];
const secondary = grey[900];
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
