import { createTheme } from "@mui/material";
import { indigo, blue, yellow, deepOrange } from "@mui/material/colors";

const primary = deepOrange[400];
const secondary = yellow[400];

const customTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

export default customTheme;
