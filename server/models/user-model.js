const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const userSchema = new Schema({
  _id: {
    'type': String,
    'default': shortid.generate
  },
  username: String,
  googleId: String,
  thumbnail: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
