var db = require("../models");
var Sequelize = require("sequelize");

var passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // console.log(req.user, "this is an authenticated user")
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUsers) {
      console.log("user-api-routes name= " + req.body.name);
      // res.redirect(307, "/login");
      res.json(dbUsers);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  
  app.get("/api/users", function(req, res) {
    db.Users.findAll({
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      },
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.Users.create(req.body)
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  app.put("/api/users/:id", function(req, res) {
    db.Users.update({
      scores: JSON.stringify(req.body)
    }, {
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
      console.log("heyhey");
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
