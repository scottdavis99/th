var connect = require("connect");
var port = 8000;

connect(
  connect.static(__dirname + "/www")
).listen(port);

console.log("Server listening on port " + port);