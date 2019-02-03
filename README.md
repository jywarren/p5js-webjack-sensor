# p5js WebJack sensor demo

A simple demo to show how to read from a sensor (connected to an [Arduino](https://arduino.cc)) in [p5js](https://p5js.org), and make a simple visualization.


## Share your own sketches!

Improve on this! Use better visuals, sound...? We;re happy to accept PRs to make a little gallery of sketches!


## Usage

See `script.js` for the full script, or this sketch in the p5js web editor: https://alpha.editor.p5js.org/jywarren/sketches/rkztwSt8M

```js
var profile = WebJack.Profiles["SoftModem"];
var connection = new WebJack.Connection(profile);

// runs every time a signal is 'heard'
connection.listen(function(data) {

  // do something with the 'data' value - should be between 0-255
  ellipse(400/2, 400 - (data * 5), 20, 20);

});
```



## Test it out without a sensor!

Test this even without an Arduino+sensor using this recorded audio:

https://www.youtube.com/watch?v=GtJW1Dlt3cg



![sensor](https://publiclab.org/system/images/photos/000/023/509/large/IMG_20180207_135242.jpg)

## Connect to a sensor with an Arduino

To use a real sensor, load this sketch onto an Arduino: 

https://create.arduino.cc/editor/jywarren/023158d8-be51-4c78-99ff-36c63126b554/preview

WebJack will output audio from pin 3 + ground. Use microphone or an audio cable.

Note: WebJack library has been added to index.html


## Webjack

WebJack is a way to read data from an Arduino (and other sources) using audio -- it basically turns your Arduino into an audio modem.

https://github.com/publiclab/webjack

