var http = require('http');
var setup = require('proxy');

var server = setup(http.createServer());
server.listen(80, function () {
  var port = server.address().port;
  console.log('test', port);
});