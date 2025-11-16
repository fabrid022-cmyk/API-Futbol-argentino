document.addEventListener('DOMContentLoaded', () => {
    // 🚨 CLAVE API 🚨
    const API_KEY = 'ceb9cf0cc9524e9d32f20e7215f4da1c'; 
    
    // URL base de la API-SPORTS
    const BASE_URL = 'https://v3.football.api-sports.io/';

    // ⭐ CONFIGURACIÓN FINAL Y CORRECTA ⭐
    // LIGA PROFESIONAL ARGENTINA (ID 128)
    const LEAGUE_ID = 128;
    const SEASON = 2023; // Usar 2023 o el último año que tenga datos completos
    
    const API_URL = `${BASE_URL}standings?league=${LEAGUE_ID}&season=${SEASON}`; 

    const clubesBody = document.querySelector('#clubes-table tbody');
    const loadingMessage = document.getElementById('loading');
    
    // Actualizar el título de la página para mayor claridad
    document.querySelector('header p').textContent = `Mostrando datos de la Liga Profesional Argentina (ID ${LEAGUE_ID}, Temporada ${SEASON})`;

    // Función principal para obtener los datos de la API
    async function fetchClubes() {
        try {
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'x-apisports-key': API_KEY 
                }
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}. Hubo un problema con la clave o la petición.`);
            }

            const data = await response.json();
            
            if (!data.response || data.response.length === 0) {
                 throw new Error('La API no devolvió datos. Liga/Temporada no disponible.');
            }

            loadingMessage.style.display = 'none';

            // Estructura de navegación al array de clubes
            const standings = data.response[0].league.standings[0];
            
            renderClubes(standings);

        } catch (error) {
            console.error('Error al obtener o procesar los datos:', error);
            loadingMessage.textContent = '❌ Error al cargar los datos: ' + error.message;
            loadingMessage.style.color = 'red';
        }
    }

    // Función para dibujar la tabla
    function renderClubes(clubes) {
        clubesBody.innerHTML = ''; 

        clubes.forEach((club) => {
            const row = clubesBody.insertRow();
            
            // 1. Posición
            const posCell = row.insertCell();
            posCell.textContent = club.rank; 
            
            // 2. Nombre del Club
            const nameCell = row.insertCell();
            nameCell.innerHTML = `
                <img src="${club.team.logo}" alt="${club.team.name} Logo" style="height: 20px; vertical-align: middle; margin-right: 10px;">
                ${club.team.name}
            `;
            
            // 3. Copas (Clasificación/Descenso)
            const copasCell = row.insertCell();
            let description = club.description || 'Sin clasificación directa';
            
            // Lógica de clasificación simplificada (adaptada a lo que podría esperar un usuario)
            if (club.rank <= 4) {
                 description = '🏆 Zona Copa Libertadores';
            } else if (club.rank <= 9) {
                 description = '🏅 Zona Copa Sudamericana';
            }
            
            copasCell.textContent = description;
        });
    }

    // Ejecutar la función
    fetchClubes();
});