# Qanoniah UTM Builder

A single-page tool for building consistent, trackable UTM campaign URLs.
Live at **https://ma7moudfathy.github.io/qanoniah-utm/**

## What it does

- Enforces a controlled vocabulary for `utm_source` / `utm_medium` so
  HubSpot and GA4 attribution stays clean (no hand-typed typos).
- Auto-sanitizes campaign/content/term values to `lowercase-with-hyphens`.
- Detects and strips existing UTM parameters from a destination URL.
- Generates a QR code for the final URL, downloadable as **PNG, SVG, or PDF** —
  all rendered client-side, no external API.
- Keeps a local history of recent links (browser `localStorage`).

## How it's built

Deliberately dependency-free: the whole app is a single static
[`index.html`](index.html) — inline CSS and JavaScript, with the
[qrcode.js](https://github.com/kazuhikoarase/qrcode-generator) library (MIT)
inlined for offline QR generation. No build step, no framework, no runtime
network calls except loading the page itself.

## Deployment

Served as static files by GitHub Pages from the `main` branch root.
`.nojekyll` disables Jekyll so the HTML is served as-is. To deploy, just
commit to `main`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire application |
| `qanoniah-logo.jpg` | Header logo |
| `.nojekyll` | Tells GitHub Pages to skip the Jekyll build |
