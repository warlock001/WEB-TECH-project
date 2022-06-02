const User = require("../models/users");
const authenticationRouter = require("express").Router();
const jwt = require("jsonwebtoken");

authenticationRouter.post("/login", async (req, res) => {
  const { emailAddress, password } = req.body;

  const existingUser = await User.find({
    email_address: emailAddress,
    password: password,
  });

  console.log(existingUser);

  if (existingUser && existingUser.length > 0) {
    if (existingUser[0].is_active) {
      const token = jwt.sign(
        JSON.stringify({ emailAddress: existingUser[0].email_address }),
        process.env.ACCESS_TOKEN_JWT
      );
      console.log(token);
      res.setHeader("x-auth-token", token);
      res.status(200).send({ emailAddress: existingUser[0].email_address });
    } else {
      res.status(400).send({
        errorMessage: `Requested user is not active in the system. Please contact system administrator`,
      });
    }
  } else {
    res.status(404).send({
      errorMessage: `No user found with provided email address ${emailAddress}`,
    });
  }
});

module.exports = authenticationRouter;
