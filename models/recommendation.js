module.exports = function(sequelize, DataTypes) {
  var Recommendation = sequelize.define("Recommendations", {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    photo: DataTypes.STRING,
    type: DataTypes.STRING,
  });
  return Recommendation;
};