// Dependencies
var express = require("express");
var burgers = require("../models/burger");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject.burger[0].burger_name);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body)
  burgers.create("burger_name", req.body.name, function (data) {
    console.log(data);
    res.json(data)
  })
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update("devoured = true", condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id=" + req.params.id;

  cat.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
