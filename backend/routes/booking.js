const express = require("express");
const router = express.Router();
const Passenger = require("../models/passenger");

router.post("/booking", async (req, res) => {
  var {
    title,
    first_name,
    last_name,
    email,
    date_of_birth,
    cnic,
    phone_num,
    to,
    from,
    departing_time,
    price,
  } = req.body;
  if (
    title == undefined ||
    first_name == undefined ||
    last_name == undefined ||
    email == undefined ||
    date_of_birth == undefined ||
    cnic == undefined ||
    phone_num == undefined ||
    to == undefined ||
    from == undefined ||
    departing_time == undefined ||
    price == undefined
  ) {
    res.status(400).json({
      message: "Incomplete credentials",
    });
  }
  const passenger = new Passenger({
    title: req.body.title,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth,
    cnic: req.body.cnic,
    phone_num: req.body.phone_num,
    to: req.body.to,
    from: req.body.from,
    departing_time: req.body.departing_time,
    price: req.body.price,
  });
  await passenger.save((err) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(200).json({
      message: `Passenger named ${passenger.first_name} saved`,
    });
  });
});

module.exports = router;
