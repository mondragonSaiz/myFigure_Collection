const sequelize = require('../config/connection');

const { Users, Figures } = require('../models');

const figuresData = require('./figuresData.json');
const usersData = require('./usersData.json');

// Function to seed db
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const figures = await Figures.bulkCreate(figuresData, {
    individualHooks: true,
    returning: true,
  });

  const users = await Users.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
