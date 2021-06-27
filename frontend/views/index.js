var map = L.map('map').setView([49.2827, -123.1207], 10);
  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=uSb3pbKtGymmXLDpb0XX',{
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: true
}).addTo(map);

var coordinates = 0;

var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      map.setView([position.coords.latitude, position.coords.longitude], 10);
    })
  }
}

function onMapClick(e) {
  coordinates = e.latlng;
  location_package = {
    "lat": String(coordinates.lat),
    "lng": String(coordinates.lng),
  }

  function get_api(callback) {
    var obj;
    fetch('http://localhost:3000/coordinates', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(location_package) })
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => callback(obj));
  }
  
  function get_data(json) {
    document.getElementById('Timezone').innerHTML = "Timezone: " + json.timezone;
    document.getElementById('Time').innerHTML = "Weather Data on Date: " + datetime + " (EST)";
    document.getElementById("Temperature").innerHTML = "Temperature (°C): " + json.current.temp;
    document.getElementById("Humidity").innerHTML = "Humidity (%): " + json.current.humidity;
    document.getElementById("Pressure").innerHTML = "Sea Level Pressure (hPa): " + json.current.pressure;
    document.getElementById("Dew Point").innerHTML = "Dew Point (°C): " + json.current.dew_point;
    document.getElementById("Weather Condition").innerHTML = "Weather Condition: " + json.current.weather[0].main;
    document.getElementById("Wind Speed").innerHTML = "Windspeed (m/s): " + json.current.wind_speed;
    document.getElementById("Wind Direction").innerHTML = "Wind Direction (°): " + json.current.wind_deg;
    document.getElementById('Visibility').innerHTML = "Visibility (m): " + json.current.visibility;
    document.getElementById('Cloudiness').innerHTML = "Cloudiness (%): " + json.current.clouds;
    document.getElementById('UVI').innerHTML = "UV Index: " + json.current.uvi;
  }

  get_api(get_data);

  document.getElementById("Latitude").innerHTML = coordinates.lat;
  document.getElementById("Longitude").innerHTML = coordinates.lng;

  popup = L.popup()
        .setLatLng([coordinates.lat, coordinates.lng])
        .setContent("Here!")
        .openOn(map);
}

getLocation()
map.on('click', onMapClick);
