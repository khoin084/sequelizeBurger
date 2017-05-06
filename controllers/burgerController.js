var db = require("../models");
var path = require("path");

//console.log("currently in the burger-api-routes file");
module.exports = function(app) {
  
  app.get("/", function(req, res) {
    // Finding all-added burgers in the db
    db.Burger.findAll({}).then(function(burgersInDb) {
      res.render("burgers", {burgers: burgersInDb});
      //res.json(burgersInDb);
    });
  });

  app.get("/api/burgers", function(req, res) {
    // GET arbitrarily any buger by id
    db.Burger.findAll({}).then(function(foundAllBurgers) {
      res.json(foundAllBurgers);
    });
  });

  app.get("/api/burgers/:id", function(req, res) {
    // GET arbitrarily any buger by id
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(foundBurger) {
      res.json(foundBurger);
    });
  });

  app.post("/api/postedBurger", function(req, res) {
    //npm package body-parser to access Burger model properties.
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devour
    }).then(function(postedBurger) {
      console.log(typeof postedBurger.devour);
      res.redirect("/");
    });
  });

  app.post("/api/updatedBurger", function(req, res) {
    console.log("the id is: "+ req.body.burger_id[0]);
    db.Burger.update({
      devoured: true
      },
      {
        where: {
          id: req.body.burger_id
        }
      }).then(function(updatedResult) {
        //console.log("in the put");
        res.redirect("/");
      });
  });
};

