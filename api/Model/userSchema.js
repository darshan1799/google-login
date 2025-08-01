const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  photoUrl: String,
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
