const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const projectSchema = new Schema({
  _id: {
    'type': String,
    'default': shortid.generate
  },
  name: String,
  userId: String,
  html: String,
  css: String,
  js: String
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
