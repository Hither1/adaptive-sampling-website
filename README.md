# Learning Adaptive LLM Decoding — Paper Website

This repository hosts the project page for the paper **"Learning Adaptive LLM Decoding"**.

## Live Site

The website is served via **GitHub Pages** at:
`https://hither1.github.io/adaptive-sampling-website/`

## Enabling GitHub Pages

1. Go to **Settings → Pages** in this repository
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save** — the site will be live in ~1 minute

## Adding Figures

Place figure images in `static/images/`. The website expects:

| File | Used for |
|------|----------|
| `static/images/teaser.png` | Method overview (Figure 1 from paper) |
| `static/images/greedy_selection.png` | Greedy vs Top-N selection plot (Figure 6) |
| `static/images/entropy_modulation.png` | Token entropy modulation plot (Figure 3) |
| `static/images/action_distribution.png` | Action distributions during training (Figure 2/8) |

Images will display as styled placeholders until added. Any standard web format (PNG, JPG, SVG, WebP) works.

## Customizing Author Info

When the paper is de-anonymized, update these fields in `index.html`:

- `<div class="venue-badge">` — conference/year
- `<h1 class="paper-title">` — paper title
- `<div class="authors">` — author names with links
- `<div class="affiliations">` — institution names
- `.link-buttons` `<a href="#">` — links to paper PDF, arXiv, code repo
- `#bibtex-content` `<pre>` — correct BibTeX entry

## Structure

```
.
├── index.html              # Main website
├── static/
│   ├── css/style.css       # All styles
│   ├── js/main.js          # Copy button, placeholder handling
│   └── images/             # Drop paper figures here
└── README.md
```
