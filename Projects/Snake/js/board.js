function Board(x,y){
  this.width = x;
  this.height = y;
  this.tiles = new Array();
  this.border = new Array();

  Board.prototype.init = function () {
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j <this.height; j++) {
        if(i == 0 || j == 0 || i == this.width-1 || j == this.height-1){
          this.border.push(new Tile(i*20,j*20,true));
        }
        else {
          this.tiles.push(new Tile(i*20,j*20,false));
        }
      }
    }
  };
}
