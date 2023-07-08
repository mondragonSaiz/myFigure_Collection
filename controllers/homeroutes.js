const { Sequelize } = require('sequelize');
const router = require('express').Router();
const { Users } = require('../models');

router.get('/', (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    const newUserDBData = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // console.log(newUserDBData);
    // res.status(200).json(newUserDBData);
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user = newUserDBData.username;
      req.session.user_id = newUserDBData.id;

      res.status(200).json(newUserDBData);
      console.log('response sent');
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
