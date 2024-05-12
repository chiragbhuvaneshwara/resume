import React from 'react';
import { Box, Typography, List, ListItem, Link } from '@mui/material';

const publicationsList = [



  {
    title: "Visual Similarity for Socially Interactive Agents that Support Self-Awareness",
    authors: "Claudio Alves da Silva, Bernhard Hilpert, Chirag Bhuvaneshwara, Patrick Gebhard, Fabrizio Nunnari, Dimitra Tsovaltzi",
    booktitle: "IVA 2023"
  },
  {
    title: "MITHOS-Mixed Reality Interactive Teacher Training System for Conflict Situations at School",
    authors: "Chirag Bhuvaneshwara, Manuel Anglet, Bernhard Hilpert, Lara Chehayeb, Ann-Kristin Meyer, Daksitha Withanage Don, Antja Biermann, Sinah Auchtor, Nils Lauinger, Julia Knopf, Andreas Kaiser, Fabian Kersting, Gregor Mehlmann",
    booktitle: "ISLS 2023"
  },
  {
    title: "Backchannel Detection and Agreement Estimation from Video with Transformer Networks",
    authors: "Ahmed Amer, Chirag Bhuvaneshwara, Gowtham K Addluri, Mohammed M Shaik, Vedant Bonde, Philipp Müller",
    booktitle: "IJCNN 2023"
  },
  {
    title: "Multimodal Recognition of Valence, Arousal and Dominance via Late-Fusion of Text, Audio and Facial Expressions",
    authors: "Annette Rios, Uwe Reichel, Chirag Bhuvaneshwara, Panagiotis Filntisis, Petros Maragos, Felix Burkhardt, Florian Eyben, Björn Schuller, Fabrizio Nunnari, Sarah Ebling",
    booktitle: "ESANN 2023"
  },
  {
    title: "Piloting vibration induction for synchrony in urban cycling",
    authors: "Louisa Dauer, Lara Chehayeb, Mina Ameli, Manuel Anglet, Chirag Bhuvaneshwara, Stefan Schaffer, Esther Zahn, Dimitra Tsovaltzi",
    booktitle: "IJCNN 2023"
  },
  {
    title: "A Study on the Fusion of Pixels and Patient Metadata in CNN-Based Classification of Skin Lesion Images",
    authors: "Fabrizio Nunnari and Chirag Bhuvaneshwara and Abraham Obinwanne Ezema and Daniel Sonntag",
    booktitle: "International Cross-Domain Conference on Machine Learning and Knowledge Extraction",
    year: "2020",
    url: "https://api.semanticscholar.org/CorpusID:221193957"
  },
  {
    title: "Comparative performance analysis of various digital modulation schemes in AWGN channel",
    authors: "Chirag B and Lohith A and Prashantha H S",
    booktitle: "2017 Innovations in Power and Advanced Computing Technologies (i-PACT)",
    year: "2017",
    url: "https://doi.org/10.1109/IPACT.2017.8244913"
  },
];


function Publications() {
  // Sort publications by year in descending order
  const sortedPublications = [...publicationsList].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <Box sx={{ marginTop: 4, width: "95vw", }}>
      <Typography sx={{ margin: 4}} variant="h2">Publications</Typography>
      <List>
        {sortedPublications.map((publication, index) => (
          <ListItem key={index}>
            <Typography variant="h6" gutterBottom>
              {publication.authors}. ({publication.year}). {publication.title}. In <i>{publication.booktitle}</i>.
              <Link href={publication.url} target="_blank" rel="noopener" sx={{ ml: 1 }}>
                [Link]
              </Link>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Publications;
