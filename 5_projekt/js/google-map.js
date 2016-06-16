function initialize() {
  var map_center = {lat:52.271746,lng:  21.044778};
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
    zoom: 15,
    center: map_center,
    scrollwheel: false
  });
  map.setOptions({styles: styles});
  var marker1 = new google.maps.Marker({
    position: map_center,
    map: map,
    title: 'Gliwice',
  });

}
google.maps.event.addDomListener(window, 'load', initialize);


