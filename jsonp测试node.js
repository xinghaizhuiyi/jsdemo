const http = require("http");
const urlLib = require("url");
const querystring=require("querystring");

var server = http.createServer(function(req,res) {
  var url=urlLib.parse(req.url);
  var CB=querystring.parse(url.query).cb;
  console.log(CB);
  var txt=CB+'({"s":"1","a":"2"})';
  res.write(txt);
  res.end();
});

server.listen(8089);
