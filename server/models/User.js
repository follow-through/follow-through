const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  tokenSecret: {
    type: String,
    required: true,
  },
  events: {
    type: Array,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
