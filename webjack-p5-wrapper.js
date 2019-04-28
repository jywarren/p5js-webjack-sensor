function receiveSensorData(handler) {
  // nonsense to start up audio and get past the "click to play" policy
  var ac = getAudioContext();
  ac.suspend().then(function() {
    var myButton = createButton('click to start audio');
    myButton.position(0, 0);

    userStartAudio(myButton, function() {
      myButton.remove();

      // https://github.com/publiclab/webjack/blob/master/src/profiles.js
      var profile = WebJack.Profiles.SoftModem;
      var connection = new WebJack.Connection(profile);

      // runs every time a signal is 'heard'
      connection.listen(function(data) {

        // data from WebJack may look like "1,2,3"
        data = data.split(',').map(function(i) {
          return parseFloat(i)
        }); // so we break it apart using the commas, and make them floats

        handler(data);
      });

    });
  });
}
