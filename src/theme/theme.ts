import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6ab8ff',
      light: '#a8d8ff',
      dark: '#2875c7',
    },
    secondary: {
      main: '#f6c65b',
      light: '#ffe08a',
      dark: '#c28e2c',
    },
    background: {
      default: '#080b0d',
      paper: '#111719',
    },
    text: {
      primary: '#f5f7f6',
      secondary: 'rgba(245, 247, 246, 0.72)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Roboto Flex", "Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 650,
      lineHeight: 0.98,
    },
    h2: {
      fontWeight: 620,
      lineHeight: 1.08,
    },
    h3: {
      fontWeight: 620,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'linear-gradient(180deg, #080b0d 0%, #0d1214 44%, #080b0d 100%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
