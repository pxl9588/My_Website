function Food(x,y){
  this.x = x;
  this.y = y;

  Food.prototype.make = function(){
    noStroke();
    fill(61,219,61);
    ellipse(this.x+11,this.y+11,15,15);
  }
  Food.prototype.update = function(x,y){
    this.x = x;
    this.y = y;
  }
}
