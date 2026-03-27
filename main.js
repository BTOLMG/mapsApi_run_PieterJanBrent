// navigator.geolocation is ingebouwd in de browser, geen extra library nodig
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (positie) {
            const lat = positie.coords.latitude;
            const lng = positie.coords.longitude;

            // Centreer de kaart op de gebruiker
            kaart.setView([lat, lng], 16);

            // Marker op de gebruikerslocatie
            L.marker([lat, lng])
                .addTo(kaart)
                .bindPopup('📍 Jij bevindt je hier!<br>Nauwkeurigheid: ~' + Math.round(nauwkeurigheid) + ' m')
                .openPopup();

            // Optioneel: cirkel om nauwkeurigheid te visualiseren
            L.circle([lat, lng], {
                radius: nauwkeurigheid,
                color: '#3388ff',
                fillColor: '#3388ff',
                fillOpacity: 0.1
            }).addTo(kaart);
            createPoint();
        },
        function (fout) {
            // Wordt opgeroepen als de gebruiker toestemming weigert of er een fout optreedt
            alert('Locatie kon niet worden bepaald: ' + fout.message);
        }
    );
} else {
    alert('Geolocatie wordt niet ondersteund door deze browser.');
}

function createPoint()
{
    lon = Math.floor(Math.random() * (50.92687 - 50.92825 + 1)) + 50.92825
    lat = Math.floor(Math.random() * (5.38591 - 5.38400 + 1)) + 5.38400
    const cirkel = L.circle([lon, lat], {
    color: 'yellow',      // randkleur
    fillColor: 'rgb(217, 255, 0)',  // vulkleur
    fillOpacity: 0.,
    radius: 500         // straal in meters
}).addTo(kaart);
}

function addPoint(){
    if (localStorage.points) {
        localStorage.points = Number(localStorage.points) + 1;
    } else {
        localStorage.points = 1;
    } 
}