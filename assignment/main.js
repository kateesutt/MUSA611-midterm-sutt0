
var dataset = "https://raw.githubusercontent.com/kateesutt/MUSA611-midterm-sutt0/master/data/SEPTA__Fall_2019_Routes.geojson"

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData).addTo(map);
  });
});
