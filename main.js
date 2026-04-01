function getLocation(){
    console.log("location refreshed")
    // navigator.geolocation is ingebouwd in de browser, geen extra library nodig
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (positie) {
                const lat = positie.coords.latitude;
                const lng = positie.coords.longitude;
 
                localStorage.lngUser = Number(lng);
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
    console.log("location checked");
    console.log(kaart.distance([localStorage.latUser, localStorage.lngUser], [localStorage.lat, localStorage.lng]));
    if(kaart.distance([localStorage.latUser, localStorage.lngUser], [localStorage.lng, localStorage.lat]) <= 25){
        addPoint();
        newLocation();
    }
}

function addPoint(){
    console.log("point added");
    if (localStorage.points) {
        localStorage.points = Number(localStorage.points) + 1;
    } else {
        localStorage.points = 1;
    } 
}

function newLocation()
{
    console.log("location changed");
    var latPrevious = localStorage.latUser;
    var lngPrevious = localStorage.lngUser;
    localStorage.lat = Math.random() * (5.38591 - 5.38400) + 5.38400
    localStorage.lng = Math.random() * (50.92825 - 50.92687) + 50.92687

    const root = document.documentElement;
    root.style.setProperty('--location', '' + Math.random() * (100 - 10) + 10);


    while (kaart.distance([lngPrevious, latPrevious], [localStorage.lng, localStorage.lat]) < 80) {
        console.log(kaart.distance([lngPrevious, latPrevious], [localStorage.lng, localStorage.lat]));
        localStorage.lat = Math.random() * (5.38591 - 5.38400) + 5.38400
        localStorage.lng = Math.random() * (50.92825 - 50.92687) + 50.92687
    }
    location.reload();
}
