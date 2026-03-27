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

function getLocation(){
    console.log("HI")
    // navigator.geolocation is ingebouwd in de browser, geen extra library nodig
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (positie) {
                const lat = positie.coords.latitude;
                const lng = positie.coords.longitude;

                L.marker([lat, lng])
                    .addTo(kaart);
            },
            function (fout) {
                // Wordt opgeroepen als de gebruiker toestemming weigert of er een fout optreedt
                alert('Locatie kon niet worden bepaald: ' + fout.message);
            }
        );
    } else {
        alert('Geolocatie wordt niet ondersteund door deze browser.');
    }
}

function checkLocation(){
    
}