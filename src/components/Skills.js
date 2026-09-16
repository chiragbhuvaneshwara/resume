import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';

const primarySkills = [
  'Artificial Intelligence',
  'Human-Computer Interaction / Human-Centered AI',
  'Machine Learning',
];

const secondarySkills = [
  'Affective Computing',
  'Generative AI',
  'Large Language Models',
  'Technology-Enhanced Learning',
  'Interactive Agents',
  'Social Signal Processing',
  'Multimodal Interaction',
  'Research Software Engineering',
  'Data Science',
  'Software Prototyping',
  'Interdisciplinary Research',
  'Learning Technologies',
];

function Skills() {
  return (
    <Box>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
        {primarySkills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="primary"
            sx={{ mb: 1, fontWeight: 600 }}
          />
        ))}
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Also work with
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {secondarySkills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="outlined"
            sx={{ mb: 1, borderColor: '#cbd5e1' }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Skills;
