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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  </QueryClientProvider>
);