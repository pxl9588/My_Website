function Snake(x,y){
  this.tail = new Array();
  this.headx = x;
  this.heady = y;
  this.total = 0;
  this.xvel = 0;
  this.yvel = 0;

  Snake.prototype.draw = function () {
    this.head();
    for(var i=0; i<this.tail.length;i++){
      noStroke();
      fill(127,51,78)
      rect(this.tail[i].x*20,this.tail[i].y*20,20,20);
    }
  }
  Snake.prototype.head = function(){
    fill(127,51,78);
    rect(this.headx*20,this.heady*20,20,20);
    if(this.xvel == 1){
      fill(255,0,0);
      rect(this.headx*20+20,this.heady*20+10,5,3);
      fill(255);
      rect(this.headx*20+13,this.heady*20+2,5,5);
      rect(this.headx*20+13,this.heady*20+13,5,5);
    }
    else if (this.xvel == -1){
      fill(255,0,0);
      rect(this.headx*20-5,this.heady*20+10,5,3);
      fill(255);
      rect(this.headx*20+2,this.heady*20+2,5,5);
      rect(this.headx*20+2,this.heady*20+13,5,5);
    }
    else if(this.yvel == 1){
      fill(255,0,0);
      rect(this.headx*20+9,this.heady*20+20,3,5);
      fill(255);
      rect(this.headx*20+2,this.heady*20+13,5,5);
      rect(this.headx*20+13,this.heady*20+13,5,5);
    }
    else{
      fill(255,0,0);
      rect(this.headx*20+9,this.heady*20-5,3,5);
      fill(255);
      rect(this.headx*20+2,this.heady*20+2,5,5);
      rect(this.headx*20+13,this.heady*20+2,5,5);
    }
    stroke(0);
  }
  Snake.prototype.update = function(){

    if(this.total == this.tail.length){
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.headx,this.heady);

    this.headx += this.xvel;
    this.heady += this.yvel;

    if(this.l < 9){
      this.headx = constrain(this.headx,1,28);
      this.heady = constrain(this.heady,1,18);
    }
    this.draw();
  }
  Snake.prototype.direction = function(x,y){
    if((x + this.xvel != 0) || (y + this.yvel != 0 )){
      this.xvel = x;
      this.yvel = y;
    }
  }

  Snake.prototype.add = function(){
    this.total++;
  }
  Snake.prototype.pause = function(){
    snake.xvel = 0;
    snake.yvel = 0;
  }
}
