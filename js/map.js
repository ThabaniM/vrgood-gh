
// Initialize and add the map
function initMap() {
  // The location -29.8327186, 30.8335537
  var location = {lat: -29.8327186, lng: 30.8335537};
  // The map, centered at 320 west street
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: location});
  // The marker, positioned at 320 west street
  var marker = new google.maps.Marker({position: location, map: map});
}