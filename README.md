# ⚽ API-Futbol-argentino

Aplicación web *frontend* que muestra la **tabla de posiciones** de la **Liga Profesional Argentina (Primera División)** consumiendo la API-SPORTS.

El proyecto es una demostración de integración con una API REST externa usando JavaScript puro en el navegador.

## 🚀 Demo

**[https://fabrid022-cmyk.github.io/API-Futbol-argentino/futbol.html](https://fabrid022-cmyk.github.io/API-Futbol-argentino/futbol.html)**

### Características

- Consume el endpoint `/standings` de API-SPORTS para obtener la clasificación.
- Muestra el puesto, el nombre del club con su logo y la zona de clasificación a copas internacionales (Libertadores / Sudamericana) según la posición.
- Maneja errores de red y respuestas vacías mostrando un mensaje en pantalla.

## 💻 Tecnologías

- **HTML5**
- **CSS3** (`futbol.css`)
- **JavaScript (ES6+)**: peticiones asíncronas con `fetch` y manipulación del DOM.
- **Postman**: pruebas de la integración con la API.

## 🔌 API

- **Proveedor:** API-SPORTS (Football API v3)
- **Endpoint:** `GET /standings?league=128&season=<año>`
- **Autenticación:** encabezado `x-apisports-key`

## 📁 Estructura

- `futbol.html`: estructura de la página.
- `futbol.js`: llamada a la API (`fetchClubes`) y renderizado de la tabla (`renderClubes`).
- `futbol.css`: estilos.

## ⚙️ Ejecución local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/fabrid022-cmyk/API-Futbol-argentino.git
   cd API-Futbol-argentino
   ```
2. Crear una cuenta gratuita en [API-SPORTS](https://api-sports.io/) y poner tu clave en la constante `API_KEY` de `futbol.js`.
3. Abrir `futbol.html` en el navegador o usar *Live Server* de VS Code.

## 📝 Licencia

MIT. Ver [LICENSE](LICENSE).
