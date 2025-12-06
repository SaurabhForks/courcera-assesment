const mongoose = require("mongoose");
const UserSchma = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide email"],
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: [true, "please provide email"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchma);
