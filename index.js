var http = require('http');
var fs = require('fs');
var express = require("express");
var app = express();
var MiniApiClient = require('./lib/mini-api-client');
var apiKey = "OTk5OTk5OTk5OQ==";

app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  var options = {
    host: "staging-api.buildmymini.ca",
    port: 80,
    path: "/v2/en/models?appId=" + apiKey,
    method: "GET"
  };

  var client = new MiniApiClient({ appId: apiKey });


  var data = "";
  var apiReq = http.request(options, function(apiRes) {
    apiRes.setEncoding('utf8');
    apiRes.on('data', function(chunk) {
      data += chunk;
    });
    apiRes.on('end', function() {
      //console.log(JSON.parse(data));
      res.render("index", { vehicles: JSON.parse(data) } );
    });
  }).end();
});

app.listen(1377);
