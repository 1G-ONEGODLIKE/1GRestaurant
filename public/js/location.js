var map = L.map('map').setView([18.79915, 98.95064],18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords = [[18.79915, 98.95064], [18.7973, 98.95219], [18.79399, 98.95036], [18.79436, 98.94842]];
resname  = ['You', '1', '2', '3']

let cl = coords.length;

for (let i = 0; i < cl; i++) {

    // Popups 
    var pop = L.popup ({
        closeOnClick: true
    }).setContent(i == 0 ? '<strong>Your location</strong>' : '<strong>Restaurant</strong>')

    // Markers
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);

    if (i == 0) {
        marker._icon.classList.add("blink");
    }

    /// Change marker icon for 1,2,3
  if (i > 0) {
    marker.setIcon(
      L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28]
      })
    );
  }

    // Circles
    var blueCircle = L.circle(coords[0], {
        radius: 50,
        color: 'lightblue',
    }).addTo(map);
    
    for (let i = 1; i < cl; i++) {
        var circle = L.circle(coords[i], {
            radius: 30,
            color: 'gold',
        }).addTo(map);
    }

    // Labels
    var toollip  = L.tooltip({
        permanent: true
    }).setContent(resname[i]);
    marker.bindTooltip(toollip);

    // route with Polygon
    var route = L.polygon([
        [18.79915, 98.95064],
        [18.79914, 98.95097]
    ], { color: 'blue' }).addTo(map);
    var route = L.polygon([
        [18.79914, 98.95097],
        [18.79895, 98.95098]
    ], { color: 'blue' }).addTo(map);
    var route = L.polygon([
        [18.79895, 98.95098],
        [18.7988, 98.95107]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.7988, 98.95107],
        [18.79891, 98.95137]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79891, 98.95137],
        [18.79683, 98.95125]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79683, 98.95125],
        [18.79669, 98.95223]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79669, 98.95223],
        [18.79729, 98.95229]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79729, 98.95229],
        [18.7973, 98.95219]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79683, 98.95125],
        [18.79699, 98.950335]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79699, 98.950335],
        [18.79622, 98.950265]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79622, 98.950265],
        [18.79531, 98.95023]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79531, 98.95023],
        [18.79521, 98.95024]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79521, 98.95024],
        [18.79466, 98.950225]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79466, 98.950225],
        [18.79448, 98.9502]
    ], { color: 'blue' }).addTo(map);
    var route = L.polygon([
        [18.79448, 98.9502],
        [18.79444, 98.95032]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79444, 98.95032],
        [18.79416, 98.95032]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79416, 98.95032],
        [18.79414, 98.95037]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79414, 98.95037],
        [18.79399, 98.95036]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79416, 98.95032],
        [18.79449, 98.948585]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79449, 98.948585],
        [18.79434, 98.94857]
    ], { color: 'blue' }).addTo(map);

    var route = L.polygon([
        [18.79434, 98.94857],
        [18.79436, 98.94842]
    ], { color: 'blue' }).addTo(map);

}