import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Minimal, professional light theme. One calm accent on a clean white canvas.
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // single accent used for current / high-priority work
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a', // slate-900
      secondary: '#475569', // slate-600
    },
    divider: '#e2e8f0',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      '"Inter", "Segoe UI", "Helvetica Neue", Arial, system-ui, sans-serif',
    // Fluid sizes so headings scale smoothly from phone to desktop.
    h1: { fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.1 },
    h2: { fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', lineHeight: 1.2 },
    h3: { fontWeight: 600, fontSize: 'clamp(1.25rem, 2.6vw, 1.6rem)' },
    h4: { fontWeight: 600, fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { color: '#475569' },
    body1: { fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 20 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #e2e8f0',
          transition: 'transform 160ms ease, box-shadow 160ms ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'saturate(180%) blur(8px)',
          color: '#0f172a',
          borderBottom: '1px solid #e2e8f0',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
