document.addEventListener("DOMContentLoaded", function() {
    const elementosParaAnimar = document.querySelectorAll(".animacion-estadisticas, .card-estadisticas");
    const observador = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 
    });
    
    elementosParaAnimar.forEach(el => {
        observador.observe(el);
    });


      // Comienza animacion del carrusel

    const slides = document.querySelectorAll('.slide-carrusel');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const contenedorCarrusel = document.querySelector('.contenedor-carrusel-novedades');
    const fondos = [
        "url('img/img/1-inicio-carrusel/fondo-carrusel-1y3.jpg')",
        "url('img/img/1-inicio-carrusel/fondo-carrusel-2.jpeg')",
        "url('img/img/1-inicio-carrusel/fondo-carrusel-1y3.jpg')"
    ];

    let indiceActual = 0;
    function actualizarCarrusel(indice) {
        // Cambia las clases de los slides
        slides.forEach(slide => slide.classList.remove('activo'));
        slides[indice].classList.add('activo');

        if (contenedorCarrusel) {
            contenedorCarrusel.style.backgroundImage = `linear-gradient(#065559d9, #065559d9), ${fondos[indice]}`;
        }
    }

    actualizarCarrusel(0);
    if (btnSiguiente && btnAnterior && slides.length > 0) {
        btnSiguiente.addEventListener('click', () => {
            indiceActual = (indiceActual + 1) % slides.length;
            actualizarCarrusel(indiceActual);
        });

        btnAnterior.addEventListener('click', () => {
            indiceActual = (indiceActual - 1 + slides.length) % slides.length;
            actualizarCarrusel(indiceActual);
        });
    }
});




