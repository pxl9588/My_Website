var board;
var width;
var height;
var snake;
var food;
var spot;
var paused;
var playing;
var gameOver;
var level;

function setup() {
  width = 600;
  height = 400;
  var can = createCanvas(width,height);
  can.parent("canvas");
  board = new Board(width/20,height/20);
  board.init();
  snake = new Snake(width/40,height/40);
  spot = random(board.tiles);
  food = new Food(spot.x,spot.y);
  frameRate(level);
  gameOver = false;
  paused = false;
  playing = false;
}

function draw() {
  if(!playing){
    for(var i = 0; i<board.tiles.length;i++){
      board.tiles[i].gameOver();
    }
    textSize(48);
    fill(255);
    text("Choose a difficulty", 100,150);
    text("Press Start to begin", 100,250);
  }
  else{
    noStroke();
    if(!gameOver){
      if(paused){
        for(var i = 0; i<board.tiles.length;i++){
          console.log("paused");
          board.tiles[i].gameOver();
        }
        textSize(64);
        fill(255,0,0);
        text("Game Paused", 100,200);
        textSize(24);
        fill(255,255,0);
        text("Resume by pressing Any button",150,300);
      }
      else{
        fill(0);
        rect(0,0,width,height);
        for(x in board.border){
          var temp = board.border[x];
          if(snake.headx*20 == temp.x && snake.heady*20 == temp.y){
            gameOver = true;
          }
          temp.make();
        }
        for (x in board.tiles){
          var temp = board.tiles[x];
          if(snake.headx == temp.x && snake.heady == temp.y){
            temp.isOccupied = true;
          }
          else{
            temp.isOccupied = false;
          }
          for(var i = 0; i < snake.tail.length;i++){
            var taimp = snake.tail[i];
            if (taimp.x == temp.x && taimp.y == temp.y){
              temp.isOccupied = true;
            }
            else{
              temp.isOccupied = false;
            }
          }
          temp.make();
        }
        snake.update();
        food.make();
        foodCheck();
        snakeCheck();
      }
    }
    else{
      for(var i = 0; i<board.tiles.length;i++){
        board.tiles[i].gameOver();
      }
      textSize(64);
      fill(255,0,0);
      text("Game Over", 150,200);
      textSize(24);
      fill(255,255,0);
      text("Difficulty can be changed during this time",100,300);
    }
  }
}
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    snake.direction(-1,0);
  } else if (keyCode == RIGHT_ARROW) {
    snake.direction(1,0);
  }
  else if (keyCode == UP_ARROW) {
    snake.direction(0,-1);
  }
  else if (keyCode == DOWN_ARROW) {
    snake.direction(0,1);
  }
  paused = false;
}
function keyTyped (){
  if (key == 'a') {
    snake.direction(-1,0);
  } else if (key == 'd'){
    snake.direction(1,0);
  }
  else if (key == 'w') {
    snake.direction(0,-1);
  }
  else if (key == 's') {
    snake.direction(0,1);
  }
}
function foodCheck(){
  if(snake.headx*20 == food.x && snake.heady*20 == food.y){
    snake.add();
    spot = random(board.tiles);
    while(spot.isOccupied){
      spot = random(board.tiles);
    }
    food.update(spot.x,spot.y);
  }
}
function snakeCheck(){
  for(var i = 0; i<snake.tail.length;i++){
    if(snake.headx == snake.tail[i].x && snake.heady == snake.tail[i].y){
      gameOver = true;
    }
  }
}
function easy(){
  level = 10;
  var but = document.getElementById('easy');
  but.onclick = function(){ return false;}
}
function medium(){
  level = 20;
  var but = document.getElementById('medium');
  but.onclick = function(){ return false;}
}
function hard(){
  level = 25;
  var but = document.getElementById('hard');
  but.onclick = function(){ return false;}
}
function impossible(){
  level = 40;
  var but = document.getElementById('impossible');
  but.onclick = function(){ return false;}
}
function start(){
  setup();
  playing = true;
  var but = document.getElementById('start');
}
function pause(){
  snake.pause();
  paused = true;
}
