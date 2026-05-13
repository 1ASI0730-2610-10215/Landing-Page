# ColdTrack Landing Page

ColdTrack Landing Page is a static marketing website for ColdTrack, a real-time monitoring platform for refrigerated food transport. It presents the product value proposition, core features, company information, development team, and direct access to the deployed web application.

## Live URLs

- Landing page: https://1asi0730-2610-10215.github.io/Landing-Page/
- Web application: https://coldtrack-front-web.web.app/
- Alternative application URL: https://coldtrack-front-web.firebaseapp.com/
- Repository documentation: https://github.com/1ASI0730-2610-10215/Landing-Page

## Project Structure

```text
Landing-Page/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Features

- Sticky toolbar with navigation, application login link, and `EN | ES` language toggle buttons.
- English interface by default.
- Hero section with product call to action linked to the deployed ColdTrack web app.
- Dashboard preview for live shipment monitoring.
- Feature, workflow, benefits, company, team, CTA, and footer sections.
- Documentation link connected to the landing page GitHub repository.
- Responsive layout for desktop, tablet, and mobile devices.
- SEO metadata updated according to the selected language.

## Internationalization

This repository is a static HTML, CSS, and JavaScript landing page. Because it is not an Angular project, `@ngx-translate/core` and `@ngx-translate/http-loader` are not installed here. The landing uses a lightweight JavaScript i18n layer in `js/script.js` with the same functional behavior required for the interface:

- Translation dictionaries are defined for `en` and `es`.
- Text elements use `data-i18n` keys.
- Toggle buttons use `data-language-option`.
- The selected language is stored in `localStorage` with the key `coldtrack-language`.
- English is the default language.

If the landing page is migrated to Angular later, the current translation keys can be moved into JSON files and loaded with `@ngx-translate/http-loader`.

## Development

Open `index.html` directly in a browser or serve the folder locally:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Team

HackRats development team:

- Eslander Celis Berrospi
- Gabriel Mendoza Palacios
- Rodrigo Oblitas Alcalde
- Aarón Avila Palacios
- Mathias Arechaga Saavedra

## Git Flow

All changes should start from `develop`, be implemented in a `feature/*` branch, merged back into `develop`, and finally merged into `main` when validated.

## Last Update

May 2026
