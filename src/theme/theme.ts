import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#e5e5e5',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#000000',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '-0.01em',
    },
  },
});