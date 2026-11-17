# Vignesh — Web Security Portfolio

A dark, terminal-inspired personal portfolio built with React and Vite. The content presents an early-career learning journey in web application security, bug bounty methodology, Linux, Python and reconnaissance workflows.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

The project is configured for Vercel. Import the GitHub repository, keep the framework preset as **Vite**, and use the default build command (`npm run build`) and output directory (`dist`). The `vercel.json` file adds baseline browser security headers.

## Before publishing

- Verify the GitHub and LinkedIn URLs in `src/App.jsx`.
- Add only completed projects with real source-code links and screenshots.
- Replace the learning-status labels as your practical experience grows.
- Add a current cybersecurity-focused resume only when it is ready to share.
- Keep all security testing within authorized scope.
