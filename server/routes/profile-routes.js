const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(req.user);
});

module.exports = router;
