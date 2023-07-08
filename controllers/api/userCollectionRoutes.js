const route = require('express').Router();
const { Collection, Users, Figures } = require('../../models');
route.get('/', async (req, res) => {
  try {
    const figuresData = await Collection.findAll({
      where: { user_id: req.session.user_id },
    });

    console.log('IN myCollection route', figuresData);
    // Serialize data so the template can read it
    const figures = figuresData.map((figure) => figure.get({ plain: true }));
    console.log('WTF', figures);
    res.render('mycollection', { figures, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = route;
