var http = require('http');

var endPoints = {
  "models": "/models",
  "vehiclesByModel": "/models/{id}",
  "vehicles": "/vehicles",
  "vehicle": "/vehicles/{id}",
  "packages": "/packages",
  "package": "/packages/{id}",
  "options": "/options",
  "option": "/options/{id}",
  "upholsteries": "/upholstery",
  "upholstery": "/upholstery/{id}",
  "bodycolours": "/colours/body",
  "bodycolour": "/colours/body/{id}",
  "roofcolours": "/colours/roof",
  "roofcolour": "/colours/roof/{id}",
  "stripecolours": "/colours/stripe",
  "stripecolour": "/colours/stripe/{id}",
  "sitemap": "/sitemap"
};

exports = module.exports = MiniApiClient = function(opts) {
  if(!opts) throw new Error('please pass in an options hash');
  if(Object.keys(opts).length === 0) throw new Error('the options hash cannot be empty');

  this.options = {};
  this.options.apiKey = opts.apiKey;
  this.options.apiEndPoint = opts.apiEndPoint;
  this.options.apiEndPointPort = opts.apiEndPointPort;
  this.options.apiVersion = opts.apiVersion;
  this.options.apiLanguage = opts.apiLanguage;

  return this;
};

MiniApiClient.prototype.get = function(opts, callback) {
  if(!opts) throw new Error("please pass in an options hash");
  if(Object.keys(opts).length === 0) throw new Error("the options object cannot be empty");
  if(!endPointExists(opts.endPoint)) throw new Error("the endpoint you requested is not supported");

  // override the request language with a lang entry in the opts
  var requestLanguage = this.options.apiLanguage;
  if(opts.lang) requestLanguage = opts.lang;

  this.options.endPoint =lookupEndPoint(opts.endPoint);
  if(this.options.endPoint.indexOf('{id}') > -1) {
    this.options.endPoint = this.options.endPoint.slice(0, this.options.endPoint.indexOf('{id}')) + opts.id;
  }

  var options = {
    host: this.options.apiEndPoint,
    port: this.options.apiEndPointPort,
    path: "/"+ this.options.apiVersion + "/" + this.options.apiLanguage + this.options.endPoint + "?appId=" + this.options.apiKey,
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
      callback && callback(JSON.parse(data));
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

