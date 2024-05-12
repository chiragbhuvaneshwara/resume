import React from 'react';
import { 
  AppBar, 
  Avatar, 
  Box, 
  Container, 
  CssBaseline,
  Grid, 
  Toolbar, 
  Typography 
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import ProfileOverview from './components/ProfileOverview';
import ProfileDetails from './components/ProfileDetails';
import Projects from './components/Projects';
import Button from '@mui/material/Button';
import Publications from './components/Publications';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App" 
      style={{ position: 'absolute', top: 0, left: 0 }}
      >
      <AppBar position="fixed" style={{textAlign:"left" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chirag's Profile
          </Typography>
          <Button color="inherit" href="#profileOverview">Contact</Button>
          <Button color="inherit" href="#profileDetails">Profile Details</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#publications">Publications</Button>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* To add space so that content doesn't go under the fixed AppBar */}
      
        <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
          <Grid container spacing={4}>
            <Grid item  xs={12} id="profileOverview">
              <ProfileOverview />
            </Grid>
            <Grid item xs={12} id="profileDetails">
              <ProfileDetails />
            </Grid>
            <Grid item xs={12} id="projects">
              <Projects />
            </Grid>
            <Grid item xs={12} id="publications">
              <Publications />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;