import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PersonOutline, LocationOnOutlined, EmailOutlined } from '@mui/icons-material';



function ProfileOverview() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background-image.jpg)`,
        minHeight: '90vh',
        minWidth: "90vw",
        margin: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',

      }}
    >


    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '5vw', borderRadius: '10px' }}>
      <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
        Contact Details
      </Typography>
      <Box sx={{ color: 'white', fontWeight: 'bold' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <PersonOutline sx={{ fontSize: 25 }} />
          </Grid>
          <Grid item>
            <Typography variant="h6"> 
              Chirag Bhuvaneshwara
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <LocationOnOutlined sx={{ fontSize: 25 }}/>
          </Grid>
          <Grid item>
            <Typography variant="h6" > 
              Saarbrucken, Germany
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <EmailOutlined sx={{ fontSize: 25 }}/>
          </Grid>
          <Grid item>
            <Typography variant="h6"> 
              chiragbhuvaneshwar@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Box>

            <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mr: 1 }}>Connect with me!</Typography>
        <Link href="https://github.com/chiragbhuvaneshwara" target="_blank" rel="noopener" sx={{ mr: 1 }}>
          <GitHubIcon fontSize="large" />
        </Link>
        <Link href="https://www.linkedin.com/in/chirag-bhuvaneshwara/" target="_blank" rel="noopener">
          <LinkedInIcon fontSize="large" />
        </Link>
      </Box>
      <Link href="#profileDetails" sx={{ position: 'absolute', bottom: '20px', color: 'inherit', textDecoration: 'none' }}>
        <Box sx={{ position: 'absolute', bottom: '20px', animation: 'bounce 1.5s infinite' }}>
          <KeyboardArrowDownIcon fontSize="large" />
        </Box>
      </Link>
    </Box>


    </Box>
  );
}

export default ProfileOverview;
