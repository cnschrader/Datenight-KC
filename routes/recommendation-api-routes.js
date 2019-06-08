var db = require("../models");





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


