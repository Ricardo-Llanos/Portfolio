/**
 * Controlador de Lecciones Dinámicas en Markdown (leccion-manager.js)
 */
const TOTAL_SEMANAS = 7;

document.addEventListener('DOMContentLoaded', () => {
    initLeccion();
});

async function initLeccion() {
    const contentContainer = document.getElementById('leccion-content');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');

    // 1. Obtener la semana actual desde los parámetros de la URL (?semana=X)
    const urlParams = new URLSearchParams(window.location.search);
    let semanaActual = parseInt(urlParams.get('semana'), 10);

    // Validación y sanitización del parámetro
    if (isNaN(semanaActual) || semanaActual < 1 || semanaActual > TOTAL_SEMANAS) {
        semanaActual = 1; // Fallback seguro
    }

    // 2. Configurar el comportamiento de los botones de Paginación (Anterior / Siguiente)
    if (semanaActual === 1) {
        btnAnterior.disabled = true;
        btnAnterior.classList.add('disabled');
    } else {
        btnAnterior.addEventListener('click', () => {
            window.location.search = `?semana=${semanaActual - 1}`;
        });
    }

    if (semanaActual === TOTAL_SEMANAS) {
        btnSiguiente.disabled = true;
        btnSiguiente.classList.add('disabled');
    } else {
        btnSiguiente.addEventListener('click', () => {
            window.location.search = `?semana=${semanaActual + 1}`;
        });
    }

    // 3. Petición HTTP asíncrona para leer el archivo .md correspondiente
    try {
        const response = await fetch(`public/md/semana${semanaActual}.md`);
        
        if (!response.ok) {
            throw new Error(`No se pudo encontrar el archivo de la semana ${semanaActual}`);
        }

        const markdownText = await response.text();

        // 4. Validar disponibilidad del motor Marked.js
        if (typeof window.marked === 'undefined') {
            throw new Error('El motor de renderizado de Markdown no está disponible.');
        }

        // 5. Inyectar de manera segura el HTML parseado
        contentContainer.innerHTML = window.marked.parse(markdownText);
        
        // Actualizar dinámicamente el título de la pestaña del navegador
        document.title = `Semana ${semanaActual} | Sesiones de Clase`;

    } catch (error) {
        console.error(`[LeccionManager Error]: ${error.message}`);
        contentContainer.innerHTML = `
            <div role="alert" class="leccion-error">
                <h2>Contenido no disponible</h2>
                <p>Hubo un problema al cargar los apuntes de esta sesión de clase.</p>
                <a href="index.html" style="color: #06b6d4; font-size: 1.6rem; text-decoration: underline;">Volver al Inicio</a>
            </div>
        `;
    }
}