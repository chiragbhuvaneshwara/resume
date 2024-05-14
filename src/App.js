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
import darkTheme from './components/Theme';


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

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
          <Button color="inherit" href="#profileOverview" >
            <Typography variant="button"
            style={{fontSize: '0.7rem'}}
            >Contact</Typography>
          </Button>
          <Button color="inherit" href="#profileDetails">
            <Typography variant="button"
             style={{fontSize: '0.7rem'}}
            >Details</Typography>
          </Button>
          <Button color="inherit" href="#projects">
            <Typography variant="button"
             style={{fontSize: '0.7rem'}}
            >Projects</Typography>
          </Button>
          <Button color="inherit" href="#publications">
            <Typography variant="button"
             style={{fontSize: '0.7rem'}}
            >Publications</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      
        {/* <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
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
        </Container> */}

      <Box sx={{width: '100%' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} id="profileOverview">
            <ProfileOverview />
          </Grid>
          <Grid item xs={12} id="profileDetails">
            <ProfileDetails/>
          </Grid>
          <Grid item xs={12} id="projects">
            <Projects />
          </Grid>
          <Grid item xs={12} id="publications">
            <Publications />
          </Grid>
        </Grid>
      </Box>

      </div>
    </ThemeProvider>
  );
}

export default App;