# Deployment

SpecRelay is ready for static hosting.

## Local

```bash
npm install
npm run build
npm run dev -- --port 4173
```

## GitHub Pages

The repository includes `.github/workflows/pages.yml`.

Release step completed:

```bash
gh repo create specrelay --public --source=. --remote=origin --push
```

The Pages workflow deploys the static `dist` bundle from `main`.

This app is configured as a GitHub Pages project site at `/specrelay/`, so it will not overwrite an existing account site such as `username.github.io`.

Public URL: https://willsuo-github.github.io/specrelay/
