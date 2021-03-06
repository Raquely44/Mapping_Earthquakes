// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

//L.geoJSON(geojsonFeature).addTo(map);
// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

// using pointToLayer method for popup
// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country, "</h3>")
//     }

//   }).addTo(map);

// using onEachFeature for pop up
// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<b>" + "Airport code: " + feature.properties.faa + "<hr>" + "Airport name: " + feature.properties.name + "</b>");
//     }
// }).addTo(map);

// Coordinates for each point to be used in the line.
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
// ];
// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     weight: 4,
//     opacity: 0.5,
//     dashArray: 8,
//   }).addTo(map);

// Create the map object with a center and zoom level. (another way when you add layers or an image)
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Raquely44/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data.features[0].properties);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data)
    .bindPopup("<b>" + "Airport code: " + data.features[0].properties.faa + "<hr>" + "Airport name: " + data.features[0].properties.name + "</b>")
    .addTo(map);
})

//pointToLayer: function(feature, latlng) {
    //       console.log(feature);
    //       return L.marker(latlng)
    //       .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country, "</h3>")
    //     }
    
    //   }).addTo(map);

//  Add a marker to the map for Los Angeles, California. (add one marker at a time)
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add circle marker
// L.circle([34.0522, -118.2437], {
//     color: "black",
//     fillColor: '#ffffa1',
//     radius: 300
// }).addTo(map)

// adding more than one marker

// Get data from cities.js
//et cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "Orange",
//         fillColor: '#ffffa1',
//         //stroke = true,
//         weight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);