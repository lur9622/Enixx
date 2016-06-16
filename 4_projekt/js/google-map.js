function initialize() {
  var map_center = {lat: 50.293406, lng: 18.818578};
  var marker1 = {lat: 50.290086, lng: 18.669609};
  var marker2 = {lat: 50.294513, lng: 18.955421};
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
    zoom: 11,
    center: map_center,
    scrollwheel: false
  });
  map.setOptions({styles: styles});
  var marker1 = new google.maps.Marker({
    position: marker1,
    map: map,
    title: 'Gliwice',
    icon: './img/map_marker.png'
  });
  var marker2 = new google.maps.Marker({
    position: marker2,
    map: map,
    title: 'Chorzów',
    icon: './img/map_marker.png'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);


