const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");


const Favorite = sequelize.define('Favorite', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posterUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = {Favorite}