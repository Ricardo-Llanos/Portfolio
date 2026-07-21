# Sesión 13: Diseño e Implementación de APIs RESTful en el Backend

## 1. Arquitectura de Servicios y Principios REST

El diseño de Interfaces de Programación de Aplicaciones (APIs) bajo la arquitectura Representational State Transfer (REST) establece un conjunto de restricciones arquitectónicas orientadas a garantizar la escalabilidad, la desacoplamiento entre cliente y servidor, y la interoperabilidad en la web.

### Principios Fundamentales y Patrones de Intercambio

* **Arquitectura Orientada a Recursos:** Cada entidad del sistema se expone mediante un identificador uniforme de recursos (URI). El cliente interactúa con estas entidades utilizando los métodos del protocolo HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).


* **APIs de Hipermedios y HATEOAS:** *Hypermedia As The Engine Of Application State* (HATEOAS) es un nivel avanzado de madurez REST en el cual las respuestas del servidor incluyen dinámicamente hiperenlaces que guían al cliente sobre las acciones y transiciones de estado permitidas a continuación.


* **Formato de Intercambio Decoupled:** Comunicación basada principalmente en estructuras JSON, asegurando un formato ligero y legible independientemente de la plataforma consumidora.



---

## 2. Serialización, Paginación y Control de Tráfico

La capa de API convierte las estructuras de datos complejas del ORM en formatos de texto plano para su transmisión por la red, regulando además la volumetría y el acceso seguro.

### Transformación de Datos y Optimización de Respuestas

* **Serialización y Deserialización:** Mecanismo mediante el cual los objetos de la base de datos se traducen a diccionarios de Python y posteriormente a tipos de datos nativos de JSON (y viceversa), aplicando reglas de validación severas durante la recepción de peticiones.


* **Estrategias de Paginación y Filtrado:** Control del tamaño de los conjuntos de datos devueltos (`PageNumberPagination`, `LimitOffsetPagination`) para evitar la sobrecarga de memoria en el servidor y optimizar el tiempo de respuesta en la red.


* **Límites Temporales de Uso (*Throttling*):** Mecanismos de protección que restringen la cantidad de solicitudes que un cliente o dirección IP puede realizar en un período determinado, previniendo ataques de denegación de servicio (DoS) o consumo abusivo de recursos.



---

## 3. Enrutamiento Avanzado, Vistas de API y Mecanismos de Seguridad

Django REST Framework (DRF) o arquitecturas equivalentes abstraen la construcción de endpoints mediante conjuntos de vistas y ruteadores automáticos.

```python
from rest_framework import serializers, viewsets, routers
from .models import Proyecto

class ProyectoSerializer(serializers.ModelSerializer):
    """Serializador para la conversión de instancias del modelo Proyecto a JSON."""
    class Meta:
        model = Proyecto
        fields = '__all__'

class ProyectoViewSet(viewsets.ModelViewSet):
    """Conjunto de vistas que provee automáticamente la lógica CRUD para el recurso."""
    queryset = Proyecto.objects.filter(activo=True)
    serializer_class = ProyectoSerializer

```

### Seguridad e Interoperabilidad en Endpoints

* **Conjuntos de Vistas (*ViewSets*) y Ruteadores:** Abstracciones que mapean automáticamente las operaciones CRUD estándar hacia los verbos HTTP correspondientes, generando la tabla de rutas de forma semántica.


* **Protección CSRF y Asincronía con AJAX:** Manejo de tokens de Falsificación de Peticiones en Sitios Cruzados (*Cross-Site Request Forgery*) cuando la API es consumida de forma asíncrona mediante llamadas AJAX desde el frontend.


* **Configuración de CORS (*Cross-Origin Resource Sharing*):** Control de acceso HTTP que define los orígenes permitidos (dominios e IP externas) para realizar solicitudes cruzadas de forma segura hacia el servidor backend.



---

## 4. Implementación del Entorno de API Backend

Desarrollo práctico del registro de rutas RESTful mediante un enrutador automatizado para exponer el servicio web:

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProyectoViewSet

# Instanciación y registro de rutas automáticas para la API
router = DefaultRouter()
router.register(r'proyectos-api', ProyectoViewSet, basename='proyecto-api')

urlpatterns = [
    # Exposición de los endpoints gestionados por el ruteador REST
    path('api/v1/', include(router.urls)),
]

```

## Recursos adicionales:
- [![]()]

## Proyectos Relacionados
- [Desarrollo web - Práctica Semana 13](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)
- [Desarrollo web - Práctica Semana 13](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)