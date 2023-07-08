const route = require('express').Router();
const userRoutes = require('./userRoutes');
const userCollection = require('./userCollectionRoutes');

route.use('/users', userRoutes);
route.use('/myCollection', userCollection);
module.exports = route;
