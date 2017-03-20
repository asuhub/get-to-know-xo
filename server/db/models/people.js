const Sequelize = require('sequelize');
const db = require('../../db');

const People = db.define('people', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
    favoriteCity: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = People;
