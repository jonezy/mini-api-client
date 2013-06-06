var MiniApiClient = require('../lib/mini-api-client');
var assert = require('assert');
var apiKey = "OTk5OTk5OTk5OQ==";

describe("MiniApiClient Constructor", function() {
  describe("with no options", function() {
    it("should throw an error", function() {
      assert.throws(function() { var client = new MiniApiClient(); }, Error);
    });
  });

  describe("with empty options hash", function() {
    it("should throw and error", function() {
      assert.throws(function() { var client = new MiniApiClient({}); }, Error);
    });
  });

  describe("with options hash", function() {
    it("should have an api key", function() {
      var client = new MiniApiClient({"apiKey":"1234"});
      assert(client.options.apiKey, "1234","expected client to have apiKey 1234");
    });
  });
});

describe("MiniApiClient get function", function() {
  var client = new MiniApiClient({"apiKey":apiKey});
  describe("with no options", function() {
    it("should throw an error", function() {
      assert.throws(function() { client.get(); }, Error);
    });
  });
  describe("with empty options hash", function() {
    it("should throw an error", function() {
      assert.throws(function() { client.get({}); }, Error);
    });
  });
  describe("with invalid endPoint options value", function() {
    it("should throw an error", function() {
      assert.throws(function() { client.get({"endPoint": "test"});}, Error);
    });
  });
});

describe("MiniApiClient", function() {
  var client = new MiniApiClient({"apiKey":apiKey});
  describe("/models", function() {
    it('should return an object', function(done) {
      var res = client.get({"endPoint":"models"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
    it('should return a collection of objects', function(done) {
      var res = client.get({"endPoint":"models"}, function(data) {
        assert(data.length," >1", "expected an object");
        done();
      });
    });
  });

  describe("/models/{eCode}", function() {
    it('should return an object', function(done) {
      var res = client.get({"endPoint":"vehiclesByModel","id":"R56"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
  });
});

