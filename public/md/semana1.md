# Sesión 1: Fundamentos de las Tecnologías Web y Configuración del Entorno

## 1. Fundamentos de las Tecnologías Web

El desarrollo de software orientado a entornos de red requiere la comprensión de la infraestructura y los protocolos que gobiernan la transmisión de datos. Una solución digital puede clasificarse en diferentes niveles estructurales según su alcance, interactividad y arquitectura subyacente:

* 
**Página Web:** Un documento electrónico único, compuesto principalmente por código estructurado (HTML) y estilos (CSS), accesible mediante un navegador.


* 
**Sitio Web:** Un conjunto centralizado de páginas web interconectadas bajo un mismo nombre de dominio.


* 
**Aplicación Web:** Una solución interactiva compleja cuyo procesamiento principal se ejecuta en un servidor y permite a los usuarios realizar operaciones dinámicas con persistencia de datos (por ejemplo, transacciones o consultas a bases de datos).


* 
**Sistema Web:** Un ecosistema integrado por múltiples aplicaciones, servidores e infraestructuras que interactúan entre sí para automatizar flujos complejos dentro de una organización.



---

## 2. Funcionamiento de la Infraestructura Web

El intercambio de información en la arquitectura cliente-servidor se fundamenta en un conjunto de protocolos y servicios estandarizados de manera internacional:

### Sistema de Nombres de Dominio (DNS)

Funciona como un directorio distribuido que traduce los nombres de dominio legibles por humanos (como `github.com`) en direcciones IP numéricas identificables por el hardware de red.

### Protocolo TCP/IP

La suite de protocolos de control de transmisión y protocolo de internet (TCP/IP) divide la información en paquetes de datos, garantiza que se transporten de forma segura a través de la red sin pérdidas y los ensambla en el orden correcto en el destino.

### Protocolo HTTP

El Protocolo de Transferencia de Hipertexto es un protocolo sin estado basado en el ciclo de petición y respuesta. El cliente (navegador) inicia una solicitud estructurada y el servidor backend procesa la demanda para devolver un código de estado junto con el recurso solicitado (HTML, JSON o binarios).

---

## 3. Roles en el Desarrollo de Aplicaciones para Internet

La construcción de software para internet se divide en áreas de especialización según la capa arquitectónica en la que se ejecute el código:

* 
**Desarrollador Frontend:** Encargado de la lógica que se ejecuta directamente en el cliente (navegador). Diseña la interfaz de usuario, la estructura del documento, las hojas de estilos y la interactividad en el lado del cliente.


* 
**Desarrollador Backend:** Responsable de la lógica del lado del servidor, la gestión de bases de datos relacionales o no relacionales, la optimización del rendimiento del servidor, la seguridad y el diseño de APIs RESTful.


* 
**Desarrollador Fullstack:** Profesional con la capacidad técnica para implementar soluciones tanto en la arquitectura frontend como en la infraestructura backend.



---

## 4. Guía de Configuración del Entorno de Desarrollo Local

Para la codificación y despliegue controlado de software se utiliza el entorno de desarrollo integrado Visual Studio Code. A continuación se detallan sus componentes, personalización y comandos esenciales para maximizar la productividad en el laboratorio.

### Elementos Principales de la Interfaz de Usuario

La interfaz está distribuida de manera modular para facilitar el flujo de trabajo:

* 
**Barra de Actividad:** Ubicada en el extremo lateral, permite alternar entre el explorador de archivos, el buscador global, el control de versiones (Git) y el gestor de extensiones.


* 
**Barra Lateral:** Muestra el árbol de directorios del proyecto actual o las opciones de la herramienta seleccionada.


* 
**Editor de Editor:** Área central donde se realiza la escritura y manipulación del código fuente.


* 
**Panel Terminal Integrado:** Consola de comandos interna que evita depender de ventanas externas para la ejecución de scripts, herramientas de dependencias o servidores locales.



### Extensiones Recomendadas para el Desarrollo Web

El ecosistema de Visual Studio Code permite acoplar complementos para automatizar tareas comunes:

* 
**Live Server:** Levanta un servidor de desarrollo local asíncrono con recarga automática en el navegador al detectar cambios en los archivos HTML o CSS.


* 
**Prettier - Code Formatter:** Fuerza un estilo de código limpio y uniforme mediante reglas automáticas de indentación y espaciado.


* 
**PHP Extension Pack / Laravel Extension Pack:** Proporciona autocompletado inteligente, validación de sintaxis y herramientas de depuración avanzadas para el ecosistema del lado del servidor.



### Atajos de Teclado Esenciales

La manipulación ágil de archivos en el editor se gestiona mediante combinaciones clave de teclado:

```text
Visualizar / Ocultar la Barra Lateral:      Ctrl + B
Abrir la Terminal Integrada:                Ctrl + `
Buscador de Archivos rápido:                Ctrl + P
Paleta de Comandos del Editor:              Ctrl + Shift + P
Duplicar Línea de Código:                   Alt + Shift + Flecha Abajo
Formatear Documento Completo:               Alt + Shift + F

```