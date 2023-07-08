const Users = require('./Users');
const Figures = require('./Figures');
const Collection = require('./Collection');

Users.hasMany(Collection, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Collection.hasOne(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { Users, Figures, Collection };
