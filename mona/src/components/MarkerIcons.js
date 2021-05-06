import L from 'leaflet';

var sharedIconSize = [25, 41];
var sharediconAnchor = [12, 41];
var sharedPopupAnchor = [1, -34];
var sharedShadowSize = [0, 0];

//Stylized icon with a green color//
export var GreenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: sharedIconSize,
  iconAnchor: sharediconAnchor,
  popupAnchor: sharedPopupAnchor,
  shadowSize: sharedShadowSize
});

//Stylized icon with a blue color//
export var BlueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: sharedIconSize,
  iconAnchor: sharediconAnchor,
  popupAnchor: sharedPopupAnchor,
  shadowSize: sharedShadowSize
});
