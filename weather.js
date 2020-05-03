
const COORDS = 'coords';
const API_KEY = "ea6e3d0d2e74d10ac1e014d388770377";

const weather  = document.querySelector(".js-weather");

const coords = [];

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){;
        return response.json();
    })
    .then(function(json){
        console.log("json : " + JSON.stringify(json));
        const temperature = json.main.temp;
        const place = json.name;
        const country = json.sys.country;
        weather.innerText = `${temperature}(℃), ${place}, ${country}`;

        console.log("weather.innerText" + weather.innerText);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem( COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };

    console.log("coordsObj" + position.coords.longitude);

    saveCoords( coordsObj );
    getWeather(latitude, longitude);
}

function handleGeoError(position){
    console.log(position);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(
        handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    
    const loadCoords = localStorage.getItem(COORDS);
    // askForCoords();
    if( loadCoords === null ){
        askForCoords();
    }else{
        const parseCorrds = JSON.parse(loadCoords);

        console.log("parseCorrds" + parseCorrds.longitude);

        getWeather(parseCorrds.latitude, parseCorrds.longitude);
    }
}

function init(){
    loadCoords();
}

init();