// initializing server using express
const express = require("express");
const server = express();

// telling project that we're going to use ENV variables
require("dotenv").config();

// configuration for body-parser to handle post requests
// no need to install a seperate package - its built in
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// installing body-parser as part of troubleshooting efforts
// settings from AstoLabs
const bodyParser = require("body-parser");
const bodyParserConfig = { extended: false };
server.use(bodyParser.urlencoded(bodyParserConfig));
server.use(bodyParser.json());

// using cors package in an attempt to fix cors issue
// server.use(cors());

// Add Access Control Allow Origin headers - attempting to fix cors
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// importing custom routes from routes folder (add all routes here)
const ProductRoutes = require("./routes/ProductRoutes.js");
const UserRoutes = require("./routes/UserRoutes.js");

// declaring and configuring mongoose
const mongoose = require("mongoose");
const dbURL = process.env.DB_URL;

const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

// connecting to mongoose DB
mongoose
  .connect(dbURL, dbConfig)
  .then(() => console.log("Successfully Connected to DB!"))
  .catch((err) => console.log(err));

// ~ START of Routes Sections ~ //
// adding an index / landing page route to server
server.get("/", function (req, res) {
  res.send("<h1>You have successfully landed on the Dubai Marketplace!</h1>");
});

server.get("/get", function (req, res) {
  res.send({ iReturn: "Great Success" });
});

// using the routes we created from routes folder
server.use("/product", ProductRoutes);
server.use("/user", UserRoutes);

// this is for testing that post requests are made successfully..
// Should be deleted once all routes and testing completed
server.post("/name", function (req, res) {
  const userDetails = {
    name: req.body.name,
    age: req.body.age,
  };
  res.send(
    `Welcome to the User page\n Your details are as follow\n name:${userDetails.name} and age: ${userDetails.age}`
  );
});
//~ END of Routes Section ~//

// Monkey buisness with CORS
// Add Access Control Allow Origin headers
// server.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "http://127.0.0.1:5500",
//     "http://localhost:3000",
//     "*"
//   );
// res.setHeader("Content-Type", "application/json");
// next();
// });

//~ END of Monkey buisness with CORS ~//
// More CORS monkey buisness
// const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// server.use(cors(corsOptions)); // Use this after the variable declaration
// server.use(cors());
// headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
// headers.append("Access-Control-Allow-Credentials", "true");

// server is listening to requests on port 3030 because frontend will be on 3000;
server.listen(process.env.PORT || 3030, function () {
  console.log("Server is running and listening on port 3030");
});
