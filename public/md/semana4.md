# Sesión 4: Fundamentos de Programación en el Cliente con JavaScript y TypeScript

## 1. El Motor de Ejecución de JavaScript

JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, diseñado originalmente para ejecutarse dentro de los navegadores web. Su operación se basa en un motor de ejecución (como V8 en Chrome, SpiderMonkey en Firefox o JavaScriptCore en Safari) que compila el código fuente en tiempo real a código de máquina utilizando una técnica denominada *Just-In-Time* (JIT).

El entorno de ejecución en el cliente opera bajo un modelo de un solo hilo (*single-thread*), utilizando un bucle de eventos (*Event Loop*) para gestionar tareas asíncronas de manera no bloqueante.

---

## 2. Sintaxis, Variables y Operadores

La declaración de variables y el flujo básico de datos constituyen la infraestructura elemental de cualquier script:

### Variables y Ámbito (Scope)

* `let`: Declara variables mutables limitadas al ámbito de bloque en el que fueron creadas, previniendo el efecto de elevación (*hoisting*) indeseado.
* `const`: Declara constantes de ámbito de bloque cuyo valor no puede ser reasignado tras su inicialización. En tipos de datos complejos (objetos y arreglos), `const` protege la referencia de la variable, pero permite la mutación de sus propiedades internas.
* `var`: Sintaxis heredada que define variables con ámbito de función o global, propensa a efectos colaterales debido a la falta de restricciones de bloque.

### Tipos de Datos Primarios y Complejos

* 
**Números (Numbers):** Representación unificada de valores tanto enteros como de coma flotante bajo el estándar IEEE 754 de doble precisión.


* 
**Cadenas de Texto (Strings):** Secuencias de caracteres delimitadas por comillas simples, dobles o plantillas literales (*template literals* con acentos graves), que permiten la interpolación directa de expresiones.


* 
**Booleanos (Booleans):** Representan los estados lógicos verdaderos (`true`) o falsos (`false`).


* 
**Objetos (Objects):** Estructuras de datos clave-valor que agrupan propiedades y métodos especializados para modelar entidades de software.


* 
**Especiales:** Valores definidos para la ausencia de datos (`null`) o la falta de inicialización explícita de una variable (`undefined`).



---

## 3. Estructuras de Control y Bucles

El flujo de ejecución de una aplicación se bifurca y reitera mediante condicionales y ciclos iterativos controlados:

* `if` / `else if` / `else`: Evalúa expresiones condicionales basadas en comparaciones de igualdad estricta (`===`) o desigualdad para bifurcar el camino lógico.
* `switch`: Estructura de control selectiva que compara un valor único contra múltiples casos lógicos explícitos.
* 
`for` / `while`: Bucles tradicionales enfocados en la iteración basada en contadores o condiciones booleanas de parada.


* `for...of` / `for...in`: Estructuras iterativas modernas optimizadas para recorrer colecciones indexables (arreglos) y propiedades de objetos respectivamente.

---

## 4. Arquitectura de Funciones

Las funciones en JavaScript son consideradas ciudadanos de primera clase (*First-Class Citizens*), lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y retornadas como valores.

### Sintaxis Clásica e Invocación

La declaración explícita define bloques de código reutilizables con su propio contexto de ejecución:

```javascript
function calcularImpuesto(monto, tasa) {
    return monto * tasa;
}

```

### Funciones Anónimas y Expresiones de Función

Funciones que se definen omitiendo un identificador de nombre directo y se asignan de forma inmediata a una constante o variable reguladora:

```javascript
const procesarPago = function(total) {
    return total * 1.18;
};

```

### Funciones Flecha (Arrow Functions)

Introducidas para ofrecer una sintaxis más concisa y un comportamiento simplificado. Las funciones flecha no crean su propio contexto para la palabra clave `this`, sino que la heredan de forma léxica del ámbito circundante:

```javascript
const filtrarUsuarios = (usuarios) => usuarios.filter(u => u.activo);

```

### Funciones Auto-invocadas (IIFE)

Expresiones de función que se ejecutan de manera inmediata tras su definición en el script, utilizadas habitualmente para aislar el ámbito y evitar la contaminación del espacio de nombres global:

```javascript
(function() {
    // Código encapsulado de ejecución aislada
})();

```

### Clausuras (Closures)

Una clausura es la combinación de una función empaquetada junto con referencias a su estado circundante (el ámbito léxico). Permite a una función interna acceder a las variables de una función externa incluso después de que la función externa haya finalizado su ejecución, sirviendo como mecanismo nativo para la simulación de propiedades privadas.

---

## 5. Manipulación del DOM y Elementos de Interfaz

El Document Object Model (DOM) proporciona los métodos necesarios para que JavaScript altere dinámicamente el árbol de nodos de la página web en respuesta a acciones del usuario:

### Métodos de Selección de Elementos

* 
`document.getElementById(id)`: Recupera un nodo único que coincida de forma exacta con el identificador proveído.


* 
`document.querySelector(selector)`: Retorna el primer elemento del documento que cumpla con la sintaxis de selectores de CSS suministrada.


* 
`document.querySelectorAll(selector)`: Devuelve una lista estática de nodos (*NodeList*) con todos los elementos que coincidan con el criterio CSS.



### Modificación de Estilos y Atributos

JavaScript permite la lectura e inserción dinámica de clases CSS o estilos en línea directos mediante la propiedad `style` u objetos controladores como `classList`:

```javascript
const botonEnviar = document.querySelector('.btn-submit');
botonEnviar.style.backgroundColor = '#6366f1';
botonEnviar.classList.add('active');

```

---

## 6. Gráficos y Animaciones con el Elemento Canvas

El estándar Open Web Platform incorpora la API de Canvas, un contenedor gráfico bidimensional que permite el renderizado programático de mapas de bits, formas geométricas y animaciones en tiempo real.

### Inicialización del Contexto Gráfico

Para realizar trazos dentro de un elemento Canvas, es requerido capturar su nodo en el DOM e invocar su contexto de renderizado de dos dimensiones:

```javascript
const lienzo = document.getElementById('zona-grafica');
const contexto = lienzo.getContext('2d');

// Dibujo de una superficie rectangular sólida
contexto.fillStyle = '#06b6d4';
contexto.fillRect(10, 10, 150, 100);

```

### Ciclo de Animación Controlado

La ejecución de animaciones fluidas y de alto rendimiento se gestiona mediante el método nativo `requestAnimationFrame`. Esta API instruye al navegador para que ejecute una función de actualización específica justo antes del próximo repintado de la pantalla, sincronizándose de manera automática con la tasa de refresco del hardware del dispositivo.

## Recursos adicionales:
- [![]()]

## Proyectos Relacionados
- [Desarrollo web - Práctica Semana 4.1](https://github.com/Ricardo-Llanos/Desarrollo-web-semana4-2.git) 