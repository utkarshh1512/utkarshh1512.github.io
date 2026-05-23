# Utkarsh Web Portfolio (React + Vite)

A personal portfolio website built with React and optimized for GitHub Pages deployment.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

---

## Deploy to GitHub Pages (Recommended: GitHub Actions)

### 1) Update your GitHub username in `package.json`
Replace:

```json
"homepage": "https://<your-github-username>.github.io/Utkarsh_Web_Portfolio/"
```

with your actual username:

```json
"homepage": "https://YOUR_USERNAME.github.io/Utkarsh_Web_Portfolio/"
```

### 2) Keep Vite base path aligned to repo name
In `vite.config.js`, keep:

```js
base: '/Utkarsh_Web_Portfolio/'
```

If your repository name changes, update this path to match.

### 3) Push this code to GitHub
Push to your default branch (`main`):

```bash
git push origin main
```

### 4) Enable GitHub Pages
In GitHub:
- Go to **Repository → Settings → Pages**
- Under **Build and deployment**, set **Source = GitHub Actions**

### 5) Wait for deploy workflow to finish
This repository already includes `.github/workflows/deploy.yml`.
On every push to `main`, it will:
- install dependencies (`npm install`)
- build the app (`npm run build`)
- deploy `dist/` to GitHub Pages

### 6) Open your portfolio link
Your live site link will be:

```text
https://YOUR_USERNAME.github.io/Utkarsh_Web_Portfolio/
```

You can also find the exact live URL in:
- **Actions tab** → latest "Deploy portfolio to GitHub Pages" run
- or **Settings → Pages** after first successful deployment

---

## Optional: Use a custom domain (e.g., `utkarsh.dev`)

### A) Add a `CNAME` file
Create `public/CNAME` with your domain:

```text
utkarsh.dev
```

For `www`, use:

```text
www.utkarsh.dev
```

### B) Configure DNS at your domain provider
- **Apex domain** (`utkarsh.dev`): add A records pointing to GitHub Pages IPs
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **Subdomain** (`www.utkarsh.dev`): add `CNAME` to:
  - `YOUR_USERNAME.github.io`

### C) Enable custom domain in GitHub
- Go to **Settings → Pages**
- Enter your domain in **Custom domain**
- Save and enable **Enforce HTTPS** after DNS propagates

---

## Troubleshooting

- Blank page / broken assets:
  - Confirm `base` in `vite.config.js` exactly matches repo name.
- 404 on site:
  - Confirm the workflow succeeded and Pages source is set to GitHub Actions.
- Wrong URL:
  - Confirm `homepage` in `package.json` uses the correct username and repo.
- Custom domain not resolving:
  - DNS propagation can take minutes to 24 hours.
