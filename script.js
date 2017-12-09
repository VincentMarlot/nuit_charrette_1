console.log('coucou')


var n = 6;
var section = document.getElementById('game');
var currentObstacle = 0;
var currentCar = 0;

for (var i=0; i < Math.pow(n,2); i++) {
  var div = document.createElement('div');
  div.setAttribute('id', i);
  section.appendChild(div);
}

var currentObstacleX= getRandomArbitrary(0,5);
var currentObstacleY= 0;
var obstacle= document.createElement('img');
img.setAttribute('src', "tay.jpg" );
img.setAttribute('height', "20%" );
img.setAttribute('width', "20%" );

display(currentObstacleX , currentObstacleY, obstacle);

function getRandomArbitrary(min, max) {

  return Math.random() * (max - min) + min;
}


function display (x, y, element) {
  //recuperation
  document.getElementById(currentObstacle).innerHTML="";
  var position = (y * n + x);
  if (true === hasCollide()){
    perdu();
  } else {
    document.getElementById(position).appendChild(element);
    currentObstacle = position;
  }
}

}
