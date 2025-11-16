# API-Futbol-argentino
Aplicación web que consume la API-SPORTS para mostrar la tabla de posiciones y datos básicos de los clubes de la Liga Profesional Argentina (Primera División).

¡Claro\! Con el nombre de tu repositorio (`API-Futbol-argentino`) y la funcionalidad que has desarrollado, aquí tienes un archivo `README.md` completo y profesional para tu proyecto, listo para que lo copies y pegues.

-----

# ⚽ API-Futbol-argentino

Aplicación web *frontend* diseñada para mostrar la **Tabla de Posiciones** y datos básicos de los clubes de la **Liga Profesional Argentina (Primera División)**.

El proyecto es una demostración de la integración de APIs externas utilizando JavaScript puro en el lado del cliente (navegador).

-----

## 🚀 Uso y Visualización

Este sitio web es completamente estático y se ejecuta en el navegador.

### URL Pública

Puedes acceder a la aplicación directamente a través de GitHub Pages:

**[https://fabrid022-cmyk.github.io/API-Futbol-argentino/futbol.html](https://fabrid022-cmyk.github.io/API-Futbol-argentino/futbol.html)**

### Características

  * **Datos Actualizados:** Consume la API-SPORTS para obtener la clasificación.
  * **Información Clave:** Muestra el puesto, el nombre del club (con logo) y la zona de clasificación a copas internacionales (Libertadores/Sudamericana) según la posición.

-----

## 💻 Tecnologías Utilizadas

  * **HTML5**
  * **CSS3** (Estilos básicos en `futbol.css`)
  * **JavaScript (ES6+):** Utilizado para realizar peticiones asíncronas (`fetch`) y manipular el DOM para renderizar la tabla de datos.

-----

## 🔌 API

La aplicación depende de una fuente de datos externa.

  * **Proveedor:** API-SPORTS (v3 Football API).

  * **Endpoint:** `/v3/standings`

  * **Configuración en `futbol.js` (Ejemplo de uso de la Liga Profesional ID 128):**

    ```javascript
    const API_URL = `${BASE_URL}standings?league=128&season=2023`;
    // Requiere la clave API en el encabezado 'x-apisports-key'.
    ```

-----

## ⚙️ Estructura del Proyecto

El repositorio contiene los archivos esenciales para una aplicación estática:

  * **`futbol.html`**: Estructura principal de la página (el *entry point*).
  * **`futbol.js`**: Contiene toda la lógica de la aplicación, incluyendo la llamada a la API (`fetchClubes`) y la función de renderizado (`renderClubes`).
  * **`futbol.css`**: Hoja de estilos.

-----

## ⚙️ Instalación (Ejecución Local)

Para ejecutar este proyecto en tu propia computadora:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/fabrid022-cmyk/API-Futbol-argentino.git
    cd API-Futbol-argentino
    ```
2.  **Configurar la API Key:** Abre el archivo `futbol.js` y reemplaza el valor de `API_KEY` con tu clave personal de API-SPORTS.
3.  **Abrir el Archivo:** Abre el archivo **`futbol.html`** directamente en tu navegador (doble clic) o utiliza una extensión de servidor local como *Live Server* de VS Code.

-----

## 📝 Licencia

Este proyecto está bajo la **Licencia MIT**. Eres libre de usar, modificar y distribuir el código, siempre manteniendo el crédito al autor original.
