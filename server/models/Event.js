const mongoose = require('mongoose');
const Post = require('./Post');
const User = require('./User');
const oa = require('./../oauth/twitter');


const eventSchema = mongoose.Schema({
  users: {
    type: [mongoose.Schema.ObjectId],
    required: true,
  },
  posts: {
    type: [mongoose.Schema.Post],
    required: false,
  },
  post_date: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  agreed: {
    type: [Boolean],
    required: true,
  }
});

eventSchema.methods.makePosts = function () {
  const event = this;
  event.users.forEach((user) => {
    User.findOne({ username: user.username })
      .then((user) => {
        oa.post(
          'https://api.twitter.com/1.1/statuses/update.json',
          user.token,
          user.tokenSecret, { status: 'Jerry is SO wett' },
          (test) => {
            res.send(test);
          }
        )
      }).catch(e => res.send(e));
  })
};

const Event = mongoose.model('Event', eventSchema);



module.exports = Event;
