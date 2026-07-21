# Sesión 14: Arquitectura de Microservicios en Django, Containerización y Consumo Distribuido

## 1. Fundamentos de Arquitecturas Orientadas a Microservicios

La arquitectura de microservicios representa un patrón de diseño evolutivo en el cual una aplicación compleja se descompone en un conjunto de servicios autónomos, de alcance acotado y despliegue independiente. En contraste con las arquitecturas monolíticas tradicionales, este enfoque maximiza la tolerancia a fallos, la mantenibilidad del código base y la escalabilidad horizontal del sistema backend.

### Principios de Diseño y Estrategias de Comunicación

* **Descomposición Dominio-Centrica:** Delimitación de las responsabilidades lógicas del sistema en unidades de software altamente cohesivas y débilmente acopladas.


* **Gestión Descentralizada de Datos:** Cada microservicio mantiene el control exclusivo sobre su propio almacenamiento persistente, evitando compartir bases de datos relacionales directamente con otros servicios para preservar la autonomía operacional.


* **Mecanismos de Comunicación Inter-Servicio:** Intercambio de datos entre nodos utilizando protocolos síncronos sobre peticiones HTTP/REST o esquemas asíncronos mediante mensajería basada en eventos (*Event-Driven Architecture*).



---

## 2. Containerización, Orquestación y Escalabilidad con Docker y Kubernetes

El aislamiento y empaquetado de microservicios resulta crítico para garantizar la consistencia entre los entornos de desarrollo, pruebas y producción.

### Despliegue de Infraestructura y Orquestación de Cargas

* **Containerización de Servicios con Docker:** Encapsulamiento del código fuente de la aplicación, el entorno de ejecución en Python, las librerías dependientes y las variables de sistema en imágenes ligeras e inmutables mediante `Dockerfiles` y configuraciones multicontenedor (`Docker Compose`).


* **Orquestación de Contenedores con Kubernetes:** Gestión automatizada del despliegue, el balanceo de carga, la autoreparación (*self-healing*) y la programación de recursos para los contenedores que conforman la red de microservicios.


* **Monitoreo, Escalado y Protección:** Implementación de políticas de escalado horizontal de pods en respuesta al incremento del tráfico web, sumado al monitoreo continuo del estado de salud de la red y el cifrado de canales de comunicación entre microservicios.



---

## 3. Integración, Consumo de Servicios y Seguridad Distribuida

La exposición orientada a clientes exige la centralización de los puntos de entrada e interconexión segura entre la red distribuida de nodos backend.

```python
import requests
from django.conf import settings

class ClienteMicroservicioProyecto:
    """Clase encargada de realizar peticiones de consumo síncrono hacia microservicios externos."""
    
    @staticmethod
    def obtener_metricas_proyecto(proyecto_id: int) -> dict:
        url_servicio = f"{settings.MICROSERVICIO_METRICAS_URL}/api/v1/metricas/{proyecto_id}/"
        headers = {"Authorization": f"Bearer {settings.TOKEN_ACCESO_INTERNO}"}
        
        try:
            respuesta = requests.get(url_servicio, headers=headers, timeout=5.0)
            respuesta.raise_for_status()
            return respuesta.json()
        except requests.RequestException as error:
            # Manejo de resiliencia y degrado progresivo del servicio
            return {"error": "Servicio de métricas no disponible de forma temporal", "detalle": str(error)}

```

### Protocolos de Consumo e Interoperabilidad

* **Consumo de Microservicios Externos:** Abstracción de clientes HTTP del lado del servidor para solicitar recursos, unificar respuestas distribuidas y procesar datos agregados.


* **Seguridad y Gateway de Aplicación:** Implementación de capas de autenticación distribuidas (como tokens JWT) para validar las solicitudes entre la red de microservicios y proteger las fronteras del sistema backend.



---

## 4. Configuración del Entorno Distribuido con Containerización

Declaración estandarizada de un contenedor Docker orientado a la ejecución aislada de un microservicio construido sobre Django:

```dockerfile
# Imagen base oficial de Python para entornos de producción
FROM python:3.11-slim

# Definición del directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalación de dependencias del sistema operativo
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copia e instalación de dependencias de la aplicación
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia del código fuente hacia el contenedor
COPY . .

# Exposición del puerto nativo del microservicio y comando de arranque
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "core.wsgi:application"]

```

## Recursos adicionales:
- [![]()]

## Proyectos Relacionados
- [Desarrollo web - Práctica Semana 14](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)
- [Desarrollo web - Práctica Semana 14](https://github.com/Ricardo-Llanos/Desarrollo-web-semana7.git)