function Cloud(x,y){
  this.x = x;
  this.y = y;

  Cloud.prototype.show = function () {
    fill(255);
    rect(this.x,this.y,30,10);
    rect(this.x+5,this.y-5,10,5);
  }
  Cloud.prototype.update = function(x){
      this.x -= random(2);
  }
}
