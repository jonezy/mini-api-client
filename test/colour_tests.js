
var assert = require('assert');
var MiniApiClient = require('../lib/mini-api-client');
var nock = require('nock');
var client;

var testData = {
  "bodyColourId": "850",
  "roofId": "382",
  "stripeId": "327"
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

describe("MiniApiClient colours endpoints", function() {
  var bodycolours = nock('http://staging-api.buildmymini.ca:80')
    .persist()
    .get('/v2/en/colours/body?appId=OTk5OTk5OTk5OQ==')
    .reply(200, "[{\"Code\":\"850\",\"Description\":\"Pepper White\",\"Price\":\"0.00\"},{\"Code\":\"851\",\"Description\":\"Chili Red\",\"Price\":\"0.00\"},{\"Code\":\"A62\",\"Description\":\"White Silver Metallic\",\"Price\":\"490.00\"},{\"Code\":\"A63\",\"Description\":\"Lightning Blue Metallic\",\"Price\":\"490.00\"}]");

    var bodycolour = nock('http://staging-api.buildmymini.ca:80')
      .get('/v2/en/colours/body/850?appId=OTk5OTk5OTk5OQ==')
      .reply(200, "{\"Code\":\"850\",\"Description\":\"Pepper White\",\"Price\":\"0.00\"}");

  describe("/colours/body", function() {
    it('should return an object', function(done) {
      var res = client.get({"endPoint":"bodycolours"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
    it('should return a collection of objects', function(done) {
      var res = client.get({"endPoint":"bodycolours"}, function(data) {
        assert(data.length, ">1", "expected more than 1 object");
        done();
      });
    });
  });

  describe("/colours/body/{id}", function() {
    it("should return an object", function(done) {
      var res = client.get({"endPoint":"bodycolour","id":testData.bodyColourId}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
  });

  describe("/colours/roof", function() {
    var roof = nock('http://staging-api.buildmymini.ca:80')
      .get('/v2/en/colours/roof/382?appId=OTk5OTk5OTk5OQ==')
      .reply(200, "{\"Code\":\"382\",\"Name\":\"White Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting white give your MINI an even more distinct appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"}");

    var roofs = nock('http://staging-api.buildmymini.ca:80')
      .persist()
      .get('/v2/en/colours/roof?appId=OTk5OTk5OTk5OQ==')
      .reply(200, "[{\"Code\":\"382\",\"Name\":\"White Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting white give your MINI an even more distinct appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"},{\"Code\":\"383\",\"Name\":\"Black Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting black give your MINI an even more distinct appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"},{\"Code\":\"405\",\"Name\":\"Chromed Exterior Mirror Caps\",\"Description\":\"Add a touch of modern shine to your MINI with side-view mirror caps in chrome. Included with Chrome Line Exterior.\",\"Price\":\"0.00\",\"Category\":\"CAP\"},{\"Code\":\"3A3\",\"Name\":\"Red Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting red give your MINI a striking appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"},{\"Code\":\"3AB\",\"Name\":\"Body Coloured Mirror Caps\",\"Description\":\"Side-view mirrors that match your MINI\\u0027s body color.\",\"Price\":\"0.00\",\"Category\":\"CAP\"},{\"Code\":\"3BE\",\"Name\":\"Black Mirror Caps\",\"Description\":\"Side-view mirrors that match your MINI\\u0027s body color.\",\"Price\":\"0.00\",\"Category\":\"CAP\"},{\"Code\":\"3BF\",\"Name\":\"Red Mirror Caps Chili\",\"Description\":\"Side-view mirrors in Chili Red.\",\"Price\":\"0.00\",\"Category\":\"CAP\"},{\"Code\":\"3AF\",\"Name\":\"Silver Roof and Mirror Caps\",\"Description\":\"Roof and side-view mirrors in contrasting silver give your MINI a striking appearance.\",\"Price\":\"0.00\",\"Category\":\"ROOFCAP\"},{\"Code\":\"381\",\"Name\":\"Body Coloured Roof\",\"Description\":\"Love the colour you chose for your MINI\\u0027s body? No need to choose another. With this option, your MINI\\u0027s body and roof will be the same colour. \",\"Price\":\"0.00\",\"Category\":\"ROOF\"},{\"Code\":\"3YB\",\"Name\":\"Softtop Denim Blue\",\"Description\":\"Our fully automatic soft-top convertible roof can go from clamshell to half shell in 15 seconds flat. The innovative sunroof and three degrees of open make regulating your Vitamin D production a snap. When not in use, this Denim Blue soft-top conveniently tucks away into a compact space just above the boot, where we hope it stays most of the time. \",\"Price\":\"150.00\",\"Category\":\"ROOF\"},{\"Code\":\"3YD\",\"Name\":\"Softtop Hot Chocolate\",\"Description\":\"Our fully automatic soft-top convertible roof can go from clamshell to half shell in 15 seconds flat. The innovative sunroof and three degrees of open make regulating your Vitamin D production a snap. When not in use, this Hot Chocolate soft-top conveniently tucks away into a compact space just above the boot, where we hope it stays most of the time. \",\"Price\":\"150.00\",\"Category\":\"ROOF\"},{\"Code\":\"3BG\",\"Name\":\"White Mirror Caps\",\"Description\":\"Side-view mirrors in White. \",\"Price\":\"0.00\",\"Category\":\"CAP\"}]");

    it('should return an object', function(done) {
      var res = client.get({"endPoint":"roofcolours"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
    it('should return a collection of objects', function(done) {
      var res = client.get({"endPoint":"roofcolours"}, function(data) {
        assert(data.length, ">1", "expected more than 1 object");
        done();
      });
    });
  });

  describe("/colours/roof/{id}", function() {
    it("should return an object", function(done) {
      var res = client.get({"endPoint":"roofcolour","id":testData.roofId}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
  });

  describe("/colours/stripe", function() {
    var stripe = nock('http://staging-api.buildmymini.ca:80')
      .get('/v2/en/colours/stripe/327?appId=OTk5OTk5OTk5OQ==')
      .reply(200, "{\"Code\":\"327\",\"Name\":\"White Bonnet Stripes\",\"Description\":\"Classic white bonnet stripes with black pin-line detailing help give your MINI a vintage racer look. Available with certain colors.\",\"Price\":\"130.00\",\"Category\":\"STRIPE\"}");

    var stripes = nock('http://staging-api.buildmymini.ca:80')
      .persist()
      .get('/v2/en/colours/stripe?appId=OTk5OTk5OTk5OQ==')
      .reply(200, "[{\"Code\":\"327\",\"Name\":\"White Bonnet Stripes\",\"Description\":\"Classic white bonnet stripes with black pin-line detailing help give your MINI a vintage racer look. Available with certain colors.\",\"Price\":\"130.00\",\"Category\":\"STRIPE\"},{\"Code\":\"329\",\"Name\":\"Black Bonnet Stripes\",\"Description\":\"Classic black bonnet stripes with pin-line detailing in white help give your MINI a vintage racer look\",\"Price\":\"130.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3AK\",\"Name\":\"Silver Roof Bonnet Stripes\",\"Description\":\"Soon-to-be-Classic silver bonnet stripes on the roof of your MINI with pin-line detailing in black help give your MINI a vintage racer look. \",\"Price\":\"130.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3AZ\",\"Name\":\"John Cooper Works Bonnet Stripe\",\"Description\":\"John Cooper Works Bonnet Stripes with pin-line detailing in Chili Red help give your MINI a dynamic look. (Note: John Cooper Works Bonnet stripes are available with black or Chili Red roofs for the Hardtop and Clubman.)\",\"Price\":\"130.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3A7\",\"Name\":\"Black Sport Stripes\",\"Description\":\"Twin parallel black bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"250.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3A8\",\"Name\":\"Red Sport Stripes\",\"Description\":\"Twin parallel red bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"250.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3A9\",\"Name\":\"Silver Sport Stripes\",\"Description\":\"Twin parallel silver bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"250.00\",\"Category\":\"STRIPE\"},{\"Code\":\"3BH\",\"Name\":\"Sport Stripes White\",\"Description\":\"Twin parallel white  bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"},{\"Code\":\"JA8\",\"Name\":\"Red Sport Stripes\",\"Description\":\"Twin parallel red bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"},{\"Code\":\"JA7\",\"Name\":\"Black Sport Stripes\",\"Description\":\"Twin parallel black bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"},{\"Code\":\"JBH\",\"Name\":\"Sport Stripes White\",\"Description\":\"Twin parallel white  bonnet stripes spice up the front and rear end styling on any MINI, giving it a distinctively race-inspired look.\",\"Price\":\"500.00\",\"Category\":\"STRIPE\"}]");

    it('should return an object', function(done) {
      var res = client.get({"endPoint":"stripecolours"}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
    it('should return a collection of objects', function(done) {
      var res = client.get({"endPoint":"stripecolours"}, function(data) {
        assert(data.length, ">1", "expected more than 1 object");
        done();
      });
    });
  });

  describe("/colours/stripe/{id}", function() {
    it("should return an object", function(done) {
      var res = client.get({"endPoint":"stripecolour","id":testData.stripeId}, function(data) {
        assert(data, typeof(object), "expected an object");
        done();
      });
    });
  });
});

