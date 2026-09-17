import React from 'react';
import { Box, Container, Typography, Stack, Chip } from '@mui/material';

const researchInterests = [
  'Human-Centered AI',
  'Technology-Enhanced Learning',
  'Generative AI for Education',
  'Affective Computing',
  'Interactive Agents',
  'Human-Agent Interaction',
  'Social Signal Processing',
  'Multimodal Interaction',
  'User Modelling',
  'Emotion-Aware Systems',
  'Hybrid AI',
  'Learning Design',
  'Curriculum Co-Design',
  'Human-in-the-Loop Systems',
  'Interdisciplinary Research',
  'Research Software Engineering',
];

function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          What I Work On
        </Typography>
        <Stack spacing={2.5} sx={{ mt: 2 }}>
          <Typography variant="body1">
            I'm a computer scientist, and most of what I do lands in the space
            between AI, human interaction, and learning.
          </Typography>
          <Typography variant="body1">
            Day to day, that means building intelligent systems and research
            prototypes with people from very different backgrounds —
            psychologists, learning scientists, education technologists,
            ethicists, media researchers. I'm the one who turns the shared idea
            into something that runs.
          </Typography>
          <Typography variant="body1">
            Over the years the work has moved through a few areas: affective
            computing, social signal processing, and multimodal interaction;
            virtual agents you can actually interact with; and, more recently,
            human-centered generative AI for teaching and learning.
          </Typography>
          <Typography variant="body1">
            What I keep coming back to is projects where computer science is{' '}
            <em>one part</em> of a bigger research question — not the whole
            question.
          </Typography>
        </Stack>

        <Typography variant="h4" component="h3" sx={{ mt: 5, mb: 2 }}>
          Research interests
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {researchInterests.map((item) => (
            <Chip
              key={item}
              label={item}
              variant="outlined"
              sx={{ mb: 1, borderColor: '#cbd5e1' }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
