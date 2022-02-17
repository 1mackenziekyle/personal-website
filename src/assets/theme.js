import { createTheme } from "@mui/material";
import { indigo, blue } from "@mui/material/colors";

const primary = indigo[500];
const secondary = blue[300];

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
