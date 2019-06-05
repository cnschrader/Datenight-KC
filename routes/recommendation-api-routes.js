var db = require("../models");

// var passport = require("passport-local");



module.exports = function(app) {
  app.get("/api/recommendations", function(req, res) {
    db.Recommendation.findAll({
    }).then(function(dbRecommendation) {
      res.json(dbRecommendation);
    });
  });

  app.post("/api/recommendations", function(req, res) {
    db.Recommendation.create(req.body)
      .then(function(dbRecommendation) {
      res.json(dbRecommendation);
    });
  });

  app.delete("/api/recommendations/:id", function(req, res) {
    db.Recommendation.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecommendation) {
      res.json(dbRecommendation);
    });
  });

  app.put("/api/recommendations/", function(req, res) {
    db.Recommendation.update(
      req.body, 
      { 
        where: {
          id: req.body.id
        }
      }).then(function(dbRecommendation) {
      res.json(dbRecommendation);
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
