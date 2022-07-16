const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  terms: {
    type: Boolean,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
