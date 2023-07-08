const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// New Sequelize model for Users
class Figures extends Model {}

Figures.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'figures',
  }
);
module.exports = Figures;

// figure_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'users',
//         key: 'id',
//       },
//     },
