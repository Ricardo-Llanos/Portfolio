# Sesión 3: Hojas de Estilo en Cascada (CSS3), Maquetación Avanzada y Diseño Responsivo

## 1. El Estándar CSS3 y Sintaxis Fundamental

Las Hojas de Estilo en Cascada (CSS3) constituyen la especificación estándar para la separación entre la estructura semántica de un documento y su presentación visual. Permite controlar de manera centralizada la tipografía, los colores, los espacios y la disposición geométrica de los elementos de una interfaz.

La sintaxis de CSS se compone de un selector y un bloque de declaraciones encorchetado:

```css
selector {
    propiedad: valor;
    otra-propiedad: otro-valor;
}

```

---

## 2. Comportamiento del Flujo de Caja (Display Types)

Cada elemento en el modelo de objetos del documento (DOM) genera una caja rectangular cuyo comportamiento en el flujo bidimensional de la página está determinado por la propiedad `display`:

* `block`: El elemento ocupa el 100% del ancho disponible de su contenedor primario, forzando un salto de línea antes y después de su aparición. Admite la asignación explícita de propiedades de ancho (`width`) y alto (`height`).


* `inline`: El elemento ocupa únicamente el espacio físico de su contenido interno, permitiendo que otros elementos se posicionen a su lado en la misma línea. Ignora los márgenes y rellenos verticales en el cálculo del flujo, y no acepta dimensiones explícitas de ancho o alto.


* `inline-block`: Combina las características de los flujos anteriores. El elemento se alinea en línea con los componentes adyacentes, pero conserva la capacidad de recibir dimensiones físicas personalizadas, márgenes y rellenos en todos sus ejes.



---

## 3. Unidades de Medida en la Arquitectura Web

El dimensionamiento de cajas, textos y espaciados requiere la selección de unidades de medida adecuadas para garantizar la estabilidad visual de la aplicación:

### Unidades Absolutas

Representan magnitudes físicas fijas que no se alteran en función de factores externos. La unidad más extendida es el píxel (`px`), que se correlaciona directamente con la resolución lógica de la pantalla del dispositivo. Su uso se limita a bordes finos o elementos que no deban escalar con las preferencias del usuario.

### Unidades Relativas

Calculan su valor real en tiempo de ejecución basándose en otra magnitud de referencia:

* `em`: Relativa al tamaño de fuente (`font-size`) del elemento padre directo.
* `rem`: Relativa al tamaño de fuente configurado en el nodo raíz del documento (`html`). Es la unidad recomendada para el desarrollo escalable, ya que respeta las configuraciones de accesibilidad del sistema operativo.
* `vw` / `vh`: Equivalen al 1% del ancho y del alto de la ventana gráfica del navegador (*viewport*) respectivamente.

---

## 4. Modelos de Maquetación Avanzada (Layouts)

Para la distribución y alineación compleja de interfaces se implementan los dos sistemas de rejilla nativos de CSS3:

### Flexbox Layout (Cajas Flexibles)

Diseñado para la distribución de elementos en una sola dimensión (eje horizontal o vertical). Permite la alteración dinámica del espacio, ordenamiento y alineación de los nodos hijos en base a la capacidad de encogimiento o expansión de los mismos.

Propiedades fundamentales del contenedor flex:

* 
`display: flex;`: Activa el contexto flexible en la caja.


* 
`flex-direction`: Define el eje principal de alineación (`row` o `column`).


* 
`flex-wrap`: Determina si los elementos hijos deben saltar a una nueva línea si superan el espacio físico del contenedor.


* `justify-content`: Controla la alineación a lo largo del eje principal.
* `align-items`: Controla la alineación a lo largo del eje secundario.

Propiedades aplicadas a los elementos hijos (*flex items*):

* 
`flex-grow`: Define la capacidad de un elemento para expandirse y ocupar el espacio sobrante.


* 
`flex-shrink`: Determina la capacidad de encogimiento del elemento ante la falta de espacio.


* `flex-basis`: Establece el tamaño inicial por defecto de un componente antes de distribuir el espacio restante.

### Grid Layout (Rejilla Bidimensional)

Diseñado para la maquetación en dos dimensiones simultáneamente (filas y columnas). Permite dividir la interfaz en regiones principales o definir relaciones complejas de alineación mediante la especificación de pistas rígidas o flexibles utilizando la unidad de fracción (`fr`).

---

## 5. Posicionamiento de Elementos (Positioning)

La propiedad `position` altera el algoritmo de renderizado estándar para ubicar componentes en coordenadas específicas del lienzo:

* `static`: El comportamiento por defecto. El elemento sigue el flujo natural del documento y no responde a propiedades de coordenadas (`top`, `bottom`, `left`, `right`).
* `relative`: El elemento se desplaza tomando como punto de partida su posición original en el flujo, sin alterar el espacio físico que inicialmente le correspondía ante sus elementos hermanos.
* `absolute`: El elemento es removido por completo del flujo de la página y se posiciona de forma relativa al ancestro más cercano que posea un tipo de posicionamiento distinto a `static`.
* `fixed`: El componente se posiciona en relación estricta con la ventana gráfica del navegador, permaneciendo inmóvil durante los eventos de desplazamiento (*scroll*) del documento.
* `sticky`: Funciona de manera híbrida entre `relative` y `fixed`. El elemento se comporta como relativo hasta que la ventana del navegador alcanza una coordenada límite configurada, momento en el cual se fija en la pantalla hasta que su contenedor primario finaliza su recorrido visual.

---

## 6. Diseño Web Fluido y Responsivo (Responsive Web Design)

El desarrollo responsivo asegura que la interfaz adapte su arquitectura de forma automática a las características de hardware de múltiples terminales (teléfonos inteligentes, tabletas y ordenadores de escritorio). Se fundamenta en tres pilares técnicos básicos:

* 
**Estructuras Fluidas:** Empleo estricto de porcentajes, fracciones o unidades relativas (`rem`, `em`) en lugar de anchos fijos expresados en píxeles, permitiendo el escalado proporcional de las cajas contenedoras.


* **Imágenes Flexibles:** Configuración de límites máximos de escala mediante la directiva `max-width: 100%;` y `height: auto;` para evitar el desborde visual fuera de los márgenes del dispositivo.
* **Consultas de Medios (Media Queries):** Bloques condicionales en CSS que ejecutan conjuntos de estilos específicos únicamente cuando la ventana del navegador cumple con ciertos criterios físicos de ancho, alto o resolución:

```css
/* Estilos aplicados de forma general en dispositivos móviles */
.container {
    display: flex;
    flex-direction: column;
}

/* Modificación de la estructura para pantallas medianas o grandes */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}

```