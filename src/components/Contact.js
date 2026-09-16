import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { LINKS } from '../config';

function Contact() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{ py: { xs: 6, md: 9 }, bgcolor: '#0f172a', color: '#e2e8f0' }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h2" component="h2" sx={{ color: '#fff' }}>
            Get in touch
          </Typography>
          <Typography variant="body1" sx={{ color: '#cbd5e1', maxWidth: 560 }}>
            Happy to talk about human-centered AI, learning technologies, or
            interdisciplinary research collaborations.
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            color="#94a3b8"
          >
            <LocationOnOutlinedIcon fontSize="small" />
            <Typography variant="body2">Saarbrücken, Germany</Typography>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            <Button
              variant="contained"
              startIcon={<EmailOutlinedIcon />}
              href={`mailto:${LINKS.email}`}
            >
              Email
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener"
              sx={{ color: '#fff', borderColor: '#475569' }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={LINKS.github}
              target="_blank"
              rel="noopener"
              sx={{ color: '#fff', borderColor: '#475569' }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<SchoolOutlinedIcon />}
              href={LINKS.scholar || '#publications'}
              target={LINKS.scholar ? '_blank' : undefined}
              rel={LINKS.scholar ? 'noopener' : undefined}
              sx={{ color: '#fff', borderColor: '#475569' }}
            >
              Google Scholar
            </Button>
          </Stack>

          <Typography variant="caption" sx={{ color: '#64748b', pt: 2 }}>
            © {new Date().getFullYear()} Chirag Bhuvaneshwara
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Contact;
