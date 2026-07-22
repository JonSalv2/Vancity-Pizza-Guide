# Vancity Pizza Guide

A responsive, multi-page static website for discovering pizza spots across the Metro Vancouver area. Built as the final project for COMP 1850 using plain HTML, CSS, and JavaScript.

## Live site

Hosted with GitHub Pages: <https://jonsalv2.github.io/Vancity-Pizza-Guide/>

## About the project

The Vancity Pizza Guide helps visitors browse local pizzerias by style (Neapolitan, New York, By the Slice, Modern, Taglio) and learn a bit about each style's history and traits. Users can also submit their own recommendations through a form.

The site is designed mobile-first, with progressive enhancements at tablet and desktop breakpoints. All content is served as static files so it can be hosted anywhere that serves HTML.

## Features

- **Style-based search** on the Search page, filtering a client-side dataset of Vancouver pizza places and linking each result to Google Maps.
- **Responsive design** using a mobile-first CSS approach with breakpoints at `300px`, `768px`, and `1200px`.
- **Collapsible mobile navigation** driven by a small vanilla JS script.
- **Reusable styling** in a single stylesheet, based on an earthy Italian-countryside colour palette.
- **Comparison table** on the Styles page that reflows into stacked cards on small screens.
- **Recommendation form** with native HTML5 validation on the Submit page (front-end only — see note below).

> **Note:** the Submit form is not wired up to a backend yet. It validates input in the browser but does not actually send or store submissions.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Landing page with a hero banner and cards linking to the main sections. |
| Search | `search.html` | Filter Vancouver pizza places by style. |
| Styles | `styles.html` | Explains the different pizza styles with a comparison table. |
| History | `history.html` | A short history of pizza. |
| Submit | `submit.html` | Form to submit a new pizza recommendation. |
| Lorem | `lorem.html` | Placeholder page used to meet the assignment's page-count requirement. |

## Tech stack

- **HTML5** for structure and semantic content.
- **CSS3** for layout, typography, and responsiveness (Flexbox and Grid, no preprocessors).
- **Vanilla JavaScript** for the mobile menu and search filtering.
- **Font Awesome** (via CDN) for social icons in the footer.

## Project structure

```
final-project/
├── index.html            # Home
├── search.html           # Style-based search
├── styles.html           # Pizza style reference
├── history.html          # History of pizza
├── submit.html           # Recommendation form
├── lorem.html            # Placeholder content page
├── css/
│   └── styles.css        # Single global stylesheet
├── js/
│   ├── nav.js            # Mobile navigation toggle
│   ├── pizza-data.js     # Pizza place dataset
│   └── search.js         # Search / filter logic
└── images/               # Photos, logo, and icon assets
```


## Design notes

- **Colour palette:** an earthy Italian-countryside scheme with deep brick, burnt clay, dark wood, parchment, olive, and soft charcoal.
- **Breakpoints:** mobile-first base styles, with enhancements at `min-width: 300px`, `min-width: 768px` (tablet), and `min-width: 1200px` (desktop).
- **Data source:** the pizza dataset in `js/pizza-data.js` was scaffolded from a text list of Vancouver pizzerias and enriched with details from Google Maps. Some entries may be out of date. Therefore, corrections are welcome via the Submit page.

## Assignment context

Built for **COMP 1850 — Introduction to Web Development** at BCIT. 

## Acknowledgments

- **ChatGPT** was used to help generate and manipulate some of the image assets used on the site.
- **OpenAI Codex** was used to help scaffold the pizza dataset in `js/pizza-data.js` (see the comment at the top of that file for the exact prompt).
- All HTML, CSS, and layout/design decisions are my own.

## Author

**Jonathan Cozier** — [@JonSalv2](https://github.com/JonSalv2)
