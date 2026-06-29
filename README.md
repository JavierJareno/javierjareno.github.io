# Javier Jareño Dorado - Academic Portfolio

Static GitHub Pages portfolio for `javierjareno.github.io`.

## Structure

- `index.html`: all portfolio content and links.
- `assets/css/styles.css`: visual design, responsive layout, and dark mode.
- `assets/js/main.js`: mobile navigation and dark-mode toggle.
- `assets/images/Banner.jpg`: banner image used as the homepage hero background.
- `assets/images/Perfil.jpg`: profile photo displayed as a circular portrait.

## Updating Content

Edit `index.html` directly. The main sections are:

- `#about`
- `#experience`
- `#education`
- `#publications`
- `#projects`
- `#teaching`
- `#awards`
- `#contact`

For a new publication, copy one existing `<article class="publication">...</article>` block inside the relevant publication list and update the year, title, authors, venue, DOI link, and metric badges.

For a new under-review paper, copy one `<article class="card compact">...</article>` block inside the "Under Review" subsection.

For a new project or teaching item, copy an existing `<article class="card">...</article>` block in the matching section.

## Publishing on GitHub Pages

Create or use the repository named `javierjareno.github.io` under the GitHub account `javierjareno`, then push these files to the default branch. GitHub Pages will publish the site at:

`https://javierjareno.github.io/`

The reference HTML and the extracted working text are ignored through `.gitignore`.
