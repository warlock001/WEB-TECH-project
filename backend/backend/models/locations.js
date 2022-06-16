const mongoose = require("mongoose");

const schema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departing_time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("locations", schema);
