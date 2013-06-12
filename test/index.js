var MiniApiClient = require('../lib/mini-api-client');
var assert = require('assert');
var opts = {
  "apiKey":"OTk5OTk5OTk5OQ==",
  "apiEndPoint":"staging-api.buildmymini.ca",
  "apiVersion": "v2",
  "apiLanguage": "en"
};

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
    var client;
    beforeEach(function() {
      client = new MiniApiClient(opts);
    });
    it("should have an api key", function() {
      assert(client.options.apiKey, opts.apiKey,"expected client to have apiKey " + opts.apiKey);
    });
    it("should have an api endpoint", function() {
      assert(client.options.apiEndPoint, opts.apiEndPoint,"expected client to have apiEndPoint " + opts.apiEndPoint);
    });
    it("should have an api version", function() {
      assert(client.options.apiVersion, opts.apiVersion, "exected client to have apiVersion " +  opts.apiVersion);
    });
    it("should have an api language", function() {
      assert(client.options.apiLanguage, opts.apiLanguage, "exected client to have apiVersion " +  opts.apiLanguage);
    });
  });
});

describe("MiniApiClient get function", function() {
  var client = new MiniApiClient(opts);
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
