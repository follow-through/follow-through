const mongoose = require('mongoose');
const Post = require('./Post');

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

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
