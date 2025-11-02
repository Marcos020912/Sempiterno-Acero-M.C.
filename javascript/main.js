// JavaScript para funcionalidad básica del sitio web Sempiterno Acero M.C.

document.addEventListener('DOMContentLoaded', function() {
    // Agregar funcionalidad para menú móvil si es necesario en el futuro
    const navLinks = document.querySelectorAll('nav a');
    
    // Agregar efecto hover a los elementos interactivos
    const interactiveElements = document.querySelectorAll('.about-card, .service-item, .contact-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform ? '' : 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Funcionalidad para scroll suave a secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('Sempiterno Acero M.C. sitio web cargado correctamente');
});