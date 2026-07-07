# ColdTrack Landing Page

ColdTrack Landing Page is a static marketing website for ColdTrack, a real-time monitoring platform for refrigerated food transport. It presents the product value proposition, core features, company information, development team, and direct access to the deployed web application.

## Live URLs

- Landing page: https://1asi0730-2610-10215.github.io/Landing-Page/
- Web application: https://coldtrack-front-web.web.app/
- Alternative application URL: https://coldtrack-front-web.firebaseapp.com/
- API Swagger documentation: https://freshguard-coldtrack-platform.onrender.com/swagger/index.html
- Landing repository: https://github.com/1ASI0730-2610-10215/Landing-Page
- Frontend repository: https://github.com/1ASI0730-2610-10215/ColdTrack-Front
- Backend repository: https://github.com/1ASI0730-2610-10215/FreshGuard.ColdTrack.Platform
- Final report repository: https://github.com/1ASI0730-2610-10215/final-report

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
- Feature, workflow, benefits, company, product demo, team, CTA, and footer sections.
- Product demo links connected to the deployed app, deployed API, frontend repository, backend repository, final report and landing repository.
- Responsive layout for desktop, tablet, and mobile devices.
- SEO metadata updated according to the selected language.
- Accessible mobile navigation with `aria-expanded` and translated language toggle states.
- Improved company section with operational proof points and direct access to the deployed ColdTrack application.
- Team section with member portraits sourced from the final project report assets.

## Internationalization

This landing page is implemented with static HTML, CSS, and JavaScript. It uses a lightweight JavaScript internationalization dictionary in `js/script.js` to translate fixed interface texts between English and Spanish.

The deployed ColdTrack web application is a separate Vue 3 project that uses Vue I18n (https://vue-i18n.intlify.dev/) for application-level internationalization.

- English is the default language.
- The interface supports `EN | ES` language selection.
- Fixed interface texts are translated across titles, labels, calls to action, navigation, and footer content.
- Translation resources are organized as `en` and `es` dictionaries in `js/script.js`.
- The selected locale controls the visible language of the user interface.
- The selected language updates the document `lang` attribute and SEO metadata.

## Technology Stack

- HTML5 for semantic structure.
- CSS3 for responsive layout, visual system, and accessibility states.
- JavaScript for internationalization, mobile navigation, metadata updates, and reveal interactions.
- GitHub Pages for static deployment.

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

July 2026
