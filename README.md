# Utkarsh Web Portfolio (React + Vite)

A modern single-page developer portfolio built with React and Vite, designed for fast load times and straightforward GitHub Pages deployment.

## Project description

This app is a personal portfolio website intended to showcase:
- professional summary
- technical skills
- projects/work samples
- contact and social links

The frontend is powered by React, bundled with Vite, and configured to be hosted from a GitHub repository subpath (`/Utkarsh_Web_Portfolio/`).

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

---

## Deploy to GitHub Pages (GitHub Actions)

### 1) Verify repository and URL values

- Repository name should be exactly: `Utkarsh_Web_Portfolio`
- Vite base path should be exactly:

```js
base: '/Utkarsh_Web_Portfolio/'
```

> The path is case-sensitive and must match your repository name exactly.

### 2) Set GitHub Pages source

In GitHub:
- Open **Settings → Pages**
- Under **Build and deployment** set **Source = GitHub Actions**

### 3) Push to `main`

```bash
git push origin main
```

### 4) Confirm deployment URL from workflow

After the workflow succeeds:
- Open **Actions → Deploy portfolio to GitHub Pages → latest run**
- Open the **Deploy to GitHub Pages** job
- Copy the `page_url` shown in job output/environment

This URL is the canonical live URL GitHub generated for your deployment.

---

## If workflow is green but site is not visible

Use this checklist in order:

1. **Open the exact URL from the deploy job** (not a guessed URL).
2. **Confirm Pages source is GitHub Actions** in Settings → Pages.
3. **Confirm repo is public**, or if private, ensure your plan supports Pages for private repos.
4. **Wait 2–10 minutes** after the first successful deployment (Pages propagation delay).
5. **Hard refresh browser cache** (`Ctrl/Cmd + Shift + R`).
6. **Check base path** in `vite.config.js` matches repository name exactly.
7. **If using custom domain**, temporarily remove it in Settings → Pages and test the default `*.github.io` URL first.

---

## About `homepage` in `package.json`

For this Vite + GitHub Actions setup, `homepage` is informational and not used by the build pipeline.

What matters for routing/assets is:
- `base` in `vite.config.js`
- correct GitHub Pages settings
- successful deploy job publishing `dist/`

---

## Optional: Custom domain

If you want a custom domain later:
- add `public/CNAME`
- configure DNS records at your registrar
- set domain in **Settings → Pages**
- enable HTTPS after DNS propagation
