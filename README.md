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

The ColdTrack application is built with JavaScript as the programming language and Vue as the frontend framework. Internationalization support is provided with Vue I18n (https://vue-i18n.intlify.dev/), which manages the English and Spanish interface texts.

- English is the default language.
- The interface supports `EN | ES` language selection.
- Fixed interface texts are translated across titles, labels, calls to action, navigation, and footer content.
- Translation resources are organized for the `en` and `es` locales.
- The selected locale controls the visible language of the user interface.

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
