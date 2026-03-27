// navigator.geolocation is ingebouwd in de browser, geen extra library nodig
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (positie) {
            const lat = positie.coords.latitude;
            const lng = positie.coords.longitude;

            // Centreer de kaart op de gebruiker
            kaart.setView([lat, lng], 16);
        },
        function (fout) {
            // Wordt opgeroepen als de gebruiker toestemming weigert of er een fout optreedt
            alert('Locatie kon niet worden bepaald: ' + fout.message);
        }
    );
} else {
    alert('Geolocatie wordt niet ondersteund door deze browser.');
}