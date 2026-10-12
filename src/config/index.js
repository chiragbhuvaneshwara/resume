// ---------------------------------------------------------------------------
// Central place for all outward-facing links + key facts for the visiting card.
// ---------------------------------------------------------------------------

export const DEMO_URL = 'https://learning-journey.k8.design/';
export const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=CiO_sPEAAAAJ&hl=en';
export const ORCID_URL = 'https://orcid.org/0000-0002-7262-8708';

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/chirag-bhuvaneshwara/',
  github: 'https://github.com/chiragbhuvaneshwara',
  email: 'chb@k8.design', // primary connect email (shown on the visiting card)
  scholar: SCHOLAR_URL,
  orcid: ORCID_URL,
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
  bestDemo: 'Winner of the EC-TEL 2026 Best Demonstration Award',
  selection: '24 submissions → 13 accepted demos → 3 nominees → 1 award',
};

export default LINKS;
