const router = require('express').Router();
const Project = require('../models/project-model');
const { GUEST } = require('../consts');

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

  if (!req.user || req.user.id !== req.user) {
    console.log('creating new of other user');
    createNew(req, (project) => {
      res.send(project);
    });
    return;
  }

  Project.updateOne({
    _id: req.body.id
  }, req.body).then((project) => {
    res.send(project);
  });
});

router.post('/', (req, res) => {
  new Project({
    name: req.body.name,
    userId: req.user? req.user.id : GUEST,
    html: req.body.html,
    css: req.body.css,
    js: req.body.js
  }).save().then((project) => {
    res.send(project);
  });
});

function createNew(req, cb) {
  new Project({
    name: req.body.name,
    userId: req.user? req.user.id : GUEST,
    html: req.body.html,
    css: req.body.css,
    js: req.body.js
  }).save().then((project) => {
    cb(project);
  });
}

module.exports = router;
