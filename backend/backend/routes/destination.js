const express = require("express");
const router = express.Router();
const Destination = require("../models/locations");

router.get("/destination", async (req, res) => {
  var { from, to, departing_time } = req.query;

  var dest = await Destination.find({
    from: from,
    to: to,
    departing_time: departing_time,
  });
  if (dest && dest.length > 0) {
      
    res.status(200).json({
      message: "Sucess",
      to: dest[0].to,
      from :  dest[0].from,
      departing : dest[0].departing_time,
      bus : dest[0]._doc.bus
    });
    // console.log(destination[0].bus)
    // console.log(destination[0].to)
  } else {
    res.status(404).json({
      message: "Not found",
    });
  }
});

module.exports = router;
