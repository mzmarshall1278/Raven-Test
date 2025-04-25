import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46BA',
    },
    background: {
      default: '#F8F9FD',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1rem',
      color: '#666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 20px',
        },
        containedPrimary: {
          color: 'white',
        },
      },
    },
  },
});

export default theme;