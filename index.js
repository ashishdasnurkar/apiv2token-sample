var request = require("request");
require('dotenv-safe').load();
var cache = require('memory-cache');

var options = { method: 'POST',
  url: 'https://kachhalimbu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
  { grant_type: 'client_credentials',
    client_id: process.env.CLIENT_ID ,
    client_secret: process.env.CLIENT_SECRET,
    audience: 'https://kachhalimbu.auth0.com/api/v2/' },
  json: true };

function getManagementToken(cb) {
  var cached = cache.get(process.env.CLIENT_ID);
  if (cached) {
    console.log("returning cached token");
    cb(null, cached);
  } else {
    console.log("getting a new one");
    request(options, function (error, response, body) {
      if (error) {
        console.log(error);
        throw new Error(error);
      }

      console.log(body);
      cache.put(process.env.CLIENT_ID, body, body.expires_in * 1000 || 10000);
      cb(null, body);
    });
  }
}

// TODO: Clean up this and add a proper test.

getManagementToken(function() {
  console.log('Got first token');
});

var counter = 1;
setInterval(function() { 
  getManagementToken(function() {
  console.log('Got token ' + counter++);
})}, 9000);



