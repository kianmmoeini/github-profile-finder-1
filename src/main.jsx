import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1976d2",
    },

    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>
);