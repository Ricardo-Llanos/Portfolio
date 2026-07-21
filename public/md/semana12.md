# Sesión 12: Administración en Django, Middleware, Sesiones y Seguridad Backend

## 1. Módulo Administrativo (Django Admin) y Personalización Empresarial

Django Admin es un entorno de gestión de contenidos y datos generado automáticamente a partir de la inspección de los modelos de la aplicación. Su diseño orientado a la productividad empresarial proporciona una interfaz gráfica completa para operaciones CRUD (Creación, Lectura, Actualización y Borrado) sin necesidad de construir paneles de administración desde cero.

### Registro y Personalización de Modelos

El comportamiento por defecto del panel administrativo puede ser modificado mediante clases herederas de `ModelAdmin` para adaptar la interfaz a los flujos operativos de la organización:

```python
from django.contrib import admin
from .models import Proyecto

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    """Configuración personalizada del panel de administración para la entidad Proyecto."""
    list_display = ('nombre', 'activo', 'fecha_creacion', 'es_reciente')
    list_filter = ('activo', 'fecha_creacion')
    search_fields = ('nombre', 'descripcion')

    @admin.display(description='¿Es Reciente?')
    def es_reciente(self, obj):
        """Campo calculado para la visualización administrativa."""
        return obj.fecha_creacion.year == 2026

```

* **Personalización Básica y Avanzada:** Definición de columnas visibles (`list_display`), filtros laterales (`list_filter`) y barra de búsqueda predictiva (`search_fields`).


* **Campos Calculados y Formularios Personalizados:** Integración de métodos dentro de la clase de administración para mostrar información derivada de los datos existentes y reemplazo de los widgets por defecto mediante formularios a medida.



---

## 2. Arquitectura de Middleware y Gestión de Sesiones

La capa de procesamiento de peticiones en Django cuenta con un sistema de tuberías dinámico que permite interceptar el ciclo de vida completo de cada solicitud HTTP entrante y respuesta saliente.

### Mecanismos de Middleware

Un *Middleware* es un componente liviano y de bajo nivel que se ejecuta de forma global antes de que una petición alcance la vista o después de que la vista genere una respuesta:

* **Cadena de Responsabilidad:** Procesamiento secuencial que permite transformar encabezados HTTP, auditar accesos o gestionar excepciones transversales a toda la aplicación.


* **Intercepción del Ciclo de Vida:** Control preciso en las fases de solicitud (`process_request`), vista (`process_view`), excepción (`process_exception`) y respuesta (`process_response`).



### Manejo de Sesiones del Lado del Servidor

* **Persistencia de Estado:** Dado que el protocolo HTTP es apátrida (*stateless*), Django emplea un sistema de sesiones respaldado por bases de datos o memoria caché para almacenar el estado del usuario entre diferentes peticiones.


* **Gestión de Cookies Seguras:** Emisión de identificadores de sesión cifrados e inalterables mediante cookies de navegador orientadas a garantizar el seguimiento de los estados de navegación sin exponer datos sensibles.



---

## 3. Autenticación, Autorización y Seguridad Backend

La capa de seguridad nativa del framework centraliza la gestión del acceso de usuarios y la protección ante vulnerabilidades web de impacto crítico.

### Autenticación y Control de Accesos

* **Sistema de Autenticación Integrado:** Manejo de usuarios, grupos y permisos para verificar la identidad de los clientes que interactúan con la plataforma.


* **Mecanismos de Autorización:** Restricción de vistas y recursos en función de los privilegios asignados al usuario autenticado, utilizando decoradores (`@login_required`) o *mixins* para vistas basadas en clases.



---

## 4. Implementación del Entorno de Sistema Web Backend

Desarrollo práctico de un middleware de auditoría personalizado para la supervisión y control del flujo de solicitudes en la capa servidor:

```python
import logging

logger = logging.getLogger(__name__)

class AuditoriaMiddleware:
    """Middleware personalizado para registrar peticiones entrantes y tiempo de respuesta."""
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Lógica ejecutada antes de que la vista sea llamada
        if request.user.is_authenticated:
            logger.info(f"Usuario {request.user.username} accedió a: {request.path}")
        
        response = self.get_response(request)

        # Lógica ejecutada después de que la vista procesa la respuesta
        return response

```

## Recursos adicionales:
- [![]()]

## Proyectos Relacionados
- [Desarrollo web - Práctica Semana 10](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)
- [Desarrollo web - Práctica Semana 10](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)