var mymap = L.map('mapid').setView([19.708095, -155.595600], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXJuc2hvdyIsImEiOiJja2dsZmZ2bzUwMzRkMnFwNHYyb2lvcnJ3In0.iNMqv-atm9k85t9xSc45hw'
}).addTo(mymap);
var markersContainer = [];

function onMapClick(event) {
    markersContainer.push(L.marker(event.latlng).addTo(mymap));
    console.log(markersContainer);
}
mymap.on('click', onMapClick)