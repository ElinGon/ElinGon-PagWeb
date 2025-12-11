import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000ff", // Indigo moderno
      light: "#ffffffff",
      dark: "#000000ff",
    },
    secondary: {
      main: "#ec4899", // Pink vibrante
      light: "#f472b6",
      dark: "#db2777",
    },
    background: {
      default: "#060607ff", // Dark blue
      paper: "#1e293b",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#cbd5e1",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        },
      },
    },
  },
})
