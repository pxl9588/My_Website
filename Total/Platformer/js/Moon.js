function Moon(x,y,r){
  this.x = x;
  this.r = r;
  this.y = y;
  this.change= false;


  Moon.prototype.show = function () {
    fill(255);
    ellipse(this.x,this.y,this.r);
  }
  Moon.prototype.move = function(){
      if(this.x <= 0){
        this.change = true;
      }
      if(this.x >= 800){
        this.change = false;
      }
      if(this.change){
        this.x +=.5;
        this.y = sqrt(170000 -(this.x-400)*(this.x-400))+585;
      }
      else{
        this.x -=.5;
        this.y = -sqrt(170000 -(this.x-400)*(this.x-400))+585;
      }
  }
}
