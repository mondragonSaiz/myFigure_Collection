const route = require('express').Router();
const { Figures, Collection } = require('../../models');

route.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
  } else {
    try {
      const figuresData = await Figures.findAll();

      console.log('IN userRoutes', figuresData);
      // Serialize data so the template can read it
      const figures = figuresData.map((figure) => figure.get({ plain: true }));
      res.render('userHomepage', { figures, logged_in: req.session.logged_in });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

route.post('/addToCollection', async (req, res) => {
  try {
    const body = req.body;
    console.log('BODY', body);
    const newFigureData = await Collection.create({
      id: req.body.location,
      name: req.body.name,
      saga: req.body.saga,
      type: req.body.type,
      image: req.body.image,
      year: req.body.year,
      user_id: req.session.user_id,
    });
    console.log('FIGURE DATA', newFigureData);
    res.status(200).json('Success addition');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = route;
