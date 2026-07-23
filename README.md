# Qanoniah Marketing Tools

Small, single-page marketing tools. No build step, no framework, no runtime
network calls beyond loading the page — each tool is one static HTML file with
inline CSS/JS and the [qrcode.js](https://github.com/kazuhikoarase/qrcode-generator)
library (MIT) inlined for offline QR generation.

Live at **https://ma7moudfathy.github.io/qanoniah-utm/**

## Tools

### UTM Builder — [`index.html`](index.html)
Build consistent, trackable UTM campaign URLs.

- Enforces a controlled vocabulary for `utm_source` / `utm_medium` so
  HubSpot and GA4 attribution stays clean (no hand-typed typos).
- Auto-sanitizes campaign/content/term values to `lowercase-with-hyphens`.
- Detects and strips existing UTM parameters from a destination URL.
- Generates a QR code, downloadable as PNG, SVG, or PDF.
- Keeps a local history of recent links (browser `localStorage`).

### vCard QR Generator — [`vcard.html`](vcard.html)
Turn contact details into an add-to-contacts QR code.

- Enter name, phone, email, job title, company, and website.
- Produces a QR that opens the "Add contact" screen prefilled on any phone.
- Builds a valid vCard 3.0 payload (widest phone support).
- Download the QR as PNG, SVG, or PDF, or export a `.vcf` contact file.
- Runs entirely in the browser — no data leaves the device.

## Deployment

Served as static files by GitHub Pages from the `main` branch root.
`.nojekyll` disables Jekyll so the HTML is served as-is. To deploy, commit
to `main`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | UTM Builder |
| `vcard.html` | vCard QR Generator |
| `qanoniah-logo.jpg` | Shared header logo |
| `.nojekyll` | Tells GitHub Pages to skip the Jekyll build |
