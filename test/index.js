var MiniApiClient = require('../lib/mini-api-client');
var assert = require('assert');


describe("MiniApiClient", function() {
  describe("with no options", function() {

    it("should return empty object", function() {
      client = new MiniApiClient();
      console.log(client);
      assert.equal(client, {});
    });

  });

});
