import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Skills from '../components/Skills';

function ProfileDetails() {
  return (
    <Box
      id="roles"
      component="section"
      sx={{ py: { xs: 6, md: 9 }, bgcolor: '#f8fafc' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
          Current Role &amp; Doctoral Research
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, border: '1px solid #e2e8f0', height: '100%' }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <WorkOutlineOutlinedIcon color="primary" />
                <Typography variant="h5" component="h3">
                  Data Scientist — K8 Institut für strategische Ästhetik
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="body1">
                  At K8 I work on European research projects that mix AI, learning
                  technologies, digital transformation, and a fair amount of
                  hands-on prototyping.
                </Typography>
                <Typography variant="body1">
                  In <strong>Twin4Resilience</strong>, I work on AI-supported
                  learning and curriculum design around Local Digital Twins and
                  urban resilience. I built the{' '}
                  <strong>Learning Journey Design Agent</strong>, a web tool that
                  helps people design learning journeys with generative AI in the
                  loop. It works from a curated catalogue of Micro-Learning Units:
                  from there it helps you assemble a journey, line content up with
                  goals and competencies, draft or refine the pedagogical pieces,
                  and end up with a structured teaching plan — with the educator in
                  control the whole way through.
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, border: '1px solid #e2e8f0', height: '100%' }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <SchoolOutlinedIcon color="primary" />
                <Typography variant="h5" component="h3">
                  Doctoral Research — Saarland University
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="body1">
                  My PhD is on intelligent interactive systems and affective
                  computing — emotionally aware virtual agents, multimodal
                  interaction, and hybrid setups that pair machine-learning
                  components with explicit reasoning or interaction models.
                </Typography>
                <Typography variant="body1">
                  It connects to teacher training, socio-emotional interaction, and
                  the broader question of how to design systems that hold up in
                  messy, human-facing settings.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Typography variant="h4" component="h3" sx={{ mt: 6, mb: 2 }}>
          Skills
        </Typography>
        <Skills />
      </Container>
    </Box>
  );
}

export default ProfileDetails;
