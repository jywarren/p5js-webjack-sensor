# p5js WebJack sensor demo

A simple demo to show how to read from a sensor (connected to an [Arduino](https://arduino.cc)) in [p5js](https://p5js.org), and make a simple visualization.


## Share your own sketches!

Improve on this! Use better visuals, sound...? We're happy to [accept PRs](https://github.com/jywarren/p5js-webjack-sensor/pulls) to make a little gallery of sketches!

Read more at this blog post: https://publiclab.org/notes/warren/02-08-2018/visualize-live-sensor-data-with-p5js-and-an-arduino


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

To use a real sensor, load one of these sketches onto an Arduino: 

* Shinyei particulate air sensor: [create.arduino.cc link](https://create.arduino.cc/editor/jywarren/023158d8-be51-4c78-99ff-36c63126b554/preview)
* Plantower particulate air sensor: [gist link](https://gist.github.com/jywarren/d9cdc98a4a50d8505ad04521e45ce59d), [create.arduino.cc link](https://create.arduino.cc/editor/jywarren/ce8d09fc-3f5f-4d6b-bb0f-4aea24838fbe/preview)

WebJack will output audio from pin 3 + ground. Use microphone or an audio cable.

Note: WebJack library has been added to index.html


## Webjack

WebJack is a way to read data from an Arduino (and other sources) using audio -- it basically turns your Arduino into an audio modem.

https://github.com/publiclab/webjack

