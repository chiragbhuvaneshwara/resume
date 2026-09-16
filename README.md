# Chirag Bhuvaneshwara — Personal Web App

A minimal, responsive personal landing page / digital visiting card for
**Chirag Bhuvaneshwara** — computer scientist working across human-centered AI,
learning technologies, and affective computing.

🔗 **Live:** https://chiragbhuvaneshwara.github.io/resume/

Built for EC-TEL 2026 as a single-screen "visiting card": above the fold it shows
how to connect (email, LinkedIn link + QR code), the EC-TEL 2026 demo
(**Learning Journey Design Agent**), and a summary of the MITHOS PhD work on
teacher training for conflict resolution. Everything is explained in more detail
in the sections below the fold.

## Tech stack

- [React](https://react.dev/) (Create React App)
- [MUI](https://mui.com/) for components and theming
- [qrcode.react](https://github.com/zpao/qrcode.react) for the LinkedIn QR code
- Deployed to GitHub Pages via the [`gh-pages`](https://github.com/tschaub/gh-pages) branch

## Project structure

```
src/
  App.js                 layout + responsive navigation
  config.js              all outward-facing links + EC-TEL facts (edit here)
  components/
    Theme.js             minimal light theme, responsive font scaling
    VisitingCard.js      above-the-fold connect + EC-TEL + PhD dashboard
    About.js             "What I Work On" + research interests
    Trajectory.js        research-trajectory diagram
    Projects.js          featured projects (cards + detail dialog)
    Publications.js      selected publications + earlier work
    Collaboration.js     interdisciplinary collaboration
    ProfileDetails.js    current role (K8) + doctoral research + skills
    Contact.js           contact footer
public/
  profile.png            headshot avatar (also the browser-tab favicon source)
```

To update contact links, the demo URL, or EC-TEL details, edit **`src/config.js`**.

## Local development

> Requires the legacy OpenSSL provider on Node 17+; the npm scripts set this
> automatically via `cross-env`.

```bash
npm install
npm start        # http://localhost:3000
```

## Build

```bash
npm run build    # outputs an optimized bundle to build/
```

## Deploy

Publishes the production build to the `gh-pages` branch, which serves the live
site:

```bash
npm run deploy
```

GitHub Pages usually reflects the change within 1–3 minutes.

### Notes

- The `homepage` field in `package.json` is set to the `/resume/` path, so the
  app is served correctly from `https://chiragbhuvaneshwara.github.io/resume/`.
- Clone/fetch over **HTTPS** on machines where the GitHub SSH host key isn't
  trusted; `gh auth setup-git` enables HTTPS push auth for deploys.
