const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
