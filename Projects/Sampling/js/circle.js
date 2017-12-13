function Circle(x,y){
  this.x = x;
  this.y = y;

  Circle.prototype.draw = function () {
    fill(255,0,0);
    ellipse(this.x,this.y,25,25);
  };
}
