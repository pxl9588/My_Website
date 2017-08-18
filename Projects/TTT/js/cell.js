function Cell (x,y){
  this.neighbors = [];
  this.x = x;
  this.y = y;
  this.length = length/3;
  this.filled = false;
  this.value = 0;


  Cell.prototype.check = function (x,y) {
    if(x >= this.x && x <= (this.length+this.x) && y >= this.y && y <= (this.length+this.y)){
      return true;
    }
  };
  /*Cell.prototype.winCondition = function () {
    if(this.)
  };*/
  Cell.prototype.Fill = function () {
    if(!this.filled){
      if(turns%2){
        fill(0,0);
        ellipse(this.x+70,this.y+70,100);
        this.value = 1;
      }
      else{
        line(this.x+25,this.y+15,this.x+115,this.y+125);
        line(this.x+115,this.y+15,this.x+25,this.y+125);
        this.value = -1;
      }
      this.filled = true;
      turns++;
    }
  };
}
