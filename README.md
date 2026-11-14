# ⚽ API-Futbol-argentino

Aplicación web *frontend* que muestra la **tabla de posiciones** de la **Liga Profesional Argentina (Primera División)** consumiendo la API pública de TheSportsDB.

El proyecto es una demostración de integración con una API REST externa usando JavaScript puro en el navegador.

## 🚀 Demo

**[https://fabrid022-cmyk.github.io/API-Futbol-argentino/futbol.html](https://fabrid022-cmyk.github.io/API-Futbol-argentino/futbol.html)**

### Características

- Consume el endpoint `lookuptable.php` de TheSportsDB para obtener la clasificación.
- Muestra puesto, escudo, partidos jugados, ganados, empatados, perdidos, diferencia de gol, puntos y la zona de clasificación que informa la API.
- Detecta la temporada actual y, si todavía no tiene tabla, usa la anterior.
- Maneja errores de red y respuestas vacías mostrando un mensaje en pantalla.

## 💻 Tecnologías

- **HTML5**
- **CSS3** (`futbol.css`)
- **JavaScript (ES6+)**: peticiones asíncronas con `fetch` y manipulación del DOM.
- **Postman**: pruebas de la integración con la API.

## 🔌 API

- **Proveedor:** [TheSportsDB](https://www.thesportsdb.com/) (API v1)
- **Endpoint:** `GET /api/v1/json/123/lookuptable.php?l=4406&s=<año>`
- **Autenticación:** clave pública gratuita `123`, incluida en la URL (no requiere registro)

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
2. Abrir `futbol.html` en el navegador o usar *Live Server* de VS Code.

## 📝 Licencia

MIT. Ver [LICENSE](LICENSE).
