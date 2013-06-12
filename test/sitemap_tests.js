
var assert = require('assert');
var MiniApiClient = require('../lib/mini-api-client');
var nock = require('nock');
var apiKey = "OTk5OTk5OTk5OQ==";
var client;

var opts = {
  "apiKey":"OTk5OTk5OTk5OQ==",
  "apiEndPoint":"staging-api.buildmymini.ca",
  "apiVersion": "v2",
  "apiLanguage": "en"
};

beforeEach(function() {
  client = new MiniApiClient(opts);
});

describe("MINI Api Sitemap end point", function() {

  describe("/sitemap", function() {

    var pages = nock('http://staging-api.buildmymini.ca:80')
      .persist()
      .get('/v2/en/sitemap?appId=OTk5OTk5OTk5OQ==')
      .reply(200, "[{\"PageID\":1,\"ParentPageID\":0,\"Template\":{\"TemplateID\":2,\"Name\":\"index.html\",\"Regions\":[\"content1\",\"content2\"]},\"Lang\":\"en\",\"Name\":\"Home\",\"Label\":\"home\",\"Slug\":\"/\",\"Locations\":\"MAIN\",\"IsActive\":true,\"Pages\":null},{\"PageID\":2,\"ParentPageID\":1,\"Template\":{\"TemplateID\":2,\"Name\":\"index.html\",\"Regions\":[\"content1\",\"content2\"]},\"Lang\":\"en\",\"Name\":\"Models\",\"Label\":\"models\",\"Slug\":\"/models\",\"Locations\":\"MAIN\",\"IsActive\":true,\"Pages\":null},{\"PageID\":3,\"ParentPageID\":1,\"Template\":{\"TemplateID\":2,\"Name\":\"index.html\",\"Regions\":[\"content1\",\"content2\"]},\"Lang\":\"en\",\"Name\":\"Why MINI\",\"Label\":\"Why MINI\",\"Slug\":\"/why-mini\",\"Locations\":\"MAIN\",\"IsActive\":true,\"Pages\":[{\"PageID\":5,\"ParentPageID\":3,\"Template\":{\"TemplateID\":2,\"Name\":\"index.html\",\"Regions\":[\"content1\",\"content2\"]},\"Lang\":\"en\",\"Name\":\"MINI Social\",\"Label\":\"MINI Social\",\"Slug\":\"/mini-social\",\"Locations\":\"MAIN\",\"IsActive\":true,\"Pages\":null}]}]");

    it('should return an object', function(done) {
      var res = client.get({"endPoint":"sitemap"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
    it('should return a collection of objects', function(done) {
      var res = client.get({"endPoint":"sitemap"}, function(data) {
        assert(data.length," >1", "expected an object");
        done();
      });
    });
  });
});
