/**
 * @fileoverview ColdTrack landing page interaction and internationalization layer.
 *
 * Handles the language switcher, localized interface text, smooth anchor
 * navigation, card reveal animations, and lightweight dashboard interactions.
 *
 * @module landing-page/main
 */

/**
 * Supported interface translations indexed by language code.
 *
 * @type {Record<string, Record<string, string>>}
 */
const translations = {
    en: {
        "meta.title": "ColdTrack - Real-Time Monitoring for Food Transport",
        "meta.description": "ColdTrack - Real-time monitoring for food transport. Guarantee product quality with temperature and humidity control.",
        "meta.ogTitle": "ColdTrack - Real-Time Monitoring",
        "meta.ogDescription": "Guarantee product quality with temperature and humidity control.",
        "nav.features": "Features",
        "nav.howItWorks": "How It Works",
        "nav.benefits": "Benefits",
        "actions.login": "Log In",
        "actions.start": "Start Now",
        "actions.learnMore": "Learn More",
        "hero.title": "Real-Time Monitoring for Food Transport",
        "hero.description": "Protect product quality with temperature and humidity control at every stage of transport.",
        "dashboard.title": "Dashboard - Live Monitoring",
        "dashboard.activeShipments": "5 active shipments",
        "dashboard.shipmentOne": "Shipment #1247",
        "dashboard.shipmentTwo": "Shipment #1248",
        "dashboard.shipmentThree": "Shipment #1249",
        "dashboard.statusNormal": "Normal",
        "dashboard.statusWarning": "Warning",
        "dashboard.humidityLow": "Humidity: 65%",
        "dashboard.humidityHigh": "Humidity: 72%",
        "dashboard.humidityMedium": "Humidity: 60%",
        "features.title": "Key Features",
        "features.subtitle": "Everything you need to guarantee transport quality",
        "features.realtimeTitle": "Real-Time Monitoring",
        "features.realtimeDescription": "View each shipment's temperature and humidity in real time with constantly updated IoT sensor data.",
        "features.alertsTitle": "Automatic Alerts",
        "features.alertsDescription": "Receive immediate notifications when conditions move out of range. Act before losses happen.",
        "features.historyTitle": "Detailed History",
        "features.historyDescription": "Access the complete record for every transport. Analyze trends and improve logistics with concrete data.",
        "workflow.title": "How Does It Work?",
        "workflow.subtitle": "Simple implementation, immediate results",
        "workflow.stepOneTitle": "Sensor Installation",
        "workflow.stepOneDescription": "We place IoT sensors in your transport units",
        "workflow.stepTwoTitle": "Data Transmission",
        "workflow.stepTwoDescription": "Sensors send real-time data to the platform",
        "workflow.stepThreeTitle": "Continuous Monitoring",
        "workflow.stepThreeDescription": "View all routes from a centralized dashboard",
        "workflow.stepFourTitle": "Alerts and Reports",
        "workflow.stepFourDescription": "Receive alerts and generate detailed reports automatically",
        "benefits.title": "Benefits for Your Operation",
        "benefits.subtitle": "Improve every part of your distribution chain",
        "benefits.efficiencyTitle": "Greater Efficiency",
        "benefits.efficiencyDescription": "Optimize routes and reduce response times for incidents",
        "benefits.riskTitle": "Lower Risk",
        "benefits.riskDescription": "Prevent losses caused by product deterioration",
        "benefits.decisionsTitle": "Faster Decisions",
        "benefits.decisionsDescription": "Access real-time information and act immediately",
        "cta.title": "Start Protecting Your Shipments Today",
        "cta.description": "Join the companies that already trust ColdTrack",
        "footer.description": "Smart monitoring for food transport",
        "footer.product": "Product",
        "footer.pricing": "Pricing",
        "footer.integrations": "Integrations",
        "footer.company": "Company",
        "footer.about": "About",
        "footer.blog": "Blog",
        "footer.contact": "Contact",
        "footer.support": "Support",
        "footer.help": "Help",
        "footer.documentation": "Documentation",
        "footer.status": "System Status",
        "footer.copyright": "© 2026 ColdTrack. All rights reserved."
    },
    es: {
        "meta.title": "ColdTrack - Monitoreo en Tiempo Real para el Transporte de Alimentos",
        "meta.description": "ColdTrack - Monitoreo en tiempo real para el transporte de alimentos. Garantiza la calidad de tus productos con control de temperatura y humedad.",
        "meta.ogTitle": "ColdTrack - Monitoreo en Tiempo Real",
        "meta.ogDescription": "Garantiza la calidad de tus productos con control de temperatura y humedad.",
        "nav.features": "Características",
        "nav.howItWorks": "Cómo Funciona",
        "nav.benefits": "Beneficios",
        "actions.login": "Iniciar Sesión",
        "actions.start": "Comenzar Ahora",
        "actions.learnMore": "Más Información",
        "hero.title": "Monitoreo en Tiempo Real para el Transporte de Alimentos",
        "hero.description": "Asegura la calidad de tus productos con control de temperatura y humedad en cada etapa del transporte.",
        "dashboard.title": "Dashboard - Monitoreo en Vivo",
        "dashboard.activeShipments": "5 envíos activos",
        "dashboard.shipmentOne": "Envío #1247",
        "dashboard.shipmentTwo": "Envío #1248",
        "dashboard.shipmentThree": "Envío #1249",
        "dashboard.statusNormal": "Normal",
        "dashboard.statusWarning": "Advertencia",
        "dashboard.humidityLow": "Humedad: 65%",
        "dashboard.humidityHigh": "Humedad: 72%",
        "dashboard.humidityMedium": "Humedad: 60%",
        "features.title": "Características Principales",
        "features.subtitle": "Todo lo que necesitas para garantizar la calidad en el transporte",
        "features.realtimeTitle": "Monitoreo en Tiempo Real",
        "features.realtimeDescription": "Visualiza temperatura y humedad de cada envío en tiempo real. Datos actualizados constantemente desde sensores IoT.",
        "features.alertsTitle": "Alertas Automáticas",
        "features.alertsDescription": "Recibe notificaciones inmediatas cuando las condiciones se salen de rango. Actúa antes de que haya pérdidas.",
        "features.historyTitle": "Historial Detallado",
        "features.historyDescription": "Accede al registro completo de cada transporte. Analiza tendencias y mejora tu logística con datos concretos.",
        "workflow.title": "¿Cómo Funciona?",
        "workflow.subtitle": "Implementación simple, resultados inmediatos",
        "workflow.stepOneTitle": "Instalación de Sensores",
        "workflow.stepOneDescription": "Colocamos sensores IoT en tus unidades de transporte",
        "workflow.stepTwoTitle": "Transmisión de Datos",
        "workflow.stepTwoDescription": "Los sensores envían datos en tiempo real a la plataforma",
        "workflow.stepThreeTitle": "Monitoreo Continuo",
        "workflow.stepThreeDescription": "Visualiza todas tus rutas desde un dashboard centralizado",
        "workflow.stepFourTitle": "Alertas y Reportes",
        "workflow.stepFourDescription": "Recibe alertas y genera reportes detallados automáticamente",
        "benefits.title": "Beneficios para tu Operación",
        "benefits.subtitle": "Mejora cada aspecto de tu cadena de distribución",
        "benefits.efficiencyTitle": "Mayor Eficiencia",
        "benefits.efficiencyDescription": "Optimiza rutas y reduce tiempos de respuesta ante incidencias",
        "benefits.riskTitle": "Menos Riesgos",
        "benefits.riskDescription": "Previene pérdidas por deterioro de productos",
        "benefits.decisionsTitle": "Toma de Decisiones Rápida",
        "benefits.decisionsDescription": "Accede a información en tiempo real para actuar de inmediato",
        "cta.title": "Comienza a Proteger tus Envíos Hoy",
        "cta.description": "Únete a las empresas que ya confían en ColdTrack",
        "footer.description": "Monitoreo inteligente para el transporte de alimentos",
        "footer.product": "Producto",
        "footer.pricing": "Precios",
        "footer.integrations": "Integraciones",
        "footer.company": "Empresa",
        "footer.about": "Acerca de",
        "footer.blog": "Blog",
        "footer.contact": "Contacto",
        "footer.support": "Soporte",
        "footer.help": "Ayuda",
        "footer.documentation": "Documentación",
        "footer.status": "Estado del Sistema",
        "footer.copyright": "© 2026 ColdTrack. Todos los derechos reservados."
    }
};

const defaultLanguage = "es";
const languageStorageKey = "coldtrack-language";

/**
 * Reads the saved language when available, otherwise returns the default one.
 *
 * @returns {string} Supported language code.
 */
function getInitialLanguage() {
    const savedLanguage = localStorage.getItem(languageStorageKey);
    return translations[savedLanguage] ? savedLanguage : defaultLanguage;
}

/**
 * Updates every localized DOM node with the selected language.
 *
 * @param {string} language - Supported language code selected by the user.
 * @returns {void}
 */
function applyLanguage(language) {
    const dictionary = translations[language] || translations[defaultLanguage];

    document.documentElement.lang = language;
    document.title = dictionary["meta.title"];
    updateMetaTag("name", "description", dictionary["meta.description"]);
    updateMetaTag("property", "og:title", dictionary["meta.ogTitle"]);
    updateMetaTag("property", "og:description", dictionary["meta.ogDescription"]);

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (dictionary[translationKey]) {
            element.textContent = dictionary[translationKey];
        }
    });

    document.querySelectorAll("[data-language-option]").forEach(button => {
        const isActive = button.dataset.languageOption === language;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem(languageStorageKey, language);
}

/**
 * Updates a meta tag content value when the requested tag exists.
 *
 * @param {string} attributeName - Attribute used to locate the meta tag.
 * @param {string} attributeValue - Attribute value used to locate the meta tag.
 * @param {string} content - Localized content to write into the meta tag.
 * @returns {void}
 */
function updateMetaTag(attributeName, attributeValue, content) {
    const tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (tag) {
        tag.setAttribute("content", content);
    }
}

/**
 * Registers click handlers for all available language buttons.
 *
 * @returns {void}
 */
function initializeLanguageSwitcher() {
    document.querySelectorAll("[data-language-option]").forEach(button => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.languageOption);
        });
    });

    applyLanguage(getInitialLanguage());
}

/**
 * Enables smooth scrolling for in-page navigation links.
 *
 * @returns {void}
 */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetSelector = link.getAttribute("href");
            if (!targetSelector || targetSelector === "#") {
                return;
            }

            const target = document.querySelector(targetSelector);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

/**
 * Reveals cards when they enter the viewport.
 *
 * @returns {void}
 */
function initializeCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".feature-card, .benefit-card, .step-card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
}

/**
 * Adds tactile feedback to primary call-to-action buttons.
 *
 * @returns {void}
 */
function initializeButtonFeedback() {
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("click", () => {
            button.style.transform = "scale(0.98)";
            setTimeout(() => {
                button.style.transform = "";
            }, 100);
        });
    });
}

/**
 * Adds hover emphasis to shipment cards.
 *
 * @returns {void}
 */
function initializeShipmentCards() {
    document.querySelectorAll(".shipment-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 12px 24px rgba(0, 82, 204, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "";
        });
    });
}

/**
 * Placeholder for future live dashboard refreshes.
 *
 * @returns {void}
 */
function updateDashboardData() {
    document.querySelectorAll(".shipment-card h4").forEach(temperatureElement => {
        temperatureElement.textContent = temperatureElement.textContent;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initializeLanguageSwitcher();
    initializeSmoothScrolling();
    initializeCardAnimations();
    initializeButtonFeedback();
    initializeShipmentCards();
    updateDashboardData();
    setInterval(updateDashboardData, 5000);
});
