console.log('coucou');

var tableCell = document.querySelectorAll('ul li');
var gamingZone = document.querySelector('.gaming_zone');

var gamingZoneSize = 1000;

//gamingZone.style.height = " "gamingZoneSize + "px";
//gamingZone.style.width = " "gamingZoneSize + "px";

var nb_item = 5;

//webstorm  autosave

for (var i = 1, limit=Math.pow(nb_item,2) ; i <= limit; i++){
  var square = document.createElement('div');
  gamingZone.appendChild(square);
}
