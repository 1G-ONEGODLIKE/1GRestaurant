var map = L.map('map').setView([18.7973, 98.95219],18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords = [[18.79915, 98.95064], [18.7973, 98.95219]];
resname  = ['Customer', 'You'];

let cl = coords.length;

for (let i = 0; i < cl; i++) {

    // Popups 
    var pop = L.popup ({
        closeOnClick: true
    }).setContent(i == 0 ? '<strong>Customer Location</strong>' : '<strong>Your Restaurant</strong>');

    // Markers
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);

    if (i == 1) {
        marker._icon.classList.add("blink");
        setInterval(function() {
            marker._icon.classList.toggle("blink");
        },800); // Set the blinking interval to 500 milliseconds
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
        radius: 30,
        color: 'lightblue',
    }).addTo(map);
    
    for (let i = 1; i < cl; i++) {
        var circle = L.circle(coords[i], {
            radius: 50,
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
}