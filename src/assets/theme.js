import { createTheme } from "@mui/material";
import { indigo, blue, yellow } from "@mui/material/colors";

const primary = indigo[500];
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
