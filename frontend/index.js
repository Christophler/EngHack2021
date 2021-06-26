
var map = L.map('map').setView([49.2827, -123.1207], 10);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=uSb3pbKtGymmXLDpb0XX',{
tileSize: 512,
zoomOffset: -1,
minZoom: 1,
attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
crossOrigin: true
}).addTo(map);

var coordinates = 0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      map.setView([position.coords.latitude, position.coords.longitude], 10);
    })
  }
}

function onMapClick(e) {
  //console.log("You clicked the map at " + e.latlng);
  coordinates = e.latlng;
  document.getElementById("Latitude").innerHTML = coordinates.lat;
  document.getElementById("Longitude").innerHTML = coordinates.lng;

  popup = L.popup()
        .setLatLng([coordinates.lat, coordinates.lng])
        .setContent("You clicked here!")
        .openOn(map);
}

getLocation()
map.on('click', onMapClick);