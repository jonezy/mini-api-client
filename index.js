var http = require('http');
var fs = require('fs');
var express = require("express");
var app = express();
var apiKey = "OTk5OTk5OTk5OQ==";

app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  var options = {
    host: "staging-api.buildmymini.ca",
    port: 80,
    path: "/v2/en/vehicles?appId=" + apiKey,
    method: "GET"
  };

  var data = "";
  var apiReq = http.request(options, function(apiRes) {
    console.log('STATUS ' + apiRes.status);
    apiRes.setEncoding('utf8');
    apiRes.on('data', function(chunk) {
      data += chunk;
      //console.log(chunk);
    });
    apiRes.on('end', function() {
      console.log(JSON.parse(data));
      res.render("index", { vehicles: JSON.parse(data) } );
      //res.render("index", function(err, html) {
      //  fs.writeFile(__dirname + './_site/index.html',html,function(e){
      //    if (e) throw e;
      //    console.log('It\'s saved!');            
      //  });
      //});
    });
  }).end();
});

app.listen(1377);
