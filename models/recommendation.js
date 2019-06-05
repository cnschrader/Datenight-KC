module.exports = function(sequelize, DataTypes) {
  var Recommendations = sequelize.define("Recommendations", {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    photo: DataTypes.STRING,
    type: DataTypes.STRING,
  });
  return Recommendations;
};