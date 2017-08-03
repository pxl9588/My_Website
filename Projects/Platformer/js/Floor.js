function Floor(){
  this.pos = createVector();
  this.pos.x = random(50,10000);
  this.pos.y = random(400,475)
  this.width = random(25,100)
  this.height = random(25,50)

  Floor.prototype.show = function () {
    //Grass
    fill(0,255,0);
    rect(this.pos.x,this.pos.y-10,this.width,this.height);
    //Dirt
    fill(139,69,19);
    rect(this.pos.x,this.pos.y,this.width,this.height-5);
  }
  Floor.prototype.move = function(x){
    this.pos.add(x,0);
  }
}
