/**
 * @fileoverview ColdTrack landing page interaction and internationalization layer.
 *
 * Handles language selection, localized text, SEO metadata, mobile navigation,
 * smooth anchor behavior and lightweight reveal animations.
 *
 * @module landing-page/main
 * @author FreshGuard
 */

const APP_URL = 'https://coldtrack-front-web.web.app/';
const API_DOCS_URL = 'https://freshguard-coldtrack-platform.onrender.com/swagger/index.html';
const LANDING_REPO_URL = 'https://github.com/1ASI0730-2610-10215/Landing-Page';
const FRONTEND_REPO_URL = 'https://github.com/1ASI0730-2610-10215/ColdTrack-Front';
const BACKEND_REPO_URL = 'https://github.com/1ASI0730-2610-10215/FreshGuard.ColdTrack.Platform';
const REPORT_REPO_URL = 'https://github.com/1ASI0730-2610-10215/final-report';

/**
 * Supported interface translations indexed by language code.
 *
 * @type {Record<string, Record<string, string>>}
 */
const translations = {
  en: {
    'meta.title': 'ColdTrack - Real-Time Monitoring for Food Transport',
    'meta.description': 'ColdTrack is a real-time cold-chain monitoring platform for food transport with temperature, humidity, alerts and operational reports.',
    'meta.ogTitle': 'ColdTrack - Real-Time Cold-Chain Monitoring',
    'meta.ogDescription': 'Protect food transport quality with sensor telemetry, alerts and shipment reports.',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.benefits': 'Benefits',
    'nav.company': 'Company',
    'nav.demo': 'Product Demo',
    'nav.team': 'Team',
    'actions.login': 'Log In',
    'actions.start': 'Start Now',
    'actions.learnMore': 'Learn More',
    'actions.openApp': 'Open App',
    'hero.title': 'Real-Time Monitoring for Food Transport',
    'hero.description': 'Protect product quality with temperature and humidity control at every stage of transport.',
    'dashboard.title': 'Dashboard - Live Monitoring',
    'dashboard.activeShipments': '5 active shipments',
    'dashboard.shipmentOne': 'Shipment #1247',
    'dashboard.shipmentTwo': 'Shipment #1248',
    'dashboard.shipmentThree': 'Shipment #1249',
    'dashboard.statusNormal': 'Normal',
    'dashboard.statusWarning': 'Warning',
    'dashboard.humidityLow': 'Humidity: 65%',
    'dashboard.humidityHigh': 'Humidity: 72%',
    'dashboard.humidityMedium': 'Humidity: 60%',
    'features.title': 'Key Features',
    'features.subtitle': 'Everything you need to guarantee transport quality',
    'features.realtimeTitle': 'Real-Time Monitoring',
    'features.realtimeDescription': "View each shipment's temperature and humidity in real time with constantly updated IoT sensor data.",
    'features.alertsTitle': 'Automatic Alerts',
    'features.alertsDescription': 'Receive immediate notifications when conditions move out of range. Act before losses happen.',
    'features.historyTitle': 'Detailed History',
    'features.historyDescription': 'Access the complete record for every transport. Analyze trends and improve logistics with concrete data.',
    'workflow.title': 'How Does It Work?',
    'workflow.subtitle': 'Simple implementation, immediate results',
    'workflow.stepOneTitle': 'Sensor Installation',
    'workflow.stepOneDescription': 'We place IoT sensors in your transport units.',
    'workflow.stepTwoTitle': 'Data Transmission',
    'workflow.stepTwoDescription': 'Sensors send real-time data to the platform.',
    'workflow.stepThreeTitle': 'Continuous Monitoring',
    'workflow.stepThreeDescription': 'View all routes from a centralized dashboard.',
    'workflow.stepFourTitle': 'Alerts and Reports',
    'workflow.stepFourDescription': 'Receive alerts and generate detailed reports automatically.',
    'benefits.title': 'Benefits for Your Operation',
    'benefits.subtitle': 'Improve every part of your distribution chain',
    'benefits.efficiencyTitle': 'Greater Efficiency',
    'benefits.efficiencyDescription': 'Optimize routes and reduce response times for incidents.',
    'benefits.riskTitle': 'Lower Risk',
    'benefits.riskDescription': 'Prevent losses caused by product deterioration.',
    'benefits.decisionsTitle': 'Faster Decisions',
    'benefits.decisionsDescription': 'Access real-time information and act immediately.',
    'company.title': 'About FreshGuard Technologies',
    'company.eyebrow': 'Cold-chain intelligence for food logistics',
    'company.description': 'FreshGuard Technologies is a technology startup focused on optimizing food quality during transport through real-time monitoring. Its main product, ColdTrack, integrates with temperature and humidity sensors installed in transport units so companies can supervise product conditions from distribution centers to the final destination.',
    'company.proofMonitoring': 'Route monitoring',
    'company.proofSensors': 'Sensor telemetry',
    'company.proofReports': 'Exportable reports',
    'company.missionTitle': 'Mission',
    'company.missionDescription': 'Guarantee food quality and safety during transport through real-time monitoring, helping companies make fast decisions to avoid losses and maintain optimal conditions.',
    'company.visionTitle': 'Vision',
    'company.visionDescription': 'Become the leading transport condition monitoring solution in Peru and Latin America through innovation, reliability and contribution to food safety.',
    'company.appTitle': 'ColdTrack Web App',
    'company.appDescription': 'Access the deployed application to manage shipments, sensors, alerts and historical reports.',
    'company.appFeatureShipments': 'Shipment dashboard and status control',
    'company.appFeatureSensors': 'Sensor assignment and telemetry readings',
    'company.appFeatureReports': 'Alerts, history and PDF reports',
    'demo.title': 'Product Demo and Documentation',
    'demo.subtitle': 'Explore the deployed ColdTrack ecosystem and its project repositories.',
    'demo.webAppTitle': 'Web Application',
    'demo.webAppDescription': 'Open the deployed Vue application for shipments, sensors, alerts and reports.',
    'demo.apiTitle': 'API Swagger',
    'demo.apiDescription': 'Review the ASP.NET Core web services exposed through Swagger/OpenAPI.',
    'demo.frontRepoTitle': 'Frontend Repository',
    'demo.frontRepoDescription': 'Inspect the Vue 3 web application source code and release history.',
    'demo.backRepoTitle': 'Backend Repository',
    'demo.backRepoDescription': 'Inspect the backend platform, bounded contexts and MySQL integration.',
    'demo.reportRepoTitle': 'Final Report',
    'demo.reportRepoDescription': 'Access the project report with UX, architecture, sprint and deployment evidence.',
    'demo.landingRepoTitle': 'Landing Repository',
    'demo.landingRepoDescription': 'View this static landing page repository and GitHub Pages deployment.',
    'team.title': 'Development Team',
    'team.subtitle': 'HackRats team members behind ColdTrack',
    'team.roleUx': 'UX research and report documentation',
    'team.roleLanding': 'Landing page and collaboration evidence',
    'team.roleValidation': 'Validation and product review',
    'team.roleFullstack': 'Frontend, backend and deployment integration',
    'team.roleServices': 'Services documentation and sprint evidence',
    'cta.title': 'Start Protecting Your Shipments Today',
    'cta.description': 'Join the companies that already trust ColdTrack.',
    'footer.description': 'Smart monitoring for food transport',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.repository': 'Repository',
    'footer.support': 'Support',
    'footer.documentation': 'Documentation',
    'footer.apiDocs': 'API Documentation',
    'footer.alternateApp': 'Alternate App URL',
    'footer.copyright': '© 2026 ColdTrack. All rights reserved.',
    'footer.developedBy': 'Developed by the HackRats team.'
  },
  es: {
    'meta.title': 'ColdTrack - Monitoreo en Tiempo Real para el Transporte de Alimentos',
    'meta.description': 'ColdTrack es una plataforma de monitoreo de cadena de frio para transporte de alimentos con temperatura, humedad, alertas y reportes operativos.',
    'meta.ogTitle': 'ColdTrack - Monitoreo de Cadena de Frio',
    'meta.ogDescription': 'Protege la calidad del transporte de alimentos con telemetria de sensores, alertas y reportes de envios.',
    'nav.features': 'Características',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.benefits': 'Beneficios',
    'nav.company': 'Empresa',
    'nav.demo': 'Demo del Producto',
    'nav.team': 'Equipo',
    'actions.login': 'Iniciar Sesión',
    'actions.start': 'Comenzar Ahora',
    'actions.learnMore': 'Más Información',
    'actions.openApp': 'Abrir App',
    'hero.title': 'Monitoreo en Tiempo Real para el Transporte de Alimentos',
    'hero.description': 'Asegura la calidad de tus productos con control de temperatura y humedad en cada etapa del transporte.',
    'dashboard.title': 'Dashboard - Monitoreo en Vivo',
    'dashboard.activeShipments': '5 envíos activos',
    'dashboard.shipmentOne': 'Envío #1247',
    'dashboard.shipmentTwo': 'Envío #1248',
    'dashboard.shipmentThree': 'Envío #1249',
    'dashboard.statusNormal': 'Normal',
    'dashboard.statusWarning': 'Advertencia',
    'dashboard.humidityLow': 'Humedad: 65%',
    'dashboard.humidityHigh': 'Humedad: 72%',
    'dashboard.humidityMedium': 'Humedad: 60%',
    'features.title': 'Características Principales',
    'features.subtitle': 'Todo lo que necesitas para garantizar la calidad en el transporte',
    'features.realtimeTitle': 'Monitoreo en Tiempo Real',
    'features.realtimeDescription': 'Visualiza temperatura y humedad de cada envío en tiempo real con datos actualizados constantemente desde sensores IoT.',
    'features.alertsTitle': 'Alertas Automáticas',
    'features.alertsDescription': 'Recibe notificaciones inmediatas cuando las condiciones se salen de rango. Actúa antes de que haya pérdidas.',
    'features.historyTitle': 'Historial Detallado',
    'features.historyDescription': 'Accede al registro completo de cada transporte. Analiza tendencias y mejora tu logística con datos concretos.',
    'workflow.title': '¿Cómo Funciona?',
    'workflow.subtitle': 'Implementación simple, resultados inmediatos',
    'workflow.stepOneTitle': 'Instalación de Sensores',
    'workflow.stepOneDescription': 'Colocamos sensores IoT en tus unidades de transporte.',
    'workflow.stepTwoTitle': 'Transmisión de Datos',
    'workflow.stepTwoDescription': 'Los sensores envían datos en tiempo real a la plataforma.',
    'workflow.stepThreeTitle': 'Monitoreo Continuo',
    'workflow.stepThreeDescription': 'Visualiza todas tus rutas desde un dashboard centralizado.',
    'workflow.stepFourTitle': 'Alertas y Reportes',
    'workflow.stepFourDescription': 'Recibe alertas y genera reportes detallados automáticamente.',
    'benefits.title': 'Beneficios para tu Operación',
    'benefits.subtitle': 'Mejora cada aspecto de tu cadena de distribución',
    'benefits.efficiencyTitle': 'Mayor Eficiencia',
    'benefits.efficiencyDescription': 'Optimiza rutas y reduce tiempos de respuesta ante incidencias.',
    'benefits.riskTitle': 'Menos Riesgos',
    'benefits.riskDescription': 'Previene pérdidas por deterioro de productos.',
    'benefits.decisionsTitle': 'Toma de Decisiones Rápida',
    'benefits.decisionsDescription': 'Accede a información en tiempo real para actuar de inmediato.',
    'company.title': 'Acerca de FreshGuard Technologies',
    'company.eyebrow': 'Inteligencia de cadena de frio para logística alimentaria',
    'company.description': 'FreshGuard Technologies es una startup tecnológica enfocada en optimizar la calidad de los alimentos durante su transporte mediante monitoreo en tiempo real. Su producto principal, ColdTrack, se integra con sensores de temperatura y humedad instalados en las unidades de transporte para supervisar las condiciones desde los centros de distribución hasta el destino final.',
    'company.proofMonitoring': 'Monitoreo de rutas',
    'company.proofSensors': 'Telemetría de sensores',
    'company.proofReports': 'Reportes exportables',
    'company.missionTitle': 'Misión',
    'company.missionDescription': 'Garantizar la calidad y seguridad de los alimentos durante su transporte mediante monitoreo en tiempo real, permitiendo a las empresas tomar decisiones rápidas para evitar pérdidas y mantener condiciones óptimas.',
    'company.visionTitle': 'Visión',
    'company.visionDescription': 'Convertirnos en la solución líder en monitoreo de condiciones de transporte en Perú y Latinoamérica por innovación, confiabilidad y aporte a la seguridad alimentaria.',
    'company.appTitle': 'Aplicación Web ColdTrack',
    'company.appDescription': 'Accede a la aplicación desplegada para gestionar envíos, sensores, alertas y reportes históricos.',
    'company.appFeatureShipments': 'Dashboard de envíos y control de estados',
    'company.appFeatureSensors': 'Asignación de sensores y lecturas de telemetría',
    'company.appFeatureReports': 'Alertas, historial y reportes PDF',
    'demo.title': 'Demo del Producto y Documentación',
    'demo.subtitle': 'Explora el ecosistema desplegado de ColdTrack y sus repositorios del proyecto.',
    'demo.webAppTitle': 'Aplicación Web',
    'demo.webAppDescription': 'Abre la aplicación Vue desplegada para envíos, sensores, alertas y reportes.',
    'demo.apiTitle': 'Swagger de la API',
    'demo.apiDescription': 'Revisa los servicios web ASP.NET Core expuestos mediante Swagger/OpenAPI.',
    'demo.frontRepoTitle': 'Repositorio Frontend',
    'demo.frontRepoDescription': 'Inspecciona el código fuente de la aplicación Vue 3 y su historial de releases.',
    'demo.backRepoTitle': 'Repositorio Backend',
    'demo.backRepoDescription': 'Inspecciona la plataforma backend, bounded contexts e integración con MySQL.',
    'demo.reportRepoTitle': 'Reporte Final',
    'demo.reportRepoDescription': 'Accede al reporte del proyecto con evidencia de UX, arquitectura, sprints y despliegue.',
    'demo.landingRepoTitle': 'Repositorio Landing',
    'demo.landingRepoDescription': 'Visualiza este repositorio de landing estática y despliegue en GitHub Pages.',
    'team.title': 'Equipo de Desarrollo',
    'team.subtitle': 'Integrantes del equipo HackRats detrás de ColdTrack',
    'team.roleUx': 'Investigación UX y documentación del reporte',
    'team.roleLanding': 'Landing page y evidencia de colaboración',
    'team.roleValidation': 'Validación y revisión del producto',
    'team.roleFullstack': 'Integración frontend, backend y despliegue',
    'team.roleServices': 'Documentación de servicios y evidencia de sprint',
    'cta.title': 'Comienza a Proteger tus Envíos Hoy',
    'cta.description': 'Únete a las empresas que ya confían en ColdTrack.',
    'footer.description': 'Monitoreo inteligente para el transporte de alimentos',
    'footer.product': 'Producto',
    'footer.company': 'Empresa',
    'footer.about': 'Acerca de',
    'footer.repository': 'Repositorio',
    'footer.support': 'Soporte',
    'footer.documentation': 'Documentación',
    'footer.apiDocs': 'Documentación API',
    'footer.alternateApp': 'URL alternativa de la app',
    'footer.copyright': '© 2026 ColdTrack. Todos los derechos reservados.',
    'footer.developedBy': 'Desarrollado por el equipo HackRats.'
  }
};

/**
 * Updates visible text and metadata for the selected language.
 *
 * @param {string} language Selected language code.
 * @returns {void}
 */
function setLanguage(language) {
  const dictionary = translations[language] ?? translations.en;
  document.documentElement.lang = language;
  document.title = dictionary['meta.title'];

  updateMeta('description', dictionary['meta.description']);
  updateMetaProperty('og:title', dictionary['meta.ogTitle']);
  updateMetaProperty('og:description', dictionary['meta.ogDescription']);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll('[data-language-option]').forEach((button) => {
    const isSelected = button.dataset.languageOption === language;
    button.classList.toggle('active', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });

  localStorage.setItem('coldtrack-landing-language', language);
}

/**
 * Updates a standard meta tag.
 *
 * @param {string} name Meta name.
 * @param {string} content Meta content.
 * @returns {void}
 */
function updateMeta(name, content) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) meta.setAttribute('content', content);
}

/**
 * Updates an Open Graph meta tag.
 *
 * @param {string} property Meta property.
 * @param {string} content Meta content.
 * @returns {void}
 */
function updateMetaProperty(property, content) {
  const meta = document.querySelector(`meta[property="${property}"]`);
  if (meta) meta.setAttribute('content', content);
}

/**
 * Configures the mobile navigation toggle.
 *
 * @returns {void}
 */
function setupNavigation() {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!menuButton || !menu) return;

  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Applies progressive reveal classes without requiring them for readability.
 *
 * @returns {void}
 */
function setupRevealAnimations() {
  const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!motionAllowed || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll('.feature-card, .step-card, .benefit-card, .demo-card, .team-card, .company-card');
  elements.forEach((element) => element.classList.add('reveal-item'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[href="https://coldtrack-front-web.web.app/"]').forEach((anchor) => {
    anchor.setAttribute('href', APP_URL);
  });
  document.querySelectorAll('[href="https://freshguard-coldtrack-platform.onrender.com/swagger/index.html"]').forEach((anchor) => {
    anchor.setAttribute('href', API_DOCS_URL);
  });
  document.querySelectorAll('[href="https://github.com/1ASI0730-2610-10215/Landing-Page"]').forEach((anchor) => {
    anchor.setAttribute('href', LANDING_REPO_URL);
  });
  document.querySelectorAll('[href="https://github.com/1ASI0730-2610-10215/ColdTrack-Front"]').forEach((anchor) => {
    anchor.setAttribute('href', FRONTEND_REPO_URL);
  });
  document.querySelectorAll('[href="https://github.com/1ASI0730-2610-10215/FreshGuard.ColdTrack.Platform"]').forEach((anchor) => {
    anchor.setAttribute('href', BACKEND_REPO_URL);
  });
  document.querySelectorAll('[href="https://github.com/1ASI0730-2610-10215/final-report"]').forEach((anchor) => {
    anchor.setAttribute('href', REPORT_REPO_URL);
  });

  const savedLanguage = localStorage.getItem('coldtrack-landing-language') || 'en';
  setupNavigation();
  setupRevealAnimations();
  setLanguage(savedLanguage);

  document.querySelectorAll('[data-language-option]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.languageOption));
  });
});
