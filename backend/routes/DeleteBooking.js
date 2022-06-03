const express = require("express");
const router = express.Router();
const DeleteBooking = require("../models/passenger");

router.post("/delete", async (req, res) => {
  var cnic = req.query.cnic;
  if (cnic !== null || cnic !== undefined) {
    var booking = await DeleteBooking.remove({
      cnic: cnic,
    });
    res.status(200).json({
      message: `Booking of member holding cnic number: ${cnic} deleted`,
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
