const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.status(200).json({
    message: "Hello world!",
  });
});

app.listen(PORT, async function () {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Server is running on port ${PORT} and DB connected`);
  } catch (e) {
    throw new Error("Couldn't connect or Start server " + e.message);
  }
});
