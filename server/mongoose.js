const mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://localhost/followThrough');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Successfully connected to mongodb');
});

module.exports = { mongoose };
