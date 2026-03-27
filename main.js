function addPoint(){
    if (localStorage.points) {
        localStorage.points = Number(localStorage.points) + 1;
    } else {
        localStorage.points = 1;
    } 
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