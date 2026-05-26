# Sesión 2: Estructura de Documentos con HTML5, Estándar XML y el Árbol DOM

## 1. El Estándar Open Web Platform

La plataforma web abierta (Open Web Platform) constituye un ecosistema de tecnologías interoperables y de código abierto coordinadas por el World Wide Web Consortium (W3C) y otras organizaciones de estandarización. Este estándar garantiza que las aplicaciones e interfaces se ejecuten de manera uniforme en cualquier sistema operativo o dispositivo, permitiendo el desacoplamiento entre el software del cliente y la infraestructura del servidor.

---

## 2. Lenguaje de Marcado de Hipertexto (HTML5) y Lenguaje de Marcado Extensible (XML)

La transferencia y representación de información en internet se gestiona mediante especificaciones de marcado estructurado con propósitos diferenciados:

* 
**HTML5:** Es el lenguaje estándar empleado para la estructuración y presentación de contenido en la web. Introduce semántica nativa para definir secciones lógicas en un documento, mejorando la accesibilidad y eliminando la dependencia de complementos externos para la reproducción de recursos multimedia.


* **XML:** Es un lenguaje de marcado extensible diseñado exclusivamente para el almacenamiento, transporte y organización de datos estructurados de forma legible tanto para humanos como para computadoras, sin definir reglas de visualización estética.

### Estructura Fundamental de un Documento HTML5

Un documento web correctamente estructurado bajo el estándar Open Web Platform debe seguir la siguiente jerarquía semántica elemental:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título del Documento Técnico</title>
</head>
<body>
    <header>
        </header>

    <main>
        <section>
            <article>
                <h1>Título Principal de la Sección</h1>
                <p>Bloque de texto informativo estructurado en párrafos contenedores.</p>
            </article>
        </section>
    </main>

    <footer>
        </footer>
</body>
</html>

```

### Etiquetas Semánticas Principales de HTML5

El uso de etiquetas semánticas permite a los agentes de software interpretar la función de cada bloque de información dentro del ecosistema digital:

* 
`main`: Identifica el contenido central y único del documento, excluyendo barras laterales o menús globales.


* 
`section`: Agrupa temáticamente fragmentos de contenido relacionados entre sí.


* 
`article`: Contiene una composición autónoma e independiente que puede ser distribuida de forma aislada (por ejemplo, publicaciones o reportes).


* 
`header` y `footer`: Definen las zonas de introducción y cierre del documento o de secciones específicas respectivamente.


* 
`nav`: Delimita los bloques orientados exclusivamente a la navegación interna o externa del sitio.



---

## 3. Arquitectura del Árbol DOM (Document Object Model)

El Modelo de Objetos del Documento (DOM) es una interfaz de programación de aplicaciones (API) estructurada que representa el documento HTML o XML como una estructura de datos jerárquica.

### El Árbol de Nodos

Cuando el navegador web procesa el código fuente, transforma cada etiqueta, atributo y fragmento de texto en un objeto de JavaScript denominado "Nodo". Estos nodos se organizan en una estructura ramificada de árbol, donde el nodo raíz (`html`) se divide en nodos hijos directos (`head` y `body`), los cuales a su vez contienen sub-nodos secuenciales.

### El Proceso de Renderizado del Árbol (Critical Rendering Path)

El motor del navegador ejecuta una secuencia estricta para transformar el código fuente en píxeles visibles en la pantalla del dispositivo:

1. 
**Construcción del DOM:** Se parsea el código HTML para generar el Árbol de Nodos.


2. **Construcción del CSSOM:** Se parsean de forma paralela las hojas de estilo para determinar las reglas de diseño aplicadas a cada elemento.
3. **Generación del Render Tree:** Se combinan los árboles DOM y CSSOM para estructurar únicamente los elementos que serán visibles en la interfaz.
4. **Disposición (Layout):** El navegador calcula las coordenadas físicas, el tamaño exacto y la geometría que ocupará cada nodo en el lienzo de la pantalla.
5. **Pintado (Painting):** Se rellenan los píxeles con colores, texturas, imágenes y efectos geométricos procesados por el hardware gráfico.

### Ciclo de Vida de una Página Web

El procesamiento de un documento pasa por tres estados clave durante su inicialización y carga en memoria:

* 
`DOMContentLoaded`: El navegador ha terminado de parsear el HTML y ha construido el árbol DOM por completo. Los recursos externos como imágenes u hojas de estilo reflejas pueden no estar completamente descargados, pero la estructura ya es accesible mediante scripts.


* `load`: El documento HTML, junto con todos los recursos dependientes (imágenes, scripts adicionales y hojas de estilo CSS), se ha descargado y procesado en su totalidad.
* `beforeunload` / `unload`: Se activan cuando el usuario decide abandonar la página actual, permitiendo la limpieza de eventos en memoria o el envío de telemetría de cierre de sesión.

---

## 4. Optimización en Motores de Búsqueda (SEO)

La estructuración correcta del código influye directamente en la indexación ejecutada por los rastreadores automatizados de los motores de búsqueda. Un documento optimizado debe cumplir con las siguientes directrices técnicas:

* **Jerarquía de Encabezados:** Utilizar de forma secuencial y lógica un único elemento `h1` para el título principal, seguido de subtítulos estructurados con `h2`, `h3` y niveles inferiores, respetando el orden semántico.
* **Atributos de Accesibilidad:** Declarar obligatoriamente el atributo `alt` en elementos de imagen para proveer una descripción textual indexable y accesible.
* **Metadatos Técnicos:** Incorporar etiquetas `<meta>` en el `head` que definan la descripción del sitio, directrices de rastreo (`robots`), e integraciones de gráficos abiertos (`Open Graph`) para redes sociales.

---

## 5. Compatibilidad entre Navegadores (Cross-Browser Compatibility)

Los motores de renderizado (como Blink en Chrome, Gecko en Firefox y WebKit en Safari) interpretan las especificaciones técnicas con sutiles variaciones. Garantizar que una estructura web se comporte de manera homogénea requiere:

* **Validación de Sintaxis:** Someter el documento a los validadores oficiales del W3C para corregir etiquetas mal cerradas o anidaciones inválidas que provoquen un modo de renderizado impredecible (*Quirks Mode*).
* 
**Uso de Semántica Estándar:** Evitar etiquetas obsoletas o propietarias que no formen parte de la especificación oficial de HTML5.


* 
**Estrategias de Degradación Degradada:** Diseñar la estructura de modo que, si un navegador antiguo no interpreta una etiqueta semántica avanzada de HTML5, el contenido siga siendo legible y accesible bajo contenedores genéricos alternativos.