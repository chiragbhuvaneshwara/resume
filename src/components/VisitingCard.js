import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
  Paper,
  Grid,
  Chip,
  Link,
  Divider,
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { LINKS, ECTEL } from '../config';

// Papers grouped under the PhD conflict-resolution training theme.
const mithosPapers = [
  {
    title:
      'MITHOS — Mixed Reality Interactive Teacher Training System for Conflict Situations at School',
    venue: 'ISLS 2023',
  },
];

const cardSx = {
  p: { xs: 2, md: 2.25 },
  height: '100%',
  border: '1px solid #e2e8f0',
  display: 'flex',
  flexDirection: 'column',
};

function VisitingCard() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { md: 'calc(100vh - 64px)' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 2, md: 3 },
        background:
          'radial-gradient(1200px 500px at 50% -10%, #eff6ff 0%, #ffffff 55%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Identity header */}
        <Stack
          direction="row"
          spacing={{ xs: 1.5, md: 2 }}
          alignItems="center"
          textAlign="left"
          sx={{ mb: { xs: 1.5, md: 2.5 } }}
        >
          <Avatar
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="Chirag Bhuvaneshwara"
            sx={{
              width: { xs: 60, md: 92 },
              height: { xs: 60, md: 92 },
              flexShrink: 0,
              border: '3px solid #fff',
              boxShadow: '0 6px 20px rgba(15,23,42,0.15)',
            }}
          />
          <Box>
            <Typography variant="h1" component="h1" sx={{ fontSize: 'clamp(1.35rem, 4vw, 2.6rem)', lineHeight: 1.1 }}>
              Chirag Bhuvaneshwara
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ fontWeight: 600, fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)' }}
            >
              Computer Scientist · Human-Centered AI · Learning Technologies ·
              Affective Computing
            </Typography>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              justifyContent="flex-start"
              color="text.secondary"
            >
              <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">
                Data Scientist, K8 · PhD researcher, Saarland University ·
                Saarbrücken, Germany
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Three-panel visiting card */}
        <Grid container spacing={{ xs: 1.5, md: 2 }} alignItems="stretch">
          {/* EC-TEL demo */}
          <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
            <Paper elevation={0} sx={cardSx}>
              <Chip
                label="EC-TEL 2026 · Valencia · Live Demo"
                color="primary"
                size="small"
                sx={{ alignSelf: 'flex-start', mb: 1, fontWeight: 600 }}
              />
              <Typography variant="h6" component="h2" sx={{ lineHeight: 1.2 }}>
                Learning Journey Design Agent
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                An AI-Supported Tool for Structured Curriculum Co-Design
              </Typography>
              <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
                <Chip
                  icon={<EmojiEventsOutlinedIcon />}
                  label="Best Demo nominee"
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Stack>
              <Stack spacing={0.25} sx={{ mb: 1.5 }}>
                {ECTEL.sessions.map((s) => (
                  <Typography key={s.label} variant="caption" color="text.secondary">
                    <strong>{s.label}:</strong> {s.when}
                  </Typography>
                ))}
              </Stack>
              <Button
                variant="contained"
                startIcon={<RocketLaunchOutlinedIcon />}
                href={LINKS.demo}
                target="_blank"
                rel="noopener"
                sx={{ mt: 'auto' }}
              >
                Try the live demo
              </Button>
              <Link href="#projects" variant="caption" sx={{ mt: 1 }}>
                More about this project ↓
              </Link>
            </Paper>
          </Grid>

          {/* PhD / MITHOS */}
          <Grid item xs={12} md={4} sx={{ order: { xs: 2, md: 3 } }}>
            <Paper elevation={0} sx={cardSx}>
              <Chip
                label="PhD Research"
                size="small"
                sx={{ alignSelf: 'flex-start', mb: 1, bgcolor: '#eff6ff', color: '#1e3a8a', fontWeight: 600 }}
              />
              <Typography variant="h6" component="h2" sx={{ lineHeight: 1.2 }}>
                Teacher Training for Conflict Resolution
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Mixed-reality training with emotionally aware virtual agents —
                affective computing for the hard classroom moments.
              </Typography>
              <Stack spacing={0.75} sx={{ mb: 1 }}>
                {mithosPapers.map((p) => (
                  <Box key={p.title}>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', lineHeight: 1.3 }}>
                      {p.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {p.venue}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Link href="#trajectory" variant="caption" sx={{ mt: 'auto' }}>
                My full research trajectory ↓
              </Link>
            </Paper>
          </Grid>

          {/* Connect */}
          <Grid item xs={12} md={4} sx={{ order: { xs: 3, md: 1 } }}>
            <Paper elevation={0} sx={{ ...cardSx, bgcolor: '#0f172a', color: '#e2e8f0', border: 'none' }}>
              <Typography variant="h6" component="h2" sx={{ color: '#fff', mb: 1 }}>
                Let's connect
              </Typography>

              <Stack spacing={1} sx={{ mb: 1.5 }}>
                <Link
                  href={`mailto:${LINKS.email}`}
                  underline="hover"
                  sx={{ color: '#fff', display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}
                >
                  <EmailOutlinedIcon fontSize="small" /> {LINKS.email}
                </Link>
                <Link
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  sx={{ color: '#fff', display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <LinkedInIcon fontSize="small" /> /in/chirag-bhuvaneshwara
                </Link>
              </Stack>

              <Box
                sx={{
                  bgcolor: '#fff',
                  p: 1,
                  borderRadius: 1.5,
                  alignSelf: 'flex-start',
                  lineHeight: 0,
                }}
              >
                <QRCodeSVG
                  value={LINKS.linkedin}
                  size={104}
                  level="M"
                  includeMargin={false}
                />
              </Box>
              <Typography variant="caption" sx={{ color: '#94a3b8', mt: 0.5, mb: 1.5 }}>
                Scan for LinkedIn
              </Typography>

              <Divider sx={{ borderColor: '#334155', mb: 1, mt: 'auto' }} />
              <Stack direction="row" spacing={2}>
                <Link href={LINKS.github} target="_blank" rel="noopener" sx={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <GitHubIcon fontSize="small" /> <Typography variant="caption">GitHub</Typography>
                </Link>
                <Link href={LINKS.scholar} target="_blank" rel="noopener" sx={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <SchoolOutlinedIcon fontSize="small" /> <Typography variant="caption">Scholar</Typography>
                </Link>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default VisitingCard;
