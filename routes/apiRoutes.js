var db = require("../models");

// var passport = require("passport-local");



module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Recommendations.findAll({}).then(function(dbRecommendations) {
      res.json(dbRecommendations);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Recommendations.create(req.body).then(function(dbRecommendations) {
      res.json(dbRecommendations);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Recommendations.destroy({ where: { id: req.params.id } }).then(function(dbRecommendations) {
      res.json(dbRecommendations);
    });
  });
};

// Passport authentication
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     Users.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));

// Passport authentication post method -- can change the path if need be when we get there.
// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
