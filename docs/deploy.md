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

Pending external release step:

```bash
git init
git add .
git commit -m "Launch SpecRelay MVP"
gh repo create specrelay --public --source=. --remote=origin --push
```

After the push, the Pages workflow can deploy the static `dist` bundle from `main`. The public URL depends on the GitHub repository name and Pages settings.
