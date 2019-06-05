module.exports = function(sequelize, DataTypes) {
  var Recommendations = sequelize.define("Recommendations", {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    photo: DataTypes.STRING,
    type: DataTypes.STRING,
  });
  return Recommendations;
};
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    scores: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Users;
};
