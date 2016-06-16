function initialize() {
  var map_center = {lat: 52.461270, lng: 16.909408};
  var marker1 = {lat: 52.462172, lng: 16.909548};
  var styles = [
    {
      stylers: [
        { hue: "#000" },
        { saturation: -255}
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 20 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var map = new google.maps.Map(document.getElementById('google_map'), {
    zoom: 16,
    center: map_center,
    scrollwheel: false
  });
  map.setOptions({styles: styles});
  var marker1 = new google.maps.Marker({
    position: marker1,
    map: map,
    title: 'Przedszkole',
    icon: './img/google_marker.png'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

