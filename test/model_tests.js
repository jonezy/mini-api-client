var assert = require('assert');
var MiniApiClient = require('../lib/mini-api-client');
var nock = require('nock');
var apiKey = "OTk5OTk5OTk5OQ==";
var client;

var testData = {
  "modelId": "R56",
  "vehicleId": "1310"
};

beforeEach(function() {
  client = new MiniApiClient({"apiKey":apiKey});
});

describe("MiniApiClient model endpoints", function() {
  var models = nock('http://staging-api.buildmymini.ca:80')
  .persist()
  .get('/v2/en/models?appId=OTk5OTk5OTk5OQ==')
  .reply(200, "[{\"ModelID\":\"1\",\"Lang\":\"en\",\"ModelSlug\":\"mini-cooper\",\"Name\":\"MINI\",\"Ecode\":\"R56\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper\",\"UrlSlug\":\"cooper-hatch\",\"CACode\":\"1310\"},{\"Name\":\"2013 MINI Cooper S\",\"UrlSlug\":\"cooper-s-hatch\",\"CACode\":\"1311\"},{\"Name\":\"2013 MINI John Cooper Works\",\"UrlSlug\":\"john-cooper-works-hatch\",\"CACode\":\"1312\"},{\"Name\":\"2013 MINI Cooper Baker Street\",\"UrlSlug\":\"mini-baker-street\",\"CACode\":\"1310B\"},{\"Name\":\"2013 MINI Cooper S Bayswater\",\"UrlSlug\":\"mini-bayswater\",\"CACode\":\"1311B\"}]}, " +
         "{\"ModelID\":\"2\",\"Lang\":\"en\",\"ModelSlug\":\"mini-coupe\",\"Name\":\"MINI Coupé\",\"Ecode\":\"R58\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper Coupé\",\"UrlSlug\":\"cooper-coupe\",\"CACode\":\"1323\"},{\"Name\":\"2013 MINI Cooper S Coupé\",\"UrlSlug\":\"cooper-s-coupe\",\"CACode\":\"1324\"},{\"Name\":\"2013 MINI John Cooper Works Coupé\",\"UrlSlug\":\"john-cooper-works-coupe\",\"CACode\":\"1325\"}]}," +
         "{\"ModelID\":\"3\",\"Lang\":\"en\",\"ModelSlug\":\"mini-convertible\",\"Name\":\"MINI Convertible\",\"Ecode\":\"R57\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper Convertible\",\"UrlSlug\":\"cooper-convertible\",\"CACode\":\"1313\"},{\"Name\":\"2013 MINI Cooper S Convertible\",\"UrlSlug\":\"cooper-s-convertible\",\"CACode\":\"1314\"},{\"Name\":\"2013 MINI John Cooper Works Convertible\",\"UrlSlug\":\"john-cooper-works-convertible\",\"CACode\":\"1315\"}]}," +
         "{\"ModelID\":\"4\",\"Lang\":\"en\",\"ModelSlug\":\"mini-roadster\",\"Name\":\"MINI Roadster\",\"Ecode\":\"R59\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper Roadster\",\"UrlSlug\":\"cooper-roadster\",\"CACode\":\"1326\"},{\"Name\":\"2013 MINI Cooper S Roadster\",\"UrlSlug\":\"cooper-s-roadster\",\"CACode\":\"1327\"},{\"Name\":\"2013 MINI John Cooper Works Roadster\",\"UrlSlug\":\"john-cooper-works-roadster\",\"CACode\":\"1328\"}]}," +
         "{\"ModelID\":\"5\",\"Lang\":\"en\",\"ModelSlug\":\"mini-clubman\",\"Name\":\"MINI Clubman\",\"Ecode\":\"R55\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper Clubman\",\"UrlSlug\":\"cooper-clubman\",\"CACode\":\"1316\"},{\"Name\":\"2013 MINI Cooper S Clubman\",\"UrlSlug\":\"cooper-clubman-s\",\"CACode\":\"1317\"},{\"Name\":\"2013 MINI John Cooper Works Clubman\",\"UrlSlug\":\"john-cooper-works-clubman\",\"CACode\":\"1318\"},{\"Name\":\"2013 MINI Cooper Clubman Green Park \",\"UrlSlug\":\"cooper-clubman-greenpark\",\"CACode\":\"1316G\"},{\"Name\":\"2013 MINI Cooper Clubman Hyde Park \",\"UrlSlug\":\"cooper-clubman-hydepark\",\"CACode\":\"1316H\"},{\"Name\":\"2013 MINI Cooper S Clubman Green Park \",\"UrlSlug\":\"cooper-clubman-s-greenpark\",\"CACode\":\"1317G\"},{\"Name\":\"2013 MINI Cooper S Clubman Hyde Park \",\"UrlSlug\":\"cooper-clubman-s-hydepark\",\"CACode\":\"1317H\"}]}," +
         "{\"ModelID\":\"6\",\"Lang\":\"en\",\"ModelSlug\":\"mini-countryman\",\"Name\":\"MINI Countryman\",\"Ecode\":\"R60\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper Countryman\",\"UrlSlug\":\"cooper-countryman\",\"CACode\":\"1319\"},{\"Name\":\"2013 MINI Cooper S Countryman\",\"UrlSlug\":\"cooper-s-countryman\",\"CACode\":\"1220\"},{\"Name\":\"2013 MINI Cooper S Countryman ALL4\",\"UrlSlug\":\"cooper-s-countryman-all4\",\"CACode\":\"1322\"}]}," +
         "{\"ModelID\":\"20\",\"Lang\":\"en\",\"ModelSlug\":\"mini-paceman\",\"Name\":\"MINI Paceman\",\"Ecode\":\"R61\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper Paceman\",\"UrlSlug\":\"cooper-paceman\",\"CACode\":\"1305\"},{\"Name\":\"2013 MINI Cooper S Paceman All4\",\"UrlSlug\":\"cooper-paceman-all4\",\"CACode\":\"1307\"},{\"Name\":\"2013 MINI John Cooper Works Paceman ALL4\",\"UrlSlug\":\"john-cooper-works-paceman\",\"CACode\":\"1308\"}]}," +
         "{\"ModelID\":\"8\",\"Lang\":\"en\",\"ModelSlug\":\"mini-special-editions\",\"Name\":\"MINI Special Editions\",\"Ecode\":\"R89\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper Clubman Green Park \",\"UrlSlug\":\"cooper-clubman-greenpark\",\"CACode\":\"1316G\"},{\"Name\":\"2013 MINI Cooper Clubman Hyde Park \",\"UrlSlug\":\"cooper-clubman-hydepark\",\"CACode\":\"1316H\"},{\"Name\":\"2013 MINI Cooper S Clubman Green Park \",\"UrlSlug\":\"cooper-clubman-s-greenpark\",\"CACode\":\"1317G\"},{\"Name\":\"2013 MINI Cooper S Clubman Hyde Park \",\"UrlSlug\":\"cooper-clubman-s-hydepark\",\"CACode\":\"1317H\"},{\"Name\":\"2013 MINI Cooper Knightsbridge\",\"UrlSlug\":\"cooper-knightsbridge\",\"CACode\":\"1310K\"},{\"Name\":\"2013 MINI Cooper Baker Street\",\"UrlSlug\":\"mini-baker-street\",\"CACode\":\"1310B\"},{\"Name\":\"2013 MINI Cooper S Bayswater\",\"UrlSlug\":\"mini-bayswater\",\"CACode\":\"1311B\"},{\"Name\":\"2013 MINI Cooper S Highgate\",\"UrlSlug\":\"mini-convertible-highgate\",\"CACode\":\"1314H\"}]}," +
         "{\"ModelID\":\"9\",\"Lang\":\"en\",\"ModelSlug\":\"john-cooper-works\",\"Name\":\"John Cooper Works\",\"Ecode\":\"R99\",\"Vehicles\":[{\"Name\":\"2013 MINI John Cooper Works\",\"UrlSlug\":\"john-cooper-works-hatch\",\"CACode\":\"1312\"},{\"Name\":\"2013 MINI John Cooper Works Coupé\",\"UrlSlug\":\"john-cooper-works-coupe\",\"CACode\":\"1325\"},{\"Name\":\"2013 MINI John Cooper Works Convertible\",\"UrlSlug\":\"john-cooper-works-convertible\",\"CACode\":\"1315\"},{\"Name\":\"2013 MINI John Cooper Works Roadster\",\"UrlSlug\":\"john-cooper-works-roadster\",\"CACode\":\"1328\"},{\"Name\":\"2013 MINI John Cooper Works Clubman\",\"UrlSlug\":\"john-cooper-works-clubman\",\"CACode\":\"1318\"},{\"Name\":\"2013 MINI John Cooper Works Countryman ALL4\",\"UrlSlug\":\"john-cooper-works-countryman\",\"CACode\":\"1321\"},{\"Name\":\"2013 MINI John Cooper Works GP\",\"UrlSlug\":\"john-cooper-works-gp\",\"CACode\":\"1312P\"},{\"Name\":\"2013 MINI John Cooper Works Paceman ALL4\",\"UrlSlug\":\"john-cooper-works-paceman\",\"CACode\":\"1308\"}]}]");

  var model = nock('http://staging-api.buildmymini.ca:80')
    .persist()
    .get('/v2/en/models/R56?appId=OTk5OTk5OTk5OQ==')
    .reply(200, "{\"ModelID\":\"1\",\"Lang\":\"en\",\"ModelSlug\":\"mini-cooper\",\"Name\":\"MINI\",\"Ecode\":\"R56\",\"Vehicles\":[{\"Name\":\"2013 MINI Cooper\",\"UrlSlug\":\"cooper-hatch\",\"CACode\":\"1310\"},{\"Name\":\"2013 MINI Cooper S\",\"UrlSlug\":\"cooper-s-hatch\",\"CACode\":\"1311\"},{\"Name\":\"2013 MINI John Cooper Works\",\"UrlSlug\":\"john-cooper-works-hatch\",\"CACode\":\"1312\"},{\"Name\":\"2013 MINI Cooper Baker Street\",\"UrlSlug\":\"mini-baker-street\",\"CACode\":\"1310B\"},{\"Name\":\"2013 MINI Cooper S Bayswater\",\"UrlSlug\":\"mini-bayswater\",\"CACode\":\"1311B\"}]}");

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
      var res = client.get({"endPoint":"vehiclesByModel","id":testData.modelId}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
  });

  describe("/models/{eCode}", function() {
    it('should return an object with requested id', function(done) {
      var res = client.get({"endPoint":"vehiclesByModel","id":testData.modelId}, function(data) {
        assert.equal(data.Ecode, testData.modelId);
        done();
      });
    });
  });
});

