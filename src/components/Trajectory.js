import React from 'react';
import { Box, Container, Typography, Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const stages = [
  {
    title: 'Affective Computing',
    detail: 'Emotion modelling · social signal processing · multimodal interaction',
  },
  {
    title: 'Interactive & Social Agents',
    detail: 'Virtual characters · human-agent interaction · Wizard-of-Oz systems',
  },
  {
    title: 'Teacher Training & Learning Tech',
    detail: 'Mixed-reality teacher training · socio-emotional learning · co-regulation',
  },
  {
    title: 'Human-Centered Generative AI',
    detail: 'Structured learning design · curriculum co-design · AI-supported pedagogy',
  },
];

function Trajectory() {
  const theme = useTheme();
  const isRow = useMediaQuery(theme.breakpoints.up('md'));
  const Arrow = isRow ? ArrowForwardIcon : ArrowDownwardIcon;

  return (
    <Box
      id="trajectory"
      component="section"
      sx={{ py: { xs: 6, md: 9 }, bgcolor: '#f8fafc' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom>
          Research Trajectory
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 720, mb: 4 }}>
          The thread running through all of it: how can a system help people
          through hard cognitive, social, and learning situations without taking
          away their agency?
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch',
            gap: 1,
          }}
        >
          {stages.map((stage, index) => (
            <React.Fragment key={stage.title}>
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: 2.5,
                  border: '1px solid #e2e8f0',
                  borderTop: '4px solid',
                  borderTopColor: 'primary.main',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography variant="h6" component="h3">
                  {stage.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stage.detail}
                </Typography>
              </Paper>
              {index < stages.length - 1 && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                    px: { md: 0.5 },
                  }}
                >
                  <Arrow />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Trajectory;
