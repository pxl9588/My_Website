var board;
var snake;
var food;
var spot;
var gameOver;

var level = 4;
function setup() {
  var can = createCanvas(601,401);
  can.parent("canvas");
  board = new Board();
  board.init();
  snake = new Snake(15,10);
  spot = random(board.tiles);
  food = new Food(spot.x,spot.y);
  frameRate(level);
  gameOver = false;
}

function draw() {
  if(!gameOver){
    fill(0);
    rect(0,0,width,height);
    for(x in board.border){
      var temp = board.border[x];
      if(snake.headx*20 == temp.x && snake.heady*20 == temp.y){
        console.log("happened");
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
        if (taimp[0] == temp.x && taimp[1] == temp.y){
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
  }
  else{
    for(var i = 0; i<board.tiles.length;i++){
      board.tiles[i].gameOver();
    }
    textSize(64);
    fill(255,0,0);
    text("Game Over", 150,200);
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
}
function foodCheck(){
  if(snake.headx*20 == food.x && snake.heady*20 == food.y){
    snake.add();
    spot = random(board.tiles);
    while(spot.isOccupied){
      spot = random(board.tiles);
    }
    console.log(spot);
    food.update(spot.x,spot.y);
  }
}
