const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authenticationRouter = require("./routes/authentication");
const SignupRouter = require("./routes/signup");
const BookingRouter = require("./routes/booking");
const router = require("./routes/destination");
dotenv.config();

const app = express();

const corsOptions = {
  exposedHeaders: "x-auth-token",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(BookingRouter);
app.use(authenticationRouter);
app.use(SignupRouter);
app.use(router);

app.listen(process.env.API_PORT, (error) => {
  if (error) {
    console.error("Error Occurred while connecting to server: ", error);
  } else {
    console.log("Connected to Server Successfully!");

    console.log("Trying to connect to database server...");

    mongoose.connect(process.env.DB_CONNECTION_STRING, (dbError) => {
      if (dbError) {
        console.error("Error Occurred while connecting to database: ", dbError);
      } else {
        console.log("Connected to Database Successfully!");
      }
    });
  }
});
