import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#fff " },
  },
  status: {
    danger: orange[500],
  },
});
export default theme;
