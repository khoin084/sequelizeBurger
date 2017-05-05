// reference standard lib sequelize
var Sequelize = require("sequelize");
// references our connection to the DB.
// var connection = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    }
    }, {timestamps:  true
    
  });
  return Burger;
};