const router = require('express').Router();
const Project = require('../models/project-model');

router.get('/', (req, res) => {
  Project.find({}).then((projects) => {
    res.send(projects);
  });
});

router.get('/:id', (req, res) => {
  Project.findById(req.params.id).then((project) => {
    res.send(project);
  });
});

router.delete('/', (req, res) => {
  Project.deleteOne({
    _id: req.body.id
  }).then((project) => {
    res.send(project);
  });
});

router.put('/', (req, res) => {
  Project.updateOne({
    _id: req.body.id
  }, req.body).then((project) => {
    res.send(project);
  });
});

router.post('/', (req, res) => {
  new Project({
    name: req.body.name,
    userId: req.user.id,
    html: req.body.html,
    css: req.body.css,
    js: req.body.js
  }).save().then((project) => {
    res.send(project);
  });
});

module.exports = router;
