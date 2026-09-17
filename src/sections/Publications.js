import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Link,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { LINKS } from '../config';

// Ordered so the work matching the current narrative comes first.
const selected = [
  {
    title:
      'Learning Journey Design Agent: An AI-Supported Tool for Structured Curriculum Co-Design',
    authors:
      'Chirag Bhuvaneshwara, Tobias Meyer, Julia Pierzina, Sónia Alves, Müge Gümüs, Soenke Zehle',
    booktitle: 'EC-TEL 2026 (Demo Paper, Springer Proceedings)',
    year: '2026',
    note: 'Best Demo Award nominee',
    url: '',
  },
  {
    title:
      'MITHOS — Mixed Reality Interactive Teacher Training System for Conflict Situations at School',
    authors:
      'Chirag Bhuvaneshwara, Manuel Anglet, Bernhard Hilpert, Lara Chehayeb, Ann-Kristin Meyer, Daksitha Withanage Don, Antja Biermann, Sinah Auchtor, Nils Lauinger, Julia Knopf, Andreas Kaiser, Fabian Kersting, Gregor Mehlmann',
    booktitle: 'ISLS 2023',
    year: '2023',
    url: '',
  },
  {
    title:
      'Visual Similarity for Socially Interactive Agents that Support Self-Awareness',
    authors:
      'Claudio Alves da Silva, Bernhard Hilpert, Chirag Bhuvaneshwara, Patrick Gebhard, Fabrizio Nunnari, Dimitra Tsovaltzi',
    booktitle: 'IVA 2023',
    year: '2023',
    url: '',
  },
  {
    title:
      'Backchannel Detection and Agreement Estimation from Video with Transformer Networks',
    authors:
      'Ahmed Amer, Chirag Bhuvaneshwara, Gowtham K Addluri, Mohammed M Shaik, Vedant Bonde, Philipp Müller',
    booktitle: 'IJCNN 2023',
    year: '2023',
    url: '',
  },
  {
    title:
      'Multimodal Recognition of Valence, Arousal and Dominance via Late-Fusion of Text, Audio and Facial Expressions',
    authors:
      'Annette Rios, Uwe Reichel, Chirag Bhuvaneshwara, Panagiotis Filntisis, Petros Maragos, Felix Burkhardt, Florian Eyben, Björn Schuller, Fabrizio Nunnari, Sarah Ebling',
    booktitle: 'ESANN 2023',
    year: '2023',
    url: '',
  },
  {
    title: 'Piloting vibration induction for synchrony in urban cycling',
    authors:
      'Louisa Dauer, Lara Chehayeb, Mina Ameli, Manuel Anglet, Chirag Bhuvaneshwara, Stefan Schaffer, Esther Zahn, Dimitra Tsovaltzi',
    booktitle: 'IJCNN 2023',
    year: '2023',
    url: '',
  },
];

const earlier = [
  {
    title:
      'A Study on the Fusion of Pixels and Patient Metadata in CNN-Based Classification of Skin Lesion Images',
    authors:
      'Fabrizio Nunnari, Chirag Bhuvaneshwara, Abraham Obinwanne Ezema, Daniel Sonntag',
    booktitle:
      'International Cross-Domain Conference on Machine Learning and Knowledge Extraction',
    year: '2020',
    url: 'https://api.semanticscholar.org/CorpusID:221193957',
  },
  {
    title:
      'Comparative performance analysis of various digital modulation schemes in AWGN channel',
    authors: 'Chirag B, Lohith A, Prashantha H S',
    booktitle: '2017 Innovations in Power and Advanced Computing Technologies (i-PACT)',
    year: '2017',
    url: 'https://doi.org/10.1109/IPACT.2017.8244913',
  },
];

function PublicationItem({ pub }) {
  return (
    <ListItem sx={{ display: 'block', px: 0, py: 1.5 }}>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {pub.title}
        {pub.url && (
          <Link href={pub.url} target="_blank" rel="noopener" sx={{ ml: 1 }}>
            [link]
          </Link>
        )}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {pub.authors}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
        {pub.booktitle} · {pub.year}
        {pub.note && (
          <Chip
            label={pub.note}
            size="small"
            color="primary"
            sx={{ ml: 1, fontStyle: 'normal' }}
          />
        )}
      </Typography>
    </ListItem>
  );
}

function Publications() {
  return (
    <Box
      id="publications"
      component="section"
      sx={{ py: { xs: 6, md: 9 }, bgcolor: '#f8fafc' }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          Selected Publications
        </Typography>
        <Button
          variant="outlined"
          startIcon={<SchoolOutlinedIcon />}
          href={LINKS.scholar || '#publications'}
          target={LINKS.scholar ? '_blank' : undefined}
          rel={LINKS.scholar ? 'noopener' : undefined}
          sx={{ mb: 2 }}
        >
          Full list on Google Scholar
        </Button>

        <List disablePadding>
          {selected.map((pub) => (
            <PublicationItem key={pub.title} pub={pub} />
          ))}
        </List>

        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" component="h3" color="text.secondary" gutterBottom>
          Earlier work
        </Typography>
        <List disablePadding>
          {earlier.map((pub) => (
            <PublicationItem key={pub.title} pub={pub} />
          ))}
        </List>
      </Container>
    </Box>
  );
}

export default Publications;
