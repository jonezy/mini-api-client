var http = require('http');
var fs = require('fs');
var express = require("express");
var MiniApiClient = require('./lib/mini-api-client');
var apiKey = "OTk5OTk5OTk5OQ==";

var app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.set('view options', { layout: false });
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.logger());

var client = new MiniApiClient({ apiKey: apiKey });

app.get("/vehicles/:ecode", function(req, res) {
  var ecode = req.params.ecode;
  client.get({"endPoint":"vehiclesByModel", "id":ecode}, function(data) {
    res.render("vehicles", { title: 'Vehicles', vehicles:data.Vehicles });
  });
});

app.get("/vehicle/:cacode", function(req, res) {
  var cacode = req.params.cacode;
  client.get({"endPoint":"vehicle", "id":cacode}, function(data) {
    res.render("vehicle", { title: data.Name, vehicles:data });
  });
});

app.get("/", function(req, res) {
  client.get({"endPoint":"models"}, function(data) {
    res.render("index", { title: 'Models',  models: data } );
  });
});


app.listen(1377);
