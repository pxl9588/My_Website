var gravity = 3;
var player;
var ground;
var x_can;
var y_can;
var x_or;
var y_or;
var opposite;
var hype;
var clouds = new Array();
var floors = new Array();
var stars = new Array();
var sun;
var adj;
var moon;
x_can = 800;
x_or = x_can/2;
y_or = 500;
y_can = 600;

function setup(){
  createCanvas(x_can,y_can);
  noStroke();
  player = new Player();
  ground = new Ground();
  sun = new Sun(x_can,y_can-100,50);
  moon = new Moon(0,500,50);
  for(var i =0;i<50;i++){
    clouds.push(new Cloud(floor(random(0,10000)),floor(random((50,300)))));
  }
  for(var i = 0;i<200;i++){
    stars.push(new Stars(floor(random(0,800)),floor(random((0,250)))));
  }
  for(var i = 0;i<100;i++){
    floors.push(new Floor());
  }
  frameRate(50);
}
function draw(){
  opposite = y_or - sun.y;
  adj = abs(x_or - sun.x);
  hyp = floor(sqrt(opposite*opposite + abs(x_or-sun.x)*abs(x_or-sun.x)));
  background(0,160*(opposite/hyp),255*(opposite/hyp));
  sun.show()

  for(s in stars){
    stars[s].show((opposite < 0) ? 1: pow(adj/hyp,3));
  }
  for(f in floors){
    floors[f].show();
  }
  moon.show();
  for(c in clouds){
    clouds[c].show();
    clouds[c].update();
  }
  sun.move();
  moon.move();
  ground.show();
  player.show();
  player.update();
  if(keyIsDown(RIGHT_ARROW)){
    if(player.pos.x >= x_can/2){
      translate(-player.pos.x,0);
    }
    else{
      player.move(5);
    }
    for(f in floors){
      floors[f].move(-5);
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(player.pos.x <= 50){
      translate(player.pos.x,0);
    }
    else{
      player.move(-5);
    }
    for(f in floors){
      floors[f].move(5);
    }
  }
}
function keyPressed(){
  if (key == ' '){
    player.jump();
  }
}
