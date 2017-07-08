var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
const session = require('express-session');
const { mongoose } = require('./mongoose');

const { consumerKey, consumerSecret } = require('./config');
const oa = require('./oauth/twitter');
const User = require('./models/User');

passport.use(new Strategy({
    consumerKey,
    consumerSecret,
    callbackURL: 'http://localhost:3000/twitter/return'
  },
  (token, tokenSecret, profile, done) => {
    // If user exists, update token & tokenSecret
    // If not, save new user, and save token & tokenSecret

    User.findOne({ username: profile.username })
      .then((user) => {
        if (user) {
          User.update(user, { token, tokenSecret })
            .then(() => done(null, profile))
            .catch(e => console.log(e));
        } else {
          User.create({ username: profile.username, token, tokenSecret, events: [0] })
            .then(() => done(null, profile))
            .catch(e => console.log(e));
        }
      }).catch(e => console.log(e));
  }));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.render('login'));

app.get('/twitter/login', passport.authenticate('twitter'));

app.get('/twitter/return', passport.authenticate('twitter', {
  failureRedirect: '/'
}), (req, res) => {
  res.render('index');
});

app.get('/eventPage', (req, res) => {
  res.render('index');
});

app.get('/event/:id', (req, res) => {
  User.findOne({ username: req.user.username })
    .then((user) => {
      res.cookie('token', user.token);
      res.send(user);
    }).catch(e => res.send(e));
});

app.post('/event', (req, res) => {
  User.findOneAndUpdate({ token: req.cookies.token }, req.body)
    .then((user) => {
      console.log(`Successfully updated!
        ${user}`);
    }).catch(e => res.send(e));
});

app.listen(3000);

module.exports = app;


// User.findOne({ username: req.user.username })
//   .then((user) => {
//     oa.post(
//       'https://api.twitter.com/1.1/statuses/update.json',
//       user.token,
//       user.tokenSecret, { status: 'Jerry is SO wett' },
//       (test) => {
//         res.send(test);
//       }
//     )
//   }).catch(e => res.send(e));
