import React from 'react';
import {
  AppBar,
  Avatar,
  Container,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              My Professional Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Avatar alt="Your Profile" src="https://media.licdn.com/dms/image/D4E35AQF5U0ktc3qlZA/profile-framedphoto-shrink_200_200/0/1711567920171?e=1715824800&v=beta&t=LaH6wgA9SoEwJrJbC7mPb7UcJKdGJQfbuGw4e1U8gSo" sx={{ width: 200, height: 200, margin: 'auto', marginBottom: 2 }} />
              <Typography variant="h5" align="center" gutterBottom>Chirag Bhuvaneshwara</Typography>
              <Typography variant="body1" align="center" gutterBottom>Machine Learning Engineer</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <List>
                <ListItem>
                  <ListItemText primary="Summary" secondary="Computer Scientist with ~5 years of expertise in software development, data analysis, machine learning, and interdisciplinary project handling and several publications. Proven track record of success in training machine learning models and collecting data suitable for it with intricate data collection systems. Excels in software development for machine learning projects and can co-ordianting large interdisciplinary teams. Currently working with EU Blue Card. " />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Skills" secondary="Python, Java, R, JavaScript, C#, PyTorch, Pandas, sklearn, Flask, ReactJS, Apache Kafka, Javalin, Unity, docker, Git" />
                </ListItem>


                <ListItem>
                  <ListItemText primary="Experience" />
                  <List>
                    <ListItem>
                      <ListItemText primary="CS Researcher, DFKI GmbH" secondary="April 2022 – Present" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Junior CS Researcher" secondary="August 2021 – March 2022" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Student Research Assistant" secondary="August 2019 – July 2021" />
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  <ListItemText primary="Education" />
                  <List>
                    <ListItem>
                      <ListItemText primary="MSc Embedded Systems, Saarland University" secondary="October 2017 - November 2021" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Nitte Meenakshi Institute of Technology" secondary="August 2013 – May 2017" />
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Contact" secondary="chiragbhuvaneshwar@gmail.com" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
