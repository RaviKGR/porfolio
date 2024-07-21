// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '2.2rem',
    },
    body1: {
      fontWeight: 500,
    },
  },
  // Add more customizations here
});

export default theme;
