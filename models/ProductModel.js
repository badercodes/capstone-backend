const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  category: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

// creating and exporting the model
const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
