function initialize() {
  var map_center = {lat:51.919438,lng:19.145136};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: map_center,
    scrollwheel: false
  });
}
google.maps.event.addDomListener(window, 'load', initialize);