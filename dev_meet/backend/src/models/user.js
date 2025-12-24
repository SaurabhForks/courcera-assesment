const { default: mongoose } = require("mongoose");
// Define the User schema
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  isMarried: {
    type: Boolean,
  },
});

// Create and export the User model
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
//or we can directly write
// module.exports = mongoose.Model("User", UserSchema);
