const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },

  email_address: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  is_active: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("user_registrations", userSchema);
