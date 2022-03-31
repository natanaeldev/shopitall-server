const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
});

const User = model("User", userSchema);

module.exports = {
  User,
};
