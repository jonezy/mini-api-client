var http = require('http');

var endPoints = {
  "models": "/models",
  "vehiclesByModel": "/models/{id}",
  "vehicles": "/vehicles",
  "vehicle": "/vehicles/{id}"
};
var MiniApiClient = module.exports = function(opts) {
  if(!opts) throw new Error('please pass in an options hash');
  if(Object.keys(opts).length === 0) throw new Error('the options hash cannot be empty');

  this.options = {};
  this.options.apiKey = opts.apiKey;
  this.init();

  return this;
};

MiniApiClient.prototype.init = function() {
  this.options.host = "staging-api.buildmymini.ca";
  this.options.version = "v2";
  this.options.language = "en";
};

MiniApiClient.prototype.get = function(opts, callback) {
  if(!opts) throw new Error("please pass in an options hash");
  if(Object.keys(opts).length === 0) throw new Error("the options object cannot be empty");
  if(!endPointExists(opts.endPoint)) throw new Error("the endpoint you requested is not supported");

  this.options.endPoint =lookupEndPoint(opts.endPoint);
  if(this.options.endPoint.indexOf('{id}') > -1) {
    this.options.endPoint = this.options.endPoint.slice(0, this.options.endPoint.indexOf('{id}')) + opts.id;
  }

  var options = {
    host: this.options.host,
    port: 80,
    path: "/"+ this.options.version + "/" + this.options.language + this.options.endPoint + "?appId=" + this.options.apiKey,
    method: "GET"
  };

  // do the request!
  var data = "";
  var apiReq = http.request(options, function(apiRes) {
    apiRes.setEncoding('utf8');
    apiRes.on('data', function(chunk) {
      data += chunk;
    });
    apiRes.on('end', function() {
      // execute the callback
      if(callback) callback(JSON.parse(data));
    });
  }).end();
};

var endPointExists = function(endPoint) {
  var found = false;
  for (var prop in endPoints) {
    if(prop === endPoint) found = true;
  }
  return found;
};

var lookupEndPoint = function(endPoint) {
  for (var prop in endPoints) {
    if(prop === endPoint) return endPoints[prop];
  }
  return;
};
