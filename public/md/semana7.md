# Sesión 7: Hooks en Frameworks JavaScript y Fundamentos del Framework Laravel

## 1. El Concepto de Hooks y Gestión de Estado Avanzada

Los *Hooks* representan una abstracción arquitectónica que permite a los componentes funcionales prescindir de la estructura de clases tradicional para gestionar ciclos de vida, efectos secundarios y estados en memoria de manera declarativa. Su introducción optimiza la reutilización de la lógica de negocio y evita el acoplamiento innecesario en el árbol de componentes.

### Hooks Estándar del Ecosistema Frontend

* `useState`: Suministra un estado local reactivo a un componente funcional. Retorna un valor actual y una función despachadora encargada de mutar dicho valor, forzando de manera interna el re-renderizado seguro del nodo en el DOM.
* `useEffect`: Canaliza la ejecución de efectos secundarios (tales como suscripciones a eventos, mutaciones manuales del DOM o sincronización asíncrona mediante peticiones HTTP). Permite definir un arreglo de dependencias para restringir su disparo únicamente cuando valores específicos sufren una alteración.
* `useContext`: Resuelve el problema del traspaso masivo de propiedades a través de múltiples niveles jerárquicos (*prop drilling*), permitiendo que un componente acceda directamente a un almacén de datos global unificado.
* `useRef`: Retorna un objeto mutable cuya propiedad `.current` persiste durante todo el ciclo de vida del componente sin disparar re-renderizados adicionales al cambiar. Se emplea de forma habitual para almacenar referencias directas a elementos nativos del hardware del DOM o identificadores de temporizadores.
* `useReducer`: Alternativa avanzada para la gestión de estados complejos y extensos. Implementa un patrón de flujo de datos similar a Redux, delegando las mutaciones a una función reductora pura que procesa acciones estructuradas.

### Optimización del Rendimiento en el Cliente

* `useCallback`: Memoriza la instancia de una función específica entre ciclos de renderizado, evitando que se vuelva a instanciar en memoria a menos que sus dependencias declaradas cambien.
* `useMemo`: Almacena en caché el valor de retorno resultante de un cálculo computacionalmente costoso, impidiendo que la operación lógica se ejecute de nuevo de manera innecesaria si las entradas permanecen constantes.

---

## 2. Introducción al Framework Backend Laravel (v.12+)

Laravel es un framework de código abierto diseñado para la construcción ágil de aplicaciones web robustas del lado del servidor utilizando el ecosistema avanzado de PHP. Su arquitectura promueve las buenas prácticas de la ingeniería de software y agiliza tareas repetitivas de infraestructura como el ruteo, la autenticación, la gestión de sesiones y el almacenamiento en bases de datos relacionales.

### Estructura de Directorios Global de un Proyecto

Un proyecto estándar bajo Laravel organiza sus responsabilidades de software mediante una jerarquía estricta de carpetas:

* `app/`: Contiene el núcleo lógico de la aplicación backend, dividida en subcarpetas para Modelos, Controladores y Middlewares.
* `config/`: Centraliza los archivos de configuración técnica del sistema (conexiones de red, bases de datos, servicios de correo).
* `database/`: Almacena los scripts de migración de tablas físicas, fábricas de datos (*factories*) y sembradores (*seeders*).
* `routes/`: Define las puertas de acceso a la aplicación. Incluye `web.php` para rutas tradicionales de interfaces de usuario y `api.php` para la exposición de endpoints RESTful con protección ante ataques distribuidos.
* `resources/`: Aloja el código frontend nativo del lado del cliente, incluyendo las plantillas de presentación visual y los activos sin procesar (CSS y JavaScript).

---

## 3. Arquitectura del Sistema de Ruteo Web

El motor de ruteo de Laravel intercepta las peticiones HTTP entrantes dirigidas al servidor, examina la URI solicitada, analiza el método verbal (GET, POST, PUT, DELETE) y mapea de manera automatizada la petición hacia un controlador lógico central encargado de procesar la lógica de negocio:

```php
use App\Http\Controllers\ProyectoController;
use Illuminate\Support\Facades\Route;

// Registro semántico de una ruta orientada al consumo del controlador
Route::get('/proyectos', [ProyectoController::class, 'index']);

```

---

## 4. Motor de Plantillas Blade

Blade es el motor de renderizado de vistas integrado por defecto en el framework. A diferencia de otros sistemas de plantillas, Blade compila el código directamente en scripts optimizados de PHP vanilla, almacenándolos en caché para maximizar el rendimiento del servidor. Permite la modularización de interfaces a través de directivas lógicas controladas:

* **Herencia de Plantillas:** Define una estructura de diseño base reutilizable (por ejemplo, layouts con barras de navegación fijas) que las vistas secundarias pueden extender mediante el uso de directivas como `@extends` y `@section`.
* **Estructuras de Control Seguras:** Simplifica la sintaxis para bucles y condicionales utilizando directivas limpias como `@if`, `@else`, y `@foreach`, las cuales incorporan protecciones nativas contra ataques de inyección de scripts cruzados (XSS) al sanitizar de manera automática los flujos de datos mostrados en pantalla.

---

## 5. Persistencia de Datos con Eloquent ORM

Eloquent es el mapeador objeto-relacional (ORM) nativo del framework. Proporciona una abstracción estructurada sobre la base de datos relacional de la aplicación, asociando de forma exacta cada tabla física a una clase orientada a objetos denominada **Modelo**.

A través de Eloquent, los desarrolladores backend interactúan con la base de datos mediante una sintaxis fluida y legible que no requiere la escritura manual de consultas SQL complejas, mitigando errores de sintaxis y previniendo vulnerabilidades críticas de inyección SQL mediante la parametrización de datos subyacente.

```php
// Recuperación estructurada de registros activos usando el ORM Eloquent
$proyectosDestacados = Proyecto::where('activo', true)->get();

```