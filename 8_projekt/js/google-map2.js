function initialize() {
  var map_center = {lat:52.3985602,lng:16.93537};
  var image = 'img/marker.png';
  var marker_position = {lat:52.390469,lng:16.8929426};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: map_center,
    scrollwheel: false,
    styles: [{
      stylers: [{
        saturation: -100
      }]
    }],
    disableDefaultUI: true
  });
  
  var marker = new google.maps.Marker({
    position: marker_position,
    map: map,
    icon: image
  });
  
}
google.maps.event.addDomListener(window, 'load', initialize);