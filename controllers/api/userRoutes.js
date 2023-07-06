const route = require('express').Router();

route.get('/', (req, res) => {
  try {
    res.render('userHomepage');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = route;
