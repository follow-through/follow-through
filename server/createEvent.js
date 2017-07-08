const Post = require('./models/Post');
const Event = require('./models/Event');
const User = require('./models/User');
const { ObjectId } = require('mongoose').Types;
const { mongoose } = require('./mongoose');

// CREATE EVENTS WITH SAVED USERS
// const newEvent = new Event({
//   users: [
//     ObjectId('596153df3827332f9cf2e2cf'), // Jerry
//     ObjectId('5961539d8a9ad2289c0df653'), // Chris
//   ],
//   status: 'pending',
//   agreed: [false, false],
// });

// Event.create(newEvent)
//   .then(event => console.log(event))
//   .catch(e => console.log(e));


// CREATE POSTS
const newPostJerry = new Post({
  text: 'All these towels but I still cant get dry.  Was fun @amori93.',
  ownerId: ObjectId('596153df3827332f9cf2e2cf'),
  eventId: ObjectId('5961542d933efc06b4b52cb5'),
});

const newPostChris = new Post({
  text: 'Had a great time at the water park with @jerryjong today!',
  ownerId: ObjectId('5961539d8a9ad2289c0df653'),
  eventId: ObjectId('5961542d933efc06b4b52cb5'),
});

// Post.create(newPostPete)
//   .then(post => console.log(post))
//   .catch(e => console.log(e));

// Post.create(newPostChris)
//   .then(post => console.log(post))
//   .catch(e => console.log(e));


// ADD POST IDS TO THE EVENT
Event.findByIdAndUpdate('5961542d933efc06b4b52cb5', {
    posts: [newPostJerry, newPostChris]
  })
  .then(event => console.log(event))
  .catch(e => console.log(e));



// TEST WHAT OBJECT ID RETURNS
// Post.findOne({ownerId: '595ffaf7d05ca11ad4ca59a8'})
//   .then(post => console.log(post.eventId))
//   .catch(e => console.log(e));


// User.findOneAndUpdate({ _id: '596121e08f4afe36f8518b93' })
