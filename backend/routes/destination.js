const express = require("express");
const router = express.Router();
const Destination = require("../models/locations");

router.get("/destination", async (req, res) => {
  var { from, to, departing_time } = req.body;

  var destination = await Destination.find({
    from: from,
    to: to,
    departing_time: departing_time,
  });
  if (destination && destination.length > 0) {
    res.status(200).json({
      message: "Sucess",
      destination: destination,
    });
  } else {
    res.status(400).json({
      message: "Not found",
    });
  }
});

module.exports = router;
