import React from 'react';
import { Box, Container, Typography, Stack, Chip } from '@mui/material';

const disciplines = [
  'Psychology',
  'Learning sciences',
  'Education technology',
  'Ethics',
  'Media studies',
  'Human-computer interaction',
  'Teacher education',
  'Urban & digital-transformation projects',
];

function Collaboration() {
  return (
    <Box
      id="collaboration"
      component="section"
      sx={{ py: { xs: 6, md: 9 } }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          Computer Science in Interdisciplinary Research
        </Typography>
        <Stack spacing={2.5} sx={{ mt: 2 }}>
          <Typography variant="body1">
            I like problems where computer science is only one piece of a bigger
            research puzzle.
          </Typography>
          <Typography variant="body1">
            Depending on the project, that's meant building systems for — and
            working shoulder to shoulder with — people in:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {disciplines.map((d) => (
              <Chip
                key={d}
                label={d}
                sx={{ mb: 1, bgcolor: '#eff6ff', color: '#1e3a8a' }}
              />
            ))}
          </Stack>
          <Typography variant="body1">
            My usual job is to sit between the technical side and the domain
            side: translate what's possible into what's needed, get a prototype
            running fast, and turn an interdisciplinary idea into software people
            can actually test in a real study.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Collaboration;
