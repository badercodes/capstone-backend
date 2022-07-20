const express = require("express");
const router = express.Router();
const ProductModel = require("../models/ProductModel");

// all routes need to go here GET/POST

// this the browse listing route where all product listings will be viewable
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
  ProductModel.create(newEntry)
    .then((response) => console.log(response))
    .then(() => res.send("Data sent to DB!"))
    .catch((error) => {
      console.log(error);
      console.log(req.body);
      res.send("There was an error submitting the data");
    });
  // res.send(newEntry);
});

// this where a user goes to update their product listing
// logic here needs to change to some sort of lookup and update
router.post("/update", function (req, res) {
  const newDocument = {
    category: req.body.category,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };
  // placeholder for now
  res.send(newDocument);
});

// end of all routes

// export statement so that it can be imported in server.js
module.exports = router;
