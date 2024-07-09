import theme from "@/styles/theme";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
