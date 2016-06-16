function initialize() {
  var map_center = {lat: 52.4010771, lng: 16.9064394};
  var marker1 = {lat: 52.4001803, lng: 16.9145718};
  var styles = [
    {
      stylers: [
       { "saturation": -100 },
      { "lightness": -35 }
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
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: map_center,
    scrollwheel: false,
		disableDefaultUI: true
  });
  map.setOptions({styles: styles});
  var marker1 = new google.maps.Marker({
    position: marker1,
    map: map,
    icon: './img/marker.png'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
