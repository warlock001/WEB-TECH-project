const express = require("express");
const router = express.Router();
const DeleteBooking = require("../models/passenger");

router.post("/delete", async (req, res) => {
  var email = req.query.email;
  if (email !== null || email !== undefined) {
    var booking = await DeleteBooking.remove({
      email: email,
    });
    res.status(200).json({
      message: `Booking of member holding email : ${email} deleted`,
      booking: booking,
    });
  } else {
    res.status(400).json({
      message: "Invalid cnic number",
      booking: booking,
    });
  }
});
module.exports = router;
