var five = require("johnny-five"),
    board = new five.Board();
board.on("ready", function() {
  var motor = new five.Motor(5);
  this.repl.inject({
     motor: motor
   });
});
