# Sesión 9: Fundamentos de Arquitectura Backend y Entornos de Aplicación Servidor

## 1. Arquitectura de Aplicaciones Web y Entornos Backend

El desarrollo del lado del servidor (*backend*) constituye el núcleo lógico de los sistemas distribuidos. Su función principal radica en procesar la lógica de negocio, gestionar el acceso persistente a datos y garantizar la seguridad mediante reglas de autorización y validación antes de servir las respuestas al cliente.

### Componentes de la Arquitectura Servidor

* **Servidores Web:** Infraestructura de software encargada de atender peticiones HTTP/HTTPS entrantes, administrar el ciclo de vida de las conexiones y servir recursos estáticos o delegar ejecuciones dinámicas hacia un entorno de procesamiento backend.


* **Funcionamiento Server-Side:** Procesamiento en el cual el código fuente se ejecuta íntegramente dentro de los límites del servidor. Produce como resultado datos estructurados (como JSON/XML) o documentos HTML compilados antes de su envío por la red.


* **Lenguaje y Framework Backend:** Conjunto de lenguajes de programación y estructuras de desarrollo orientadas a abstraer la comunicación con el sistema operativo subyacente, optimizar la gestión de datos y estandarizar la arquitectura de software.



---

## 2. Tecnologías de Despliegue Backend

El entorno backend admite múltiples pilas tecnológicas para la ejecución de aplicaciones empresariales, permitiendo seleccionar la infraestructura idónea según los requerimientos del sistema.

### Aplicaciones Web con PHP

* Representa un modelo de procesamiento síncrono del lado del servidor ampliamente extendido para la gestión rápida de datos y renderizado dinámico.


* Facilita la integración nativa con bases de datos relacionales y servidores de aplicaciones mediante arquitecturas modulares.



### Aplicaciones Web con JSP (JavaServer Pages)

* Tecnología basada en el ecosistema Java orientada a la creación de vistas dinámicas en entornos empresariales.


* Ofrece alta escalabilidad, tipado fuerte y la robustez propia de la máquina virtual de Java (JVM) para el soporte de operaciones críticas y arquitecturas multicapa.

---

## 3. Despliegue de Aplicaciones Servidor

El despliegue efectivo en entornos de laboratorio o producción requiere la configuración precisa del servidor web y del runtime de ejecución correspondiente:

```bash
# Ejemplo conceptual: Despliegue e iniciación de servicios en el servidor web
systemctl restart apache2
systemctl status php-fpm

```

## Recursos adicionales:
- [![]()]

## Proyectos Relacionados
- [Desarrollo web - Práctica Semana 9](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)
- [Desarrollo web - Práctica Semana 9](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)