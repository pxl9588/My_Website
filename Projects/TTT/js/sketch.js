var length = 420;
var g_array = [];
var Gameover = false;
var Winner;
var turns;
var r_sum;
var c_sum;
var d_sum;
var l_sum;

function setup() {
  turns = 0;
  var can = createCanvas(length,length);
  can.parent("canvas");
  g_array.push(new Cell(0,0));
  g_array.push(new Cell(140,0));
  g_array.push(new Cell(280,0));

  g_array.push(new Cell(0,140));
  g_array.push(new Cell(140,140));
  g_array.push(new Cell(280,140));

  g_array.push(new Cell(0,280));
  g_array.push(new Cell(140,280));
  g_array.push(new Cell(280,280));
}

function draw() {
  if(!Gameover){
    for(var i=1;i<3;i++){
      line((length/3)*i,0,(length/3)*i,length);
    }
    for(var i=1;i<3;i++){
      line(0,(length/3)*i,length,(length/3)*i);
    }
    //Win Condition Check
    var t = document.getElementById('turn');
    var c = document.getElementById('object');
    t.innerHTML = turns;
    !(turns%2) ? c.innerHTML = 'X' : c.innerHTML = 'O';
  }
  else{
    background(236,228,217);
    fill(0,225,0);
    textSize(45);
    text("The winner is " + Winner,10,150);
  }
}
function mousePressed(){
  for(var i =0; i<g_array.length; i++){
    s = g_array[i];
    if(s.check(mouseX,mouseY)){
      s.Fill();
    }
  }
  winCheck();
}

function Restart(){
  Gameover = false;
  g_array = [];
  setup();
}
function winCheck(){
  for(var i=0;i<g_array.length;i++){
    if(i%3 == 0){
      r_sum = 0;
    }
    if(i == 0){
      d_sum = g_array[0].value + g_array[4].value + g_array[8].value;
      if(d_sum == 3){
        Winner = "Circle";
        Gameover = true;
        console.log(Winner);
      }
      else if (d_sum == -3){
        Winner = "Cross";
        Gameover = true;
        console.log(Winner);
      }
    }
    if(i == 2){
      l_sum = g_array[2].value + g_array[4].value + g_array[6].value;
      if(l_sum == 3){
        Winner = "Circle";
        Gameover = true;
        console.log(Winner);
      }
      else if (l_sum == -3){
        Winner = "Cross";
        Gameover = true;
        console.log(Winner);
      }
    }
    if(i == 6 || i==7 || i == 8){
      c_sum = g_array[i].value + g_array[i-3].value + g_array[i-6].value;
      if(c_sum == 3){
        Winner = "Circle";
        Gameover = true;
        console.log(Winner);
      }
      else if (c_sum == -3){
        Winner = "Cross";
        Gameover = true;
        console.log(Winner);
      }
    }
    r_sum += g_array[i].value;

    if(r_sum == 3){
      Winner = "Circle";
      Gameover = true;
      console.log(Winner);
    }
    else if (r_sum == -3){
      Winner = "Cross";
      Gameover = true;
      console.log(Winner);
    }
  }
}
