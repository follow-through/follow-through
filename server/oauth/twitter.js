const OAuth = require('oauth').OAuth;
const { consumerKey, consumerSecret } = require('./../config');

module.exports = new OAuth(
  "https://twitter.com/oauth/request_token",
  "https://twitter.com/oauth/access_token",
  consumerKey, consumerSecret,
  "1.0A",
  "http://localhost:3000/authn/twitter/callback",
  "HMAC-SHA1"
);
