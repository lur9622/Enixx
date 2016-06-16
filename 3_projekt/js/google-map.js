function initialize() {
  var mapCanvas = document.getElementById('s_google');
  var mapOptions = {
    center: new google.maps.LatLng(52.398770, 16.926378),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel:false
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);
