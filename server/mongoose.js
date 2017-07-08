const mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://jerryjong:codesmith123@ds151702.mlab.com:51702/follow-through');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Successfully connected to mongodb');
});

module.exports = { mongoose };
