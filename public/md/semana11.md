# Sesión 11: Framework Backend Django – Patrón MTV, Vistas, Plantillas y Persistencia

## 1. Arquitectura y Fundamentos de Django Framework

Django es un framework web de alto nivel escrito en Python que fomenta un desarrollo rápido, limpio y pragmático. Su diseño se basa en el principio de *Don't Repeat Yourself* (DRY) y promueve una arquitectura desacoplada donde cada componente cumple una responsabilidad claramente definida en el procesamiento de solicitudes HTTP.

### Comparativa Arquitectónica: MVC vs. MTV

A diferencia del patrón clásico Modelo-Vista-Controlador (MVC), Django implementa el patrón **MTV (Model-Template-View)**:

* **Model (Modelo):** Define la capa de acceso a datos y la lógica de negocio. Encapsula el esquema de la base de datos y sus relaciones.


* **Template (Plantilla):** Representa la capa de presentación visual (equivalente a la Vista en MVC). Define cómo se estructuran los datos para ser mostrados al usuario.


* **View (Vista):** Actúa como la capa de control (equivalente al Controlador en MVC). Intercepta la petición web, ejecuta la lógica de negocio consultando los Modelos y selecciona la Plantilla adecuada para renderizar la respuesta.


* **Controlador del Framework:** El propio motor de Django actúa como el controlador principal, gestionando el mapa de rutas y despachando las peticiones hacia la vista correspondiente.



---

## 2. Enrutamiento, Vistas y Motor de Plantillas

El procesamiento de una petición HTTP en Django inicia con el análisis del sistema de URLs, el cual deriva la ejecución hacia la vista correspondiente para generar una respuesta dinámica.

### Gestión de URLs y Tipos de Vistas

* **Mapeo Semántico de URLs:** Configuración de rutas centralizadas que asocian patrones de URI con vistas específicas mediante expresiones reguladas o convertidores de ruta.


* **Vistas Basadas en Funciones (FBV):** Funciones de Python que reciben un objeto `HttpRequest` y retornan una instancia de `HttpResponse`. Ideales para flujos de trabajo personalizados o de baja complejidad.


* **Vistas Basadas en Clases (CBV):** Abstracciones orientadas a objetos que heredan comportamientos predefinidos (vistas de lista, detalle, creación o edición), optimizando la reutilización de código en operaciones CRUD comunes.



### Renderizado con el Motor de Plantillas de Django

El sistema de plantillas proporciona un lenguaje seguro y desacoplado para la generación dinámica de HTML:

* **Herencia de Plantillas:** Permite establecer una estructura base unificada (como maquetas con encabezados y pies de página) reutilizando bloques de contenido dinámico mediante etiquetas como:

    ```django
    {% extends 'base.html' %}
    {% block content %}
    ```


* **Etiquetas y Filtros:** Incorpora estructuras de control nativas:
    ```django 
    ({% if %},
    {% for %})
    ``` 
    O transformadores de datos como:
    ```
    ({{ variable|lower }})
    ```
    que aseguran el formateo adecuado de la información expuesta al usuario.

---

## 3. Persistencia de Datos y Gestión de Formulario

El acceso a la base de datos y la recolección de información del usuario se gestionan mediante abstracciones de alto nivel que garantizan la integridad y la seguridad del sistema.

### Modelo de Datos con Django ORM

Django abstrae la manipulación de la base de datos relacional asociando clases de Python con tablas físicas mediante su propio ORM (*Object-Relational Mapping*):

```python
from django.db import models

class Proyecto(models.Model):
    """Modelo ORM que mapea la entidad 'Proyecto' a la base de datos relacional."""
    nombre = models.CharField(max_length=150)
    descripcion = models.TextField()
    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

```

* **Tipos de Campos y Migraciones:** Definición de la estructura de datos mediante tipos nativos (`CharField`, `IntegerField`, `ForeignKey`). Las modificaciones en el esquema se registran dinámicamente en archivos de migración e impactan la base de datos sin necesidad de escribir SQL manual.


* **API de Consultas (QuerySets):** Sintaxis fluida para realizar operaciones de filtrado, ordenamiento y agregación sobre los registros (`Proyecto.objects.filter(activo=True)`).



### Gestión, Validación y Sanitización de Formularios

* **Formularios de Django:** Abstracción para la generación automatizada de controles HTML de entrada de datos a partir de clases o modelos de datos (`ModelForm`).


* **Validación y Sanitización:** Procesamiento automático del lado del servidor para verificar que los datos cumplan con las reglas de negocio, previniendo inyecciones de datos maliciosos y asegurando la limpieza de los campos recolectados.



---

## 4. Implementación del Entorno de Aplicación

Integración de rutas, vistas basadas en clases y persistencia mediante modelos para procesar solicitudes en la capa servidor:

```python
from django.urls import path
from django.views.generic import ListView
from .models import Proyecto

class ProyectoListView(ListView):
    """Vista basada en clase para consultar y listar proyectos activos."""
    model = Proyecto
    template_name = 'proyectos/lista.html'
    context_object_name = 'proyectos'

    def get_queryset(self):
        # Filtrado de datos a través del ORM
        return Proyecto.objects.filter(activo=True)

# Configuración del mapeo de URLs
urlpatterns = [
    path('proyectos/', ProyectoListView.as_view(), name='lista_proyectos'),
]

```

## Recursos adicionales:
- [![]()]

## Proyectos Relacionados
- [Desarrollo web - Práctica Semana 11](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)
- [Desarrollo web - Práctica Semana 11](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)