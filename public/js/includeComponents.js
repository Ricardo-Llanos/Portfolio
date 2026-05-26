document.addEventListener("DOMContentLoaded", ()=>{
    loadComponents().then(() => {
        setupSPARouter();
    });
});

async function loadComponents(){
    const components = document.querySelectorAll("[data-component]");

    for (const container of components){
        componentName = container.getAttribute("data-component");

        try{
            let component = await fetch(`components/${componentName}.html`);

            if (!component.ok){
                throw new Error(`No se pudo cargar el componente ${componentName}`);
            }

            let htmlText = await component.text()
            htmlText = htmlText.replace(/\r/g, "").trim();
            container.innerHTML = htmlText; // Reestablecemos el contenido HTML
        }catch(e){
            console.error(`[Component Error]: ${e.message}`); // Error
            container.innerHTML = `<p style="color: red;">Error al cargar el componente ${componentName}</p>`; // Indicador visual
        }
    }
}

/**
 * Enrutador SPA Vanilla: Alterna la visibilidad del Portafolio y el Módulo Académico
 */
function setupSPARouter() {
    const sesionLink = document.getElementById("nav-sesiones");
    const portfolioSections = document.querySelectorAll("main > div:not([data-component='sesiones-clase'])");
    const sesionesWrapper = document.getElementById("sesiones-modulo");

    if (!sesionLink || !sesionesWrapper) {
        console.warn("[Router Warning]: No se encontraron los contenedores para el mapeo SPA.");
        return;
    }

    if (window.location.hash === "#sesiones") {
        portfolioSections.forEach(section => section.style.display = "none");
        sesionesWrapper.style.display = "block";
        document.querySelectorAll(".navbar-links a").forEach(link => link.classList.remove("active"));
        sesionLink.classList.add("active");
    }
    
    sesionLink.addEventListener("click", (e) => {
        e.preventDefault(); // Detiene la navegación tradicional del enlace

        // 1. Oculta todas las secciones del portafolio principal
        portfolioSections.forEach(section => {
            section.style.display = "none";
        });

        // 2. Muestra forzadamente la interfaz de sesiones de clase
        sesionesWrapper.style.display = "block";

        // 3. Pequeña optimización visual: Desplazar la pantalla arriba automáticamente
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Opcional: Actualizar clases activas en tu menú
        document.querySelectorAll(".navbar-links a").forEach(link => link.classList.remove("active"));
        sesionLink.classList.add("active");
    });

    // Restaurar portafolio si se hace clic en cualquier otro enlace de navegación
    document.querySelectorAll(".navbar-links a:not(#nav-sesiones)").forEach(link => {
        link.addEventListener("click", () => {
            if (sesionesWrapper.style.display === "block") {
                sesionesWrapper.style.display = "none";
                portfolioSections.forEach(section => {
                    section.style.display = "block";
                });
            }
        });
    });
}