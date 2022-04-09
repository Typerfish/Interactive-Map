// Find Location
navigator.geolocation.getCurrentPosition(function(location) {
    const latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
     alert(latlng);
    const myMap = L.map('map', {
        center: latlng,
        zoom: 12,
    });
    // Create Map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15'
    }).addTo(myMap);

    // Marker
    const marker = L.marker(latlng).addTo(myMap);
    marker.bindPopup("You are <strong>here</strong>").openPopup()
  });

  // Drop Down | FourSquare
  const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.foursquare.com/v3/places/search', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  