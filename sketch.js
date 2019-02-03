// WebJack is a way to read data from an Arduino (and other sources)
// using audio -- it basically turns your Arduino into an audio modem.
// 
// https://github.com/publiclab/webjack
// Test this even without an Arduino+sensor using this recorded audio:
// https://www.youtube.com/watch?v=GtJW1Dlt3cg
// To use a real sensor, load this sketch onto an Arduino: 
// https://create.arduino.cc/editor/jywarren/023158d8-be51-4c78-99ff-36c63126b554/preview
// WebJack will output audio from pin 3 + ground. Use microphone or an audio cable.
// Note: WebJack library has been added to index.html

// improve on this! use better visuals, sound...?

function setup() { 
  createCanvas(400, 400);
  noStroke();
  fill('#ff00aa22');
} 

// https://github.com/publiclab/webjack/blob/master/src/profiles.js
var profile = WebJack.Profiles["SoftModem"];
var connection = new WebJack.Connection(profile);

// runs every time a signal is 'heard'
connection.listen(function(data) {
  
  //background(220);
  ellipse(400/2, 400 - (data * 5), 20, 20);

});
