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
const { ObjectId } = require('mongoose').Types;

const { consumerKey, consumerSecret } = require('./config');
const oa = require('./oauth/twitter');
const User = require('./models/User');
const Event = require('./models/Event');
const Post = require('./models/Post');

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
            .then(() => {
              profile.token = token;
              done(null, profile)
            })
            .catch(e => console.log(e));
        } else {
          User.create({
              username: profile.username,
              image: profile._json.profile_image_url,
              token,
              tokenSecret,
              events: [0]
            })
            .then(() => {
              profile.token = token;
              done(null, profile)
            })
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

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/login.html')));

app.get('/twitter/login', passport.authenticate('twitter'));

app.get('/twitter/return', passport.authenticate('twitter', {
  failureRedirect: '/login'
}), (req, res) => {
  res.cookie('token', req.user.token);
  res.redirect('/eventPage.html');
});

app.get('/event/:id', (req, res) => {
  if (!req.cookies.token) return redirect('/twitter/login');
  let userId;

  User.findOne({ token: req.cookies.token })
    .then((user) => {
      if (!user) return redirect('/twitter/login');
      userId = user._id;
      return Event.findOne({ _id: req.params.id })
    })
    .then((event) => {
      if (!event) return;

      const yourPost = event.posts.find(post => post.ownerId.toString() === userId.toString());
      const theirPost = event.posts.find(post => post !== yourPost);
      if (!yourPost || !theirPost) return console.log('POST NOT FOUND');

      const yourUserProfile = User.findOne({ _id: yourPost.ownerId });
      const theirUserProfile = User.findOne({ _id: theirPost.ownerId });

      return Promise.all([yourUserProfile, yourPost, theirUserProfile, theirPost]);
    })
    .then((values) => {
      res.send({
        yours: { profile: values[0], post: values[1] },
        theirs: { profile: values[2], post: values[3] },
      });
    })
    .catch(e => console.log(e));
});

app.post('/event/:id', (req, res) => {
  if (!req.cookies.token) return redirect('/twitter/login');
  let userId;

  User.findOne({ token: req.cookies.token })
    .then((user) => {
      if (!user) return redirect('/twitter/login');
      userId = user._id;

      return Event.findOne({ _id: req.params.id });
    })
    .then((event) => {
      const userIndex = event.users.indexOf(ObjectId(userId));
      let agreed = event.agreed;

      if (req.body.text) agreed = [false, false]
      else agreed[userIndex] = req.body.agreed ? true : false;

      const indexOfPostToChange = event.posts.findIndex(post => post.ownerId.toString() === userId.toString());
      const indexToNotChange = indexOfPostToChange === 0 ? 1 : 0;
      const postToChange = event.posts[indexOfPostToChange];

      const reqKeys = Object.keys(req.body);
      const eventPostKeys = Object.keys(event.posts[indexOfPostToChange]);
      reqKeys.filter((key) => eventPostKeys.includes(key));
      reqKeys.forEach(key => postToChange[key] = req.body[key]);

      const newPosts = [event.posts[indexToNotChange], postToChange];
      return Event.findOneAndUpdate({ _id: event._id }, { posts: newPosts, agreed }, { new: true });
    })
    .then((event) => {
      console.log(event.agreed);
      if (event.agreed.reduce((acc, val) => acc && val, true)) event.makePosts();
      console.log(event.agreed.reduce((acc, val) => acc && val, true))
      res.status(200).send('Success!');
    })
    .catch(e => console.log(e));
});



app.listen(3000);

module.exports = app;

// Find user based on cookie
// User.findOne({ username: req.user.username })
//   .then((user) => {
//     res.cookie('token', user.token);
//     res.send(user);
//   }).catch(e => res.send(e));


// Make post
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
