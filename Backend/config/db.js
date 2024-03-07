const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('movie_db', 'root', '292311', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports={
    sequelize
  }

