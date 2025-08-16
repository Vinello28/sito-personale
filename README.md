# Gabriele Vianello — Personal Website

A fast, responsive personal website built with React + TypeScript. It showcases my profile, experience, skills and ways to get in touch. Deployed to GitHub Pages.

- Live: https://vinello28.github.io/sito-personale
- Repository: https://github.com/Vinello28/sito-personale

## Tech stack
- React 19 + TypeScript
- React Router (client-side routing)
- Tailwind CSS (utility-first styling)
- Framer Motion (micro-interactions/animations)
- Lucide Icons
- Create React App 5 (build tooling)
- GitHub Pages (hosting)

## Requirements
- Node.js 18+ (recommended 20+)
- npm 8+

## Getting started
Clone and install dependencies:

```bash
# macOS / zsh
git clone https://github.com/Vinello28/sito-personale.git
cd sito-personale
npm install
```

Run the app locally:

```bash
npm start
```
Open http://localhost:3000

Build for production:

```bash
npm run build
```

## Scripts
- `npm start` — run locally in development
- `npm test` — run tests in watch mode
- `npm run build` — build production artifacts to `build/`
- `npm run deploy` — publish the `build/` folder to the `gh-pages` branch (GitHub Pages)
- `npm run eject` — expose CRA config (one-way)

## Deployment (GitHub Pages)
This project is configured to deploy to GitHub Pages via the `gh-pages` package.

Prerequisites already set up in this repo:
- `"homepage": "https://vinello28.github.io/sito-personale"` in `package.json`
- `predeploy` and `deploy` scripts
- A 404 fallback in `public/404.html` for SPA routing on GitHub Pages

Deploy steps:

```bash
npm run build
npm run deploy
```
Then wait 1–2 minutes and visit: https://vinello28.github.io/sito-personale

If you change the repo name or username, update `homepage` accordingly.

## Project structure
```
.
├── public/
│   ├── index.html
│   └── 404.html            # SPA redirect for GitHub Pages
├── src/
│   ├── components/         # UI components (Navbar, Hero, About, etc.)
│   ├── pages/              # Route-level pages (Experience, Skills, Contact)
│   ├── App.tsx             # Routes configuration
│   └── index.tsx           # App entry
└── build/                  # Production output (generated)
```

## Routing
- The app uses client-side routing and is compatible with GitHub Pages.
- Navigation is handled through React Router links (no full page reloads).
- `public/404.html` ensures direct URL visits (e.g. `/experience`) resolve correctly when hosted on GitHub Pages.

## Accessibility & performance
- Semantic HTML and accessible labels where applicable
- Motion effects kept subtle for usability
- Lightweight, optimized production build

## Troubleshooting
- 404 on direct page navigation: ensure `404.html` is deployed and `homepage` is correct; run `npm run deploy` again and hard-refresh the browser (Cmd+Shift+R).
- Styling not applied: confirm Tailwind build is included and that you restarted the dev server after changes.
- If deploy doesn’t show updates: verify the `gh-pages` branch contains the latest build artifacts and that GitHub Pages is enabled on `gh-pages` (Settings → Pages).

## Contact
- Email: vianello.tech@gmail.com
- LinkedIn: [Gabriele Vianello](https://www.linkedin.com/in/gabriele-vianello-476a331a1)

---
© Gabriele Vianello. All rights reserved.
