// ====================================
// INTERACTIVIDAD Y ANIMACIONES
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los links del navbar
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Animación de entrada para tarjetas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animar tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card, .benefit-card, .step-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Botones de acción
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log('Botón clickeado:', this.textContent);
            // Efecto visual al click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Hover effect para las tarjetas de envíos
    const shipmentCards = document.querySelectorAll('.shipment-card');
    shipmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 24px rgba(0, 82, 204, 0.2)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Simular actualización de datos del dashboard
    updateDashboardData();
    const dashboardInterval = setInterval(updateDashboardData, 5000); // Actualizar cada 5 segundos
    
    // Permitir parar la actualización cuando se haga scroll
    let lastScrollTime = 0;
    window.addEventListener('scroll', function() {
        lastScrollTime = Date.now();
    });
});

// Función para simular actualización de datos
function updateDashboardData() {
    const shipmentCards = document.querySelectorAll('.shipment-card');
    shipmentCards.forEach(card => {
        const tempElement = card.querySelector('h4');
        if (tempElement) {
            // Simular cambios de temperatura (para demostración)
            // Comentado para mantener datos estables en la demo
            // const currentTemp = parseFloat(tempElement.textContent);
            // const newTemp = (currentTemp + (Math.random() - 0.5) * 2).toFixed(1);
            // tempElement.textContent = newTemp + '°C';
        }
    });
}

// Función para manejar el envío de formularios (si los añades después)
function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Formulario enviado');
    // Aquí iría la lógica de envío del formulario
}

// Detectar cuando el usuario hace scroll para animaciones
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    // Aquí puedes agregar efectos de parallax u otras animaciones basadas en scroll
});
