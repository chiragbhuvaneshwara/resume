import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    button: {
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    h2: {
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h4: {
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:600px)': {
        fontSize: '2.125rem',
      },
    },
    h5: {
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      '@media (max-width:600px)': {
        fontSize: '0.7rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
  button: {
    fontSize: '0.7rem',
    '@media (max-width:600px)': {
      fontSize: '0.5rem',
    },
    '@media (min-width:600px)': {
      fontSize: '1.25rem',
    },
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: {
    //       margin: 0,
    //       padding: 0,
    //     },
    //   },
    // },
  },
});

export default darkTheme;

