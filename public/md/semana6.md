# Sesión 6: Control de Flujo, Consumo de APIs y Programación Asíncrona en Frameworks JavaScript

## 1. Eventos y Reactividad en la Interfaz de Usuario

Los frameworks modernos del lado del cliente redefinen la gestión de interactividad mediante un sistema de eventos sintéticos. En lugar de añadir escuchas de eventos (`addEventListener`) directamente sobre los elementos nativos del DOM, se implementan manejadores declarativos acoplados a la sintaxis del componente.

Cuando un usuario interactúa con un elemento (por ejemplo, mediante clics, pulsaciones de teclas o envío de formularios), el evento es capturado y procesado por la lógica interna del framework, el cual evalúa el impacto de la acción sobre el estado de la aplicación y propaga los cambios de forma automática hacia los componentes subordinados.

---

## 2. Renderizado Condicional e Iterativo

La manipulación de la interfaz en respuesta a conjuntos de datos dinámicos se gestiona mediante directivas lógicas estructuradas directamente en la capa de presentación:

* 
**Renderizado Condicional:** Permite bifurcar la anatomía visual de un componente. Evaluando expresiones lógicas o booleanas, el framework determina si un fragmento específico del árbol de componentes debe ser montado en el DOM, modificado o destruido por completo de la pantalla.


* 
**Renderizado Iterativo:** Facilita la generación secuencial y masiva de bloques de interfaz a partir de estructuras de datos indexables como arreglos o colecciones de objetos. Durante este proceso, se exige asignar un identificador único e inmutable (clave o `key`) a cada nodo generado, permitiendo que el algoritmo de reconciliación del framework optimice los procesos de actualización, inserción o eliminación de elementos de forma aislada.



---

## 3. Flujo y Gestión de Formularios

La captura de datos ingresados por el usuario se administra bajo el patrón de componentes controlados. En esta arquitectura, el valor de los campos de entrada de texto (`input`, `textarea`, `select`) no reside de forma libre en el hardware del navegador, sino que se sincroniza directamente con el estado interno del componente. Cada pulsación o cambio de estado dispara una función reguladora que actualiza el estado en memoria, manteniendo una única fuente de verdad para la información procesada.

---

## 4. Programación Asíncrona y Consumo de APIs RESTful

El intercambio de información con servicios e infraestructuras backend se realiza mediante la ejecución de peticiones HTTP asíncronas que no bloquean el hilo principal de renderizado del navegador.

### El Mecanismo de Promesas y la Sintaxis Async/Await

Las operaciones de red se estructuran utilizando Promesas, objetos que representan el eventual éxito o fallo de una tarea asíncrona. Para mantener un código legible y con un diseño secuencial similar al paradigma imperativo, se implementa la sintaxis moderna de `async/await`. Al declarar una función como asíncrona (`async`), se faculta el uso de la directiva `await` para pausar de manera controlada la ejecución del bloque de código hasta que la promesa del servidor sea resuelta o rechazada, gestionando los flujos de error mediante bloques tradicionales `try/catch`.

### Transferencia de Datos mediante la Librería Axios

Para la comunicación con las APIs del lado del servidor, se utiliza habitualmente la librería especializada Axios como cliente HTTP de alto rendimiento. Axios automatiza tareas críticas como la serialización de datos en formato JSON, el manejo de cabeceras de seguridad, el control de tiempos de espera (*timeouts*) y la interceptación global de peticiones y respuestas antes de que sean procesadas por la lógica de los componentes.

```javascript
// Ejemplo de implementación del consumo de recursos asíncronos
async function obtenerListadoProyectos() {
    try {
        const respuesta = await axios.get('https://api.ricardollanos.com/v1/projects');
        return respuesta.data;
    } catch (error) {
        console.error('Error en la transferencia de datos:', error.message);
        throw error;
    }
}

```