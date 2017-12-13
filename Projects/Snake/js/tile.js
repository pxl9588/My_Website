function Tile(x,y,b){
  this.width = 20;
  this.x = x;
  this.y = y;
  this.isOccupied = false;
  this.isBorder = b;

  Tile.prototype.make = function () {
    if(this.isBorder){
      fill(89,127,150);
    }
    else{
      fill(236,228,217);
    }
    noStroke();
    rect(this.x,this.y,this.width,this.width);
  };

  Tile.prototype.gameOver = function(){
    fill(0);
    rect(this.x,this.y,this.width,this.width);
  }
}
