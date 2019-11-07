
var input;
var response;

function setup() {
  response = "";
  input = document.getElementById("usr").value;
  var words = input.split(" ");
  for(var word_index = 0; word_index < words.length; word_index++){
    var word = words[word_index]
    var len = word.length;
    var remaining_conversion = Math.floor(len/2) + len % 2;
    for(var character_index = 0; character_index < len; character_index++)
    {
      var chr = word.charAt(character_index);
      var chance_to_hit = remaining_conversion / (len - character_index);
      if(chr == '.' || chr == ',' || chr == '\'')
      {
        response += chr
      }
      else
      {
        if(Math.random(0,1) <= chance_to_hit)
        {
          if(chr == chr.toUpperCase())
          {
            response += chr.toLowerCase()
          }
          else
          {
            response += chr.toUpperCase()
          }
          remaining_conversion--;
        } // end of chance to hit if
        else
        {
          //If not converted, just add it to string
          response += chr;
        }
      } // end of character check if
    } // end of character in word loop
    response += " "
  } // end of word loop
}

function start(){
  setup();
  var but = document.getElementById('converted');
  but.innerHTML = response;
}