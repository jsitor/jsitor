const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  userId: String,
  html: String,
  css: String,
  js: String
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
