const Sequelize = require('sequelize');
const db = require('../../db');

const People = db.define('people', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
    favoriteCity: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = People;
