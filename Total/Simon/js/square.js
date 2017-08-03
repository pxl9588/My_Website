function square(i,j,l){
  this.length = l;
  this.i = i;
  this.j = j;
  this.picked = false;


  square.prototype.make = function() {
    if(this.i%2){
      if(this.j%2){
        fill(255,0,0,100);
      }
      else{
        fill(0,255,0,150);
      }
    }
    else{
      if(this.j%2){
        fill(0,0,255,150);
      }
      else{
        fill(255,255,0,150);
      }
    }
    rect(this.i*this.length,this.j*this.length,this.length,this.length);
  }

  square.prototype.highlight = function(){
    this.picked = true;
    fill(0,255,255,200);
    rect(this.i*this.length,this.j*this.length,this.length,this.length);
  }
  square.prototype.contains = function(x,y){
    return (x > this.i*this.length && x < this.i*this.length+this.length && y > this.j*this.length && y < this.j*this.length+this.length )
  }
  square.prototype.check = function(){
    s = temp.pop();
    return this.i == s.i && this.j == s.j;
  }
}
