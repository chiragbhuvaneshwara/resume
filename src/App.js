import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
import './App.css';

import VisitingCard from './components/VisitingCard';
import About from './components/About';
import Trajectory from './components/Trajectory';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Collaboration from './components/Collaboration';
import ProfileDetails from './components/ProfileDetails';
import Contact from './components/Contact';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'EC-TEL 2026', href: '#ectel', highlight: true },
  { label: 'Research & Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleNav = () => setMobileOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Chirag Bhuvaneshwara
          </Typography>

          {isDesktop ? (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  variant={item.highlight ? 'contained' : 'text'}
                  color={item.highlight ? 'primary' : 'inherit'}
                  size="small"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileOpen(true)}
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 240 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component="a" href={item.href} onClick={handleNav}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: item.highlight ? 700 : 500,
                      color: item.highlight ? 'primary.main' : 'text.primary',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main">
        <VisitingCard />
        <About />
        <Trajectory />
        <Projects />
        <Publications />
        <Collaboration />
        <ProfileDetails />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
