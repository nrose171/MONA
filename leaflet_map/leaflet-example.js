/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).

 Just put the script tag below the map div.

 The source code below is the example from the leaflet start page.
 */

 // center of the map
var center = [-34.43537, 150.45502];

// Create the map
var map = L.map('map').setView(center, 10);

// Set up the OSM layer
// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
//     maxZoom: 18
//   }).addTo(map);

// add a marker in the given location
//L.marker(center).addTo(map);
L.marker([-34.55648, 150.31769]).addTo(map);

var imageUrl = 'mona_map.png',
imageBounds = [center, [-34.67063, 150.21057]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);

// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// 		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
// 		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
// 		.openPopup();
//
// 		function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

var photoImg = '<img src="mona_lisa.jpg" height="100px" width="100px"/>';

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<center>Mona Lisa</center>" + "</br>"+ photoImg)
        .openOn(map);
}

map.on('click', onMapClick);
