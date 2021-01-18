const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
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
  createdAt: {
    type: Datet,
    default: Date.now(),
  },
});

// Export model user with userSchema
module.exports = mongoose.model("user", UserSchema);
