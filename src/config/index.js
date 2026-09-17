// ---------------------------------------------------------------------------
// Central place for all outward-facing links + key facts for the visiting card.
// ---------------------------------------------------------------------------

export const DEMO_URL = 'https://learning-journey.k8.design/';
export const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=CiO_sPEAAAAJ&hl=en';

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/chirag-bhuvaneshwara/',
  github: 'https://github.com/chiragbhuvaneshwara',
  email: 'chb@k8.design', // primary connect email (shown on the visiting card)
  scholar: SCHOLAR_URL,
  demo: DEMO_URL,
};

// The accepted EC-TEL 2026 demo paper.
export const ECTEL = {
  paperTitle:
    'Learning Journey Design Agent: An AI-Supported Tool for Structured Curriculum Co-Design',
  authors:
    'Chirag Bhuvaneshwara, Tobias Meyer, Julia Pierzina, Sónia Alves, Müge Gümüs, Soenke Zehle',
  conference: '21st European Conference on Technology Enhanced Learning (EC-TEL 2026)',
  place: 'Valencia, Spain · 14–18 September 2026',
  status: 'Accepted Demo Paper · Springer Proceedings · 26% acceptance rate',
  bestDemo: 'Nominated for the EC-TEL 2026 Best Demo Award',
  sessions: [
    { label: 'Poster & Demo Exhibition', when: 'Wed 16 Sep · 16:00–17:30 · CAPILLA' },
    {
      label: 'Nominated Poster & Demo Presentations',
      when: 'Thu 17 Sep · 12:00–13:00 · SA UNED',
    },
  ],
};

export default LINKS;
