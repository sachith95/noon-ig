import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { blue, pink } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: blue,
    white: "#fff",
    error: purple,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: "#fff",
      paper: "#fff"
    }
  },
  status: {
    danger: "orange",
  },
  divider: {
    height: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },
});

export default theme;
