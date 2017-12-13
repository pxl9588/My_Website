function Snake(x,y){
  this.tail = new Array();
  this.headx = x;
  this.heady = y;
  this.xvel = 0;
  this.yvel = 0;

  Snake.prototype.draw = function () {
    fill(127,51,78);
    rect(this.headx*20,this.heady*20,20,20);
    this.head();
    for(var i =0; i<this.tail.length;i++){
      fill(127,51,78)
      rect(this.tail[i][0]*20,this.tail[i][1]*20,20,20);
    }
  }
  Snake.prototype.head = function(){
    noStroke();
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
    this.headx += this.xvel
    this.heady += this.yvel
    this.draw();
    this.follow();
  }
  Snake.prototype.direction = function(x,y){
    if((x + this.xvel != 0) || (y + this.yvel != 0 )){
      this.xvel = x;
      this.yvel = y;
    }
  }
  Snake.prototype.add = function(){
    var x = this.headx;
    var y = this.heady;
    if(this.xvel == 1){
      this.tail.push([x-20,y]);
    }
    else if (this.xvel == -1){
      this.tail.push([x+20,y]);
    }
    else if(this.yvel == 1){
      this.tail.push([x,y-20]);
    }
    else{
      this.tail.push([x,y+20]);;
    }
  }
  Snake.prototype.follow = function(){
    for (var i = this.tail.length-1; i > 0; i--) {
      this.tail[i][0] = this.tail[i-1][0];
      this.tail[i][1] = this.tail[i-1][1];
    }
    if(this.tail.length >= 1){
      this.tail[0][0] = this.headx;
      this.tail[0][1] = this.heady;
    }
  }
}
