function Stars(x,y){
  this.x = x;
  this.y = y;

  Stars.prototype.show = function (i) {
    fill(255,i*255);
    rect(this.x,this.y,5,5);
  }
}
