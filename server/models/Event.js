const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  users: {
    type: [String],
    required: true,
  },
  posts: {
    type: [String],
    required: true,
  },
  post_date: {
    type: Date,
    required: true,
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
