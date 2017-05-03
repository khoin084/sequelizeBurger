module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devour: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    },
    time_stamp: {
      type: DataTypes.TIME,
      defaultValue: "Personal"
    }
  });
  return Burger;
};