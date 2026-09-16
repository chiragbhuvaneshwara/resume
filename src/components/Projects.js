import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Container,
  Chip,
  Stack,
  Link,
} from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { LINKS } from '../config';

// Featured projects, ordered to match the current research narrative.
const projectsData = [
  {
    name: 'Learning Journey Design Agent',
    subtitle:
      'An AI-Supported Tool for Structured Curriculum Co-Design (EC-TEL 2026 demo)',
    associatedWith: 'K8 Institut für strategische Ästhetik · Twin4Resilience',
    badge: 'EC-TEL 2026 Best Demo Award Nominee',
    tags: [
      'Generative AI',
      'Learning Technologies',
      'Human-in-the-Loop',
      'Curriculum Design',
      'EC-TEL 2026',
    ],
    description:
      "This is the tool behind my EC-TEL 2026 demo paper — accepted as a demo paper to the conference program and Springer proceedings (26% acceptance rate). It helps educators and curriculum designers put together structured learning journeys. The trick is that it doesn't let a language model just write whatever it wants — the generation happens inside a pedagogical workflow with real constraints. It suggests Micro-Learning Units from a curated catalogue and explains the suggestions, helps align things with learning outcomes and competencies, proposes activities, methods, and tools, and pulls it all into a coherent teaching plan. The final decisions stay with the educator. That's the point.",
    tools: 'React, backend API, LLM integration',
    link: LINKS.demo,
  },
  {
    name: 'MITHOS',
    subtitle:
      'Mixed Reality Interactive Teacher Training System for Conflict Situations at School',
    associatedWith: 'DFKI — Affective Computing Group',
    tags: [
      'Affective Computing',
      'Virtual Agents',
      'Teacher Training',
      'Mixed Reality',
      'Human-Agent Interaction',
    ],
    description:
      'MITHOS is about training teachers for the tense classroom moments — conflict situations that are hard to rehearse for — using mixed reality. My part was the computer-science and interaction side: affective computing, the virtual characters, the interaction tech, and the research infrastructure that let our interdisciplinary partners actually study how teachers and agents interact.',
    tools: 'Virtual agents, affective computing, interaction technology',
    link: '',
  },
  {
    name: 'InCoRe / Interactive Co-Regulation',
    subtitle: 'Emotion-Aware Agent Research',
    associatedWith: 'DFKI — Affective Computing Group',
    tags: [
      'Affective Computing',
      'Emotion Regulation',
      'Interactive Agents',
      'Multimodal AI',
      'Hybrid AI',
    ],
    description:
      'Work on interactive systems that combine affect recognition, interaction modelling, and a bit of reasoning to support emotionally aware human-agent interaction and co-regulation.',
    tools: 'Multimodal AI, affect recognition, interaction modelling',
    link: '',
  },
  {
    name: 'Visual SceneMaker / Research Tooling',
    subtitle: 'Software for Interactive-Agent Studies',
    associatedWith: 'DFKI — Affective Computing Group',
    tags: ['Research Software Engineering', 'Wizard-of-Oz', 'Virtual Agents'],
    description:
      'Research software and interfaces for designing, controlling, and studying interactions with virtual agents — including Wizard-of-Oz setups and tools that let domain experts rate participants and steer agent behaviour mid-study. This is the StudyMaster line of work: a React front end wired to a Java backend that drove virtual characters in real time and enabled remote studies with around 100 participants.',
    tools: 'Java, Javalin, WebSockets, ReactJS',
    link: '',
  },
];

function ProjectCard({ project, onOpen }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%' }}>
        <CardActionArea
          onClick={onOpen}
          sx={{ height: '100%', alignItems: 'stretch' }}
        >
          <Box sx={{ height: 6, bgcolor: 'primary.main' }} />
          <CardContent sx={{ p: 2.5 }}>
            {project.badge && (
              <Chip
                icon={<EmojiEventsOutlinedIcon />}
                label="Best Demo Nominee"
                size="small"
                color="primary"
                sx={{ mb: 1.5 }}
              />
            )}
            <Typography variant="h6" component="h3" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              {project.subtitle}
            </Typography>
            <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
              {project.tags.slice(0, 3).map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function Projects() {
  const [open, setOpen] = useState(null);
  const project = open != null ? projectsData[open] : null;

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom>
          Featured Projects
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 720, mb: 4 }}>
          A few projects that trace the path from affective computing and
          interactive agents to generative AI for learning design.
        </Typography>

        <Grid container spacing={3}>
          {projectsData.map((p, index) => (
            <ProjectCard key={p.name} project={p} onOpen={() => setOpen(index)} />
          ))}
        </Grid>
      </Container>

      <Dialog
        open={project != null}
        onClose={() => setOpen(null)}
        maxWidth="sm"
        fullWidth
      >
        {project && (
          <>
            <DialogTitle sx={{ pb: 0.5 }}>
              {project.name}
              <Typography variant="subtitle2" color="text.secondary">
                {project.subtitle}
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              {project.badge && (
                <Chip
                  icon={<EmojiEventsOutlinedIcon />}
                  label={project.badge}
                  color="primary"
                  sx={{ mb: 2 }}
                />
              )}
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Associated with
              </Typography>
              <Typography gutterBottom>{project.associatedWith}</Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 1.5 }}>
                About
              </Typography>
              <Typography gutterBottom>{project.description}</Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 1.5 }}>
                Stack
              </Typography>
              <Typography gutterBottom>{project.tools}</Typography>

              <Stack
                direction="row"
                spacing={0.5}
                flexWrap="wrap"
                useFlexGap
                sx={{ mt: 1.5 }}
              >
                {project.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Stack>

              {project.link && (
                <Box sx={{ mt: 2 }}>
                  <Link href={project.link} target="_blank" rel="noopener">
                    Open project / live demo
                  </Link>
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              {project.link && (
                <Button href={project.link} target="_blank" rel="noopener">
                  Visit
                </Button>
              )}
              <Button onClick={() => setOpen(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}

export default Projects;
