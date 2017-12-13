var height;
var width;
var sample;
var time;
var startx;
var starty;
var count;
var circles;
var temp;

function setup() {
  circles = new Array();
  width = 600;
  height = 400;
  var can = createCanvas(width,height,WEBGL);
  can.parent("canvas");
  background(51);
  frameRate(10);
  sample = document.getElementById("usr").value;
  if (document.getElementById("2").checked){
      count = 2;
    }
  else if (document.getElementById("4").checked){
    count = 4;
  }
  else count = 1;
  for (var i = 0; i < count; i++) {
    if(i == 0){
        startx = 75;
        starty = 0;
      }
    else if (i== 1){
        startx = -75;
        starty = 0;
      }
      else if(i==2){
        startx = 0;
        starty = 75;
      }
      else if(i ==3){
        startx = 0;
        starty = -75;
      }
      temp = new Circle(startx,starty);
      circles.push(temp);
  }
}

function draw() {
  time = millis()/1000;
  rotateZ(time*2*PI*sample);
  fill(255);
  ellipse(0,0,200,200);
  fill(255,0,0);
  for (var i = 0; i < circles.length; i++) {
    circles[i].draw();
  }
}
function start(){
  setup();
  var but = document.getElementById('start');
}
