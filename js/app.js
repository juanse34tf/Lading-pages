// Función para obtener personajes de Rick and Morty API
async function obtenerPersonajes() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error al obtener personajes:', error);
        return [];
    }
}

// Función para mostrar imágenes en las tarjetas de características
async function cargarImagenesCaracteristicas() {
    const personajes = await obtenerPersonajes();
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        if (personajes[index]) {
            const img = document.createElement('img');
            img.src = personajes[index].image;
            img.alt = personajes[index].name;
            img.className = 'feature-image';
            card.insertBefore(img, card.firstChild);
        }
    });
}

// Función para mostrar imágenes en testimonios
async function cargarImagenesTestimonios() {
    const personajes = await obtenerPersonajes();
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        if (personajes[index + 3]) {
            const img = document.createElement('img');
            img.src = personajes[index + 3].image;
            img.alt = personajes[index + 3].name;
            img.className = 'testimonial-image';
            card.insertBefore(img, card.firstChild);
        }
    });
}

// Función para crear una galería en la sección hero
async function cargarGaleriaHero() {
    const personajes = await obtenerPersonajes();
    const heroSection = document.querySelector('.hero-section .container');
    
    // Crear contenedor para las imágenes
    const galeria = document.createElement('div');
    galeria.className = 'hero-gallery';
    
    // Mostrar solo 4 personajes en el hero
    for (let i = 0; i < 4 && i < personajes.length; i++) {
        const img = document.createElement('img');
        img.src = personajes[i].image;
        img.alt = personajes[i].name;
        img.className = 'hero-image';
        galeria.appendChild(img);
    }
    
    heroSection.appendChild(galeria);
}

// Cargar todas las imágenes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    cargarImagenesCaracteristicas();
    cargarImagenesTestimonios();
    cargarGaleriaHero();
});
