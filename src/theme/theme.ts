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
    grey: {
      50: '#f5f5f5',
      100: '#e6e7e8',
      200: '#cacdd0',
      300: '#aeb3b8',
      400: '#8f979e',
      500: '#737b84',
      600: '#555d66',
      700: '#3b4249',
      800: '#23292f',
      900: '#13181d',
    },
    background: {
      default: '#0b0f13',
      paper: '#171c21',
    },
    text: {
      primary: '#f2f3f4',
      secondary: 'rgba(214, 218, 222, 0.76)',
    },
    divider: 'rgba(202, 205, 208, 0.14)',
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
            'linear-gradient(180deg, #0b0f13 0%, #11161b 44%, #0b0f13 100%)',
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
