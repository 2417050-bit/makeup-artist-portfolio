const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  date: String,

  // NEW FIELD ADDED
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);