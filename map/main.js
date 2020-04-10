
// var dataset = "https://raw.githubusercontent.com/kateesutt/MUSA611-midterm-sutt0/master/data/SEPTA__Fall_2019_Routes.geojson"
//
// $(document).ready(function() {
//   $.ajax(dataset).done(function(data) {
//     var parsedData = JSON.parse(data);
//     featureGroup = L.geoJson(parsedData).addTo(map);
//   });
// });


$.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/geojson/philadelphia-crime-points.geojson').done(function(data) {
  crimeData = JSON.parse(data)
