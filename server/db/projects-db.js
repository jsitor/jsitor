const Project = require('../models/project-model');
const { GUEST } = require('../consts');

module.exports = {

  getAll() {
    return Project.find({});
  },

  getById(id) {
    return Project.findById(id);
  },

  create(user, project) {
    let timestamp = new Date().getTime();
    return new Project({
      name: project.name,
      description: project.description,
      userId: user ? user.id : GUEST,
      html: project.html,
      css: project.css,
      js: project.js,
      created: timestamp,
      modified: timestamp
    }).save();
  },

  update(id, project) {
    let timestamp = new Date().getTime();

    project.modified = timestamp;
    return Project.updateOne({
      _id: id
    }, project)
  },

  delete(id) {
    return Project.deleteOne({
      _id: id
    });
  }
}
