const router = require('express').Router();
const Project = require('../models/project-model');
const projectsDb = require('../db/projects-db');

router.get('/', (req, res) => {
  projectsDb.getAll().then((projects) => {
    res.send(projects);
  });
});

router.get('/:id', (req, res) => {
  projectsDb.getById(req.params.id).then((project) => {
    res.send(project);
  });
});

router.delete('/', (req, res) => {
  projectsDb.delete(req.body.id).then((project) => {
    res.send(project);
  });
});

router.put('/', (req, res) => {
  projectsDb.getById(req.body.id)
    .then((project) => {

      if (project.userId !== req.user.id) {
        console.log('new');
        projectsDb.create(req.user, req.body).then((project) => {
          res.send(project);
        });
      } else {
        console.log('modified existing', req.body, Object.assign(project, req.body));
        projectsDb.update(req.body.id, Object.assign(project, req.body)).then((project) => {
          res.send(project);
        });
      }
    });
});

router.post('/', (req, res) => {
  projectsDb.create(req.user, req.body).then((project) => {
    res.send(project);
  });
});

module.exports = router;
