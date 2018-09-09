const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const tagsSchema = new Schema({
  _id: {
    'type': String,
    'default': shortid.generate
  },
  name: String,
  created: Number,
  modified: Number
});

module.exports = mongoose.model('tags', tagsSchema);
