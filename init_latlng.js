//<![CDATA[

const WARSAW = { lat: 52.229639,  lng: 21.011353 };
const MADRID = { lat: 40.4167629, lng: -3.7037035 };

var mapOptions = {
    zoom: 15,
    center: MADRID,
    mapTypeId: 'hybrid'
};
var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('my_map'), mapOptions);

  var infowindow = new google.maps.InfoWindow({
        content: "dummy"
  });

  google.maps.event.addListener(
        map,
        'click',
        function (event) {
            infowindow.setContent("<strong>lat: </strong>" + event.latLng.lat()
                + "<br>"
                + "<strong>lng: </strong>" + event.latLng.lng());
            infowindow.setPosition(event.latLng);
            infowindow.open(map);
  });
}//initMap()

window.onload = initMap;
//window.onunload = GUnload;

//]]>
