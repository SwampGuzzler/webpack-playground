
function map() {
  var mapboxgl = require('mapbox-gl');
  mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNjb3RuZXIiLCJhIjoiSFFmUDZrayJ9.C6Fipocs9wmD7J6xOtrzaA';
  var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
      center: [-74.50, 40], // starting position
      zoom: 9 // starting zoom
  });
};

module.exports = map;
