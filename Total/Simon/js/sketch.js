var squares = new Array();
var his = new Array();
var temp = new Array();
var total = 0;
var b = false;
var cont = false;
var playing = false;
var Gameover = false;
var length = 501;

function setup() {
  noStroke();
  var can = createCanvas(length,length);
  can.parent("canvas");

  for(var i = 0; i<2;i++){
    for(var j = 0; j<2;j++){
      s = new square(i,j,length/2);
      squares.push(s);
    }
  }
  frameRate(5);
}

function draw() {
  fill(255);
  rect(0,0,500,500);
  for(i in squares){
    squares[i].make();
  }
  if(cont && temp.length == 0 && !Gameover){
    add();
    flash();
    var score = document.getElementById('score');
    score.innerHTML = "Score: " + total;
  }
  if(Gameover){
    var score = document.getElementById('score');
    score.style.color = "red";
    score.innerHTML = "Game over! Final Score: " + total;
  }
}
function mousePressed(){
  for(var i =0; i<4;i++){
    s = squares[i];
    if(s.contains(mouseX,mouseY) && !Gameover){
      s.highlight();
      console.log("Clicked");
      if(!s.check()){
        Gameover = true;
      }
      else cont = true;
    }
  }
}
function flash(){
  var i =0;
  var interval = setInterval(function () {
    his[i].highlight();
    console.log("FLASHED");
    i++;
    if (i >= his.length) {
 clearInterval(interval);
        }
  }, 500);
}
function add(){
  var i = random(squares);
  his.push(i);
  temp = his.slice();
  reverse(temp);
  total++;
  cont = false;
  flash();
}
function start(){
  cont = true;
  var but = document.getElementById('play_button');
  but.onclick = function(){ return false;}
}
