const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");

// all routes need to go here GET/POST

router.get("/", function (req, res) {
  res.send("You landed on User route");
});

router.post("/add", function (req, res) {
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    terms: req.body.terms,
    picture: req.body.picture,
  };
  UserModel.create(newUser)
    .then((dbReturn) => {
      console.log(dbReturn);
      res.send("User data submitted successfully");
    })
    .catch((error) => {
      console.log(error);
      res.send("ERROR - User details not submitted");
    });
});

// end of all routes

// export statement so that it can be imported in server.js

module.exports = router;
