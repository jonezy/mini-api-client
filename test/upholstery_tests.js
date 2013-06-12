var assert = require('assert');
var MiniApiClient = require('../lib/mini-api-client');
var nock = require('nock');
var apiKey = "OTk5OTk5OTk5OQ==";
var client;

var testData = {
  "upholsteryId": "K9E1"
};

var opts = {
  "apiKey":"OTk5OTk5OTk5OQ==",
  "apiEndPoint":"staging-api.buildmymini.ca",
  "apiVersion": "v2",
  "apiLanguage": "en"
};

beforeEach(function() {
  client = new MiniApiClient(opts);
});

describe("MiniApiClient upholstery endpoints", function() {
  var upholsteries = nock('http://staging-api.buildmymini.ca:80')
    .persist()
    .get('/v2/en/upholstery?appId=OTk5OTk5OTk5OQ==')
    .reply(200, "[{\"Code\":\"ATE1\",\"Name\":\"Carbon Black Checkered Cloth\",\"Price\":\"0.00\",\"Description\":\"Appeal to the racer within and add some flair to your MINI\u0027s interiors. With these\",\"Image\":null}]");

  var upholstery = nock('http://staging-api.buildmymini.ca:80')
    .get('/v2/en/upholstery/K9E1?appId=OTk5OTk5OTk5OQ==')
    .reply(200, "[{\"Code\":\"ATE1\",\"Name\":\"Carbon Black Checkered Cloth\",\"Price\":\"0.00\",\"Description\":\"Appeal to the racer within and add some flair to your MINI\u0027s interiors. With these\",\"Image\":null}]");

  describe("/upholstery", function() {
    it('should return an object', function(done) {
      var res = client.get({"endPoint":"upholsteries"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
    it('should return a collection of objects', function(done) {
      var res = client.get({"endPoint":"upholsteries"}, function(data) {
        assert(data.length, ">1", "expected more than 1 object");
        done();
      });
    });
  });

  describe("/upholstery/{code}", function() {
    it("should return an object", function(done) {
      var res = client.get({"endPoint":"upholstery","id":testData.upholsteryId}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
  });
});
