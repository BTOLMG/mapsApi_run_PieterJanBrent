function getLocation(){
    console.log("HI")
    // navigator.geolocation is ingebouwd in de browser, geen extra library nodig
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (positie) {
                const lat = positie.coords.latitude;
                const lng = positie.coords.longitude;

 
                localStorage.lonUser = Number(lng);
                localStorage.latUser = Number(lat);

                L.marker([lat, lng])
                    .addTo(kaart);

                return positie;
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
    console.log("HII")
    if(Math.sqrt(Math.pow(localStorage.latUser - localStorage.lat,2) + Math.pow(localStorage.lngUser - localStorage.lng,2)) >= 25){
        addPoint();
    }
}

function addPoint(){
    if (localStorage.points) {
        localStorage.points = Number(localStorage.points) + 1;
    } else {
        localStorage.points = 1;
    } 
}