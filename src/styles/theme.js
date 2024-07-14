import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    main: { main: "#1B5BF7 " },
  },
  status: {
    danger: orange[500],
  },
});
export default theme;
