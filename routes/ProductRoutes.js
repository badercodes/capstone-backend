const express = require("express");
const router = express.Router();

// all routes need to go here GET/POST

// this the browse listing route where all proudct listings will be viewable
router.get("/", function (req, res) {
  res.send("You have landed on Products browse page");
});

// this is where the user goes to list a product
router.post("/list", function (req, res) {
  const newEntry = {
    category: req.body.category,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };
  res.send(newEntry);
});

// end of all routes

// export statement so that it can be imported in server.js
module.exports = router;
