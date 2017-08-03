function Player(){
  this.pos = createVector(25,475);
  this.isJumping = false;
  this.velocity = 0;
  this.direction = true;

  Player.prototype.jump = function () {
    if(!this.isJumping){
      this.velocity += 30;
      this.isJumping = true;
    }
  }

  Player.prototype.move = function (x) {
    if(x >= 0){
      this.direction = true;
    }
    else{
      this.direction = false;
    }
    this.pos.add(x,0);
  };

  Player.prototype.update = function () {
    this.velocity -= gravity;
    this.pos.add(0,-this.velocity);
    if(this.pos.y >= 475){
      this.pos.y = 475
      this.velocity = 0;
      this.isJumping = false;
    }
  };

  Player.prototype.show = function () {
    fill(255,0,255);
    rect(this.pos.x,this.pos.y,25,25);
    fill(255);
    rect(this.pos.x+5,this.pos.y-10,15,15);
    rect(this.pos.x,this.pos.y+20,5,10);
    rect(this.pos.x+20,this.pos.y+20,5,10);
    fill(0);
    if(!this.direction){
      rect(this.pos.x+7,this.pos.y-6,3,3);
      rect(this.pos.x+12,this.pos.y-6,3,3);
      strokeWeight(4);
      stroke(0);
      line(this.pos.x+23,this.pos.y+5,this.pos.x+14,this.pos.y+11);
      noStroke();
    }
    else{
      rect(this.pos.x+9,this.pos.y-6,3,3);
      rect(this.pos.x+14,this.pos.y-6,3,3);
      strokeWeight(4);
      stroke(0);
      line(this.pos.x,this.pos.y+5,this.pos.x+5,this.pos.y+11);
      noStroke();
    }

  };
}
