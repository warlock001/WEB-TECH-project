const express = require("express");
const SignupRouter = express.Router();
const User = require("../models/users");

SignupRouter.post("/register", async (req, res) => {
  var {
    first_name,
    last_name,
    email_address,
    mobile_number,
    password,
    confirm_password,
  } = req.body;
  if (
    first_name == undefined ||
    last_name == undefined ||
    email_address == undefined ||
    mobile_number == undefined ||
    password == undefined ||
    confirm_password == undefined
  ) {
    res.status(400).json({
      message: "Incomplete credentials",
    });
  } else if (password != confirm_password) {
    res.status(400).json({
      message: "Password does not match",
    });
  } else {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      mobile_number: req.body.mobile_number,
      password: req.body.password,
      is_active: true,
    });
    await user.save((err) => {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(200).json({
        message: `User named ${user.first_name} registered`,
      });
    });
  }
});

module.exports = SignupRouter;
