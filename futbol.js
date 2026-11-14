document.addEventListener('DOMContentLoaded', () => {
    // TheSportsDB API v1 — clave pública gratuita (no es secreta, la documenta el proveedor)
    const API_KEY = '123';
    const BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

    // Liga Profesional Argentina en TheSportsDB
    const LEAGUE_ID = 4406;
    const CURRENT_SEASON = new Date().getFullYear();

    const tbody = document.querySelector('#clubes-table tbody');
    const table = document.getElementById('clubes-table');
    const status = document.getElementById('loading');
    const subtitle = document.querySelector('header p');
    const nota = document.getElementById('nota');

    // Traducción de las zonas que informa la API
    const ZONAS = {
        'Knockout Phase': 'Clasifica a playoffs',
        'Copa Libertadores': 'Copa Libertadores',
        'Copa Sudamericana': 'Copa Sudamericana',
        'Relegation': 'Descenso',
    };

    async function fetchTabla(season) {
        const url = `${BASE_URL}/lookuptable.php?l=${LEAGUE_ID}&s=${season}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status} al consultar la API`);
        }
        const data = await response.json();
        return Array.isArray(data.table) ? data.table : [];
    }

    async function cargar() {
        try {
            // Si la temporada actual todavía no tiene tabla, se usa la anterior
            let season = CURRENT_SEASON;
            let filas = await fetchTabla(season);
            if (filas.length === 0) {
                season = CURRENT_SEASON - 1;
                filas = await fetchTabla(season);
            }
            if (filas.length === 0) {
                throw new Error('La API no devolvió la tabla de posiciones.');
            }

            // La API devuelve las zonas mezcladas (puestos repetidos):
            // se ordena por puntos, diferencia de gol y goles a favor
            filas.sort((a, b) =>
                Number(b.intPoints) - Number(a.intPoints) ||
                Number(b.intGoalDifference) - Number(a.intGoalDifference) ||
                Number(b.intGoalsFor) - Number(a.intGoalsFor));
            subtitle.textContent = `Liga Profesional Argentina · Temporada ${season}`;
            render(filas);
            if (filas.length < 10) {
                nota.textContent = `Se muestran los primeros ${filas.length} equipos que entrega la API gratuita.`;
                nota.hidden = false;
            }
            status.hidden = true;
            table.hidden = false;
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            status.textContent = `No se pudo cargar la tabla: ${error.message}`;
            status.classList.add('error');
        }
    }

    function celda(row, texto, clase) {
        const td = row.insertCell();
        td.textContent = texto ?? '-';
        if (clase) td.className = clase;
        return td;
    }

    function render(filas) {
        tbody.replaceChildren();
        filas.forEach((club, i) => {
            const row = tbody.insertRow();

            celda(row, i + 1, 'num');

            // Escudo + nombre, sin innerHTML
            const tdEquipo = row.insertCell();
            tdEquipo.className = 'equipo';
            if (club.strBadge) {
                const img = document.createElement('img');
                img.src = club.strBadge;
                img.onerror = () => img.remove(); // si el escudo no carga, no queda el ícono roto
                img.alt = '';
                img.width = 22;
                img.height = 22;
                img.loading = 'lazy';
                tdEquipo.appendChild(img);
            }
            tdEquipo.appendChild(document.createTextNode(club.strTeam ?? ''));

            celda(row, club.intPlayed, 'num');
            celda(row, club.intWin, 'num');
            celda(row, club.intDraw, 'num');
            celda(row, club.intLoss, 'num');
            celda(row, club.intGoalDifference, 'num');
            celda(row, club.intPoints, 'num pts');
            const zona = club.strDescription || '';
            celda(row, ZONAS[zona] ?? zona, 'zona');
        });
    }

    cargar();
});