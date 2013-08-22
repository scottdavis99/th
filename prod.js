var connect = require("connect");
var port = process.env.PORT || 8000;

connect()
  .use(connect.compress())
  .use(connect.static(__dirname + "/www-built"))  
  .listen(port);

console.log("Server listening on port " + port);