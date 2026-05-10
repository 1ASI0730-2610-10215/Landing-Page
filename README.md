# ColdTrack Landing Page

Landing page para ColdTrack, una plataforma de monitoreo en tiempo real para el transporte de alimentos.

## Estructura del Proyecto

```text
landing-page/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Características

- Header fijo con navegación, login y selector de idioma.
- Selector `EN | ES` para cambiar la interfaz entre inglés y español.
- Hero con CTA y preview del dashboard.
- Secciones de características, funcionamiento, beneficios, CTA y footer.
- Smooth scrolling, animaciones de entrada y estados hover.
- Diseño responsive para móvil, tablet y escritorio.
- SEO básico con título, descripción y OpenGraph localizados.

## Internacionalización

La internacionalización se implementa en `js/script.js` mediante el objeto `translations`.

- Cada texto traducible del HTML usa el atributo `data-i18n`.
- El selector de idioma usa botones con `data-language-option`.
- El idioma seleccionado se guarda en `localStorage` con la clave `coldtrack-language`.
- Al cambiar idioma, también se actualizan `document.title`, `meta[name="description"]`, `og:title`, `og:description` y el atributo `lang` del documento.

Para agregar o modificar textos:

1. Agrega una clave en los diccionarios `en` y `es` dentro de `translations`.
2. Usa esa clave en el HTML con `data-i18n="namespace.key"`.
3. Mantén los nombres de variables, funciones, clases JS y comentarios de código en inglés.

## Documentación del Código

El archivo `js/script.js` usa documentación JSDoc siguiendo el estilo del ejemplo compartido:

- `@fileoverview` para describir el módulo.
- `@module` para identificar la capa de interacción de la landing.
- `@type` para estructuras principales.
- `@param`, `@returns` y descripciones por función.

## Cómo Usar

Abre `index.html` directamente en tu navegador o sirve el proyecto con un servidor local:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000/
```

## Secciones

### Header

- Logo de ColdTrack.
- Navegación hacia las secciones principales.
- Selector de idioma `EN | ES`.
- Botón de inicio de sesión.

### Hero

- Título principal.
- Descripción del producto.
- Botones de acción.
- Preview del dashboard con tres envíos de ejemplo.

### Características

- Monitoreo en tiempo real.
- Alertas automáticas.
- Historial detallado.

### Cómo Funciona

1. Instalación de sensores.
2. Transmisión de datos.
3. Monitoreo continuo.
4. Alertas y reportes.

### Beneficios

- Mayor eficiencia.
- Menos riesgos.
- Toma de decisiones rápida.

## Colores

- Primario: `#0052CC`
- Secundario: `#F5F5F5`
- Fondo oscuro: `#0F1117`
- Texto principal: `#1F2937`
- Texto secundario: `#6B7280`
- Éxito: `#10B981`
- Advertencia: `#F59E0B`

## Equipo de Desarrollo

- Rodrigo Oblitas
- Eslander Celis
- Mathias Aréchaga
- Aarón Avila
- Mariano Vilela
- Gabriel Mendoza

---

Última actualización: mayo de 2026
